---
title: OnClientTransferred
page_title: OnClientTransferred | RadListBox for ASP.NET AJAX Documentation
description: OnClientTransferred
slug: listbox/client-side-programming/events/onclienttransferred
tags: onclienttransferred
published: True
position: 20
---

# OnClientTransferred

## 

The **OnClientTransferred** client-side event occurs after the selected item has been transferred to the destination RadListBox.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_item()** - returns the item that has been transferred.

* **get_items()** - returns an array of items that have been transferred.

* **get_sourceListBox()** - returns the instance of the source RadListBox which the item currently belongs to

* **get_destinationListBox()** - returns the instance of the destination RadListBox where the item is transferring to.

* **get_domEvent()** - returns the DOM event object

The following code notifies the user for a successful transferring of the item:

````JavaScript	
function onClientTransferredHandler(sender, e) {
	alert("Successfully transferred: " + e.get_item().get_text());
}				
````

# See Also

 * [OnClientTransferring]({%slug listbox/client-side-programming/events/onclienttransferring%})
