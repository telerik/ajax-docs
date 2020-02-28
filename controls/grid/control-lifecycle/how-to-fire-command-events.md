---
title: How to Fire Command Events
page_title: How to Fire Command Events | RadGrid for ASP.NET AJAX Documentation
description: How to Fire Command Events
slug: grid/control-lifecycle/how-to-fire-command-events
tags: how,to,fire,command,events
published: True
position: 5
---

# How to Fire Command Events



## 

In some specific cases you may want to raise command events (like Edit/Update/Delete/Filter/Page/etc.) in code rather than clicking buttons/filter menu items in the grid. For such type of situations Telerik RadGrid exposes the [ FireCommandEvent(eventName, eventArgs)]() method which can be called for all items which extend the **GridItem** type (GridDataItem, GridFilteringItem, etc.).

The table below explains the parameters which you can pass to that method to fire corresponding commands:


>caption  

| GridCommand | Type of item used to invoke the method | FireCommandEvent syntax | eventArgs details |
| ------ | ------ | ------ | ------ |
|Edit| **GridEditableItem, GridDataItem** |FireCommandEvent("Edit", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Edit", String.Empty)|
|Update| **GridEditableItem, GridDataItem** |FireCommandEvent("Update", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Update", String.Empty)|
|Delete| **GridDataItem** |FireCommandEvent("Delete", GridCommandEventArgs)|Required but not usedFireCommandEvent("Delete", String.Empty)|
|InitInsert| **GridEditableItem, GridCommandItem** |FireCommandEvent("InitInsert", GridCommandEventArgs)|Required but not usedFireCommandEvent("InitInsert", String.Empty)|
|PerformInsert| **GridEditableItem,GridCommandItem** |FireCommandEvent("PerformInsert", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("PerformInsert", String.Empty)|
|Cancel| **GridEditableItem** |FireCommandEvent("Cancel", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("Cancel", String.Empty)|
|Page| **GridPagerItem** |FireCommandEvent("Page", GridPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string presentationExample: FireCommandEvent("Page", "Next")|
|Sort| **GridHeaderItem** |FireCommandEvent("Sort", GridSortCommandEventArgs)|string argument: fieldName (mandatory), sortOrder (optional)Example: FireCommandEvent("Sort", "ContactName")|
|Select| **GridDataItem** |FireCommandEvent("Select", GridSelectCommandEventArgs)|Required but not usedExample: FireCommandEvent("Select", String.Empty)|
|Deselect| **GridDataItem** |FireCommandEvent("Deselect", GridDeselectCommandEventArgs)|Required but not usedExample:FireCommandEvent("Deselect", String.Empty)|
|ExpandCollapse| **GridDataItem** |FireCommandEvent("ExpandCollapse", GridExpandCommandEventArgs)|Required but not usedExample:FireCommandEvent("ExpandCollapse", String.Empty)|
|Filter| **GridFilteringItem** |FireCommandEvent("Filter", GridFilterCommandEventArgs)|Pair holding the menu item value and the column UniqueNameExample: FireCommandEvent("Filter", new Pair(menuItem.Value,columnUniqueName))|
|HeaderContextMenuFilter| **GridHeaderItem** |FireCommandEvent("HeaderContextMenuFilter",GridHeaderContextMenuFilterEventArgs)|Triplet holding the name of the column and two pairs for the filter conditions data.Example: FireCommandEvent("HeaderContextMenuFilter", new Triplet() { First = "OrderID", Second = new Pair() { First = "GreaterThan", Second = 10250 }, Third = new Pair() { First = "LessThan", Second = 10342 } } );|
|ExportToExcel| **GridCommandItem** |FireCommandEvent("ExportToExcel", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToExcel", String.Empty)|
|ExportToWord| **GridCommandItem** |FireCommandEvent("ExportToWord", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToWord", String.Empty)|
|ExportToPdf| **GridCommandItem** |FireCommandEvent("ExportToPdf", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToPdf", String.Empty)|
|ExportToCsv| **GridCommandItem** |FireCommandEvent("ExportToCsv", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("ExportToCsv", String.Empty)|
|EditSelected| **GridCommandItem** |FireCommandEvent("EditSelected", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("EditSelected", String.Empty)|
|UpdateEdited| **GridCommandItem** |FireCommandEvent("UpdateEdited", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("UpdateEdited", String.Empty)|
|DeleteSelected| **GridCommandItem** |FireCommandEvent("DeleteSelected", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("DeleteSelected", String.Empty)|
|EditAll| **GridCommandItem** |FireCommandEvent("EditAll", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("EditAll", String.Empty)|
|CancelAll| **GridCommandItem** |FireCommandEvent("CancelAll", GridCommandEventArgs)|Required but not usedExample: FireCommandEvent("CancelAll", String.Empty)|
|DownloadAttachment| **GridDataItem** |FireCommandEvent("DownloadAttachment", GridDownloadAttachmentCommandEventArgs)|IDictionary collection of key/value pairs (see [this demo](https://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx) )Example:Dictionary<string, object> dict = new Dictionary<string, object>();dict["ColumnUniqueName"] = "AttColumn1";dict["FileName"] = "report.doc";dict["FileId"] = "1423";FireCommandEvent("DownloadAttachment", dict)|
