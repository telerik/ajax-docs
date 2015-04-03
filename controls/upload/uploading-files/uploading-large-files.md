---
title: Uploading Large Files
page_title: Uploading Large Files | UI for ASP.NET AJAX Documentation
description: Uploading Large Files
slug: upload/uploading-files/uploading-large-files
tags: uploading,large,files
published: True
position: 1
---

# Uploading Large Files



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


You can upload files with a combined size of up to 2GB, but it requires some modifications in your application configuration files.

>caution The configuration file sections and attributes are __case sensitive__ . This means that the sections and attributes below will be incorrect if written using a case other than shown.
>


## Web.config settings

The following attributes can be assigned to the __<httpRuntime>__ tag in the __<system.web>__ section of the __Web.config__ file.

## maxRequestLength

Specifies the limit for the input stream buffering threshold, in __KB__. This limit can be used to prevent denial of service attacks that are caused, for example, by users posting large files to the server. The default value is __4096__ (4 MB).

To enable large file uploads you need to change the value of this attribute to the largest allowed combined file size for your application. If someone selects and uploads files with total size larger than __maxRequestLength__, this will result in a "Page not found" error (which is the default error of the Framework). __RadUpload__does not provide a way for handling this error.

>note The __MaxFileSize__ property of the __RadUpload__ control specifies the maximum size for each of the uploaded files in __bytes__ .
>


## executionTimeout

Specifies the maximum number of seconds that a request is allowed to execute before being automatically shut down by ASP.NET. The value of this setting is ignored in __debug__ mode. The default in .NET Framework 2.0 is __110____seconds__. In the .NET Framework 1.0 and 1.1, the default is __90____seconds__.

To enable large file uploads, which can take large periods of time, increase the value of this property.

You can find more information about the __httpRuntime__ configuration in the following MSDN article: [http://msdn2.microsoft.com/en-us/library/e1f13641.aspx](http://msdn2.microsoft.com/en-us/library/e1f13641.aspx).

## How to modify web.config

To make the above modifications to your application for large file uploads you need to:

1. Open the __Solution Explorer__, navigate to the application __web.config__ file and open it.

1. Under the __<configuration>__ element locate the __<system.web>__ element. Add it if it does not exist.

1. Under the __<system.web>__ element locate the __<httpRuntime>__ element. Add it if it does not exist.

1. In the __<httpRuntime>__ element locate the __maxRequestLength__ and __executionTimeout__ attributes. If they do not exist, add them and set their values:

````XML
	    <httpRuntime maxRequestLength="102400" executionTimeout="3600" />
````



The configuration, allowing uploads of files up to 100MB and upload periods up to 1 hour, should look like the following:

````XML
	    <configuration>
	    ...
	        <system.web>
	
	          <httpRuntime maxRequestLength="102400" executionTimeout= "3600" />
	          ...
	        </system.web>
	    </configuration>
````



## Settings for IIS7

* Add these lines in the __web.config__ file:

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



* Open the file C:\Windows\System32\inetsrv\config\__applicationHost.config__ and find the line:<section name="requestFiltering" overrideModeDefault="Deny" />

* Set the __overrideModeDefault__ property to __Allow__. So now the line should look like:<section name="requestFiltering" overrideModeDefault="Allow" />

## Machine.config settings

The following attributes can be assigned in the __<processModel>__ element of the __machine.config__ file. They must be set at the machine level, not the application level in web.config.

>caution These properties affect any response deadlock in ASP.NET, not just the application that uploads large files, and should be used with caution.
>


## responseDeadlockInterval

Specifies the time interval, in the format HH:MM:SS, after which the process is restarted if the following conditions are met:

* There are queued requests.

* There has not been a response during this interval. The default is 3 minutes. To allow very large uploads, you may have to increase this value.

## responseRestartDeadlockInterval

Specifies the time, in the format HH:MM:SS, that must elapse after the last restart to cure a deadlock before the process is restarted to cure a deadlock again. This prevents thrashing on processes that require a relatively long startup time. The default is 9 minutes. To allow very large uploads, you may have to increase this value.

## Other settings

## AspMaxRequestEntityAllowed

Sometimes when the application is hosted on __Windows Server 2003__, the above settings do not seem to have effect. In this case you must modify the IIS metadata file, particularly the __AspMaxRequestEntityAllowed__ property. You can find more information about that in the following KB article:

[http://www.telerik.com/support/kb/article/b454K-gth-b454T-cee.aspx](http://www.telerik.com/support/kb/article/b454K-gth-b454T-cee.aspx)

## Microsoft URLScan

If you are using [Microsoft URLScan](http://www.microsoft.com/technet/security/tools/urlscan.mspx) you will need to modify its __urlscan.ini__ and set __MaxAllowedContentLength__ to an appropriate value.

## Third party network monitoring software

If you are using any third party network monitoring software you should ensure that it is properly configured to allow file uploads with the needed length and content. For more information please, contact your network administrator.
