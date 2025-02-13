---
title: Available Product Files
page_title: Available Product Files
description: "Learn about what the product files that are available for download contain before you start working with the Telerik UI for ASP.NET AJAX controls."
slug: installation/which-file-do-i-need-to-install
tags: which, file, to, install, available, product, files
published: False
position: 1
---

# Available Product Files

Telerik UI for ASP.NET AJAX provides a set of installation package types that you can download from [the **Download** tab in your Telerik account](https://www.telerik.com/account/product-download?product=RCAJAX).

## Prerequisites and Specifics

* Install ASP.NET Web Forms on your development or production machine. ASP.NET Web Forms are available in the .NET 4.x+ installations. For example, to download .NET 4.8, go to [https://dotnet.microsoft.com/download/dotnet-framework/net48](https://dotnet.microsoft.com/download/dotnet-framework/net48).

* During an [MSI installation]({% slug getting-started/installation/install-using-msi %}), the Telerik UI for ASP.NET controls are added automatically to the Visual Studio Toolbox. To add the controls to your project (aspx, ascx, masterpage, and so on), refer to the article on [adding the controls to your project]({% slug getting-started/adding-the-telerik-controls-to-your-project %}).

## Package Types

The Telerik UI for ASP.NET AJAX delivers the following available package types:

* An [MSI file]({%slug getting-started/installation/install-using-msi%}) for automatic installation. The Windows Installer Package (**MSI**) files are intended for easy and automatic installation of a product. The **MSI** installer unpacks the controls on your computer in a folder named **Telerik** in your `Program Files`. Additionally, the installer package adds the Telerik UI for ASP.NET AJAX help files to your VS.NET IDE and to your local copy of [MSDN](https://msdn.microsoft.com/) if you have one installed. If selected from the **Feature Selection** screen, the installer will automatically add the Telerik UI for ASP.NET AJAX Visual Studio Extensions and populate your Visual Studio Toolbox with the Telerik controls.

  If you already have Telerik controls installed by the MSI package, you can safely install an updated version&mdash;the installer will keep your existing installation. The new files will be placed in a separate folder and the new installation will not damage the common installer files. For more information and examples, refer to the article on [major and minor releases installation]({%slug introduction/installation/upgrading-instructions/major-and-minor-releases-installation%}).

  The latest `MSI` package available for download has already all updates/HOTFIXES applied and you don't need to update it further.

* A [ZIP library]({%slug getting-started/installation/install-from-zip%}) file for manual (advanced) installation. The **ZIP** is used for manual (advanced) installations and for upgrading or updating purposes. The folder structure is different from the Windows Installer (**MSI**) package. You need to be familiar with ASP.NET, IIS, setting permissions, and creating virtual folders. It is a common practice to unpack the manual installation ZIP file directly to `inetpub/wwwroot`. To [deploy on shared hosting]({%slug introduction/deployment/deploying-on-shared-hosting%}), use the ZIP file.

  The latest `ZIP` package available for download has already all updates/HOTFIXES applied and you don't need to update it further.

* [DLL files only (or HOTFIX)]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}) for updating or upgrading a product to a later version. This is a bare-bones upgrade option for the controls. The `HOTFIX` contains only the files that your Web Project needs to run correctly. Besides the assemblies, it contains the latest JavaScript files and skins (if you've needed to use these as external files), the up-to-date Editor dialogs, and Spell dictionaries.

* A [NuGet package]({%slug getting-started/installation/install-from-nuget%}). Telerik provides a NuGet feed that you can use to download only the necessary assemblies to get the project running. Additionally, you can also download the `.nupkg` files from your Telerik account to create a private company feed.

* (For licensed users only) The source code is distributed as an archive named `Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Source.zip` and may be handy for educational or customization purposes of the controls. It may also be useful for checking the private API of the controls or if there is some undocumented functionality.

## See Also

* [Installing Telerik UI for ASP.NET AJAX Controls from MSI File]({%slug getting-started/installation/install-using-msi%})
* [Installing Telerik UI for ASP.NET AJAX Controls from ZIP File]({%slug getting-started/installation/install-from-zip%})
* [Using the HOTFIX (DLLs and Scripts/Skins Only]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%})
* [Major and Minor Releases Installation]({%slug introduction/installation/upgrading-instructions/major-and-minor-releases-installation%})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
