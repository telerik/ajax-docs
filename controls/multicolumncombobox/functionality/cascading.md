---
title: Cascading
page_title: Cascading | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: Cascading
slug: multicolumncombobox/functionality/cascading
tags: cascading
published: True
position: 3
---

# Cascading

Cascading **RadMultiColumnComboBoxes** are a series of two or more RadMultiColumnComboBox instances in which each MultiColumn ComboBox is filtered according to the selected value (based on the `DataValueField`, of the previous MultiColumnComboBox. A cascading instance is disabled until its parent has a value.

To enable cascading, set the `CascadeFrom` property of the child instance to the `ID` of the parent instance.

The child MultiColumnComboBox takes the following actions during initialization:

* Checks if the cascadeFrom property is set. If not, cascading is disabled.
* Tries to find the parent MultiColumnComboBox object. If the result is null, then the functionality is omitted.
* Listens to any changes of the parent value.
* If the parent does not have a value, the child is disabled. If the parent has a value, the child is enabled and filters its data accordingly.

    * Filtering happens on the client and the child value field must be equal to the parent value field.
    
    
You can also instruct the child combo box to take a different field from its parent by setting its `CascadeFromParentField` property to the desired field. The `CascadeFromField` controls which field in the child data source will be filtered and you can set it to a different value than the `DataValueField`.

>caption Example 1: Cascading two RadMultiColumnComboBox instances

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"
    DataTextField="CategoryName" DataValueField="CategoryID"
    DropDownWidth="300px" Height="400px" Width="300px"
    MinLength="3" Filter="Contains" Placeholder="Select Category">
	<WebServiceSettings ServiceType="OData" Select-ContentType="JSON"
		Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"></WebServiceSettings>
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="CategoryName" Title="Name" />
        <telerik:MultiColumnComboBoxColumn Field="CategoryID" Title="ID" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>


<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox2" Skin="Default"

    CascadeFrom="RadMultiColumnComboBox1"

    DataTextField="ProductName" DataValueField="ProductID"
    DropDownWidth="300px" Height="400px" Width="300px"
    MinLength="3" Filter="Contains" Placeholder="Select Product">
	<WebServiceSettings ServiceType="OData" Select-ContentType="JSON"
		Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"></WebServiceSettings>
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="ProductName" Title="Name" />
        <telerik:MultiColumnComboBoxColumn Field="UnitPrice" Title="Price" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````


>caption Example 2: Using CascadeFromField and CascadeFromParentField

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="parentCombo" Skin="Default"
	DataTextField="name" DataValueField="id" Width="300px">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="id" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="cascadeId" Title="Cascade ID" />
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoadParent" />
</telerik:RadMultiColumnComboBox>

<telerik:RadMultiColumnComboBox runat="server" ID="childCombo" Skin="Default"
	DataTextField="name" DataValueField="id" Width="300px"
	
	CascadeFrom="parentCombo" CascadeFromField="parentId" CascadeFromParentField="cascadeId"
	
	>
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="id" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="parentId" Title="Parent ID" />
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoadChild" />
</telerik:RadMultiColumnComboBox>



<script>
	var parentData = [
		{ name: "Parent1", id: 123, cascadeId: 1 },
		{ name: "Parent2", id: 234, cascadeId: 2 }
	];
	var childData = [
		{ name: "Child1", id: 1, parentId: 1 },
		{ name: "Child2", id: 2, parentId: 2 },
		{ name: "Child3", id: 3, parentId: 1 },
		{ name: "Child4", id: 4, parentId: 2 }
	];

	function OnLoadParent(sender, args) {
		sender.set_dataSource(parentData);
	}

	function OnLoadChild(sender, args) {
		sender.set_dataSource(childData);
	}
</script>
````



## See Also

* [Live Demo - Cacading](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/cascading/defaultcs.aspx)

* [Kendo UI MultiColumnComboBox Widget API Reference](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)

* [Cascading in Kendo UI MultiColumnComboBox Widget](https://docs.telerik.com/kendo-ui/controls/editors/multicolumncombobox/cascading)

