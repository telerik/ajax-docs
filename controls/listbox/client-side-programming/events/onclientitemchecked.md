---
title: OnClientItemChecked
page_title: OnClientItemChecked - RadListBox
description: Check our Web Forms article about OnClientItemChecked.
slug: listbox/client-side-programming/events/onclientitemchecked
tags: onclientitemchecked
published: True
position: 11
---

# OnClientItemChecked

## 

The **OnClientItemChecked** client-side event occurs after the item has been checked.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **get_item()** - returns the checked item

* **get_domEvent()** - returns the DOM event object


The following example shows how to select/unselect the item upon checking/unchecking:

````JavaScript
function OnClientItemCheckedHandler(sender, eventArgs) {
	var item = eventArgs.get_item();
	item.set_selected(item.get_checked());
}
````

# See Also

 * [OnClientItemChecking]({%slug listbox/client-side-programming/events/onclientitemchecking%})
