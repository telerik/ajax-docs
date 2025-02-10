---
title: Setting Up Your License Key
page_title: Setting Up Your License Key File
description: Learn how to create and install a Telerik license key file, which is required during application building and deployment.
slug: getting-started/activating-your-license/setting-up-your-license
tags: installation, license, key
position: 0
---

# Setting Up Your License Key File

Telerik UI for ASP.NET AJAX requires activation through a license key for trial licenses. This article describes how to download your personal license key and use it to activate the UI for ASP.NET AJAX components.

>note Starting with Telerik UI for ASP.NET AJAX 2025 Q1 release, you must activate the UI components by providing a license key file. Previous versions do not require a license key.

## Basics

To install a license key, you must have a developer or trial license for:

* Telerik UI for ASP.NET AJAX
* Any product bundle that includes Telerik UI for ASP.NET AJAX, such as DevCraft.

If you are new to Telerik UI for ASP.NET AJAX, <a href="https://www.telerik.com/aspnet-ajax" target="_blank">sign up for a free trial</a>.

The `Telerik.UI.for.AspNet.Ajax.Net462` NuGet package requires the [`Telerik.Licensing` NuGet package]({%slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package%}#step-1-add-the-telerik-nuget-feed-to-visual-studio), which is available on [NuGet.org](https://www.nuget.org/packages/Telerik.Licensing). During project build, the `Telerik.Licensing` package automatically verifies the license key and activates Telerik UI for ASP.NET AJAX in that project.

Follow the steps below for [manual](#manual-installation) license key installation in your local development environment. 

An [invalid or missing license key results in app build warnings]({%slug getting-started/activating-your-license/license-key-errors%}) and watermarks in the application UI.

>warning The license key file is personal and confidential. Do not commit this file to source control and do not save it to a publicly accessible location!

## Manual Installation

To activate Telerik UI for ASP.NET AJAX, get the License Script Key from your Telerik profile at <a href="https://www.telerik.com/account/your-licenses/license-keys" target="_blank">License Keys</a>.

1. Search for `AJAX`.
2. Click on `View key` next to the Progress® Telerik® UI for ASP.NET AJAX.
3. Copy the Script Key.
4. Add a file to your project, e.g. `TelerikLicense.cs` (for VB projects add `TelerikLicense.vb`).
   -  In case of ASP Web Site solution, add the file to the `App_Code` folder.
5. Paste the Script Key into the file.
6. Build the project.

## License Key Updates

Always install a new license key whenever you:

* renew or purchase a new Telerik license
* Start a new trial

The new license key includes information about all previous purchases. The download and installation of a new license key is referred to as a *license key update*.

* To install the new license, repeat the steps from the [manual license key installation](#manual-installation) section.

## Next Steps

* [Set Up the Telerik NuGet Feed]({%slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package%})

## See Also

* [Licensing FAQ]({%slug getting-started/activating-your-license/licensing-faq%})
* [Troubleshoot License Key Errors]({%slug getting-started/activating-your-license/license-key-errors%})
* [Get Started with Telerik UI for ASP.NET AJAX]({%slug ajaxmanager/getting-started/what-is-ajax%})
