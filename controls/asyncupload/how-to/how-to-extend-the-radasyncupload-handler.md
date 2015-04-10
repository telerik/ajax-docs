---
title: How to Extend the RadAsyncUpload handler
page_title: How to Extend the RadAsyncUpload handler | UI for ASP.NET AJAX Documentation
description: How to Extend the RadAsyncUpload handler
slug: asyncupload/how-to/how-to-extend-the-radasyncupload-handler
tags: how,to,extend,the,radasyncupload,handler
published: True
position: 0
---

# How to Extend the RadAsyncUpload handler



## RadAsyncUpload custom handler



RadAsyncUpload's file handler can be inherited and extended to support custom functionality, for example, saving images directly to a database, without using temporary folder.

>caution The custom handler class should inherit from the __AsyncUploadHandler__ one.
>


One can override the Process method which has the following signature:



````C#
	     
		protected override IAsyncUploadResult Process(UploadedFile file, HttpContext context, IAsyncUploadConfiguration configuration, string tempFileName)
				
````
````VB.NET
	
	    Protected Overrides Function Process(ByVal file As UploadedFile, ByVal context As HttpContext, ByVal configuration As IAsyncUploadConfiguration, ByVal tempFileName As String) As IAsyncUploadResult
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

As you may have noticed, the return type of the method is of type interface - IAsyncUploadResult. The reason for this is that if one want toreturn custom information they can create class that implements IAsyncUploadResult, populate it with the __CreateUploadResult<T>__method, set any custom added properties and then return it. The returned class is serialized and sent to the server. This means that one will be able to access it in the FileUploaded server-side event. Example:



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


The other way around is also possible, to sent information from the page to the handler. The approach is pretty much the same, object that implements theIAsyncUploadConfiguration should be set to the RadAsyncUpload's UploadConfiguration property. The config object can be obtained using the __CreateDefaultUploadConfiguration<T>__ method that is provided by RadAsyncUpload. The object passed to this generic method should implement the IAsyncUploadConfiguration interface. After that, the object is serialized and sent to the handler with each request. Example:





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
	        ' Populate the default (base) upload configuration into an object of type 
	        SampleAsyncUploadConfiguration Dim config As SampleAsyncUploadConfiguration = RadAsyncUpload1.CreateDefaultUploadConfiguration(Of SampleAsyncUploadConfiguration)()
	        ' Populate any additional fields 
	        config.UserID = 1
	        ' The upload configuration will be available in the handler 
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


# See Also

 * [Custom Hanlder demo](http://demos.telerik.com/aspnet-ajax/upload/examples/async/imageuploader/defaultcs.aspx?product=asyncupload)
