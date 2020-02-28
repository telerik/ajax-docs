---
title: Uploading Large Files
page_title: Uploading Large Files | RadAsyncUpload for ASP.NET AJAX Documentation
description: Uploading Large Files
slug: asyncupload/functionality/uploading-large-files
tags: uploading,large,files
published: True
position: 8
---

# Uploading Large Files



Sometimes you need to upload large files, but IIS prevents users from uploading files larger than 2 GB. You can upload files with a combined size larger than 2GB, but it requires some modifications in your application configuration files. Learn more on [how to upload large files in ASP.NET.](https://blogs.telerik.com/blogs/13-07-15/upload-large-files-asp-net-radasyncupload)

## Web.config Settings

In order to upload files larger than 2GB, you need to change the following attributes of the **\<httpRuntime\>** tag in the **\<system.web\>** section of the Web.config file.

**maxRequestLength** 
The **maxRequestLength** attribute specifies the limit for the input stream buffering threshold, in KB (kilobytes). You can use this limit to prevent denial of service attacks that are caused, for example, by users posting large files to the server. The default value is 4096 (4 MB).To enable large file uploads you need to change the value of this attribute to the largest allowed combined file size for your application. If someone selects and uploads files with a total size larger than **maxRequestLength**, this will result in a "Page not found" error. **RadAsyncUpload** does not provide a way to handle this error.

>note The **MaxFileSize** property of the **RadAsyncUpload** control specifies the maximum size for each of the uploaded files in bytes.
>


**executionTimeout**
The **executionTimeout** attribute specifies the maximum number of seconds a request is allowed to be executed before being automatically shut down by ASP.NET – the default time is **110** seconds. If a request takes longer to execute, an exception will be thrown.To enable large file uploads, which can take large periods of time, you should increase the value of this property.You can find more information about the **httpRuntime** configuration in the following MSDN article: [https://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx](https://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx).

## How to Modify Web.config

To make modifications to your application for large file uploads, you need to:

1. Open the **Solution Explorer**, navigate to the application **Web.config** file and open it.

1. Under the **\<configuration\>** element, locate the **\<system.web\>** element. Add it if it does not exist.

1. Under the **\<system.web\>** element, locate the **\<httpRuntime\>** element. Add it if it does not exist.

1. In the **\<httpRuntime\>** element, locate the **maxRequestLength** and **executionTimeout** attributes. If they do not exist, add them.

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

>caution The configuration file sections and attributes are **case sensitive**. This means that the sections and attributes below will be incorrect if written using a case other than shown.
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



1. Open the file **C:\Windows\System32\inetsrv\config\applicationHost.config** and find the line: \<section name="requestFiltering" overrideModeDefault="Deny" /\>

1. Change the **overrideModeDefault** property from "Deny" to **Allow**. So now the line should look like: \<section name="requestFiltering" overrideModeDefault="Allow" /\>

## Modules Information

As of Q2 2013, you can use **File API** [module]({%slug asyncupload/upload-modules%}) of **RadAsyncUpload** to upload files that are larger than **2GB** when the upload is preformed with chunks. Before that it was only possible in **Silverlight** and **Flash** modules.

When you use the **IFrame** upload module, you can upload files with a combined size of up to 2GB, but it requires some modifications in your application configuration files connected with specifying the limit for the input stream buffering threshold.

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Uploaded Files Position]({%slug asyncupload/functionality/uploaded-files-position%})

 * [Methods and Properties]({%slug asyncupload/server-side-programming/overview%})
