---
title: OnColumnResizing
page_title: OnColumnResizing - RadTreeList
description: Check our Web Forms article about OnColumnResizing Event.
slug: treelist/client-side-programming/Events/OnColumnResizing
tags: events,OnColumnResizing
published: True
position: 1
---

# OnColumnResizing


This event is fired before a column is resized.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | get_column() - returns a reference to the clicked TreeListColumn object  |
|| get_domEvent() - returns the DOM event that was raised for the current event |
|| set_cancel(bool) |
| **Can be canceled** | Yes |


## Example

````JavaScript
function ColumnResizing(sender, eventArgs) {
    alert("Resizng column with Index: " + eventArgs.get_column().get_element().cellIndex + ", width: " + eventArgs.get_column().get_element().offsetWidth);
}
// OR
function ColumnResizing(sender, eventArgs) {
    eventArgs.set_cancel(true) //cancel ColumnResizing event
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
