---
title: OnClientTransferred
page_title: OnClientTransferred | UI for ASP.NET AJAX Documentation
description: OnClientTransferred
slug: listbox/client-side-programming/events/onclienttransferred
tags: onclienttransferred
published: True
position: 20
---

# OnClientTransferred

## 

The __OnClientTransferred__ client-side event occurs after the selected item has been transferred to the destination RadListBox.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __get_item()__ - returns the item that has been transferred.

* __get_items()__ - returns an array of items that have been transferred.

* __get_sourceListBox()__ - returns the instance of the source RadListBox which the item currently belongs to

* __get_destinationListBox()__ - returns the instance of the destination RadListBox where the item is transferring to.

* __get_domEvent()__ - returns the DOM event object

The following code notifies the user for a successful transferring of the item:

````JavaScript	
function onClientTransferredHandler(sender, e) {
	alert("Successfully transferred: " + e.get_item().get_text());
}				
````

# See Also

 * [OnClientTransferring]({%slug listbox/client-side-programming/events/onclienttransferring%})
