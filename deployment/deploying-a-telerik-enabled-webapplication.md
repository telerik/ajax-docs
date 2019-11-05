---
title: Deploying a Telerik-enabled ASP.NET Web Forms Application
page_title: Deploying a Telerik-enabled Web Application | UI for ASP.NET AJAX Documentation
description: Deploying a Telerik-enabled Web Application
slug: introduction/deployment/deploying-a-telerik-enabled-webapplication
tags: deploying,a,telerik-enabled,webapplication
published: True
position: 0
---

# Deploying a Telerik-enabled Web Application



 

Deploying an application that uses the Telerik® UI for ASP.NET AJAX controls is done in the same manner any other ASP.NET Web Forms application is deployed.

You can deploy the application using any of the well known and established techniques:

* Visual Studio deploy (from the Build menu -> choose Publish Web app) - see these MSDN articles for more information: [First look at deployment in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/deployment/deploying-applications-services-and-components?view=vs-2019) and [Publish a Web app to a web site using Visual Studio](https://docs.microsoft.com/en-us/visualstudio/deployment/quickstart-deploy-to-a-web-site?view=vs-2019).

* FTP upload

* Remote Desktop or other.

To ensure a successful deployment, you need to check the following items:

* For the controls to be recognized by the server, the application must properly reference the Telerik.Web.UI.dll assembly. The [Included Assemblies]({%slug introduction/installation/included-assemblies%}) help article explains where you can find the file(s) that you need.

* Make sure that the needed assemblies (Telerik.Web.UI.dll and Telerik.Web.UI.Skins.dll) are copied over to the production server. This often involves setting the [CopyLocal](https://docs.microsoft.com/en-us/visualstudio/ide/managing-references-in-a-project?view=vs-2019#references-to-shared-components-at-run-time) property of the Web Application reference to *true*.
In case you are deploying the assemblies in the GAC, examine the [Working with Assemblies in the GAC]({%slug introduction/deployment/using-the-global-assembly-cache%}) article.

* Make sure that the needed additions are made to the web.config on the production server. The	[web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) article lists them.

* Make sure that the .NET 4.xx+ is installed on the server and the [System Requirements](https://www.telerik.com/aspnet-ajax/tech-sheets/system-requirements) are met.

