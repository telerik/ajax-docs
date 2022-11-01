---
title: Overview
page_title: AjaxManager Overview 
description: "Try now the Telerik UI for ASP.NET AjaxManager control to AJAX-enable all controls that normally work with postbacks."
slug: ajaxmanager/overview
previous_url: ajax/radajaxmanager/overview
tags: telerik, aspnet, ajax, ajaxmanager, overview
published: True
position: 0
---

# WebForms AjaxManager Overview

The Telerik UI for ASP.NET AjaxManager enables you to rapidly configure practical and complex AJAX solutions in your project by enabling you to AJAX-enable all controls that normally work with postbacks. The control boosts the performance of Ajaxified applications and allows server-side operations to acquire similar responsiveness to client-side functions. You can add the AjaxManager to virtually any web application that requires the replacement of ordinary postbacks with AJAX requests. 

The AjaxManager allows you to visually and, in Visual Studio design-time, codelessly define which controls will initiate AJAX requests and which controls will be updated while you do not need to modify your application logic. The control also enables you to update a number of page elements at once regardless of their position on the page, and you do not need to write any JavaScript or to manually invoke AJAX requests.

The following example shows an AjaxManager in action with applied Grid paging and a Telerik AjaxLoadingPanel for visual indication.

![WebForms AjaxManager general usage](images/AJAXinAction.gif)


## Logic and Capabilities

The visual designer of the AjaxManager, which is accessible in Visual Studio, enables you to handle some complex update scenarios. The following image shows an example with AJAX-enabled controls. 

![WebForms AjaxManager Update schema](images/ControlsUpdate.png)

* A single control updates one or more controls with an AJAX request. In the image, Control 1 updates Control 2 and Control 3.

* Another control updates other controls or already updated controls with an AJAX request. In the image, Control 3 updates Control 2 and Control 5.

* A third control updates itself with an AJAX request. In the image, Control 6 updates itself. 

* You can call the AjaxManager API from yet another control on the page and update other controls on the page. In the image, by using the AjaxManager API, Control 2 updates Control 1 and Control 4.

## Main Features

* [Client-side programming API]({% slug ajaxmanager/client-side-programming/overview %})&mdash;You can use the client-side API to execute your own JavaScript functions at certain stages of the AJAX request when working with the AjaxManager. 

* [Server-side programming configuration]({% slug ajaxmanager/server-side-programming/properties %})&mdash;The AjaxManager exposes a set of properties, methods, and events that enable you to configure the behavior of the Ajaxified controls on the server.  

* [Design-time]({% slug ajaxmanager/design-time %})&mdash;You can use the **Smart Tag** of the AjaxManager to define various options during the design-time. 

* [Render modes]({% slug ajaxmanager/appearance-and-styling/render-modes %})&mdash;The AjaxManager exposes the `UpdatePanelsRenderMode`, `UpdatePanelRenderMode`, and `RenderMode` properties to control the rendering of the Ajaxified controls.  

* [Using server and client scripts together]({% slug ajaxmanager/radcodeblock-and-radscriptblock %})&mdash;Telerik AJAX provides the `RadCodeBlock` and `RadScriptBlock` settings which allow you to use server and client scripts together with the complex AJAX updates that are enabled by the AjaxManager.

* [Ajaxifying multi-page projects]({% slug ajaxmanager/radajaxmanagerproxy/overview %})&mdash;The AjaxManager delivers the AjaxManagerProxy control which enables you to Ajaxify complex scenarios with WebUserControls or Master and Content pages. 

* [Performance optimizations]({% slug ajaxmanager/performance/optimizing-performance-using-radajaxmanager %})&mdash;The AjaxManager provides performance optimization options for pages with many AJAX-enabled controls.

* [Accessibility]({% slug ajaxmanager/accessibility-and-internationalization/wai-aria-support %})&mdash;The AjaxManager is accessible for screen readers and supports WAI-ARIA attributes. 

## Learning Resources 

* [Getting Started with the AjaxManager (Online Guide)]({% slug ajaxmanager/getting-started/ajax-enable-a-scenario-through-radajaxmanager-and-radajaxloadingpanel %})
* [AjaxManager Overview (Demo)](https://demos.telerik.com/aspnet-ajax/ajaxmanager/overview/defaultcs.aspx)
* [Creating an MS Outlook® Web Access Portal with AjaxManager (Demo)](https://demos.telerik.com/aspnet-ajax/webmail/)

## See Also 

* [Advantages of the AjaxManager]({% slug ajaxmanager/getting-started/radajax-advantages %})
* [Known Limitations of the AjaxManager]({% slug ajaxmanager/how-to/frequently-asked-questions %})
* [Frequently Asked Questions about the AjaxManager]({% slug ajaxmanager/troubleshooting/known-limitations %})
* [ASP.NET AJAX AJAX Manager](https://www.telerik.com/products/aspnet-ajax/ajax.aspx)

 