---
title: Overview
page_title: Alert, Confirm, Prompt Dialogs Overview | RadWindow for ASP.NET AJAX Documentation
description: Overview
slug: window/alert,-confirm,-prompt-dialogs/overview
tags: overview
published: True
position: 0
---

# Alert, Confirm, Prompt Dialogs Overview

You can replace the standard alert, confirm, and prompt dialog boxes that are provided by the browser when you call the **window.alert**, **window.prompt** and **window.confirm** commands. The replacement dialog boxes are called with the **[radalert]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%})**, **[radprompt]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%})** and **[radconfirm]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%})** methods, correspondingly. 

>note A **RadWindowManager** must be present on the form for you to use the **radalert**, **radconfirm**, and **radprompt** dialogs. 

The replacement popups are implemented using **RadWindow**, and are a good deal more flexible than their browser counterparts:

* You can use the [RadWindow's client-side API]({%slug window/client-side-programming/radwindow-object%}) with them, because the JavaScript functions that are used to call them return a reference to the RadWindow object.

* You can modify the look and feel of most aspects of these dialogs and it's easier to get information to and from them.

* Their appearance is unified across all browsers so your users get the same experience in all cases.

* They use the same skins the rest of the Telerik controls on your site use to match the rest of the UI. The used skin is taken from the `Skin` property of the **RadWindowManager** that creates them.

* Unlike browser popups, which can only display text, you can pass HTML to the RadWindow popups for a richer user experience and improved usability.

	>tip With arbitrary messages, you have the option to display rather large content. To ensure proper appearance, you must set the dialog dimensions (they are passed as arguments to the corresponding method) to values that will accommodate your content.


Since **Q1 2011** the **RadWindowManager** offers built-in [server-side methods]({%slug window/server-side-programming/methods%}) to call the **RadAlert, RadConfirm and RadPrompt** dialogs.

Since **Q1 2012** the RadAlert and RadConfirm dialogs offer the option to accept an URL for an image that will be displayed on the left instead of their default icon for both the server-side and client-side methods.



>caution The Telerik RadWindow popups are non-blocking; that is, they do not block the execution thread on the server. This is because the execution of the thread cannot be blocked by JavaScript. This non-blocking feature has some important implications:
>
* The Telerik RadWindow popups are modal. That is, they block the content underneath and prevent the user from interacting with it. However, because of the non-blocking nature of the popups, there are ways to work around this modal behavior. If it is absolutely necessary that a popup is modal then the default browser popups should be used.
>
* If the non-blocking nature of the **radconfirm** dialog is a problem, there is a possible workaround described in the following Online Demo: [Confirm Server Clicks](http://demos.telerik.com/aspnet-ajax/window/examples/confirmserverclicks/defaultcs.aspx). The general approach is to move the functionality that requires the user's input to the callback function. It has some limitations and peculiarities which are listed in the demo description (e.g. that you must be able to finish the task via JavaScript only). The following Code Library article provides a different approach that overrides the entire function: [Block the execution thread with radconfirm](http://www.telerik.com/community/code-library/aspnet-ajax/window/block-the-execution-thread-with-radconfirm.aspx). Be aware that the approach described there works only for elements that have a click method and there is no guarantee that it will work in all scenarios. As an alternative, you could use __doPostback() in the ClientCallback function or ajaxRequestWithTarget() if you are using RadAjaxManager ([using ajaxRequestWithTarget() with radconfirm](http://www.telerik.com/community/code-library/aspnet-ajax/window/block-the-execution-thread-with-radconfirm.aspx#1242035))




## See Also

 * [RadAlert Dialog]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%})

 * [RadConfirm Dialog]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%})

 * [RadPrompt Dialog]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%})

 * [How to Change the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})
