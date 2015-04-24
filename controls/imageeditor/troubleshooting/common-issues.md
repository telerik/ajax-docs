---
title: Common Issues
page_title: Common Issues | RadImageEditor for ASP.NET AJAX Documentation
description: Common Issues
slug: imageeditor/troubleshooting/common-issues
tags: common,issues
published: True
position: 1
---

# Common Issues



## The Image Disappears When I Click on a Crop / Add Text / Save / Reset

The most likely reason for this behavior is that the HttpHandler is not present in the web.config. These three operations are not performed on the client and thus require that the **RadImageEditor** can properly communicate with the server.

The easiest approach to enable the Telerik HttpHandler is to go to the design view in VS, show the Smart Tag of the **RadImageEditor** and select the **Enable RadImageEditor HttpHandler** option. For more information see the [Smart Tag]({%slug imageeditor/design-time%}) article.

You can also manually add the needed handlers under system.web -> httpHandlers for IIS versions prior to 7.0. For example:

````ASPNET
	  <system.web>
	     . . . . 
	    <httpHandlers>
	      <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
	    </httpHandlers>
	  </system.web>
````



and under system.webServer -> handlers for ISS 7.0 and later, for example:

````ASPNET
	  <system.webServer>
	    <modules runAllManagedModulesForAllRequests="true" />
	    <validation validateIntegratedModeConfiguration="false" />
	    <handlers>
	      <add name="Telerik_Web_UI_WebResource_axd" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" />
	    </handlers>
	  </system.webServer>
````



## Dialogs Are Not Working Properly or Throw a JavaScript Error

If the dialogs are not properly displayed (for example with no content or with the content of a previously opened tool, or the buttons inside are not working) or even a JavaScript error is thrown when you try to open them / click on a button, then the first thing you should check is whether the **RadImageEditor** is inside an **ASP UpdatePanel**. If that is the case its **UpdateMode** property should be set to **Conditional**, because the **RadImageEditor** internally uses AJAX and thus you get nested update panels, which an inherently problematic scenario.

## Event Handlers Might Not Be Not Raised in a Default Document in IIS 7 or IIS 7.5 Integrated Mode

Problem

When RadCompression is enabled and you are using .NET 4.0, event handlers might not be raised in a default document in IIS 7 or IIS 7.5 Integrated Mode, **which could break the normal work of RadImageEditor**.

Solution

This problem is caused by a breaking change in .NET 4.0 described [here](http://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1**Toc256770154). To workaround it one can set **preCondition="managedHandler"** for the RadCompression module. You may also need to remove the **runAllManagedModulesForAllRequests** setting from your web.config if you have it (or set it to false).
