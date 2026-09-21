---
title: Setting Up Your License Key
page_title: Setting Up Your License Key File
description: Learn how to install a Telerik license key file, which is required during application building and deployment.
slug: licensing/license-key
tags: installation, license, key
position: 1
---

# Setting Up Your Telerik UI for ASP.NET AJAX License Key

Starting with **2025 Q1**, Telerik UI for ASP.NET AJAX requires activation through a License Key. The `Telerik.Web.UI.dll` assembly now depends on `Telerik.Licensing.Runtime.dll`, available via NuGet ([https://www.nuget.org/packages/Telerik.Licensing](https://www.nuget.org/packages/Telerik.Licensing)) or the Telerik UI for ASP.NET AJAX installations.

This article shows how to download your personal license key and activate Telerik UI for ASP.NET AJAX.

If the license is missing or invalid, you will see [errors and warnings]({%slug licensing/license-errors-warnings%}) during build and run-time, such as watermarks and banners.

## Choose your licensing method

Because Web Application and Web Site projects differ in structure, the activation steps also differ. Use the table below to quickly pick the correct method.

| Project type    | Using NuGet | License method                       |
|-----------------|-------------|--------------------------------------|
| Web Application | Yes         | License file (`telerik-license.txt`) |
| Web Application | No          | Script key in `AssemblyInfo`         |
| Web Site        | No          | Script key in `App_Code`             |

> Quick check: If your project contains a `.csproj` or `.vbproj` file, it is a Web Application. Otherwise, it is a Web Site project. For additional background, see:
> - [Microsoft guidance: Web Application vs Web Site](https://learn.microsoft.com/en-us/previous-versions/aspnet/dd547590(v=vs.110)?redirectedfrom=MSDN)
> - [Web Site vs Web Application - Key Differences](https://www.youtube.com/watch?v=9gI6t57cDAc)


Now follow the activation steps for your project type:

### Web Applications using NuGet

Only Web Application projects that have the `Telerik.Licensing` package installed from NuGet can be activated using a license file (`telerik-license.txt`). Otherwise, a Script key (assembly attribute) is required, see [Web Applications without NuGet and Web Sites](#web-applications-without-nuget-and-web-sites) section.

To download and install your Telerik license key file:

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
2. Click the **Download License Key** button.
3. Save the `telerik-license.txt` file to your user profile directory `%AppData%\Telerik\telerik-license.txt`, for example, `C:\Users\...\AppData\Roaming\Telerik\telerik-license.txt`

> This makes the license available to all Telerik applications on the local machine. 
> To scope the license to a single project or solution, place `telerik-license.txt` in the root folder of that project or solution.
> The telerik-license.txt is applied during build and does not need to be deployed to the production server.



### Web Applications without NuGet and Web Sites

Web Applications projects that do not use NuGet and Web Site projects require an assembly attribute, containing the License Key. Follow the steps below:

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
1. On the Telerik UI for ASP.NET AJAX row, click the `Script key` link.
1. Select the language (`C# KEY` or `VB KEY`) and click the `Copy and close` button to copy the Script Key to your clipboard.
1. Adding the License Key script:
    - **Web Application**: Paste the copied key to the `Properties > AssemblyInfo` (C# Apps) or `My Project > AssemblyInfo` (VB Apps)
    - **Web Site**: Add a C#/VB Class file to the `App_Code` directory of your project, e.g. `App_Code\TelerikLicense.cs` (or `.vb`) and paste the Script Key from your clipboard.    

> To activate the license in other projects, repeat these steps.

### License file vs Script key
 - **License file** - supported for Web Application projects that use NuGet. It enables license validation during build and runtime.
 - **Script key** - required for Web Applications that do not use NuGet and for Web Site projects.

> The license file method does not work for Web Site projects or for Web Applications that do not use NuGet. Use the Script key in these cases.

### How the license is applied based on project type

| Project Type | How license is applied | File needed on production server |
|--------------|------------------------|----------------------------------|
| Web Application using NuGet | License file (telerik-license.txt) is resolved at build time and embedded by the licensing tooling | ❌ No |
| Web Application without NuGet | Script key attribute is compiled into the assembly | ❌ No |
| Web Site Project | Script key file in `App_Code` is evaluated at runtime | ✅ Yes |


> **Explanation**
> - NuGet Web Applications use the `telerik-license.txt` only on the development machine. The license is embedded during build.
> - Web Applications without NuGet embed the license via an assembly attribute (e.g., in `AssemblyInfo.cs` or `TelerikLicense.cs`).
> - Web Site projects cannot embed attributes into a compiled assembly, so the license file must remain in `App_Code` on the server.

## Troubleshooting a Missing License in a Web Application

If a Web Application still reports **No license found** after `telerik-license.txt` has been downloaded, verify that the file-based method can actually be used by the project and build process:

1. Confirm that the project references the `Telerik.Licensing` NuGet package. A license file alone does not activate a Web Application that does not use this package; use the [Script key](#web-applications-without-nuget-and-web-sites) for a Web Application without NuGet.
2. Confirm that the file is available to the account performing the build. The supported locations are the active user's `%AppData%\Telerik` directory and the project or solution root. In CI, provide the file or license environment variable to the build process rather than relying on a developer's profile.
3. Check whether `TELERIK_LICENSE` or `TELERIK_LICENSE_PATH` is set. When multiple activation sources are present, an environment variable can take precedence over a license file; remove stale or invalid values before rebuilding.
4. Delete stale `bin`, `obj`, and publish output, restore packages, and rebuild. Verify that the deployed `Telerik.Web.UI.dll` and `Telerik.Licensing.Runtime.dll` come from the intended build. Do not copy `telerik-license.txt` or a license key into the production artifact for a Web Application.
5. Distinguish a build warning from a runtime banner or watermark. If the clean build is licensed but the published application still reports a licensing error, inspect the deployed assemblies and confirm that the publish step did not reuse an older artifact.

The legacy `licenses.licx` file is separate from the 2025 Q1 and later license-key mechanism. If other licensed .NET components use `licenses.licx`, remove only the Telerik entries; otherwise follow the [license-file error guidance]({%slug common-how-to-fix-license-file-related-errors%}) before deleting the file.

## Using the Visual Studio Extensions Upgrade Wizard

The [Telerik Visual Studio Extensions Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}) provides automated assistance for license activation when upgrading your projects to the latest version of Telerik UI for ASP.NET AJAX.

### License Key File Assistance (All Project Types)

When you run the Upgrade Wizard, it automatically checks for the `telerik-license.txt` file. If the file is not found:

* An indicator appears in the top-right corner of the wizard
* You can click **Download License Key File** to download it directly from your Telerik account
* You can click **Open License Key Location** to navigate to the folder where the file should be placed

The wizard checks for the license file in:
* Your user profile directory: `%AppData%\Roaming\Telerik\telerik-license.txt`
* The project or solution root folder

The documented Upgrade Wizard workflow does not require a command window, `C:\Windows\System32`, or administrator access. If a separate CLI is suggested by an account portal, verify that tool and command with Telerik licensing support before using it; this documentation does not define a Telerik CLI license-retrieval command.

### Script Key Assistance (Web Site Projects Only)

For **Web Site projects**, the Upgrade Wizard also validates the Script Key in the `App_Code` folder:

* If the Script Key is missing, the wizard displays a **Script Key Required** warning
* Click the **Add Script Key** button to automatically download your Script Key
* The wizard will create a `TelerikLicense.cs` (or `.vb`) file in your `App_Code` directory on the final step before completing the upgrade

This automated approach simplifies the licensing process and ensures your project is properly licensed after the upgrade.


## See Also

* [License Activation Errors and Warnings]({%slug licensing/license-errors-warnings%})
* [Adding the License Key to CI Services]({%slug licensing/add-license-to-ci-cd%})
* [Frequently Asked Questions about Your Telerik UI for ASP.NET AJAX License Key]({%slug licensing/licensing-faq%})
* [Telerik VSX Extensions Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%})
* [ASP.NET Web Forms Web Site vs Web Application in Visual Studio - Key Differences Explained](https://www.youtube.com/watch?v=9gI6t57cDAc)
* [Fix Telerik UI for ASP.NET AJAX License Error Banner & Watermarks (the NuGet approach)](https://www.youtube.com/watch?v=6qvHlqdgEg0)
* [Fix Telerik UI License Error in ASP.NET Web Forms site via EvidenceAttribute (App_Code & Precompile)](https://www.youtube.com/watch?v=UFPV-gFozPE)
* [Removing the Telerik AJAX license error and watermark in ASP.NET Web Forms application](https://www.youtube.com/watch?v=rKvQ3dpPEIw)
