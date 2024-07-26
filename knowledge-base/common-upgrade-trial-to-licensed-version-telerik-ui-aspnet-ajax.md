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

This article explains how to replace the trial assembly with a paid, licensed assembly.

## Cause

The trial version of Telerik UI for ASP.NET AJAX is intended for evaluation purposes. Upon deciding to use the product for development, it is necessary to upgrade to a licensed version. The process involves manually replacing the trial assemblies with those from the licensed package.

## Solution

1. Download the licensed version of Telerik UI for ASP.NET AJAX from the [Telerik website](https://www.telerik.com/account/downloads/product-download?product=RCAJAX).
2. Follow the instructions detailed in the documentation to upgrade from a trial to a licensed version. The key steps involve removing the trial assemblies from your project and adding the licensed ones. Refer to the [Upgrading a Trial to a Developer License or to a Newer Version](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax) section.
3. Ensure all references to the trial assemblies in your project are updated to point to the licensed assemblies.

## See Also

- [Getting Tired of Seeing Trial Messages in Your ASP.NET AJAX Application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application) - A blog post providing additional insights on transitioning from trial to licensed versions.
- [Installation - Installing the Controls](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/installation-installing-the-controls) - Official documentation on how to install Telerik UI for ASP.NET AJAX.
