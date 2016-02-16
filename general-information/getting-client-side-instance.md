---
title: Get Client-side Reference to a Control Object
page_title: Get Client-side Reference to a Control Object | UI for ASP.NET AJAX Documentation
description: Shows several ways to get a client-side reference to an instance of a control.
slug: general-information/getting-client-side-instance
tags: client, side, client-side, instance, get, reference, javascript, js, events, ajax, find
published: True
position: 3
---

# Get Client-side Reference to a Control Object

This article shows how to get a client-side reference to a Telerik UI for ASP.NET AJAX control and use its clients-side API. 

You can quickly navigate through the sections from here:

* [Using Native Methods](#using-native-methods)
* [Incorporating MS Ajax Events](#incorporating-ms-ajax-events)
* [Using jQuery Selectors](#using-jquery-selectors)

<COMMENT: add info for IScripTCOntrol and that we follow the lifecycle of MS AJAX-based controls>

## Using the MS AJAX Approach

Example 3................................

## Using Plain JavaScript Methods

Typically, when a **UI for ASP.NET AJAX** control renders on the client, its client-side reference is assigned to the wrapper DOM element and exposed through the `control` property.

That said, you can use the native [$get()](https://msdn.microsoft.com/library/bb397717(v=vs.100).aspx) or [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) methods and get the instance via the `control` property. See **Example 1** and **Example 2**.

>tip We recomment you use server-side scripting tags and get the dyncamically created client ID of the control (`<%= [ControlID].ClientID %>`). If, however, you do not have access to the server-side instance of the control see the options in [Using jQuery Selectors](#using-jquery-selectors) section.

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

Useful helper method for the case here is the `$find()` method (**Example 3**) that comes from the [Telerik Static Client Library]({%slug controls/telerik-static-client-library%}) and eliminates the need to use the **control** property of the DOM element (i.e., it does that automatically).

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



## Using jQuery Selectors

Common scenario is when controls are added via User Controls, Content Templates and other similar techniques. In such scenarios, IDs are generated dynamically and getting the client-side reference from Master or main pages cannot be done by accessing the `ClientID` property of the server-side instance of the control. 

With the help of the [included jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#using-the-jquery-brought-by-telerik), you can use [attributeEndsWith selector](https://api.jquery.com/attribute-ends-with-selector/) to get the DOM element and access the client-side instance only by using the server-side ID of the control.

>important If the same server-side ID is used with multiple controls, jQuery will return you all elements that ends with the same ending value. Such scenario should be handled manually as per to the exact requirments.

>caption Example 5: Using attributeEndsWith selector to get the client-side instance of a cotnrol.

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

The client-side instances of the controls are initialized after their scripts are loaded. The [Sys.Application.load](https://msdn.microsoft.com/library/bb383829(v=vs.100).aspx) event is the proper event which can be used to get the control's instance.

>caption Example 3: Using Sys.Application.load to get the instance.

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

>caption Example 4: Using server-side techiques to interact with control's client-side instances.

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

>note Using native events, like the [window.load event](https://developer.mozilla.org/en-US/docs/Web/Events/load) might not give you the expected results. The client-side code is loaded dynamically and this event cannot guarantee you that the instances are initialized.


## See Also

<other MSDN links>

* [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%})

