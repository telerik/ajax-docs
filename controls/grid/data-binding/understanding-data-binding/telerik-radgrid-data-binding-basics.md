---
title: Telerik RadGrid Data Binding Basics
page_title: Telerik RadGrid Data Binding Basics | RadGrid for ASP.NET AJAX Documentation
description: Telerik RadGrid Data Binding Basics
slug: grid/data-binding/understanding-data-binding/telerik-radgrid-data-binding-basics
tags: telerik,radgrid,data,binding,basics
published: True
position: 0
---

# Telerik RadGrid Data Binding Basics



**RadGrid** is a component that displays data obtained from a database or other data source. The data is presented in tabular view.

There are three ways to bind the grid to a database:

* [Using declarative data source controls]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%}) - By using declarative data source controls (introduced in ASP.NET 2.0), you can bind the grid declaratively, with no coding necessary.

* [Using the NeedDataSource event]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%}) - **RadGrid** calls this event each time it needs a data source.

* [DataGrid-like binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding%}) - You can set the **DataSource** property manually in the control declaration. This property specifies the database, which is then used as a source for the grid.

>note When binding a grid by setting the **DataSource** property, you can set the **DataSource** property to an instance of any of the following types:
>
*  **DataSet** , **DataTable** , or **DataView** 
* Array of **DataRow** 
* Any object collection that implements the **IListSource** , **IList** , **IEnumerable** , or **ICustomTypeDescriptor** interface.>


## Hierarchical grids

In a hierarchical grid, detail tables must be bound separately from their parent tables, using a separate data source. When binding detail tables, you must also manage the relationship of the records in the detail data source to the parent table. There are two methods for managing this relationship:

* [Using declarative relations]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-declarative-relations%})

* [Using the DetailTableDataBind event]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-detailtabledatabind-event%}).
