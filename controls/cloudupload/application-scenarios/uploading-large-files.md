---
title: Uploading Large Files
page_title: Uploading Large Files | UI for ASP.NET AJAX Documentation
description: Uploading Large Files
slug: cloudupload/application-scenarios/uploading-large-files
tags: uploading,large,files
published: True
position: 0
---

# Uploading Large Files



Sometimes users need to upload files larger than 4GB, but the IIS would prevent them to do so. You can allow users to upload files with a combined size larger than 4GB, but this requires some modifications in your application configuration files.

## Setting the Configuration File of the Application

In order to upload files larger than GB, you need to change the following attributes of the __<httpRuntime>__ tag in the __<system.web>__ section of the __Web.config__ file.

1. __maxRequestLength__The __maxRequestLength__ attribute specifies the limit for the input stream buffering threshold, in KB (kilobytes). You can use this limit to prevent denial of service attacks that are caused, for example, by users posting large files to the server. The default value is 4096 (4 MB).To enable large file uploads you need to change the value of this attribute to the largest allowed combined file size for your application. If someone selects and uploads files with a total size larger than __maxRequestLength__, this will result in a *"Page not found"* error. __RadCloudUpload__does not provide a way to handle this error.

>note The __MaxFileSize__ property of the __RadCloudUpload__ control specifies the maximum size of each of the uploaded files in bytes.
>


1. __executionTimeout__The __executionTimeout__ attribute specifies the maximum number of seconds a request is allowed to be executed before being automatically shut down by ASP.NET – the default time is __110__ seconds. If a request takes longer to execute, an exception will be thrown.To enable large file uploads, which can take large periods of time, you should increase the value of this property.You can find more information about the __httpRuntime__ configuration in the following MSDN article: [http://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx](http://msdn.microsoft.com/en-us/library/e1f13641%28v=vs.71%29.aspx).

## How to Modify the Configuration File of the Application

To make modifications to your application for large file uploads, you need to:

1. Open the __Solution Explorer__, navigate to the application __Web.config__ file and open it.

1. Under the __<configuration>__ element, locate the __<system.web>__ element. Add it if it does not exist.

1. Under the __<system.web>__ element, locate the __<httpRuntime>__ element. Add it if it does not exist.

1. In the __<httpRuntime>__ element, locate the __maxRequestLength__ and __executionTimeout__ attributes. If they do not exist, add them.

Modify the configuration file to allow uploads of files of up to 100MB and upload periods of up to 1 hour:

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

1. Add these lines in the __Web.config__ file:

````XML
	<system.webserver>
	    ...
	    <security>
	        <requestFiltering>
	            <requestLimits maxAllowedContentLength="1024000000" />
	        </requestFiltering>
	    </security>
	    </system.webserver>
````



1. Open the file __C:\Windows\System32\inetsrv\config\applicationHost.config__ and find the line:<section name="requestFiltering" overrideModeDefault="Deny" />

1. Change the __overrideModeDefault__ property from "Deny" to __Allow__. So now the line should look like:<section name="requestFiltering" overrideModeDefault="Allow" />
