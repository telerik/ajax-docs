---
title: fireCommand
page_title: fireCommand | RadListView for ASP.NET AJAX Documentation
description: fireCommand
slug: listview/client-side-programming/radlistview/methods/firecommand
tags: firecommand
published: True
position: 0
---

# fireCommand



## 

Method which triggers specific command for the RadListView when executed. The method is called for the RadListView client instance. The method arguments are the command which will be processed and its corresponding arguments.

This method can be used to invoke custom commands along with a single string argument which can be accessed lateron using the **OnItemCommand** server event.

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function FireChangePageSizeCommand() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.fireCommand("ChangePageSize", 15);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````




|  **Command**  |  **Type of object used to invoke the method**  |  **fireCommand syntax**  |  **eventArgs details**  |
| ------ | ------ | ------ | ------ |
|Edit| **RadListView** |fireCommand("Edit", itemIndex)|Example: fireCommand("Edit", 0)|
|Update| **RadListView** |fireCommand("Update", itemIndex)|Example: fireCommand("Update", 0)|
|Cancel| **RadListView** |fireCommand("Cancel", itemIndex)|Example: fireCommand("Cancel", 0)|
|Delete| **RadListView** |fireCommand("Delete", itemIndex)|Example: fireCommand("Delete", 0)|
|InitInsert| **RadListView** |fireCommand("InitInsert",RadListViewInsertItemPosition)|RadListViewInsertItemPosition: None = 0,FirstItem = 1, LastItem = ""Example: fireCommand("InitInsert", 1)|
|PerformInsert| **RadListView** |fireCommand("PerformInsert", "")|Required but not usedExample: fireCommand("PerformInsesrt", "")|
|CancelInsert| **RadListView** |fireCommand("CancelInsert", "")|Required but not usedExample: fireCommand("CancelInsert", "")|
|Select| **RadListView** |fireCommand("Select", itemIndex)|Example: fireCommand("Select", 0)|
|Deselect| **RadListView** |fireCommand("Deselect", itemIndex)|Example: fireCommand("Deselect", 0)|
|Page| **RadListView** |fireCommand("Page", pageCommand)|string argument: "First", "Next", "Prev", "Last",numeric values as string presentationExample: fireCommand("Page", "First")|
|ChangePageSize| **RadListView** |fireCommand("ChangePageSize", pageSize)|Example: fireCommand("ChangePageSize", 15)|
|RebindListView| **RadListView** |fireCommand("RebindListView", "")|Required but not usedExample: fireCommand("RebindListView", "")|
|Sort| **RadListView** |fireCommand("Sort", sortExpression)|string argument: fieldName (mandatory), sortOrder (optional)Example:fireCommand("Sort", "ContactName DESC")|
