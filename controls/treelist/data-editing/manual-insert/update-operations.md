---
title: Manual Insert/Update Operations
page_title: Manual Insert/Update Operations | RadTreeList for ASP.NET AJAX Documentation
description: Manual Insert/Update Operations
slug: treelist/data-editing/manual-insert/update-operations
tags: manual,insert/update,operations
published: True
position: 3
---

# Manual Insert/Update Operations



## Extracting values

There are two ways to extract the values from the item. From the item itself (**ExtractValues**) or through the **RadTreeList** control (**ExtractValuesFromItem**).



````C#
	            item.ExtractValues(table);
````
````VB
	            item.ExtractValues(table)
````




````C#
	            RadTreeList1.ExtractValuesFromItem(table, item, true);
````
````VB
	            RadTreeList1.ExtractValuesFromItem(table, item, True)
````


The syntax of the **ExtractValuesFromItem** method is as follows:


>caption  

|  | ExtractValuesFromItem(IDictionary newValues, TreeListEditableItem dataItem, bool includePrimaryKey) |
| ------ | ------ |
|newValues|IDictionary collection that will be populated with the values extracted from the given item|
|dataItem|The item that will be used to extract the values from|
|includePrimaryKey|Determines whether the primary key will be extracted and added to the IDictionary collection|

The **ExtractValues** method syntax is omitted as it is accepts only one object - the IDictionary collection that holds the extracted values.

## Update

The update operation is nothing different compared to other databound controls like RadGrid.To perform this operation you will have to extract the edited values and then pass them to the corresponding datasource. This is an excerpt of our online demo:



````C#
	            Hashtable table = new Hashtable();
	            TreeListEditableItem item = e.Item as TreeListEditableItem;
	            item.ExtractValues(table);
	
	            ConvertEmptyValuesToDBNull(table);
	
	            if (table["LastName"] != DBNull.Value && table["FirstName"] != DBNull.Value)
	            {
	                string commandText = "UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [TitleOfCourtesy] = @TitleOfCourtesy, [ReportsTo] = @ReportsTo, [Notes] = @Notes WHERE [EmployeeID] = @EmployeeID";
	                ExecuteNonQuery(commandText, table);
	            }
````
````VB
	            Dim table As New Hashtable()
	            Dim item As TreeListEditableItem = TryCast(e.Item, TreeListEditableItem)
	            item.ExtractValues(table)
	
	            ConvertEmptyValuesToDBNull(table)
	
	            If Not table("LastName") Is DBNull.Value AndAlso Not table("FirstName") Is DBNull.Value Then
	                Dim commandText As String = "UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [TitleOfCourtesy] = @TitleOfCourtesy, [ReportsTo] = @ReportsTo, [Notes] = @Notes WHERE [EmployeeID] = @EmployeeID"
	                ExecuteNonQuery(commandText, table)
	            End If
````


## Insert

Although the insert operation is generally the same as the update there is one peculiarity. If you are inserting a child item, the corresponding foreign key values will be extracted automatically from the parent item.This is not the case, however, when inserting new root item. In this case you have to manually insert a null (DbNull) value because the root item does not have a parent and this value should be populated by hand.



````C#
	            Hashtable table = new Hashtable();
	            TreeListEditableItem item = e.Item as TreeListEditableItem;
	            #region treelist-manual-operations_1
	            item.ExtractValues(table);
````
````VB
	            Dim table As New Hashtable()
	            Dim item As TreeListEditableItem = TryCast(e.Item, TreeListEditableItem)
	            ' #region treelist-manual-operations_3
	            item.ExtractValues(table)
````


# See Also

 * [TreeList / Manual data editing demo](http://demos.telerik.com/aspnet-ajax/treelist/examples/dataediting/manualdataediting/defaultcs.aspx)
