---
title: OnClientReordered
page_title: OnClientReordered - RadListBox
description: Check our Web Forms article about OnClientReordered.
slug: listbox/client-side-programming/events/onclientreordered
tags: onclientreordered
published: True
position: 18
---

# OnClientReordered

## 

The **OnClientReordered** client-side event occurs after the item or items have been reordered.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_items()** - returns an array of the items that have been reordered

* **get_item()** - returns the item that has been reordered.

* **get_offset()** - returns **-1** if you are moving the item **up** and **1** if you are moving the item **down**.

* **get_domEvent()** - returns the DOM event object

The following code notifies the user for a successful reordering of the item:

````JavaScript
function onClientReorderedHandler(sender, e) {
	alert("Successfully moved: " + e.get_item().get_text());
}			
````

# See Also

 * [OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%})
