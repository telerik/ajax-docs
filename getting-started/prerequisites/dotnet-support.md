---
title: .NET support
page_title: .NET support
description: Learn about the supported .NET versions
slug: getting-started/prerequisites/dotnet-support
tags: system, requirements, dotnet, dotnet support
published: True
position: 1
---

# .NET Framework Support

## What is .NET Framework?

[.NET Framework](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework) is a software framework developed by Microsoft that provides a platform for building and running applications on Windows operating systems. It includes a large library of pre-built code and a runtime environment that manages the execution of applications.

For [ASP.NET Web Forms](https://learn.microsoft.com/en-us/aspnet/web-forms/) projects, .NET Framework provides the underlying technology that allows developers to create dynamic and interactive web applications. It provides a rich set of APIs, tools, and services that enable developers to build complex web applications with minimal coding effort.

## Microsoft .NET Framework lifecycle

You can find the start and end dates of support for the different .NET versions on this page: [Support dates](https://learn.microsoft.com/en-us/lifecycle/products/microsoft-net-framework).


## Telerik UI for ASP.NET AJAX versions compatibility with Microsoft .NET Framework

You can find the releases that introduce  builds created against the various .NET versions on this page [.NET Support](https://www.telerik.com/aspnet-ajax/tech-sheets/net-support).

## End of Support for .NET Framework in Telerik UI for ASP.NET AJAX

### Discontinued .NET versions:

- .NET Framework 3.5
- .NET Framework 4.0
- .NET Framework 4.5
- .NET Framework 4.6
- .NET Framework 4.6.1

### Supported .NET versions

- .NET Framework 4.6.2
- .NET Framework 4.7
- .NET Framework 4.7.1
- .NET Framework 4.7.2
- .NET Framework 4.8
- .NET Framework 4.8.1

### Timeline of Support Changes:
- **R1 2023 SP2 (March 23, 2023):** This is the final release that includes support and assemblies for .NET Framework 3.5 and 4.0. If your projects depend on these versions, consider upgrading to continue receiving support and new features.
  
- **R2 2023:** Starting with this release, Telerik UI for ASP.NET AJAX will only provide assemblies compatible with .NET Framework 4.5.x and later versions. This change ensures compatibility with modern technologies and enhanced performance.

- **2024 Q2 (May 15, 2024):** Marking the end of support for .NET 4.5 through 4.6.1. From this point forward, the product will support only .NET 4.6.2 or newer. Upgrading is crucial to leverage the latest advancements and continued technical support.

### Benefits of Upgrading to .NET 4.6.2 or Later:
Upgrading to .NET 4.6.2 or newer versions offers significant advantages:
- **Improved Performance:** Faster execution and reduced resource consumption.
- **Enhanced Security:** New security features help protect your applications from emerging threats.
- **New Features and APIs:** Access to the latest .NET capabilities for building robust applications.
- **Better Debugging and Diagnostics:** Enhanced tools simplify the process of finding and fixing bugs.
- **Expanded Platform Support:** Compatibility with the latest platforms and technologies ensures your applications stay relevant.
- **Support for Telerik Document Processing Library:** Utilize powerful document processing features within your projects.

## Is .NET Framework 4.5 and later backward compatible with the earlier versions?
According to the [Microsoft Backward compatibility article](https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/version-compatibility#backward-compatibility), the .NET Framework 4.5 and later versions are backward-compatible with apps that were built with earlier versions of the .NET Framework. This is also true for the Telerik UI for ASP.NET AJAX assemblies built for .NET 3.5 and 4.0 - they will continue to work without modifications in projects targeting newer .NET versions, up to 4.8.1.

> Applications and components built with previous versions will work without modification on the .NET Framework 4.5 and later versions.

## How the discontinuation of .NET 3.5-4.0 affects my ASP.NET Web Forms project(s)?

If your project(s) are already running on a .NET version 4.6.2 or newer, no action is necessary.

If your project(s) are running on .NET 3.5, 4.0, or any version up to 4.6.1:

* [Recommended] Upgrade the .NET version of the project to at least 4.6.2 by following the [Microsoft Migrate to .NET Framework 4.8, 4.7, and 4.6.2 guide](https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/). This will allow you to keep your Telerik UI for ASP.NET AJAX assemblies up to date, benefiting from the latest browser support, enhanced security and stability, as well as new features and UI components. Upgrading to .NET 4.6.2 or later is particularly beneficial as it ensures full compatibility with the most recent updates and support policies of Telerik products.
* [Not Recommended] Continue running your project on .NET 3.5, 4.0, or versions 4.5 to 4.6.1. However, be aware that you will not be able to upgrade your Telerik UI for ASP.NET AJAX beyond the respective last supported releases for these versions. Specifically, no new builds will be produced for .NET 3.5 or 4.0 beyond R1 2023 SP2, and for .NET 4.5 to 4.6.1 after the 2024 Q2 release.

## What to do in case of troubles when updating to .NET 4.6.2 or later?
If your app or component doesn't work as expected on .NET Framework 4.6.2 or a later version, check the following troubleshooting resources:

* [Microsoft Backward compatibility article troubleshooting checklist](https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/version-compatibility#:~:text=if%20your%20app%20or%20component%20doesn't%20work%20as%20expected%20on%20.net%20framework%204.5%20or%20a%20later%20version%2C%20use%20the%20following%20checklists%3A) -  This comprehensive guide from Microsoft covers common issues that can occur when installing or using .NET Framework, as well as tips for troubleshooting and resolving those issues.
* [Use Unobtrusive Validation in .NET 4.5 Telerik Site or Application](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/unobtrusive-validation-net45-telerik-site-app)
* JavaScript errors due to Unobtrusive Validation in .NET 4.5+:
  * [TypeError: h is not a constructor at Sys.Component.create](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-typeerror-h-is-not-a-constructor)
  * [JavaScript console error Telerik is not defined](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-error-telerik-is-undefined)
  * [WebForms UnobtrusiveValidationMode requires a ScriptResourceMapping for 'jquery'. Please add a ScriptResourceMapping named jquery(case-sensitive)](https://stackoverflow.com/questions/16660900/webforms-unobtrusivevalidationmode-requires-a-scriptresourcemapping-for-jquery)
  * Share the problem in the [Telerik forums](https://www.telerik.com/forums/aspnet-ajax) or in the [Support Ticketing system](https://www.telerik.com/account/support-tickets).


