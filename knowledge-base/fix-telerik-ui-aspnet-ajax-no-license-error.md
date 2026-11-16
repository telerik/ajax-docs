---
title: Resolving "No license found for Telerik UI for ASP.NET AJAX"
description: Fix the "No license found" or "We couldn't verify your license key for Telerik UI for ASP.NET AJA" errors for Telerik UI for ASP.NET AJAX by following the correct license activation steps based on your project type.
type: troubleshooting
page_title: Fix Telerik UI for ASP.NET AJAX License Error
meta_title: Fix Telerik UI for ASP.NET AJAX License Error
slug: fix-telerik-ui-aspnet-ajax-no-license-error
tags: telerik ui, asp.net ajax, license error, project type, evidence attribute, assemblyinfo.cs
res_type: kb
ticketid: 1696523
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
<td> 2025 Q1 + </td>
</tr>
</tbody>
</table>

## Description

I encounter the error `No license found for Telerik UI for ASP.NET AJAX` or `We couldn't verify your license key for Telerik UI for ASP.NET AJA` despite having a valid license and ensuring the license key has been downloaded into Visual Studio. This issue happens in both local development and publishing environments. 

## Cause

The error occurs because Visual Studio cannot locate or validate the required license file or Script key attribute for Telerik UI for ASP.NET AJAX. The license activation process varies based on the ASP.NET Web Forms project type, which is either a Web Application or a Web Site project.

## Solution

To resolve the issue, follow the steps based on your project type:

### For Web Application Projects (have a .csproj or .vbproj file):

#### Using NuGet 
1. Install the latest [Telerik.Licensing](https://www.nuget.org/packages/Telerik.Licensing) NuGet package.
2. Download the `telerik-license.txt` file from the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page.
3. Place the `telerik-license.txt` file in `%AppData%\Telerik\` (e.g., `C:\Users\YourUserName\AppData\Roaming\Telerik\`).
4. Rebuild the project.

#### Without NuGet
1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
2. Click the `Script key` link in the Telerik UI for ASP.NET AJAX row.
3. Select your preferred language and copy the license key.
4. Add the license key as an assembly attribute in `AssemblyInfo.cs` or create a new file like `TelerikLicense.cs`:

```C#
[assembly: global::Telerik.Licensing.EvidenceAttribute("your-license-key-here")]
```

For VB.NET projects, use:

```VB
<Assembly: Telerik.Licensing.EvidenceAttribute("your-license-key-here")>
```

5. Rebuild the project.

### For Web Site Projects

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
2. Click the `Script key` link in the Telerik UI for ASP.NET AJAX row.
3. Select your preferred language and copy the license key.
4. Add a class file to the `App_Code` folder: `TelerikLicense.cs` for C# or `TelerikLicense.vb` for VB.NET.
5. Paste the license key as an assembly attribute:

```C#
[assembly: global::Telerik.Licensing.EvidenceAttribute("your-license-key-here")]
```

For VB.NET projects, use:

```VB
<Assembly: Telerik.Licensing.EvidenceAttribute("your-license-key-here")>
```

6. Rebuild your site and restart Visual Studio.

#### If the script-key file is already present

If a Web Site still displays **No license found** after you add the script-key file, continue with these checks instead of repeating the placement steps:

1. Verify the file contents, not only its location. Copy the complete Script key for Telerik UI for ASP.NET AJAX from your account, selecting **VB KEY** for a VB.NET Web Site. The `your-license-key-here` value in the examples is a placeholder, not a license key. Use the Script key, not the contents of `telerik-license.txt`. See [Setting Up Your License Key]({%slug licensing/license-key%}#web-applications-without-nuget-and-web-sites).
2. Record the complete banner or exception text and whether it appears locally, after deployment, or both. Distinguish runtime errors from build-task messages. The `TKL` codes in [License Activation Errors and Warnings]({%slug licensing/license-errors-warnings%}) describe build-task messages; do not require one before investigating a runtime banner.
3. Check the installed `Telerik.Licensing` version before enabling [Runtime Diagnostics]({%slug licensing/troubleshooting%}#runtime-diagnostics). The diagnostics API requires version **1.6.24 or later**. Follow the linked instructions to enable diagnostics before using Telerik controls, for example in `Application_Start` in `Global.asax`. A Web Site has no `.vbproj` or `.csproj` file, so use the runtime instructions rather than project-file build-verbosity settings.
4. If the error persists, contact [Telerik Support](https://www.telerik.com/account/support-center) through a private support ticket. Include the exact error text, Telerik UI and licensing runtime versions, where the error occurs, and a minimal reproduction without license keys.

>important Do not post license keys or unredacted diagnostic logs in public forums or chat. Remove license key values and personal information before sharing diagnostic output.

## See Also

- [Setting Up Your Telerik UI for ASP.NET AJAX License Key](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key#web-applications-using-nuget)
- [Web Applications with NuGet Licensing](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key#web-applications-using-nuget)
- [Web Applications without NuGet and Web Sites Licensing](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key#web-applications-without-nuget-and-web-sites)
- [Telerik.Licensing NuGet Package](https://www.nuget.org/packages/Telerik.Licensing)
- [YouTube Video: Fix Telerik UI for ASP.NET AJAX License Error Banner & Watermarks (NuGet)](https://www.youtube.com/watch?v=6qvHlqdgEg0)
- [YouTube Video: Removing Telerik AJAX License Error without NuGet](https://www.youtube.com/watch?v=rKvQ3dpPEIw)
- [YouTube Video: Fix Telerik UI License Error in ASP.NET Web Forms Site](https://www.youtube.com/watch?v=UFPV-gFozPE)
