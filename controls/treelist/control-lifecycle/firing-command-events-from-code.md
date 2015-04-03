---
title: Firing Command Events from Code
page_title: Firing Command Events from Code | UI for ASP.NET AJAX Documentation
description: Firing Command Events from Code
slug: treelist/control-lifecycle/firing-command-events-from-code
tags: firing,command,events,from,code
published: True
position: 4
---

# Firing Command Events from Code



In some specific cases you may want to raise command events (like Select/Sort/Page/etc.)in code rather than clicking buttons which are placed inside RadTreeList. For such type of situations TelerikRadTreeList exposes the __FireCommandEvent(eventName, eventArgs)__ method which can becalled from the items related to the respective operation.

## 

The table below explains the parameters which you can pass to that method to fire corresponding commands:


|  __RadTreeList command__  |  __Type of item used to invoke the method__  |  __FireCommandEvent syntax__  |  __eventArgs details__  |
| ------ | ------ | ------ | ------ |
|Rebind| __TreeListItem__ |FireCommandEvent("Rebind", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("Rebind", String.Empty)|
|ExpandCollapse| __TreeListDataItem__ |FireCommandEvent("ExpandCollapse", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("ExpandCollapse", String.Empty)|
|Edit| __TreeListDataItem__ |FireCommandEvent("Edit", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("Edit", String.Empty)|
|InitInsert| __TreeListDataItem, TreeListHeaderItem__ |FireCommandEvent("InitInsert", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("InitInsert", String.Empty)|
|Cancel| __TreeListDataItem__ |FireCommandEvent("Cancel", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("Cancel", String.Empty)|
|Update| __TreeListDataItem__ |FireCommandEvent("Update", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("Update", String.Empty)|
|PerformInsert| __TreeListDataItem, TreeListHeaderItem__ |FireCommandEvent("PerformInsert", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("PerformInsert", String.Empty)|
|Delete| __TreeListDataItem__ |FireCommandEvent("Delete", TreeListCommandEventArgs)|Required but not used __Example:__ FireCommandEvent("Delete", String.Empty)|
|Sort| __TreeListHeaderItem__ |FireCommandEvent("Sort", TreeListSortEventArgs)|string argument: fieldName (mandatory), sortOrder (optional) __Example:__ FireCommandEvent("Sort", "ContactName")|
|Page| __TreeListPagerItem__ |FireCommandEvent("Page", TreeListPageChangedEventArgs)|string argument: "First", "Next", "Prev", "Last", numeric values as string representation __Example:__ FireCommandEvent("Page", "Next")|
|Select| __TreeListDataItem__ |FireCommandEvent("Select", TreeListSelectEventArgs)|Required but not used __Example:__ FireCommandEvent("Select", String.Empty)

>note Note that if you have AllowRecursiveSelection="true" the current item and all its child items will be selected.
>
|
|Deselect| __TreeListDataItem__ |FireCommandEvent("Deselect", TreeListDeselectEventArgs)|Required but not used __Example:__ FireCommandEvent("Deselect", String.Empty)

>note Note that if you have AllowRecursiveSelection="true" the current item and all its child items will be deselected.
>
|
