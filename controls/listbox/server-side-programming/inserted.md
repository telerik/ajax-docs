---
title: Inserted
page_title: Inserted - RadListBox
description: Check our Web Forms article about Inserted.
slug: listbox/server-side-programming/server-events/inserted
tags: inserted
published: True
position: 16
---

# Inserted

## 

The **Inserted** event fires after the items have been inserted in the destination **RadListBox**. It is fired after the [Deleted]({%slug listbox/server-side-programming/server-events/deleted%}), but before the [Transferred]({%slug listbox/server-side-programming/server-events/transferred%}) event.

The event handler receives two parameters:

1. The instance of the destination **RadListBox** firing the event

2. An event arguments parameter containing the following property:

* **Items** - collection of **RadListBoxItem** objects which have been inserted.


````C#
protected void DestinationListBox_Inserted(object sender, RadListBoxEventArgs e)
{
	Label.Text += e.Items.Count.ToString() + " items are inserted";
}
````
````VB.NET
Protected Sub DestinationListBox_Inserted(sender As Object, e As RadListBoxEventArgs)
	Label.Text += e.Items.Count.ToString() + " items are inserted"
End Sub
````

# See Also

 * [Inserting]({%slug listbox/server-side-programming/server-events/inserting%})

 * [Transferring]({%slug listbox/server-side-programming/server-events/transferring%})
 
 * [Transferred]({%slug listbox/server-side-programming/server-events/transferred%})

 * [Deleting]({%slug listbox/server-side-programming/server-events/deleting%})

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
