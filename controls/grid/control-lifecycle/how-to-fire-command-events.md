---
title: How to Fire Command Events
page_title: How to Fire Command Events - RadGrid
description: Check our Web Forms article about How to Fire Command Events.
slug: grid/control-lifecycle/how-to-fire-command-events
components: ["grid"]
tags: how,to,fire,command,events
published: True
position: 5
---

# How to Fire Command Events

In some cases, you may want to raise command events (such as Edit, Update, Delete, Filter, or Page) in code rather than clicking buttons or filter menu items in the grid. For such situations, Telerik RadGrid exposes the **FireCommandEvent(eventName, eventArgs)** method, which can be called for all items that extend the **GridItem** type (GridDataItem, GridFilteringItem, and so on).

The table below explains the parameters which you can pass to that method to fire corresponding commands:


> caption Table 1: Commands that can be raised with FireCommandEvent

| GridCommand | Type of item used to invoke the method | FireCommandEvent syntax | eventArgs details |
| ------ | ------ | ------ | ------ |
|Edit| **GridEditableItem, GridDataItem** |`FireCommandEvent("Edit", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Edit", String.Empty)`|
|Update| **GridEditableItem, GridDataItem** |`FireCommandEvent("Update", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Update", String.Empty)`|
|Delete| **GridDataItem** |`FireCommandEvent("Delete", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Delete", String.Empty)`|
|InitInsert| **GridEditableItem, GridCommandItem** |`FireCommandEvent("InitInsert", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("InitInsert", String.Empty)`|
|PerformInsert| **GridEditableItem, GridCommandItem** |`FireCommandEvent("PerformInsert", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("PerformInsert", String.Empty)`|
|Cancel| **GridEditableItem** |`FireCommandEvent("Cancel", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Cancel", String.Empty)`|
|Page| **GridPagerItem** |`FireCommandEvent("Page", GridPageChangedEventArgs)`|String argument: "First", "Next", "Prev", "Last", or a numeric value represented as a string. Example: `FireCommandEvent("Page", "Next")`|
|Sort| **GridHeaderItem** |`FireCommandEvent("Sort", GridSortCommandEventArgs)`|String argument: `fieldName` (mandatory) and `sortOrder` (optional). Example: `FireCommandEvent("Sort", "ContactName")`|
|Select| **GridDataItem** |`FireCommandEvent("Select", GridSelectCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Select", String.Empty)`|
|Deselect| **GridDataItem** |`FireCommandEvent("Deselect", GridDeselectCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("Deselect", String.Empty)`|
|ExpandCollapse| **GridDataItem** |`FireCommandEvent("ExpandCollapse", GridExpandCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("ExpandCollapse", String.Empty)`|
|Filter| **GridFilteringItem** |`FireCommandEvent("Filter", GridFilterCommandEventArgs)`|Pair holding the menu item value and the column UniqueName. Example: `FireCommandEvent("Filter", new Pair(menuItem.Value, columnUniqueName))`|
|HeaderContextMenuFilter| **GridHeaderItem** |`FireCommandEvent("HeaderContextMenuFilter", GridHeaderContextMenuFilterEventArgs)`|Triplet holding the name of the column and two pairs for the filter conditions data. Example: `FireCommandEvent("HeaderContextMenuFilter", new Triplet() { First = "OrderID", Second = new Pair() { First = "GreaterThan", Second = 10250 }, Third = new Pair() { First = "LessThan", Second = 10342 } } );`|
|ExportToExcel| **GridCommandItem** |`FireCommandEvent("ExportToExcel", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("ExportToExcel", String.Empty)`|
|ExportToWord| **GridCommandItem** |`FireCommandEvent("ExportToWord", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("ExportToWord", String.Empty)`|
|ExportToPdf| **GridCommandItem** |`FireCommandEvent("ExportToPdf", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("ExportToPdf", String.Empty)`|
|ExportToCsv| **GridCommandItem** |`FireCommandEvent("ExportToCsv", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("ExportToCsv", String.Empty)`|
|EditSelected| **GridCommandItem** |`FireCommandEvent("EditSelected", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("EditSelected", String.Empty)`|
|UpdateEdited| **GridCommandItem** |`FireCommandEvent("UpdateEdited", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("UpdateEdited", String.Empty)`|
|DeleteSelected| **GridCommandItem** |`FireCommandEvent("DeleteSelected", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("DeleteSelected", String.Empty)`|
|EditAll| **GridCommandItem** |`FireCommandEvent("EditAll", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("EditAll", String.Empty)`|
|CancelAll| **GridCommandItem** |`FireCommandEvent("CancelAll", GridCommandEventArgs)`|Required but not used. Example: `FireCommandEvent("CancelAll", String.Empty)`|
|DownloadAttachment| **GridDataItem** |`FireCommandEvent("DownloadAttachment", GridDownloadAttachmentCommandEventArgs)`|IDictionary collection of key/value pairs (see the [GridAttachmentColumn demo](https://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/gridattachmentcolumn/defaultcs.aspx)). Example: `Dictionary<string, object> dict = new Dictionary<string, object>(); dict["ColumnUniqueName"] = "AttColumn1"; dict["FileName"] = "report.doc"; dict["FileId"] = "1423"; FireCommandEvent("DownloadAttachment", dict)`|

## See Also

- [Command Reference]({%slug grid/control-lifecycle/command-reference-%})
- [Commands that invoke Rebind implicitly]({%slug grid/control-lifecycle/commands-that-invoke-rebind-implicitly%})
- [Event sequence]({%slug grid/control-lifecycle/event-sequence%})
