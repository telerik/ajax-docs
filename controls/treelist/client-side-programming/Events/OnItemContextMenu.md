---
title: OnItemContextMenu
page_title: OnItemContextMenu - RadTreeList
description: Check our Web Forms article about OnItemContextMenu Event.
slug: treelist/client-side-programming/Events/OnItemContextMenu
tags: events,OnItemContextMenu
published: True
position: 1
---

# OnItemContextMenu


This event is fired when a right click on a TreeListDataItem happens.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the right-clicked TreeListDataItem object  |
|| **get_domEvent()** - the DOM event   |
| **Can be canceled** | No |


## Example


````JavaScript
function ItemContextMenu(sender, eventArgs) {
    alert('Right click occured on item with key value: ' + eventArgs.get_item().get_dataKeyValue('LastName'));
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
