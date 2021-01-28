---
title: OnClientDropped
page_title: OnClientDropped - RadListBox
description: Check our Web Forms article about OnClientDropped.
slug: listbox/client-side-programming/events/onclientdropped
tags: onclientdropped
published: True
position: 7
---

# OnClientDropped

## 

The **OnClientDropped** client-event is fired after the item/items are dropped.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_sourceItem()** - returns the first selected item that is dropped

* **get_sourceItems()** - returns an array of the selected items that are dropped

* **get_destinationItem()** - returns the destination item.

* **get_dropPosition()** - returns the relative position either 0 (Above) or 1 (Below) toward the destination item.

* **get_htmlElement()** - returns the DOM html element which the item is dropped onto.

* **get_domEvent()** - returns the DOM event object

The following example shows an informative message after the item has been dropped.

````JavaScript	
function OnClientDroppedHandler(sender, eventArgs) {
	var message = "You have successfully dropped the item " + eventArgs.get_sourceItem().get_text();
	message += eventArgs.get_dropPosition() == 0 ? " above" : " below";
	message += " the item " + eventArgs.get_destinationItem().get_text() + "?";
	alert(message);
}				
````


