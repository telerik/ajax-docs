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

The __OnClientDropping__ client-event occurs before the items are dropped. The event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_sourceItem()__ - returns the first selected item that is dropped

* __get_sourceItems()__ - returns an array of the selected items that are dropped

* __get_destinationItem()__ - returns the destination item.

* __get_dropPosition()__ - returns the relative position either 0 (Above) or 1 (Below) toward the destination item.

* __get_htmlElement()__ - returns the DOM html element which the item is dropped onto.

* __set_cancel()__ - lets you cancel the event and prevent the dropping.

* __get_domEvent()__ - returns the DOM event object


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
