---
title: AsyncUpload Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: asyncupload/overview
tags: overview
published: True
position: 0
---

# AsyncUpload Overview



## General Information

__RadAsyncUpload__ offers *asynchronous upload* capability while maintaining the look of the regular __RadUpload__ control. The upload process requires that the files are uploaded to a custom handler and not to the hosting page. Files are stored in a temporary location *until a postback* occurs. The temporary location is cleaned-up automatically.

Internally, __RadAsyncUpload__ can choose between four modules for uploading - File API, IFrame, Flash and Silverlight. The module with higher priority is File API. The module with highest priority is File API. If the browser does not support File API that module is automatically changed to Silverlight. If there is no Silverlight installed on the client machine, __RadAsyncUpload__ will utilize the Flash module. If there is no Flash as well, __RadAsyncUpload__ will use the IFrame module, which is supported out of the box on all browsers.

The control *supports web farm* scenarios. Upload progress is available in this scenario as long as Flash or Silverlight is installed on the client machine.

![Overview](images/asyncupload-overview.png)

## Temporary Files

__RadAsyncUpload__ relies on saving temporary files to work. When posted, files are saved to the designated temp folder (__App_Data/RadUploadTemp__ by default) with unique names. Once a postback occurs the __RadAsyncUpload__ fires the __OnFileUploaded__ event for each file. The target file is passed as part of the arguments to the event and can be set as either valid (default) or invalid. After the events fire, all files marked as valid are automatically saved to the __TargetFolder__ if it’s set.

Finally, all processed temporary files are deleted. Temporary files are also deleted after a set amount of time defined by the __TemporaryFileExpiration__ property which can be set seperately to a __RadAsyncUpload__control as well as globally in the web.config:

>note With the release of __Q1 2011 SP2 RadAsyncUpload__ supports setting the temporary folder globally in the appSettings section of the web.config.
> __< add key="Telerik.AsyncUpload.TemporaryFolder" value="[path_to_the_temporary_folder]" />__ 
>The path can be relative or absolute.
>


## Validation

Validation for __RadAsyncUpload__ differs from validation in __RadUpload__as it is now possible to validate size on the client, as long as the __File API__ upload module is used or there is Silverlight or Flash installed on the client's browser. If the validation fails, __RadAsyncUpload__ will fire __OnClientValidationFailed__.

## Web Farms

In web farms, each server will need to use the *same MachineKey* that __RadAsyncUpload__ uses for encryption. Most web farms should already have their MachineKeys synchronized as this is the recommended approach for web farm deployment.

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

 * [RadAsyncUpload vs. RadUpload for ASP.NET AJAX]({%slug asyncupload/radasyncupload-vs-radupload%})

 * [RadAsyncUpload Modules]({%slug asyncupload/upload-modules%})

 * [Online Demos](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx)
