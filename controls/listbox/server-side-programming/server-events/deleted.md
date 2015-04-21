---
title: Deleted
page_title: Deleted | UI for ASP.NET AJAX Documentation
description: Deleted
slug: listbox/server-side-programming/server-events/deleted
tags: deleted
published: True
position: 14
---

# Deleted

## 

The **Deleted** server event fires if the [Deleting]({%slug listbox/server-side-programming/server-events/deleting%}) event is not cancelled in one of the following cases:

* During transfer - when the **AutoPostBackOnTransfer="True"** and the user tries to transfer an item / items. It fires **after** the [Transferring]({%slug listbox/server-side-programming/server-events/transferring%}) server event (if not cancelled) once for all selected items. If this event is not cancelled and the **AllowAutomaticUpdates="True"** - the database is updated to reflect the new list.


* On item delete - when the **AutoPostBackOnDelete="True"**

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **Items** - collection of all **RadListBoxItem** objects which will be affected by the transfer / deletion.


````C#
protected void RadListBox1_Deleted(object sender, RadListBoxEventArgs e)
{
	Label.Text = "Deleted items are : ";
	foreach (RadListBoxItem item in e.Items)
	{
		Label.Text += item.Text + ",";
	}
}
````
````VB.NET
Protected Sub RadListBox1_Deleted(sender As Object, e As RadListBoxEventArgs)
	Label.Text = "Deleted items are : "
	For Each item As RadListBoxItem In e.Items
		Label.Text += item.Text + ","
	Next
End Sub
````

# See Also

 * [Deleting]({%slug listbox/server-side-programming/server-events/deleting%})
