---
title: DataBinding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dropdownlist/databinding/overview
tags: overview
published: True
position: 0
---

# DataBinding Overview



__RadDropDownList__ fully supports binding to various data sources:

* [Array, ArrayList]({%slug dropdownlist/databinding/server-side-binding-/binding-to-array-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug dropdownlist/databinding/server-side-binding-/binding-to-datatable%})

* [All ASP DataSource types]({%slug dropdownlist/databinding/server-side-binding-/binding-to-asp-datasource-components%})

* [OData]({%slug dropdownlist/databinding/client-side-binding/binding-to-odata%})

>note Data sources can support both hierarchical and non-hierarchical structures. __RadDropDownList__ , however, only works with a flat structure - items cannot contain children.
>


## Databinding Properties and Methods

The following properties and methods are used when binding RadDropDownList to a data source:

* __DataSource__ property - set to an instance of your data source. This is mandatory when binding RadDropDownList at runtime.

* __DataSourceID__ property - set to the ID of your data source. This is mandatory when binding RadDropDownList declaratively.

* __DataTextField__ property - field name from the data source to bind to the __Text__ property.

* __DataValueField__ property - field name from the data source to bind to the __Value__ property.

* __DataBind__ method - must be called after the aforementioned properties are set, when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of RadDropDownList item, the __ItemDataBound__ event should be used. See[Binding To ASP DataSource Components]({%slug dropdownlist/databinding/server-side-binding-/binding-to-asp-datasource-components%}), for an example.
>


## Appending Data Bound Items

__RadDropDownList__ exposes the __AppendDataBoundItems__ property (set to __False__ by default). If you bind the RadDropDownList using the __DataBind__ method, all RadDropDownList items are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the items that are already present in RadDropDownList. This lets you bind __RadDropDownList__ to multiple data sources or use both unbound and bound modes.
