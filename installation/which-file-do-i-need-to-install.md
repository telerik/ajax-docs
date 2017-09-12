---
title: Which File Do I Need to Install
page_title: Which File Do I Need to Install | UI for ASP.NET AJAX Documentation
description: Which File Do I Need to Install?
slug: installation/which-file-do-i-need-to-install
tags: which,file,install
published: True
position: 0
---

# Which File Do I Need to Install?



>caution 
>
>**Prerequisite**
>
>In order to have Telerik® UI for ASP.NET Ajax running, you will need to have [ASP.NET AJAX](http://www.asp.net/AJAX/Documentation/Live/InstallingASPNETAJAX.aspx) installed on your development/production machine.

Telerik provides the following installation package types:

* [MSI]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) file for automatic installation. The Windows Installer Package (**MSI**) files are intended for easy and automatic installation of a product. The **MSI** installer unpacks the controls on your computer in a folder named Telerik in your Program Files. Additionally, the installer package adds the Telerik® UI for ASP.NET Ajax help files to your VS.NET IDE and to your local copy of [MSDN](http://msdn.microsoft.com/) (if you have one installed). If selected in the Feature Selection screen, the installer automatically adds Telerik® UI for ASP.NET Ajax Visual Studio Extensions and populates your Visual Studio Toolbox with the Telerik controls.

* [ZIP]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}) file for manual (advanced) installation. The **ZIP** is used for manual (advanced) installs and for upgrading/updating purposes. The folder structure is different from the Windows Installer (**MSI**) package. You need to be familiar with ASP.NET, IIS, setting permissions and creating virtual folders. It is a common practice to unpack the manual installation ZIP file directly to **inetpub/wwwroot**. Use the ZIP file for [deploying on shared hosting]({%slug introduction/deployment/deploying-on-shared-hosting%}).

* [DLL files only (a.k.a. HOTFIX)]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}) for updating/upgrading a product to a newer version. This is a bare-bones upgrade option for our controls. The hotfix contain only the files that your Web Project needs to run correctly. Besides the assemblies, it contains the latest JavaScript files and skins (if you've needed to use these as external files), the up-to-date RadEditor dialogs and RadSpell dictionaries.

* [NuGet package]({%slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package%}) Telerik provides a NuGet feed that you can use to download only the necessary assemblies to get the project running. Additionally, you can also download the *.nupkg* files from Your Account in order to create a private company feed.

>note The latest **MSI** and **ZIP** packages available for download already have all updates/HOTFIXES applied. There is no need to update them further.

If you already have Telerik controls installed by the MSI package, you can safely install an updated version&mdash;the installer will keep your existing installation. The new files will be placed in a separate folder and the new installation does not damage the common installer files. You can find more information and examples in the [Major and Minor Releases Installation]({%slug introduction/installation/upgrading-instructions/major-and-minor-releases-installation%}) help article.

## See Also

 * [Installing the Telerik Controls from MSI File]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%})

 * [Installing the Telerik Controls from ZIP File]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%})

 * [Using the HOTFIX (DLLs and Scripts/Skins Only]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%})

 * [Major and Minor Releases Installation]({%slug introduction/installation/upgrading-instructions/major-and-minor-releases-installation%})
