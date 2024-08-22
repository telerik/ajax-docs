---
title: How to bind RadGrid properly on server-side
description: Check out which are the recommended binding methods that allow performing complex operations with RadGrid.
type: how-to
page_title: How to bind RadGrid properly on server-side
slug: how-to-bind-radgrid-properly-on-server-side
position: 
tags: RadGrid
res_type: kb
---

## Description

Occasionally, some features provided by RadGrid like filtering, sorting or exporting can malfunction without any obvious reason. There is a high chance for this issue to be fixed by implementing a proper way of binding.

## Solution

>important Please make sure you are not using **DataBind()** method to bind the grid.
>

Performing complex grid operations such as Inserting, Deleting, Updating, Hierarchy relations, Grouping, Exporting, Paging, Sorting, Filtering, etc. require accommodating appropriate database operations. Therefore, we suggest you avoid [Simple Databinding]({%slug grid/data-binding/server-side-binding/simple-data-binding%}) and strongly recommend the use of more advanced data binding methods, which automatically handle the aforementioned functions:

- **Declarative DataSource** (DataSourceID property), check out:
    - [Declarative DataSource]({%slug grid/data-binding/server-side-binding/declarative-datasource%}) - documentation article
    - [Declarative Relations](https://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarative-relations/defaultcs.aspx) - live demo
- **Programmatic Data Binding** ([NeedDataSource event]({%slug grid/server-side-programming/events/needdatasource%}), and [DetailTableDataBind event]({%slug grid/server-side-programming/events/detailtabledatabind%}) for hierarchy). You should set the DataSource property only within these event handlers, check out:
    - [Programmatic Data Binding Using the NeedDataSource Event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}) - documentation article
    - [Programmatic Hierarchy Binding](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/programmatic-hierarchy/defaultcs.aspx) - live demo

In some scenarios it may be necessary the grid to be refreshed explicitly upon some external action - in such cases please choose to use just the **Rebind()** method, which will refresh the grid content.

## See Also

 * [Declarative DataSource]({%slug grid/data-binding/server-side-binding/declarative-datasource%})

 * [Declarative Relations - demo](https://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarative-relations/defaultcs.aspx)

 * [NeedDataSource event]({%slug grid/server-side-programming/events/needdatasource%})

 * [DetailTableDataBind event]({%slug grid/server-side-programming/events/detailtabledatabind%})

 * [Programmatic Data Binding Using the NeedDataSource Event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%})

 * [Programmatic Hierarchy Binding - demo](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/programmatic-hierarchy/defaultcs.aspx)

