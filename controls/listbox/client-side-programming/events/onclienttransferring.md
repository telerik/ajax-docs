---
title: OnClientTransferring
page_title: OnClientTransferring - RadListBox
description: Check our Web Forms article about OnClientTransferring.
slug: listbox/client-side-programming/events/onclienttransferring
tags: onclienttransferring
published: True
position: 19
---

# OnClientTransferring

## 

The **OnClientTransferring** client-side event occurs when the selected item is about to be transferred to the destination RadListBox. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_item()** - returns the item that is about to be transferred.

* **get_items()** - returns an array of items that are about to be transferred

* **get_sourceListBox()** - returns the instance of the source RadListBox which the item currently belongs to

* **get_destinationListBox()** - returns the instance of the destination RadListBox where the item is transferring to.

* **set_cancel()** - lets you cancel the event and prevent items from being selected.

* **get_domEvent()** - returns the DOM event object

The example below shows how to ask the user before transferring the item:

````JavaScript	
function onClientTransferringHandler(sender, e) {
	if (!confirm("Are you sure?")) {
		e.set_cancel(true);
	}
}				
````

# See Also

 * [OnClientTransferred]({%slug listbox/client-side-programming/events/onclienttransferred%})
