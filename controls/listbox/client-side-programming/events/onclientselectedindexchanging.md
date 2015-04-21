---
title: OnClientSelectedIndexChanging
page_title: OnClientSelectedIndexChanging | UI for ASP.NET AJAX Documentation
description: OnClientSelectedIndexChanging
slug: listbox/client-side-programming/events/onclientselectedindexchanging
tags: onclientselectedindexchanging
published: True
position: 21
---

# OnClientSelectedIndexChanging

## 

The **OnClientSelectedIndexChanging** client-side event occurs when the selected item is about to be changed. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_item()** - returns the item that is about to be selected.

* **set_cancel()** - lets you cancel the event and prevent items from being selected.

* **get_domEvent()** - returns the DOM event object

The example below shows how to ask the user before selecting the item:

````JavaScript	
function onClientSelectedIndexChangingHandler(sender, e) {
	if (!confirm("Are you sure?")) {
		e.set_cancel(true);
	}
}
````

# See Also

 * [OnClientSelectedIndexChanged]({%slug listbox/client-side-programming/events/onclientselectedindexchanged%})
