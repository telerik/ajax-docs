---
title: Known Issues
page_title: Known Issues
description: "Look through the links with resources for handling possible issues that might occur when working with Telerik UI for ASP.NET AJAX."
slug: links-troubleshooting-kb-resources
previous_url: general-information/troubleshooting/installation-troubleshooting, general-information/troubleshooting/general-troubleshooting, general-information/troubleshooting/web-resources-troubleshooting, general-information/troubleshooting/design-time-troubleshooting, general-information/troubleshooting/toolbox-troubleshooting, general-information/troubleshooting/skins-troubleshooting, general-information/troubleshooting/jquery-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, links, with, resources
published: True
position: 100
---

# Known Issues

This article provides links to specific Knowledge Base articles covering scenarios for handling some of the most common Telerik UI for ASP.NET AJAX issues.

For faster navigation, the links are grouped into the following sets:

- [Installation](#installation)
- [General](#general)
- [Web Resources](#web-resources)
- [Identifying the Error](#identifying-the-error)
- [Design-Time](#design-time)
- [Visual Studio ToolBox](#visual-studio-toolbox)
- [Skins](#skins)
- [jQuery Integration](#jquery-integration)

For more information on using Telerik UI for ASP.NET AJAX and Microsoft AJAX with the strict Content Security Policy mode, refer to the [Content Security Policy Mode]({% slug general-information/content-security-policy %}) article.

## Installation

* [`This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package`]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting %})

* [`A Network Error Occurred While Attempting to Read from the File`]({% slug installation-network-error-while-reading-file %})

* [`There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor.`]({% slug windows-installer-package-program-could-not-run-error %})

* [Installation Error Screen Appears during Installation]({% slug error-screen-during-installation %})

## General

* [`'Telerik' is undefined` When Running a Website in the Integrated Mode on IIS 7 and Later]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting %})

* [`The type 'System.Web.UI.IScriptControl' is defined in an assembly that is not referenced. You must add a reference to assembly 'System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35'`]({% slug systemwebuiiscriptcontrol-in-assembly-not-referenced-error %})

* [`The control with ID '(ControlID)' requires a ScriptManager on the page. The ScriptManager must appear before any controls that need it.`]({% slug control-id-requires-scriptmanager-on-page-error %})

* [`'Sys' is undefined` Microsoft JavaScript Runtime Error]({% slug sys-is-undefined-ms-js-runtime-error %})

* [`The Controls collection cannot be modified because the control contains code blocks`]({% slug cannot-modify-control-collection-because-of-code-blocks %})

* [`This configuration section cannot be used at this path.`]({% slug common-http-error-500-19-this-configuration-section-cannot-be-used-at-this-path %})

* [The Telerik Control Stylesheet Is Not Registered after an AJAX Request](#telerik-control-stylesheet-is-not-registered-after-an-ajax-request-inside-ms-updatepanel-when-the-control-is-not-initially-visible-on-the-page)

* [Error When Using the Telerik Controls with the ScriptManager on the Login Page]({% slug control-stylesheet-not-registered-after-ajax-request %})

* [Error during Design-Time on a Page Using Telerik Controls]({% slug design-time-errors-on-page-with-telerik-controls %})

* [`System.IO.FileLoadException: Could not load file or assembly 'Telerik.Web.UI, Version=xxxx.x.xxx.xx, Culture=neutral, PublicKeyToken=xxxxxxxxxxxxxxxx' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)`]({% slug located-assembly-manifest-definition-not-matching-reference %})

* [Telerik Controls Do Not Work If a Compression Module Is Used in the Project]({% slug controls-not-working-if-compression-used-in-project %})

* [Security Exception]({% slug security-exception-occurs %})

* [Setting the `ClientIDMode` Property to `Static` Breaks the Telerik Controls Functionality]({% slug clientidmode-static-breaks-controls-functionality %})

* [Telerik Controls Are Incompatible with Ajax Control Toolkit]({% slug telerik-controls-incompatible-with-ajax-control-toolkit %})

* [Integrating Telerik Controls with Kendo UI Widgets]({% slug integrating-telerik-controls-with-kendo-jquery-raises-issues %})

* [Unobtrusive Validation Basics]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery %}#unobtrusive-validation-basics)

## Web Resources

If you are using an ASP.NET server control with rich client-side behavior, it is likely built to utilize web resources. Sometimes your page loads and the rich server-side control does not work at all, for example, the tree view does not expand, the grid cannot sort, and so on. Most of the times such issues occur because the JavaScript files of those controls have failed to load.

If your browser is configured to prompt on JavaScript errors, you may see an error message similar to the `RadTreeView is undefined` one.

If you are using Telerik UI for ASP.NET AJAX, receiving this message indicates that there might be a Web Resource related issue.

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

When working with Telerik UI for ASP.NET AJAX, note that as of R1 2018, the `Telerik.Web.Design.dll` assembly is no longer added by the automated `.msi` installer to the GAC. The `Telerik.Web.Design.dll` file is the assembly that contains the design-time code and if it is not referenced properly in your project, you may get design-time errors.

Previously, `Telerik.Web.Design.dll` was installed in the GAC by the automated installer of the Telerik UI for ASP.NET AJAX suite. Adding it to the GAC was necessary because of Visual Studio 2008 that could not otherwise read design-time code and has caused various issues with later versions because it prevented proper upgrades and broke references.

Some of the design-time issues linked below, which refer to the previous installation approach of the assembly, may require you to modify the GAC to remove duplicate assemblies. For more information, refer to the article on [using the global assembly cache]({%slug introduction/deployment/using-the-global-assembly-cache%}).

* [Creating a Control Failed to Create a Designer after Upgrade to R1 2018]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting %})

* [`Unknown server tag` or `Could not load file or assembly`]({% slug unknown-server-tag-could-not-load-file-or-assembly %})

* [`An unhandled exception has occurred. (A)(control type) cannot be cast to (B)(control type)`]({% slug control-type-a-cannot-be-cast-to-control-type-b-exception %})

* [Visual Studio Crashes If the Project Uses Microsoft Report Viewer When Designing a Local Report (.rdlc) and Adding a Dataset]({% slug vs-crashes-if-ms-report-viewer-used-for-local-reports-adding-datasets %})

* [Designer Files Are Not Updated or Are Lacking Telerik Controls]({% slug designer-files-not-updated-missing-telerik-controls %})

* [Design-Time Issues with Visual Studio 2008]({% slug design-time-issues-vs-2008 %})

* [Distorted Appearance When Using Designer on HiDPI Monitors]({% slug distorted-appearance-using-designer-on-hidpi-monitors %})

## Visual Studio ToolBox

* [The Telerik UI for ASP.NET AJAX Controls Do Not Appear in the ToolBox]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting %})

* [The ToolBox Contains Old Item Registrations]({% slug vs-toolbox-containing-old-item-registrations %})

* [Missing or Disabled ToolBox Items]({% slug vs-toolbox-items-missing-or-disabled %})

## Skins

* [Incorrect or Distorted Appearance]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting %})

* [Appearance Issues When the Control Is Added during an AJAX Request]({% slug appearance-issues-when-adding-controls-during-ajax-requests %})

* [`Telerik.Web.UI.(Telerik Control) with ID='(Telerik Control ID)' was unable to find embedded skin with name '(Skin Name)'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false`]({% slug unable-to-find-embedded-skin %})

* [Different Rendering between the Design-Time Preview and in the Browser]({% slug different-render-design-time-browser %})

* [The `GetWebResourceUrl` Fails]({% slug getwebresourceurl-fails %})

## jQuery Integration

Unobtrusive validation uses the HTML5 attributes and jQuery for validation purposes. It is enabled by default for all .NET 4.5 projects and requires a jQuery library that is registered with the ScriptManager as `jquery`. To add this registration, install the [`AspNet.ScriptManager.jQuery` NuGet package](https://www.nuget.org/packages/AspNet.ScriptManager.jQuery/).

In addition, when the page contains a ScriptManager control, you need to instruct it to register jQuery before the `WebForms.js` and `WebUIValidation.js` core script files that provide the unobtrusive validation. For more information about this requirement, refer to the [Unobtrusive validation breaks with a Script Manager on the page](https://connect.microsoft.com/VisualStudio/feedback/details/748064/unobtrusive-validation-breaks-with-a-script-manager-on-the-page) Microsoft Connect feedback item.

The unobtrusive validation is automatically configured when you create a web site through the .NET 4.5 Web Forms Site template of Visual Studio. If you use it with a `RadScriptManager` or in a Telerik website or web application template, however, a few common scenarios that require additional modifications may occur. For more information, refer to the [troubleshooting scenarios on integrating jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting%}).

Most of the issues related to the jQuery integration are related to the Unobtrusive Validation mode. You can avoid jQuery and validation problems with a single line in the `web.config` file that will disable the unobtrusive validation:

        <appSettings>
            <add key="ValidationSettings:UnobtrusiveValidationMode" value="None"/>


* [Unobtrusive Validation in .NET 4.5 WebForms Site or Application with the ScriptManager]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting %})

* [Unobtrusive Validation in .NET 4.5 Telerik WebSite or Application]({% slug unobtrusive-validation-net45-telerik-site-app %})

* [Unobtrusive Validation in .NET 4.5 Telerik WebSite or Application with jQuery Registered in the ScriptManager]({% slug unobtrusive-validation-net45-telerik-site-app-with-jquery-in-scriptmanager %})

* [`0x800a139e - JavaScript runtime error: SyntaxError`]({% slug 0x800a139e-js-runtime-syntax-error %})
