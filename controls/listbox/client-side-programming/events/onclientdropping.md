---
title: OnClientDropping
page_title: OnClientDropping | UI for ASP.NET AJAX Documentation
description: OnClientDropping
slug: listbox/client-side-programming/events/onclientdropping
tags: onclientdropping
published: True
position: 6
---

# OnClientDropping

## 

The **OnClientDropping** client-event occurs before the items are dropped. The event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_sourceItem()** - returns the first selected item that is dropped

* **get_sourceItems()** - returns an array of the selected items that are dropped

* **get_destinationItem()** - returns the destination item.

* **get_dropPosition()** - returns the relative position either 0 (Above) or 1 (Below) toward the destination item.

* **get_htmlElement()** - returns the DOM html element which the item is dropped onto.

* **set_cancel()** - lets you cancel the event and prevent the dropping.

* **get_domEvent()** - returns the DOM event object


The following example shows how to ask the user for confirmation before the item is dropped.

````JavaScript	
function OnClientDroppingHandler(sender, eventArgs) {
	var message = "Are you sure you want to drop the item " + eventArgs.get_sourceItem().get_text();
	message += eventArgs.get_dropPosition() == 0 ? " above" : " below";
	message += " the item " + eventArgs.get_destinationItem().get_text() + "?";
	if (!confirm(message))
		eventArgs.set_cancel(true);
 }				
````

# See Also

 * [OnClientDragStart]({%slug listbox/client-side-programming/events/onclientdragstart%})

 * [OnClientDragging]({%slug listbox/client-side-programming/events/onclientdragging%})

 * [OnClientDropped]({%slug listbox/client-side-programming/events/onclientdropped%})
