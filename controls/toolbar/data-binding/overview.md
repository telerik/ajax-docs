---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: toolbar/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadToolBar__ fully supports binding to various types of data sources:

* [DataTable, DataSet, DataView]({%slug toolbar/data-binding/binding-to-datatable%})

* [ASP 2.0 DataSource types]({%slug toolbar/data-binding/binding-to-asp-datasource-components%})

* [Array, ArrayList]({%slug toolbar/data-binding/binding-to-array-or-arraylist-%})

>note Data sources can support both hierarchical and non-hierarchical structures. However, __RadToolBar__ only works with a flat structure.
>


## Databinding Properties and Methods

The following properties and methods are used when binding the toolbar to a data source:

* __DataSource__ property - Set to an instance of your data source. This is mandatory when binding the toolbar at runtime.

* __DataSourceID__ property - Set to the ID of your data source. This is mandatory when binding the toolbar declaratively.

* __DataMember__ property - If the data source is a __DataSet__ and __DataMember__ is set, then the toolbar is bound to the __DataTable__ with the respective name in the __DataSet__. If __DataMember__ is not set, the toolbar is bound to the first __DataTable__ in the __DataSet__.

* __DataTextField__ property - This is the field name from the data source to bind to the __Text__ property.

* __DataValueField__ property - This is the field name from the data source to bind to the __Value__ property.

* __DataBind__ method - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

>note Note, that unlike RadMenu or RadPanelbar, RadToolBar does not have __DataFieldId__ and __DataFieldParentId__ properties to establish items' hierarchy such as in a DropDown button.
>


>note If you need to map additional fields from the Data Source to properties of the toolbar button, you can use the __ButtonDataBound__ event. See[Binding To ASP DataSource Components]({%slug toolbar/data-binding/binding-to-asp-datasource-components%})for an example.
>


## Appending Data Bound Items

__RadToolBar__ exposes the __AppendDataBoundItems__ property (__False__ by default). If you bind the toolbar using the __DataBind__ method, all toolbar buttons are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the buttons that are already present in the toolbar. This lets you bind __RadToolBar__ to multiple data sources or use both unbound and bound modes.

## Using Templates with Data-bound Buttons

You can also use templates with a data-bound toolbar. To bind template buttons to column values, use DataBinder.Eval expressions in the template's definition:

````C#
	    <%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
````



Note that you use __Container.DataItem__ to access the toolbar button when it is in a bound mode. The toolbar button must already be bound before template binding can work.

# See Also

 * [Declaring Items Statically at Design Time]({%slug toolbar/radtoolbar-items/declaring-items-statically-at-design-time%})

 * [Loading Items from XML]({%slug toolbar/radtoolbar-items/loading-items-from-xml%})

 * [Working With Items at the Server]({%slug toolbar/radtoolbar-items/working-with-items-at-the-server%})

 * [Working With Items at the Client]({%slug toolbar/radtoolbar-items/working-with-items-at-the-client%})

 * [Data Binding Expressions]({%slug toolbar/templates/data-binding-expressions%})
