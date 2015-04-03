---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dropdowntree/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadDropDownTree__ supports binding to various types of data sources:

* [DataTable, DataSet, DataView]({%slug dropdowntree/data-binding/binding-to-datatable,-dataset-or-dataview%})

* Declarative DataSource types like SqlDataSource, ObjectDataSource and XmlDataSource

* Linq DataSource

* Entity DataSource

* [Array, ArrayList and Generic List ]({%slug dropdowntree/data-binding/binding-to-array,-arraylist-and-generic-list%})

## Databinding Properties and Methods

The following properties and methods are used when binding the __RadDropDownTree__ to a data source:

* __DataSource__ property: Set to an instance of your data source. This is mandatory when binding the __RadDropDownTree__ at runtime.

* __DataSourceID__ property: Set to the ID of your data source. This is mandatory when binding the __RadDropDownTree__ declaratively.

* __DataFieldID__property:____This is the field name from the data source used to uniquely identify each row. This field is required when binding to hierarchical data.

* __DataFieldParentID__property: This is the field name from the data source used to identify the row for the parent node. This field is required when binding to hierarchical data.

* __DataTextField property:__This is the field name from the data source that populates each Node's__Text__ property during binding.

* __DataValueField__ property: This is the field name from the data source that populates each Node's __Value__ property during binding.

## Using Templates with RadDropDownTree

You can also use [Templates]({%slug dropdowntree/templates/templates-overview%}) with a data-bound __RadDropDownTree__. To bind template node to column values, you will need to use DataBinder.Eval expressions in the Template's definition.
