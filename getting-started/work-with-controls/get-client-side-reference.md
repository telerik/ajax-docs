---
title: Getting Client-Side References
page_title: Getting Client-Side References to Control Objects
description: "Get a client-side reference to an instance of a Telerik UI for ASP.NET AJAX control."
slug: general-information/get-client-side-reference
tags: client, side, client-side, instance, get, reference, javascript, js, events, ajax, find
previous_url: general-information/get-client-side-reference
published: True
position: 3
---

# Getting Client-Side References to Control Objects

This article provides information on the available approaches for getting a client-side reference to a Telerik® UI for ASP.NET AJAX control and use its client-side API.

The Telerik UI for ASP.NET AJAX controls are created by implementing the [`IScriptControl` interface](https://msdn.microsoft.com/en-us/library/system.web.ui.iscriptcontrol(v=vs.110).aspx) and have the lifecycle of MS AJAX-based controls. Thus, they are initialized during the [`Sys.Application.init`](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx) event and the instance of the control can be accessed during the [`Sys.Application.load`](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx) event at the earliest. For more information, refer to the section on [important MS AJAX events](#important-ms-ajax-events).

This article contains the following sections:

* [Using the MS AJAX Approach](#using-the-ms-ajax-approach)
* [Using Plain JavaScript Methods](#using-plain-javascript-methods)
* [Using jQuery Selectors](#using-jquery-selectors)
* [Using Telerik Methods](#using-telerik-methods)
* [Important MS AJAX Events](#important-ms-ajax-events)

## Using the MS AJAX Approach

MS AJAX exposes the [`Sys.Application.findComponent`](https://msdn.microsoft.com/library/bb397522(v=vs.100).aspx) method that enables you to get the client-side reference of an MS AJAX-based control in the client through JavaScript. You can also use its shortcut (`$find()`), as shown in the following example.

>caption Using the `$find` method to get the client-side reference of the control.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

Typically, when an MS AJAX-based control, such as the Telerik UI for ASP.NET AJAX ones, renders on the client, its client-side reference is assigned to the wrapper DOM element and exposed through the `control` property.

This means you can use the MS AJAX [`$get()`](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx) or the native [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) methods and get the instance through the `control` property.

It is recommended that you use server-side scripting tags and get the dynamically created client ID of the control (`<%= [ControlID].ClientID %>`). If, however, you do not have access to the server-side instance of the control, refer to the options in the [Using jQuery Selectors](#using-jquery-selectors) section.

>caption Using the `getElementById` method to get the client-side reference of the control.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

>caption Using the `$get` method to get the client-side reference of the control.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

Often controls are added through user controls, content templates and other similar techniques, or you need to access the reference in a script file (where server-side scripting is not possible). In such scenarios, IDs are generated dynamically and getting the client-side reference from the master or parent pages cannot be done by accessing the `ClientID` property of the server-side control instance.

With the help of the [included jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#using-the-jquery-brought-by-telerik), you can use the [`attributeEndsWith` selector](https://api.jquery.com/attribute-ends-with-selector/) to get the DOM element and access the client-side instance even by using the server-side ID only.

>important If the same server-side ID is used with multiple controls, jQuery will return all elements that match the same ending value. You need to handle similar scenarios according to the exact requirements.

The following example demonstrates how to use `attributeEndsWith` selector. You can utilize other selectors for the ID (for example, `contains`), or use the CSS class where you can assign the desired jQuery selector to a control or its parent to build.

>caption Using the `attributeEndsWith` selector to get the client-side instance of a control.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

## Using Telerik Methods

You can also use the `$telerik.findControl()` method that is exposed in the [Telerik Static Client Library]({%slug controls/telerik-static-client-library%}).

>caption Using the `$telerik.findControl` method to get the client-side reference of a control.

````ASP.NET
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Button" OnClientClicked="showRadWindow" AutoPostBack="false" />

<asp:Panel runat="server" ID="Panel1">
    <telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
        <ContentTemplate>
            <p>Some content.</p>
        </ContentTemplate>
    </telerik:RadWindow>
</asp:Panel>

<script>
    function showRadWindow(sender, args) {
        var parentElement = $get("<%= Panel1.ClientID%>");
        var radWindow = $telerik.findControl(parentElement, "<%= RadWindow1.ClientID %>");
        radWindow.show();
    }
</script>
````

## Important MS AJAX Events

The client-side instances of the Telerik UI for ASP.NET AJAX controls are initialized after their scripts are loaded, that is, after [`Sys.Application.init`](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx). The earliest-occurring event that you can use to reference the client-side instance of a control is the [`Sys.Application.load`](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx) event.

In the following examples, using native DOM events, such as [`window.load`](https://developer.mozilla.org/en-US/docs/Web/Events/load) or [`$(document).ready` jQuery event](https://api.jquery.com/ready/), may not achieve the expected results. Such events are usually prior to the `Sys.Application.load` event and cannot guarantee that the control instances are initialized.

>caption Using the `Sys.Application.load` event to get the instance.

````ASP.NET
<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

>caption Using server-side techniques to interact with a client-side control instances.

````ASP.NET
<telerik:RadWindow RenderMode="Lightweight" runat="server" ID="RadWindow1">
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

## See Also

* [MSDN IScriptControl interface](https://msdn.microsoft.com/en-us/library/system.web.ui.iscriptcontrol(v=vs.110).aspx)
* [MSDN Sys.Application.init](https://msdn.microsoft.com/library/bb397532(v=vs.100).aspx)
* [MSDN Sys.Application.load](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx)
* [MSDN Sys.Application.findComponent](https://msdn.microsoft.com/library/bb397522(v=vs.100).aspx)
* [MSDN $get()](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx)
* [MDN document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [jQuery attributeEndsWith selector](https://api.jquery.com/attribute-ends-with-selector/)
* [jQuery $(document).ready event](https://api.jquery.com/ready/)
* [Telerik Static Client Library]({%slug controls/telerik-static-client-library%})
* [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%})
* [Access Telerik Controls on Client-Side](https://www.telerik.com/support/kb/aspnet-ajax/details/access-telerik-controls-on-client-side)
