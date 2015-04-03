---
title: Deploying Telerik UI for ASP.NET AJAX
page_title: Deploying Telerik UI for ASP.NET AJAX | UI for ASP.NET AJAX Documentation
description: Deploying Telerik UI for ASP.NET AJAX
slug: moss/sharepoint-2010/installation-and-deployment/deploying-telerik-ui-for-asp.net-ajax
tags: deploying,telerik,ui,for,asp.net,ajax
published: True
position: 1
---

# Deploying Telerik UI for ASP.NET AJAX



## 

To leverage Telerik UI for ASP.NET AJAX on a SharePoint Server 2010, their assemblies need to be deployed on that server. Once the required files are deployed, our ASP.NET AJAX controls can be added to the site by editing the site’s page or web part, in which the controls will be added.

When the __SharePoint 2010 Web Parts__ are installed on the SharePoint server via the automatic installer, the Telerik controls will be deployed on the SharePoint server without the need to manually install files in the GAC and modify the web.config of the application.

It is also possible to deploy the Telerik controls without the automatic installer. This section outlines the required steps that need to be taken in this case prior to implementing the controls within an existing SharePoint web site:

1. First you need to install __Telerik.Web.UI.dll__, __Telerik.Web.Design.dll__ and__Telerik.Web.UI.Skins.dll__ in the GAC (Global Assembly Cache) of your SharePoint server. This can be done by opening the Developer Command Prompt for Visual Studio (__Start > All Programs > Microsoft Visual Studio [VS version] > Visual Studio Tools__) and running the following command for each of the mentioned assemblies:__gacutil -i [path to assembly]__More information about using the __gacutil__ tool for adding the assemblies of Telerik controls in GAC can be found in the[Using the Global Assembly Cache](C7A0E43A-56D5-41C6-9DF2-318B143B638A) article.After running the gacutil command, the assemblies can be examined in the folder __%windir%\Assembly__, which is the location of the Global Assembly Cache for .NET 3.5.

1. Next you should tell SharePoint that the Telerik controls are safe to use. To do so you should add a few __<SafeControl>__ entries within the __<SafeControls>__ section in your web.config:

````XML
	<SafeControl Assembly="Telerik.Web.UI, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4"
	    Namespace="Telerik.Web.UI" TypeName="*" Safe="True" />
	<SafeControl Assembly="Telerik.Web.Design, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4"
	    Namespace="Telerik.Web.Design" TypeName="*" Safe="True" />
	<SafeControl Assembly="Telerik.Web.UI.Skins, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4"
	    Namespace="Telerik.Web.UI.Skins" TypeName="*" Safe="True" />
````



1. Some of the Telerik controls require the HTTP handler __Telerik.Web.UI.WebResource.axd__so it is recommended to register it in web.config as shown below:

````XML
	<system.webServer>
	  <handlers>
	    <add name="Telerik.Web.UI.WebResource.axd_*" path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4" preCondition="integratedMode" />
	  </handlers>
	</system.webServer>
````

You may also need to register other HTTP handlers responsible for RadSpell spell checking, RadEditor dialogs, etc. The full list of the required/optionalHTTP handlers can be found in the [web.config Settings Overview](60515525-195c-42f2-b0be-7f246af560a0) article.

>caution The value of __Version__ in all settings above should match the version of Telerik UI for ASP.NET AJAX that is currently installed in the GAC. If there are __<SafeControl>__ settings and HTTP handler registrations that refer to another version, it is recommended to remove them, because they could cause errors in the SharePoint site.
>The[bindingRedirect](http://msdn.microsoft.com/en-us/library/eftw1fys.aspx)element can be used to redirect to a particular assembly version when there are more then one available.
>


# See Also

 * [Installing Telerik Web Parts for SharePoint]({%slug moss/sharepoint-2010/installation-and-deployment/installing-telerik-web-parts-for-sharepoint%})
