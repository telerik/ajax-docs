---
title: Upgrading a Trial to a Developer License or to a Newer Version
page_title: Upgrading a Trial to a Developer License or to a Newer Version | UI for ASP.NET AJAX Documentation
description: Upgrading a Trial to a Developer License or to a Newer Version
slug: introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version
tags: upgrading,a,trial,to,a,developer,license,or,to,a,newer,version
published: True
position: 0
---

# Upgrading a Trial to a Developer License or to a Newer Version



This article explains how to upgrade the version of the Telerik UI for ASP.NET AJAX control and how to switch from a Trial to a Developer license.

You can find concrete information about your case in the distinct sections of this article:

* [Upgrade to a Newer Version of Telerik UI for ASP.NET AJAX](#upgrade-to-a-newer-version-of-telerik-ui-for-asp.net-ajax)

* [Automatically](#automatic-upgrade)

* [Manually](#manual-upgrade)

* [Upgrade From Trial to Licensed Version of Telerik UI for ASP.NET AJAX](#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-asp.net-ajax)

* [Upgrading Troubleshooting](#upgrading-troubleshooting)

* [Installation Issues](#installation-issues)

* [Referencing the Telerik Assemblies from the GAC](#referencing-the-telerik-assemblies-from-the-gac)

* [I Still Get the Old Version](#i-still-get-the-old-version)

* [I Still Get the Copyright Message](#i-still-get-the-copyright-message)

## Upgrade to a Newer Version of Telerik UI for ASP.NET AJAX

__To upgrade the Telerik controls__, you only need to __replace the__ with their newer versions and update their references. The instructions below assume you have already[installed]({%slug introduction/installation/which-file-do-i-need-to-install?%}) the new version.

There are two ways to perform an upgrade:

### Automatic Upgrade

You can utilize the AJAX VS Extensions wizards:

1. [Automatic Latest Version Retrieval Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/automatic-latest-version-retrieval%})

1. [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%})

### Manual Upgrade

You simply need to replace the assembly references with the new ones. Here follows a list of steps that ensures a safe upgrade:

1. Backup your project (a simple copy to another folder is usually enough, and using a source control system makes this redundant).

1. __Delete the old Telerik.Web.UI.* references__ from the project and close it. This includes the	[Skins and Design assemblies]({%slug introduction/installation/included-assemblies%}).

1. __Open the Bin folder__ of your project in Windows Explorer and __delete the old Telerik.Web.UI.* assemblies__.

1. __Copy the new assemblies__ from the new installation's Bin40 folder (for .NET 4.0; for .NET 3.5 you need Bin35 and Bin45 for .NET 4.5) and. In case you are using a [hotfix]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}), go to the folder where you unzipped it.

1. __Paste the new assemblies in the Bin folder__ of your project in Windows Explorer.

1. __Add references to the Telerik assemblies in the project__ in Visual Studio.

1. Make sure you have all the [necessary web.config registrations]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/web.config-settings-overview%})

As with any ASP.NET Project, it is often helpful to clear the ASP Temporary files and the browser cache.

## Upgrade From Trial to Licensed Version of Telerik UI for ASP.NET AJAX

The difference between the trial and licensed version of the Telerik controls is built-in the assemblies themselves.You do not need license keys or activations.

Once you have a licensed package, simply __follow the steps from the__.

## Upgrading Troubleshooting

### Installation Issues

If you are having difficulties with installing the controls, examine the [Installation Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting%}) article.In the meantime, you can download the [hotfix archive]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}) and	[upgrade the controls manually](#manual-upgrade).

### Referencing the Telerik Assemblies from the GAC

When referencing assemblies from the GAC, the way those references are added to VS and the way the assemblies are placed in the GAC are slightlydifferent than the common BIN-deployment scenario. For example, you will need to add the Telerik assemblies to the GAC manually anduse fully qualified assembly names in the [handler registrations in the web.config]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/web.config-settings-overview%}).You can read more about handling assemblies in the GAC and their references in the[Using the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%}) help article.

### I Still Get the Old Version

Sometimes the .NET Framework caches the old Telerik.Web.UI.dll and therefore the update may seem to have failed. Try the following to ensure that no caches remain:

* Terminate the IIS process (from the Windows Task Manager) and close Visual Studio.

* Clean up the Temporary ASP.NET Files from *<sysdrive>:\Windows\Microsoft.NET\Framework[64]\<vernum>\Temporary ASP.NET Files*.

* Delete your browser cache. For example, these are the steps for IE: Tools -> Internet Options -> Delete Files.

* Clean up the Windows WebSite Cache from *<sysdrive>:\Users\<UserName>\AppData\Local\Microsoft\WebsiteCache*.	The location of this cache may vary from one operating system to the next.

* Clean up the Visual Studio Backup from *<sysdrive>:\Users\<UserName>\Documents\Visual Studio <vsVersion>\Backup Files*.This location depends on your VS settings and installation.

* Clean up the Project Assemblies cache from *<sysdrive>:\Users\<UserName>\AppData\Local\Microsoft\Visual Studio\<vsVersion>\ProjectAssemblies*.The location of this cache may vary from one operating system to the next.

### I Still Get the Copyright Message

The copyright message appears only when the Web Application/Web Site uses the trial version of Telerik.Web.UI.dll.The Developer versions of Telerik's controls do not throw copyright messages.

To remove it, make sure you have downloaded the proper, Developer "DLL and Scripts only" file. You will recognize it bythe *Dev* abbreviation in the file name. More details on determining which dlls are in use can be found in this blog post.

You can see how the file information of a trial version of the Telerik.Web.UI.dll assembly in __Figure 1__.Alternatively, you can see the same information in by double clicking the assembly in VS and exploring its properties as shown in __Figure 2__.
>caption Figure 1: The Properties dialog of a trial Telerik.Web.UI.dll file shows a "Trial Version" text.

![trial-version-file-properties](images/trial-version-file-properties.png)
>caption Figure 2: The Properties dialog of a Dev Telerik.Web.UI.dll file in Visual Studio do not have the Trial keyword.

![dev-version-vs-properties](images/dev-version-vs-properties.png)

# See Also

 * [Which File Do I Need to Install?]({%slug introduction/installation/which-file-do-i-need-to-install?%})

 * [Included Assemblies]({%slug introduction/installation/included-assemblies%})

 * [web.config Settings Overview]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/web.config-settings-overview%})
