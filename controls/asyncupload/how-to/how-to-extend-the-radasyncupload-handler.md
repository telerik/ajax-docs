---
title: How to Extend the RadAsyncUpload handler
page_title: How to Extend the RadAsyncUpload handler | RadAsyncUpload for ASP.NET AJAX Documentation
description: How to Extend the RadAsyncUpload handler
slug: asyncupload/how-to/how-to-extend-the-radasyncupload-handler
tags: how,to,extend,the,radasyncupload,handler
published: True
position: 0
---

# How to Extend the RadAsyncUpload handler

## RadAsyncUpload custom handler

RadAsyncUpload's file handler can be inherited and extended to support custom functionality, for example, saving images directly to a database, without using temporary folder.

>caution The custom handler class should inherit from the **AsyncUploadHandler** one.
>


### Override the Process method

One can override the Process method which has the following signature:

````C#
protected override IAsyncUploadResult Process(UploadedFile file, 
	HttpContext context, 
	IAsyncUploadConfiguration configuration, 
	string tempFileName)			
````
````VB.NET
Protected Overrides Function Process(ByVal file As UploadedFile, 
									 ByVal context As HttpContext, 
									 ByVal configuration As IAsyncUploadConfiguration, 
									 ByVal tempFileName As String) As IAsyncUploadResult
	
End Function	
````

UploadedFile is the file that is currently processed.

* HttpContext is the current HttpContext, since the handler implements the IRequiresSessionState interface the Session object is available as well.

* Configuration This is class that implements the IAsyncUploadConfiguration interface and by default has the following properties:

1. TargetFolder

1. TempTargetFolder

1. MaxFileSize

1. TimeToLive

* TempFileName is the uploaded file's temporary name.

As you may have noticed, the return type of the method is of type interface - IAsyncUploadResult. The reason for this is that if one want to return custom information they can create class that implements IAsyncUploadResult, populate it with the **CreateUploadResult\<T\>** method, set any custom added properties and then return it. The returned class is serialized and sent to the server. This means that one will be able to access it in the FileUploaded server-side event. Example:

````C#
protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{   
	SampleAsyncUploadResult result = e.UploadResult as SampleAsyncUploadResult;
} 			
````
````VB.NET
Protected Sub RadAsyncUpload1_FileUploaded(ByVal sender As Object, ByVal e As FileUploadedEventArgs)
    Dim result As SampleAsyncUploadResult = TryCast(e.UploadResult, SampleAsyncUploadResult)
End Sub	
````

The other way around is also possible, to send information from the page to the handler. The approach is pretty much the same, object that implements the IAsyncUploadConfiguration should be set to the RadAsyncUpload's UploadConfiguration property. The config object can be obtained using the **CreateDefaultUploadConfiguration\<T\>** method that is provided by RadAsyncUpload. The object passed to this generic method should implement the IAsyncUploadConfiguration interface. After that, the object is serialized and sent to the handler with each request. Example:

````C#
protected void Page_Load(object sender, EventArgs e) 
{
    // Populate the default (base) upload configuration into an object of type SampleAsyncUploadConfiguration      
    SampleAsyncUploadConfiguration config = RadAsyncUpload1.CreateDefaultUploadConfiguration<SampleAsyncUploadConfiguration>(); 
    // Populate any additional fields      
    config.UserID = 1;
    // The upload configuration will be available in the handler      
    RadAsyncUpload1.UploadConfiguration = config;
}			
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    'Populate the default (base) upload configuration into an object of type 
    SampleAsyncUploadConfiguration Dim config As SampleAsyncUploadConfiguration = RadAsyncUpload1.CreateDefaultUploadConfiguration(Of SampleAsyncUploadConfiguration)()
    'Populate any additional fields 
    config.UserID = 1
    'The upload configuration will be available in the handler 
    RadAsyncUpload1.UploadConfiguration = config
End Sub
````

Then, in the handler, the sent information can be obtained in the following way:

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
````VB.NET	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    ' Populate the default (base) upload configuration into an object of type SampleAsyncUploadConfiguration
    Dim config As SampleAsyncUploadConfiguration = RadAsyncUpload1.CreateDefaultUploadConfiguration(Of SampleAsyncUploadConfiguration)()

    ' Populate any additional fields
    config.UserID = 1

    ' The upload configuration will be available in the handler
    RadAsyncUpload1.UploadConfiguration = config
End Sub	
````


### Override the AddCacheDependency method

The **AddCacheDependency** method allows you to modify or even remove the default temporarily files removal callback. By default, the RadAsyncUpload deletes after some time those temporary files, that are not saved to the target folder. That time could be set using the **TemporaryFileExpiration** property (by default it is set to 4 hours). In order to leave temporary files instead of deleting them, you could simply store the file path in cache and leave out the **CacheItemRemovedCalback** in the override of the **AddCacheDependency** method: 

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
````VB.NET
Protected Overrides Sub AddCacheDependency(context As HttpContext, tempFileName As String, timeToLive As TimeSpan, fullPath As String)
	If context.Cache.Get(tempFileName) Is Nothing Then
		context.Cache.Insert(tempFileName, fullPath)
		' Instead of the predefined
		' context.Cache.Insert(tempFileName, fullPath, Nothing, DateTime.Now.Add(timeToLive), TimeSpan.Zero, CacheItemPriority.NotRemovable, RemovedCallback)
	End If
End Sub
````


### Override the CheckOriginalFileNameForInvalidChars method

By default the **CheckOriginalFileNameForInvalidChars** verifies given File Name against the [Microsoft's Naming Convention](http://msdn.microsoft.com/en-us/library/windows/desktop/aa365247%28v=vs.85%29.aspx#naming_conventions). If you need to extend for some reason this validity check, you could do it by overriding this method:

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
````VB.NET
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


### Override the ChangeOriginalFileName method

On some operating systems like [MAC OS and Linux]({%slug asyncupload/how-to/how-to-upload-files-from-mac-or-linux%}) it is possible to have file names, which are invalid for the Windows File System. File names may contain special characters or might not be in accordance with the [Microsoft's Naming Convention.](http://msdn.microsoft.com/en-us/library/windows/desktop/aa365247%28v=vs.85%29.aspx#naming_conventions) This makes file uploading impossible. That's why to upload a file with such invalid name we have to rename it before the uploading takes place. By overriding **ChangeOriginalFileName** method we could implement this custom renaming logic.

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
````VB.NET
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

 * [Custom Hanlder demo](http://demos.telerik.com/aspnet-ajax/upload/examples/async/imageuploader/defaultcs.aspx?product=asyncupload)
 
 * [Server-side Programming]({%slug asyncupload/server-side-programming/overview%})

 