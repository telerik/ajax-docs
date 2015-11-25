---
title: OnItemCreated
page_title: OnItemCreated | RadTreeList for ASP.NET AJAX Documentation
description: OnItemCreated Event
slug: treelist/client-side-programming/Events/OnItemCreated
tags: events,OnItemCreated
published: True
position: 1
---

# OnItemCreated


This event is fired when each of the TreeListDataItem client components is created.

>note The RadTreeList client TreeListDataItem objects will not be created until they are requested, for example by calling TreeListInstance.get_dataItems(). Until then, the OnItemCreated client event of the control will not fire.
>

| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | **get_item()** - the created TreeListDataItem object  |
| **Can be canceled** | No |


## Example


````JavaScript
function ItemCreated(sender, eventArgs) {
    alert('Created item with client key value: ' + eventArgs.get_item().get_dataKeyValue('LastName'));
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 