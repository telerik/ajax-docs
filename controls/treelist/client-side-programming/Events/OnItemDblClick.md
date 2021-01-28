---
title: OnItemDblClick
page_title: OnItemDblClick - RadTreeList
description: Check our Web Forms article about OnItemDblClick Event.
slug: treelist/client-side-programming/Events/OnItemDblClick
tags: events,OnItemDblClick
published: True
position: 1
---

# OnItemDblClick


This event is fired when a data item is double-clicked in **RadTreeList**.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the double-clicked TreeListDataItem object  |
| **Can be canceled** | No |


## Example


````JavaScript
function ItemDblClick(sender, eventArgs) {
    alert('Clicked item with client key value: ' + eventArgs.get_item().get_dataKeyValue('LastName'));
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
