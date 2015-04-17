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



**RadDropDownList** fully supports binding to various data sources:

* [Array, ArrayList]({%slug dropdownlist/databinding/server-side-binding-/binding-to-array-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug dropdownlist/databinding/server-side-binding-/binding-to-datatable%})

* [All ASP DataSource types]({%slug dropdownlist/databinding/server-side-binding-/binding-to-asp-datasource-components%})

* [OData]({%slug dropdownlist/databinding/client-side-binding/binding-to-odata%})

>note Data sources can support both hierarchical and non-hierarchical structures. **RadDropDownList** , however, only works with a flat structure - items cannot contain children.
>


## Databinding Properties and Methods

The following properties and methods are used when binding RadDropDownList to a data source:

* **DataSource** property - set to an instance of your data source. This is mandatory when binding RadDropDownList at runtime.

* **DataSourceID** property - set to the ID of your data source. This is mandatory when binding RadDropDownList declaratively.

* **DataTextField** property - field name from the data source to bind to the **Text** property.

* **DataValueField** property - field name from the data source to bind to the **Value** property.

* **DataBind** method - must be called after the aforementioned properties are set, when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of RadDropDownList item, the **ItemDataBound** event should be used. See[Binding To ASP DataSource Components]({%slug dropdownlist/databinding/server-side-binding-/binding-to-asp-datasource-components%}), for an example.
>


## Appending Data Bound Items

**RadDropDownList** exposes the **AppendDataBoundItems** property (set to **False** by default). If you bind the RadDropDownList using the **DataBind** method, all RadDropDownList items are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the items that are already present in RadDropDownList. This lets you bind **RadDropDownList** to multiple data sources or use both unbound and bound modes.
