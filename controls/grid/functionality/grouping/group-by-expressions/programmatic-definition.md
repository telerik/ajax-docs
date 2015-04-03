---
title: Programmatic Definition
page_title: Programmatic Definition | UI for ASP.NET AJAX Documentation
description: Programmatic Definition
slug: grid/functionality/grouping/group-by-expressions/programmatic-definition
tags: programmatic,definition
published: True
position: 1
---

# Programmatic Definition



## 

Each __GridTableView__ object has a __GroupByExpressions__ property. __GroupByExpressions__ is a collection of group expressions (__GridGroupByExpression__ objects).

Each __GridGroupByExpression__ object in this collection defines a set of groups in the corresponding table. At the top of each group of items is a __GridGroupHeaderItem__, which can display information about the common properties of the group items or aggregate values that summarize the items in the group.

You can set the __GroupByExpressions__ property in the code-behind to specify the grouping for the tables in the grid. When setting __GroupByExpressions__ at runtime.

1. For each set of groups, generate a new instance of __GridGroupByExpression__.

1. For each __GridGroupByExpression__ object, generate instances of __GridGroupByField__ for each field that is used to group data and for each field that provides a value displayed in the group headers.

1. Set the properties of the __GridGroupByField__ objects to identify the fields they represent and the display properties for those fields. You can set any of the following properties:

* __FieldName__ specifies the name of a field in the data source (meaningful for items both from the __SelectFields__ and __GroupByFields__ collections)

* __FieldAlias__ specifies an alias for representing the field's name (meaningful for items from the __SelectFields__ collection only)

* __Aggregate__ specifies a __GridAggregateFunction__ value. This property is only for fields displayed in the group header (meaningful for items from the __SelectFields__ collection only)

* __HeaderText__ specifies the name to use for the field when it appears in the group header and in the group panel (meaningful for items from the __SelectFields__ collection only)

* __HeaderValueSeparator__ specifies a string that appears in the group header between the header text and the value (or aggregated value) - meaningful for items from the __SelectFields__ collection only

* __FormatString__ specifies a format string for formatting field values when they appear in the group header (meaningful for items from the __SelectFields__ collection only)

* __SortOrder__ specifies how group values are sorted. Its value can be "Ascending" or "Descending" (meaningful for items from the __GroupByFields__collection only)

1. Add the __GridGroupByField__ objects that represent fields in the group header to the __SelectFields__ collection. Add __GridGroupByField__ objects that represent how the data is grouped to the __GroupbyFields__ collection.

1. Add the __GridGroupByExpression__ object to the __GroupByExpressions__ collection of the __MasterTableView__ or detail __GridTableView__.

>caution Note that a __FieldAlias__ for the __GroupByFields__ should not be set as it can cause unexpected behavior. An alias can only be set for the __SelectFields__ .
>


>tabbedCode

````C#
	
	        GridGroupByExpression expression = new GridGroupByExpression();
	        GridGroupByField gridGroupByField = new GridGroupByField();
	        // SelectFields values (appear in header)
	        gridGroupByField = new GridGroupByField();
	        gridGroupByField.FieldName = "EmployeeID";
	        gridGroupByField.HeaderText = "Employee";
	        gridGroupByField.HeaderValueSeparator = " for current group: ";
	        gridGroupByField.FormatString = "<strong>{0}</strong>";
	        expression.SelectFields.Add(gridGroupByField);
	        gridGroupByField = new GridGroupByField();
	        gridGroupByField.FieldName = "Freight";
	        gridGroupByField.HeaderText = "Total shipping cost is ";
	        gridGroupByField.HeaderValueSeparator = "";
	        gridGroupByField.FormatString = "<strong>{0:0.00}</strong>";
	        gridGroupByField.Aggregate = GridAggregateFunction.Sum;
	        expression.SelectFields.Add(gridGroupByField);
	        //GroupByFields values    (group data)
	        gridGroupByField = new GridGroupByField();
	        gridGroupByField.FieldName = "EmployeeID";
	        expression.GroupByFields.Add(gridGroupByField);
	        tableViewOrders.GroupByExpressions.Add(expression);
	
````



````VB.NET
	    Dim expression As GridGroupByExpression = New GridGroupByExpression
	    Dim gridGroupByField As GridGroupByField = New GridGroupByField
	    'SelectFields values (appear in header)
	    gridGroupByField = New GridGroupByField
	    gridGroupByField.FieldName = "EmployeeID"
	    gridGroupByField.HeaderText = "Employee"
	    gridGroupByField.HeaderValueSeparator = " for current group: "
	    gridGroupByField.FormatString = "<strong>{0}</strong>"
	    expression.SelectFields.Add(gridGroupByField)
	    gridGroupByField = New GridGroupByField
	    gridGroupByField.FieldName = "Freight"
	    gridGroupByField.HeaderText = "Total shipping cost is "
	    gridGroupByField.HeaderValueSeparator = ""
	    gridGroupByField.FormatString = "<strong>{0:0.00}</strong>"
	    gridGroupByField.Aggregate = GridAggregateFunction.Sum
	    expression.SelectFields.Add(gridGroupByField)
	    'GroupByFields values (group data)
	    gridGroupByField = New GridGroupByField
	    gridGroupByField.FieldName = "EmployeeID"
	    expression.GroupByFields.Add(gridGroupByField)
	    tableViewOrders.GroupByExpressions.Add(expression) 			
````


>end
