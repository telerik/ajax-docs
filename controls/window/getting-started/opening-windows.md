---
title: Opening Windows
page_title: Opening Windows | RadWindow for ASP.NET AJAX Documentation
description: Opening Windows
slug: window/getting-started/opening-windows
tags: opening,windows
published: True
position: 2
---

# Opening Windows



Several functions let you open a **RadWindow** object from your client-side JavaScript:

* The **show** method lets you open a single window that has been declared on your page when there is no **RadWindowManager** object. You can use ASP.NET AJAX's **$find** methodto obtain a reference to the window.

* The **RadWindowManager.open** method opens a window if you have a reference to a **RadWindowManager** object. You can easily obtain this reference by calling **GetRadWindowManager**.

* The **radopen** function is essentially the same as **GetRadWindowManager().open()**. It requires the **RadWindowManager** to exist on the page, even though you do not explicitly reference it in your code.

* The **radalert**, **radconfirm**, and**radprompt** functions open the built-in [alert, confirm, and prompt dialogs]({%slug window/alert,-confirm,-prompt-dialogs/overview%}). As with **radopen**, these functions require a **RadWindowManager** to be present on the page.

## Using show()

The following code illustrates how to use the **window.show** method to open a window when there is no **RadWindowManager** object:

````JavaScript
	
	        var oWnd = $find("<%=RadWindow1.ClientID%>");
	        oWnd.setUrl('MyPage.aspx');
	        oWnd.show();
	
````



## Using radopen and GetRadWindowManager().open

Both the **radopen()** function and the **GetRadWindowManager().open()** method take two required parameters and can take four optional parameters:

* **Url** - This supplies the URL for the content window. If this is given an argument of null, the **NavigateUrl** property set for the window on the server is used.

* **Name** - This is the ID of a particular (existing) **RadWindow** object to show. If this is given an argument of null, the function creates a new window with a random ID. If a window with the provided ID does not exist, a new one is created using this ID.

* *Optional: content element**—a DOM element that will be placed in the [ContentTemplate]({%slug window/getting-started/using-radwindow-as-controls-container%}) of the control.If one is provided and an URL is passed, the URL will be ignored.The *content element* argument is only available in the `RadWindowManagerInstance.open()` method, but *not*in the `window.radopen()` method.

* *Optional: Width, Height, Left, Top* - Since Q1 2013, these four additional parameters can be usedto specify the dimensions and position of a popup even while opening it. If these parameters are not passed, the values from the **RadWindow's** declaration will be usedand in case they aren't specified or a dynamic instance is created, the dimensions will fall back to the default 300x300 pixels at the center of the screen.

Both functions return a reference to the **RadWindow** object, so it can be additionally configured using the various [	RadWindow methods]({%slug window/client-side-programming/radwindow-object%}). The following code illustrates the possibilities for using **radopen**. (Note, you could replace the call to **radopen()** with a call to **GetRadWindowManager().open()**).

````JavaScript
	
	        //Open a new window, with no url set
	        var oWnd = radopen(null, null);
	
	        //Open a new window, set its url to Bing
	        var oWnd = radopen("http://www.bing.com", null);
	
	        //Open an existing window, without setting its URL
	        // The existing window's NavigateUrl property will be used
	        var oWnd = radopen(null, "WindowNameHere");
	
	        //Open Bing in existing window
	        var oWnd = radopen("http://www.bing.com", "WindowNameHere");
	
	        //Open a new window, set its size (800px wide, 600px tall) and position (20px offset from left and top)
	        var oWnd = radopen("http://www.bing.com", null, 800, 600, 20, 20);
	
	        //Open a new window, set its size (600px by 400px) and position (10px offset) and put a DOM element with id "someElement" in its ContentTemplate
	        var oWnd = GetRadWindowManager().open(null, null, $get("someElement"), 600, 400, 10, 10);
````



## Example

The following markup shows how to use **radopen()**, **GetRadWindowManager().open()**, and the **RadWindow** object's **show()** method to open a window:

````JavaScript
	    //The RadWindowManager object has two child windows
	    <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
	        <Windows>
	            <telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="http://www.google.com">
	            </telerik:RadWindow>
	            <telerik:RadWindow ID="RadWindow2" runat="server" NavigateUrl="http://www.telerik.com">
	            </telerik:RadWindow>
	        </Windows>
	    </telerik:RadWindowManager>
	    //The client-side code for opening windows
	    <script type="text/javascript">
	        /* Using radopen */
	        function ShowExisting1()
	        {
	            //Show an existing window
	            window.radopen(null, "RadWindow1");
	            //First argument is the URL. Since no url is provided, the NavigateUrl property set on the server will be used.
	        }
	        /* Using RadWindowManager.open */
	        function ShowExisting2()
	        {
	            //Call existing global function to obtain a reference to the window manager
	            var oManager = GetRadWindowManager();
	            //Show a particular existing window
	            oManager.open(null, "RadWindow2");
	        }
	        //Using RadWindow.show
	        function ShowExisting3()
	        {
	            var oWnd = $find("RadWindow1");
	            oWnd.show();
	        }
	        /* Show new window */
	        function ShowNewWindow()
	        {
	            //Show new window
	            //not providing a name as a second parameter
	            //creates a new window
	            var oWindow = window.radopen("http://www.bing.com", null);
	            //Using the reference to the window its clientside methods can be called
	            oWindow.setSize(400, 400);
	
	            //both of the above lines can be replaced with this:
	            var oWindow2 = window.radopen("http://www.bing.com", null, 400, 400);
	
	            //or with this
	            var oWindow3 = $find("<%=RadWindowManager1.ClientID %>").open("http://www.bing.com", null, null, 400, 400);
				//where, the window.GetRadWindowManager() function can also be used to get a reference to the first manager on the page
	        }
	    </script>
	    call the various client-side functions
	    <button onclick="ShowExisting1();return false;" class="Button" style="width: 190px">
	        Show window (using radopen)</button>
	    <br>
	    <button onclick="ShowExisting2();return false;" class="Button" style="width: 190px">
	        Show window (using open)</button>
	    <br>
	    <button onclick="ShowExisting3();return false;" class="Button" style="width: 190px">
	        Show window (using show)</button>
	    <br>
	    <button onclick="ShowNewWindow();return false;" class="Button" style="width: 190px">
	        Show new window</button>
````



# See Also

 * [Opening a RadWindow from Within a RadWindow]({%slug window/how-to/opening-a-radwindow-from-within-a-radwindow%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})
