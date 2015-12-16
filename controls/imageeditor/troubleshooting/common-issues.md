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

This article lists the most common issues related to RadImageEditor:

* [The Image Disappears When I Click on  Crop / Add Text / Save / Reset](#the-image-disappears-when-i-click-on--crop--add-text--save--reset)

* [Dialogs Are Not Working Properly or Throw a JavaScript Error](#dialogs-are-not-working-properly-or-throw-a-javascript-error)

* [Event Handlers Might Not Be Not Raised in a Default Document in IIS 7 or IIS 7.5 Integrated Mode](#event-handlers-might-not-be-not-raised-in-a-default-document-in-iis-7-or-iis-75-integrated-mode)

* [The Image Is Not Loaded or/and a Security JavaScript Error is Thrown](#the-given-image-is-not-loaded-orand-a-security-javascript-error-is-thrown)



## The Image Disappears When I Click on  Crop / Add Text / Save / Reset

The most likely reason for this behavior is that the HttpHandler is not present in the web.config. These three operations are not performed on the client and thus require that the **RadImageEditor** can properly communicate with the server.

The easiest approach to enable the Telerik HttpHandler is to go to the design view in VS, show the Smart Tag of the **RadImageEditor** and select the **Enable RadImageEditor HttpHandler** option. For more information see the [Smart Tag]({%slug imageeditor/design-time%}) article.

You can also manually add the needed handlers under system.web -> httpHandlers for IIS versions prior to 7.0. For example:

````XML
<system.web>
   . . . . 
  <httpHandlers>
    <add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />
  </httpHandlers>
</system.web>
````



and under system.webServer -> handlers for ISS 7.0 and later, for example:

````XML
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


*Problem*

When RadCompression is enabled and you are using .NET 4.0, event handlers might not be raised in a default document in IIS 7 or IIS 7.5 Integrated Mode, **which could break the normal work of RadImageEditor**.

*Solution*

This problem is caused by a breaking change in .NET 4.0 described [here](http://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1**Toc256770154). To workaround it one can set **preCondition="managedHandler"** for the RadCompression module. You may also need to remove the **runAllManagedModulesForAllRequests** setting from your web.config if you have it (or set it to false).


## The Image Is Not Loaded or/and a Security JavaScript Error is Thrown


*Problem*

By design **RadImageEditor can work only with virtual paths** pointing to images placed inside its application root directory and using images from external URLs (*http://host/image.jpg*) or physical location (*C://images/image.jpg*) is not supported out-of-the-box. Such configuration may lead to **not rendered or not editable image** (so the image operations will not work properly on it). 

Loading images through an external URL usually leads to the following **JavaScript error**:
````SecurityError: The operation is insecure.````

*Solution*

There are several possible ways to resolve the problem:

* Use virtual path to the image you want to edit , e.g. *“~/images/image.jpg”*.
* Load the image as a file stream and follow the image-loading approach used [here](http://demos.telerik.com/aspnet-ajax/imageeditor/examples/customsaving/defaultcs.aspx).
* Implement a custom [Image Content Provider](http://docs.telerik.com/devtools/aspnet-ajax/controls/imageeditor/functionality/using-a-custom-image-provider) that handles the loading and working with images from different storage locations.