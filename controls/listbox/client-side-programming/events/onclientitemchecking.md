---
title: OnClientItemChecking
page_title: OnClientItemChecking | UI for ASP.NET AJAX Documentation
description: OnClientItemChecking
slug: listbox/client-side-programming/events/onclientitemchecking
tags: onclientitemchecking
published: True
position: 10
---

# OnClientItemChecking



## 

The __OnClientItemChecking__ client-side event occurs when the user selects a checkbox using mouse or keyboard. The checked state returned by the item's __get_checked()__ function has not changed to reflect the new value. The event can be cancelled.



The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_item()__ - returns the checked item

* __set_cancel -__lets you cancel the event and prevent changing the checked state of the item.

* __get_domEvent()__ - returns the DOM event object





The example below shows how to check an item after the user clicks OK in the confirmation dialog:

````JavaScript
	
	        function OnClientItemCheckingHandler(sender, eventArgs) {
	            var item = eventArgs.get_item();
	            var message = "Are you sure you want to ";
	            message += item.get_checked() ? "uncheck" : "check";
	            message += " the item " + item.get_text();
	            if (!confirm(message))
	                eventArgs.set_cancel(true);
	        } 
				
````







# See Also

 * [OnClientItemChecked]({%slug listbox/client-side-programming/events/onclientitemchecked%})
