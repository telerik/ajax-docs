---
title: Using Different Versions of Telerik RadEditor in the Same ASP.NET Web Forms Application
description: Learn about using different versions of Telerik RadEditor in an ASP.NET Web Forms application.
type: how-to
page_title: How to Use Different Versions of Telerik RadEditor in an ASP.NET Web Forms Application
slug: common-different-versions-telerik-radeditor-aspnet-web-forms
tags: aspnet, web-forms, Telerik, RadEditor, versions
res_type: kb
---

### Environment

| Property | Value |
| --- | --- |
| Product | Progress® Telerik® UI for ASP.NET AJAX |
| Version | all |

### Description

I want to use a different version of Telerik RadEditor in a new ASPX page within my .NET Framework 4.8 Web Forms application. However, I am currently using Telerik RadEditor version 2020. Is it possible to have a new page with a different version of RadEditor, such as 2024?

### Solution

Unfortunately, it is not possible to use different versions of Telerik RadEditor, or any Telerik UI for ASP.NET AJAX controls, within the same ASP.NET Web Forms application. This is because all Telerik UI controls for ASP.NET AJAX are bundled together in a single assembly, Telerik.Web.UI.dll. When you reference this assembly in your project, it applies to the entire application, affecting all pages and controls within it.

To use a different version of RadEditor or any other Telerik UI control in a new page within the same application, you would need to upgrade the entire Telerik UI for ASP.NET AJAX suite within your project to the desired version. This upgrade process involves updating the Telerik.Web.UI.dll (and other related assemblies if necessary) to the version that includes the 2024 RadEditor features you're interested in.

Here are the steps you would typically follow to upgrade:

1. Back up your project.
2. Download the desired version of the Telerik UI for ASP.NET AJAX suite from your Telerik account.
3. Remove the old Telerik DLLs from your project references.
4. Add references to the new version of the Telerik DLLs.
5. Check your project for any breaking changes or deprecated features.
6. Rebuild your project and resolve any issues.

For more detailed upgrade instructions check the article [here](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax).

Please note that upgrading the Telerik UI suite might introduce changes that could affect other Telerik controls used in your application, so thorough testing is recommended after an upgrade.

If you're looking to experiment with the features of a newer version of RadEditor without upgrading your entire application, consider creating a separate test project with the newer version. This way, you can explore the new functionalities without impacting your existing application.
