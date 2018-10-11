---
title: WebConfig Configuraton
page_title: WebConfing Configuraton | RadProgressArea for ASP.NET AJAX Documentation
description: WebConfing Configuraton
slug: progressarea/webconfing-configuraton
tags: webconfing,configuraton
published: True
position: 7
---

# WebConfig Configuraton



In order to use [RadProgressArea]({%slug progressarea/getting-started%}),you need to add **RadProgressManager** (as long as RadProgressArea) to your page and must register **RadUploadProgressHandler** and **RadUploadHttpModule** in your application **web.config** file.

>tip As of Q3 SP1 2008 (2008.3.1125), you can use the **SmartTag** of the **RadProgressManager** to add all settings.
>


>caution  **RadProgressManager** displays error messages if it is unable to findRadUploadHttpModule. **RadUploadHttpModule** is incompatible with the ASP.NETapplication trace and **RadUploadHttpModule** is incompatible with other similar modules that handle file uploads.
>




## Registration for IIS versions prior to version 7





* Register **RadUploadHttpModule** - add the following line in the **`<httpModules>`** section of your web.config file:

````XML
<add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" />
````



now the **`<httpModules>`** section is likely to look like this:

````XML
<httpmodules>  
	<add name="ScriptModule" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />  
	<!-- *******  Register the RadUploadModule for IIS prior to v.7  ****** -->  
	<add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule" />
</httpmodules>
````



* Register **RadUploadProgressHandler** - add the following line in the**`<httpHandlers>`** section of your web.config file:

````XML
<pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
	<add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler"
		verb="*" validate="false" />
</pre>
````



now the **`<httpHandlers>`** section is likely to look like this:

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



>tip It is not necessary the ashx page in the **path** attribute above to exist, but you should ensure that the framework is configured to skip the ASHX file existence check.
>


## Registration for IIS 7



* Register **RadUploadHttpModule** - add the following line in the **`<modules>`** section (within **<system.webServer>** section) of your web.config file:

````XML
<!-- *******  Register the RadUploadModule for IIS 7  ****** -->
<add name="RadUploadModule" preCondition="integratedMode" type="Telerik.Web.UI.RadUploadHttpModule" />
````



* Register **RadUploadProgressHandler** - add the following line in the **`<handlers>`**section (within **`<system.webServer>`** section) of your web.config file:

````XML
<!-- *******  Register the RadUploadProgressHandler for IIS 7  ****** -->
<add name="Telerik_RadUploadProgressHandler_ashx" verb="*" preCondition="integratedMode"
	path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler" />
````



>tip It is not necessary the ashx page in the **path** attribute above to exist, but you should ensure that the framework is configured to skip the ASHX file existence check.
>


Now the **`<system.webServer>`** section could look like this:

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





>tip  **Note** : The above web.config snippets are valid for **.NET 2.0** .The version of the **System.Web.Extensions** in **.NET 3.5** is **3.5.0.0** 
>


* Open the file C:\Windows\System32\inetsrv\config\ **applicationHost.config** and find the line:

`<section name="requestFiltering" overrideModeDefault="Deny" />`

Set the **overrideModeDefault** property to **Allow**. So now the line should look like:

````XML
<section name="requestFiltering" overridemodedefault="Allow" />
````



## Forms Authentication

If your application uses **Forms Authentication**, you must make an additional change to the **`<location>`** section. **RadProgressManager** looks for **RadUploadProgressHandler** in the root directory of your application (e.g. http://YourServerName/ApplicationName/Telerik.RadUploadProgressHandler.ashx).

To ensure its proper operation, you must allow access to unauthenticated users for the path to **RadUploadProgressHandler**. Put the following lines in your application web.config:

````XML
<location path="Telerik.RadUploadProgressHandler.ashx">
 <system.web>
	  <authorization>
		 <allow users="*"/>
	  </authorization >
 </system.web>
</location>
````



For more information about the location section of **web.config**, see [this MSDN article](http://msdn2.microsoft.com/en-us/library/ms178692.aspx).

## UrlRewriters

If you are using **URL rewriter** you should **exclude** the following path from rewritinghttp://MyServer/MyApplication/Telerik.RadUploadProgressHandler.ashx

## Submitting large pages

When the ViewState of the page is relatively large and the connection speed is not that fast sometimes the Progress area is visible and loads by itself on postback. It is caused because the Progress area indicates sending of the larger request to the server. In order to prevent this behavior you should:

1. Go to the web.config of your web-site.

1. Find the appSettings section

1. Add the following setting:

````XML
<add key="AllowCustomProgress" value="false" />
````



# See Also

 * [Known Limitations]({%slug progressarea/known-limitations%})
