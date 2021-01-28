---
title: OnItemClick
page_title: OnItemClick - RadTreeList
description: Check our Web Forms article about OnItemClick Event.
slug: treelist/client-side-programming/Events/OnItemClick
tags: events,OnItemClick
published: True
position: 1
---

# OnItemClick


This event is fired when a data item is clicked in **RadTreeList**.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the clicked TreeListDataItem object  |
| **Can be canceled** | No |


## Example

You can execute code on a certain event in the **TreeList** by attaching a function to the event in the ClientSettings-ClientEvents tag of the control:

````JavaScript
function ItemClick(sender, eventArgs) {
    alert('Clicked item with client key value: ' + eventArgs.get_item().get_dataKeyValue('LastName'));
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
