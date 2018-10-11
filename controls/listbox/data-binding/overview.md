---
title: Overview
page_title: Data Binding Overview | RadListBox for ASP.NET AJAX Documentation
description: Overview
slug: listbox/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



**RadListBox** fully supports binding to various types of data sources:

* [OData]({%slug listbox/data-binding/binding-to-odata%})

* [DataTable, DataSet, DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

* [ASP.NET 2.0 DataSource types]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})

* [Array, ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

>tip Data sources can support both hierarchical and non-hierarchical structures. However, **RadListBox** only works with a flat structure. Items cannot contain children.
>


## Databinding Properties and Methods

The following properties and methods are used when binding the ListBox to a data source:

* **DataSource** property - Set to an instance of your data source. This is mandatory when binding the ListBox at runtime.

* **DataSourceID** property - Set to the ID of your data source. This is mandatory when binding the ListBox declaratively.

* **DataMember** property - If the data source is a **DataSet** and **DataMember** is set, then the ListBox is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, the ListBox is bound to the first **DataTable** in the **DataSet**.

* **DataTextField** property - This is the field name from the data source to bind to the **Text** property of the items.

* **DataValueField** property - This is the field name from the data source to bind to the **Value** property of the items.

* **DataKeyField** property - This is the field name from the data source that is the primary key. It must be set when reordering, transferring or deleting are enabled and **AllowAutomaticUpdates="True"**.

* **DataSortField** property - This is the field name from the data source that determines sort order (e.g. the select query is sorted by this column). This property and the **DataKeyField** properties must be set in order the RadListBox to perform reorders automatically (**AllowAutomaticUpdates="True")**.

* **DataBind** method - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

If you need to map additional fields from the Data Source to properties of the ListBox item, you can use the **ItemDataBound** event. See [inding To ASP DataSource Components]({%slug listbox/data-binding/overview%}) for an example.

## Appending Data Bound Items

**RadListBox** exposes the **AppendDataBoundItems** property **(False** by default). If you bind the ListBox using the **DataBind** method, all ListBox items are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the items that are already present in the ListBox. This lets you bind **RadListBox** to multiple data sources or use both unbound and bound modes.

# See Also

 * [Binding to DataTable, DataSet or DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

 * [Binding to Array or ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})
