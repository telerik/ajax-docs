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



**RadDropDownTree** supports binding to various types of data sources:

* [DataTable, DataSet, DataView]({%slug dropdowntree/data-binding/binding-to-datatable,-dataset-or-dataview%})

* Declarative DataSource types like SqlDataSource, ObjectDataSource and XmlDataSource

* Linq DataSource

* Entity DataSource

* [Array, ArrayList and Generic List ]({%slug dropdowntree/data-binding/binding-to-array,-arraylist-and-generic-list%})

## Databinding Properties and Methods

The following properties and methods are used when binding the **RadDropDownTree** to a data source:

* **DataSource** property: Set to an instance of your data source. This is mandatory when binding the **RadDropDownTree** at runtime.

* **DataSourceID** property: Set to the ID of your data source. This is mandatory when binding the **RadDropDownTree** declaratively.

* **DataFieldID**property:****This is the field name from the data source used to uniquely identify each row. This field is required when binding to hierarchical data.

* **DataFieldParentID**property: This is the field name from the data source used to identify the row for the parent node. This field is required when binding to hierarchical data.

* **DataTextField property:**This is the field name from the data source that populates each Node's**Text** property during binding.

* **DataValueField** property: This is the field name from the data source that populates each Node's **Value** property during binding.

## Using Templates with RadDropDownTree

You can also use [Templates]({%slug dropdowntree/templates/templates-overview%}) with a data-bound **RadDropDownTree**. To bind template node to column values, you will need to use DataBinder.Eval expressions in the Template's definition.
