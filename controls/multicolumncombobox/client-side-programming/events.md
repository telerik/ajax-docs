---
title: Events Overview
page_title: Overview | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: Overview
slug: multicolumncombobox/client-side-programming/events
tags: overview,events
published: True
position: 1
---

# Events Overview

This article lists the clients-side events of the **RadMultiColumnComboBox** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadMultiColumnComboBox]({%slug multicolumncombobox/client-side-programming/overview%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

RadMultiColumnComboBox is a wrapper over the Kendo UI MultiColumnComboBox widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are avaliable through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives).

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadMultiColumnComboBox

* [OnCascade](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/cascade)—Fired when the value of the widget is changed via API or user interaction.

* [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/change)—Fired when the value of the widget is changed by the user.

* [OnClose](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/close)—Fired when the popup of the widget is closed.

* [OnDataBound](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/databound)—Fired when the widget is bound to data from its data source.

* **OnInitialize**—Fired just before the RadMultiColumnComboBox client-side object is initialized.

* [OnFiltering](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/filtering)—Fired when the widget is about to filter the data source.

* **OnLoad**—Fired when RadMultiColumnComboBox is initialized.

* [OnOpen](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/open)—Fired when the popup of the widget is opened by the user.

* [OnSelect](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/select)—Fired when an item from the popup is selected by the user either with mouse/tap or with keyboard navigation.

## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````JavaScript
<script>
	var mccb, kendoMccb;
	function OnLoad(sender, args) {
		mccb = sender; //the RadMultiColumnComboBox
		kendoMccb = sender.get_kendoWidget(); //the underlying Kendo MultiColumnComboBox
	}
</script>
<telerik:RadMultiColumnComboBox Skin="Default" runat="server" ID="RadMultiColumnComboBox1">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiColumnComboBox>
````

>caption Example 2: Get the data associated with the selected item

````JavaScript
<script>
	function OnSelect(sender, args) {
		var data = args.get_dataItem();
		console.log(data.CustomerID);
	}
</script>
<telerik:RadMultiColumnComboBox Skin="Default" runat="server" ID="RadMultiColumnComboBox2" 
    DataSourceID="SqlDataSource1"  DataTextField="ContactName" DataValueField="CustomerID">
	<ClientEvents OnSelect="OnSelect" />
		<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="CustomerID" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="ContactName" Title="Name" />
	</ColumnsCollection>
</telerik:RadMultiColumnComboBox>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient"
	SelectCommand="SELECT Top 20 [CustomerID], [ContactName], [ContactTitle], [CompanyName] FROM [Customers]"></asp:SqlDataSource>
````


## See Also

* [Live Demo - Client-side Events](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/client-side-events/defaultcs.aspx)

* [RadMultiColumnComboBox Client-side Object]({%slug multicolumncombobox/client-side-programming/overview%})

