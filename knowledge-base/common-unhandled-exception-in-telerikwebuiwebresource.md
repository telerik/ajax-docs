---
title: Unhandled exception in Telerik.Web.UI.WebResource
description: Unhandled exception in Telerik.Web.UI.WebResource. Check it now!
type: how-to
page_title: Unhandled exception in Telerik.Web.UI.WebResource
slug: unhandled-exception-in-telerikwebuiwebresource
res_type: kb
---


### PROBLEM

This article explains how to handle the following exception that seems to originate from the Telerik WebResource handler:

`Unhandled exception at line XX, column XXXX in https://localhost:44305/Telerik.Web.UI.WebResource.axd?xxxxxxxx`


### DESCRIPTION

Any JavaScript error thrown by an application using RadScriptManager is likely to look like this. It is not always a Telerik-related issue, however.

When a JavaScript error is thrown the browser will show the source file that contains it. Since RadScriptManager combines all JavaScript requests on the page, all errors seem to be coming from the Telerik.Web.UI.WebResource handler.

### TROUBLESHOOTING STEPS

The first step is to identify the error and check its actual source. Here are a few steps that can help you gather relevant information so you can investigate it:

1. monitor the browser console and review the error. If you recognize the stack trace or the exact piece of code that throws it, you may be able to fix it in the application code.
2. enable the Telerik and MS AJAX CDNs so that you can get human-readable names for the involved resources. This will let you evaluate better the source of the error, its stack trace and see where it originates (application code, Telerik control code, the MS AJAX framework). Here is a sample RadScriptManager declaration for this
    
    ```ASP.NET
    <telerik:RadScriptManager runat="server" ID="RadScriptManager1" EnableCdn="true" CdnSettings-TelerikCdn="Enabled">
    </telerik:RadScriptManager>
    ```
    
3. If you do not recognize the code or it stems from Telerik controls code, you can open a forum thread or a support ticket. You can also review some of the most common issues before doing that. Including the scenario, stack trace, error message and any other relevant details will help.


### COMMON ISSUES

Here is a list of the most common errors that seem caused by Telerik controls and have rather clear resolutions:

- **An error that happens only in IE** is likely to be caused by its unsupported Compatibility Mode or Enterprise Mode that [you need to recognize and turn off](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-different-appearance-in-internet-explorer-on-local-and-production-servers).

- **Sys.WebForms.PageRequestManagerServerErrorException** and **Sys.WebForms.PageRequestManagerServerErrorExecution** - these are classes of errors that are thrown by the MS AJAX framework when there is something wrong with the response of partial page rendering. Usually a server error is thrown (like `Object` reference not set to an instance of an object.) or the response was tampered with (The message received from the server could not be parsed). In such cases you should debug the server code to find the offending line(s) and fix them.
- **Could not find UpdatePanel with ID "?". If it is being updated dynamically then it must be inside another UpdatePanel**. - this is usually caused by nested AJAX settings and/or update panels. In such cases reviewing the AJAX setup on the page will let you simplify it so that there are no nested update panels anymore. A few points of interest:
    - the same content must not be AJAX-enabled by both a RadAjaxManager and an RadAjaxPanel / asp:UpdatePanel. You can read more in the [Controls Wrapped in AjaxPanel and Added to AjaxManager Settings](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings) article.
    - when a parent element is already AJAX-enabled, you don't need to have its children as separate AjaxSettings or in nested UpdatePanel instances, they will already participate in the partial page rendering. This is important especially for data bound controls. For example, a single row of a grid cannot be updated without the entire grid being updated.
    - you should keep the RadAjaxManager and RadAjaxManagerProxy instances out of AjaxSettings and UpdatePanels.
    - review the [Known Reasons for Error Messages](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/troubleshooting/known-reasons-for-error-messages) article for a few more common problems.


