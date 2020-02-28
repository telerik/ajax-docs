---
title: Filtering
page_title: Filtering | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: Filtering
slug: multicolumncombobox/functionality/filtering
tags: filtering,client,server
published: True
position: 2
---

# Filtering

**RadMultiColumnComboBox** lets the user type a search query in the input and it will filter the data source so only relevant items are shown. By default, the filter operation is performed on the client, over the current data. You can also use [server filtering](#server-filtering).

To enable filtering:

1. set the `Filter` property to the desired filter operation:

    * `contains`
    * `startsWith`
    * `endsWith`
    * `eq`
    
    Setting it to `none` will disable filtering.
    
2. set the `FilterFields` property to a comma-separated list of the data source fields whose values you want to be used for comparing against the user input

The `MinLength` property defines the minimum input length before the filter operation is performed.

>caption Example 1: Basic filtering in RadMultiColumnComboBox - the name and fruitType columns will be searchable

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"
	DataTextField="name" DataValueField="id" 
	FilterFields="name,fruitType" Filter="contains">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="id" Title="Not Searchable">
		</telerik:MultiColumnComboBoxColumn>
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name">
		</telerik:MultiColumnComboBoxColumn>
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiColumnComboBox>
<script>
	function OnLoad(sender, args) {
			data: [
				{ id: 1, name: "Apples", fruitType: "regular" },
				{ id: 2, name: "Oranges", fruitType: "citrus" },
				{ id: 3, name: "Bananas", fruitType: "citrus" }
			];
		sender.set_dataSource(data);
	}
</script>
````

>tip Client filtering will work with both client-side and server-side binding. If used with a declarative data source, it will serialize its data to an array on the client, just like it would behave if the data were fetched from a web service call.

## Server Filtering

When you set the `EnableServerFiltering` property to `true`, filtering will request the data from the server.

This can be useful when there is a lot of data that would slow down the browser by creating a lot of elements, or would be costly to the server. Combined with `MinLength`, you can improve the performance for both the client, and the server.

The server filtering requires binding to a web service, and it will result in GET requests where querystring parameters will denote the filtered field and operator. For example, if the `ProductName` field is set as the `DataValueField`, `Filter` is `contains` and the user input is `che`, the parameter added to the URL will look something like `&$filter=substringof('che',tolower(ProductName))"`.

With server filtering, RadMultiColumnComboBox will not request the data when initializing, only when the user types in a search string of sufficient length (see `MinLength`). This is done by setting the `autoBind` property of the underlying Kendo widget to `false`.

>caption Example 2: Enabling server filtering

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Filter="Contains"
    EnableServerFiltering="true"
    DropDownWidth="600px" Height="400"
    DataTextField="ProductName" MinLength="3" Skin="Default" Width="100%"
    EnforceMinLength="false" DataValueField="ProductID"
    Placeholder="select from the dropdown or type">
	<WebServiceSettings ServiceType="OData" Select-ContentType="JSON"
		Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"></WebServiceSettings>
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="ProductName" Title="ProductName" />
        <telerik:MultiColumnComboBoxColumn Field="QuantityPerUnit" Title="QuantityPerUnit" />
        <telerik:MultiColumnComboBoxColumn Field="UnitPrice" Title="UnitPrice" />
        <telerik:MultiColumnComboBoxColumn Field="UnitsInStock" Title="UnitsInStock" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

>caption Example 3: Server filtering through a RadClientDataSource requires setting its **EnableServerFiltering** property to **true**

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Filter="Contains"
    ClientDataSourceID="RadClientDataSource1" DropDownWidth="600px" Height="400"
    DataTextField="ProductName" MinLength="3" Skin="Default" Width="100%"
    EnforceMinLength="false" DataValueField="ProductID"
    Placeholder="select from the dropdown or type">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="ProductName" Title="ProductName" />
        <telerik:MultiColumnComboBoxColumn Field="QuantityPerUnit" Title="QuantityPerUnit" />
        <telerik:MultiColumnComboBoxColumn Field="UnitPrice" Title="UnitPrice" />
        <telerik:MultiColumnComboBoxColumn Field="UnitsInStock" Title="UnitsInStock" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
<telerik:RadClientDataSource EnableServerFiltering="true" ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData" Select-DataType="JSON">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>
````

## See Also

* [Live Demo - Server Filtering](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/server-filtering/defaultcs.aspx)

* [Kendo UI MultiColumnComboBox Widget API Reference](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)

