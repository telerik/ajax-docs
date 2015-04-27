---
title: RadWindowManager Object
page_title: RadWindowManager Object | RadWindow for ASP.NET AJAX Documentation
description: RadWindowManager Object
slug: window/client-side-programming/radwindowmanager-object
tags: radwindowmanager,object
published: True
position: 2
---

# RadWindowManager Object



This help article explains the client-side API of the **RadWindowManager**. It can be used to:

* provide of a reference to the currently active [window]({%slug window/client-side-programming/radwindow-object%})

* [open and create new windows]({%slug window/getting-started/opening-windows%})

* produce the [alert/confirm/prompt dialogs]({%slug window/alert,-confirm,-prompt-dialogs/overview%})




>caption RadWindowManager client-side methods

|  **Method**  |  **Description**  |
| ------ | ------ |
| **cascade** |Cascades the window objects.|
| **closeActiveWindow** |Close the active window.|
| **closeAll** |Closes all windows.|
| **get_windows** |Returns a reference to the array of RadWindow objects managed by the RadWindowManager.|
| **getActiveWindow** |Returns a reference to the current active window.|
| **getWindowById** |Returns a reference to a RadWindow. The Id passed as a parameter must be the RadWindow's Client-side ID property. It is subject to change by the framework in case an INaming container is a parent of the RadWindowManager.|
| **getWindowByName** |Returns a reference to a RadWindow. The Name passed as a parameter is the RadWindow's Server-side ID property. This allows you to get a reference to a specific RadWindow with the ID from your markup without the need to use ClientIDs.|
| **maximizeAll** |Maximizes all windows.|
| **minimizeActiveWindow** |Minimizes the currently active window.|
| **minimizeAll** |Minimizes all windows.|
| **open** |Opens a new or existing window. Can be used to change the URL, size and position of an existing window as well. Returns a reference to the RadWindow.See the[Opening Windows help article]({%slug window/getting-started/opening-windows%})for details and examples.|
| **radalert** |Displays a[RadAlert]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%})dialog box. Requires a string for the message to be shown. Can take two integers for the width and height and a string for the title. Returns the RadWindow instance of the dialog window.|
| **radconfirm** |Displays a[RadConfirm]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%})dialog box. Requires a string for the message to be shown. Can take a function for the callback function, two integers for the width and height, a null value should be passed for the callerObj and can also take a string for the title. Returns the RadWindow instance of the dialog window.|
| **radprompt** |Displays a[RadConfirm]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%})dialog box. Requires a string for the message to be shown. Can take a function for the callback function, two integers for the width and height, a null value should be passed for the callerObj, can also take a string for the title and a string as an initial value. Returns the RadWindow instance of the dialog window.|
| **restoreActiveWindow** |Restores the active window if it was minimized or maximized.|
| **restoreAll** |Restores all windows.|
| **showAll** |Shows all windows.|
| **tile** |Tiles the window objects.|

## Examples

````JavaScript
	        function UseWindowManager()
	        {
	            //Getting rad window manager
	            var oManager = GetRadWindowManager();
	            //Get an existing window DialogWindow using getWindowByName
	            var oWnd = oManager.getWindowByName("DialogWindow");
	            oWnd.setUrl("http://www.google.com");
	            //Call GetActiveWindow to get the active window
	            var oActive = oManager.getActiveWindow();
	            oActive.center();
	            //Open a new window using using default settings
	            var oNew = oManager.open("http://www.google.com","NewWindow");
	            // cause all windows to cascade
	            oManager.cascade();
	            // list all windows in a textarea with id txtShowWindows
	            var txtShowWindows = document.getElementById("txtShowWindows");
	            var windows = oManager.get_windows();
	            for (var i = 0; i < windows.length; i++)
	            {
	                txtShowWindows.value += windows[i].get_name() + ": " + windows[i].get_navigateUrl() + "\n";
	            }
	        }
````



# See Also

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [Opening Windows]({%slug window/getting-started/opening-windows%})

 * [Overview]({%slug window/alert,-confirm,-prompt-dialogs/overview%})
