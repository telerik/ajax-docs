---
title: Get more descriptive errors by disabling AJAX
description: AJAX may hide both server and client-side errors. See how to troubleshoot your project by removing AJAX on the page.
type: how-to
page_title: Get more descriptive errors by disabling AJAX
slug: common-get-more-descriptive-errors-by-disabling-ajax
res_type: kb
---


## Description

AJAX may sometimes hide both server and client-side errors. Therefore, when developing your app, we highly recommend you to ensure that the functionality works without adding AJAX. Quite a helpful way of troubleshooting your project could be if you remove AJAX on the page (if present) and enable your script debugger (FireBug or F12) to see whether there are any script or server errors interfering, and make sure that the application **works without AJAX**.

Also, note that using ***RadAjaxPanel/UpdatePanel*** simultaneously with ***RadAjaxManager*** or ***UpdatePanel*** (*or implementing multiple wrapped RadAjaxPanels/UpdatePanels*) is not a supported scenario and we highly recommend to avoid such implementation. In such cases you can replace the RadAjaxPanel with a regular asp:Panel or remove the RadAjaxManager:
[Controls Wrapped in AjaxPanel and Added to AjaxManager Settings]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%})

## Solution

The obvious way is to temporarily remove or comment out any of the following controls on the page: RadAjaxManager, RadAjaxManagerProxy, RadAjaxPanel, UpdatePanel, RadXmlHttpPanel, etc.

There is also another more convenient and straightforward approach to achieve that - just set the EnableAJAX property to false:

````ASPX
<telerik:RadAjaxManager ... EnableAJAX="false">
````

Or:

````ASPX
<telerik:RadAjaxPanel ... EnableAJAX="false">
````

## See Also

* [General troubleshooting of JavaScript errors]({%slug common-general-troubleshooting-javascript-errors%})
* [Understanding AJAX Controls]({%slug understanding-ajax-controls%})

