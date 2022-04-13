---
title: Licensing
page_title: Licensing
description: "Learn more about the trial and commercial licenses, the .NET licensing mechanism, and the license limitations by Telerik UI for ASP.NET AJAX."
slug: introduction/licensing/license-agreement
previous_url: licensing/licensing
tags: license, agreement
previous_url: licensing/license-agreement, licensing/trial-license-limitations, licensing/license-file
published: True
position: 20
---

# Licensing

Telerik UI for ASP.NET AJAX offers a 30-day trial with a full-featured version of the tool—no restrictions! What’s more, you are eligible for complete technical support during your trial period in case you have any questions. To sign up for a free 30-day trial, go [here](https://www.telerik.com/login-b/ui-for-asp.net-ajax#register).

To use Telerik UI for ASP.NET AJAX commercially, you need to purchase a license. The terms of use are fully described in the [Telerik UI for ASP.NET AJAX End User License Agreement (EULA)](https://www.telerik.com/purchase/license-agreement/aspnet-ajax). The EULA is also available in your Telerik controls installation folder under `\LicenseAgreements\EULA.rtf`. For example, the default location for the R2 2018 release is `C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX R2 2018\LicenseAgreements\EULA.rtf`.

## License Limitations

Developer licenses come with modified DLLs, which work without displaying copyright messages. If you have a Developer license for one or more Telerik components, you need to ensure that you are using the developer build when downloading the controls. These builds have the `Dev` abbreviation in their file names.

If your application is displaying a copyright message intermittently, this means that you are using a trial version of the product. Log in to your [Telerik account](https://www.telerik.com/account/default.aspx) and download the developer build through the **Products & Subscriptions** menu and its **Purchased Products** section. For more information on updating your project, refer to the article on  the [Upgrading the Trial License to a Production License]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}) section for step-by-step instructions.

The free trial licenses of all Telerik products are fully functional and will work for an unlimited time, but will randomly display a copyright message on the page.

## Bill of Materials and Third-Party Software Licensing

For a Bill of Materials (BOM) and a list of the third party software (including open-source software), go to your Telerik controls installation folder `\LicenseAgreements\ThirdParty\NOTICE.txt`. For example, the default location for the R2 2018 SP1 release is `C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX R2 2018\LicenseAgreements\ThirdParty\NOTICE.txt`. For versions prior to R2 2018 SP1, the file is called `licenses.txt`.

## .NET Licensing Mechanism

As of Q1 2015, Telerik UI for ASP.NET AJAX uses the [standard .NET licensing mechanism](https://docs.microsoft.com/bg-bg/dotnet/framework/tools/lc-exe-license-compiler), which means that using the controls in design-time causes Visual Studio to add a `license.licx` to the solution.	This file is used only in design-mode and is not needed for deployment explicitly. The .NET framework (`lc.exe`) will	embed it in the assembly when your web application is built for deployment.

The `license.licx` file is maintained by Visual Studio and contains information about all licensed components in the application, including non-Telerik products. The availability of this license file is not expected to cause any performance or compilation issues and you can ignore it.

* If your project build fails with errors pointing to the license file, you can delete it and rebuild the application. Alternatively, you can clear its contents and mark it as `Read Only`. All known errors related to the usage of the license file are covered by the KB article on [fixing license file related errors]({% slug common-how-to-fix-license-file-related-errors %}).

* If you are working under source control, once the file is created, it will be detected as a change by your source control system. It is recommended that you check in this file initially. When the files is checked out again during your work,	it is up to you to decide whether to check it in or discard the changes.

* If you are getting random copyright errors in the browser when using the trial version of Telerik UI for ASP.NET AJAX, refer to the article on [getting the copyright message]({% slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version %}}#i-still-get-the-copyright-message). In this case, you need to upgrade the `Telerik.Web.UI.dll` trial version with the registered developer one as explained in the article on [upgrading a trial to a developer license]({% slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version %}#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax).

## Licensing FAQ

* How many licenses do I need? - Each license allows one developer to work with the product. If you purchase a license for a product bundle, such as Telerik UI for ASP.NET AJAX or DevCraft Complete, all the tools in the bundle are licensed to one developer, and only that developer can develop products with the tools in the bundle.

* Can I install the product on more than one machine? - The Telerik licenses have no ties to any specific machine or server, but only to a developer. Developers can install an application that uses our controls on one to many machines (development, staging, production) using their single license.

* Does the trial version impose any limitations - the trial version of Telerik UI for ASP.NET AJAX is fully functional and will continue to work even after the 30 days evaluation period. The only limitation is the random trial error message that you will get sometimes when you refresh or load the page with the components. The upgrade to a registered Dev version of the product will remove the trial error.

You can find more information for the licensing in the [Purchasing & Licensing FAQs](https://www.telerik.com/purchase/faq/licensing-purchasing) page as well as in the [Telerik licensing demystified](https://www.telerik.com/blogs/telerik-licensing-demystified) blog post.



 
