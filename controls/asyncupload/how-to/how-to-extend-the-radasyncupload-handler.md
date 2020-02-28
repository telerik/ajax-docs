---
title: How to Extend the RadAsyncUpload handler
page_title: How to Extend the RadAsyncUpload handler | RadAsyncUpload for ASP.NET AJAX Documentation
description: How to Extend the RadAsyncUpload handler
slug: asyncupload/how-to/how-to-extend-the-radasyncupload-handler
tags: how,to,extend,the,radasyncupload,handler
published: True
position: 0
---

# How to Create a Custom Handler for RadAsyncUpload

This article explains how to create your own file upload handler to be used through RadAsyncUpload. Such a handler allows you to implement features specific to your use case; direct storage of files to a desired location like a database; advanced security measures specific to the application like tying uploads to user session, scanning files before saving them to the disk, throttling uploads and so on.

This article contains the following sections:

* [Create a Custom Handler](#create-a-custom-handler)
* [Advanced Features of the Handler](#advanced-features-of-the-handler)

>tip You can find an example implementation in the following Live Demo: [Custom HTTP Handler](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/imageuploader/defaultcs.aspx).

## Create a Custom Handler

To create a custom handler, you must inherit the built-in `AsyncUploadHandler` class and then implement the desired functionality (for example, saving images directly to a database, without using temporary folder).

1. Create a generic handler in your Web Application (for example, `myHandler.ashx`)

1. Make sure the class extends the `Telerik.Web.UI.AsyncUploadHandler` class

	**C#**

		public class myHandler : Telerik.Web.UI.AsyncUploadHandler
		{
		
		}

	**VB**

		Public Class myHandler
			Inherits Telerik.Web.UI.AsyncUploadHandler
		
		End Class

1. Override the `Process` method

	**C#**

		protected override IAsyncUploadResult Process(UploadedFile file, 
			HttpContext context, 
			IAsyncUploadConfiguration configuration, 
			string tempFileName)			

	**VB**

		Protected Overrides Function Process(ByVal file As UploadedFile, 
											 ByVal context As HttpContext, 
											 ByVal configuration As IAsyncUploadConfiguration, 
											 ByVal tempFileName As String) As IAsyncUploadResult
			
		End Function	

1. Set the path to the custom handler in the RadAsyncUpload through its `HttpHandlerUrl` property:

	**ASPX**

		<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" HttpHandlerUrl="~/myHandler.ashx"></telerik:RadAsyncUpload>

### Process Method Arguments and Usage

In the `Process` method, the arguments provide the following:

* `UploadedFile` is the file that is currently processed. You can use it to obtain the input stream, file name, extension and so on.

* `HttpContext` is the current `HttpContext`. Since the handler implements the `IRequiresSessionState` interface, the `Session` object is available as well.

* `Configuration` is a class that implements the `IAsyncUploadConfiguration` interface and, by default, has the following properties:

	* `TargetFolder`—the folder where RadAsyncUpload would have saved the file if the built-in handler is used, as provided by the developer.
	
	* `TempTargetFolder`—the temporary folder where RadAsyncUpload would have stored the file before saving it to the target folder, if the built-in handler is used, as provided by the developer.
	
	* `MaxFileSize`—the maximum file size set by the developer for the RadAsyncUpload.
	
	* `TimeToLive`—the time until the file is deleted from the temporary folder if the built-in handler were used.

* `TempFileName` is the uploaded file's temporary name. It is used by the built-in handler for the temporary folder only.

### Temporary Folder Usage

When a custom handler is used, the temporary folder is used as follows:

* File chunks are stored in it until the entire file is collected and passed to the `Process` method of the handler. The entire file is not saved to the temporary folder after that.

* Entire files (when chunk upload is disabled or when the file fits in a single chunk) go directly to the `Process` method of the handler and are not saved to the temporary folder. In such cases, the files are not stored to the hard disk of the server at all and remain in memory only.

* When a RadAsyncUpload instance initializes, it will write a test file (an empty file with the `RadUploadTestFile` name) to the temporary folder in its `PreRender` event. You can disable that by setting the control's `EnablePermissionsCheck` property to `false`.

Thus, to save files, you would usually use the `Process` method. If you are using the `FileUploaded event` to save files, you may get an error: [UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler).


## Advanced Features of the Handler

The custom handler inherits the built-in handler and you can use it to customize the behavior and information. Once you have the custom handler in place, you can amend it with the following features:

* [Send Custom Information to and From the Handler](#send-custom-information-to-and-from-the-handler)
* [Change Cache Dependency](#change-cache-dependency)
* [Custom File Name Validation](#custom-file-name-validation)
* [Accommodate Linux and MacOS File Names](#accommodate-linux-and-macos-file-names)



### Send Custom Information To and From the Handler

The `Process` method returns an interface—`IAsyncUploadResult`. You can use it to transmit custom information between the client and the server. For example, a User ID or other piece of application logic.

>note If you use this, see [Security - Custom Metadata]({%slug asyncupload-security%}#custom-metadata).

#### Send Information From the Handler to the Client

To return custom information to the client:

1. Create a class that implements `IAsyncUploadResult`. For example, `SampleAsyncUploadResult`.

1. Populate it with the `CreateDefaultUploadConfiguration<T>` method exposed by the RadAsyncUpload instance.

1. Set the desired custom values.

1. Return the created object.

>caption How to send information from the custom handler to the client

````C#
protected override IAsyncUploadResult Process(UploadedFile file, HttpContext context, IAsyncUploadConfiguration configuration, string tempFileName)
{
	// Populate the default (base) result into an object of type SampleAsyncUploadResult
	SampleAsyncUploadResult result = CreateDefaultUploadResult<SampleAsyncUploadResult>(file);
	
	//generate the custom information in the custom field
	result.CustomField = "some value";
	
	//return the data to the client
	return result;
}
````
````VB
Protected Overrides Function Process(file As UploadedFile, context As HttpContext, configuration As IAsyncUploadConfiguration, tempFileName As String) As IAsyncUploadResult
	' Populate the default (base) result into an object of type SampleAsyncUploadResult
	Dim result As SampleAsyncUploadResult = CreateDefaultUploadResult(Of SampleAsyncUploadResult)(file)

	'generate the custom information in the custom field
	result.CustomField = "some value"

	'return the data to the client
	Return result
End Function
````


>tip You can also use this approach to send meaningful error information from the custom handler to the browser. See the [How to Capture File Upload Errors with Custom Handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/how-to-capture-file-upload-errors-with-custom-handler "How to Capture File Upload Errors with Custom Handler") KB article.


Then, you can use this information on the page that was used to upload the file:

1. Subscribe to the `FileUploaded` event of the RadAsyncUpload.

1. Cast the `UploadResult` property of the event arguments object to your custom class.


>caption Consuming the custom information from the control event on the page

````C#
protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{   
	//SampleAsyncUploadResult is the custom class
	SampleAsyncUploadResult result = e.UploadResult as SampleAsyncUploadResult;
} 			
````
````VB
Protected Sub RadAsyncUpload1_FileUploaded(ByVal sender As Object, ByVal e As FileUploadedEventArgs)
	'SampleAsyncUploadResult is the custom class
    Dim result As SampleAsyncUploadResult = TryCast(e.UploadResult, SampleAsyncUploadResult)
End Sub	
````

#### Send Information to the Custom Handler

With the `IAsyncUploadConfiguration` interface you can also send information to the handler. To do that:

1. create an object that implements `IAsyncUploadConfiguration`.

1. Set it to the `UploadConfiguration` property of the RadAsyncUpload. You can obtain the configuration object from the `CreateDefaultUploadConfiguration<T>` method provided by RadAsyncUpload. 

Such an object is serialized and sent to the handler with each request.

>caption How to send custom information to the handler

````C#
protected void Page_Load(object sender, EventArgs e) 
{
    // Populate the default (base) upload configuration into an object of type SampleAsyncUploadConfiguration 
	// The custom configuration class name may vary in your application     
    SampleAsyncUploadConfiguration config = RadAsyncUpload1.CreateDefaultUploadConfiguration<SampleAsyncUploadConfiguration>(); 
    // Populate any additional fields      
    config.UserID = 1;
    // The upload configuration will be available in the handler      
    RadAsyncUpload1.UploadConfiguration = config;
}			
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    ' Populate the default (base) upload configuration into an object of type SampleAsyncUploadConfiguration
	' The custom configuration class name may vary in your application	
 	Dim config As SampleAsyncUploadConfiguration = RadAsyncUpload1.CreateDefaultUploadConfiguration(Of SampleAsyncUploadConfiguration)()
    ' Populate any additional fields 
    config.UserID = 1
    ' The upload configuration will be available in the handler 
    RadAsyncUpload1.UploadConfiguration = config
End Sub
````

Then, in the handler, the sent information can be obtained in the following way

1. Cast the `IAsyncUploadConfiguration` argument to your custom class

>caption Consuming the custom information from the handler

````C#
protected override IAsyncUploadResult Process(UploadedFile file, HttpContext context, IAsyncUploadConfiguration configuration, string tempFileName) 
{         
    int userID = -1;
    // You can obtain any custom information passed from the page via casting the configuration parameter to your custom class    
    var sampleConfiguration = configuration as SampleAsyncUploadConfiguration;    
    
    if (sampleConfiguration != null)    
    {       
        userID = sampleConfiguration.UserID;    
    }          
    // More code here.. 
}  		
````
````VB
Protected Overrides Function Process(file As UploadedFile, context As HttpContext, configuration As IAsyncUploadConfiguration, tempFileName As String) As IAsyncUploadResult
	Dim userID As Integer = -1
	' You can obtain any custom information passed from the page via casting the configuration parameter to your custom class    
	Dim sampleConfiguration = TryCast(configuration, SampleAsyncUploadConfiguration)

	If sampleConfiguration IsNot Nothing Then
		userID = sampleConfiguration.UserID
	End If
	' More code here.. 
End Function
````


### Change Cache Dependency

By default, RadAsyncUpload deletes the temporary files after some time, in case they are not saved to the target folder. You can set this time interval through the `TemporaryFileExpiration` property. The default is `4` hours.

Overriding the `AddCacheDependency` method allows you to modify or even remove the default temporary files removal callback. In order to leave temporary files instead of deleting them, you can store the file path in cache and leave out the `CacheItemRemovedCalback` in the override of the `AddCacheDependency` method.

For this to have effect, you must **not** override the `Process` method. This is equivalent to you using the built-in handler code, but only overriding the way the cache dependency is managed. Alternatively, in the `Process` override, call the base method to save the uploaded file to the temporary folder `base.Process(file, context, configuration, tempFileName);`.

>caption How to remove the default temporary files expiration

````C#
protected override void AddCacheDependency(HttpContext context, string tempFileName, TimeSpan timeToLive, string fullPath)
{
    if (context.Cache.Get(tempFileName) == null)
    {
        context.Cache.Insert(tempFileName, fullPath);
		// Instead of the predefined
		// context.Cache.Insert(tempFileName, fullPath, null, DateTime.Now.Add(timeToLive), TimeSpan.Zero, CacheItemPriority.NotRemovable, RemovedCallback);
    }
}
````
````VB
Protected Overrides Sub AddCacheDependency(context As HttpContext, tempFileName As String, timeToLive As TimeSpan, fullPath As String)
	If context.Cache.Get(tempFileName) Is Nothing Then
		context.Cache.Insert(tempFileName, fullPath)
		' Instead of the predefined
		' context.Cache.Insert(tempFileName, fullPath, Nothing, DateTime.Now.Add(timeToLive), TimeSpan.Zero, CacheItemPriority.NotRemovable, RemovedCallback)
	End If
End Sub
````


### Custom File Name Validation

By default, the `CheckOriginalFileNameForInvalidChars` verifies the File Name against the [Microsoft's Naming Convention](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247%28v=vs.85%29.aspx#naming_conventions). 

Overriding the `CheckOriginalFileNameForInvalidChars` method allows you to extend this validity check.

>caption Implement custom file name validation

````C#
protected override bool CheckOriginalFileNameForInvalidChars(string originalFileName)
{
	// Check if the fileName is a null value or an empty string
	bool fileNameIsNullOrEmpty = string.IsNullOrEmpty(originalFileName);
	// Check if the fileName contains invalid path characters
	bool fileNameHasInvalidPathCharacters = originalFileName.IndexOfAny(Path.GetInvalidFileNameChars()) > -1;
	// Check if the fileName contains "A" (or any other custom validation)
	bool fileNameContainsA = originalFileName.IndexOf("A") > -1;
	
	return (fileNameIsNullOrEmpty || fileNameHasInvalidPathCharacters || fileNameContainsA);
}
````
````VB
Protected Overrides Function CheckOriginalFileNameForInvalidChars(originalFileName As String) As Boolean
	' Check if the fileName is a null value or an empty string
	Dim fileNameIsNullOrEmpty As Boolean = String.IsNullOrEmpty(originalFileName)
	' Check if the fileName contains invalid path characters
	Dim fileNameHasInvalidPathCharacters As Boolean = originalFileName.IndexOfAny(Path.GetInvalidFileNameChars()) > -1
	' Check if the fileName contains "A" (or any other custom validation)
	Dim fileNameContainsA As Boolean = originalFileName.IndexOf("A") > -1

	Return (fileNameIsNullOrEmpty OrElse fileNameHasInvalidPathCharacters OrElse fileNameContainsA)
End Function
````


### Accommodate Linux and MacOS File Names

On some operating systems like [MAC OS and Linux]({%slug asyncupload/how-to/how-to-upload-files-from-mac-or-linux%}), it is possible to have file names which are invalid for the Windows File System. File names may contain special characters or might not be in accordance with the [Microsoft's Naming Convention.](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247%28v=vs.85%29.aspx#naming_conventions). This makes file uploading impossible for such files.

To upload a file with an invalid name, you must rename it before the uploading takes place. You can do that by overriding `ChangeOriginalFileName`.

>caption Change the file name to accommodate Linux and MacOS file names

````C#
protected override string ChangeOriginalFileName(string fileName)
{
    //Return the current name if there is no invalid character
    if (fileName.IndexOfAny(System.IO.Path.GetInvalidFileNameChars()) == -1)
    {
        return fileName;
    }
    else
    {
        //Escape invalid characters
        fileName = Regex.Replace(fileName, @"[^\w\.@-]", "", RegexOptions.None, TimeSpan.FromSeconds(1.5));
        //If all characters are invalid return underscore as a file name
        if (Path.GetFileNameWithoutExtension(fileName).Length == 0)
        {
            return fileName.Insert(0, "_");
        }
        //Else return the escaped name
        return fileName;
    }
}
````
````VB
Protected Overrides Function ChangeOriginalFileName(fileName As String) As String
    'Return the current name if there is no invalid character
    If fileName.IndexOfAny(System.IO.Path.GetInvalidFileNameChars()) = -1 Then
        Return fileName
    Else
        'Escape invalid characters
        fileName = Regex.Replace(fileName, "[^\w\.@-]", "", RegexOptions.None, TimeSpan.FromSeconds(1.5))
        'If all characters are invalid return underscore as a file name
        If Path.GetFileNameWithoutExtension(fileName).Length = 0 Then
            Return fileName.Insert(0, "_")
        End If
        'Else return the escaped name
        Return fileName
    End If
End Function
````



# See Also

 * [Live Demo: Custom Handler](https://demos.telerik.com/aspnet-ajax/upload/examples/async/imageuploader/defaultcs.aspx?product=asyncupload)
 
 * [Server-side Programming]({%slug asyncupload/server-side-programming/overview%})

 
