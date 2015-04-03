---
title: Sorting and Filtering
page_title: Sorting and Filtering | UI for ASP.NET AJAX Documentation
description: Sorting and Filtering
slug: listview/data-binding/client-side/sorting-and-filtering
tags: sorting,and,filtering
published: True
position: 3
---

# Sorting and Filtering



This article will introduce you to the specifics related to client-side sorting and filtering in RadListView, including description of the control's behavior during these operations and the API exposed for controlling them.

* __Sortinghttp://www.telerik.com/help/aspnet-ajax/listview-clientside-sorting-filtering.html#Section1_self__

* __Filteringhttp://www.telerik.com/help/aspnet-ajax/listview-clientside-sorting-filtering.html#Section2_self__

## Sorting a client-side bound RadListView

Sorting in RadListView is provided by a set of client-side APIs: __get_sortExpressions()__, __get_allowNaturalSort()__, __sort()__ and __clearSort()__.

The __RadListView.sort()__ method adds a sort expression to RadListView and automatically rebinds the control. If a sort expression with the specified name already exists, the sort order in the expression is toggled. If __get_allowNaturalSort()__ is true, a descending sort expression is removed from the sort expressions collection to apply the natural sort of the data.

The __RadListView.sort()__ method can also be used in the HTML template to create a sort button:

__RadListView.get_sortExpressions()__ returns a __Telerik.Web.UI.RadListViewSortExpressions__ object that provides methods for adding, removing and manipulating sort expressions in RadListView:


>caption Telerik.Web.UI.RadListViewSortExpressions members

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __add(field, order)__ |Adds a sort expression to the collection. If __field__ contains the sort order, __order__ can be omitted.Example: *listView.get_sortExpressions().add("ID", "ASC");*  *listView.get_sortExpressions().add("Name DESC");* |
| __remove(field)__ |Removes the sort expression with the specified field from the collection. __field__ can be the field name in the sort expression, or the entire sort expression. *Example:*  *listView.get_sortExpressions().remove("ID")* ; *listView.get_sortExpressions().remove("Name DESC");* |
| __getSortOrder(field)__ |Retrieves the sort order by a specified field name. *Example:*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().getSortOrder("Name"); //returns "DESC"* |
| __toggle(field)__ |Toggles the sort order of a specified field. If AllowNaturalSort is enabled, toggle from DESC order removes the expression. *Example:*  *listView.get_sortExpressions().toggle("ID"); //adds "ID ASC"*  *listView.get_sortExpressions().toggle("ID"); //changes to "ID DESC"* |
| __getItem(index)__ |Retrieves a sort expression by a specified index or field name. __index__ can be a number (indicating an index), or a string (indicating a field). *Example:*  *listView.get_sortExpressions().add("ID", "DESC");*  *listView.get_sortExpressions().add("Name", "ASC");*  *listView.get_sortExpressions().getItem(1); //returns "Name ASC"*  *listView.get_sortExpressions().getItem("ID"); //returns "ID DESC"* |
| __indexOf(field)__ |Retrieves the index of the expression for a specified field. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Date DESC");*  *listView.get_sortExpressions().indexOf("Date"); //returns 1* |
| __clear()__ |Clears the sort expressions in this collection.|
| __get_count()__ |Retrieves the number of expression in this collection.|
| __build()__ |Creates a __RadListViewSortExpressionBuilder__ instance that provides fluent APIs for building sort expressions.|
| __toList()__ |Converts this expression collection to a JSON array. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toList();//returns JSON Array: [ {FieldName: "ID", SortOrder: "Ascending"}, {FieldName: "Name", SortOrder: "Descending"} ]* |
| __toSql()__ |Converts this expression collection to an SQL string. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toSql(); //returns "ID ASC, Name DESC"* |
| __toLinq()__ |Converts this expression collection to a Dynamic LINQ WHERE expression. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toLinq(); //returns "ID, Name descending"* |
| __toOData()__ |Converts this expression collection to an OData $filter parameter. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toOData(); //returns "ID, Name desc"* |

The __to[Format]__ methods in the __RadListViewSortExpressions__ match the __SortParameterType__ values in the databinding settings in RadListView. The same formats are used by RadListView when sending sort and filter parameters to the web service.

## Filtering a client-side bound RadListView

For filtering, RadListView exposes the __get_filterExpressions()__, __filter()__ and __clearFilter()__ APIs.

The __filter()__ method adds a filter expresion to RadListView and rebinds it. If any previous filters exist, the new filter expression is added with an __AND__ logical operator.

The __clearFilter()__ method removes a filter expression by specified field name as a first parameter. If the parameter is omitted, all filter expressions are removed. RadListView automatically rebinds when __clearFilter()__ is called.

The property __get_filterExpressions()__ returns a __Telerik.Web.UI.RadListViewFilterExpressions__. instance This is a filter expressions collection with special APIs for adding, removing or retrieving filter expressions.


>caption Telerik.Web.UI.RadListViewFilterExpressions members

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __add(fieldName, filterFunction, filterValue)__ |Adds a filter expression with the specified field, function and value. Alternatively, the first parameter can be a __RadListViewFilterExpression__ instance. In this case the second and thir parameters are omitted.|
| __insert(index, fieldName, filterFunction, filterValue)__ |Inserts a filter expression with the specified field, function and value at the specified position. Alternatively, the first parameter can be a __RadListViewFilterExpression__ instance. In this case the second and thir parameters are omitted.|
| __remove(fieldName, filterFunction, filterValue)__ |Removes a filter expression with the specified field, function and value. Alternatively, the first parameter can be a __RadListViewFilterExpression__ instance. In this case the second and thir parameters are omitted.|
| __removeAt(index)__ |Removes a filter expression at the specified position.|
| __indexOf(fieldName, filterFunction, filterValue)__ |Retrieves a filter expression with a matching field name, filter function and value.|
| __getItem(index)__ |Returns the filter expression at the specified index.|
| __clear()__ |Removes all filters from this filter expressions collection.|
| __get_count()__ |Retrieves the number of filter expressions in this collection.|
| __build()__ |Returns an instance of __RadListViewFilterExpressionBuilder__ that provides fluent APIs for building filter expressions.|
| __toList()__ |Returns a JSON array containing all the filter expressions in this collection. A single filter expression in the array is represented by the following JSON object: *{field: "ID", filter: "EqualTo", value:4}* |
| __toSql()__ |Returns a string representation of the filter expressions in this collection in SQL format.|
| __toLinq()__ |Returns a string representation of the filter expressions in this collection in Dynamic LINQ format.|
| __toOData()__ |Returns a string representation of the filter expressions in this collection in OData format.|

The items of this collection are of type __Telerik.Web.UI.RadListViewFilterExpression__ and each represents a single filter expression. The APIs of this class allow getting information about the expression and manipulating it:


>caption Telerik.Web.UI.RadListViewFilterExpression members

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __get_fieldName()__ |Gets the field name of the expression.|
| __set_fieldName(value)__ |Sets the field name of this expression *Parameters:*  __value:__ The field name of the expression.|
| __get_filterFunction()__ |Gets the filter function of the expression.|
| __set_filterFunction(value)__ |Sets the filter function of this expression. *Parameters:*  __value:__ One of the Telerik.Web.UI.RadListViewFilterFunction enumeration values.|
| __get_value()__ |Gets the filter value of the expression.|
| __set_value(value)__ |Sets the filter value of this expression *Parameters:*  __value:__ The filter value of this expression.|
| __isEqualTo(fieldName, filterFunction, filterValue)__ |Returns a boolean value indicating whether the current expression is equal to or contains the specified parameters. *Parameters:*  __fieldName:__ The field name (string) or Telerik.Web.UI.RadListViewFilterExpression instance to compare with. __filterFunction:__ Optional: One of the Telerik.Web.UI.RadListViewFilterFunction. If the first parameter to this method is a Telerik.Web.UI.RadListViewFilterExpression instance, this parameter is not specified. __filterValue:__ Optional: The filter value to compare. If the first parameter to this method is a Telerik.Web.UI.RadListViewFilterExpression instance, this parameter is not specified.|
| __toObject()__ |Returns a JSON object representing this field expression The object has the following fields: {field: "ID", filter: "EqualTo", value: 7}.|
| __toSql()__ |Returns an SQL string representation of this expression.|
| __toLinq()__ |Returns a Dynamic LINQ string representation of this expression.|
| __toOData()__ |Returns an OData string representation of this expression.|

>caution Note that *RadListView does not perform any type conversion* on the filter values, so you need to ensure that the values are of the correct type when you pass them to the control. Otherwise, the filter expressions will not be serialized and converted to a different format correctly.
>


Of particular interest in the __RadListViewFilterExpressions__ set of APIs is the __build()__ method of the __RadListViewFilterExpressions__ class. build() returns a fluent expression builder instance that can be used for building hierarchical filter expressions connected by logical operators. Using this builder, you can quickly add filter expressions in RadListView:

	
          listView.get_filterExpressions().build().equalTo("CategoryID", 4).and().greaterThan("UnitPrice", 47);
          listView.rebind();
        



The above 2 statements add a pair of filter expression in RadListView and rebind it. Filter and sort expressions are then sent along with the paging parameters to your web service. You can use the generated filter expression to filter the data in your web service and return the result.

Here follows a list of all methods exposed by the __Telerik.Web.UI.RadListViewFilterExpressionBuilder__ class:

## Telerik.Web.UI.RadListViewFilterExpressionBuilder members

>note The methods below have two arguments:
> __fieldName__ : the field name of the expression.
> __filterValue__ : the filter value of the expression.
>



>caption  

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __equalTo(fieldName, filterValue)__ |Builds a filter expression for an "EqualTo" filter.|
| __notEqualTo(fieldName, filterValue)__ |Builds a filter expression for a "NotEqualTo" filter.|
| __greaterThan(fieldName, filterValue)__ |Builds a filter expression for a "GreaterThan" filter.|
| __greaterThanOrEqualTo(fieldName, filterValue)__ |Builds a filter expression for a "GreaterThanOrEqualTo" filter.|
| __contains(fieldName, filterValue)__ |Builds a filter expression for a "Contains" filter.|
| __startsWith(fieldName, filterValue)__ |Builds a filter expression for a "StartsWith" filter.|
| __endsWith(fieldName, filterValue)__ |Builds a filter expression for a "EndsWith" filter.|
| __lessThan(fieldName, filterValue)__ |Builds a filter expression for a "LessThan" filter.|
| __lessThanOrEqualTo(fieldName, filterValue)__ |>Builds a filter expression for a "LessThanOrEqualTo" filter.|

>note The methods below have a single arguments:
> __fieldName__ : the field name of the expression.
>



>caption  

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __isNull(fieldName)__ |Builds a filter expression for a "IsNull" filter.|
| __isNotNull(fieldName)__ |Builds a filter expression for a "NotIsNull" filter.|
| __isEmpty(fieldName)__ |Builds a filter expression for a "IsEmpty" filter.|
| __isNotEmpty(fieldName)__ |Builds a filter expression for a "NotIsEmpty" filter.|


>caption  

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __group(groupBuilderFunction)__ |Builds a filter expression for a "Group" filter. *Parameters:*  __groupBuilderFunction:__ The function that builds the expressions in the group. A Telerik.Web.UI.RadListViewFilterExpressionBuilder is passed as a first argument to the function.|

## Telerik.Web.UI.RadListViewFilterExpressionLogicBuilder class members


>caption  

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __and()__ |Groups filter expressions with an AND operator.|
| __or()__ |Groups filter expressions with an OR operator.|

## 

>note It is highly recommended to enable VS Intellisense for Javascript when building filter expressions, so that all fluent expression builder methods are available with Intellisense.
>


Using the fluent expression builder and the conversion methods of the filter collection, we can add complex nested filter sub-expressions and describe non-trivial filtering requirements:

	
          listView.get_filterExpressions()
          .clear()
          .build()
          .greaterThan("UnitPrice", 25)
          .and()
          .lessThan("UnitsInStock", 40)
          .or()
          .group(function(builder)
          {
          builder.notEqualTo("Discontinued", true)
          .and()
          .startsWith("ProductName", "I");
          });
          listView.rebind();
        



The above filter expression can be converted to various formats and sent to a web service for data filtration:#_List_

	
          [{
          "filter":"Or",
          "expressions":
          [
          {
          "filter":"And",
          "expressions":
          [
          {"field":"UnitPrice","filter":"GreaterThan","value":25},
          {"field":"UnitsInStock","filter":"LessThan","value":40}
          ]
          },
          {
          "filter":"And",
          "expressions":
          [
          {"field":"Discontinued","filter":"NotEqualTo","value":true},
          {"field":"ProductName","filter":"StartsWith","value":"I"}
          ]
          }
          ]
          }]
        

#_Linq_

	
          "((UnitPrice > 25 && UnitsInStock < 40) || (Discontinued <> true && ProductName.StartsWith("I")))"
        

#_Sql_

	
          "(([UnitPrice] > 25 AND [UnitsInStock] < 40) OR ([Discontinued] <> true AND [ProductName] LIKE 'I%'))"
        

#_OData_

	
          "((UnitPrice gt 25 and UnitsInStock lt 40) or (Discontinued ne true and startswith(ProductName,'I') eq true))"
        



>note When automatically binding to web services, the __FilterParameterType__ and __SortParameterType__ settings determine the format in which the filter and sort expressions will be sent to the web service.
>


# See Also

 * [Overview]({%slug listview/data-binding/client-side/overview%})
