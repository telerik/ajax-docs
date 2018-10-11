---
title: Overview
page_title: Data Binding Overview | RadToolBar for ASP.NET AJAX Documentation
description: Overview
slug: toolbar/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview


**RadToolBar** fully supports binding to various types of data sources:

* [DataTable, DataSet, DataView]({%slug toolbar/data-binding/binding-to-datatable%})

* [ASP 2.0 DataSource types]({%slug toolbar/data-binding/binding-to-asp-datasource-components%})

* [Array, ArrayList]({%slug toolbar/data-binding/binding-to-array-or-arraylist-%})

>tip Data sources can support both hierarchical and non-hierarchical structures. However, **RadToolBar** only works with a flat structure.
>


## Databinding Properties and Methods

The following properties and methods are used when binding the toolbar to a data source:

* **DataSource** property - Set to an instance of your data source. This is mandatory when binding the toolbar at runtime.

* **DataSourceID** property - Set to the ID of your data source. This is mandatory when binding the toolbar declaratively.

* **DataMember** property - If the data source is a **DataSet** and **DataMember** is set, then the toolbar is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, the toolbar is bound to the first **DataTable** in the **DataSet**.

* **DataTextField** property - This is the field name from the data source to bind to the **Text** property.

* **DataValueField** property - This is the field name from the data source to bind to the **Value** property.

* **DataBind** method - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

>tip Note, that unlike RadMenu or RadPanelbar, RadToolBar does not have **DataFieldId** and **DataFieldParentId** properties to establish items' hierarchy such as in a DropDown button.
>


>tip If you need to map additional fields from the Data Source to properties of the toolbar button, you can use the **ButtonDataBound** event. See [Binding To ASP DataSource Components]({%slug toolbar/data-binding/binding-to-asp-datasource-components%}) for an example.
>


## Appending Data Bound Items

**RadToolBar** exposes the **AppendDataBoundItems** property (**False** by default). If you bind the toolbar using the **DataBind** method, all toolbar buttons are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the buttons that are already present in the toolbar. This lets you bind **RadToolBar** to multiple data sources or use both unbound and bound modes.

## Using Templates with Data-bound Buttons

You can also use templates with a data-bound toolbar. To bind template buttons to column values, use DataBinder.Eval expressions in the template's definition:

````C#
<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
````


Note that you use **Container.DataItem** to access the toolbar button when it is in a bound mode. The toolbar button must already be bound before template binding can work.

# See Also

 * [Declaring Items Statically at Design Time]({%slug toolbar/radtoolbar-items/declaring-items-statically-at-design-time%})

 * [Loading Items from XML]({%slug toolbar/radtoolbar-items/loading-items-from-xml%})

 * [Working With Items at the Server]({%slug toolbar/radtoolbar-items/working-with-items-at-the-server%})

 * [Working With Items at the Client]({%slug toolbar/radtoolbar-items/working-with-items-at-the-client%})

 * [Data Binding Expressions]({%slug toolbar/templates/data-binding-expressions%})
