---
title: OnItemDragging
page_title: OnItemDragging | RadListView for ASP.NET AJAX Documentation
description: OnItemDragging
slug: listview/client-side-programming/events/onitemdragging
tags: onitemdragging
published: True
position: 4
---

# OnItemDragging


This client-side event is fired when a RadListView item is dragged.



|  **Fired by**  | RadListView |
| ------ | ------ |
| **Arguments** | **domEvent** - dom event|
| **Can be canceled** |No|

Example:

````ASP.NET
<ClientEvents OnItemDragging="ItemDragging" />
````



````JavaScript
function ItemDragging(sender, eventArgs) {
    var evt = eventArgs.get_domEvent();
    var target = evt.srcElement || evt.originalTarget;
}
````



>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel() or set_cancel().

## See Also

* [Drag and Drop Configuration]({%slug listview/items/drag-and-drop%})
