---
title: Programmatic Definition
page_title: Programmatic Definition | RadGrid for ASP.NET AJAX Documentation
description: Programmatic Definition
slug: grid/functionality/grouping/group-by-expressions/programmatic-definition
tags: programmatic,definition
published: True
position: 1
---

# Programmatic Definition



## 

Each **GridTableView** object has a **GroupByExpressions** property. **GroupByExpressions** is a collection of group expressions (**GridGroupByExpression** objects).

Each **GridGroupByExpression** object in this collection defines a set of groups in the corresponding table. At the top of each group of items is a **GridGroupHeaderItem**, which can display information about the common properties of the group items or aggregate values that summarize the items in the group.

You can set the **GroupByExpressions** property in the code-behind to specify the grouping for the tables in the grid. When setting **GroupByExpressions** at runtime.

1. For each set of groups, generate a new instance of **GridGroupByExpression**.

1. For each **GridGroupByExpression** object, generate instances of **GridGroupByField** for each field that is used to group data and for each field that provides a value displayed in the group headers.

1. Set the properties of the **GridGroupByField** objects to identify the fields they represent and the display properties for those fields. You can set any of the following properties:

* **FieldName** specifies the name of a field in the data source (meaningful for items both from the **SelectFields** and **GroupByFields** collections)

* **FieldAlias** specifies an alias for representing the field's name (meaningful for items from the **SelectFields** collection only)

* **Aggregate** specifies a **GridAggregateFunction** value. This property is only for fields displayed in the group header (meaningful for items from the **SelectFields** collection only)

* **HeaderText** specifies the name to use for the field when it appears in the group header and in the group panel (meaningful for items from the **SelectFields** collection only)

* **HeaderValueSeparator** specifies a string that appears in the group header between the header text and the value (or aggregated value) - meaningful for items from the **SelectFields** collection only

* **FormatString** specifies a format string for formatting field values when they appear in the group header (meaningful for items from the **SelectFields** collection only)

* **SortOrder** specifies how group values are sorted. Its value can be "Ascending" or "Descending" (meaningful for items from the **GroupByFields**collection only)

1. Add the **GridGroupByField** objects that represent fields in the group header to the **SelectFields** collection. Add **GridGroupByField** objects that represent how the data is grouped to the **GroupbyFields** collection.

1. Add the **GridGroupByExpression** object to the **GroupByExpressions** collection of the **MasterTableView** or detail **GridTableView**.

>caution Note that a **FieldAlias** for the **GroupByFields** should not be set as it can cause unexpected behavior. An alias can only be set for the **SelectFields** .
>




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

