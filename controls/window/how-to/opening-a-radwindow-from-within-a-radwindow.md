---
title: Open a RadWindow from Within a RadWindow
page_title: Open a RadWindow from Within a RadWindow | RadWindow for ASP.NET AJAX Documentation
description: How to open a RadWindow from Within a RadWindow
slug: window/how-to/opening-a-radwindow-from-within-a-radwindow
tags: opening, open,radwindow,from,within,inside,radwindow
published: True
position: 2
---

# How to Open a RadWindow from Within a RadWindow

When opening a **RadWindow** from code that is inside another **RadWindow** object, you can use any of the methods described in the [Opening Windows]({%slug window/getting-started/opening-windows%}) article. However, by default the parent of the new **RadWindow** object is the window that is executing the JavaScript. This limits the second window from moving outside the borders of the first **RadWindow** object, which is likely to be unduly constricting and unintuitive to the end user.

You can, instead, use the current **RadWindow's** parent window as the parent of the new window. This allows the new window the same freedom of movement as the current **RadWindow** object. There are two ways to accomplish this:

* Obtain a reference to the parent window, and call **radopen** from there. This requires a RadWindowManager on the parent page.

* Obtain a reference to the RadWindowManager, which is on the parent window, and use its **open** method.

* [Call a function on the parent page]({%slug window/how-to/calling-functions-in-windows%}) that will open the desired dialog.

For either method, your first step is to [get a reference to the current RadWindow]({%slug window/client-side-programming/overview%}). The most robust way to do this from its content page is to add the following function to the **RadWindow** that will open the second **RadWindow**:

````JavaScript	
function GetRadWindow() {
	var oWindow = null; if (window.radWindow)
		oWindow = window.radWindow; else if (window.frameElement.radWindow)
		oWindow = window.frameElement.radWindow; return oWindow;
}
````

Next, if you want to use the first approach, you can use the current **RadWindow** to get a reference to the parent page, and use it to call **radopen**:

````JavaScript
var oBrowserWnd = GetRadWindow().BrowserWindow;
setTimeout(function () {
	oBrowserWnd.radopen("some-page.aspx", "desired-RadWindow-Name");
}, 0);
````

If you choose the second approach, use the current **RadWindow** to get a reference to its **RadWindowManager** in the parent page, and use it to call **open**:

````JavaScript
var oManager = GetRadWindow().get_windowManager();
setTimeout(function () {
	oManager.open("some-page.aspx", "desired-RadWindow-Name");
}, 0);
````


>tip The timeout is needed to allow the browser to properly set the active **RadWindow**. It causes the opening logic to execute after all code in the content page has ran. Otherwise, the click will focus the first dialog once it bubbles to the body element, after opening the second one.


## See Also

 * [Creating Parent-child Relationships Between RadWindows](https://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)
