---
title: Updating
page_title: Updating | RadListBox for ASP.NET AJAX Documentation
description: Updating
slug: listbox/server-side-programming/server-events/updating
tags: updating
published: True
position: 5
---

# Updating


## 

The **Updating** server event fires when the **AutoPostBackOnReorder="True"** and the user tries to reorder an item / items. It fires **after** the [Reordering]({%slug listbox/server-side-programming/server-events/reordering%}) server event (is not cancelled) once for all selected items. If this event is not cancelled and the **AllowAutomaticUpdates="True"** - the database is updated to reflect the new reordered list.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **Items** - collection of all **RadListBoxItem** objects which will be affected by the reordering. This collection is **different** from the Items collection in the Reordering/Reordered events.

* **Cancel** - set it to True to cancel the event and prevent the reordering to happen

````C#
protected void RadListBox1_Updating(object sender, RadListBoxUpdatingEventArgs e)
{
	Label.Text = "Updated items count is " + e.Items.Count;
}
````
````VB.NET
Protected Sub RadListBox1_Updating(sender As Object, e As RadListBoxUpdatingEventArgs)
	Label.Text = "Updated items count is " + e.Items.Count.ToString()
End Sub
````

# See Also

 * [Updated]({%slug listbox/server-side-programming/server-events/updated%})

 * [Reordering]({%slug listbox/server-side-programming/server-events/reordering%})

 * [Reordered]({%slug listbox/server-side-programming/server-events/reordered%})

 * [Reorder]({%slug listbox/functionality/reorder%})
