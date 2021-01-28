---
title: Deleting
page_title: Deleting - RadListBox
description: Check our Web Forms article about Deleting.
slug: listbox/server-side-programming/server-events/deleting
tags: deleting
published: True
position: 13
---

# Deleting

## 

The **Deleting** server event fires in one of the following cases:

* During transfer - when the **AutoPostBackOnTransfer="True"** and the user tries to transfer an item / items. It fires **after** the [Transferring]({%slug listbox/server-side-programming/server-events/transferring%}) server event (if not cancelled) once for all selected items. If this event is not cancelled and the **AllowAutomaticUpdates="True"** - the database is updated to reflect the new list.

* On item delete - when the **AutoPostBackOnDelete="True"**

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following properties:

* **Items** - collection of all **RadListBoxItem** objects which will be affected by the transfer / deletion.

* **Cancel** - set it to True to cancel the event and prevent the deleting to happen

````C#
protected void RadListBox1_Deleting(object sender, RadListBoxEventArgs e)
{
	Label.Text = "Deleted items count is " + e.Items.Count.ToString();
}
````
````VB.NET
Protected Sub RadListBox1_Deleting(sender As Object, e As RadListBoxEventArgs)
	Label.Text = "Deleted items count is " + e.Items.Count.ToString()
End Sub
````


# See Also

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
 
 * [Transferring]({%slug listbox/server-side-programming/server-events/transferring%})
 
 * [Transferred]({%slug listbox/server-side-programming/server-events/transferred%})
 
 * [Inserting]({%slug listbox/server-side-programming/server-events/inserting%})
 
 * [Inserted]({%slug listbox/server-side-programming/server-events/inserted%})
