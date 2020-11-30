---
title: Events
page_title: Client-side Events | RadBreadcrumb for ASP.NET AJAX Documentation
description: Events
slug: breadcrumb/client-side-programming/events
tags: events
published: True
position: 1
---

# Events

This article lists the client-side events of the **RadBreadcrumb** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadBreadcrumb]({%slug breadcrumb/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

RadBreadcrumb is a wrapper over the Kendo UI Breadcrumb widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/breadcrumb#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are available through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel a   cancelable event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadBreadcrumb

* **OnInitialize**—Fired just before the RadBreadcrumb client-side object is initialized.

* **OnLoad**—Fired when RadBreadcrumb is initialized.
  
* [OnClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/breadcrumb/events/click)—Fires when an item or a rootitem is clicked. (Cancelable event)
  
* [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/breadcrumb/events/change)—Fires when the value of the Breadcrumb is changed. 


## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````ASPX
<script>
	var breadcrumb, kendoBreadcrumb;
	function OnLoad(sender, args) {
		breadcrumb = sender; //the RadBreadcrumb
		kendoBreadcrumb = sender.get_kendoWidget(); //the underlying Kendo Breadcrumb
	}
</script>
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadBreadcrumb>
````

>caption Example 2: Get the data associated with the clicked item

````ASPX
<script>
    function OnClick(sender, args) {
        // object of the clicked item 
        var itemElement = args.get_item();
        // the text of the clicked item
        var itemText = itemElement.text;
        // check if item type is Root
        var isRootItem = args.get_isRoot();
        if (isRootItem) console.log("RootItem: " + itemText);
        else console.log("Item: " + itemText);
    }
</script>
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb2">
    <ClientEvents OnClick="OnClick" />
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ShowText="true" Text="Telerik UI for ASP.NET AJAX" />
        <telerik:BreadcrumbItem Text="Controls" ShowIcon="true" Icon="folder-open" />
        <telerik:BreadcrumbItem Text="RadBreadcrumb" ShowIcon="true" Icon="folder-open" />
        <telerik:BreadcrumbItem Text="Overview" Icon="star" ShowIcon="true" />
    </Items>
</telerik:RadBreadcrumb>
````

>caption Example 3: Get changed value of the breadcrumb:

````ASPX
<script>
    function OnChange(sender, args) {
        //log the value of the Breadcrumb after change
        var newValue = sender.get_value();
        console.log(newValue);
    }
</script>
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" Editable="true">
    <ClientEvents OnChange="OnChange" />
    <Items>
        <telerik:BreadcrumbItem Type="RootItem"/>
        <telerik:BreadcrumbItem Text="Item1" />
        <telerik:BreadcrumbItem Text="Item2" />
        <telerik:BreadcrumbItem Text="Item3" />
    </Items>
</telerik:RadBreadcrumb>
````


## See Also

* [RadBreadcrumb Client-side Object]({%slug breadcrumb/client-side-programming/overview%})

