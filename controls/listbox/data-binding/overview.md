---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listbox/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadListBox__ fully supports binding to various types of data sources:

* [OData]({%slug listbox/data-binding/binding-to-odata%})

* [DataTable, DataSet, DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

* [ASP.NET 2.0 DataSource types]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})

* [Array, ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

>note Data sources can support both hierarchical and non-hierarchical structures. However, __RadListBox__ only works with a flat structure. Items cannot contain children.
>


## Databinding Properties and Methods

The following properties and methods are used when binding the ListBox to a data source:

* __DataSource__ property - Set to an instance of your data source. This is mandatory when binding the ListBox at runtime.

* __DataSourceID__ property - Set to the ID of your data source. This is mandatory when binding the ListBox declaratively.

* __DataMember__ property - If the data source is a __DataSet__ and __DataMember__ is set, then the ListBox is bound to the __DataTable__ with the respective name in the __DataSet__. If __DataMember__ is not set, the ListBox is bound to the first __DataTable__ in the __DataSet__.

* __DataTextField__ property - This is the field name from the data source to bind to the __Text__ property of the items.

* __DataValueField__ property - This is the field name from the data source to bind to the __Value__ property of the items.

* __DataKeyField__ property - This is the field name from the data source that is the primary key. It must be set when reordering, transferring or deleting are enabled __and____AllowAutomaticUpdates="True"__.

* __DataSortField__ property - This is the field name from the data source that determines sort order (e.g. the select query is sorted by this column). This property and the __DataKeyField__ properties must be set in order the RadListBox to perform reorders automatically (__AllowAutomaticUpdates="True")__.

* __DataBind__ method - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

If you need to map additional fields from the Data Source to properties of the ListBox item, you can use the __ItemDataBound__ event. See [inding To ASP DataSource Components]({%slug listbox/data-binding/overview%})for an example.

## Appending Data Bound Items

__RadListBox__ exposes the __AppendDataBoundItems__ property __(False__ by default). If you bind the ListBox using the __DataBind__ method, all ListBox items are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the items that are already present in the ListBox. This lets you bind __RadListBox__ to multiple data sources or use both unbound and bound modes.

# See Also

 * [Binding to DataTable, DataSet or DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

 * [Binding to Array or ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})
