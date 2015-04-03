---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: treeview/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadTreeView__ supports binding to various types of data sources:

* [OData]({%slug treeview/data-binding/binding-to-odata%})

* [DataTable, DataSet, DataView]({%slug treeview/data-binding/binding-to-datatable%})

* [ASP 2.0 DataSource types]({%slug treeview/data-binding/binding-to-asp.net-datasource-components%})

* [Array, ArrayList, Generic Lists]({%slug treeview/data-binding/binding-to-array-and-arraylist%})

In addition, while not strictly data binding, __RadTreeView__ can [load XML content]({%slug treeview/data-binding/loading-xml-content%}) files.

## Databinding Properties and Methods

The following properties and methods are used when binding the __RadTreeView__ to a data source:

* __DataSource__ property: Set to an instance of your data source. This is mandatory when binding the __RadTreeView__ at runtime.

* __DataSourceID__ property: Set to the ID of your data source. This is mandatory when binding the __RadTreeView__ declaratively.

* __DataMember__ property: If the data source is a __DataSet__ and __DataMember__ is set, then the __RadTreeView__ is bound to the __DataTable__ with the respective name in the __DataSet__. If __DataMember__ is not set, the __RadTreeView__ is bound to the first __DataTable__ in the __DataSet__.

* __DataFieldID__property:____This is the field name from the data source used to uniquely identify each row. This field is required when [binding to hierarchical data]({%slug treeview/data-binding/binding-to-hierarchical-data%}).

* __DataFieldParentID__property: This is the field name from the data source used to identify the row for the parent node. This field is required when [binding to hierarchical data]({%slug treeview/data-binding/binding-to-hierarchical-data%}).

* __DataTextField property:__This is the field name from the data source that populates each Node's__Text__ property during binding.

* __DataValueField__ property: This is the field name from the data source that populates each Node's __Value__ property during binding.

* __DataNavigateUrlField__property: This is the field name from the data source that populates each Node's __NavigateUrlField__property during binding.

* __DataBind__ method: Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of the __RadTreeView__ Node, you can use the __[NodeDataBound event]({%slug treeview/data-binding/using-additional-columns%})__ .
>


## Appending Data Bound Items

__RadTreeView__ exposes the __AppendDataBoundItems__ property (__False__ by default). If you bind the __RadTreeView__ using the __DataBind__ method, all __RadTreeView__ Nodes are automatically cleared. Setting __AppendDataBoundItems__ to __True__ preserves the Nodes that are already present in the __RadTreeView__. This lets you bind __RadTreeView__ to multiple data sources or use both unbound and bound modes.

## Binding depth

__RadTreeView__ exposes the __MaxDataBindDepth__ property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the TreeView, you should set this property to __2__. The default value of the __MaxDataBindDepth__ property is __-1__, which means that all Nodes will be bound. Marking the TreeView instance with __MaxDataBindDepth="0"__ will NOT bind any Nodes.

## Using Templates with Data-bound Items

You can also use [Templates]({%slug treeview/templates/overview%}) with a data-bound __RadTreeView__. To bind template items to column values, use DataBinder.Eval expressions in the Template's definition:

````ASPNET
	     
		<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
				
````



Note that you use __Container.DataItem__ to access the __RadTreeView__ Node when it is in a bound mode. The __RadTreeView__ item must already be bound before template binding can work.

For an live example of data-binding __RadTreeView__, see [DataBinding](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/DataBinding/DefaultCS.aspx).

# See Also

 * [Binding to a Database]({%slug treeview/getting-started/binding-to-a-database%})
