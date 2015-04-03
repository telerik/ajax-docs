---
title: Visual Studio Extensions Options
page_title: Visual Studio Extensions Options | UI for ASP.NET AJAX Documentation
description: Visual Studio Extensions Options
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/visual-studio-extensions-options
tags: visual,studio,extensions,options
published: True
position: 8
---

# Visual Studio Extensions Options



The Visual Studio Extensions options dialog provides settings, so you can configure the Telerik Visual Studio Extensions to best suit your needs.

It can be accessed through __Visual Studio | Telerik | VSExtensions Options__![Options Menu](images/introduction-vsx_optionsdialog_menu.png)

The Options dialog contains two sets of options that affect the __Telerik UI for ASP.NET AJAX__ Visual Studio Extensions.

## General Settings

The settings under the General category affect all of the installed __Telerik Visual Studio Extensions__.![General Settings](images/introduction-vsx_optionsdialog_general.png)

### Project setup

__Add referenced assemblies to solution and source control__- Sets the default value for the __Add referenced assemblies to solution__ option in the Project Configuration Wizard

### Project Upgrade Notifications for Detected Local Distributions

__Suggest project upgrades for Telerik product version available on my computer__ – When enabled, you will be prompted to upgrade upon opening a project, which is not using the latest version of Telerik UI for ASP.NET AJAX installed on your system

__Suggest upgrades when an equal Dev release detected on projects using a Trial__ – When enabled, you will be prompted to upgrade if a licensed version of Telerik UI for ASP.NET AJAX is available on your system, but the current project uses a trial version

### Other Notifications

__Notify me when a Telerik subscription I have is about to expire__ – When enabled, you will receive reminders if any of your subscriptions expire within the next month.

>note You can benefit subscription reminders only if you have saved your credentials in the[Latest Version Acquirer tool]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/automatic-latest-version-retrieval%}).
>


### Select a folder for downloads

Configures the path where the extensions look for and store distributions.

>note Changing the folder path will not move existing folder contents from your previous path. Please, move your previous folder contents manually in case you still want to use them.
>


## Telerik UI for ASP.NET AJAX Settings

All settings falling under the AJAX category affect only the __Telerik UI for ASP.NET AJAX__ Visual Studio Extensions.![AJAX Settings](images/introduction-vsx_optionsdialog_specific.png)

### Project Health

__Display warnings when possible design-time break detected__ – When enabled, you will receive warnings if the __Telerik Visual Studio Extensions__ detect specific conditions, known to cause design-time issues.

>note The most common of the conditions is the absence of Service Pack 1 for Visual Studio 2008 ([read more]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})).
>


### Latest version retrieval

__Include internal builds in Latest Version update and retrieval__ – When enabled, the [Latest Version Acquirer tool]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/automatic-latest-version-retrieval%}) will retrieve internal builds as well as official releases when checking for a new version.

### Notifications

__Show me a message when a newer version is available on__ – When enabled, you will receive notifications if a new version of __Telerik UI for ASP.NET AJAX__ is available on the Telerik website.
