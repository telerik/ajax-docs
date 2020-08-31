---
title: Installing the Telerik Controls from a NuGet Package
page_title: Installing the Telerik Controls from a NuGet Package | UI for ASP.NET AJAX Documentation
description: Installing the Telerik Controls from a NuGet Package
slug: introduction/installation/installing-the-telerik-controls-from-a-nuget-package
tags: installing,the,telerik,controls,from,nuget,package
published: True
position: 4
---

# Installing the Telerik Controls from a NuGet Package



This article explains how to use the NuGet feed and packages provided by Telerik to get the Telerik® UI for ASP.NET AJAX controls in your project.

This feed is available as of Q3 2015 SP1 (ver. 2015.3.1111).

This article contains the following sections:

* [Add the Telerik Private NuGet Feed to Your System](#add-the-telerik-private-nuget-feed-to-your-system)
* [How to use the Telerik NuGet feed in Visual Studio](#telerik-nuget-feed-in-visual-studio)
* [Available Telerik Nuget packages and the ddls in them](#available-telerik-nuget-packages-and-ddls-in-them)
* [How to download a .nupkg file to create local feeds](#downloading-a-nuget-package)
* [Telerik NuGet feed and automated builds](#automated-builds)
* [Troubleshooting](#troubleshooting)


>caution  **Prerequisite** 
>In order to have the Telerik® UI for ASP.NET AJAX running, you will need to have ASP.NET Web Forms installed on your development/production machine. ASP.NET Web Forms is available in the .NET 4.x+ installations.

## Add the Telerik Private NuGet Feed to Your System

The following video explains how you can add the Telerik NuGet feed. If you prefer to do this yourself, follow the rest of this article.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c3m_BLMXNDk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Telerik NuGet Feed in Visual Studio

Telerik provides a NuGet feed that you can use in Visual Studio by following these steps:

1. Open Visual Studio.

1. Go to **Tools** > **NuGet Package Manager** > **Package Manager Settings**, select **Package Manager Sources** and then click the **+** button to add a feed.

1. Add a feed with the following URL: **https://nuget.telerik.com/nuget** and click **OK**.

	>caption Figure 1: Visual Studio NuGet Package Manager and Telerik NuGet Feed

	![Visual Studio NuGet Package Manager and Telerik NuGet Feed](images/telerik-nuged-feed-in-npm.png)

1. Create or load your WebForms project.

1. Go to **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for solution**.

1. Choose the **Online** / **Browse** list of packages (depending on your VS version).

1. Enter your Telerik credentials in the Windows Authentication dialog (e.g., user: *my.name@my.company.com* and password: *myPassPhraseForTelerikDotCom*).

	>tip You can enter your credentials only once by selecting the Remember my password checkbox.

	>caption Figure 2: Enter your Telerik.com credentials to access the Telerik NuGet feed

	![Enter your Telerik.com credentials](images/telerik-nuget-credentials.png)

1. Select the Telerik® UI for ASP.NET AJAX package, e.g., **Telerik.UI.for.AspNet.Ajax.Net45**) and click **Install**. The package name is built in the following format: `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>` and you should make sure to select the desired Telerik version.

	>tip Search for "telerik.ui.for" to narrow down the list of results and find the package easily.

	>caption Figure 3: Adding the Telerik® UI for ASP.NET AJAX package to the solution

	![Adding the Telerik® UI for ASP.NET AJAX package to the solution](images/add-telerik-package.png)

## Available Telerik NuGet packages and ddls in them

* Telerik.UI.for.AspNet.Ajax.Netxx.xxxx.x.xxx.nupkg - Telerik.Web.Design.dll, Telerik.Web.Device.Detection.dll, Telerik.Web.UI.dll, Telerik.Web.UI.Skins.dll

* Telerik.Windows.Zip.xxxx.x.xxx.nupkg - Telerik.Windows.Zip.dll

* Telerik.Windows.Zip.Extensions.xxxx.x.xxx.nupkg - Telerik.Windows.Zip.Extensions.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.xxxx.x.xxx.nupkg - Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.xxxx.x.xxx.nupkg - Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.nupkg - Telerik.Windows.Documents.Spreadsheet.FormatProviders.Xls.dll.

* Telerik.Windows.Documents.Spreadsheet.xxxxx.x.xxx.nupkg - Telerik.Windows.Documents.Spreadsheet.dll

* Telerik.Windows.Documents.Flow.FormatProviders.Pdf.xxxx.x.xxx.nupkg - Telerik.Windows.Documents.Flow.FormatProviders.Pdf.dll

* Telerik.Windows.Documents.Flow.xxxxx.x.xxx.nupkg - Telerik.Windows.Documents.Flow.dll

* Telerik.Windows.Documents.Fixed.xxxxx.x.xxx.nupkg - Telerik.Windows.Documents.Fixed.dll

* Telerik.Windows.Documents.CMapUtils.xxxx.x.xxx.nupkg - Telerik.Windows.Documents.CMapUtils.dll

* Telerik.Windows.Documents.Core.xxxxx.x.xxx4.nupkg - Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.SpreadsheetStreaming.xxxxx.x.xxx.nupkg - Telerik.Documents.SpreadsheetStreaming.dll

* Newtonsoft.Json - Newtonsoft.Json.dll - available for download from the nuget.org server.

* Telerik.Web.Spreadsheet.nupkg - not yet available as a nuget package. You can also obtain the Telerik.Web.Spreadsheet.dll from the AdditionalLibraries/Bin40 installation folder. 

## Downloading a NuGet Package

You can download a *.nupkg* file to [build a private feed](https://www.telerik.com/blogs/power-your-projects-with-telerik---now-with-the-convenience-of-nuget) for your company by following the steps below.

>important Such a feed must be private (i.e., not available to the general Internet) and the standard developer-seat [licensing model]({%slug introduction/licensing/license-agreement%}) applies (i.e., the developers working with the controls must have active licenses). If you have questions on the licensing scheme, send them to telerik-sales@progress.com.


1. Navigate to [Your Account](https://www.telerik.com/account/).

1. Go to the [Downloads page of UI for ASP.NET AJAX](https://www.telerik.com/account/product-download?product=RCAJAX).

1. Click on the *.nupkg* files you require (e.g., *Telerik.UI.for.AspNet.Ajax.Net45.2016.3.1027.nupkg*) to download them. The file name is built in the following format: `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>.<Telerik controls version>.nupkg`.

1. Configure your server and projects to use the feed.

 
## Automated Builds

If you are using the Telerik NuGet feed on an automated build environment, you can provide your own credentials to the build PC so that it can connect to the feed and download the package.


You can read more about adding credentials via the NuGet.config in the following page: [https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials](https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials).

You must protect your credentials and ensure they are used only by you and not by other developers, according to the [license-per-developer policy](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). For example, take your encrypted password from your local NuGet.config file and use it on the build PC.


## Troubleshooting

### Error: The schema version of '<namespace>' is incompatible with version 2.0.30625.9003 of NuGet. Please upgrade NuGet to the latest version.
	
In R1 2018, the `nuget.exe` version we use was updated from `2.8` to `4.3`. This is the executable file used to generate and read the `.nupkg` files.

Due to this update, you may get the error below when using Visual Studio 2012 that uses the NuGet Package Manager version 2.0. The **solution is to upgrade the NuGet Package Manager to version 2.8**.

> The schema version of `'<namespace>'` is incompatible with version 2.0.30625.9003 of NuGet. Please upgrade NuGet to the latest version.


### Incorrect credentials and how to reenter them

The setup can get stuck in a circular reference problem if you enter incorrect credentials the first time.
In order to reset or edit the nuget feed credentials:
1. Close Visual Studio
2. Open Control Panel -> All Control Panel Items -> Credential Manager or simply press Win button and type Manage Windows Credentials and open the manager.
3. Look for VSCredentials_nuget.telerik.com -> remove or edit the password.
4. Open Visual Studio and try to access the nuget.telerik.com feed again.

### Error Unable to load the service index for source https://nuget.telerik.com/nuget

Make sure that the Telerik NuGet Feed is live at [https://status.telerik.com/](https://status.telerik.com/).


## Additional Resources

[Azure DevOps and Telerik NuGet Packages](https://www.telerik.com/blogs/azure-devops-and-telerik-nuget-packages)
