---
title: Upgrading a Trial to a Developer License or to a Newer Version
page_title: Upgrading a Trial to a Developer License or to a Newer Version
description: Check our Web Forms article about Upgrading a Trial to a Developer License or to a Newer Version.
slug: introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version
tags: upgrading,a,trial,to,a,developer,license,or,to,a,newer,version
published: True
position: 0
---

# Upgrading a Trial to a Developer License or to a Newer Version

This article explains how to upgrade the version of the Telerik® UI for ASP.NET AJAX controls and how to switch from a Trial to a Developer license.

## Upgrade to a Newer Version of Telerik® UI for ASP.NET AJAX

To upgrade the Telerik controls in your project:

1. Install the new version by using your preferred [installation package]({%slug installation/which-file-do-i-need-to-install%}).

1. Replace the [Telerik assemblies]({%slug introduction/installation/included-assemblies%}) with their newer versions and update their references in the project.

>tip Before upgrading your project, review the following resources:
>
> * The [Known Issues and Important Changes](https://www.telerik.com/forums/known-issues-and-important-changes) thread lists changes and known regression issues that may affect your code.
>
> * The [Telerik Upgrade API Analyzer]({%slug upgrade_api_analyzer%}) analyzes your C# code and notifies you of changes between your version and the new version.
>
> * The [UI for ASP.NET AJAX Release Notes](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history) list all changes, fixes, new features and controls.

You can upgrade the controls either [automatically](#automatic-upgrade) or [manually](#manual-upgrade).

### Automatic Upgrade

The automatic upgrade is possible if you use the UI for ASP.NET AJAX Visual Studio extensions. To perform the automatic upgrade:

1. Use the [UI for ASP.NET AJAX Visual Studio extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/automatic-latest-version-retrieval%}) to download the latest version.

1. Use the [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}) to upgrade the control in your project.

### Manual Upgrade

The manual upgrade gives you the freedom to control each step of the process. In short, you just need to replace the assembly references with the new ones.

The following steps ensure a safe upgrade:

1. Backup your project. A simple copy to another folder is usually enough, and using a source control makes this unnecessary.

1. Delete the old Telerik.Web.UI.* references from the project and close it. Delete also the [Skins and Design assemblies]({%slug introduction/installation/included-assemblies%}).

1. Open the `Bin` folder of your project in Windows Explorer and delete the old Telerik.Web.UI.* assemblies.

1. Copy the new assemblies from the corresponding `Bin*` folder in the UI for ASP.NET AJAX installation path:

   * The `Bin45` folder contains the assemblies for .NET 4.5

   * The `Bin40` folder contains the assemblies for .NET 4.0.

   * The `Bin35` folder contains the assemblies for .NET 3.5.

   * If you install a [hotfix]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}), go to the folder where you unzipped it.

1. Paste the new assemblies in the `Bin` folder of your project in Windows Explorer.

1. Open the project in Visual Studio and add references to the Telerik assemblies.

1. Make sure you have all [necessary web.config registrations]({%slug general-information/web-config-settings-overview%})

>tip As with any ASP.NET project, it is often helpful to clear the ASP Temporary files and the browser cache.
>
> * You can use the copy-and-replace method to upgrade any [other assemblies]({%slug introduction/installation/included-assemblies%}), localization files (~/App_GlobalResources), dialogs (RadImageEditor, RadEditor), [TypeScript definitions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/typescript-definitions/add-typescript-definitions-for-the-telerik-ui-for-asp.net-ajax-suite%}), etc.

## Upgrade From Trial to Licensed Version of Telerik® UI for ASP.NET AJAX

The trial version and the licensed version of UI for ASP.NET AJAX have different assemblies, this why you don't need a license key or an activation to upgrade. Instead, you must replace the trial assemblies with the licensed assemblies.

To upgrade to a licensed version:

1. Download the licensed version of UI for ASP.NET AJAX.

1. Follow the steps in the [Upgrade to a Newer Version of Telerik® UI for ASP.NET AJAX](#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax) section to delete the trial assemblies and replace them with the developer versions.

>tip You should delete (or uninstall) the Trial version from your machine before upgrading to the licensed version. Doing so eliminates the chance of trial assemblies still making it into the project references or even production.

## See Also

 * [Troubleshoot Upgrade Issues]()

 * [Which File Do I Need to Install?]({%slug installation/which-file-do-i-need-to-install%})

 * [Included Assemblies]({%slug introduction/installation/included-assemblies%})

 * [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

 * [DLL Hell Strikes Again Blog Post by Damien White](http://blogs.visoftinc.com/2014/08/10/dll-hell-strikes-again/)
 
 * [How to fix License File related errors](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors)
