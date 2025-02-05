---
title: Frequently Asked Questions
page_title: Licensing Frequently Asked Questions
description: "Learn the answers to frequently asked questions about the Telerik UI for ASP.NET AJAX licensing."
slug: getting-started/activating-your-license/licensing-faq
position: 2
---

# Frequently Asked Questions

This article lists the answers to the most frequently asked questions (FAQs) about working with the Telerik UI for ASP.NET AJAX license key.

## Does the license key expire?

Yes, the license key expires at the end of your subscription:

* For trial users, this is at the end of your 30-day trial period.
* For commercial license holders, this is when your subscription term expires.

You need to download and install a new license key after:

* Starting a new trial
* Buying a new license
* Renewing an existing license
* Upgrading an existing license

An expired [perpetual license](https://www.telerik.com/purchase/faq/licensing-purchasing#licensing) key is valid for all Telerik UI for ASP.NET AJAX versions published before the license expiration date.

## Will Telerik UI for ASP.NET AJAX function with an expired license key?

This depends on the [Telerik UI for ASP.NET AJAX license type (perpetual, subscription, or trial)](https://www.telerik.com/purchase/faq/licensing-purchasing#licensing):

* *Perpetual licenses* function normally with an expired license key, as long as the application is using a version that was released before the expiration date of the license.
* *Subscription licenses* function normally in already deployed applications, but you cannot rebuild and republish the app.
* *Trial licenses* function normally only within the 30-day trial period.

Scenarios that do not match the above three descriptions result in the following application behaviors:

* A popup banner appears on application startup.
* A watermark appears on Telerik UI for ASP.NET AJAX components.
* [A warning message appears in the application's build log]({%slug getting-started/activating-your-license/license-key-errors%}).

## I updated the Telerik UI for ASP.NET AJAX version in my project and license errors appeared. Why?

The most likely cause is that the new Telerik UI for ASP.NET AJAX version was released after the expiration date of your current license or license key. To fix this issue:

1. Renew your Telerik UI for ASP.NET AJAX license if necessary.
1. [Update your license key]({%slug getting-started/activating-your-license/setting-up-your-license%}#license-key-updates)

## Can I use the same license key in multiple builds?

You can use your personal license key in multiple pipelines, builds, and environments. However, each individual developer must use their own unique personal license key.

## Do I need an Internet connection to activate the license?

No, the license validation and activation occur offline.

## Do I have to add the license key to source control?

No, do not add the License key file (`TelerikLicense.cs` if you used the name from the [Manual Installation]({%slug getting-started/activating-your-license/setting-up-your-license%}#manual-installation) steps) or its contents to source control.

Do not store the license key in plain text in GitHub Actions Workflow definitions.

## My team has more than one license holder. Which key do we have to use?

To activate Telerik UI for ASP.NET AJAX:

* [Every developer must be assigned their own license or seat](https://www.telerik.com/purchase/faq/licensing-purchasing).
* Every developer must use a license key that is associated with their personal Telerik account.

## Are earlier Telerik UI for ASP.NET AJAX versions affected?

No, versions up to **2024.4.1112** released prior to February 2025 do not require a license key.

## Next Steps

* [Set Up the Telerik NuGet Feed]({%slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package%}#step-1-add-the-telerik-nuget-feed-to-visual-studio)

## See Also

* [Troubleshoot License Key Errors]({%slug getting-started/activating-your-license/license-key-errors%})
