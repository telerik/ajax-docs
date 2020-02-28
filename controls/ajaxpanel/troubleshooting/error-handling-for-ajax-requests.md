---
title: Error Handling for AJAX Requests
page_title: Error Handling for AJAX Requests | RadAjax for ASP.NET AJAX Documentation
description: Error Handling for AJAX Requests
slug: ajaxpanel/troubleshooting/error-handling-for-ajax-requests
tags: error,handling,for,ajax,requests
published: True
position: 7
---

# Error Handling for AJAX Requests



## 

Telerik did not implement custom error handling for **RadAjax** , because the Microsoft AJAX framework already takes care of that. During partial-page rendering, you can handle errors by doing the following:

* Set the [AllowCustomErrorsRedirect](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.allowcustomerrorsredirect.aspx) property, which determines how the custom error section of the Web.config file is used when an error occurs during an asynchronous postback.

* Handle the [ScriptManager](https://msdn.microsoft.com/en-us/library/bb398863.aspx) control's [AsyncPostBackError](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.asyncpostbackerror.aspx) event, which is raised when there is a page error during an asynchronous postback.

* Set the [AsyncPostBackErrorMessage](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.asyncpostbackerrormessage.aspx) property, which is the error message that is sent to the browser.

## See Also

 * [ScriptManager.AllowCustomErrorsRedirect Property](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.allowcustomerrorsredirect.aspx)

 * [ScriptManager.AsyncPostBackError Event](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.asyncpostbackerror.aspx)

 * [ScriptManager.AsyncPostBackErrorMessage Property](https://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.asyncpostbackerrormessage.aspx)
