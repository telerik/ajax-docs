---
title: Updated
page_title: Updated | RadListBox for ASP.NET AJAX Documentation
description: Updated
slug: listbox/server-side-programming/server-events/updated
tags: updated
published: True
position: 6
---

# Updated

## 

The **Updated** event fires after the [Updating]({%slug listbox/server-side-programming/server-events/updating%}) event (if not cancelled) and after the database has been updated (if **AllowAutomaticUpdates="True"**)

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **Items** - collection of all **RadListBoxItem** objects which will be affected by the reordering. This collection is **different** from the Items collection in the Reordering/Reordered events


````C#	
protected void RadListBox1_Updated(object sender, RadListBoxEventArgs e)
{
	Label.Text = "Updated Item new index is " + e.Items[0].Index;
}
````
````VB.NET	
Protected Sub RadListBox1_Updated(sender As Object, e As RadListBoxEventArgs)
	Label.Text = "Updated Item new index is " + e.Items(0).Index.ToString()
End Sub
````

# See Also

 * [Updating]({%slug listbox/server-side-programming/server-events/updating%})

 * [Reorder]({%slug listbox/functionality/reorder%})
