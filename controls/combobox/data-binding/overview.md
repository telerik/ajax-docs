---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: combobox/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



**RadCombobox** fully supports binding to various data sources:

* [Array, ArrayList]({%slug combobox/data-binding/binding-to-array-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug combobox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [ASP 2.0 DataSource types]({%slug combobox/data-binding/binding-to-asp-datasource-components%})

* [OData]({%slug combobox/data-binding/binding-to-odata%})

>note Data sources can support both hierarchical and non-hierarchical structures. **RadComboBox**, however, only works with a flat structure - items cannot contain children.
>


## Databinding Properties and Methods

The following properties and methods are used when binding RadComboBox to a data source:

* **DataSource** property - set to an instance of your data source. This is mandatory when binding RadComboBox at runtime.

* **DataSourceID** property - set to the ID of your data source. This is mandatory when binding RadComboBox declaratively.

* **DataMember** property - if the data source is a **DataSet** and **DataMember** is set, then RadComboBox is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, RadComboBox is bound to the first **DataTable** in the **DataSet**.

* **DataTextField** property - field name from the data source to bind to the **Text** property.

* **DataValueField** property - field name from the data source to bind to the **Value** property.

* **DataBind** method - must be called after the aforementioned properties are set, when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of RadComboBox item, the **ItemDataBound** event should be used. See [Binding To ASP DataSource Components]({%slug combobox/data-binding/binding-to-asp-datasource-components%}), for an example.
>


## Appending Data Bound Items

**RadComboBox** exposes the **AppendDataBoundItems** property (set to **False** by default). If you bind the RadComboBox using the **DataBind** method, all RadComboBox items are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the items that are already present in RadComboBox. This lets you bind **RadComboBox** to multiple data sources or use both unbound and bound modes.

## Using Templates with Data Bound Items

You can also use [templates]({%slug combobox/templates/overview%}) with a data bound RadComboBox. To bind template items to column values, use DataBinder.Eval expressions in the template's definition:

````C#
	     
<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
				
````



Note that you use Container.DataItem to access RadComboBox item when it is in bound mode. The RadComboBox item must already be bound before template binding can work.

For an live example of data-binding **RadComboBox**, see [DataBinding online demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/entitydatasource/defaultcs.aspx).

## Adding Custom Attributes to Data Bound Items

See [Custom Attributes]({%slug combobox/radcombobox-items/custom-attributes%}) -> *Using custom attributes in server-side code -> Data binding RadComboBox* for more information.

# See Also

 * [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%})

 * [Overview]({%slug combobox/load-on-demand/overview%})

 * [Custom Attributes]({%slug combobox/radcombobox-items/custom-attributes%})
