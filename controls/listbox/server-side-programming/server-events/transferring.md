---
title: Transferring
page_title: Transferring | UI for ASP.NET AJAX Documentation
description: Transferring
slug: listbox/server-side-programming/server-events/transferring
tags: transferring
published: True
position: 11
---

# Transferring

## 

The __Transferring__ server event fires when the __AutoPostBackOnTransfer="True"__ and the user tries to transfer an item / items. It fires __before__ the [Deleting]({%slug listbox/server-side-programming/server-events/deleting%}) server event (if not cancelled) once for all selected items. If this event is not cancelled and the __AllowAutomaticUpdates="True"__ - the database is updated to reflect the new reordered list.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __Items__ - collection of all __RadListBoxItem__ objects which will be affected by the transfer.

* __Cancel__ - set it to True to cancel the event and prevent the transfer to happen


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
