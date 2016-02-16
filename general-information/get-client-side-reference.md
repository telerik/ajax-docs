---
title: Get Client-side Reference to a Control Object
page_title: Get Client-side Reference to a Control Object | UI for ASP.NET AJAX Documentation
description: Shows several ways to get a client-side reference to an instance of a control.
slug: general-information/get-client-side-reference
tags: client, side, client-side, instance, get, reference, javascript, js, events, ajax, find
published: True
position: 3
---

# Get Client-side Reference to a Control Object

This article shows how to get a client-side reference to a **Telerik UI for ASP.NET AJAX** control and use its clients-side API. 

You can quickly navigate through the sections from here:
* [Using the MS AJAX Approach](#using-the-ms-ajax-approach)
* [Using Native Methods](#using-native-methods)
* [Using jQuery Selectors](#using-jquery-selectors)
* [Important MS AJAX Events](#important-ms-ajax-events)

The **UI for ASP.NET AJAX** controls are created by following the [IScriptControl interface](https://msdn.microsoft.com/en-us/library/system.web.ui.iscriptcontrol(v=vs.110).aspx) and have the lifecycle of MS AJAX-based controls. Thus, they are initialized during the [Sys.Application.init](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx) event. And the instance of the control can be accessed during the [Sys.Application.load](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx) event. You can see how in [Important MS AJAX Events](#important-ms-ajax-events) section.

## Using the MS AJAX Approach

MS AJAX exposes the [Sys.Application.findComponent](https://msdn.microsoft.com/library/bb397522(v=vs.100).aspx) method that enables you to get the client-side reference of an MS AJAX-based control in the client via JavaScript. You can also use its shortcut—`$find()`—as shown in **Example 1**.

>caption Example 1: Using $find method to get the control's client-side refernce.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>

<script>
    function showRadWindow(sender, args) {
        var radWindow = $find("<%= RadWindow1.ClientID %>");
        radWindow.show();
    }
</script>
````

## Using Plain JavaScript Methods

Typically, when an **UI for ASP.NET AJAX** control renders on the client, its client-side reference is assigned to the wrapper DOM element and exposed through the `control` property.

That said, you can use the MS AJAX [$get()](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx) or the native [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) methods and get the instance via the `control` property. See **Example 2** and **Example 3**.

>tip We recommend you use server-side scripting tags and get the dyncamically created client ID of the control (`<%= [ControlID].ClientID %>`). If, however, you do not have access to the server-side instance of the control see the options in [Using jQuery Selectors](#using-jquery-selectors) section.

>caption Example 2: Using getElementById method to get the control's client-side reference.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>

<script>
    function showRadWindow(sender, args) {
        var radWindow = document.getElementById("<%= RadWindow1.ClientID %>").control;
        radWindow.show();
    }
</script>
````

>caption Example 3: Using $get method to get the control's client-side reference.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>

<script>
    function showRadWindow(sender, args) {
        var radWindow = $get("<%= RadWindow1.ClientID %>").control;
        radWindow.show();
    }
</script>
````

## Using jQuery Selectors

Common scenario is when controls are added via User Controls, Content Templates and other similar techniques, or you need to access the reference in a script file (where server-side scripting is not allowed). In such scenarios, IDs are generated dynamically and getting the client-side reference from Master or main pages cannot be done by accessing the `ClientID` property of the control's server-side instance. 

With the help of the [included jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#using-the-jquery-brought-by-telerik), you can use [attributeEndsWith selector](https://api.jquery.com/attribute-ends-with-selector/) to get the DOM element and access the client-side instance only by using the server-side ID of the control.

>important If the same server-side ID is used with multiple controls, jQuery will return you all elements that ends with the same ending value. Such scenario should be handled manually as per to the exact requirments.

>caption Example 4: Using attributeEndsWith selector to get the client-side instance of a cotnrol.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>

<script>
    function showRadWindow(sender, args) {
        var radWindow = $telerik.$("[id$='RadWindow1']").get(0).control;
        radWindow.show();
    }
</script>
````

## Important MS AJAX Events

The client-side instances of the controls are initialized after their scripts are loaded (after [Sys.Application.init](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx)). You can reference the client-side instance of a contorl during [Sys.Application.load](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx) event.

>caption Example 5: Using Sys.Application.load to get the instance.

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>

<script>
    Sys.Application.add_load(showRadWindow)

    function showRadWindow() {
        var radWindow = $find("<%= RadWindow1.ClientID %>");
        radWindow.show();
    }
</script>
````

>caption Example 6: Using server-side techiques to interact with control's client-side instances.

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1">
    <ContentTemplate>
        <p>Some content.</p>
    </ContentTemplate>
</telerik:RadWindow>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    string script = "function f(){$find(\"" + RadWindow1.ClientID + "\").show(); Sys.Application.remove_load(f);}Sys.Application.add_load(f);";
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, true);
}
````
````VB
Sub Page_Load(ByVal Sender As System.Object, ByVal e As System.EventArgs)
    Dim script As String = "function f(){$find(""" + RadWindow1.ClientID + """).show(); Sys.Application.remove_load(f);}Sys.Application.add_load(f);"
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, True)
End Sub
````

>note Using native DOM events, like the [window.load event](https://developer.mozilla.org/en-US/docs/Web/Events/load) might not give you the expected results. The client-side code is loaded dynamically and this event cannot guarantee you that the instances are initialized.


## See Also

* MSDN - [IScriptControl interface](https://msdn.microsoft.com/en-us/library/system.web.ui.iscriptcontrol(v=vs.110).aspx)
 
* MSDN - [Sys.Application.init](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx)
 
* MSDN - [Sys.Application.load](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx)
 
* MSDN - [Sys.Application.findComponent](https://msdn.microsoft.com/library/bb397522(v=vs.100).aspx)
 
* MSDN - [$get()](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx)
 
* MDN - [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
 
* jQUery - [attributeEndsWith selector](https://api.jquery.com/attribute-ends-with-selector/)

* [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%})

