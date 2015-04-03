---
title: Firing Command Events from Code
page_title: Firing Command Events from Code | UI for ASP.NET AJAX Documentation
description: Firing Command Events from Code
slug: listview/control-lifecycle/firing-command-events-from-code
tags: firing,command,events,from,code
published: True
position: 5
---

# Firing Command Events from Code



## 

In some specific cases you may want to raise command events (like Edit/Update/Delete/Sort/Page/etc.) in code rather than clicking buttons which are placed inside RadListView. For such type of situations Telerik RadListView exposes the __FireCommandEvent(eventName, eventArgs)__ method which can be called from all RadListView items that inherit from __RadListViewItem__ class.

The table below explains the parameters which you can pass to that method to fire corresponding commands:


|  __RadListView command__  |  __Type of item used to invoke the method__  |  __FireCommandEvent syntax__  |  __eventArgs details__  |
| ------ | ------ | ------ | ------ |
|| __RadListViewEditableItem, RadListViewDataItem__ |FireCommandEvent("Edit", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Edit", String.Empty)|
|Update| __RadListViewEditableItem, RadListViewDataItem__ |FireCommandEvent("Update", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Update", String.Empty)|
|Delete| __RadListViewDataItem__ |FireCommandEvent("Delete", RadListViewCommandEventArgs)|Required but not usedFireCommandEvent("Delete", String.Empty)|
|InitInsert| __RadListViewEditableItem, RadListViewDataItem,RadListViewItem__ |FireCommandEvent("InitInsert", RadListViewCommandEventArgs)|Required but not usedFireCommandEvent("InitInsert", String.Empty)|
|PerformInsert| __RadListViewEditableItem,RadListViewDataItem,RadlListViewInsertItem__ |FireCommandEvent("PerformInsert", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("PerformInsert", String.Empty)|
|Cancel| __RadListViewEditableItem,RadListViewDataItem__ |FireCommandEvent("Cancel", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Cancel", String.Empty)|
|Page| __RadListViewItem__ |FireCommandEvent("Page", RadListViewPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string presentationExample: FireCommandEvent("Page", "Next")|
|Sort| __RadListViewItem__ |FireCommandEvent("Sort", RadListViewSortEventArgs)|string argument: fieldName (mandatory), sortOrder (optional)Example: FireCommandEvent("Sort", "ContactName")|
|Select| __RadListViewDataItem__ |FireCommandEvent("Select", RadListViewSelectCommandEventArgs)|Required but not usedExample: FireCommandEvent("Select", String.Empty)|
|Deselect| __RadListViewDataItem__ |FireCommandEvent("Deselect", RadListViewDeselectCommandEventArgs)|Required but not usedExample:FireCommandEvent("Deselect", String.Empty)|
|Rebind| __RadListViewItem__ |FireCommandEvent("Rebind", RadListViewCommandEventArgs)|Required but not usedExample: FireCommandEvent("Rebind", String.Empty)|
|ChangePageSize| __RadListViewItem__ |FireCommandEvent("ChangePageSize", RadListViewPageSizeChangedEventArgs)|string argument: <Number> where <Number> is valid numeric valueExample: FireCommandEvent("ChangePageSize", 15)|
