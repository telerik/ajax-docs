---
title: Sort Expressions
page_title: Sort Expressions - RadGrid
description: Check our Web Forms article about Sort Expressions.
slug: grid/functionality/sorting/sort-expressions
tags: sort,expressions
published: True
position: 3
---

# Sort Expressions



The **GridTableView.SortExpressions** collection specifies the sorting criteria for the table view. When the user clicks on a column, **RadGrid** adds the **GridColumn.SortExpression** string to the corresponding **GridTableView.SortExpressions** collection. Removing the sorting removes an item from that collection.

You can set the **SortExpression** property of each column to specify the field the grid adds to the **SortExpressions** collection when the user clicks on the column header.

>caution You can also specify the type of the button that appears in the column header by setting the **HeaderButtonType** property of the column object. The possible values for the **HeaderButtonType** property are the three **GridHeaderButtonType** values: "LinkButton", "PushButton", or "TextButton".
>


In addition to setting the **SortExpression** property of each column, you can manipulate the **GridTableView.SortExpressions** collection directly, to sort the grid items by one or more data-fields.

## Declarative sort expressions

You can set default sort expression for the **MasterTableView** or a detail **GridTableView** directly in the ASPX declaration of the grid. Simply add **GridSortExpression** objects to the **SortExpressions** property collection of the table view. Each **GridSortExpression** object has two properties:

* **FieldName** is the field to sort by. This should be the name of a single field from the data source. To sort by multiple fields, add additional **GridSortExpression** objects to the collection.

* **SortOrder** is the direction of the sort. It can be "Ascending" or "Descending":

````ASP.NET
<MasterTableView>
      ...
    <SortExpressions>
          <telerik:GridSortExpression FieldName="CompanyName" SortOrder="Ascending" />
    </SortExpressions>
    ...
    <DetailTables>
        <GridTableView>
            ...
            <SortExpressions>
                <telerik:GridSortExpression FieldName="OrderDate" SortOrder="Descending" />
            </SortExpressions>
           ...
        </GridTableView>
    </DetailTables>
</MasterTableView>
````



When the grid is first loaded on the page, it is sorted based on the **GridSortExpression** objects in the **SortExpressions** collection. If the **SortExpressions** collection contains multiple **GridSortExpression** objects, the table view is sorted first by the first **GridSortExpression** in the collection, then by the second **GridSortExpression** in the collection, and so on.

## Sorting Programmatically

You can manipulate the grid sort programmatically by creating instances of the **GridSortExpression** class and adding them to the **SortExpressions** collection:



````C#
GridSortExpression expression = new GridSortExpression();
expression.FieldName = "CompanyName";
expression.SortOrder = GridSortOrder.Descending;
RadGrid1.MasterTableView.SortExpressions.AddSortExpression(expression);
RadGrid1.MasterTableView.Rebind();
````
````VB
Dim expression As GridSortExpression = New GridSortExpression()
expression.FieldName = "CompanyName"
expression.SortOrder = GridSortOrder.Descending
RadGrid1.MasterTableView.SortExpressions.AddSortExpression(expression)
RadGrid1.MasterTableView.Rebind()
````


Sorting is handled internally by a DataView. Be sure that you specify the properties of the **GridSortExpression** class properly, or the grid will throw an exception when it is data bound.

>note Items in the **SortExpressions** collection are preserved in the view state for the **GridTableView** at each hierarchy level.
>

