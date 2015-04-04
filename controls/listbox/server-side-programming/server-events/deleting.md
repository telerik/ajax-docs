---
title: Deleting
page_title: Deleting | UI for ASP.NET AJAX Documentation
description: Deleting
slug: listbox/server-side-programming/server-events/deleting
tags: deleting
published: True
position: 13
---

# Deleting



## 

The __Deleting__ server event fires in one of the following cases:

* During transfer - when the __AutoPostBackOnTransfer="True"__and the user tries to transfer an item / items__.__ It fires __after__ the [Transferring]({%slug listbox/server-side-programming/server-events/transferring%}) server event (if not cancelled) once for all selected items. If this event is not cancelled and the __AllowAutomaticUpdates="True"__ - the database is updated to reflect the new list.

* On item delete - when the __AutoPostBackOnDelete="True"__

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __Items__ - collection of all __RadListBoxItem__ objects which will be affected by the transfer / deletion.

* __Cancel__ - set it to True to cancel the event and prevent the deleting to happen



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
	#End Region
	
	End Class
````



# See Also

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
