---
title: fireCommand
page_title: fireCommand | UI for ASP.NET AJAX Documentation
description: fireCommand
slug: listview/client-side-programming/radlistview/methods/firecommand
tags: firecommand
published: True
position: 0
---

# fireCommand



## 

Method which triggers specific command for the RadListView when executed. The method is called for the RadListView client instance. The method arguments are the command which will be processed and its corresponding arguments.

This method can be used to invoke custom commands along with a single string argument which can be accessed lateron using the __OnItemCommand__ server event.

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




|  __Command__  |  __Type of object used to invoke the method__  |  __fireCommand syntax__  |  __eventArgs details__  |
| ------ | ------ | ------ | ------ |
|Edit| __RadListView__ |fireCommand("Edit", itemIndex)|Example: fireCommand("Edit", 0)|
|Update| __RadListView__ |fireCommand("Update", itemIndex)|Example: fireCommand("Update", 0)|
|Cancel| __RadListView__ |fireCommand("Cancel", itemIndex)|Example: fireCommand("Cancel", 0)|
|Delete| __RadListView__ |fireCommand("Delete", itemIndex)|Example: fireCommand("Delete", 0)|
|InitInsert| __RadListView__ |fireCommand("InitInsert",RadListViewInsertItemPosition)|RadListViewInsertItemPosition: None = 0,FirstItem = 1, LastItem = ""Example: fireCommand("InitInsert", 1)|
|PerformInsert| __RadListView__ |fireCommand("PerformInsert", "")|Required but not usedExample: fireCommand("PerformInsesrt", "")|
|CancelInsert| __RadListView__ |fireCommand("CancelInsert", "")|Required but not usedExample: fireCommand("CancelInsert", "")|
|Select| __RadListView__ |fireCommand("Select", itemIndex)|Example: fireCommand("Select", 0)|
|Deselect| __RadListView__ |fireCommand("Deselect", itemIndex)|Example: fireCommand("Deselect", 0)|
|Page| __RadListView__ |fireCommand("Page", pageCommand)|string argument: "First", "Next", "Prev", "Last",numeric values as string presentationExample: fireCommand("Page", "First")|
|ChangePageSize| __RadListView__ |fireCommand("ChangePageSize", pageSize)|Example: fireCommand("ChangePageSize", 15)|
|RebindListView| __RadListView__ |fireCommand("RebindListView", "")|Required but not usedExample: fireCommand("RebindListView", "")|
|Sort| __RadListView__ |fireCommand("Sort", sortExpression)|string argument: fieldName (mandatory), sortOrder (optional)Example:fireCommand("Sort", "ContactName DESC")|
