---
title: Telerik Ajax licensing FAQ
description: Here you will find answers to some of the most popular questions about the Telerik UI for ASP.NET AJAX licensing mechanism - RadControls for ASP.NET AJAX
type: troubleshooting
page_title: How does the Telerik Ajax licensing work on the dev machine and the server?
slug: common-licensing-faq
position: 
tags: 
ticketid: 1602669
res_type: kb
---

>note For `Telerik UI for ASP.NET AJAX 2025 Q1` or later, check out the [Licensing FAQ]({%slug licensing/licensing-faq%}), for prevous versions, please follow the instructions below.


## Description
The article will provide answers to some of the most popular questions we got so far like:
* How does the Telerik Ajax licensing work in the browser?
* How does the Telerik Ajax licensing work in the design time of Visual Studio?
* Is it possible to temporarily hide the trial error message in the browser when using the Trial version of Telerik.Web.UI.dll assembly? 
* How to use the license file (licenses.licx) in the project? Should I update it after each upgrade of the Telerik assemblies to a newer version?
* How to solve the license file-related errors?
* What are the differences between the trial and paid assemblies?



## Solution
* How does the Telerik Ajax licensing work in the browser? - if you are using the trial version of the Telerik.Web.UI.dll assembly you will get random trial errors in the browser. The controls do not use license keys so the only way to eliminate the trial error is to purchase a license and to replace the trial assembly with the paid developer's one. See [Licensing Overview]({%slug licensing/overview%}) for more information.

* How does the Telerik Ajax licensing work in the design time of Visual Studio? - Starting from Q1 2015, Telerik UI for ASP.NET Ajax suite follows the standard licensing process of .NET. When you use the controls in the design time, Visual Studio automatically adds a license.licx file to your project. This file is only required during the design phase and does not need to be deployed with the project. The purpose of this license file is to prevent any unauthorized copying of the controls, to provide statistics to license holders within the company about the usage of available licenses, and to send anonymous usage statistics to Telerik's servers (which may result in some network requests being generated). Look [here]({%slug licensing/overview%}#licensing-mechanism) for more details.


* Is it possible to temporarily hide the trial error message in the browser when using the Trial version of Telerik.Web.UI.dll assembly? - the trial error message appears randomly in the browser and disappears on refresh when the trial version of Telerik.Web.UI.dll is used. To hide the random error you need to purchase a license or to refresh the page. You can find more information in this blog post: [Getting tired of seeing trial messages in your ASP.NET AJAX application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application).

* How to use the license file (licenses.licx) in the project? Should I update it after each upgrade of the Telerik assemblies to a newer version? - you are not expected to touch or update the contents of the license file (licenses.licx). You may need to update the file only if you get errors when building the project or in the browser as explained in the [How To Fix License File Related Errors]({%slug common-how-to-fix-license-file-related-errors%}) article.

* How to solve the license file-related errors? - follow the guidance provided in this very detailed troubleshooting article [How To Fix License File Related Errors]({%slug common-how-to-fix-license-file-related-errors%}).

* What are the differences between the trial and paid assemblies? - both versions (the paid developer build and the trial one) are fully functional and do not expose limitations. The sole difference in the trial version is that it throws sporadic errors and asks you to consider purchasing the commercial version to hide the trial error as well as to get access to all product updates and fabulous Telerik support.
