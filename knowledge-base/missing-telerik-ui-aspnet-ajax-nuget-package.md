---
title: NuGet Package for Telerik UI for ASP.NET AJAX Not Visible in Visual Studio
description: Resolve the issue of the missing NuGet package for Telerik UI for ASP.NET AJAX in Visual Studio due to the .NET Framework version.
type: troubleshooting
page_title: Missing Telerik UI for ASP.NET AJAX NuGet Package in Visual Studio
meta_title: Missing Telerik UI for ASP.NET AJAX NuGet Package in Visual Studio
slug: missing-telerik-ui-aspnet-ajax-nuget-package
tags: editor, asp.net-ajax, nuget, .net-framework, telerik.web.ui
res_type: kb
ticketid: 1717048
---


## Description

I have an active license, but still I cannot find the required version of the NuGet package for Telerik UI for ASP.NET AJAX (e.g., `Telerik.Web.UI.dll >= 2026.2.708 (2026 Q2 SP1)`) in the NuGet Package Manager within Visual Studio. I am trying to upgrade, but the desired package is not showing.

## Cause

Starting with release 2024.2.513 (2024 Q2), the minimum supported .NET Framework version for Telerik UI for ASP.NET AJAX changed to .NET Framework 4.6.2. The `Telerik.UI.for.AspNet.Ajax.Net45` package, used for .NET Framework 4.5 projects, is no longer supported or available for newer versions. The updated package is named `Telerik.UI.for.AspNet.Ajax.Net462`.

## Solution

To resolve the issue, switch to the package compatible with .NET Framework 4.6.2 by following these steps:

1. Uninstall the `Telerik.UI.for.AspNet.Ajax.Net45` package from your project.
2. Search for the `Telerik.UI.for.AspNet.Ajax.Net462` package in the NuGet Package Manager in Visual Studio.
3. Install the `Telerik.UI.for.AspNet.Ajax.Net462` package. This package includes the desired version `2026.2.708 (2026 Q2 SP1)`.

Ensure that your project targets .NET Framework 4.6.2 or a later version before installing the updated package.

## See Also

- [NuGet Packages for Telerik UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/installation/install-from-nuget)
- [.NET Support](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/prerequisites/dotnet-support)
