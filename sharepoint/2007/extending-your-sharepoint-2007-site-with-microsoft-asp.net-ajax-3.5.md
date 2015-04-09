---
title: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5
page_title: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5 | UI for ASP.NET AJAX Documentation
description: Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5
slug: sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-3.5
tags: extending,your,sharepoint,2007,site,with,microsoft,asp.net,ajax,3.5
published: True
position: 2
---

# Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5



In order to extend your SharePoint 2007 site with Microsoft __ASP.NET AJAX 3.5__, you need to perform the following steps:

## Install .NET Framework 3.5

Download and install .NET Framework 3.5 SP1 from [here](http://www.microsoft.com/downloads/details.aspx?FamilyID=ab99342f-5d1a-413d-8319-81da479ab0d7&displaylang=en).

## Modify your web.config file

>tip Before you continue reading you can check this KB article by __Michael Raizman__ :[SharePoint Feature to Extend SharePoint Site with AJAX 3.5 and Telerik Rad Controls](http://www.codeproject.com/KB/sharepoint/SharePoint_Telerik.aspx)
>


After __ASP.NET 3.5__ has been installed you need to modify the __web.config__ file of your MOSS web site with a few Ajax specific entries. Typically, the web.config file is located in __c:\inetpub\wwwroot\wss\virtualdirectories\80__

1. Add the following __<sectionGroup>__ element in the __<configSections>__ tag:

````XML
	    <sectionGroup name="system.web.extensions" type="System.Web.Configuration.SystemWebExtensionsSectionGroup,
	        System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35">
	        <sectionGroup name="scripting" type="System.Web.Configuration.ScriptingSectionGroup,
	            System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35">
	            <section name="scriptResourceHandler" type="System.Web.Configuration.ScriptingScriptResourceHandlerSection,
	                System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" 
	                requirePermission="false" allowDefinition="MachineToApplication"/>
	            <sectionGroup name="webServices" type="System.Web.Configuration.ScriptingWebServicesSectionGroup,
	                System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35">
	                <section name="jsonSerialization" type="System.Web.Configuration.ScriptingJsonSerializationSection,
	                    System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" 
	                    requirePermission="false" allowDefinition="Everywhere" />
	                <section name="profileService" type="System.Web.Configuration.ScriptingProfileServiceSection,
	                    System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" 
	                    requirePermission="false" allowDefinition="MachineToApplication" />
	                <section name="authenticationService" type="System.Web.Configuration.ScriptingAuthenticationServiceSection,
	                    System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" 
	                    requirePermission="false" allowDefinition="MachineToApplication" />
	                <section name="roleService" type="System.Web.Configuration.ScriptingRoleServiceSection,
	                    System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" 
	                    requirePermission="false" allowDefinition="MachineToApplication" />
	            </sectionGroup>
	        </sectionGroup>
	    </sectionGroup>
````



2. Add the following __<controls>__ section as a child of the __<system.web>/<pages>__ tag:

````XML
	    <controls>
	        <add tagPrefix="asp" namespace="System.Web.UI" assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	            PublicKeyToken=31BF3856AD364E35"/>
	        <add tagPrefix="asp" namespace="System.Web.UI.WebControls" assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	            PublicKeyToken=31BF3856AD364E35"/>
	    </controls>
````



3. Add the following tag to the __<assemblies>__ tag, within the __<compilation>__ element:

````XML
	    <add assembly="System.Core, Version=3.5.0.0, Culture=neutral, PublicKeyToken=B77A5C561934E089"/>
	    <add assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>
	    <add assembly="System.Data.DataSetExtensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=B77A5C561934E089"/>
	    <add assembly="System.Xml.Linq, Version=3.5.0.0, Culture=neutral, PublicKeyToken=B77A5C561934E089"/>
````



4. Register the following HTTP handlers at the end of the__<httpHandlers>__ section:

````XML
	    <add verb="*" path="*.asmx" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory,
	       System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>
	    <add verb="*" path="*_AppService.axd" validate="false" type="System.Web.Script.Services.ScriptHandlerFactory,
	       System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>
	    <add verb="GET,HEAD" path="ScriptResource.axd" type="System.Web.Handlers.ScriptResourceHandler,
	       System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" validate="false"/>    
````



5. Add the following HTTP module registration to the __<httpModules>__ section beneath any existing modules:

````XML
	    <add name="ScriptModule" type="System.Web.Handlers.ScriptModule, System.Web.Extensions, 
	        Version=3.5.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>    
````



6. Add a SafeControl entry for the System.Web.UI namespace from the System.Web.Extensions assembly within the __<SharePoint>/<SafeControls>__ section:

````XML
	    <SafeControl Assembly="System.Web.Silverlight,
	               Version=2.0.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
	               Namespace="System.Web.UI.SilverlightControls" TypeName="*" Safe="True" />
	    <SafeControl Assembly="System.Web.Extensions,
	               Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
	               Namespace="System.Web.UI" TypeName="*" Safe="True" />
````



7. Since the RadEditor dll files, which are in the wsp package, are complied for .NET 2.0 framework, you need to add the following code to the <runtime><assemblyBinding> section.

````XML
	    <dependentAssembly>
	        <assemblyIdentity name="System.Web.Extensions" publicKeyToken="31bf3856ad364e35"/>
	        <bindingRedirect oldVersion="1.0.0.0-1.1.0.0" newVersion="3.5.0.0"/>
	    </dependentAssembly>
	    <dependentAssembly>
	        <assemblyIdentity name="System.Web.Extensions.Design" publicKeyToken="31bf3856ad364e35"/>
	        <bindingRedirect oldVersion="1.0.0.0-1.1.0.0" newVersion="3.5.0.0"/>
	    </dependentAssembly>
````



8. Finally, add the following configuration tags at the bottom of web.config, just before the end of the __<configuration>__ tag:

````XML
	    <system.web.extensions>
	        <scripting>
	        <webServices>
	        </webServices>
	        </scripting>
	    </system.web.extensions>
	    <system.webServer>
	      <validation validateIntegratedModeConfiguration="false"/>
	      <modules>
	        <remove name="ScriptModule" />
	        <add name="ScriptModule" preCondition="managedHandler"
	           type="System.Web.Handlers.ScriptModule,
	           System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	           PublicKeyToken=31BF3856AD364E35"/>
	      </modules>
	      <handlers>
	        <remove name="WebServiceHandlerFactory-Integrated"/>
	        <remove name="ScriptHandlerFactory" />
	        <remove name="ScriptHandlerFactoryAppServices" />
	        <remove name="ScriptResource" />
	        <add name="ScriptHandlerFactory" verb="*" path="*.asmx"
	           preCondition="integratedMode"
	           type="System.Web.Script.Services.ScriptHandlerFactory,
	           System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	           PublicKeyToken=31BF3856AD364E35"/>
	        <add name="ScriptHandlerFactoryAppServices" verb="*"
	           path="*_AppService.axd"
	           preCondition="integratedMode"
	           type="System.Web.Script.Services.ScriptHandlerFactory,
	           System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	           PublicKeyToken=31BF3856AD364E35"/>
	        <add name="ScriptResource" preCondition="integratedMode"
	           verb="GET,HEAD" path="ScriptResource.axd"
	           type="System.Web.Handlers.ScriptResourceHandler,
	           System.Web.Extensions, Version=3.5.0.0, Culture=neutral,
	           PublicKeyToken=31BF3856AD364E35" />
	      </handlers>
	   </system.webServer>
````



# See Also

 * [Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0]({%slug sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-1.0%})
