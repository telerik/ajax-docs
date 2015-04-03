---
title: OnClientDeleting
page_title: OnClientDeleting | UI for ASP.NET AJAX Documentation
description: OnClientDeleting
slug: listbox/client-side-programming/events/onclientdeleting
tags: onclientdeleting
published: True
position: 2
---

# OnClientDeleting



## 

The __OnClientDeleting__ Client-side event occurs when the item or items are about to be deleted. This event can be cancelled.



The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_items()__ - returns an array of the items selected for deletion

* __get_item()__ - returns the item that is about to be deleted.

* __set_cancel -__lets you cancel the event and prevent items from deleting.

* __get_domEvent()__ - returns the DOM event object



The example below shows how to delete an item after the user clicks OK in the confirmation dialog:

````JavaScript
	     
		function onClientDeletingHandler(sender, e) {
	        if (!confirm("Are you sure?")){   
	         e.set_cancel(true);
	    }
				
````







# See Also

 * [Overview]({%slug listbox/client-side-programming/events/overview%})
