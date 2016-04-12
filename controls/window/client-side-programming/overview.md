---
title: Overview
page_title: Client-side Programming Overview | RadWindow for ASP.NET AJAX Documentation
description: Overview
slug: window/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

This article describes how to get a reference to the [RadWindow]({%slug window/client-side-programming/radwindow-object%})	in all possible scenarios and offers useful links for working with the control.

The article contains the following sections:

* [The different contexts](#the-different-contexts)—this section explains the basic contexts that	RadWindow creates and is fundamental for understanding the control.
* [How to get a reference to the RadWindow from the main page](#getting-a-reference-to-a-radwindow-from-the-main-page)—explains how to reference the dialog	in order to open or manipulate it, for example.
* [How to get a reference to the RadWindow from its content page](#getting-a-reference-to-a-radwindow-from-its-content-page)—explains how to obtain a reference to	the dialog from inside the content page in order to close it or pass data to the main page.
* [How to get a reference to the RadWindow from inside its ContentTemplate](#getting-a-reference-to-a-radwindow-from-controls-in-its-contenttemplate)—useful when you need	to reference the control from a user control loaded in it.
* [Useful likns](#useful-links)—topic that can help get you started with the most common scenarios once you are familiar with the basics.

## The Different Contexts

**RadWindow** is usually used to load an entire page which means this page is placed inside an **iframe**. The iframe has its own context (i.e., *window* and *document* objects) that is independent of the main page context (where the RadWindow is declared and opened).

For the purpose of this article, the page where the RadWindow markup resides will be called **Main Page** and the page loaded in the RadWindow will be called **Content Page**.

Browsers create a strong separation between an iframe and the main frame, and you cannot drag, move or display objects and HTML elements out of the Content Page towards the Main Page or vice versa.

It is important to distinguish between these contexts, because the ways to get a reference to the RadWindow object in either of them are different(and are explained below).

It is also important to avoid adding event handlers from one context into the other (e.g., an OnClientClose handler should not be added inside the Content Page). If you need to execute logic in the content page, you can [call a function]({%slug window/how-to/calling-functions-in-windows%}) in it from a handler defined in the main page.

## Getting a Reference to a RadWindow from the Main Page

The first thing you need to do with a popup is to show it. The [Opening Windows]({%slug window/getting-started/opening-windows%}) article explains the different ways, and one of the easiest is to get a direct reference to the control and show it. Here are a few examples:

>caption Example 1: Get a reference to a RadWindow declared in the markup or in the Windows collection of a RadWindowManager.

````ASP.NET
<asp:Button ID="Button1" Text="show the dialog" OnClientClick="showDialog(); return false;" runat="server" />
<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1"></telerik:RadWindow>
<script type="text/javascript">
	function showDialog() {
		var wnd = $find("<%= RadWindow1.ClientID%>");
		wnd.show();
	}
</script>
````



>caption Example 2: Get a reference to a RadWindow in the Windows collection of a RadWindowManager through the RadWindowManager API.

````ASP.NET
<telerik:RadWindowManager RenderMode="Lightweight" runat="server" ID="RadWindowManager1">
	<Windows>
		<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1"></telerik:RadWindow>
	</Windows>
</telerik:RadWindowManager>
<asp:Button ID="Button1" Text="open dialog" OnClientClick="openDialog(); return false;" runat="server" />
<script type="text/javascript">
	function openDialog() {
		var wndManager = $find("<%=RadWindowManager1.ClientID%>");
		var wnd = wndManager.open("the-desired-page.aspx", "RadWindow1");
	}
</script>
````

## Getting a Reference to a RadWindow from its Content Page

In many cases you need to get a reference to the **RadWindow** from the page that you loaded in it(e.g., via its *NavigateUrl* property, or through the arguments *radopen()* receives) in order to close the dialog, for example.

To get a reference to the **RadWindow client-side object from inside its content page**, you need to add the followingJavaScript function to the content page itself. Our code generates the object it accesses if possible (i.e., both pages are from the same domain).

>caption Example 3: Getting a reference to a RadWindow from inside its content page.

````ASP.NET
<asp:Button ID="Button1" Text="close dialog" OnClientClick="closeDialog(); return false;" runat="server" />
<script type="text/javascript">
	function GetRadWindow() {
		var oWindow = null;
		if (window.radWindow) oWindow = window.radWindow;
		else if (window.frameElement && window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
		return oWindow;
	}

	function closeDialog() {
		var wnd = GetRadWindow();
		wnd.close();
	}
</script>
````

>tip If you are using **DestroyOnClose** , add a small **timeout** around close().

>tip If you need to close the dialog from its server code, you can [execute the JavaScript function from the server]({%slug window/troubleshooting/executing-javascript-code-from-server%}).

## Getting a Reference to a RadWindow from Controls in its ContentTemplate

The [ContentTemplate]({%slug window/getting-started/using-radwindow-as-controls-container%}) of the **RadWindow** can be considered as a simple *div* element. It remains in the same context as the control declaration and to get a reference to it, you need to use the approach from the [Getting a Reference to a RadWindow from the Main Page](#getting-a-reference-to-a-radwindow-from-the-main-page)

When user controls are loaded in the *ContentTemplate*, it is often simplest to define a JavaScript function with a meaningful name that will return the needed reference and place it right next to the RadWindow declaration. When NamingContainers are used,the server code blocks needed to get the proper ClientID of the controls are scoped to the concrete container (e.g., the user control), so defining a function that will return the RadWindow object in the user control itself will require traversing the Controls tree of the page,i.e., the user control would need to know in which page it is loaded. If a function that will return the needed reference exists in the global scope, you only need to know its name and call it from anywhere on the page or user controls.

>tip If you need to use AJAX in the ContentTemplate of a RadWindow, examine the [How to Use RadWindow with AJAX]({%slug window/how-to/how-to-use-radwindow-with-ajax%}) help article.

>caption Example 4: Getting a reference to a RadWindow from a user control loaded in its ContentTemplate

````ASP.NET
<asp:Button ID="Button1" Text="show dialog" OnClientClick="showDialog(); return false;" runat="server" />
<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
	<ContentTemplate>
		<uc:SomeControl runat="server" id="SomeControl1"></uc:SomeControl>
	</ContentTemplate>
</telerik:RadWindow>
<script type="text/javascript">
	function getRadWindow1() {
		return $find("<%=RadWindow1.ClientID%>");
	}

	function showDialog() {
		getRadWindow1().show();
	}
</script>
````



````ASP.NET
<asp:Button ID="Button1" Text="close dialog" OnClientClick="closeDialog(); return false;" runat="server" />
<script type="text/javascript">
	function closeDialog() {
		getRadWindow1().close();
	}
</script>
````


## Useful Links

Once you know how to get a reference to the control, you can utilize its full potential, for example:

* [Configure it via its client-side API]({%slug window/client-side-programming/radwindow-object%})
* [Explore different ways to open a dialog]({%slug window/getting-started/opening-windows%})
* [Open or close it from the server-side code]({%slug window/troubleshooting/opening-from-the-server%})
* [Get data from the dialog page]({%slug window/client-side-programming/events/onclientclose%})
* [Pass data to the dialog page client-side]({%slug window/how-to/using-radwindow-as-a-dialog%})
* [Pass data to the dialog page code-behind]({%slug window/how-to/use-querystring-to-provide-arguments-to-radwindow%})
* [Call functions between the main page and the content page to pass data and invoke some logic]({%slug window/how-to/calling-functions-in-windows%})
* [Open one RadWindow from another RadWindow]({%slug window/how-to/opening-a-radwindow-from-within-a-radwindow%})
* [Create parent-child relationships between several RadWindows](http://www.telerik.com/support/code-library/creating-parent-child-relationships-between-radwindows-and-passing-data-between-them)

You may also find useful the [Common Issues]({%slug window/troubleshooting/common-issues%}) help article.

A lot of the features of the control are showcased in its [online demos](http://demos.telerik.com/aspnet-ajax/window/examples/overview/defaultcs.aspx) where you can see it in action.

## See Also

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})

 * [Overview]({%slug window/alert,-confirm,-prompt-dialogs/overview%})

 * [Opening Windows]({%slug window/getting-started/opening-windows%})

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [Common Issues]({%slug window/troubleshooting/common-issues%})

 * [RadWindow Live Demos](http://demos.telerik.com/aspnet-ajax/window/examples/overview/defaultcs.aspx)
