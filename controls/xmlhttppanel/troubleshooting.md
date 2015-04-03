---
title: Troubleshooting
page_title: Troubleshooting | UI for ASP.NET AJAX Documentation
description: Troubleshooting
slug: xmlhttppanel/troubleshooting
tags: troubleshooting
published: True
position: 5
---

# Troubleshooting



## Compatibility issues with RadScriptManager and RadStyleSheetManager

The __RadXmlHttpPanel__ has known compatibility issues with __RadScriptManager__ and __RadStyleSheetManager__.Both managers combine all the requests (__RadScriptManager__ combines the requests to the JavaScript assembly resource files and __RadStyleSheetManager__ combines the ones to stylesheet resource files of all __Telerik controls__ present on the page),into a single request.

Because the page does not go through its normal life cycle, after the __Telerik controls__ have been updated by the __RadXmlHttpPanel__, the controls’ scripts and stylesheets need to be evaluated and applied, respectively. This, however cannot be done if the scripts (and the stylesheets) are combined into a single file - the __RadXmlHttpPanel__cannot find the right scripts and styles for the respective __Telerik control__. That is why there might be client-script errors and the styles will not be applied correctly if the __RadXmlHttpPanel__is used together with the __RadStyleSheetManager__and the __RadScriptManager__.

There are 2 ways to solve this problem:

1. use the Microsoft AJAX ScriptManager controlOR

1. set __EnableScriptCombine="false"__ for __RadScriptManager__ and __EnableStyleSheetCombine="false"__ to __RadStyleSheetManager__.



## Event Handlers Might Not Be Not Raised in a Default Document in IIS 7 or IIS 7.5 Integrated Mode

Problem

When RadCompression is enabled and you are using .NET 4.0, event handlers might not be raised in a default document in IIS 7 or IIS 7.5 Integrated Mode, __which could break the normal work of RadXmlHttpPanel__.

Solution

This problem is caused by a breaking change in .NET 4.0 described [here](http://www.asp.net/learn/whitepapers/aspnet4/breaking-changes#0.1__Toc256770154). To workaround it one can set __preCondition="managedHandler"__ for the RadCompression module. You may also need to remove the __runAllManagedModulesForAllRequests__ setting from your web.config if you have it (or set it to false).
