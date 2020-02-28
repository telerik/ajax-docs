---
title: Show RadAlert that Blocks the Entire Page
page_title: Show RadAlert that Blocks the Entire Page | RadWindow for ASP.NET AJAX Documentation
description: Show RadAlert that Blocks the Entire Page
slug: window/how-to/show-radalert-that-blocks-the-entire-page
tags: show,radalert,that,blocks,the,entire,page
published: True
position: 8
---

# Show RadAlert that Blocks the Entire Page

Sometimes you want to show an alert (or a confirm box, or a prompt) to the user that needs to be resolved before she can continue working with the page. If the page that initiates this dialog is loaded inside a RadWindow, though, only the RadWindow will be blocked by the modal overlay, as the dialog runs in the context of its iframe only. To work around that you may want to call the function from the main page so that it is blocked as well.

>tip The general approach also applies to opening any RadWindow from any frame so that it can work with the entire viewport.

>note To use the predefined dialogs (radalert, radconfirm, radprompt) you need to have a RadWindowManager on the page that is going to call them.

If your content page may or may not be loaded in a RadWindow you will also need a RadWindowManager on it as well so that the dialog can be shown if the page is not loaded in a RadWindow.

## Generic JavaScript FrameBuster for Any RadWindow

RadWindows are generally opened via JavaScript, so the easiest way to make sure they have the entire viewport available, is to use a JavaScript frame buster. For example:

>caption Example1: Generic frame buster script

````JavaScript
if (window.top !== window) {
    //we are in a frame like an iframe, a RadWindow, a RadPane, a RadPageView, etc.
}
````

In such a case, you need to:

* Ensure the topmost frame is accessible via JavaScript. This means it has to come from your own site (domain) because of the same-origin policy browsers enforce.

* Use the topmost frame to open your dialog. For example:
	
	>caption Example 2: Open a RadWindow from the topmost page so it covers the entire browser viewport

	**JavaScript**

		var url = "some-page.aspx";
		if (window.top != window && window.top.radopen) {
			window.top.radopen(url);
		}
		else {
			radopen(url);
		}


	>tip You may want to store a reference to the current `window` context in a custom field in the newly created RadWindow so you can propagate its closing event from the main page, because it will no longer fire in the context of the current page.


## Show a Dialog out of a RadWindow

The JavaScript function that checks whether the context is a RadWindow or not is based on the [Determine If A Page Is Loaded Inside A RadWindow]({%slug window/how-to/determine-if-a-page-is-loaded-inside-a-radwindow%}) help article. You can modify it to remove the check if you are certain that this page will always be loaded inside a RadWindow. The function itself is as follows:

>caption Example 3: Open a RadAlert that covers the entire browser viewport if the current page is loaded in a RadWindow.

````JavaScript
function GetRadWindow()
{
	var oWindow = null;
	if (window.radWindow) oWindow = window.radWindow;
	else if (window.frameElement && window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	return oWindow;
}


function callRadAlertOnParent()
{
	var oWnd = GetRadWindow();
	if (oWnd != null)
	{
		setTimeout(function ()
		{
			GetRadWindow().BrowserWindow.radalert("my error message");
		}, 0);
	}
	else
	{
		radalert("my error message");
	}
}
````

You may also find useful the [Open a RadWindow from Within a RadWindow]({%slug window/how-to/opening-a-radwindow-from-within-a-radwindow%}) article.


## Predefined Dialogs (RadAlert, RadConfirm, RadPrompt)

There are several ways to call the RadAlert, which slightly differ in the produced result:

* If you are using Q1 2011 or a later version you can call the predefined server-side RadAlert method as shown in [this online demo](https://www.telerik.com/help/aspnet-ajax/window-dialogs-alert.html). The limitation of this approach is that the alert will be shown only in the context of the current frame (e.g., RadWindow).

* If you want the alert from the main page you would need to call a [JavaScript function that accesses the main window]({%slug window/how-to/calling-functions-in-windows%}). You can use **Examples 1-3** as base and combine them according to your scenario. There are also numerous ways to call the JavaScript function itself and the one you use depends on the current scenario:
	* You can output it from the server if the logic that requires the alert is only executed in the code-behind. How to do that is explained in [this blog post](https://blogs.telerik.com/aspnet-ajax/posts/09-05-05/executing-javascript-function-from-server-side-code.aspx).
	* You can use the [RadAjaxManager's ReponseScripts collection]({%slug ajaxmanager/how-to/executing-custom-javascript-code-after-ajax-update%}) to execute the JavaScript function after an AJAX request.
	* Of course, it can be initiated on the client by another JavaScript function or a button click, etc.





## See Also

 * [Calling Functions in Windows]({%slug window/how-to/calling-functions-in-windows%})

 * [Determine If A Page Is Loaded Inside A RadWindow]({%slug window/how-to/determine-if-a-page-is-loaded-inside-a-radwindow%})

 * [Open a RadWindow from Within a RadWindow]({%slug window/how-to/opening-a-radwindow-from-within-a-radwindow%})

 * [Opening Windows]({%slug window/getting-started/opening-windows%})
