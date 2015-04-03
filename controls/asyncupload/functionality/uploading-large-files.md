---
title: Uploading Large Files
page_title: Uploading Large Files | UI for ASP.NET AJAX Documentation
description: Uploading Large Files
slug: asyncupload/functionality/uploading-large-files
tags: uploading,large,files
published: True
position: 8
---

# Uploading Large Files



Sometimes you need to upload large files, but IIS prevents users from uploading files larger than 2 GB. You can upload files with a combined size larger than 2GB, but it requires some modifications in your application configuration files. Learn more on [how to upload large files in ASP.NET.](http://blogs.telerik.com/blogs/13-07-15/upload-large-files-asp-net-radasyncupload)

## Web.config Settings

In order to upload files larger than 2GB, you need to change the following attributes of the __<httpRuntime>__ tag in the __<system.web>__ section of the Web.config file.

1. __maxRequestLength__The __maxRequestLength__ attribute specifies the limit for the input stream buffering threshold, in KB (kilobytes). You can use this limit to prevent denial of service attacks that are caused, for example, by users posting large files to the server. The default value is 4096 (4 MB).To enable large file uploads you need to change the value of this attribute to the largest allowed combined file size for your application. If someone selects and uploads files with a total size larger than __maxRequestLength__, this will result in a "Page not found" error. __RadAsyncUpload__does not provide a way to handle this error.

>note The __MaxFileSize__ property of the __RadAsyncUpload__ control specifies the maximum size for each of the uploaded files in bytes.
>


1. __executionTimeout__The __executionTimeout__ attribute specifies the maximum number of seconds a request is allowed to be executed before being automatically shut down by ASP.NET – the default time is __110__ seconds. If a request takes longer to execute, an exception will be thrown.To enable large file uploads, which can take large periods of time, you should increase the value of this property.You can find more information about the __httpRuntime__ configuration in the following MSDN article: [http://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx](http://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx).

## How to Modify Web.config

To make modifications to your application for large file uploads, you need to:

1. Open the __Solution Explorer__, navigate to the application __Web.config__ file and open it.

1. Under the __<configuration>__ element, locate the __<system.web>__ element. Add it if it does not exist.

1. Under the __<system.web>__ element, locate the __<httpRuntime>__ element. Add it if it does not exist.

1. In the __<httpRuntime>__ element, locate the __maxRequestLength__ and __executionTimeout__ attributes. If they do not exist, add them.

Modify the configuration file to allow uploads of files up to 100MB and upload periods up to 1 hour:

````XML
	    <configuration>
	    ...
	        <system.web>
	
	          <httpRuntime maxRequestLength="102400" executionTimeout= "3600" />
	          ...
	        </system.web>
	    </configuration>
````



>caution The configuration file sections and attributes are __case sensitive__ . This means that the sections and attributes below will be incorrect if written using a case other than shown.
>


## Settings for IIS7

1. Add these lines in the Web.config file:

````XML
	    <system.webserver>
	    ...
	    <security >
	        <requestFiltering>
	            <requestLimits maxAllowedContentLength="1024000000" />
	        </requestFiltering>
	    </security>
	    </system.webserver>
````



1. Open the file __C:\Windows\System32\inetsrv\config\applicationHost.config__ and find the line:<section name="requestFiltering" overrideModeDefault="Deny" />

1. Change the __overrideModeDefault__ property from "Deny" to __Allow__. So now the line should look like:<section name="requestFiltering" overrideModeDefault="Allow" />

## Modules Information

As of Q2 2013, you can use __File API__[module]({%slug asyncupload/upload-modules%}) of __RadAsyncUpload__ to upload files that are larger than __2GB__ when the upload is preformed with chunks. Before that it was only possible in __Silverlight__ and __Flash__ modules.

When you use the __IFrame__ upload module, you can upload files with a combined size of up to 2GB, but it requires some modifications in your application configuration files connected with specifying the limit for the input stream buffering threshold.

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Uploaded Files Position]({%slug asyncupload/functionality/uploaded-files-position%})

 * [Methods and Properties]({%slug asyncupload/server-side-programming/overview%})
