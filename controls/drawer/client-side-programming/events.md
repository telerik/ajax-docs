---
title: Events Overview
page_title: Overview | RadDrawer for ASP.NET AJAX Documentation
description: Overview
slug: drawer/client-side-programming/events
tags: overview,events
published: True
position: 1
---

# Events Overview

This article lists the clients-side events of the **RadDrawer** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadDrawer]({%slug drawer/client-side-programming/overview%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

RadDrawer is a wrapper over the Kendo UI Drawer widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are avaliable through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel an cancelable event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadDrawer

  
* [OnShow](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer/events/show)—Fires before the RadDrawer is revealed. Cancellable.
  
* [OnHide](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer/events/hide)—Fired when the RadDrawer is about to be hidden. Cancellable. 

* [OnItemClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer/events/itemclick)—Fires when user clicks on item from the RadDrawer. Not cancellable. The arguments have the get_item() and get_text() methods.

* **OnInitialize**—Fired just before the RadDrawer client-side object is initialized.

* **OnLoad**—Fired when RadDrawer is initialized.

## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````JavaScript
<script>
	var drawer, kendoDrawer;
	function OnLoad(sender, args) {
		drawer = sender; //the RadDrawer
		kendoDrawer = sender.get_kendoWidget(); //the underlying Kendo Drawer
	}
</script>
<telerik:RadDrawer runat="server" ID="RadDrawer">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadDrawer>
````

>caption Example 2: Get the data associated with the clicked item

````JavaScript
<script>
	function OnItemClick(sender, args) {
		// a jQuery object of the clicked item 
		var $itemElement = args.get_item();
		// the text of the element with class .k-item-text element inside the clicked item
		var itemText = args.get_text();
		console.log(itemText);
	}
</script>
<telerik:RadDrawer runat="server" ID="RadDrawer1" DrawerWidth="200" SwipeToOpen="true">
	<ClientEvents  OnItemClick="OnItemClick" />
    <ItemsTemplate>
        <ul> 
            <li data-role='drawer-item' class='k-state-selected'>
                <span class='k-item-text'>First Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Second Item</span>
            </li> 
            <li data-role='drawer-separator'></li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Third Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Fourth Item</span>
            </li> 
        </ul>
    </ItemsTemplate>
</telerik:RadDrawer>

````

>caption Example 3: Cancel an event

````JavaScript
<script>
	function OnShow(sender, args) {
		var shouldCancel = true;//use actual business logic
		args.set_cancel(shouldCancel);//cancel the event
		//in this example, the drawer will never show
	}
</script>
<telerik:RadDrawer runat="server" ID="RadDrawer1" DrawerWidth="200" SwipeToOpen="true">
    <ClientEvents OnShow="OnShow" />
    <ItemsTemplate>
        <ul> 
            <li data-role='drawer-item' class='k-state-selected'>
                <span class='k-item-text'>First Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Second Item</span>
            </li> 
            <li data-role='drawer-separator'></li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Third Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Fourth Item</span>
            </li> 
        </ul>
    </ItemsTemplate>
</telerik:RadDrawer>
````


## See Also

* [RadDrawer Client-side Object]({%slug drawer/client-side-programming/overview%})

