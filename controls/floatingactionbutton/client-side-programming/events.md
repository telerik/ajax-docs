---
title: Events
page_title: RadFloatingActionButton Client-side Events
description: Check our Web Forms article about the API of RadFloatingActionButton object.
slug: floatingactionbutton/client-side-programming/events
tags: overview
published: True
position: 1
---

# Events

This article lists the client-side events of the **RadFloatingActionButton** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadFloatingActionButton]({%slug floatingactionbutton/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

RadFloatingActionButton is a wrapper over the Kendo UI FloatingActionButton widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are available through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel a   cancelable event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadFloatingActionButton

* **OnInitialize** — Fired just before the RadFloatingActionButton client-side object is initialized.

* **OnLoad** — Fired when RadFloatingActionButton is initialized.
  
* [OnClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton/events/click) — Fires when the user clicks on a the FloatingActionButton. (Cancelable event)

* [OnExpand](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton/events/collapse) — Fires when the speed-dial popup is opened and its animation is finished.. Available only when Items are defined.

* [OnCollapse](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton/events/collapse) — Fires when the speed-dial popup is closed and its animation is finished. Available only when Items are defined.

* Item's Click event - each Item defined in the RadFloatingActionButton exposes its own Click event that fires when the item itself is being clicked.

## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````ASP.NET
<script>
	var floatingButton, kendoFloatingActionButton;
	function OnLoad(sender, args) {
		floatingButton = sender; //the RadFloatingActionButton
		kendoFloatingActionButton = sender.get_kendoWidget(); //the underlying Kendo FloatingActionButton
	}
</script>
<telerik:RadFloatingActionButton runat="server" ID="RadFloatingActionButton">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadFloatingActionButton>
````

>caption Example 2: Get the data associated with the clicked item

````ASP.NET
<script>
function dialItemClicked(eventArguments) {
    alert('"' + eventArguments.item.label +'" item Clicked.');
}
</script>
<telerik:RadFloatingActionButton runat="server" Size="Large" ID="RadFloatingActionButton1" Icon="share" PositionMode="Absolute" Align="BottomCenter">
    <AlignOffsetSettings X="0" Y="100" />
    <Items>
        <telerik:FloatingActionButtonItem Label="Download" Icon="download" OnClientClicked="dialItemClicked"></telerik:FloatingActionButtonItem>
        <telerik:FloatingActionButtonItem Label="Print" Icon="print" OnClientClicked="dialItemClicked"></telerik:FloatingActionButtonItem>
        <telerik:FloatingActionButtonItem Label="Email" Icon="email" OnClientClicked="dialItemClicked"></telerik:FloatingActionButtonItem>
    </Items>
</telerik:RadFloatingActionButton>
````

See live sample of handling the client events in our [Client-side events demo](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/events/defaultcs.aspx)


# See Also

 * [RadFloatingActionButton Client-side Object]({%slug floatingactionbutton/client-side-programming/overview%})
 * [Client-side events demo](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/events/defaultcs.aspx)


