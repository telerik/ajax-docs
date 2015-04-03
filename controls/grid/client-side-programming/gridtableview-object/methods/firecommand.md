---
title: fireCommand
page_title: fireCommand | UI for ASP.NET AJAX Documentation
description: fireCommand
slug: grid/client-side-programming/gridtableview-object/methods/firecommand
tags: firecommand
published: True
position: 22
---

# fireCommand



## 

Method which triggers specific command for the grid when executed. The method is called for the __GridTableView__ client instance and its arguments depend on the command which will be processed.


|  __fireCommand(commandName, commandArgument)__  |  |
| ------ | ------ |
| __commandName__ |The name of the command that will be fired.|
| __commandArgument__ |The argument to be passed along with the command.|

Example:

````JavaScript
	        function FirePageCommand() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.fireCommand("Page", "Next");
	        } 
````



This method can be used to invoke custom commands along with a single string argument which can be accessed later on using the __OnItemCommand__ server event.

>note Note that when firing custom commands (with a custom command name) they are fired through the first data item in the GridTableView. This means that no command will be fired if the grid is bound to an empty data source.
>



|  __GridCommand__  |  __Type of object used to invoke the method__  |  __fireCommand syntax__  |  __eventArgs details__  |
| ------ | ------ | ------ | ------ |
|Edit| __GridTableView__ |fireCommand("Edit", itemIndex)|Example: fireCommand("Edit", 0)|
|Update| __GridTableView__ |fireCommand("Update", itemIndex)|Example: fireCommand("Update", 0)|
|Delete| __GridTableView__ |fireCommand("Delete", itemIndex)|Example:fireCommand("Delete", 0)|
|InitInsert| __GridTableView__ |fireCommand("InitInsert", "")|Required but not used.Example:fireCommand("InitInsert", "")|
|PerformInsert| __GridTableView__ |fireCommand("PerformInsert", "")|Required but not used.Example:fireCommand("PerformInsert", "")|
|Cancel| __GridTableView__ |fireCommand("Cancel", "")|Required but not used.Example:fireCommand("Cancel", "")|
|Page| __GridTableView__ |fireCommand("Page", pageCommand)|string argument:"First", "Next", "Prev", "Last", numeric values as string presentation.Example:fireCommand("Page", "Next")|
|Sort| __GridTableView__ |fireCommand("Sort", sortExpression)|string argument: fieldName (mandatory), sortOrder (optional)Example:fireCommand("Sort", "ContactName DESC")|
|HeaderContextMenuFilter| __GridTableView__ |fireCommand("HeaderContextMenuFilter",commandArgs)|A string holding the filter conditions data.Example:fireCommand("Filter", "OrderID|?GreaterThan|10258|?LessThan|10342")|
|ExportToExcel| __GridTableView__ |fireCommand("ExportToExcel", "")|Required but not used.Example:fireCommand("ExportToExcel", "")|
|ExportToWord| __GridTableView__ |fireCommand("ExportToWord", "")|Required but not used.Example:fireCommand("ExportToWord", "")|
|ExportToPdf| __GridTableView__ |fireCommand("ExportToPdf", "")|Required but not used.Example:fireCommand("ExportToPdf", "")|
|ExportToCsv| __GridTableView__ |fireCommand("ExportToCsv", "")|Required but not used.Example:fireCommand("ExportToCsv", "")|
|EditSelected| __GridTableView__ |fireCommand("EditSelected", "")|Required but not used.Example:fireCommand("EditSelected", "")|
|UpdateEdited| __GridTableView__ |fireCommand("UpdateEdited", "")|Required but not used.Example:fireCommand("UpdateEdited", "")|
|DeleteSelected| __GridTableView__ |fireCommand("DeleteSelected", "")|Required but not used.Example:fireCommand("DeleteSelected", "")|
|EditAll| __GridTableView__ |fireCommand("EditAll", "")|Required but not used.Example:fireCommand("EditAll", "")|
|CancelAll| __GridTableView__ |fireCommand("CancelAll", "")|Required but not used.Example:fireCommand("CancelAll", "")|
|Group| __GridTableView__ |fireCommand("GroupByColumn", "")|Example:fireCommand("GroupByColumn", "Country")|
|UnGroup| __GridTableView__ |fireCommand("UnGroupByColumn", "")|Example:fireCommand("UnGroupByColumn", "Country")|
|DownloadAttachment| __GridTableView__ |fireCommand("DownloadAttachment", argument)|String - collection of key/value pairs in JSON format (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx))Example:var args = '{"FileId":24,"ColumnUniqueName":"AttCol","FileName":"report.doc"}'; fireCommand("DownloadAttachment", args)|
|ExpandCollapse| __GridTableView__ |fireCommand("ExpandCollapse", itemIndex)|Example:fireCommand("ExpandCollapse", 0)|

The equivalents on the server are listed in [this topic]({%slug grid/control-lifecycle/how-to-fire-command-events%}) from the documentation.
