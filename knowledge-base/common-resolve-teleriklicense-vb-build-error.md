---
title: Resolving TelerikLicense.vb Build Error for ASP.NET AJAX 2025 Q1 License Key
description: This article provides solutions for the TelerikLicense.vb build error encountered when updating to the ASP.NET AJAX 2025 Q1 assemblies.
type: troubleshooting
page_title: Fixing Build Error with ASP.NET AJAX 2025 Q1 TelerikLicense.vb File
slug: common-resolve-teleriklicense-vb-build-error
tags: license, build error, asp.net ajax, vb
res_type: kb
ticketid: 1678633
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Progress® Telerik® UI for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description

Updating web projects with the new 2025 Q1 assemblies for Progress® Telerik® UI for ASP.NET AJAX results in a build error related to the `TelerikLicense.vb` file. The build error `error BC30034: Bracketed identifier is missing closing ']'` occurs when trying to follow the instructions for adding the license key to the project. Additionally, the Telerik License Key view uses C# syntax, which the VB compiler does not understand.

## Cause

The cause of the build error is the incorrect syntax used in the `TelerikLicense.vb` file. The VB compiler does not recognize the C# syntax provided in the Telerik License Key view.

## Solution

To resolve the build error, use the correct VB syntax in the `TelerikLicense.vb` file. Replace the content of the `TelerikLicense.vb` file with the following VB syntax:

```vb
<Assembly: Telerik.Licensing.EvidenceAttribute("...your license code string...")>
```

Replace `...your license code string...` with your actual license code string from your Telerik account.

Alternatively, to prevent licensing warnings and make the license key available to all Telerik .NET apps you develop on your local machine, follow these steps:

1. Go to the [License Keys page](https://www.telerik.com/account/your-licenses/license-keys) in your Telerik account.
2. Click the `Download License Key` button.
3. Save the `telerik-license.txt` file to one of the following directories on your local machine:
   - `%AppData%\Telerik\telerik-license.txt` (e.g., `C:\Users\...\AppData\Roaming\Telerik\telerik-license.txt`)
   - `C:\inetpub\wwwroot\telerik-license.txt`
   - `C:\inetpub\telerik-license.txt`
   - `C:\telerik-license.txt`


## See Also

- [Progress® Telerik® UI for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/)
- [Managing Your Telerik License Keys](https://www.telerik.com/account/your-licenses/license-keys)
