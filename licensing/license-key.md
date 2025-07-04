---
title: Setting Up Your License Key
page_title: Setting Up Your License Key File
description: Learn how to install a Telerik license key file, which is required during application building and deployment.
slug: licensing/license-key
tags: installation, license, key
position: 1
---

# Setting Up Your Telerik UI for ASP.NET AJAX License Key

Starting with **2025 Q1**, Telerik UI for ASP.NET AJAX requires activation through a License Key. The `Telerik.Web.UI.dll` assembly now depends on `Telerik.Licensing.Runtime.dll` which can be obtained from NuGet ([https://www.nuget.org/packages/Telerik.Licensing](https://www.nuget.org/packages/Telerik.Licensing)) or from the Telerik UI for ASP.NET AJAX installations.

This article describes how to download your personal license key and use it to activate the Telerik UI for ASP.NET AJAX components.

A missing or invalid license results in [errors and warnings]({%slug licensing/license-errors-warnings%}) during build and run-time indicators such as watermarks and banners.

## Setup your License Key

Due to the differences between `Web Application Project` and `Web Site Project`, the steps to activate the license will differ. 

`Web Application Projects` have a `.csproj`/`.vbproj` file, whereas the `Web Site Projects` do not. For more details about the differences you can check out the following Microsoft documentation article: [Web Application Projects versus Web Site Projects in Visual Studio](https://learn.microsoft.com/en-us/previous-versions/aspnet/dd547590(v=vs.110)?redirectedfrom=MSDN). 

### Web Applications using NuGet

Only for Web Application projects that have the `Telerik.UI.for.AspNet.Ajax.Net462` and `Telerik.Licensing` packages installed from NuGet, can be activated using a License File. Otherwise, an assembly attribute is required, see [Web Applications without NuGet and Web Sites](#web-applications-without-nuget-and-web-sites) section.

To download and install your Telerik license key file:

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
2. Click the **Download License Key** button.
3. Save the `telerik-license.txt` file to your user profile directory `%AppData%\Telerik\telerik-license.txt`, for example, `C:\Users\...\AppData\Roaming\Telerik\telerik-license.txt`

>This will make the license key available to all Telerik applications that you develop on your local machine. If you need to activate Telerik UI for ASP.NET AJAX only in a specific application, save the `telerik-license.txt` to the root folder of this project or solution.

### Web Applications without NuGet and Web Sites

Web Applications projects that do not use NuGet and Web Site projects require an assembly attribute, containing the License Key. Follow the steps below:

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
1. On the Telerik UI for ASP.NET AJAX row, click the `View key` link.
1. Select the language (`C# KEY` or `VB KEY`) and click the `Copy and close` button to copy the Script Key to your clipboard.
1. Adding the License Key script:
    - **Web Application**: Paste the copied key to the `Properties > AssemblyInfo` (C# Apps) or `My Project > AssemblyInfo` (VB Apps)
    - **Web Site**: Add a C#/VB Class file to the `App_Code` directory of your project, e.g. `App_Code\TelerikLicense.cs` and paste the Script Key from your clipboard.    

>To activate the license in other projects, repeat these steps.

## See Also

* [License Activation Errors and Warnings]({%slug licensing/license-errors-warnings%})
* [Adding the License Key to CI Services]({%slug licensing/add-license-to-ci-cd%})
* [Frequently Asked Questions about Your Telerik UI for ASP.NET AJAX License Key]({%slug licensing/licensing-faq%})
