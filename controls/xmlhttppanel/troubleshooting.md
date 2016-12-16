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

This article contains common problems related to using callbacks from RadXmlHttpPanel:

* [Compatibility issues with RadScriptManager and RadStyleSheetManager](#compatibility-issues-with-radscriptmanager-and-radstylesheetmanager)
* [Event Handlers Might Not Be Not Raised in a Default Document in IIS 7 or IIS 7.5 Integrated Mode](#event-handlers-might-not-be-not-raised-in-a-default-document-in-iis-7-or-iis-75-integrated-mode)
* [Excessive Requests](#excessive-requests)
* [Type xxxxxxxx Has Already Been Registered](#type-xxxxxxxx-has-already-been-registered)
* [Client-side Objects Not Available](#client-side-objects-not-available)

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


## Excessive Requests

When the `EnableClientScriptEvaluation` property of the RadXmlHttpPanel control is set to `true` it will:

* Create `<script>` new tags in the `<head>` with the `src` attributes of the `<script>` tags that exist in the response. This will cause the browser to request them. When `IScriptControl` instances like the Telerik UI for ASP.NET AJAX controls are present, they will bring all their scripts with the response each time, which means that each callback will request them again.
* Copy `<script>` tags with inline content to the page where they will be evaluated. This may cause code to run multiple times and cause a [Type xxxxxxxx has already been registered](#type-xxxxxxxx-has-already-been-registered) error or some logic to run unexpectedly several times.

This behavior is expected and the performance hit or re-evaluation of scripts is not acceptable, you can:

* remove the `IScriptControl` objects from the callback so it can be used to fetch data only. You can then use their client-side API to set the data in them.
* use partial postbacks through an `<asp:UpdatePanel>` or `<telerik:RadAjaxPanel>` so the page goes through its complete lifecycle and controls are recreated as usual and new script entries are not created. See also [Differences Between RadXmlHttpPanel and RadAjaxPanel]({%slug xmlhttppanel/getting-started/differences-between-radxmlhttppanel-and-radajaxpanel%}).

Setting the `EnableClientScriptEvaluation` property of the RadXmlHttpPanel control to `false` can cause the [control client-side objects to not be available](#client-side-objects-not-available).

## Type xxxxxxxx Has Already Been Registered

This error can be raised if an `IScriptControl` instance like a control from the Telerik UI for ASP.NET AJAX suite is included in the callback and the `EnableClientScriptEvaluation` property of the RadXmlHttpPanel control is set to `true`. It will cause the scripts for the `IScriptControl` instance to be re-evaluated and if they run twice, they may register types, events and namespaces numerous times.

This problem is to be expected in such a scenario and you can avoid it in a few ways:

* Set the `EnableClientScriptEvaluation` property of the RadXmlHttpPanel control to `false`. This will cause the [control client-side objects to not be available](#client-side-objects-not-available).
* Set the `ScriptMode` property of the `ScriptManager` to `Release`, because the double registration error is thrown only in debug mode: [https://msdn.microsoft.com/en-us/library/bb397723.aspx#Anchor_1](https://msdn.microsoft.com/en-us/library/bb397723.aspx#Anchor_1). This property is also controlled by the `debug` attribute of the `compilation` element in the `web.config`.
* remove the `IScriptControl` objects from the callback so it can be used to fetch data only. You can then use their client-side API to set the data in them.
* use partial postbacks through an `<asp:UpdatePanel>` or `<telerik:RadAjaxPanel>` so the page goes through its complete lifecycle and controls are recreated as usual and new script entries are not created. See also [Differences Between RadXmlHttpPanel and RadAjaxPanel]({%slug xmlhttppanel/getting-started/differences-between-radxmlhttppanel-and-radajaxpanel%}).



## Client-side Objects Not Available

When you place an `IScriptControl` object (like the ones from the Telerik UI for ASP.NET AJAX suite) inside a **RadXmlHttpPanel** and you invoke a callback, the client-side object is not available anymore (e.g., `$find()` returns `null`).

This happens because callbacks are not designed to return complex controls, scripts, HTML and to execute the full code. Here is an example process sequence:

1. Initially the controls are initialized by the MS AJAX framework, all their functionality, API and client-side object are available.
1. A callback disposes the HTML elements and places the new HTML from the server instead of them. No scripts from the server are executed, so the `$create()` statement is not called by the MS AJAX framework, and the control's client-side object, API and events do not exist (e.g., `$find()` will return `null` for it). For example, clicking a RadButton will not invoke the client-side functionality and events, but a full postback from the underlying `<input>` HTML element.
1. After this full postback, the page goes through its normal lifecycle, the `$create()` statement is called, the RadButton client-side object exists and so the OnClientClicked handler will work until it is disposed by a callback again.

In such cases you can take three approaches:

* Redesign the page so it does not require user interaction with those controls, but only shows data/information in them.
* Use partial postbacks (e.g., through an `<asp:UpdatePanel>` or `<telerik:RadAjaxPanel>`) so the page goes through its complete lifecycle and controls are recreated. See also [Differences Between RadXmlHttpPanel and RadAjaxPanel]({%slug xmlhttppanel/getting-started/differences-between-radxmlhttppanel-and-radajaxpanel%}).
* Set the `EnableClientScriptEvaluation` property of the RadXmlHttpPanel control to `true`. It will evaluate the scripts that come with the response, including the `$create()` statement which will initialize the client-side objects of the controls.
	>important Review the [Excessive Requests](#excessive-requests) section and the [Type xxxxxxxx has already been registered](#type-xxxxxxxx-has-already-been-registered) section for information on issues this script evaluation can cause.

## See Also

* [Differences Between RadXmlHttpPanel and RadAjaxPanel]({%slug xmlhttppanel/getting-started/differences-between-radxmlhttppanel-and-radajaxpanel%})