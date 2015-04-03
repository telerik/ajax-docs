---
title: WebConfing Configuraton
page_title: WebConfing Configuraton | UI for ASP.NET AJAX Documentation
description: WebConfing Configuraton
slug: progressarea/webconfing-configuraton
tags: webconfing,configuraton
published: True
position: 7
---

# WebConfing Configuraton



In order to use [RadProgressArea]({%slug progressarea/getting-started%}),you need to add __RadProgressManager__ (as long as RadProgressArea) to yourpage and must register __RadUploadProgressHandler__ and__RadUploadHttpModule__ in your application __web.config__ file.

>note As of Q3 SP1 2008 (2008.3.1125), you can use the __SmartTag__ of the __RadProgressManager__ to add all settings.
>


>caution  __RadProgressManager__ displays error messages if it is unable to findRadUploadHttpModule. __RadUploadHttpModule__ is incompatible with the ASP.NETapplication trace and __RadUploadHttpModule__ is incompatible with other similarmodules that handle file uploads.
>




## Registration for IIS versions prior to version 7





* Register __RadUploadHttpModule__ - add the following line in the__<httpModules>__ section of your web.config file:

````XML
	    <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" />
````



now the __<httpModules>__ section is likely to look like this:

````XML
	    <httpmodules>  
	        <add name="ScriptModule" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />  
	        <!-- *******  Register the RadUploadModule for IIS prior to v.7  ****** -->  
	        <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" />
	    </httpmodules>
````



* Register __RadUploadProgressHandler__ - add the following line in the__<httpHandlers>__ section of your web.config file:

````XML
	    <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
	        <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler"
	            verb="*" validate="false" />
	    </pre>
````



now the __<httpHandlers>__ section is likely to look like this:

````XML
	    <httpHandlers>
	    <remove verb="*" path="*.asmx" />
	    <add verb="*" path="*.asmx" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	    <add verb="*" path="*_AppService.axd" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	    <add verb="GET,HEAD" path="ScriptResource.axd" type="System.Web.Handlers.ScriptResourceHandler, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
	        validate="false" />
	    <!-- *******  Register the RadUploadProgressHandler for IIS prior to v.7  ****** -->
	    <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler"
	        verb="*" validate="false" />
	    </httpHandlers>
````



>note It is not necessary the ashx page in the __path__ attribute above to exist, but you shouldensure that the framework is configured to skip the ASHX file existence check.
>


## Registration for IIS 7



* Register __RadUploadHttpModule__ - add the following line in the__<modules>__ section (within __<system.webServer>__ section)of your web.config file:

````XML
	    <!-- *******  Register the RadUploadModule for IIS 7  ****** -->
	    <add name="RadUploadModule" precondition="integratedMode" type="Telerik.Web.UI.RadUploadHttpModule" />
````



* Register __RadUploadProgressHandler__ - add the following line in the __<handlers>__section (within __<system.webServer>__ section) of your web.config file:

````XML
	    <!-- *******  Register the RadUploadProgressHandler for IIS 7  ****** -->
	    <add name="Telerik_RadUploadProgressHandler_ashx" verb="*" precondition="integratedMode"
	        path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" />
````



>note It is not necessary the ashx page in the __path__ attribute above to exist, but you should ensurethat the framework is configured to skip the ASHX file existence check.
>


Now the __<system.webServer>__ section could look like this:

````XML
	    <system.webserver>
	     <validation validateIntegratedModeConfiguration="false" />
	     <modules>
	       <add name="ScriptModule" preCondition="integratedMode" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	       <!-- *******  Register the RadUploadModule for IIS 7  ****** -->
	       <add name="RadUploadModule" preCondition="integratedMode" type="Telerik.Web.UI.RadUploadHttpModule" />
	     </modules>
	     <handlers>
	       <remove name="WebServiceHandlerFactory-Integrated" />
	       <add name="ScriptHandlerFactory" verb="*" path="*.asmx" preCondition="integratedMode" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	       <add name="ScriptHandlerFactoryAppServices" verb="*" path="*_AppService.axd" preCondition="integratedMode" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	       <add name="ScriptResource" preCondition="integratedMode" verb="GET,HEAD" path="ScriptResource.axd" type="System.Web.Handlers.ScriptResourceHandler, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	       <!-- *******  Register the RadUploadProgressHandler for IIS 7  ****** -->
	       <add name="Telerik_RadUploadProgressHandler_ashx" verb="*" preCondition="integratedMode" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" />
	     </handlers>
	    </system.webserver>
````





>note  __Note__ : The above web.config snippets are valid for __.NET 2.0__ .The version of the __System.Web.Extensions__ in __.NET 3.5__ is __3.5.0.0__ 
>


* Open the file C:\Windows\System32\inetsrv\config\__applicationHost.config__ and find the line:

<section name="requestFiltering" overrideModeDefault="Deny" />

Set the __overrideModeDefault__ property to __Allow__. So now the line should look like:

````XML
	    <section name="requestFiltering" overridemodedefault="Allow" />
````



## Forms Authentication

If your application uses __Forms Authentication__, you must make an additional change to the__<location>__ section. __RadProgressManager__ looks for__RadUploadProgressHandler__ in the root directory of your application (e.g. http://YourServerName/ApplicationName/Telerik.RadUploadProgressHandler.ashx).

To ensure its proper operation, you must allow access to unauthenticated users for the path to__RadUploadProgressHandler__. Put the following lines in your application web.config:

````XML
	    <location path="Telerik.RadUploadProgressHandler.ashx">
	     <system.web>
	          <authorization>
	             <allow users="*"/>
	          </authorization >
	     </system.web>
	    </location>
````



For more information about the location section of __web.config__, see [this MSDN article](http://msdn2.microsoft.com/en-us/library/ms178692.aspx).

## UrlRewriters

If you are using __URL rewriter__ you should __exclude__the following path from rewritinghttp://MyServer/MyApplication/Telerik.RadUploadProgressHandler.ashx

## Submitting large pages

When the ViewState of the page is relatively large and the connection speed is not that fast sometimes the Progress area is visible and loads by itself on postback. It is caused because the Progress areaindicates sending of the larger request to the server. In order to prevent this behavior you should:

1. Go to the web.config of your web-site.

1. Find the appSettings section

1. Add the following setting:

````XML
	   <add key="AllowCustomProgress" value="false" />
````



# See Also

 * [Known Limitations]({%slug progressarea/known-limitations%})
