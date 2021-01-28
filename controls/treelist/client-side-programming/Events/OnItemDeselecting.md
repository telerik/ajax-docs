---
title: OnItemDeselecting
page_title: OnItemDeselecting - RadTreeList
description: Check our Web Forms article about OnItemDeselecting Event.
slug: treelist/client-side-programming/Events/OnItemDeselecting
tags: events,OnItemDeselecting
published: True
position: 1
---

# OnItemDeselecting


This event is fired when a **TreeListDataItem** is about to be deselected on the client. This event can be canceled.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the TreeListDataItem object which is being deselected |
|| **get_cancel()** - bool |
|| **set_cancel(bool)**  |
| **Can be canceled** | Yes |


## Example


````JavaScript
function ItemDeselecting(sender, eventArgs) {
    if (eventArgs.get_item().get_displayIndex() == 0) {
        eventArgs.set_cancel(true);
    }
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
