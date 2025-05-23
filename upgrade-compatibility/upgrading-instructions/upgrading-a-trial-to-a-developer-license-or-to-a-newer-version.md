---
title: Upgrading a Trial to a Developer License or to a Newer Version
page_title: Upgrading a Trial to a Developer License or to a Newer Version
description: Check our Web Forms article about Upgrading a Trial to a Developer License or to a Newer Version.
slug: introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version
previous_url: getting-started/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version
tags: upgrading,a,trial,to,a,developer,license,or,to,a,newer,version
published: True
position: 0
---

# Upgrading a Trial to a Developer License or to a Newer Version

This article explains how to upgrade the version of the Telerik® UI for ASP.NET AJAX controls and how to switch from a Trial to a Developer license.

## Unified Distribution Starting with 2025 Q2

Starting with the 2025 Q2 release, Telerik introduced a unified distribution for both trial and commercial packages of its UI libraries, including Telerik UI for ASP.NET AJAX. This change simplifies the upgrade and installation process:

* A single package is now used for both trial and licensed users.
* Access is controlled via a license key file.
* There is no need to download separate trial or commercial versions.

This unified model provides a streamlined and consistent experience for all users.
For setup instructions and more details, refer to:

* [Setting Up Your License Key File]({%slug licensing/license-key%})
* [Licensing FAQ]({%slug licensing/licensing-faq%})

>warning Starting with the 2025 Q1 release, the trial Telerik AJAX components require activation with a license key to function without interruption. For more information regarding the licensing review the 
> [Setting Up Your License Key File]({%slug licensing/license-key%}) and [FAQ]({%slug licensing/licensing-faq%}).

## Upgrade to a Newer Version of Telerik® UI for ASP.NET AJAX

To upgrade the Telerik controls in your project:

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

>tip The Upgrade Wizard does not modify the `<bindingRedirect>` sections in the web.config file or the entries in the `licenses.licx` file. If you encounter errors such as "Could not load file or assembly 'Telerik.Web.UI'" after an upgrade, check that the web.config includes binding redirects for old assembly versions. Additionally, ensure the `licenses.licx` file does not contain outdated entries; deleting the file contents, saving it and rebuilding the solution can regenerate it with the correct references.

>warning As of 2025 Q1 the `licenses.licx` file is removed and replaced with the new licensing mechanism. 

### Manual Upgrade

The manual upgrade gives you the freedom to control each step of the process. In short, you just need to replace the assembly references with the new ones.

The following steps ensure a safe upgrade:

1. Backup your project. A simple copy to another folder is usually enough, and using a source control makes this unnecessary.

1. Delete the old Telerik.Web.UI.* references from the project and close it. Delete also the [Skins and Design assemblies]({%slug introduction/installation/included-assemblies%}). You can find more information on how to update the assembly reference in an ASP.NET Web Forms application [here](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-update-assembly-reference).

1. Open the `Bin` folder of your project in Windows Explorer and delete the old Telerik.Web.UI.* assemblies.

1. Copy the new assemblies from the corresponding `Bin*` folder in the UI for ASP.NET AJAX installation path:

   * **Bin462**: Contains the assemblies for .NET 4.6.2 and above.

   * **Bin45**: Contains the assemblies for .NET 4.5 ([distributed until 2024 Q1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-2024-q1-(version-2024-1-131))).

   * The `Bin40` folder contains the assemblies for .NET 4.0 ([distributed until R1 2023 SP1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-r1-2023-sp1-(version-2023-1-314))).

   * The `Bin35` folder contains the assemblies for .NET 3.5 ([distributed until R1 2023 SP1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/ui-for-asp-net-ajax-r1-2023-sp1-(version-2023-1-314))).

   * If you install a [hotfix]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}), go to the folder where you unzipped it.

1. Paste the new assemblies in the `Bin` folder of your project in Windows Explorer.

1. Open the project in Visual Studio and add references to the Telerik assemblies.

1. Make sure you have all [necessary web.config registrations]({%slug general-information/web-config-settings-overview%})

>tip As with any ASP.NET project, it is often helpful to clear the ASP Temporary files and the browser cache. Additionally, ensure that the <bindingRedirect> sections in the web.config file are updated to match the new assembly versions to avoid errors such as "Could not load file or assembly 'Telerik.Web.UI'". Also, check the licenses.licx file for outdated entries; deleting this file contents and rebuilding the solution will regenerate it with the correct references.
>
> You can use the copy-and-replace method to upgrade any [other assemblies]({%slug introduction/installation/included-assemblies%}), localization files (~/App_GlobalResources), dialogs (RadImageEditor, RadEditor), [TypeScript definitions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/typescript-definitions/add-typescript-definitions-for-the-telerik-ui-for-asp.net-ajax-suite%}), etc.

## Upgrade From Trial to Licensed Version of Telerik® UI for ASP.NET AJAX

Starting with the **2025 Q2 release**, Telerik UI for ASP.NET AJAX uses a **unified package** for both trial and licensed users. This means the assemblies are now the same, and your access is determined by the **license key file** you provide.
 
To upgrade from a trial to a licensed version (2025 Q2 or later):
 
1. Ensure you have the **2025 Q2 or later** version installed.
2. Add or update your **license key file** to activate the licensed features. Follow the steps in [Setting Up Your License Key File]({%slug licensing/license-key%}).
 
There is **no longer a need to download or replace different assemblies** when moving from trial to licensed versions.
 
>tip If you're still seeing trial messages after adding the license key, double-check that the key is correctly embedded and loaded at runtime. See [Licensing FAQ]({%slug licensing/licensing-faq%}) for troubleshooting help.
 
### For versions **prior to 2025 Q2**
 
The trial and licensed versions use **different assemblies**, so the upgrade process is different:
 
1. Download the licensed version of UI for ASP.NET AJAX.
2. Follow the steps in the [Upgrade to a Newer Version of Telerik® UI for ASP.NET AJAX](#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax) section to delete the trial assemblies and replace them with the licensed ones.
 
>tip You should delete (or uninstall) the Trial version from your machine before upgrading to the licensed version. Doing so eliminates the chance of trial assemblies still making it into the project references or even production.
 
>tip If you are getting trial errors similar to "*Thank you for using the Trial Version of Telerik® UI for ASP.NET Ajax to build more powerful applications faster. Purchase the Commercial Version now to get access to all product updates and the Telerik expert support*"  
or "*Telerik.Web.UI 201X.X.XXX.XX trial version. Copyright Telerik © 2002-201X. To remove this message, please purchase a developer version.*" check out the dedicated [Getting tired of seeing trial messages in your ASP.NET AJAX application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application) blog post.

## See Also

 * [Troubleshoot Upgrade Issues]({%slug troubleshoot-upgrade-issues%})

  * [Included Assemblies]({%slug introduction/installation/included-assemblies%})
 
 * [Getting tired of seeing trial messages in your ASP.NET AJAX application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application)

 * [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

 * [DLL Hell Strikes Again Blog Post by Damien White](http://blogs.visoftinc.com/2014/08/10/dll-hell-strikes-again/)
 
 * [How to fix License File related errors](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors)
