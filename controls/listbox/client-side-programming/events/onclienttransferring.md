---
title: OnClientTransferring
page_title: OnClientTransferring | UI for ASP.NET AJAX Documentation
description: OnClientTransferring
slug: listbox/client-side-programming/events/onclienttransferring
tags: onclienttransferring
published: True
position: 19
---

# OnClientTransferring



## 

The __OnClientTransferring__ client-side event occurs when the selected item is about to be transferred to the destination RadListBox. This event can be cancelled.





The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_item()__ - returns the item that is about to be transferred.

* __get_items()__ - returns an array of items that are about to be transferred

* __get_sourceListBox()__ - returns the instance of the source RadListBox which the item currently belongs to

* __get_destinationListBox()__ - returns the instance of the destination RadListBox where the item is transferring to.

* __set_cancel -__lets you cancel the event and prevent items from being selected.

* __get_domEvent()__ - returns the DOM event object



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
