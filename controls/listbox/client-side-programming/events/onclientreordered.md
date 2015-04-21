---
title: OnClientReordered
page_title: OnClientReordered | UI for ASP.NET AJAX Documentation
description: OnClientReordered
slug: listbox/client-side-programming/events/onclientreordered
tags: onclientreordered
published: True
position: 18
---

# OnClientReordered

## 

The __OnClientReordered__ client-side event occurs after the item or items have been reordered.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_items()__ - returns an array of the items that have been reordered

* __get_item()__ - returns the item that has been reordered.

* __get_offset()__ - returns __-1__ if you are moving the item __up__ and __1__ if you are moving the item __down__.

* __get_domEvent()__ - returns the DOM event object

The following code notifies the user for a successful reordering of the item:

````JavaScript
function onClientReorderedHandler(sender, e) {
	alert("Successfully moved: " + e.get_item().get_text());
}			
````

# See Also

 * [OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%})
