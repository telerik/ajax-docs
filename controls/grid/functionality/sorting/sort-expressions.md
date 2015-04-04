---
title: Sort Expressions
page_title: Sort Expressions | UI for ASP.NET AJAX Documentation
description: Sort Expressions
slug: grid/functionality/sorting/sort-expressions
tags: sort,expressions
published: True
position: 3
---

# Sort Expressions



The __GridTableView.SortExpressions__ collection specifies the sorting criteria for the table view. When the user clicks on a column, __RadGrid__ adds the __GridColumn.SortExpression__ string to the corresponding __GridTableView.SortExpressions__ collection. Removing the sorting removes an item from that collection.

You can set the __SortExpression__ property of each column to specify the field the grid adds to the __SortExpressions__ collection when the user clicks on the column header.

>caution You can also specify the type of the button that appears in the column header by setting the __HeaderButtonType__ property of the column object. The possible values for the __HeaderButtonType__ property are the three __GridHeaderButtonType__ values: "LinkButton", "PushButton", or "TextButton".
>


In addition to setting the __SortExpression__ property of each column, you can manipulate the __GridTableView.SortExpressions__ collection directly, to sort the grid items by one or more data-fields.

## Declarative sort expressions

You can set default sort expression for the __MasterTableView__ or a detail __GridTableView__ directly in the ASPX declaration of the grid. Simply add __GridSortExpression__ objects to the __SortExpressions__ property collection of the table view. Each __GridSortExpression__ object has two properties:

* __FieldName__ is the field to sort by. This should be the name of a single field from the data source. To sort by multiple fields, add additional __GridSortExpression__ objects to the collection.

* __SortOrder__ is the direction of the sort. It can be "Ascending" or "Descending":

````ASPNET
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



When the grid is first loaded on the page, it is sorted based on the __GridSortExpression__ objects in the __SortExpressions__ collection. If the __SortExpressions__ collection contains multiple __GridSortExpression__ objects, the table view is sorted first by the first __GridSortExpression__ in the collection, then by the second __GridSortExpression__ in the collection, and so on.

## Sorting Programmatically

You can manipulate the grid sort programmatically by creating instances of the __GridSortExpression__ class and adding them to the __SortExpressions__ collection:

>tabbedCode

````C#
	        GridSortExpression expression = new GridSortExpression();
	        expression.FieldName = "CompanyName";
	        expression.SortOrder = GridSortOrder.Descending;
	        RadGrid1.MasterTableView.SortExpressions.AddSortExpression(expression);
	        RadGrid1.MasterTableView.Rebind();
````
````VB.NET
	    Dim expression As GridSortExpression = New GridSortExpression()
	    expression.FieldName = "CompanyName"
	    expression.SortOrder = GridSortOrder.Descending
	    RadGrid1.MasterTableView.SortExpressions.AddSortExpression(expression)
	    RadGrid1.MasterTableView.Rebind()
````
>end

Sorting is handled internally by a DataView. Be sure that you specify the properties of the __GridSortExpression__ class properly, or the grid will throw an exception when it is data bound.

>note Items in the __SortExpressions__ collection are preserved in the view state for the __GridTableView__ at each hierarchy level.
>

