---
title: Call Functions in Windows
page_title: How to Call Functions in Windows | RadWindow for ASP.NET AJAX Documentation
description: How to Call Functions in Windows
slug: window/how-to/calling-functions-in-windows
tags: calling,call,functions,in,windows
published: True
position: 4
---

# Calling Functions in Windows

To pass data or execute logic between the content page loaded in a RadWindow and its parent page, you usually need to call functions in the [different contexts]({%slug window/client-side-programming/overview%}) because RadWindow loads its content page in an iframe. This article applies only to that case, it does not apply when the `ContentTemplate` of the control is used, because then all the HTML is in the same frame.

## Call a Function Defined in the Content Page from the Parent Page

By obtaining a reference to a **RadWindow** component, you can call any function that is defined in that window's content page. Just use the `contentWindow` property to reference the Content Window of the iframe (**Example 1**).

The example below shows one way to get a reference to the RadWindow with server ID RadWindow1. This approach may vary according to the scenario.

You can also see how you can pass information along to the other function. Passing an argument is not necessary, but it is an easy way to transfer information between different pages. Another approach to pass data to and from a RadWindow is shown in the [Use RadWindows as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%}) help article.

**Example 1**: Calling a function inside a RadWindow from its parent page

````JavaScript	
// CallFn shows how to call a predefined function
// in an opened RadWindow. A javascript function named
// CalledFn() must exist in RadWindow1's content
function CallFn() {
	var oWnd = GetRadWindowManager().getWindowByName("RadWindow1");
	var myData = "some information";
	oWnd.get_contentFrame().contentWindow.CalledFn(myData);
}

// in the page where CalledFn resides you can consume this information, e.g.:
function CalledFn(data) {
	alert(data);
}	          
````

## Call a Function in the Parent Page from the Content Page

Getting a reference to the RadWindow lets you call functions in a **RadWindow's** parent window or in a sibling window:

**Example 2**: Calling a function on the parent page from inside the RadWindow

````JavaScript	    
// Note: the following 2 examples require
// the GetRadWindow() function to exist on the page.
// It is needed to get a reference to the RadWindow wrapper
function GetRadWindow() {
	var oWindow = null;
	if (window.radWindow) oWindow = window.radWindow;
	else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
	return oWindow;
}

// CallFnOnParent shows how to call a function
// in the parent page. A javascript function named CalledFn
// must exist in the parent page.
function CallFnOnParent() {
	GetRadWindow().BrowserWindow.CalledFn();
	// Tip: you can pass an argument to provide data to the called function
}
````

## Call a Function from a RadWindow in Another RadWindow

**Example 3**: Call a function in a RadWindow from another RadWindow

````
// CallFn illustrates how to call a function in one RadWindow
// from another.
function CallFn() {
	// Get a reference to the RadWindow (see Example 2 for the GetRadWindow function)
	var oWnd = GetRadWindow();
	// get a reference to the second RadWindow       
	var dialogB = oWnd.get_windowManager().getWindowByName("RadWindow1");
	// by using get_contentFrame, call the predefined function
	dialogB.get_contentFrame().contentWindow.CalledFn();
}             
````

The approach from the first code snippet can be used in a similar way to pass data to the functions you call. Getting a reference to the sibling RadWindow may vary with the scenario (e.g. $find() can be used, a reference can be previously stored in a global variable, etc.).

## See Also

 * [Creating Parent-child Relationships Between RadWindows](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)
