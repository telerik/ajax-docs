---
title: Details on Installation Approaches
page_title: Details on Installation Approaches
description: "Learn more about installing Telerik UI for ASP.NET AJAX with MSI or ZIP files and through the Telerik NuGet feed."
slug: details-installation-approaches
tags: installation, approaches, nuget, details
published: True
position: 1
---

# Details on Installation Approaches

Telerik UI for ASP.NET AJAX enables you to install the suite components by using the [MSI file]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file %}), the [ZIP library]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %}), or the [Telerik NuGet feed]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %}).

This article provides additional information about each installation approach. For the step-by-step guides on getting up and running with the suite, refer to the following articles:

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})

## MSI Installation

When you download the Telerik UI for ASP.NET AJAX controls, the wizard for the MSI installation will by default install the Telerik UI for ASP.NET AJAX suite in the `C:\Program Files\Progress\` folder for 32-bit machines or in the `C:\Program Files (x86)\Progress\` folder for 64-bit machines.

During the MSI installation process, you need to take the following into consideration:

* Prior to R3 2017, the default installation paths were `C:\Program Files\Telerik\` and `C:\Program Files (x86)\Telerik\` respectively.
* The latest package that is available for download has all updates/HOTFIXES applied already and you don't need to update it further.
* The MSI installation will not overwrite previous Telerik UI for ASP.NET AJAX installations unless the current installation is of the same version.

## ZIP Installation

The downloaded ZIP file contains the following folders:

* `AdditionalLibraries`&mdash;Contains the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}#telerik-document-processing-libraries), which allow you to import and export content between different formats.

* `BinXX`&mdash;Contains the Telerik controls assemblies (`.dll` files), where `XX` represents the version of the .NET framework against which the assemblies are built.

* `EditorDialogs`&mdash;Contains the **Editor** dialog files.

* `ImageEditorDialogs`&mdash;Contains the **ImageEditor** dialog files.

* `Live Demos`&mdash;Contains the product Quick-Start Framework and examples and the Visual Studio solution file that opens them. You can start the samples directly from this folder by using the `StartExamples.exe` file.

* `Scripts`&mdash;All controls that are part of the suite have their scripts embedded as web resources. However, if you need to modify a script or use it as an external, you can find it in this folder.

* `Skins`&mdash;All controls that are part of the suite have their skins embedded as web resources. However, if you need to modify a skin or use it as an external one, you can find it in this folder.

* `TypeScriptDefinitions`&mdash;Contains the TypeScript definitions for the Telerik UI for ASP.NET AJAX client-side objects.

* Among the files that are available for download is `Telerik_UI_for_ASP.NET_AJAX_2022_1_119_Dev_hotfix.zip` (**Hotfix**). It is a lighter version of the full `Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev.zip` installation and is faster to download because it doesn't contain the live demos. It is handy to use it when [you manually upgrade]({% slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version %}#manual-upgrade) the project to a later version or from a trial to a registered developer version.

  To use the `Telerik_UI_for_ASP.NET_AJAX_2022_1_119_Dev_hotfix.zip` file, give full permissions to the ASP.NET user (if you are using IIS5) or to the **Network** **Service** account (under IIS6, Windows Server 2003) for the folder where the files were extracted.

* If you are using a modified or external script, you need to set the `EnableEmbeddedScripts` property to `false`. Otherwise, the control will fail to load its client scripts with an exception. For more information, refer to the article on [disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}).

* If you are using a custom or a modified skin, you need to set the `EnableEmbeddedSkins` property to `false`.	Otherwise, the control will fail to find your custom skin with an exception. If you want to use a custom skin, it will override your CSS file. For more information, refer to the article on [how skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}), [how to register a skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}), and [how to disable embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}).

* The latest package available for download has all the latest updates and HOTFIXES applied and you don't have to update it further.

To register the MS Help 2 files to Visual Studio and MSDN, refer to the article on [adding help to Visual Studio](https://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx)

To add any control to the VS.NET toolbox, refer to the article on [adding Telerik UI for ASP.NET AJAX to the Visual Studio toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}).

To use any Telerik ASP.NET control in your project, refer to the article on [adding Telerik UI for ASP.NET AJAX to an ASP.NET WebForm]({%slug getting-started/adding-the-telerik-controls-to-your-project%}).

## NuGet Installation

In addition to the steps for getting up and running with Telerik UI for ASP.NET AJAX by using the Telerik NuGet feed, the NuGet installation approach enables you to locally [download a specific NuGet package](#downloading-a-nuget-package) and build a private NuGet feed for your company and also to [implement continuous integration automated builds](#implementing-automated-builds).    

### Downloading a NuGet Package

You can locally download `.nupkg` files and [build a private feed](https://www.telerik.com/blogs/power-your-projects-with-telerik---now-with-the-convenience-of-nuget) for your company.

Such a feed must be private, that is, not available to the general Internet. Also, the developers working with the controls must have active licenses, that is, the standard developer-seat [licensing model]({%slug introduction/licensing/license-agreement%}) applies to that feed.

To download `.nupkg` files locally:

1. Navigate to [Your Account](https://www.telerik.com/account/).

1. Go to the [**Downloads** tab of UI for ASP.NET AJAX](https://www.telerik.com/account/product-download?product=RCAJAX).

1. Click the `.nupkg` files you require to download them&mdash;for example, `Telerik.UI.for.AspNet.Ajax.Net45.2022.1.119.nupkg`. The file names follow the `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>.<Telerik controls version>.nupkg` format.

1. Configure your server and projects to use the feed.

### Implementing Automated Builds

You may also want to set up Continuous Integration and/or Continuous Delivery (CI/CD) pipelines or builds for your project that uses the Telerik components. This is a valid scenario and the "one license per developer" license does not prevent you from doing so. The Telerik components are commercial software and as such can only be distributed through channels that are private and/or behind authentication.

To implement CI/CD automated builds, choose either of the following common approaches:

* Put your own credentials or the credentials of the license holder in the `nuget.config` of the build machine or pipeline. In many cases, when doing so, they will even be encrypted when you add the Telerik feed source through the CLI. Alternatively, you can copy an encrypted version from your own local `config` if you have one and if plain text is an issue. For more information about adding credentials through the `NuGet.config`, refer to [https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials](https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials).

* Create a local folder on a shared network drive or other suitable location accessible by your builds and team. This folder will hold the provided `.nupkg` files, which you can download from your Telerik account.

You need to protect your credentials and ensure they are used only by you and not by other developers according to the [license-per-developer policy](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). For example, take your encrypted password from your local `NuGet.config` file and use it on the build PC. They can be used by other developers, QAs, designers, front-end developers, DBAs, and so on, for building and running a solution provided they do not use the Telerik components to create functionalities. You have to ensure that such credentials or package sources are not available to the general public, for example, in public repositories.

## See Also

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
