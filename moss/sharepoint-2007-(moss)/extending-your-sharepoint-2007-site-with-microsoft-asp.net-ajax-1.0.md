---
title: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0
page_title: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0 | UI for ASP.NET AJAX Documentation
description: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0
slug: moss/sharepoint-2007-(moss)/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-1.0
tags: extending,your,sharepoint,2007,site,with,microsoft,asp.net,ajax,1.0
published: True
position: 1
---

# Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0



In order to extend your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0, you need to perform the following steps:

## Install ASP.NET Ajax 1.0

Download and install ASP.NET Ajax from [here](http://www.microsoft.com/downloads/details.aspx?FamilyID=ca9d90fa-e8c9-42e3-aa19-08e2c027f5d6&displaylang=en). You need to install “ASP.NET AJAX Extensions 1.0”, which is the version built for ASP.NET 2.0

## Modify your web.config file

After ASP.NET Ajax has been installed you need to modify the web.config file of your MOSS web site with a few Ajax specific entries. Typically, the web.config file is located in c:\inetpub\wwwroot\wss\virtualdirectories\80

1. Add the following __<sectionGroup>__ element in the __<configSections>__ tag:

````XML
	    <sectionGroup name="system.web.extensions" type="System.Web.Configuration.SystemWebExtensionsSectionGroup, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35">
	        <sectionGroup name="scripting" type="System.Web.Configuration.ScriptingSectionGroup, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35">
	            <section name="scriptResourceHandler" type="System.Web.Configuration.ScriptingScriptResourceHandlerSection, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" requirePermission="false" allowDefinition="MachineToApplication"/>
	            <sectionGroup name="webServices" type="System.Web.Configuration.ScriptingWebServicesSectionGroup, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35">
	                <section name="jsonSerialization" type="System.Web.Configuration.ScriptingJsonSerializationSection, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" requirePermission="false" allowDefinition="Everywhere" />
	                <section name="profileService" type="System.Web.Configuration.ScriptingProfileServiceSection, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" requirePermission="false" allowDefinition="MachineToApplication" />
	                <section name="authenticationService" type="System.Web.Configuration.ScriptingAuthenticationServiceSection, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" requirePermission="false" allowDefinition="MachineToApplication" />
	            </sectionGroup>
	        </sectionGroup>
	    </sectionGroup>
````



1. Add the following __<controls>__ section as a child of the __<system.web>/<pages>__ tag:

````XML
	    <controls>
	       <add tagPrefix="asp" namespace="System.Web.UI" assembly="System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	    </controls>
````



1. Add the following tag to the __<assemblies>__ tag, within the __<compilation>__ element:

````XML
	    <add assembly="System.Web.Extensions, Version=1.0.61025.0,Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
````



1. Register the following HTTP handlers at the end of the__<httpHandlers>__ section:

````XML
	    <add verb="*" path="*.asmx" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
	    <add verb="*" path="*_AppService.axd" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
	    <add verb="GET,HEAD" path="ScriptResource.axd" type="System.Web.Handlers.ScriptResourceHandler, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" validate="false"/>
````



1. Add the following HTTP module registration to the __<httpModules>__ section beneath any existing modules:

````XML
	    <add name="ScriptModule" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
````



1. Add a SafeControl entry for the System.Web.UI namespace from the System.Web.Extensions assembly within the __<SharePoint>/<SafeControls>__ section:

````XML
	    <SafeControl Assembly="System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" 
	        Namespace="System.Web.UI" TypeName="*" Safe="True" />
````



1. Finally, add the following configuration tags at the bottom of web.config, just before the end of the __<configuration>__ tag:

````XML
	    <system.web.extensions>
	       <scripting>
	         <webServices>
	         <!-- Uncomment this line to enable the authentication service. Include requireSSL="true" if appropriate. -->
	         <!--
	           <authenticationService enabled="true" requireSSL = "true|false"/>
	         -->
	         <!-- Uncomment these lines to enable the profile service. To allow profile properties to be retrieved and modified in ASP.NET AJAX applications, you need to add each property name to the readAccessProperties and writeAccessProperties attributes. -->
	         <!--
	         <profileService enabled="true"
	                         readAccessProperties="propertyname1,propertyname2"
	                         writeAccessProperties="propertyname1,propertyname2" />
	         -->
	         </webServices>
	         <!--
	         <scriptResourceHandler enableCompression="true" enableCaching="true" />
	         -->
	       </scripting>
	       </system.web.extensions>
	       <system.webServer>
	       <validation validateIntegratedModeConfiguration="false"/>
	       <modules>
	         <add name="ScriptModule" preCondition="integratedMode" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>d
	       </modules>
	       <handlers>
	         <remove name="WebServiceHandlerFactory-Integrated" />
	         <add name="ScriptHandlerFactory" verb="*" path="*.asmx" preCondition="integratedMode"
	              type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
	         <add name="ScriptHandlerFactoryAppServices" verb="*" path="*_AppService.axd" preCondition="integratedMode" type="System.Web.Script.Services.ScriptHandlerFactory, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"/>
	         <add name="ScriptResource" preCondition="integratedMode" verb="GET,HEAD" path="ScriptResource.axd" type="System.Web.Handlers.ScriptResourceHandler, System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
	       </handlers>
	    </system.webServer>
````



# See Also

 * [Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5]({%slug moss/sharepoint-2007-(moss)/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-3.5%})
