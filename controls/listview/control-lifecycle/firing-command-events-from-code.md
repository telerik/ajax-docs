---
title: Firing Command Events from Code
page_title: Firing Command Events from Code | RadListView for ASP.NET AJAX Documentation
description: Firing Command Events from Code
slug: listview/control-lifecycle/firing-command-events-from-code
tags: firing,command,events,from,code
published: True
position: 5
---

# Firing Command Events from Code



## 

In some specific cases you may want to raise command events (like Edit/Update/Delete/Sort/Page/etc.) in code rather than clicking buttons which are placed inside RadListView. For such type of situations Telerik RadListView exposes the **FireCommandEvent(eventName, eventArgs)** method which can be called from all RadListView items that inherit from **RadListViewItem** class.

The table below explains the parameters which you can pass to that method to fire corresponding commands:


|  **RadListView command**  |  **Type of item used to invoke the method**  |  **FireCommandEvent syntax**  |  **eventArgs details**  |
| ------ | ------ | ------ | ------ |
|| **RadListViewEditableItem, RadListViewDataItem** |FireCommandEvent("Edit", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Edit", String.Empty)|
|Update| **RadListViewEditableItem, RadListViewDataItem** |FireCommandEvent("Update", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Update", String.Empty)|
|Delete| **RadListViewDataItem** |FireCommandEvent("Delete", RadListViewCommandEventArgs)|Required but not usedFireCommandEvent("Delete", String.Empty)|
|InitInsert| **RadListViewEditableItem, RadListViewDataItem,RadListViewItem** |FireCommandEvent("InitInsert", RadListViewCommandEventArgs)|Required but not usedFireCommandEvent("InitInsert", String.Empty)|
|PerformInsert| **RadListViewEditableItem,RadListViewDataItem,RadlListViewInsertItem** |FireCommandEvent("PerformInsert", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("PerformInsert", String.Empty)|
|Cancel| **RadListViewEditableItem,RadListViewDataItem** |FireCommandEvent("Cancel", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Cancel", String.Empty)|
|Page| **RadListViewItem** |FireCommandEvent("Page", RadListViewPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string presentationExample: FireCommandEvent("Page", "Next")|
|Sort| **RadListViewItem** |FireCommandEvent("Sort", RadListViewSortEventArgs)|string argument: fieldName (mandatory), sortOrder (optional)Example: FireCommandEvent("Sort", "ContactName")|
|Select| **RadListViewDataItem** |FireCommandEvent("Select", RadListViewSelectCommandEventArgs)|Required but not usedExample: FireCommandEvent("Select", String.Empty)|
|Deselect| **RadListViewDataItem** |FireCommandEvent("Deselect", RadListViewDeselectCommandEventArgs)|Required but not usedExample:FireCommandEvent("Deselect", String.Empty)|
|Rebind| **RadListViewItem** |FireCommandEvent("Rebind", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Rebind", String.Empty)|
|ChangePageSize| **RadListViewItem** |FireCommandEvent("ChangePageSize", RadListViewPageSizeChangedEventArgs)|string argument: <Number> where <Number> is valid numeric valueExample: FireCommandEvent("ChangePageSize", 15)|
