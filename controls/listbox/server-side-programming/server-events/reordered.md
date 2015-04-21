---
title: Reordered
page_title: Reordered | UI for ASP.NET AJAX Documentation
description: Reordered
slug: listbox/server-side-programming/server-events/reordered
tags: reordered
published: True
position: 4
---

# Reordered

## 

The __Reordered__ event fires after the [Updated]({%slug listbox/server-side-programming/server-events/updated%}) event. The __Items__ collection of the listbox is updated to reflect the reordering.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __Items__ - collection of __RadListBoxItem__ objects which were reordered.


````C#
protected void RadListBox1_Reordered(object sender, RadListBoxEventArgs e)
{
	foreach (RadListBoxItem item in e.Items)
	{
		item.Text = "Reordered Item";
	}
}
````
````VB.NET
Protected Sub RadListBox1_Reordered(sender As Object, e As RadListBoxEventArgs)
	For Each item As RadListBoxItem In e.Items
		item.Text = "Reordered Item"
	Next
End Sub
````

# See Also

 * [Reordering]({%slug listbox/server-side-programming/server-events/reordering%})

 * [Reorder]({%slug listbox/functionality/reorder%})
