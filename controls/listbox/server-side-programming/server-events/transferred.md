---
title: Transferred
page_title: Transferred | UI for ASP.NET AJAX Documentation
description: Transferred
slug: listbox/server-side-programming/server-events/transferred
tags: transferred
published: True
position: 12
---

# Transferred



## 

The __Transferred__ event fires after the [Deleted]({%slug listbox/server-side-programming/server-events/deleted%}) event. The __Items__ collection of the listbox is updated to reflect the transferring.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __Items__ - collection of __RadListBoxItem__ objects which were transferred.



````C#
	    protected void SourceListBox_Transferred(object sender, RadListBoxTransferredEventArgs e)
	    {
	        Label.Text += e.Items.Count.ToString() + " items are transferred";
	    }
````
````VB.NET
	    Protected Sub SourceListBox_Transferred(sender As Object, e As RadListBoxTransferredEventArgs)
	        Label.Text += e.Items.Count.ToString() + " items are transferred"
	    End Sub
	#End Region
	
	End Class




# See Also

 * [Transferring]({%slug listbox/server-side-programming/server-events/transferring%})

 * [Deleting]({%slug listbox/server-side-programming/server-events/deleting%})

 * [Deleted]({%slug listbox/server-side-programming/server-events/deleted%})
