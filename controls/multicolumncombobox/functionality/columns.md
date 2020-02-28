---
title: Columns
page_title: Columns | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: Columns
slug: multicolumncombobox/functionality/columns
tags: Columns
published: True
position: 0
---

# Columns

**RadMultiColumnComboBox** is a dropdown that provides easy columns setup for its dropdown. You can define columns in the `ColumnsCollection`.

You can set which **Field** from the dataItem should be populated, set a **Title**, [template]({%slug multicolumncombobox/functionality/templates%}#column-template), [headerTemplate]({%slug multicolumncombobox/functionality/templates%}#header-template) and **Width**.

Here is how the width of the columns and the dropdown behaves:

* If all columns' `Width` is defined in pixels, the `DropDownWidth` value (if set) is disregarded.
* If not all of the columns `Width` value set, the `DropDownWidth` value is applied to the element.
* You can set the `Width` only of some columns and the rest will distribute the remaining width from the `DropDownWidth`. This means you can also set column widths in percent from the `DropDownWidth`.

You can also control the overall dropdown settings through the `DropDownWidth` and `Height` properties in the main `RadMultiColumnComboBox` tag. The inner `AnimationSettings` and [PopupSettings](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/configuration/popup) expose additional settings.

>caption Example 1: Columns in RadMultiColumnComboBox

````ASP.NET
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox4" runat="server" Skin="Default"
    DataTextField="ContactName" DataValueField="CustomerID"
    DropDownWidth="500" Height="400" Width="100%">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="CustomerID" Title="ID" />
        <telerik:MultiColumnComboBoxColumn Field="ContactName" Title="Name" />
    </ColumnsCollection>
    <WebServiceSettings Select-ContentType="JSON" ServiceType="OData"
        Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers">
    </WebServiceSettings>
</telerik:RadMultiColumnComboBox>
````

You can also use the templates and all other functionality of the columns regardless of the data binding scenario, including with local data.

>caption Example 2: Columns with local data and not having all widths set

````ASP.NET
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox4" runat="server" Skin="Default"
	DataTextField="name" DataValueField="id"
	Filter="Contains" FilterFields="name, color"
	DropDownWidth="400" Height="400" Width="300px">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="id" Title="ID" Width="40px" />
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="color" Title="color" Width="100px">
			<Template><span style="color: #=data.color#">#:data.color#</span></Template>
		</telerik:MultiColumnComboBoxColumn>
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiColumnComboBox>

<script>
	function OnLoad(sender, args) {
		var data = [
			{ id: 1, name: "one", color: "red" },
			{ id: 2, name: "two", color: "green" },
			{ id: 3, name: "three", color: "blue" }
		];

		sender.set_dataSource(data);
	}
</script>
````



## See Also

* [Live Demo - RadMultiColumnComboBox Overview](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/overview/defaultcs.aspx)

* [Templates]({%slug multicolumncombobox/functionality/templates%})


