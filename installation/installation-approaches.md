---
title: Details on Installation Approaches
page_title: Details on Installation Approaches
description:
slug: details-installation-approaches
tags: installation, approaches, nuget, details
published: True
position:
---

# Details on Installation Approaches

Telerik UI for ASP.NET AJAX enables you to install the suite components by using the [MSI file](), the [ZIP library](), or the [Telerik NuGet feed]().

## NuGet Installation

In addition to the steps for getting up and running with Telerik UI for ASP.NET AJAX by using the Telerik NuGet feed, the NuGet installation approach enables you to locally [download a specific NuGet package](#downloading-a-nuget-package) and build a private NuGet feed for your company and also [implement continuous integration automated builds](#implementing-automated-builds).    

### Downloading a NuGet Package

You can locally download `.nupkg` files and [build a private feed](https://www.telerik.com/blogs/power-your-projects-with-telerik---now-with-the-convenience-of-nuget) for your company.

>important Such a feed must be private (i.e., not available to the general Internet) and the standard developer-seat [licensing model]({%slug introduction/licensing/license-agreement%}) applies (i.e., the developers working with the controls must have active licenses). If you have questions on the licensing scheme, send them to telerik-sales@progress.com.

To download `.nupkg` files locally:

1. Navigate to [Your Account](https://www.telerik.com/account/).

1. Go to the [Downloads page of UI for ASP.NET AJAX](https://www.telerik.com/account/product-download?product=RCAJAX).

1. Click on the `.nupkg` files you require (for example, `Telerik.UI.for.AspNet.Ajax.Net45.2022.1.119.nupkg`) to download them. The file name is built in the following format: `Telerik.UI.for.AspNet.Ajax.Net<.NET version of your project>.<Telerik controls version>.nupkg`.

1. Configure your server and projects to use the feed.

### Implementing Automated Builds

Often enough, you would want to set up Continuous Integration and/or Continuous Delivery (CI/CD) pipelines or builds for your project that uses the Telerik components. This is a valid scenario and the "one license per developer" license does not prevent you from doing so. The Telerik components are commercial software and as such can only be distributed through channels that are private and/or behind authentication.

There are a couple of common ways people implement CI/CD automated builds:

* You can put your own credentials (or the credentials of the license holder, depending on how your licenses are set up) in the nuget.config of the build machine/pipeline. In many cases, when doing so, they will even be encrypted when you add the Telerik feed source through the CLI. Alternatively, you can copy an encrypted version from your own local config if you have one and if plain text is an issue. You can read more about adding credentials via the NuGet.config in the following page: [https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials](https://docs.microsoft.com/en-us/nuget/schema/nuget-config-file#packagesourcecredentials).

* Creating a local folder (for example, on a shared network drive or other suitable location accessible by your builds and team) that holds the `.nupkg` files we provide (you can download them from your telerik.com account).

You must protect your credentials and ensure they are used only by you and not by other developers, according to the [license-per-developer policy](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). For example, take your encrypted password from your local NuGet.config file and use it on the build PC. They can by such colleagues (like other developers, QAs, designers, front-end devs, DBAs and so on) for building and running a solution, provided they do not use the Telerik components to create functionality. Of course, you must ensure that such credentials or package sources are not available to the general public (for example, in public repositories).

## ZIP Installation

The [downloaded ZIP file]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %}#install-telerik-ui-for-aspnet-ajax) contains the following folders:

* `AdditionalLibraries`&mdash;Contains the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}#telerik-document-processing-libraries), which allow you to import and export content between different formats.

* `BinXX`&mdash;Contains the Telerik controls assemblies (`.dll` files), where `XX` represents the version of the .NET framework against which the assemblies are built.

* `EditorDialogs`&mdash;Contains the **Editor** dialog files.

* `ImageEditorDialogs`&mdash;Contains the **ImageEditor** dialog files.

* `Live Demos`&mdash;Contains the product Quick-Start Framework and examples and the Visual Studio solution file that opens them. You can start the samples directly from this folder by using the `StartExamples.exe` file.

* `Scripts`&mdash;All controls that are part of the suite have their scripts embedded as web resources. However, if you need to modify a script or use it as an external, you can find it in this folder.

* `Skins`&mdash;All controls that are part of the suite have their skins embedded as web resources. However, if you need to modify a skin or use it as an external one, you can find it in this folder.

* `TypeScriptDefinitions`&mdash;Contains the TypeScript definitions for the Telerik UI for ASP.NET AJAX client-side objects.

Among the files that are available for download is `Telerik_UI_for_ASP.NET_AJAX_2022_1_119_Dev_hotfix.zip` (**Hotfix**). It is a lighter version of the full `Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev.zip` installation and is faster to download because it doesn't contain the live demos. It is handy to use it when [you manually upgrade](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade) the project to a later version or from trial to registered developer version.

To use the `Telerik_UI_for_ASP.NET_AJAX_2022_1_119_Dev_hotfix.zip` file, give full permissions to the ASP.NET user (if you are using IIS5) or to the **Network** **Service** account (under IIS6, Windows Server 2003) on the folder where the files were extracted.

* If you are using a modified or external script, you need to set the `EnableEmbeddedScripts` property to `false`. Otherwise the control will fail to load its client scripts with an exception. For more information, refer to the article on [disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}).

* If you are using a custom or a modified skin, you need to set the `EnableEmbeddedSkins` property to `false`.	Otherwise the control will fail to find your custom skin with an exception. If you want to use a custom skin, it will override your CSS file. For more information, refer to the article on [how skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}), [how to register a skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}), and [how to disable embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}).

* The latest package available for download has all the latest updates and HOTFIXES applied and you don't have to update it further.

To register the MS Help 2 files to Visual Studio and MSDN, refer to the article on [adding help to Visual Studio](https://www.telerik.com/support/kb/aspnet-ajax/general/add-help-to-visual-studio.aspx)

To add any control to the VS.NET toolbox, refer to the article on [adding Telerik UI for ASP.NET AJAX to the Visual Studio toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}).

To use any Telerik ASP.NET control in your project, refer to the article on [adding Telerik UI for ASP.NET AJAX to an ASP.NET WebForm]({%slug getting-started/adding-the-telerik-controls-to-your-project%}).
