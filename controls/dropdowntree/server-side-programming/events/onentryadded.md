---
title: OnEntryAdded
page_title: OnEntryAdded | RadDropDownTree for ASP.NET AJAX Documentation
description: OnEntryAdded
slug: dropdowntree/server-side-programming/events/onentryadded
tags: onentryadded
published: True
position: 2
---

# OnEntryAdded



## 

The server-side **OnEntryAdded** event occurs when an entry is added to the entry area, causing a postback.

The event handler receives two parameters:

1. The instance of the **DropDownTree** firing the event

2. An event argument parameter that contains the following property:

	* **Entry** - returns the entry that has just being added to the input.
	
	
	
````C#
	
protected void RadDropDownTree1_EntryAdded(object sender, DropDownTreeEntryEventArgs e)
{
	Label1.Text = e.Entry.Text + " was added.";
}
	
````
````VB.NET
	
Protected Sub RadDropDownTree1_EntryAdded(sender As Object, e As DropDownTreeEntryEventArgs)
	Label1.Text = e.Entry.Text + " was added."
End Sub
	
````


# See Also

 * [NodeDataBound]({%slug dropdowntree/server-side-programming/events/nodedatabound%})

 * [OnEntryRemoved]({%slug dropdowntree/server-side-programming/events/onentryremoved%})
