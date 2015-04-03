---
title: OnClientDragStart
page_title: OnClientDragStart | UI for ASP.NET AJAX Documentation
description: OnClientDragStart
slug: listbox/client-side-programming/events/onclientdragstart
tags: onclientdragstart
published: True
position: 4
---

# OnClientDragStart



## 

The __OnClientDragStart__ client-side event occurs each time the user begins to drag an item. This event can be cancelled.



The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_sourceItem()__ - returns the first selected item that is dragged

* __get_sourceItems() -__returns an array of the selected items that are dragged

* __set_cancel -__lets you cancel the event and prevent the dragging.

* __get_domEvent()__ - returns the DOM event object

* __get_htmlElement()__ - returns the DOM html element which the item is dropped onto.



The following example shows how to cancel the event if the number of the selected/dragged items is greater than 3:

````JavaScript
	
	        function onClientDragStartHandler(sender, e) {
	            if (e.get_sourceItems().length > 3) {
	                e.set_cancel(true);
	            }
	        }
				
````


