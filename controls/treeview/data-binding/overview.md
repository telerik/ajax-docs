---
title: Overview
page_title: Data Binding Overview | RadTreeView for ASP.NET AJAX Documentation
description: Overview
slug: treeview/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



**RadTreeView** supports binding to various types of data sources:

* [OData]({%slug treeview/data-binding/binding-to-odata%})

* [DataTable, DataSet, DataView]({%slug treeview/data-binding/binding-to-datatable%})

* [ASP 2.0 DataSource types]({%slug treeview/data-binding/binding-to-asp.net-datasource-components%})

* [Array, ArrayList, Generic Lists]({%slug treeview/data-binding/binding-to-array-and-arraylist%})

In addition, while not strictly data binding, **RadTreeView** can [load XML content]({%slug treeview/data-binding/loading-xml-content%}) files.

## Databinding Properties and Methods

The following properties and methods are used when binding the **RadTreeView** to a data source:

* **DataSource** property: Set to an instance of your data source. This is mandatory when binding the **RadTreeView** at runtime.

* **DataSourceID** property: Set to the ID of your data source. This is mandatory when binding the **RadTreeView** declaratively.

* **DataMember** property: If the data source is a **DataSet** and **DataMember** is set, then the **RadTreeView** is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, the **RadTreeView** is bound to the first **DataTable** in the **DataSet**.

* **DataFieldID**property: This is the field name from the data source used to uniquely identify each row. This field is required when [binding to hierarchical data]({%slug treeview/data-binding/binding-to-hierarchical-data%}).

* **DataFieldParentID**property: This is the field name from the data source used to identify the row for the parent node. This field is required when [binding to hierarchical data]({%slug treeview/data-binding/binding-to-hierarchical-data%}).

* **DataTextField property:**This is the field name from the data source that populates each Node's**Text** property during binding.

* **DataValueField** property: This is the field name from the data source that populates each Node's **Value** property during binding.

* **DataNavigateUrlField**property: This is the field name from the data source that populates each Node's **NavigateUrlField**property during binding.

* **DataBind** method: Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of the **RadTreeView** Node, you can use the **[NodeDataBound event]({%slug treeview/data-binding/using-additional-columns%})** .
>


## Appending Data Bound Items

**RadTreeView** exposes the **AppendDataBoundItems** property (**False** by default). If you bind the **RadTreeView** using the **DataBind** method, all **RadTreeView** Nodes are automatically cleared. Setting **AppendDataBoundItems** to **True** preserves the Nodes that are already present in the **RadTreeView**. This lets you bind **RadTreeView** to multiple data sources or use both unbound and bound modes.

## Binding depth

**RadTreeView** exposes the **MaxDataBindDepth** property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the TreeView, you should set this property to **2**. The default value of the **MaxDataBindDepth** property is **-1**, which means that all Nodes will be bound. Marking the TreeView instance with **MaxDataBindDepth="0"** will NOT bind any Nodes.

## Using Templates with Data-bound Items

You can also use [Templates]({%slug treeview/templates/overview%}) with a data-bound **RadTreeView**. To bind template items to column values, use DataBinder.Eval expressions in the Template's definition:

````ASPNET
	     
		<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
				
````



Note that you use **Container.DataItem** to access the **RadTreeView** Node when it is in a bound mode. The **RadTreeView** item must already be bound before template binding can work.

For an live example of data-binding **RadTreeView**, see [DataBinding](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/DataBinding/DefaultCS.aspx).

# See Also

 * [Binding to a Database]({%slug treeview/getting-started/binding-to-a-database%})
