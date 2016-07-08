---
title: Inserting
page_title: Inserting | RadListBox for ASP.NET AJAX Documentation
description: Inserting
slug: listbox/server-side-programming/server-events/inserting
tags: inserting
published: True
position: 15
---

# Inserting

## 

The **Inserting** server event fires when the **AutoPostBackOnTransfer="True"** and the user tries to insert an item / items. It fires **after** the [Deleting]({%slug listbox/server-side-programming/server-events/deleting%}) server event (when items are transferred from another **RadListBox** control) once for all items which are about to be inserted.

The event handler receives two parameters:

1. The instance of the destination **RadListBox** firing the event

2. An event arguments parameter containing the following properties:

* **Items** - collection of all **RadListBoxItem** objects which are about to be inserted.

* **Cancel** - set it to True to cancel the event and prevent the insertion to happen


````C#
protected void DestinationListBox_Inserting(object sender, RadListBoxInsertingEventArgs e)
{
	e.Cancel = true;
}
````
````VB.NET
Protected Sub DestinationListBox_Inserting(sender As Object, e As RadListBoxInsertingEventArgs)
	e.Cancel = True
End Sub
````

# See Also

 * [Inserted]({%slug listbox/server-side-programming/server-events/inserted%})
 
 * [Transferring]({%slug listbox/server-side-programming/server-events/transferring%})

 * [Transferred]({%slug listbox/server-side-programming/server-events/transferred%})

 * [Deleting]({%slug listbox/server-side-programming/server-events/deleting%})

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
