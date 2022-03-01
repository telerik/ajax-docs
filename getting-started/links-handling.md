---
title: Known Issues
page_title: Known Issues
description: "Look through the links with resources for handling possible issues that might occur when working with Telerik UI for ASP.NET AJAX."
slug: links-troubleshooting-kb-resources
previous_url: general-information/troubleshooting/installation-troubleshooting, general-information/troubleshooting/general-troubleshooting, general-information/troubleshooting/web-resources-troubleshooting, general-information/troubleshooting/design-time-troubleshooting, general-information/troubleshooting/toolbox-troubleshooting, general-information/troubleshooting/skins-troubleshooting, general-information/troubleshooting/jquery-troubleshooting, general-information/troubleshooting/content-security-policy
tags: telerik, asp, net, ajax, troubleshooting, links, with, resources
published: True
position: 100
---

# List of Known Issues

This article provides links to selected Knowledge Base articles covering scenarios for handling some of the most common Telerik UI for ASP.NET AJAX issues.

For faster navigation, the links are grouped into the following sets:

* [Installation](#installation)
* [General](#general)
* [Web Resources](#web-resources)
* [Design-Time](#design-time)
* [Visual Studio Toolbox](#visual-studio-toolbox)
* [Skins](#skins)
* [jQuery Integration](#jquery-integration)
* [Content Security Policy](#content-security-policy)

## Installation

* [Error: `This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package`]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting %})

* [Error: `A Network Error Occurred While Attempting to Read from the File`]({% slug installation-network-error-while-reading-file %})

* [Error: `There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor.`]({% slug windows-installer-package-program-could-not-run-error %})

* [Installation Error Screen Appears during Installation]({% slug error-screen-during-installation %})

## General

* [`'Telerik' is undefined` Error When Running a Website in the Integrated Mode on IIS 7 and Later]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting %})

* [Error: `The type 'System.Web.UI.IScriptControl' is defined in an assembly that is not referenced. You must add a reference to assembly 'System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35'`]({% slug systemwebuiiscriptcontrol-in-assembly-not-referenced-error %})

* [Error: `The control with ID '(ControlID)' requires a ScriptManager on the page. The ScriptManager must appear before any controls that need it.`]({% slug control-id-requires-scriptmanager-on-page-error %})

* [Microsoft JScript runtime error: `'Sys' is undefined`]({% slug sys-is-undefined-ms-js-runtime-error %})

* [Error: `The Controls collection cannot be modified because the control contains code blocks`]({% slug cannot-modify-control-collection-because-of-code-blocks %})

* [Error `This configuration section cannot be used at this path. This happens when the section is locked at a parent level...`](#error-message-this-configuration-section-cannot-be-used-at-this-path)

* [The Telerik Control Stylesheet Is Not Registered after an AJAX Request](#telerik-control-stylesheet-is-not-registered-after-an-ajax-request-inside-ms-updatepanel-when-the-control-is-not-initially-visible-on-the-page)

* [Error When Using the Telerik Controls with the ScriptManager on the Login Page](#using-the-telerik-controls-with-radscriptmanager-on-your-login-page-throws-an-error)

* [Error during Design-Time on a Page Using Telerik Controls](#design-time-error-on-a-page-using-telerik-controls)

* [Error: `System.IO.FileLoadException: Could not load file or assembly 'Telerik.Web.UI, Version=xxxx.x.xxx.xx, Culture=neutral, PublicKeyToken=xxxxxxxxxxxxxxxx' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)`](#systemiofileloadexception-could-not-load-file-or-assembly-telerikwebui-versionxxxxxxxxxx-cultureneutral-publickeytokenxxxxxxxxxxxxxxxx-or-one-of-its-dependencies-the-located-assemblys-manifest-definition-does-not-match-the-assembly-reference-exception-from-hresult-0x80131040)

* [Telerik Controls Do Not Work If a Compression Module Is Used in the Project](#telerik-controls-do-not-work-if-a-compression-module-is-used-in-the-projectweb-site)

* [Security Exception](#security-exception)

* [Setting the `ClientIDMode` Property to `Static` Breaks the Telerik Controls Functionality](#setting-clientidmode-property-to-static-breaks-the-telerik-controls-functionality)

* [Telerik Controls Are Incompatible with Ajax Control Toolkit](#telerik-controls-are-incompatible-with-ajax-control-toolkit)

* [Integrating Telerik Controls with Kendo UI Widgets](#telerik-controls-integration-with-kendo-ui-widgets)

* [Unobtrusive Validation Basics](#unobtrusive-validation-basics)

## Web Resources

If you are using an ASP.NET server control with rich client-side behavior, it is likely built to utilize web resources. Sometimes your page loads and the rich server-side control does not work at all, for example, the tree view does not expand, the grid cannot sort, and so on. Most of the times such issues occur because the JavaScript files of those controls have failed to load.

If your browser is configured to prompt on JavaScript errors, you may see an error message similar to the `RadTreeView is undefined` one.

If you are using Telerik UI for ASP.NET AJAX, receiving this message indicates that there might be a Web Resource related issue.

## Identifying the Error

To identify the error that occurs, use either of the following approaches:

* Manually request the WebResource handler.

  View the rendered output of your page and get the URL of the offending script tag, for example:

  ````HTML
  <script type="text/javascript"
  src="/Sample/WebResource.axd?d=axd__
  axd&t=633437882200000000"></script>
  ````

  If you paste that URL in the address bar of your browser, specifically after the domain and folder, the web server will serve back the content of that web resource. If the issue is related to the HTTP handler of the web resource, you will see an error page saying that the server returned an HTTP error code 404 (not found) or 500 (server error).

* Using web development tools to request the WebResource handler.

  Use an HTTP traffic sniffer tool like [Google DevTools](https://developers.google.com/web/tools/chrome-devtools/resources), [Fiddler](https://www.telerik.com/fiddler), or [Firefox FireBug](http://www.getfirebug.com/) to find out if the request to a web resource file has failed and what the exact error is.

The following list links to the most common issues related to web resources when working with Telerik UI for ASP.NET AJAX:

* [This is an Invalid WebResource Request]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting %})

* [Unauthorized Access (401) Error]({% slug unauthorized-access-error-401 %})

* [The Requested URL Was Not Found (404) Error]({% slug requested-url-not-found-error-404 %})

* [Server Error (500)]({% slug server-error-500-occurs %})

* [No Error Occurs, but the Body of the Returned Resource Is Blank]({% slug body-of-returned-resource-is-blank %})


## Design-Time

* [Creating a Control Failed to Create a Designer after Upgrade to R1 2018](#error-creating-control-failed-to-create-designer-after-upgrade-to-r1-2018)

* [Errors: `Unknown server tag`, `Could not load file or assembly`](#unknown-server-tagcould-not-load-file-or-assembly-errors)

* [Error: `An unhandled exception has occurred. (A)(control type) cannot be cast to (B)(control type)`](#an-unhandled-exception-has-occurred-acontrol-type-cannot-be-cast-to-bcontrol-type)

* [Visual Studio Crashes If the Project Uses Microsoft Report Viewer When Designing a Local Report (.rdlc) and Adding a Dataset](#visual-studio-crashes-if-the-project-uses-microsoft-report-viewer-when-designing-a-local-report-rdlc-and-adding-a-dataset)

* [Designer Files Are Not Updated or Are Lacking Telerik Controls](#designer-files-are-not-updated-or-are-missing-telerik-controls)

* [Design-Time Issues with Visual Studio 2008](#design-time-issues-with-visual-studio-2008)

* [Distorted Appearance When Using Designer on HiDPI Monitors](#distorted-appearance-when-using-designer-on-hidpi-monitors)

## Visual Studio Toolbox

* [The Telerik UI for ASP.NET AJAX Controls Do Not Appear in the Toolbox](#the-telerik-ui-for-aspnet-ajax-controls-do-not-appear-in-the-toolbox)

* [The Toolbox Contains Old Item Registrations](#the-toolbox-contains-old-item-registrations)

* [Missing or Disabled Toolbox Items](#missing-or-disabled-toolbox-items)

## Skins

* [Incorrect or Distorted Appearance](#incorrect-or-distorted-appearance)

* [Appearance Issues When the Control Is Added during an AJAX Request](#appearance-issues-when-control-is-added-during-ajax-request)

* [Error: `Telerik.Web.UI.(Telerik Control) with ID='(Telerik Control ID)' was unable to find embedded skin with name '(Skin Name)'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false`](#cannot-find-the-skins)

* [Different Rendering between the Design-Time Preview and in the Browser](#different-render-in-design-time-and-in-browser)

* [The `GetWebResourceUrl` Fails](#getwebresourceurl-fails)

## jQuery Integration

* [Unobtrusive Validation Basics](#unobtrusive-validation-basics)—this section explains what unobtrusive validation is and what it needs to work.

* [Using Unobtrusive Validation in .NET 4.5 Web Forms Site or Web Forms Application with the ScriptManager](#how-to-use-unobtrusive-validation-in-net-45-web-forms-site--web-forms-application-with-radscriptmanager)—this section explains how to use unobtrusive validation in a web site that is created with the .NET 4.5 **Web Forms Site** or **Web Forms Application** template of Visual Studio and uses **RadScriptManager**.

* [Using Unobtrusive Validation in .NET 4.5 Telerik Web Site or a Telerik Web Application](#how-to-use-unobtrusive-validation-in-net-45-telerik-web-site--telerik-web-application)—this section explains how to use unobtrusive validation in a web site that is created with the .NET 4.5 **Telerik Web Site** or **Telerik Web Application** template of Visual Studio.

* [Using Unobtrusive Validation in .NET 4.5 Telerik Web Site or Telerik Web Application that Has jQuery Registered in the ScriptManager](#how-to-use-unobtrusive-validation-in-net-45-telerik-web-site--telerik-web-application-that-has-jquery-registered-in-radscriptmanager) — this section explains how touse unobtrusive validation in a web site that is created with the .NET 4.5 **Telerik Web Site** or **Telerik Web Application** template of Visual Studio and has jQuery registered with the RadScriptManager via a **ScriptReference** with **Name** property set to **jquery**.

* [Error: `0x800a139e - JavaScript runtime error: SyntaxError`](#0x800a139e---javascript-runtime-error-syntaxerror)—this section treats a jQuery runtime error in Visual Studio output window when the project is started in debug mode in Internet Explorer.

## Content Security Policy
