---
title: OnClientReordering
page_title: OnClientReordering | RadListBox for ASP.NET AJAX Documentation
description: OnClientReordering
slug: listbox/client-side-programming/events/onclientreordering
tags: onclientreordering
published: True
position: 17
---

# OnClientReordering

## 

The **OnClientReordering** client-side event occurs when the item or items are about to be reordered. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_items()** - returns an array of the items selected for reordering

* **get_item()** - returns the item that is about to be reordered.

* **get_offset()** - returns **-1** if you are moving the item **up** and **1** if you are moving the item **down**.

* **set_cancel()** - lets you cancel the event and prevent items from being moved.

* **get_domEvent()** - returns the DOM event object

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
