---
title: OnColumnResized
page_title: OnColumnResized - RadTreeList
description: Check our Web Forms article about OnColumnResized Event.
slug: treelist/client-side-programming/Events/OnColumnResized
tags: events,OnColumnResized
published: True
position: 1
---

# OnColumnResized


This event is fired after a column is resized.

| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | get_column() - returns a reference to the clicked TreeListColumn object  |
|| get_domEvent() - returns the DOM event that was raised for the current event |
| **Can be canceled** | No |


## Example

````JavaScript
function ColumnResized(sender, eventArgs) {
    alert("Column with Index: " + eventArgs.get_column().get_element().cellIndex + " was resized, width: " + eventArgs.get_column().get_element().offsetWidth);
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
