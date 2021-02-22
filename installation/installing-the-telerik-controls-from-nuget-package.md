---
title: Installing the Telerik Controls from a NuGet Package
page_title: Installing the Telerik Controls from a NuGet Package
description: Check our Web Forms article about Installing the Telerik Controls from a NuGet Package.
slug: introduction/installation/installing-the-telerik-controls-from-a-nuget-package
tags: installing,the,telerik,controls,from,nuget,package
published: True
position: 4
---

# Installing the Telerik Controls from a NuGet Package

This article explains how to install and use the NuGet feed and packages provided by Telerik to get the Telerik® UI for ASP.NET AJAX controls in your project.

> To use the UI for ASP.NET AJAX controls, you need to install ASP.NET Web Forms on your development/production machine. ASP.NET Web Forms is available in the .NET 4.0-4.8 installations.

## How-to Video

* If you enjoy how-to videos, take a look at the following video that demonstrates how to add the Telerik NuGet feed to Visual Studio.

* If you prefer the written instructions, continue to the [Telerik NuGet Feed in Visual Studio](#telerik-nuget-feed-in-visual-studio) section.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c3m_BLMXNDk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Telerik NuGet Feed in Visual Studio

Telerik provides a NuGet feed (package source) that you can add to Visual Studio. This allows you to quickly add the required Telerik packages to your project.

To configure the Telerik NuGet Feed in Visual Studio:

1. Open Visual Studio.

1. Go to **Tools** > **NuGet Package Manager** > **Package Manager Settings**, select **Package Sources** and then click the **+** button to add a new package source.

1. Enter a **Name** for the new package source, for example, **Telerik NuGet**.

1. Add the **https://nuget.telerik.com/nuget** URL as a **Source** and click **OK**.

	>caption Figure 1: Visual Studio NuGet Package Manager and Telerik NuGet Feed

	![Visual Studio NuGet Package Manager and Telerik NuGet Feed](images/telerik-nuged-feed-in-npm.png)

You have successfully added the Telerik NuGet feed as a Package source. The steps below describe how to authenticate your local NuGet instance, display the available packages, and install a package:

1. Create a new WebForms project or open an existing one.

1. Go to **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution...**.

1. Select the Telerik NuGet **Package source** from the drop-down list on the left.

1. Select the **Browse** tab to see the available packages. This tab is called **Online** in older VS versions.

1. Enter your Telerik credentials in the Windows Authentication dialog.

	>caption Figure 2: Enter your Telerik.com credentials to access the Telerik NuGet feed

	![Enter your Telerik.com credentials](images/telerik-nuget-credentials.png)

1. Select the desired Telerik UI for ASP.NET AJAX package and click **Install**. To select the correct package version for your project:

	* The .NET version of your project must correspond to the `.Net<version>` portion of the package name. For example, the correct package for `.NET Framework 4` projects is `Telerik.UI.for.AspNet.Ajax.Net40`.

	>caption Figure 3: Adding the Telerik® UI for ASP.NET AJAX package to the solution

	![Adding the Telerik® UI for ASP.NET AJAX package to the solution](images/add-telerik-package.png)

## Available Telerik NuGet packages

The Telerik NuGet Feed allows you to install not only the UI for ASP.NET AJAX packages. You can also install packages with:

* [Telerik ZIP Library]({%slug introduction/installation/included-assemblies %}#telerik-zip-library).

* [Telerik Spreadsheet Library]({%slug introduction/installation/included-assemblies %}#telerik-spreadsheet-library).

* [Telerik Document Processing Libraries]({%slug introduction/installation/included-assemblies %}#telerik-document-processing-libraries).

The following table lists the packages available in the Telerik NuGet Feed and the assemblies that they contain:

| NuGet package | Included assemblies |
|---------------|------------|
|Telerik.UI.for.AspNet.Ajax.Netxx.xxxx.x.xxx.nupkg | Telerik.Web.Design.dll, Telerik.Web.Device.Detection.dll, Telerik.Web.UI.dll, Telerik.Web.UI.Skins.dll |
| Telerik.Windows.Zip.xxxx.x.xxx.nupkg | Telerik.Windows.Zip.dll |
| Telerik.Windows.Zip.Extensions.xxxx.x.xxx.nupkg | Telerik.Windows.Zip.Extensions.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll |
| Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.nupkg | Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll |
| Telerik.Windows.Documents.Spreadsheet.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Spreadsheet.dll |
| Telerik.Windows.Documents.Flow.FormatProviders.Pdf.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll |
| Telerik.Windows.Documents.Flow.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Flow.dll |
| Telerik.Windows.Documents.Fixed.xxxxx.x.xxx.nupkg | Telerik.Windows.Documents.Fixed.dll |
| Telerik.Windows.Documents.CMapUtils.xxxx.x.xxx.nupkg | Telerik.Windows.Documents.CMapUtils.dll |
| Telerik.Windows.Documents.Core.xxxxx.x.xxx4.nupkg | Telerik.Windows.Documents.Core.dll |
| Telerik.Windows.Documents.SpreadsheetStreaming.xxxxx.x.xxx.nupkg | Telerik.Documents.SpreadsheetStreaming.dll |

## Downloading a NuGet Package

You can download *.nupkg* files locally and [build a private feed](https://www.telerik.com/blogs/power-your-projects-with-telerik---now-with-the-convenience-of-nuget) for your company.

>important Such a feed must be private (i.e., not available to the general Internet) and the standard developer-seat [licensing model]({%slug introduction/licensing/license-agreement%}) applies (i.e., the developers working with the controls must have active licenses). If you have questions on the licensing scheme, send them to telerik-sales@progress.com.

To download *.nupkg* files locally:

1. Navigate to [Your Account](https://www.telerik.com/account/).

1. Go to the [Downloads page of UI for ASP.NET AJAX](https://www.telerik.com/account/product-download?product=RCAJAX).

1. Click on the *.nupkg* files you require (e.g., *Telerik.UI.for.AspNet.Ajax.Net45.2016.3.1027.nupkg*) to download them. The file name is built in the following format: `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>.<Telerik controls version>.nupkg`.

1. Configure your server and projects to use the feed.

## Automated Builds

Often enough, you would want to set up Continuous Integration and/or Continuous Delivery (CI/CD) pipelines or builds for your project that uses the Telerik components. This is a valid scenario and the "one license per developer" license does not prevent you from doing so. The Telerik components are commercial software and as such can only be distributed through channels that are private and/or behind authentication.

There are a couple of common ways people implement CI/CD automated builds:

* You can put your own credentials (or the credentials of the license holder, depending on how your licenses are set up) in the nuget.config of the build machine/pipeline. In many cases, when doing so, they will even be encrypted when you add the Telerik feed source through the CLI. Alternatively, you can copy an encrypted version from your own local config if you have one and if plain text is an issue. You can read more about adding credentials via the NuGet.config in the following page: [https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials](https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials).

* Creating a local folder (for example, on a shared network drive or other suitable location accessible by your builds and team) that holds the `.nupkg` files we provide (you can download them from your telerik.com account).

You must protect your credentials and ensure they are used only by you and not by other developers, according to the [license-per-developer policy](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). For example, take your encrypted password from your local NuGet.config file and use it on the build PC. They can by such colleagues (like other developers, QAs, designers, front-end devs, DBAs and so on) for building and running a solution, provided they do not use the Telerik components to create functionality. Of course, you must ensure that such credentials or package sources are not available to the general public (for example, in public repositories). 

## Troubleshooting

### Incorrect credentials and how to reenter them

The setup can get stuck in a circular reference problem if you enter incorrect credentials the first time.
In order to reset or edit the nuget feed credentials:

1. Close Visual Studio
1. Open Control Panel -> All Control Panel Items -> Credential Manager or simply press Win button and type Manage Windows Credentials and open the manager.
1. Look for VSCredentials_nuget.telerik.com -> remove or edit the password.
1. Open Visual Studio and try to access the nuget.telerik.com feed again.

### Error Unable to load the service index for source https://nuget.telerik.com/nuget

Make sure that the Telerik NuGet Feed is live at [https://status.telerik.com/](https://status.telerik.com/).

### Error: The schema version of '<namespace>' is incompatible with version 2.0.30625.9003 of NuGet. Please upgrade NuGet to the latest version.

In R1 2018, the `nuget.exe` version we use was updated from `2.8` to `4.3`. This is the executable file used to generate and read the `.nupkg` files.

Due to this update, you may get the error below when using Visual Studio 2012 that uses the NuGet Package Manager version 2.0. The **solution is to upgrade the NuGet Package Manager to version 2.8**.

## Additional Resources

* [Azure DevOps and Telerik NuGet Packages](https://www.telerik.com/blogs/azure-devops-and-telerik-nuget-packages)
