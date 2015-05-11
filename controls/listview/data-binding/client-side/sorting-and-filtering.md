---
title: Sorting and Filtering
page_title: Sorting and Filtering | RadListView for ASP.NET AJAX Documentation
description: Sorting and Filtering
slug: listview/data-binding/client-side/sorting-and-filtering
tags: sorting,and,filtering
published: True
position: 3
---

# Sorting and Filtering



This article will introduce you to the specifics related to client-side sorting and filtering in RadListView, including description of the control's behavior during these operations and the API exposed for controlling them.

* **Sorting
http://www.telerik.com/help/aspnet-ajax/listview-clientside-sorting-filtering.html#Section1_self**

* **Filtering
http://www.telerik.com/help/aspnet-ajax/listview-clientside-sorting-filtering.html#Section2_self**

## Sorting a client-side bound RadListView

Sorting in RadListView is provided by a set of client-side APIs: **get_sortExpressions()**, **get_allowNaturalSort()**, **sort()** and **clearSort()**.

The **RadListView.sort()** method adds a sort expression to RadListView and automatically rebinds the control. If a sort expression with the specified name already exists, the sort order in the expression is toggled. If **get_allowNaturalSort()** is true, a descending sort expression is removed from the sort expressions collection to apply the natural sort of the data.

The **RadListView.sort()** method can also be used in the HTML template to create a sort button:

**RadListView.get_sortExpressions()** returns a **Telerik.Web.UI.RadListViewSortExpressions** object that provides methods for adding, removing and manipulating sort expressions in RadListView:


>caption Telerik.Web.UI.RadListViewSortExpressions members

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **add(field, order)** |Adds a sort expression to the collection. If **field** contains the sort order, **order** can be omitted.Example: *listView.get_sortExpressions().add("ID", "ASC");*  *listView.get_sortExpressions().add("Name DESC");* |
| **remove(field)** |Removes the sort expression with the specified field from the collection. **field** can be the field name in the sort expression, or the entire sort expression. *Example:*  *listView.get_sortExpressions().remove("ID")* ; *listView.get_sortExpressions().remove("Name DESC");* |
| **getSortOrder(field)** |Retrieves the sort order by a specified field name. *Example:*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().getSortOrder("Name"); //returns "DESC"* |
| **toggle(field)** |Toggles the sort order of a specified field. If AllowNaturalSort is enabled, toggle from DESC order removes the expression. *Example:*  *listView.get_sortExpressions().toggle("ID"); //adds "ID ASC"*  *listView.get_sortExpressions().toggle("ID"); //changes to "ID DESC"* |
| **getItem(index)** |Retrieves a sort expression by a specified index or field name. **index** can be a number (indicating an index), or a string (indicating a field). *Example:*  *listView.get_sortExpressions().add("ID", "DESC");*  *listView.get_sortExpressions().add("Name", "ASC");*  *listView.get_sortExpressions().getItem(1); //returns "Name ASC"*  *listView.get_sortExpressions().getItem("ID"); //returns "ID DESC"* |
| **indexOf(field)** |Retrieves the index of the expression for a specified field. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Date DESC");*  *listView.get_sortExpressions().indexOf("Date"); //returns 1* |
| **clear()** |Clears the sort expressions in this collection.|
| **get_count()** |Retrieves the number of expression in this collection.|
| **build()** |Creates a **RadListViewSortExpressionBuilder** instance that provides fluent APIs for building sort expressions.|
| **toList()** |Converts this expression collection to a JSON array. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toList();//returns JSON Array: [ {FieldName: "ID", SortOrder: "Ascending"}, {FieldName: "Name", SortOrder: "Descending"} ]* |
| **toSql()** |Converts this expression collection to an SQL string. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toSql(); //returns "ID ASC, Name DESC"* |
| **toLinq()** |Converts this expression collection to a Dynamic LINQ WHERE expression. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toLinq(); //returns "ID, Name descending"* |
| **toOData()** |Converts this expression collection to an OData $filter parameter. *Example:*  *listView.get_sortExpressions().add("ID ASC");*  *listView.get_sortExpressions().add("Name DESC");*  *listView.get_sortExpressions().toOData(); //returns "ID, Name desc"* |

The **to[Format]** methods in the **RadListViewSortExpressions** match the **SortParameterType** values in the databinding settings in RadListView. The same formats are used by RadListView when sending sort and filter parameters to the web service.

## Filtering a client-side bound RadListView

For filtering, RadListView exposes the **get_filterExpressions()**, **filter()** and **clearFilter()** APIs.

The **filter()** method adds a filter expression to RadListView and rebinds it. If any previous filters exist, the new filter expression is added with an **AND** logical operator.

The **clearFilter()** method removes a filter expression by specified field name as a first parameter. If the parameter is omitted, all filter expressions are removed. RadListView automatically rebinds when **clearFilter()** is called.

The property **get_filterExpressions()** returns a **Telerik.Web.UI.RadListViewFilterExpressions**. instance This is a filter expressions collection with special APIs for adding, removing or retrieving filter expressions.


>caption Telerik.Web.UI.RadListViewFilterExpressions members

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **add(fieldName, filterFunction, filterValue)** |Adds a filter expression with the specified field, function and value. Alternatively, the first parameter can be a **RadListViewFilterExpression** instance. In this case the second and thir parameters are omitted.|
| **insert(index, fieldName, filterFunction, filterValue)** |Inserts a filter expression with the specified field, function and value at the specified position. Alternatively, the first parameter can be a **RadListViewFilterExpression** instance. In this case the second and thir parameters are omitted.|
| **remove(fieldName, filterFunction, filterValue)** |Removes a filter expression with the specified field, function and value. Alternatively, the first parameter can be a **RadListViewFilterExpression** instance. In this case the second and thir parameters are omitted.|
| **removeAt(index)** |Removes a filter expression at the specified position.|
| **indexOf(fieldName, filterFunction, filterValue)** |Retrieves a filter expression with a matching field name, filter function and value.|
| **getItem(index)** |Returns the filter expression at the specified index.|
| **clear()** |Removes all filters from this filter expressions collection.|
| **get_count()** |Retrieves the number of filter expressions in this collection.|
| **build()** |Returns an instance of **RadListViewFilterExpressionBuilder** that provides fluent APIs for building filter expressions.|
| **toList()** |Returns a JSON array containing all the filter expressions in this collection. A single filter expression in the array is represented by the following JSON object: *{field: "ID", filter: "EqualTo", value:4}* |
| **toSql()** |Returns a string representation of the filter expressions in this collection in SQL format.|
| **toLinq()** |Returns a string representation of the filter expressions in this collection in Dynamic LINQ format.|
| **toOData()** |Returns a string representation of the filter expressions in this collection in OData format.|

The items of this collection are of type **Telerik.Web.UI.RadListViewFilterExpression** and each represents a single filter expression. The APIs of this class allow getting information about the expression and manipulating it:


>caption Telerik.Web.UI.RadListViewFilterExpression members

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **get_fieldName()** |Gets the field name of the expression.|
| **set_fieldName(value)** |Sets the field name of this expression *Parameters:*  **value:** The field name of the expression.|
| **get_filterFunction()** |Gets the filter function of the expression.|
| **set_filterFunction(value)** |Sets the filter function of this expression. *Parameters:*  **value:** One of the Telerik.Web.UI.RadListViewFilterFunction enumeration values.|
| **get_value()** |Gets the filter value of the expression.|
| **set_value(value)** |Sets the filter value of this expression *Parameters:*  **value:** The filter value of this expression.|
| **isEqualTo(fieldName, filterFunction, filterValue)** |Returns a boolean value indicating whether the current expression is equal to or contains the specified parameters. *Parameters:*  **fieldName:** The field name (string) or Telerik.Web.UI.RadListViewFilterExpression instance to compare with. **filterFunction:** Optional: One of the Telerik.Web.UI.RadListViewFilterFunction. If the first parameter to this method is a Telerik.Web.UI.RadListViewFilterExpression instance, this parameter is not specified. **filterValue:** Optional: The filter value to compare. If the first parameter to this method is a Telerik.Web.UI.RadListViewFilterExpression instance, this parameter is not specified.|
| **toObject()** |Returns a JSON object representing this field expression The object has the following fields: {field: "ID", filter: "EqualTo", value: 7}.|
| **toSql()** |Returns an SQL string representation of this expression.|
| **toLinq()** |Returns a Dynamic LINQ string representation of this expression.|
| **toOData()** |Returns an OData string representation of this expression.|

>caution Note that *RadListView does not perform any type conversion* on the filter values, so you need to ensure that the values are of the correct type when you pass them to the control. Otherwise, the filter expressions will not be serialized and converted to a different format correctly.
>


Of particular interest in the **RadListViewFilterExpressions** set of APIs is the **build()** method of the **RadListViewFilterExpressions** class. build() returns a fluent expression builder instance that can be used for building hierarchical filter expressions connected by logical operators. Using this builder, you can quickly add filter expressions in RadListView:


          listView.get_filterExpressions().build().equalTo("CategoryID", 4).and().greaterThan("UnitPrice", 47);
          listView.rebind();




The above 2 statements add a pair of filter expression in RadListView and rebind it. Filter and sort expressions are then sent along with the paging parameters to your web service. You can use the generated filter expression to filter the data in your web service and return the result.

Here follows a list of all methods exposed by the **Telerik.Web.UI.RadListViewFilterExpressionBuilder** class:

## Telerik.Web.UI.RadListViewFilterExpressionBuilder members

>note The methods below have two arguments:
> **fieldName** : the field name of the expression.
> **filterValue** : the filter value of the expression.
>



>caption  

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **equalTo(fieldName, filterValue)** |Builds a filter expression for an "EqualTo" filter.|
| **notEqualTo(fieldName, filterValue)** |Builds a filter expression for a "NotEqualTo" filter.|
| **greaterThan(fieldName, filterValue)** |Builds a filter expression for a "GreaterThan" filter.|
| **greaterThanOrEqualTo(fieldName, filterValue)** |Builds a filter expression for a "GreaterThanOrEqualTo" filter.|
| **contains(fieldName, filterValue)** |Builds a filter expression for a "Contains" filter.|
| **startsWith(fieldName, filterValue)** |Builds a filter expression for a "StartsWith" filter.|
| **endsWith(fieldName, filterValue)** |Builds a filter expression for a "EndsWith" filter.|
| **lessThan(fieldName, filterValue)** |Builds a filter expression for a "LessThan" filter.|
| **lessThanOrEqualTo(fieldName, filterValue)** |>Builds a filter expression for a "LessThanOrEqualTo" filter.|

>note The methods below have a single argument:
> **fieldName** : the field name of the expression.
>



>caption  

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **isNull(fieldName)** |Builds a filter expression for a "IsNull" filter.|
| **isNotNull(fieldName)** |Builds a filter expression for a "NotIsNull" filter.|
| **isEmpty(fieldName)** |Builds a filter expression for a "IsEmpty" filter.|
| **isNotEmpty(fieldName)** |Builds a filter expression for a "NotIsEmpty" filter.|


>caption  

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **group(groupBuilderFunction)** |Builds a filter expression for a "Group" filter. *Parameters:*  **groupBuilderFunction:** The function that builds the expressions in the group. A Telerik.Web.UI.RadListViewFilterExpressionBuilder is passed as a first argument to the function.|

## Telerik.Web.UI.RadListViewFilterExpressionLogicBuilder class members


>caption  

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **and()** |Groups filter expressions with an AND operator.|
| **or()** |Groups filter expressions with an OR operator.|

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




>note When automatically binding to web services, the **FilterParameterType** and **SortParameterType** settings determine the format in which the filter and sort expressions will be sent to the web service.
>


## See Also

 * [Overview]({%slug listview/data-binding/client-side/overview%})
