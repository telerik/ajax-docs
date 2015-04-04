---
title: Updating
page_title: Updating | UI for ASP.NET AJAX Documentation
description: Updating
slug: listbox/server-side-programming/server-events/updating
tags: updating
published: True
position: 5
---

# Updating



## 

The __Updating__ server event fires when the __AutoPostBackOnReorder="True"__and the user tries to reorder an item / items__.__ It fires __after__ the [Reordering]({%slug listbox/server-side-programming/server-events/reordering%}) server event (is not cancelled) once for all selected items. If this event is not cancelled and the __AllowAutomaticUpdates="True"__ - the database is updated to reflect the new reordered list.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __Items__ - collection of all __RadListBoxItem__ objects which will be affected by the reordering. This collection is __different__ from the Items collection in the Reordering/Reordered events.

* __Cancel__ - set it to True to cancel the event and prevent the reordering to happen

>tabbedCode

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
	#End Region
	
	End Class


>end

# See Also

 * [Updated]({%slug listbox/server-side-programming/server-events/updated%})

 * [Reordering]({%slug listbox/server-side-programming/server-events/reordering%})

 * [Reordered]({%slug listbox/server-side-programming/server-events/reordered%})

 * [Reorder]({%slug listbox/functionality/reorder%})
