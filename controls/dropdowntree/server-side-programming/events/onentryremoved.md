---
title: OnEntryRemoved
page_title: OnEntryRemoved | RadDropDownTree for ASP.NET AJAX Documentation
description: OnEntryRemoved
slug: dropdowntree/server-side-programming/events/onentryremoved
tags: onentryremoved
published: True
position: 3
---

# OnEntryRemoved



## 

The server-side **OnEntryRemoved** event occurs when an entry is removed from the entry area, causing a postback. The postback is triggered when the dropdown is closed. To close the dropdown when a node is selected, you can set DropDownSettings-CloseDropDownOnSelection="true".

The event handler receives two parameters:

1. The instance of the **DropDownTree** firing the event

2. An event argument parameter that contains the following property:

	* **Entry** - returns the entry that has just being removed from the input.



````C#
	
protected void RadDropDownTree1_EntryRemoved(object sender, DropDownTreeEntryEventArgs e)
{
	Label1.Text = e.Entry.Text + " was removed.";
}
	
````
````VB.NET
	
Protected Sub RadDropDownTree1_EntryRemoved(sender As Object, e As DropDownTreeEntryEventArgs)
	Label1.Text = e.Entry.Text + " was removed."
End Sub
	
````


# See Also

 * [NodeDataBound]({%slug dropdowntree/server-side-programming/events/nodedatabound%})

 * [OnEntryAdded]({%slug dropdowntree/server-side-programming/events/onentryadded%})
 