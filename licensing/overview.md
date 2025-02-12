---
title: Overview
page_title: Telerik Licensing Overview
description: "Learn about the Telerik UI for ASP.NET AJAX Licensing, End User License Agreement, Bill of Materials and Third-Party Sofware Licensing"
slug: licensing/overview
tags: license, agreement
previous_url: licensing/license-agreement, licensing/trial-license-limitations, licensing/license-file, licensing
published: True
position: 0
---

# Licensing

To use Telerik UI for ASP.NET AJAX commercially, you need to purchase a license. The terms of use are fully described in the [Telerik UI for ASP.NET AJAX End User License Agreement (EULA)](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). The EULA is also available in your Telerik controls installation folder:
 - `C:\Program Files (x86)\Progress\{TELERIK_UI_FOR_ASP_NET_AJAX_VERSION}\LicenseAgreements\EULA.rtf`.


## Bill of Materials and Third-Party Software Licensing

The Bill of Materials (BOM) and a list of the third party software (including open-source software) can be found in the Telerik controls installation folder:
- `C:\Program Files (x86)\Progress\{TELERIK_UI_FOR_ASP_NET_AJAX_VERSION}\LicenseAgreements\ThirdParty\NOTICE.txt`.

## Licensing Mechanism

Starting with the `2025 Q1` release, Telerik UI for ASP.NET AJAX requires activation through a license key. To download your personal activation key and activate the Telerik UI for ASP.NET AJAX components, follow [License Key Installation]({%slug licensing/license-key%}) steps.

An invalid license results in [errors and warnings]({%slug licensing/license-errors-warnings%}) during build and run-time indicators such as watermarks and banners.

## Old Licensing Mechanism

Prior to `Telerik UI for ASP.NET AJAX 2025 Q1` release, all versions back to `R1 2015` use the [standard .NET licensing mechanism](https://docs.microsoft.com/bg-bg/dotnet/framework/tools/lc-exe-license-compiler), which means that using the controls in design-time causes Visual Studio to add a `license.licx` to the solution.	This file is used only in design-mode and is not needed for deployment explicitly. The .NET framework (`lc.exe`) will	embed it in the assembly when your web application is built for deployment.

The `license.licx` file is maintained by Visual Studio and contains information about all licensed components in the application, including non-Telerik products. The availability of this license file is not expected to cause any performance or compilation issues and you can ignore it.

* If your project build fails with errors pointing to the license file, you can delete it and rebuild the application. Alternatively, you can clear its contents and mark it as `Read Only`. All known errors related to the usage of the license file are covered by the KB article on [fixing license file related errors]({% slug common-how-to-fix-license-file-related-errors %}).

* If you are working under source control, once the file is created, it will be detected as a change by your source control system. It is recommended that you check in this file initially. When the files is checked out again during your work,	it is up to you to decide whether to check it in or discard the changes.

* If you are getting random copyright errors in the browser when using the trial version of Telerik UI for ASP.NET AJAX, refer to the article on [getting the copyright message]({% slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version %}#i-still-get-the-copyright-message). In this case, you need to upgrade the `Telerik.Web.UI.dll` trial version with the registered developer one as explained in the article on [upgrading a trial to a developer license]({% slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version %}#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax).