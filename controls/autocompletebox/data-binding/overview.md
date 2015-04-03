---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: autocompletebox/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadAutoCompleteBox__ supports binding to various data sources, which include:

* [Array, ArrayList]({%slug autocompletebox/data-binding/binding-to-array,-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug autocompletebox/data-binding/binding-to-asp-datasource-components%})

* [ASP 2.0 DataSource types]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [Web Service]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [WCF Service]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

* [OData]({%slug autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview%})

## Databinding Properties and Methods

The following properties and methods are used when binding RadAutoCompleteBox to a data source.

* __DataSource__ property - set to an instance of your data source. This is mandatory when binding RadAutoCompleteBox at runtime.

* __DataSourceID__ property - set to the ID of your data source. This is mandatory when binding RadAutoCompleteBox declaratively.

* __DataMember__ property - if the data source is a __DataSet__ and__DataMember__ is a set, then RadAutoCompleteBox is bound to the__DataTable__ with the respective name in the __DataSet__. If __DataMember__ is not set, RadAutoCompleteBox is bound to the first __DataTable__ in the __DataSet__.

* __DataTextField__ property - field name from the data source bound to the AutoCompleteBoxItemData's __Text__ property.

* __DataValueField__ property - field name from the data source bound to the AutoCompleteBoxItemData's __Value__ property.

* __DataBind__ method - is called after the aforementioned properties are set when binding at runtime.

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

