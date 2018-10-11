---
title: fireCommand
page_title: fireCommand | RadGrid for ASP.NET AJAX Documentation
description: fireCommand
slug: grid/client-side-programming/gridtableview-object/methods/firecommand
tags: firecommand
published: True
position: 22
---

# fireCommand



##

Method which triggers specific command for the grid when executed. The method is called for the **GridTableView** client instance and its arguments depend on the command which will be processed.


|  **fireCommand(commandName, commandArgument)**  |  |
| ------ | ------ |
| **commandName** |The name of the command that will be fired.|
| **commandArgument** |The argument to be passed along with the command.|

Example:

````JavaScript
function FirePageCommand() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.fireCommand("Page", "Next");
}
````



This method can be used to invoke custom commands along with a single string argument which can be accessed later on using the **OnItemCommand** server event.

>tip  When firing custom commands (with a custom command name) they are fired through the first data item in the GridTableView. This means that no command will be fired if the grid is bound to an empty data source.
>



|  **GridCommand**  |  **Type of object used to invoke the method**  |  **fireCommand syntax**  |  **eventArgs details**  |
| ------ | ------ | ------ | ------ |
|Edit| **GridTableView** |fireCommand("Edit", itemIndex)|Example: fireCommand("Edit", 0)|
|Update| **GridTableView** |fireCommand("Update", itemIndex)|Example: fireCommand("Update", 0)|
|Delete| **GridTableView** |fireCommand("Delete", itemIndex)|Example: fireCommand("Delete", 0)|
|InitInsert| **GridTableView** |fireCommand("InitInsert", "")|Required but not used. Example: fireCommand("InitInsert", "")|
|PerformInsert| **GridTableView** |fireCommand("PerformInsert", "")|Required but not used. Example: fireCommand("PerformInsert", "")|
|Cancel| **GridTableView** |fireCommand("Cancel", "")|Required but not used. Example: fireCommand("Cancel", "")|
|Page| **GridTableView** |fireCommand("Page", pageCommand)|string argument:"First", "Next", "Prev", "Last", numeric values as string presentation. Example: fireCommand("Page", "Next")|
|Sort| **GridTableView** |fireCommand("Sort", sortExpression)|string argument: fieldName (mandatory), sortOrder (optional)Example: fireCommand("Sort", "ContactName DESC")|
|HeaderContextMenuFilter| **GridTableView** |fireCommand("HeaderContextMenuFilter",commandArgs)|A string holding the filter conditions data. Example: fireCommand("HeaderContextMenuFilter", "ShipName&#124;?NoFilter&#124;&#124;?NoFilter&#124;")|
|ExportToExcel| **GridTableView** |fireCommand("ExportToExcel", "")|Required but not used. Example: fireCommand("ExportToExcel", "")|
|ExportToWord| **GridTableView** |fireCommand("ExportToWord", "")|Required but not used. Example: fireCommand("ExportToWord", "")|
|ExportToPdf| **GridTableView** |fireCommand("ExportToPdf", "")|Required but not used. Example: fireCommand("ExportToPdf", "")|
|ExportToCsv| **GridTableView** |fireCommand("ExportToCsv", "")|Required but not used. Example: fireCommand("ExportToCsv", "")|
|EditSelected| **GridTableView** |fireCommand("EditSelected", "")|Required but not used. Example: fireCommand("EditSelected", "")|
|UpdateEdited| **GridTableView** |fireCommand("UpdateEdited", "")|Required but not used. Example: fireCommand("UpdateEdited", "")|
|DeleteSelected| **GridTableView** |fireCommand("DeleteSelected", "")|Required but not used. Example: fireCommand("DeleteSelected", "")|
|EditAll| **GridTableView** |fireCommand("EditAll", "")|Required but not used. Example: fireCommand("EditAll", "")|
|CancelAll| **GridTableView** |fireCommand("CancelAll", "")|Required but not used. Example: fireCommand("CancelAll", "")|
|Group| **GridTableView** |fireCommand("GroupByColumn", "")|Example: fireCommand("GroupByColumn", "Country")|
|UnGroup| **GridTableView** |fireCommand("UnGroupByColumn", "")|Example:fireCommand("UnGroupByColumn", "Country")|
|DownloadAttachment| **GridTableView** |fireCommand("DownloadAttachment", argument)|String - collection of key/value pairs in JSON format (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx))Example:var args = '{"FileId":24,"ColumnUniqueName":"AttCol","FileName":"report.doc"}'; fireCommand("DownloadAttachment", args)|
|ExpandCollapse| **GridTableView** |fireCommand("ExpandCollapse", itemIndex)|Example:fireCommand("ExpandCollapse", 0)|

The equivalents on the server are listed in [this topic]({%slug grid/control-lifecycle/how-to-fire-command-events%}) from the documentation.
