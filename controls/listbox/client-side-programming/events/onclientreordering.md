---
title: OnClientReordering
page_title: OnClientReordering | UI for ASP.NET AJAX Documentation
description: OnClientReordering
slug: listbox/client-side-programming/events/onclientreordering
tags: onclientreordering
published: True
position: 17
---

# OnClientReordering



## 

The __OnClientReordering__ client-side event occurs when the item or items are about to be reordered. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_items()__ - returns an array of the items selected for reordering

* __get_item()__ - returns the item that is about to be reordered.

* __get_offset()__ - returns __-1__ if you are moving the item __up__ and __1__ if you are moving the item __down__.

* __set_cancel -__lets you cancel the event and prevent items from being moved.

* __get_domEvent()__ - returns the DOM event object



The example below shows how to ask the user before moving the item:

````JavaScript
	
	        function onClientReorderingHandler(sender, e) {
	            if (!confirm("Are you sure?")) {
	                e.set_cancel(true);
	            }
	        }
				
````



# See Also

 * [OnClientReordered]({%slug listbox/client-side-programming/events/onclientreordered%})
