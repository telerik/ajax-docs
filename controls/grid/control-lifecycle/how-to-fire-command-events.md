---
title: How to Fire Command Events
page_title: How to Fire Command Events | UI for ASP.NET AJAX Documentation
description: How to Fire Command Events
slug: grid/control-lifecycle/how-to-fire-command-events
tags: how,to,fire,command,events
published: True
position: 5
---

# How to Fire Command Events



## 

In some specific cases you may want to raise command events (like Edit/Update/Delete/Filter/Page/etc.) in code rather than clicking buttons/filter menu items in the grid. For such type of situations Telerik RadGrid exposes the [ FireCommandEvent(eventName, eventArgs)]() method which can be called for all items which extend the __GridItem__ type (GridDataItem, GridFilteringItem, etc.).

The table below explains the parameters which you can pass to that method to fire corresponding commands:


>caption  

| GridCommand | Type of item used to invoke the method | FireCommandEvent syntax | eventArgs details |
| ------ | ------ | ------ | ------ |
|Edit| __GridEditableItem, GridDataItem__ |FireCommandEvent("Edit", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Edit", String.Empty)|
|Update| __GridEditableItem, GridDataItem__ |FireCommandEvent("Update", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Update", String.Empty)|
|Delete| __GridDataItem__ |FireCommandEvent("Delete", GridCommandEventArgs)|Required but not usedFireCommandEvent("Delete", String.Empty)|
|InitInsert| __GridEditableItem, GridCommandItem__ |FireCommandEvent("InitInsert", GridCommandEventArgs)|Required but not usedFireCommandEvent("InitInsert", String.Empty)|
|PerformInsert| __GridEditableItem,GridCommandItem__ |FireCommandEvent("PerformInsert", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("PerformInsert", String.Empty)|
|Cancel| __GridEditableItem__ |FireCommandEvent("Cancel", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Cancel", String.Empty)|
|Page| __GridPagerItem__ |FireCommandEvent("Page", GridPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string presentationExample: FireCommandEvent("Page", "Next")|
|Sort| __GridHeaderItem__ |FireCommandEvent("Sort", GridSortCommandEventArgs)|string argument: fieldName (mandatory), sortOrder (optional)Example: FireCommandEvent("Sort", "ContactName")|
|Select| __GridDataItem__ |FireCommandEvent("Select", GridSelectCommandEventArgs)|Required but not usedExample: FireCommandEvent("Select", String.Empty)|
|Deselect| __GridDataItem__ |FireCommandEvent("Deselect", GridDeselectCommandEventArgs)|Required but not usedExample:FireCommandEvent("Deselect", String.Empty)|
|ExpandCollapse| __GridDataItem__ |FireCommandEvent("ExpandCollapse", GridExpandCommandEventArgs)|Required but not usedExample:FireCommandEvent("ExpandCollapse", String.Empty)|
|Filter| __GridFilteringItem__ |FireCommandEvent("Filter", GridFilterCommandEventArgs)|Pair holding the menu item value and the column UniqueNameExample: FireCommandEvent("Filter", new Pair(menuItem.Value,columnUniqueName))|
|HeaderContextMenuFilter| __GridHeaderItem__ |FireCommandEvent("HeaderContextMenuFilter",GridHeaderContextMenuFilterEventArgs)|Triplet holding the name of the column and two pairs for the filter conditions data.Example: FireCommandEvent("HeaderContextMenuFilter", new Triplet() { First = "OrderID", Second = new Pair() { First = "GreaterThan", Second = 10250 }, Third = new Pair() { First = "LessThan", Second = 10342 } } );|
|ExportToExcel| __GridCommandItem__ |FireCommandEvent("ExportToExcel", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToExcel", String.Empty)|
|ExportToWord| __GridCommandItem__ |FireCommandEvent("ExportToWord", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToWord", String.Empty)|
|ExportToPdf| __GridCommandItem__ |FireCommandEvent("ExportToPdf", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToPdf", String.Empty)|
|ExportToCsv| __GridCommandItem__ |FireCommandEvent("ExportToCsv", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToCsv", String.Empty)|
|EditSelected| __GridCommandItem__ |FireCommandEvent("EditSelected", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("EditSelected", String.Empty)|
|UpdateEdited| __GridCommandItem__ |FireCommandEvent("UpdateEdited", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("UpdateEdited", String.Empty)|
|DeleteSelected| __GridCommandItem__ |FireCommandEvent("DeleteSelected", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("DeleteSelected", String.Empty)|
|EditAll| __GridCommandItem__ |FireCommandEvent("EditAll", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("EditAll", String.Empty)|
|CancelAll| __GridCommandItem__ |FireCommandEvent("CancelAll", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("CancelAll", String.Empty)|
|DownloadAttachment| __GridDataItem__ |FireCommandEvent("DownloadAttachment", GridDownloadAttachmentCommandEventArgs)|IDictionary collection of key/value pairs (see[this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx))Example:Dictionary<string, object> dict = new Dictionary<string, object>();dict["ColumnUniqueName"] = "AttColumn1";dict["FileName"] = "report.doc";dict["FileId"] = "1423";FireCommandEvent("DownloadAttachment", dict)|
