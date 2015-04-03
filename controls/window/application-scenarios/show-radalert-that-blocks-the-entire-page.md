---
title: Show RadAlert that Blocks the Entire Page
page_title: Show RadAlert that Blocks the Entire Page | UI for ASP.NET AJAX Documentation
description: Show RadAlert that Blocks the Entire Page
slug: window/application-scenarios/show-radalert-that-blocks-the-entire-page
tags: show,radalert,that,blocks,the,entire,page
published: True
position: 8
---

# Show RadAlert that Blocks the Entire Page



## 

Sometimes you want to show an alert (or a confirm box, or a prompt) to the user that needs to be resolved before she can continue working with the page. If the page that initiates this dialog is loaded inside a RadWindow, though, only the RadWindow will be blocked by the modal overlay, as the dialog runs in the context of its iframe only. To work around that you may want to call the function from the main page so that it is blocked as well.

>important To use the predefined dialogs (radalert, radconfirm, radprompt) you need to have a RadWindowManager on the page that is going to call them.
>


If your content page may or may not be loaded in a RadWindow you will also need a RadWindowManager on it as well so that the dialog can be shown if the page is not loaded in a RadWindow.

There are several ways to call the RadAlert, which slightly differ in the produced result:

* If you are using Q1 2011 or a later version you can call the predefined server-side RadAlert method as shown in [this online demo](http://www.telerik.com/help/aspnet-ajax/window-dialogs-alert.html). The limitation of this approach is that the alert will be shown only in the context of the RadWindow (if the page is loaded in one).

* If you want the alert from the main page you would need to call a [JavaScript function that accesses the main window]({%slug window/application-scenarios/calling-functions-in-windows%}). There are also numerous ways to do that and the one you use depends on the current scenario:

* You can output it from the server if the logic that requires the alert is only executed in the code-behind. How to do that is explained in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/09-05-05/executing-javascript-function-from-server-side-code.aspx).

* You can use the [RadAjaxManager's ReponseScripts collection](731C6710-AD5C-4057-AB00-6D523559A747) to execute the JavaScript function after an AJAX request.

* Of course, it can be initiated on the client by another JavaScript function or a button click, etc.

The JavaScript function that checks whether the context is a RadWindow or not is based on the [Determine If A Page Is Loaded Inside A RadWindow]({%slug window/application-scenarios/determine-if-a-page-is-loaded-inside-a-radwindow%}) help article. You can modify it to remove the check if you are certain that this page will alway be loaded inside a RadWindow. The function itself is as follows:

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



# See Also

 * [Calling Functions in Windows]({%slug window/application-scenarios/calling-functions-in-windows%})

 * [Determine If A Page Is Loaded Inside A RadWindow]({%slug window/application-scenarios/determine-if-a-page-is-loaded-inside-a-radwindow%})
