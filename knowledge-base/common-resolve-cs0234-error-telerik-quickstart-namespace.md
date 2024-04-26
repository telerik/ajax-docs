---
title: How to Resolve CS0234 Error in Telerik.QuickStart Namespace
description: This article provides steps to resolve the "CS0234: The type or namespace name 'QuickStart' does not exist in the namespace 'Telerik'" error when using the Telerik.QuickStart namespace.
type: troubleshooting
page_title: Resolving CS0234 Error in Telerik.QuickStart Namespace
slug: common-resolve-cs0234-error-telerik-quickstart-namespace
tags: telerik, quickstart, namespace, error, CS0234
res_type: kb
---
# Environment
| Product | Version |
|---------|---------|
| Telerik UI for ASP.NET AJAX | all |

# Description
I am encountering the "CS0234: The type or namespace name 'QuickStart' does not exist in the namespace 'Telerik' (are you missing an assembly reference?)" error when using the Telerik.QuickStart namespace. I have tried to find the QuickStart files or DLL in my Telerik package but have been unsuccessful.

# Solution
The Telerik.QuickStart namespace is part of the demo website and is used only for the purposes of the demos.

To resolve this error, follow these steps:

1. Download the Telerik UI for ASP.NET AJAX 20xx_x_xxx_Demos_Dev.msi from your Telerik account by going to [https://www.telerik.com/account/product-download?product=RCAJAX](https://www.telerik.com/account/product-download?product=RCAJAX).
2. Install the downloaded Telerik UI for ASP.NET AJAX demos.
3. Open the App_Code folder in the installed demo site.
4. Copy the QuickStart files from the App_Code folder to your project's App_Code folder.
5. Make sure that the Build Action of all QuickStart-related files is set to "Compile".

Alternatively, the [Isolate this demo as a stand-alone application page](http://demos.telerik.com/aspnet-ajax/Common/QSFInstructions/Instructions.html) shows how to remove it from the demos. This page is available as a link on each demo along with a download option with ready-to-use demo files (Download demo code files):


# Notes
- The QuickStart namespace is only used in the Telerik AJAX demo website and is not required to use your project's Telerik controls.
- The QuickStart files provided in the demos are written in C#. If you are using a Visual Basic project, you may need to convert the code to Visual Basic yourself.


# See Also
- [Isolating Telerik Demos as Stand-alone Applications](http://demos.telerik.com/aspnet-ajax/Common/QSFInstructions/Instructions.html)
