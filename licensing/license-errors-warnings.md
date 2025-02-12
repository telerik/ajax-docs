---
title: License Activation Errors and Warnings
page_title: Telerik License Activation Errors and Warnings
description: Troubleshooting Telerik license key errors when using UI for ASP.NET AJAX.
slug: licensing/license-errors-warnings
tags: license, key, error, warning, troubleshooting
position: 4
---

# License Activation Errors and Warnings

Starting with the 2025 Q1 release, using Telerik UI for ASP.NET AJAX without a license or with an invalid license causes specific license warnings and errors. This article defines what an invalid license is, explains what is causing it, and describes the related license warnings and errors.

## Invalid License

An invalid license can be caused by any of the following:

* Using an expired subscription license—subscription licenses expire at the end of the subscription term.
* Using a perpetual license for product versions released outside the validity period of your license.
* Using an expired trial license.
* A missing license for Telerik UI for ASP.NET AJAX.
* Not installing a license key in your application.
* Not updating the license key after renewing your Telerik UI for ASP.NET AJAX license.

## License Warnings and Errors

When using Telerik UI for ASP.NET AJAX in a project with an expired or missing license, the `Telerik.Licensing` build task will indicate the following errors:


| Error or Condition |	Solution |
| --- | --- |
| `No license key is detected` |	[Set up a license key]({%slug licensing/license-key%}) to activate the UI controls and remove the error message. |
| `Invalid license key` |	[Download a new license key]({%slug licensing/license-key%}#downloading-the-license-key) and use it to activate the UI controls and remove the error message. |
| `Your subscription license has expired.` |	Renew your subscription and [download a new license key]({%slug licensing/license-key%}#downloading-the-license-key). |
| `Your perpetual license is invalid.` |	You are using a product version released outside the validity period of your perpetual license. To remove the error message, do either of the following: |
| | - Renew your license, then download a new license key and use it to activate the controls. |
| | - Downgrade to a product version included in your perpetual license as indicated in the message. |
| `Your trial license has expired.` |	Purchase a commercial license to continue using the product. |
| `Your license is not valid for the detected product(s).` |	Review the purchase options for the listed products. Alternatively, remove the references to the listed packages from `package.json`. |

## See Also

* [Setting Up Your License Key]({%slug licensing/license-key%})
* [Adding the License Key to CI Services]({%slug licensing/add-license-to-ci-cd%})
* [Frequently Asked Questions about Your Telerik UI for ASP.NET AJAX License Key]({%slug licensing/licensing-faq%})
