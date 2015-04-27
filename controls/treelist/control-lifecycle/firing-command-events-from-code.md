---
title: Firing Command Events from Code
page_title: Firing Command Events from Code | RadTreeList for ASP.NET AJAX Documentation
description: Firing Command Events from Code
slug: treelist/control-lifecycle/firing-command-events-from-code
tags: firing,command,events,from,code
published: True
position: 4
---

# Firing Command Events from Code



In some specific cases you may want to raise command events (like Select/Sort/Page/etc.)in code rather than clicking buttons which are placed inside RadTreeList. For such type of situations TelerikRadTreeList exposes the **FireCommandEvent(eventName, eventArgs)** method which can becalled from the items related to the respective operation.

## 

The table below explains the parameters which you can pass to that method to fire corresponding commands:


|  **RadTreeList command**  |  **Type of item used to invoke the method**  |  **FireCommandEvent syntax**  |  **eventArgs details**  |
| ------ | ------ | ------ | ------ |
|Rebind| **TreeListItem** |FireCommandEvent("Rebind", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("Rebind", String.Empty)|
|ExpandCollapse| **TreeListDataItem** |FireCommandEvent("ExpandCollapse", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("ExpandCollapse", String.Empty)|
|Edit| **TreeListDataItem** |FireCommandEvent("Edit", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("Edit", String.Empty)|
|InitInsert| **TreeListDataItem, TreeListHeaderItem** |FireCommandEvent("InitInsert", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("InitInsert", String.Empty)|
|Cancel| **TreeListDataItem** |FireCommandEvent("Cancel", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("Cancel", String.Empty)|
|Update| **TreeListDataItem** |FireCommandEvent("Update", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("Update", String.Empty)|
|PerformInsert| **TreeListDataItem, TreeListHeaderItem** |FireCommandEvent("PerformInsert", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("PerformInsert", String.Empty)|
|Delete| **TreeListDataItem** |FireCommandEvent("Delete", TreeListCommandEventArgs)|Required but not used **Example:** FireCommandEvent("Delete", String.Empty)|
|Sort| **TreeListHeaderItem** |FireCommandEvent("Sort", TreeListSortEventArgs)|string argument: fieldName (mandatory), sortOrder (optional) **Example:** FireCommandEvent("Sort", "ContactName")|
|Page| **TreeListPagerItem** |FireCommandEvent("Page", TreeListPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string representation **Example:** FireCommandEvent("Page", "Next")|
|Select| **TreeListDataItem** |FireCommandEvent("Select", TreeListSelectEventArgs)|Required but not used **Example:** FireCommandEvent("Select", String.Empty)

>note Note that if you have AllowRecursiveSelection="true" the current item and all its child items will be selected.
>
|
|Deselect| **TreeListDataItem** |FireCommandEvent("Deselect", TreeListDeselectEventArgs)|Required but not used **Example:** FireCommandEvent("Deselect", String.Empty)

>note Note that if you have AllowRecursiveSelection="true" the current item and all its child items will be deselected.
>
|
