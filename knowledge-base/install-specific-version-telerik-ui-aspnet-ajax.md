---
title: Installing a Specific Older Version of Telerik UI for ASP.NET AJAX
description: A guide on finding out the current version of Telerik UI for ASP.NET AJAX used in your project and installing that specific version.
type: how-to
page_title: How to Install an Older Version of Telerik UI for ASP.NET AJAX
slug: install-specific-version-telerik-ui-aspnet-ajax
tags: progress, telerik, ui, asp.net, ajax, version, install, download
res_type: kb
ticketid: 1667896
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description
I need to ensure that a new programmer in our team has the same older version of Telerik UI for ASP.NET AJAX as the rest of the team. How can I find out the current version we are using and then obtain and install that exact version?

This KB article also answers the following questions:
- How can I check the version of Telerik UI for ASP.NET AJAX in my project?
- Where can I download an older version of Telerik UI for ASP.NET AJAX?
- What are the steps to install a specific version of Telerik UI for ASP.NET AJAX?

## Solution

### Determine the Current Version
To find out the current version of Telerik UI for ASP.NET AJAX used in your project:
1. Navigate to the project's Bin folder.
2. Locate the `Telerik.Web.UI.dll` file.
3. Right-click the file, select Properties, and check the version under the Details tab.
4. Alternatively, in Visual Studio, check the version in the project references.

For more information, see [How to find out which is the used version of Telerik.Web.UI in the web application](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/common-assembly-version).

### Access Telerik Account
- Ensure you have access to your Telerik account at [https://www.telerik.com/account/downloads](https://www.telerik.com/account/downloads).

### Download the Correct Version
1. Log in to your Telerik account.
2. Navigate to the product download page for UI for ASP.NET AJAX at [https://www.telerik.com/account/downloads/product-download?product=RCAJAX](https://www.telerik.com/account/downloads/product-download?product=RCAJAX).
3. Expand the "Versions" dropdown to find and select the required version.
4. Download the selected version.

### Installation
- To install the controls, use the MSI files provided in the download or extract the DLLs from hotfix archives and add them to your project.

Refer to the following resources for more details on installation:
- [Installation Approaches](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/installation/installation-approaches)
- [Which File Do I Need to Install](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/installation/which-file-do-i-need-to-install)
- [Included Assemblies](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/installation/included-assemblies)
- [Using Hotfix](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/installation/using-hotfix)
- [Install Telerik UI for ASP.NET AJAX using MSI]({%slug getting-started/installation/install-using-msi%})
- [Install Telerik UI for ASP.NET AJAX using ZIP]({%slug getting-started/installation/install-from-zip%})

## See Also
- [Telerik UI for ASP.NET AJAX Documentation](https://docs.telerik.com/aspnet-ajax/introduction)

