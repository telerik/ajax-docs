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



In order to use RadProgressArea, you need to add **RadProgressManager** to your page as well and must register **RadUploadProgressHandler** and **RadUploadHttpModule** in the **web.config** file.

>caution  **RadProgressManager** displays error messages if it is unable to find RadUploadHttpModule.
> **RadUploadHttpModule** is incompatible with the ASP.NET application trace and **RadUploadHttpModule** is incompatible with other similar modules that handle file uploads.
>


>note In the code below the version of the Telerik assembly is hard-coded to **2009.2.616.20** . Please change it to match your version.
>


## Registration for IIS version 6 and below

* Register **SPRadUploadHttpModule** - add the following line in the **<httpModules>** section of your web.config file (the module is added in **2009.1.527** version):

````XML
	    <add name="RadUploadHttpModule" type="Telerik.Web.UI.SPRadUploadHttpModule, Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
````



* Register **RadUploadProgressHandler** - add the following line in the **<httpHandlers>** section of your web.config file:

````XML
	    <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4"
	        verb="*" validate="false" />
````



## Registration for IIS 7

* Register **SPRadUploadHttpModule** - add the following line in the **<modules>** section (within **<system.webServer>** section) of your web.config file (the module is added in **2009.1.527** version):

````XML
	    <add name="RadUploadHttpModule" type="Telerik.Web.UI.SPRadUploadHttpModule, 
	    Telerik.Web.UI, Version=2009.2.616.20, Culture=neutral, 
	    PublicKeyToken=121fae78165ba3d4" precondition="integratedMode" />
````



* Register **RadUploadProgressHandler** - add the following line in the **<handlers>** section (within **<system.webServer>** section) of your web.config file.

````XML
	    <add path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI, 
	Version=2009.2.616.20, Culture=neutral, PublicKeyToken=121fae78165ba3d4" verb="*" precondition="integratedMode"
	        name="Telerik_RadUploadProgressHandler_ashx" />
````



* Open the file C:\Windows\System32\inetsrv\config\**applicationHost.config** and find the line:

````XML
	    <section name="requestFiltering" overridemodedefault="Deny" />
````



* Set the **overrideModeDefault** property to **Allow**. So now the line should look like:

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


