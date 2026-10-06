---
title: Unable to Connect to Telerik_v3 Package Source When Behind a WebProxy
description: Troubleshoot issues connecting to the Telerik_v3 package source behind a WebProxy and learn how to set up a local NuGet package source for UI for ASP.NET AJAX.
type: troubleshooting
page_title: Telerik_v3 NuGet Package Source Connection Issue Behind WebProxy
meta_title: Telerik_v3 NuGet Package Source Connection Issue Behind WebProxy
slug: telerik-v3-nuget-package-webproxy
tags: asp.net ajax, nuget, package manager, webproxy, local package source
res_type: kb
ticketid: 1718633
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.3.811 </td>
</tr>
</tbody>
</table>

## Description

I cannot connect to the Telerik_v3 package source behind a WebProxy. A login popup appears, but I do not have credentials for the WebProxy. My project cannot use `Telerik.UI.for.AspNet.AJAX` version 2026.3.812. I want to include this package in my project without relying on the online package source.

## Cause

The issue occurs because the WebProxy blocks access to the Telerik online feed, making it impossible to download the NuGet package directly. This prevents the project from using the required package.

## Solution

To resolve this issue, download the required NuGet package from your Telerik account and install it from a local package source. Follow these steps:

1. Download the `Telerik.UI.for.AspNet.AJAX.2026.3.812.nupkg` package from your [Telerik account](https://www.telerik.com/account/downloads/product-download?product=RCAJAX).
2. Create a local folder, for example, `C:\TelerikPackages`.
3. Place the downloaded NuGet package in the `C:\TelerikPackages` folder.
4. Open Visual Studio and go to **Tools > NuGet Package Manager > Package Manager Settings > Package Sources**.
5. Add `C:\TelerikPackages` as a new package source.
6. In the NuGet Package Manager, select the new local source and install `Telerik.UI.for.AspNet.AJAX` version 2026.3.812.

### Important Notes:
- Keep `nuget.org` enabled in the package sources list. Public dependencies like `Telerik.Licensing` are restored from there.
- Ensure you have a valid Telerik license key when building the project.

### Optional: Disable Telerik_v3 Temporarily
If the restore process still attempts to connect to the Telerik online feed:
1. Disable the Telerik_v3 package source temporarily in the **Package Sources** settings.
2. Restore the project again.

## See Also

- [Set Up a Local Folder as a NuGet Package Source](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/common-local-folder-nuget-server) 
