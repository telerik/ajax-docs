---
title: Upgrading from Trial to Licensed Version of Telerik UI for ASP.NET AJAX
description: Instructions on how to replace Telerik UI for ASP.NET AJAX trial assemblies with the licensed versions.
type: troubleshooting
page_title: How to Upgrade Telerik UI for ASP.NET AJAX from Trial to Full Version
slug: common-upgrade-trial-to-licensed-version-telerik-ui-aspnet-ajax
tags: upgrade, trial, licensed, assembly, Telerik UI for ASP.NET AJAX
res_type: kb
ticketid: 1659482
---

## Environment

| Product | Progress® Telerik® UI for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description
 
This article explains how to activate a licensed copy of Telerik UI for ASP.NET AJAX after using a trial version, based on the version you're working with.
 
## Cause
 
The trial version of Telerik UI for ASP.NET AJAX is intended for evaluation purposes. Once you decide to use the product for development, you must activate or upgrade to a licensed version. Starting with the 2025 Q2 release, Telerik has introduced a unified distribution for trial and commercial packages, simplifying this process.
 
## Solution
 
### For Telerik UI for ASP.NET AJAX 2025 Q2 and later
 
Telerik UI for ASP.NET AJAX now uses a **unified package** for both trial and licensed users. You do **not need to download a separate licensed package**. Instead, you activate your license with a key file.
 
1. Ensure you have the 2025 Q2 (or later) version installed.
2. Add or update your license key file as described in the [Setting Up Your License Key File](https://docs.telerik.com/devtools/aspnet-ajax/licensing/license-key) guide.
3. Clean and rebuild your project to ensure the license is applied correctly.
 
>tip If you're still seeing trial messages after applying the license key, refer to the [Licensing FAQ](https://docs.telerik.com/devtools/aspnet-ajax/licensing/licensing-faq) for troubleshooting guidance.
 
### For Telerik UI for ASP.NET AJAX versions prior to 2025 Q2
 
In older versions, the trial and licensed assemblies are separate. To upgrade:
 
1. Download the licensed version of Telerik UI for ASP.NET AJAX from the [Telerik website](https://www.telerik.com/account/downloads/product-download?product=RCAJAX).
2. Remove all references to the trial assemblies from your project.
3. Add references to the licensed assemblies from the downloaded package.
4. Follow the detailed steps in the [Upgrading a Trial to a Developer License or to a Newer Version](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax) documentation.
 
>tip You should also uninstall the trial version from your system to avoid mixing assemblies.
 
## See Also
 
- [Getting Tired of Seeing Trial Messages in Your ASP.NET AJAX Application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application) - A blog post providing additional insights on transitioning from trial to licensed versions.
- [Setting Up Your License Key File](https://docs.telerik.com/devtools/aspnet-ajax/licensing/license-key)
- [Licensing FAQ](https://docs.telerik.com/devtools/aspnet-ajax/licensing/licensing-faq)
