---
title: Opening a RadWindow from Within a RadWindow
page_title: Opening a RadWindow from Within a RadWindow | UI for ASP.NET AJAX Documentation
description: Opening a RadWindow from Within a RadWindow
slug: window/how-to/opening-a-radwindow-from-within-a-radwindow
tags: opening,a,radwindow,from,within,a,radwindow
published: True
position: 2
---

# Opening a RadWindow from Within a RadWindow



## 

When opening a __RadWindow__ from code that is inside another __RadWindow__ object, you can use any of the methods described in [Opening Windows]({%slug window/getting-started/opening-windows%}). However, by default the parent of the new __RadWindow__ object is the window that is executing the JavaScript. This limits the second window from moving outside the borders of the first __RadWindow__ object, which is likely to be unduly constricting and unintuitive to the end user.

You can, instead, use the current __RadWindow's__ parent window as the parent of the new window. This allows the new window the same freedom of movement as the current __RadWindow__ object. There are two ways to accomplish this:

* Obtain a reference to the parent window, and call __radopen__ from there.

* Obtain a reference to the RadWindowManager, which is on the parent window, and use its __open__ method.

For either method, your first step is to get a reference to the current RadWindow. The most robust way to do this is to add the following function to the __RadWindow__ that will open the second __RadWindow__:

````JavaScript
	
	        function GetRadWindow()
	        {
	            var oWindow = null; if (window.radWindow)
	                oWindow = window.radWindow; else if (window.frameElement.radWindow)
	                oWindow = window.frameElement.radWindow; return oWindow;
	        }
````



Next, if you want to use the first approach, you can use the current __RadWindow__ to get a reference to the parent page, and use it to call __radopen__:

````JavaScript
	        var oBrowserWnd = GetRadWindow().BrowserWindow;
	        setTimeout(function ()
	        {
	            oBrowserWnd.radopen("http://www.google.com", "NewWindow");
	        }, 0);
````



If you choose the second approach, use the current __RadWindow__ to get a reference to the __RadWindowManager__ in the parent page, and use it to call __open__:

````JavaScript
	        var oManager = GetRadWindow().get_windowManager();
	        setTimeout(function ()
	        {
	            oManager.open("http://www.google.com", "NewWindow");
	        }, 0);
````





>tip The timeout is needed to allow the browser to properly set the active __RadWindow__ . This happens because the __RadWindow's__ entire UI is created at this point via JavaScript and the browser needs to first accomplish this operation.
>


# See Also

 * [Creating Parent-child Relationships Between RadWindows](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)
