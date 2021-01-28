---
title: Overview
page_title: Data Binding Overview - RadAutoCompleteBox
description: Check our Web Forms article about Telerik's ASP.NET AutoCompleteBox Data Binding Overview.
slug: autocompletebox/data-binding/overview
tags: overview, autocompletebox
published: True
position: 0
---

# Data Binding Overview



**RadAutoCompleteBox** supports binding to various data sources, which include:

* [Array, ArrayList]({%slug autocompletebox/data-binding/binding-to-array,-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug autocompletebox/data-binding/binding-to-asp-datasource-components%})

* [ASP 2.0 DataSource types]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [Web Service]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [WCF Service]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [OData]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

## Databinding Properties and Methods

The following properties and methods are used when binding RadAutoCompleteBox to a data source.

* **DataSource** property - set to an instance of your data source. This is mandatory when binding RadAutoCompleteBox at runtime.

* **DataSourceID** property - set to the ID of your data source. This is mandatory when binding RadAutoCompleteBox declaratively.

* **DataMember** property - if the data source is a **DataSet** and **DataMember** is a set, then RadAutoCompleteBox is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, RadAutoCompleteBox is bound to the first **DataTable** in the **DataSet**.

* **DataTextField** property - field name from the data source bound to the AutoCompleteBoxItemData's **Text** property.

* **DataValueField** property - field name from the data source bound to the AutoCompleteBoxItemData's **Value** property.

* **DataBind** method - is called after the aforementioned properties are set when binding at runtime.

>note DataBind method can be omitted when binding to a data source at runtime.
>


## Using Templates with Data Bound Drop-Down Items

You can also use [templates]({%slug autocompletebox/templates/server-templates%}) with a data bound RadAutoCompleteBox. To bind the defined template to column values, use DataBinder.Eval expressions in its definition.

Example:

````C#
<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
````



>note The Container.DataItem can be used to access AutoCompleteBoxItemData when it is in bound mode. AutoCompleteBoxItemData, however, must be bound before accessing its data from the DataItem.
>

