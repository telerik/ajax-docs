---
title: Setting Up Your License Key
page_title: Setting Up Your License Key File
description: Learn how to install a Telerik license key file, which is required during application building and deployment.
slug: licensing/license-key
tags: installation, license, key
position: 1
---

# Setting Up Your Telerik UI for ASP.NET AJAX License Key

>Starting with the **2025 Q1** release, the UI components from the Telerik UI for ASP.NET AJAX library require activation through a license key (trial or commercial). 

This article describes how to download your personal license key and use it to activate the Telerik UI for ASP.NET AJAX components.

A missing or invalid license results in [errors and warnings]({%slug licensing/license-errors-warnings%}) during build and run-time indicators such as watermarks and banners.

## Downloading the License Key

>warning The license key file is personal and confidential. Do not commit this file to source control and do not save it to a publicly accessible location!

To download a license key for Telerik UI for ASP.NET AJAX, you must have either a developer license or a trial license. If you are new to Telerik UI for ASP.NET AJAX, [sign up for a free trial](https://www.telerik.com/aspnet-ajax) first, and then follow the steps below:

1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys?_gl=1*cgbz4c*_gcl_au*MTIyNTMyNzI1My4xNzMyMDI2NzU3*_ga*MjAyMTI5MTQ4MS4xNzMyMDI2NzU1*_ga_9JSNBCSF54*MTczOTM0ODI2NS4xNi4xLjE3MzkzNTkxMTcuNTMuMC4w) page in your Telerik account.
2. Click the **Download License Key** button.
   !["Download License Key"](images/download-license-key.png "Download License Key")
3. Next, [Activate your Telerik UI for ASP.NET AJAX components](#activating-the-telerik-ui-for-asp-net-ajax-components).

The [Progress Control Panel](https://docs.telerik.com/controlpanel/introduction), [automated installers]({%slug getting-started/installation/install-using-msi%}), and the [Visual Studio Extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%}) will automatically download and store your license key in your home directory. This makes it available for all projects that you develop on your local machine.

## Activating the Telerik UI for ASP.NET AJAX Components

>important If your project doesn’t use NuGet packages, or you have a Web Site project, follow the instructions from the [Installing a License Key in Projects without NuGet References](#installing-a-license-key-in-projects-without-nuget-references) section.

To activate the Telerik UI for ASP.NET AJAX controls:

- Copy the downloaded `telerik-license.txt` license key file to your home directory. This makes the license key available to all projects that you develop on your computer:
  - For Windows: `%AppData%\Telerik\telerik-license.txt`
  - For Mac/Linux: `~/.telerik/telerik-license.txt`
  - Alternatively, copy the `telerik-license.txt` license key file to the root folder of your project. This makes the license key available only to this project. Do not commit the file to source control as this is your personal license key.

When you build the project, the `Telerik.Licensing` NuGet package automatically locates the license file and uses it to activate the WebForms controls.

## Installing a License Key in Projects without NuGet References

Telerik strongly recommends the use of NuGet packages whenever possible. Only include the license key as a code snippet when NuGet packages are not an option.

1. If you cannot use NuGet packages in your project, add the license as a code snippet:
2. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.
3. On the Telerik UI for ASP.NET AJAX row, click the **View key** link in the **SCRIPT KEY** column.
   !["Alt Text"](images/view-script-key.png "Alt Text")
4. Copy the C# code snippet into a new file, for example, `TelerikLicense.cs`.
5. Add the `TelerikLicense.cs` file to your project.
   - In case of Web Site project, add the file to the `App_Code` folder.

## See Also

* [License Activation Errors and Warnings]({%slug licensing/license-errors-warnings%})
* [Adding the License Key to CI Services]({%slug licensing/add-license-to-ci-cd%})
* [Frequently Asked Questions about Your Telerik UI for ASP.NET AJAX License Key]({%slug licensing/licensing-faq%})
