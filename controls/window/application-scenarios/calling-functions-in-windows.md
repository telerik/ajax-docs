---
title: Calling Functions in Windows
page_title: Calling Functions in Windows | UI for ASP.NET AJAX Documentation
description: Calling Functions in Windows
slug: window/application-scenarios/calling-functions-in-windows
tags: calling,functions,in,windows
published: True
position: 4
---

# Calling Functions in Windows



## 

By obtaining a reference to a __RadWindow__ component, you can call any function that is defined in that windows content window. Just use the contentWindow property to reference the Content Window of the page loaded inside the __RadWindow__.

The example below shows one way to get a reference to the RadWindow with server ID RadWindow1. This approach may vary according to the scenario.

You can also see how you can pass information along to the other function. Passing an argument is not necessary, but it is an easy way to transfer information between different pages. Another approach to pass data to and from a RadWindow is shown in [this help article]({%slug window/application-scenarios/using-radwindow-as-a-dialog%}).

````JavaScript
	
	    //CallFn shows how to call a predefined function
	    // in an opened RadWindow. A javascript function named
	    // CalledFn() must exist in RadWindow1's content
	    function CallFn()
	    {
	        var oWnd = GetRadWindowManager().getWindowByName("RadWindow1");
	        var myData = "some information";
	        oWnd.get_contentFrame().contentWindow.CalledFn(myData);
	    }
	
	    //in the page where CalledFn resides you can consume this information, e.g.:
	    function CalledFn(data)
	    {
	        alert(data);
	    }
	          
````





Using this technique lets you call functions in a __RadWindow's__ parent window or in a sibling window:

````JavaScript
	    
	    //Note: the following 2 examples require
	    // the GetRadWindow() function to exist on the page.
	    // It is needed to get a reference to the RadWindow wrapper
	    function GetRadWindow()
	    {
	        var oWindow = null;
	        if (window.radWindow) oWindow = window.radWindow;
	        else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	        return oWindow;
	    }
	
	    // CallFnOnParent shows how to call a function
	    // in the parent page. A javascript function named CalledFn
	    // must exist in the parent page.
	    function CallFnOnParent()
	    {
	        GetRadWindow().BrowserWindow.CalledFn();
	    }
	
	    // CallFn illustrates how to call a function in one RadWindow
	    // from another.
	    function CallFn()
	    {
	        //Get a reference to the parent page (Default.aspx)       
	        var oWnd = GetRadWindow();
	        //get a reference to the second RadWindow       
	        var dialogB = oWnd.get_windowManager().getWindowByName("RadWindow1");
	        // by using get_contentFrame, call the predefined function
	        dialogB.get_contentFrame().contentWindow.CalledFn();
	    }             
````



The approach from the first code snippet can be used in a similar way to pass data to the functions you call. Getting a reference to the sibling RadWindow may vary with the scenario (e.g. $find() can be used, a reference can be previously stored in a global variable, etc.).

# See Also

 * [Creating Parent-child Relationships Between RadWindows](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)
