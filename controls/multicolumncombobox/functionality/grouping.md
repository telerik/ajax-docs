---
title: Grouping
page_title: Grouping - RadMultiColumnComboBox
description: Check our Web Forms article about Grouping.
slug: multicolumncombobox/functionality/grouping
tags: Grouping
published: True
position: 4
---

# Grouping

**RadMultiColumnComboBoxes** can group its data source based on the **GroupByField** property.

The dropdown will show a header with the value of the field for each group, and a static header for the current group just below the column headers, so the user can see which group they are scrolling through regardless of the number of items in it.

You can customize the headers through their [templates]({%slug multicolumncombobox/functionality/templates%}).

Grouping requires binding the control to a web service, and grouping is performed on the client over the returned flat data.

>caption Example 1: Grouping in RadMultiColumnComboBox

````ASP.NET
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox4" runat="server" Skin="Default"
    GroupByField="Country"
    DataTextField="ContactName" DataValueField="CustomerID"
    Filter="Contains" Placeholder="select from the dropdown or type"
    DropDownWidth="500" Height="400" Width="100%">
    <WebServiceSettings Select-ContentType="JSON" ServiceType="OData"
        Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers">
    </WebServiceSettings>
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="CustomerID" Title="ID" />
        <telerik:MultiColumnComboBoxColumn Field="ContactName" Title="Name" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

Web service binding creates a Kendo DataSource and applies the grouping settings to it automatically. You can create your own Kendo DataSource instance and provide local data to it. In such a case, you must also provide the grouping settings to the data source.

>caption Example 2: Grouping with local data and a Kendo DataSource

````ASP.NET
<script>
	function OnLoad(sender, args) {
		var data = [
			{ id: 1, name: "one", color: "red" },
			{ id: 2, name: "two", color: "green" },
			{ id: 3, name: "three", color: "blue" },
			{ id: 4, name: "four", color: "red" }
		];

		var kendoDs = new kendo.data.DataSource({
			data: data,
			//clone the original group settings from the server
			group: {
				field: sender.groupByField
			}
		});

		sender.set_dataSource(kendoDs);
	}
</script>

<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox4" runat="server" Skin="Default"
	GroupByField="color" DataTextField="name" DataValueField="id" 
	Filter="Contains" FilterFields="name, color"
	DropDownWidth="500" Height="400" Width="300px">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="id" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="color" Title="color" />
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiColumnComboBox>
````



## See Also

* [Live Demo - Grouping](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/grouping/defaultcs.aspx)

* [Templates]({%slug multicolumncombobox/functionality/templates%})

* [Kendo Data Source Grouping Configuration](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/group)

