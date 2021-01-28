---
title: Transferring
page_title: Transferring - RadListBox
description: Check our Web Forms article about Transferring.
slug: listbox/server-side-programming/server-events/transferring
tags: transferring
published: True
position: 11
---

# Transferring

## 

The **Transferring** server event fires when the **AutoPostBackOnTransfer="True"** and the user tries to transfer an item / items. It fires **before** the [Deleting]({%slug listbox/server-side-programming/server-events/deleting%}) server event (if not cancelled) once for all selected items. If this event is not cancelled and the **AllowAutomaticUpdates="True"** - the database is updated to reflect the new reordered list.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following properties:

* **Items** - collection of all **RadListBoxItem** objects which will be affected by the transfer.

* **Cancel** - set it to True to cancel the event and prevent the transfer to happen


````C#
protected void SourceListBox_Transferring(object sender, RadListBoxTransferringEventArgs e)
{
	e.Cancel = true;
}
````
````VB.NET
Protected Sub SourceListBox_Transferring(sender As Object, e As RadListBoxTransferringEventArgs)
	e.Cancel = True
End Sub
````

# See Also

 * [Transferred]({%slug listbox/server-side-programming/server-events/transferred%})

 * [Deleting]({%slug listbox/server-side-programming/server-events/deleting%})

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
 
 * [Inserting]({%slug listbox/server-side-programming/server-events/inserting%})
 
 * [Inserted]({%slug listbox/server-side-programming/server-events/inserted%})
