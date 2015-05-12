---
title: Troubleshooting
page_title: Troubleshooting | RadXmlHttpPanel for ASP.NET AJAX Documentation
description: Troubleshooting
slug: xmlhttppanel/troubleshooting
tags: troubleshooting
published: True
position: 60
---

# Troubleshooting



## Compatibility issues with RadScriptManager and RadStyleSheetManager

The **RadXmlHttpPanel** has known compatibility issues with **RadScriptManager** and **RadStyleSheetManager**. Both managers combine all the requests (**RadScriptManager** combines the requests to the JavaScript assembly resource files and **RadStyleSheetManager** combines the ones to stylesheet resource files of all **Telerik controls** present on the page),into a single request.

Because the page does not go through its normal life cycle, after the **Telerik controls** have been updated by the **RadXmlHttpPanel**, the controls’ scripts and stylesheets need to be evaluated and applied, respectively. This, however cannot be done if the scripts (and the stylesheets) are combined into a single file - the **RadXmlHttpPanel** cannot find the right scripts and styles for the respective **Telerik control**. That is why there might be client-script errors and the styles will not be applied correctly if the **RadXmlHttpPanel** is used together with the **RadStyleSheetManager** and the **RadScriptManager**.

There are 2 ways to solve this problem:

* use the Microsoft AJAX ScriptManager control

* OR, set **EnableScriptCombine="false"** for **RadScriptManager** and **EnableStyleSheetCombine="false"** to **RadStyleSheetManager**.



## Event Handlers Might Not Be Not Raised in a Default Document in IIS 7 or IIS 7.5 Integrated Mode

Problem

When RadCompression is enabled and you are using .NET 4.0, event handlers might not be raised in a default document in IIS 7 or IIS 7.5 Integrated Mode, **which could break the normal work of RadXmlHttpPanel**.

Solution

This problem is caused by a breaking change in .NET 4.0 described [here](http://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1**Toc256770154). To workaround it one can set **preCondition="managedHandler"** for the RadCompression module. You may also need to remove the **runAllManagedModulesForAllRequests** setting from your web.config if you have it (or set it to false).
