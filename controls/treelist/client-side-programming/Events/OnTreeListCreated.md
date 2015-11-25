---
title: OnTreeListCreated
page_title: OnTreeListCreated | RadTreeList for ASP.NET AJAX Documentation
description: OnTreeListCreated Event
slug: treelist/client-side-programming/Events/OnTreeListCreated
tags: events,OnTreeListCreated
published: True
position: 1
---

# OnTreeListCreated


This event is fired when the RadTreeList client component is initialized.


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | none |
| **Can be canceled** | No |


## Example

````JavaScript
function TreeListCreated(sender, eventArgs) {
    alert('Created treelist with id: ' + sender.get_id());
}
````


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 