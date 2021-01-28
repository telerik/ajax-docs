---
title: OnClientDragging
page_title: OnClientDragging - RadListBox
description: Check our Web Forms article about OnClientDragging.
slug: listbox/client-side-programming/events/onclientdragging
tags: onclientdragging
published: True
position: 5
---

# OnClientDragging

## 

The **OnClientDragging** client-side event occurs each time the user moves a mouse while dragging an item. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_sourceItem()** - returns the first selected item that is dragged

* **get_sourceItems()** - returns an array of the selected items that are dragged

* **set_cancel()** - lets you cancel the event and prevent the dragging.

* **get_domEvent()** - returns the DOM event object

* **get_htmlElement()** - returns the DOM html element which the item is dropped onto.

The example below demonstrates getting the current x and y coordinates of the mouse while the item is being dragged.

````JavaScript	
function OnClientDraggingHandler(sender, eventArgs) {
	var domEvent = eventArgs.get_domEvent();    
	var item = eventArgs.get_sourceItem();
	item.set_text("Dragging X:" + domEvent.offsetX + " Y:" + domEvent.offsetY);
}
````




