---
title: OnItemDeselected
page_title: OnItemDeselected | RadTreeList for ASP.NET AJAX Documentation
description: OnItemDeselected Event
slug: treelist/client-side-programming/Events/OnItemDeselected
tags: events,OnItemDeselected
published: True
position: 1
---

# OnItemDeselected


This event is fired when a TreeListDataItem is deselected on the client.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the deselected TreeListDataItem object   |
| **Can be canceled** | No |


## Example


````JavaScript
function ItemDeselected(sender, eventArgs) {
    alert('Item deselected. ' + sender.get_selectedItems().length + ' selected items remaining.');
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 