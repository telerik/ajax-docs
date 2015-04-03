---
title: OnClientDeleted
page_title: OnClientDeleted | UI for ASP.NET AJAX Documentation
description: OnClientDeleted
slug: listbox/client-side-programming/events/onclientdeleted
tags: onclientdeleted
published: True
position: 3
---

# OnClientDeleted



## 

The __OnClientDeleted__ Client-side event occurs after the item or items have been deleted.



The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_items()__ - returns an array of the deleted items

* __get_item()__ - returns the item that was deleted

* __get_domEvent()__ - returns the DOM event object



The example below shows how to alert the user that the item was successfully deleted:

````JavaScript
	
	        function onClientDeletedHandler(sender, e) {
	            alert("Successfully deleted: " + e.get_item().get_text());
	        }
				
````







# See Also

 * [OnClientDeleting]({%slug listbox/client-side-programming/events/onclientdeleting%})
