---
title: Getting Client-side Instance of a Control
page_title: Getting Client-side Instance of a Control | UI for ASP.NET AJAX Documentation
description: Shows several ways to get a client-side instance of a control.
slug: general-information/getting-client-side-instance
tags: client, side, client-side, instance, get, reference, javascript, js, events, ajax, find
published: True
position: 3
---

# Getting Client-side Instance of a Control

This article shows how you can get client-side instance of a control and control it via its clients-side API. 

## Using Native Methods

Typically, when a **UI for ASP.NET AJAX** control renders on the client, its client-side instance is assigned to the wrapper DOM element and exposed through the **control** property.

That said, you can use the native [$get()](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx) or [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) methods and get the instance via the **control** property. See **Example 1** and **Example 2**.

>tip It is recomended to use server-side scripting tags and get the dyncamically created client ID of the control (`<%= [ControlID].ClientID %>`). If, however, you do not have access to the server-side instance of the control see the options in [Using jQyery](@asdasd) section.

>caption Example 1: Using getElementById method to get the control's client-side instance.

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

>caption Example 2: Using $get method to get the control's client-side instance.

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

Useful helper method for the case here is the `$find()` method (**Example 3**)that comes from the [Telerik Static Client Library]({%slug telerik-static-client-library%}) and eliminates the need to use the **control** property of the DOM element (i.e., it does that automatically).

>caption Example 3: Using $find method to get the control's client-side instance.

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

## See Also

* [Telerik Static Client Library]({%slug telerik-static-client-library%})