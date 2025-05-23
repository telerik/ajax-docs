---
title: Adding Your License Key to CI/CD Platforms as a Code Snippet
description: Learn how to add your Telerik UI for ASP.NET AJAX license as a code snippet in CI/CD environments.
type: how-to
page_title: Adding Your License Key to CI/CD Platforms as a Code Snippet
slug: licensing-add-license-as-snippet-ci-cd
tags: common, asp, net, webforms, ci, cd, code, snippet
res_type: kb
---

## Environment

| Product | Version
| ---- | ---- |
| Telerik UI for ASP.NET WebForms | 2025 Q1 or later |

## Description

I work in a CI/CD environment and need to activate my Telerik UI for ASP.NET AJAX license key. My projects, however, do not use NuGet packages. How can I activate the Telerik UI for ASP.NET AJAX without using the `Telerik.Licensing` package?

## Solution

Telerik strongly recommends the use of NuGet packages whenever possible. If NuGet is not an option, configure your CI/CD tools to create a C# license file during build:

1. Go to the [License Keys page](https://www.telerik.com/account/your-licenses/license-keys) in your Telerik account.

1. On the Telerik UI for ASP.NET AJAX row, click the **View key** link in the **SCRIPT KEY** column.

1. Create a new environment variable or repository secret and add the script key as a value.

1. Add a build task that creates a new `TelerikLicense.cs` file and writes the script key as file content by using the environment variable.

1. Add a reference to the `Telerik.Licensing.Runtime.dll`.

>warning Do not publish the script license key snippet in publicly accessible repositories. This is your personal license key.


## See Also

* [Setting Up Your License Key]({%slug licensing/license-key%})
* [License Activation Errors and Warnings]({%slug licensing/license-errors-warnings%})
* [Frequently Asked Questions about Your Telerik UI for ASP.NET AJAX License Key]({%slug licensing/licensing-faq%})
* [Adding the License Key to CI Services]({%slug licensing/add-license-to-ci-cd%})
