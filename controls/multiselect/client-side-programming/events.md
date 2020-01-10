---
title: Events Overview
page_title: Overview | RadMultiSelect for ASP.NET AJAX Documentation
description: Overview
slug: multiselect/client-side-programming/events
tags: overview,events
published: True
position: 1
---


# Events Overview

This article lists the clients-side events of the **RadMultiSelect** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadMultiSelect]({%slug multiselect/client-side-programming/overview%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

RadMultiSelect is a wrapper over the Kendo UI MultiSelect widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are avaliable through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel an event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadMultiSelect

* [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/change)—Fired when the value of the widget is changed by the user.

* [OnClose](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/methods/close)—Fired when the popup of the widget is closed. Cancellable.

* [OnDataBound](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/databound)—Fired when the widget is bound to data from its data source.

* [OnDeselect](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/deselect)—Fired when an item is deselected or tag is removed.

* [OnFiltering](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/filtering)—Fired when the widget is about to filter the data source. Cancellable.

* **OnInitialize**—Fired just before the RadMultiSelect client-side object is initialized.

* **OnLoad**—Fired when RadMultiSelect is initialized.

* [OnOpen](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/open)—Fired when the popup of the widget is opened by the user. Cancellable.

* [OnSelect](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/events/select)—Fired when an item from the popup is selected by the user. Cancellable.

## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````JavaScript
<script>
    var multiSelect, kendoMultiSelect;
    function OnLoad(sender, args) {
        multiSelect = sender; //the RadMultiSelect
        kendoMultiSelect = sender.get_kendoWidget(); //the underlying Kendo MultiSelect
    }
</script>
<telerik:RadMultiSelect Skin="Default" runat="server" ID="RadMultiSelect1">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiSelect>
````

>caption Example 2: Get the data associated with the selected item

````JavaScript
<script>
    function onSelect(sender, args) {
        var data = args.get_dataItem();
        console.log(data.ProductID);
    }
</script>

<telerik:RadMultiSelect RenderMode="Lightweight" ID="RadMultiSelect1" runat="server" DropDownHeight="200px" Width="400"
    DataSourceID="SqlDataSource1" DataTextField="ProductName" DataValueField="ProductID">
    <ClientEvents OnSelect="onSelect" />
</telerik:RadMultiSelect>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT [ProductID], [ProductName] FROM [Products] ORDER By ProductName" />
````

>caption Example 3: Cancel an event

````JavaScript
<script>
	function OnOpen(sender, args) {
		var shouldCancel = true;//use actual business logic
		args.set_cancel(shouldCancel);//cancel the event
		//in this example, the dropdown will never open
	}
</script>
<telerik:RadMultiSelect Skin="Default" runat="server" ID="RadMultiSelect1">
    <ClientEvents OnOpen="OnOpen" />
</telerik:RadMultiSelect>
````


## See Also

* [Live Demo - Client-side Events](https://demos.telerik.com/aspnet-ajax/multiselect/client-side-events/defaultcs.aspx)

* [RadMultiSelect Client-side Object]({%slug multicolumnselect/client-side-programming/overview%})






