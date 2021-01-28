---
title: Manipulating Query String Parameters in the Upload Handler
page_title: Manipulating Query String Parameters in the Upload Handler - RadAsyncUpload
description: Check our Web Forms article about Manipulating Query String Parameters in the Upload Handler.
slug: asyncupload/functionality/manipulating-query-string-parameters-in-the-upload-handler
tags: manipulating,query,string,parameters,in,the,upload,handler
published: True
position: 6
---

# Manipulating Query String Parameters in the Upload Handler



This help article describes how you can add query string parameters to the uploading files and how you can get this value later.

## Manipulating Query String Parameters In The Upload Handler

As of Q3 2012 one can add string parameters to each uploading file in the **onClientFileUploading** client event by using the **set_queryStringParams()** method of the eventArgs parameter.

````ASP.NET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" MultipleFileSelection="Automatic" OnClientFileUploading="onClientFileUploading">
</telerik:RadAsyncUpload>
	         
````

````JavaScript
<script type="text/javascript">
    function onClientFileUploading(sender, args) {
        var obj = { first: 1, second: 2 };
        args.set_queryStringParams(obj);
    }
</script>  
````

These parameters can be retrieved after that in the some of the uploading processes in the Upload Handler as in the code below:

````C#	    
protected override IAsyncUploadResult Process(UploadedFile file, HttpContext context, IAsyncUploadConfiguration configuration, string tempFileName)
{
    var queryStringParam1 = context.Request.QueryString["first"];
    var queryStringParam2 = context.Request.QueryString["second"];
    SaveToDataBase(file, configuration, context, tempFileName, queryStringParam1, queryStringParam2);
    return CreateDefaultUploadResult<UploadedFileInfo>(file);
}
````

````VB.NET
Protected Overrides Function Process(file As UploadedFile, context As HttpContext, configuration As IAsyncUploadConfiguration, tempFileName As String) As IAsyncUploadResult
    Dim queryStringParam1 = context.Request.QueryString("first")
    Dim queryStringParam2 = context.Request.QueryString("second")
    SaveToDataBase(file, configuration, context, tempFileName, queryStringParam1, queryStringParam2)
    Return CreateDefaultUploadResult(Of UploadedFileInfo)(file)
End Function	
````

>note This functionality can be achieved only in IFrame and FileApi Upload Modules so if you want to use it in IE7,8,9 you should set the DisablePlugins property to true.
>

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Multiple File Selection]({%slug asyncupload/functionality/multiple-file-selection%})

 * [Uploaded Files Position]({%slug asyncupload/functionality/uploaded-files-position%})
