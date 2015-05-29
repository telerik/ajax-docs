---
title: Deploying a Telerik-enabled WebApplication
page_title: Deploying a Telerik-enabled WebApplication | UI for ASP.NET AJAX Documentation
description: Deploying a Telerik-enabled WebApplication
slug: introduction/deployment/deploying-a-telerik-enabled-webapplication
tags: deploying,a,telerik-enabled,webapplication
published: True
position: 0
---

# Deploying a Telerik-enabled WebApplication



 

Deploying an application that uses the Telerik UI for ASP.NET AJAX controls is done in the same manner any other ASP.NET WebForms application is deployed.

To ensure a successful deployment, you need to check the following items:

* For the controls to be recognized by the server, the application must properly reference the Telerik.Web.UI.dll assembly.The [Included Assemblies]({%slug introduction/installation/included-assemblies%}) help article explains where you can find the file(s) that you need.

* Make sure that the needed assemblies are copied over to the production server. This often involves setting the *CopyLocal* property of the WebApplication reference to *true*. In case you are deploying the assemblies in the GAC, examine the [Working with Assemblies in the GAC]({%slug introduction/deployment/using-the-global-assembly-cache%}) article.

* Make sure that the needed additions are made to the web.config on the production server. The	[web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) article lists them.

* Make sure that the MS AJAX extensions are installed on the production server. You can find more information about them at [http://www.asp.net/AJAX/Documentation/Live/InstallingASPNETAJAX.aspx](http://www.asp.net/AJAX/Documentation/Live/InstallingASPNETAJAX.aspx).
 