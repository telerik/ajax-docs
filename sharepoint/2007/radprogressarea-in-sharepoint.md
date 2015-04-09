---
title: RadProgressArea in SharePoint
page_title: RadProgressArea in SharePoint | UI for ASP.NET AJAX Documentation
description: RadProgressArea in SharePoint
slug: sharepoint/2007/radprogressarea-in-sharepoint
tags: radprogressarea,in,sharepoint
published: True
position: 7
---

# RadProgressArea in SharePoint



In order to use RadProgressArea, you need to add __RadProgressManager__ to your page as well and must register __RadUploadProgressHandler__ and __RadUploadHttpModule__ in the __web.config__ file.

>caution  __RadProgressManager__ displays error messages if it is unable to find RadUploadHttpModule.
> __RadUploadHttpModule__ is incompatible with the ASP.NET application trace and __RadUploadHttpModule__ is incompatible with other similar modules that handle file uploads.
>


>note In the code below the version of the Telerik assembly is hard-coded to __2009.2.616.20__ . Please change it to match your version.
>


## Registration for IIS version 6 and below

* Register __SPRadUploadHttpModule__ - add the following line in the __<httpModules>__ section of your web.config file (the module is added in __2009.1.527__ version):

````XML
	    <add name="RadUploadHttpModule" type="Telerik.Web.UI.SPRadUploadHttpModule, Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
````



* Register __RadUploadProgressHandler__ - add the following line in the __<httpHandlers>__ section of your web.config file:

````XML
	    <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4"
	        verb="*" validate="false" />
````



## Registration for IIS 7

* Register __SPRadUploadHttpModule__ - add the following line in the __<modules>__ section (within __<system.webServer>__ section) of your web.config file (the module is added in __2009.1.527__ version):

````XML
	    <add name="RadUploadHttpModule" type="Telerik.Web.UI.SPRadUploadHttpModule, 
	    Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, 
	    PublicKeyToken=121fae78165ba3d4" precondition="integratedMode" />
````



* Register __RadUploadProgressHandler__ - add the following line in the __<handlers>__ section (within __<system.webServer>__ section) of your web.config file.

````XML
	    <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI, 
	Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" verb="*" precondition="integratedMode"
	        name="Telerik_RadUploadProgressHandler_ashx" />
````



* Open the file C:\Windows\System32\inetsrv\config\__applicationHost.config__ and find the line:

````XML
	    <section name="requestFiltering" overridemodedefault="Deny" />
````



* Set the __overrideModeDefault__ property to __Allow__. So now the line should look like:

````XML
	    <section name="requestFiltering" overridemodedefault="Allow" />
````



## Authentication

Add the following <location> sections in your web.config file:

````XML
	    <location path="Telerik.RadUploadProgressHandler.ashx">
	        <system.web>
	             <authorization>
	                <allow users="*"/>
	             </authorization >
	        </system.web>
	        </location>
	            <location path="WebResource.axd">
	        <system.web>
	             <authorization>
	                <allow users="*"/>
	             </authorization >
	        </system.web>
	    </location>
````


