---
title: Operating with RadListView FilterExpressions Manually
page_title: Operating with RadListView FilterExpressions Manually | RadListView for ASP.NET AJAX Documentation
description: Operating with RadListView FilterExpressions Manually
slug: listview/fuctionality/filtering/operating-with-radlistview-filterexpressions-manually
tags: operating,with,radlistview,filterexpressions,manually
published: True
position: 1
---

# Operating with RadListView FilterExpressions Manually



As of Q1 2010 Telerik RadListView has build-in server-side API for creating and applying filter expressions. It gives you the ability to filter the data displayed in a RadListView control without creating complex database queries.

## Adding FilterExpressions for RadListView

RadListView provides an intuitive way for building filter expressions through its FilterExpressions Add() and BuildExpression() methods listed below:


|  **Method**  |  **Return Type**  |  **Parameters**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **Add()** |RadListViewFilterExpressionCollection|RadListViewFilterExpression|Adds the specified as an argument filter expression to the RadListView FilterExpressions collection.|
| **BuildExpression()** |RadListViewFilterExpressionCollection|Action<RadListViewFilterExpressionFluentBuilder> (optional)|A helper method for building filter expression hierarchy in a fluent like manner.|

## RadListView FilterExpression Types

The following table describes all filter expression types you can use when building RadListView FilterExpressions:


|  **FilterExpression type**  |  **Description**  |
| ------ | ------ |
| **RadListViewContainsFilterExpression** |Represents Contains RadListView filter expression.|
| **RadListViewGreaterThanFilterExpression<T>** |Represents GreaterThan RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewGreaterThanOrEqualToFilterExpression<T>** |Represents GreaterThan or EqualTo RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewGroupFilterExpression** |Represents a group of filter expressions.|
| **RadListViewIsEmptyFilterExpression** |Represents IsEmpty RadListView filter expression.|
| **RadListViewIsNotEmptyFilterExpression** |Represents IsEmpty RadListView filter expression.|
| **RadListViewIsNotNullFilterExpression** |Represents IsNotNull RadListView filter expression.|
| **RadListViewIsNullFilterExpression** |Represents IsNull RadListView filter expression.|
| **RadListViewLessThanFilterExpression<T>** |Represents LessThan RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewLessThanOrEqualToFilterExpression<T>** |Represents LessThan or EqualTo RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewEqualToFilterExpression<T>** |Represents EqualTo RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewNotEqualToFilterExpression<T>** |Represents NotEqualTo RadListView filter expression where **T** is the type of the field on which filter will be applied.|
| **RadListViewStartsWithFilterExpression** |Represents StartsWith RadListView filter expression.|
| **RadListViewEndsWithFilterExpression** |Represents EndsWith RadListView filter expression.|

Here are some examples illustrating how you can use the above types to create filter expressions and add them to the RadListView FilterExpressions collection:



````C#
	     
	
	        RadListViewContainsFilterExpression expression1 = new
	        RadListViewContainsFilterExpression("CustomerID");
	        expression1.CurrentValue =
	        "ALFKI";             
	        RadListView1.FilterExpressions.Add(expression1);
	        RadListView1.FilterExpressions.Add(new
	        RadListViewGreaterThanFilterExpression<DateTime>("ShippedDate") {
	        CurrentValue = DateTime.Parse("7/10/1996") });
	        RadListView1.FilterExpressions.Add(
	            new
	        RadListViewGroupFilterExpression(RadListViewGroupFilterOperator.Or)
	            {
	                Expressions =
	                {
	                    new
	        RadListViewGreaterThanFilterExpression<DateTime>("ShippedDate"){CurrentValue
	        = DateTime.Parse("7/10/1996")},
	                    new
	        RadListViewEqualToFilterExpression<int>("OrderID"){CurrentValue =
	        42}                   
	                }
	            }
	        );
	
				
````
````VB.NET
	    Dim expression1 As RadListViewContainsFilterExpression = New RadListViewContainsFilterExpression("CustomerID")
	    expression1.CurrentValue = "ALFKI"
	    RadListView1.FilterExpressions.Add(expression1)
	    RadListView1.FilterExpressions.Add(New RadListViewGreaterThanFilterExpression(Of DateTime)("ShippedDate") 
	        With _{.CurrentValue = DateTime.Parse("7/10/1996")})
	    Dim group = New RadListViewGroupFilterExpression(RadListViewGroupFilterOperator.Or)
	    With group
	        .Expressions.Add(New RadListViewGreaterThanFilterExpression(Of DateTime)("ShippedDate") With {.CurrentValue = DateTime.Parse("7/10/1996")})
	        .Expressions.Add(New RadListViewEqualToFilterExpression(Of Integer)("OrderID") With {.CurrentValue = 42})
	    End With
	    RadListView1.FilterExpressions.Add(group) 
````


## BuildExpression() methods

Another possible approach for adding filter expressions to RadListView is using the BuildExpression() method and its methods listed here:


|  **Method**  |  **Parameters**  |  **Description**  |
| ------ | ------ | ------ |
| **Contains(string fieldName, string currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a Contains filter expression|
| **EqualTo<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds an EqualTo filter expression where **T** is the type of the field which will be filtered|
| **NotEqualTo<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a NotEqualTo filter expression where **T** is the type of the field which will be filtered|
| **GreaterThan<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a GreaterThan filter expression where **T** is the type of the field which will be filtered|
| **GreaterThanOrEqualTo<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a GreaterThanOrEqualTo filter expression where **T** is the type of the field which will be filtered|
| **Group(Action<RadListViewFilterExpressionFluentBuilder> groupBuilder)** | **groupBuilder** is the inner group instance|Adds a group of filter expressions|
| **IsEmpty(string fieldName)** | **fieldName** is the name of the field which will be filtered|Adds an IsEmpty filter expression|
| **IsNotEmpty(string fieldName)** | **fieldName** is the name of the field which will be filtered|Adds an IsNotEmpty filter expression|
| **IsNull(string fieldName)** | **fieldName** is the name of the field which will be filtered|Adds an IsNull filter expression|
| **IsNotNull(string fieldName)** | **fieldName** is the name of the field which will be filtered|Adds an IsNotNull filter expression|
| **LessThan<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a LessThan filter expression where **T** is the type of the field which will be filtered|
| **LessThanOrEqualTo<T>(string fieldName, T currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a LessThanOrEqualTo filter expression where **T** is the type of the field which will be filtered|
| **StartsWith(string fieldName, string currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a StartsWith filter|
| **EndsWith(string fieldName, string currentValue)** | **fieldName** is the name of the field which will be filtered; **currentValue** is the value to be filtered on|Adds a EndsWith filter|
| **And()** ||Adds an And operator between the filter expressions on its left and right side|
| **Or()** ||Adds an Or operator between the filter expressions on its left and right side|



The following examples illustrate how you can use the BuildExpression() methods to create RadListView filter expressions:



````C#
	     
	
	        RadListView1.FilterExpressions.BuildExpression()
	
	        .GreaterThan("ShippedDate", DateTime.Parse("7/10/1996"))
	
	        .Or().EqualTo("OrderID", 42).Build();
	
				
````
````VB.NET
	    RadListView1.FilterExpressions.BuildExpression()
	            .GreaterThan("ShippedDate", DateTime.Parse("7/10/1996"))
	            .Or().EqualTo("OrderID", 42).Build() 
````


>caution When you are using the BuildExpression() methods to add filter expressions as shown above, you need to call the **Build()** at the end so the filter expressions are built and added to the RadListView FilterExpressions collection. Note that the **Build()** method could be called only once per expressions building. To check if the **Build()** method is already called, you can use the **BuildExpression().IsBuild** property.
>




````C#
	     
	
	        RadListView1.FilterExpressions
	
	        .BuildExpression(expression => expression
	
	        .GreaterThan("ShippedDate", DateTime.Parse("7/10/1996"))
	
	        .Or().EqualTo("OrderID", 42)
	
	        .And().Group(group =>
	
	        group.IsNotEmpty("ShipCountry")
	
	        .And().Contains("ShipCountry", "G")
	
	        )
	
	        );
	
				
````
````VB.NET
	    RadListView1.FilterExpressions.BuildExpression(Function(expression As RadListViewFilterExpressionFluentBuilder)
	      expression.GreaterThan("ShippedDate", DateTime.Parse("7/10/1996")) _
	        .Or().EqualTo("OrderID", 42).And().Group(Function(group As RadListViewFilterExpressionFluentBuilder) _
	          group.IsNotEmpty("ShipCountry").And().Contains("ShipCountry", "G")))			
````


## RadListView filter expression enumerators

RadListView supplies the following enumerators to help you build the desired filter expressions:




| Enumerator | Values |
| ------ | ------ |
| **RadListViewFilterFunction** |Contains|
||EqualTo|
||GreaterThan|
||GreaterThanOrEqualTo|
||IsEmpty|
||IsNull|
||LessThan|
||LessThanOrEqualTo|
||NotEqualTo|
||NotIsEmpty|
||NotIsNull|
| **RadListViewGroupFilterOperator** |And|
||Or|

For a live example on how RadListView built-in filtering capabilities can be used, review the online demo [ here ](http://demos.telerik.com/aspnet-ajax/listview/examples/filtering/defaultcs.aspx).
