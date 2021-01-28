---
title: OnItemDragStarted
page_title: OnItemDragStarted - RadTreeList
description: Check our Web Forms article about OnItemDragStarted Event.
slug: treelist/client-side-programming/Events/OnItemDragStarted
tags: events,OnItemDragStarted
published: True
position: 1
---

# OnItemDragStarted


This event is fired when a drag action is started upon the **TreeListDataItem**. This event can be canceled.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_draggedContainer()** - the <*tr*> element used for representing the dragged row |
|| **set_draggedContainer(DOM element)** - the element used for representing the dragged row |
|| **get_draggedItems()** - a collection of the dragged TreeListDataItems |
|| **get_item()** - the dragged TreeListDataItem |
|| **get_cancel()** - bool |
|| **set_cancel(bool)** |
| **Can be canceled** | Yes |


## Example


````JavaScript
function ItemDragStarted(sender, eventArgs) {
    alert("Started dragging item with id: " + eventArgs.get_item().get_id());
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
