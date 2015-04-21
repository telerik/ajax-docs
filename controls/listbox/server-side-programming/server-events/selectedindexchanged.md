---
title: SelectedIndexChanged
page_title: SelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: SelectedIndexChanged
slug: listbox/server-side-programming/server-events/selectedindexchanged
tags: selectedindexchanged
published: True
position: 7
---

# SelectedIndexChanged

## 

The __SelectedIndexChanged__ fires when you change the selected item. It will fire automatically if the __AutoPostBack="True"__. The event fires before the [TextChanged]({%slug listbox/server-side-programming/server-events/textchanged%}) server event.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing no methods


````C#	
protected void RadListBox1_SelectedIndexChanged(object sender, EventArgs e)
{
	Label.Text = "You have selected item : " +  RadListBox1.SelectedItem.Text;
}	
````
````VB.NET	
Protected Sub RadListBox1_SelectedIndexChanged(sender As Object, e As EventArgs)
	Label.Text = "You have selected item : " + RadListBox1.SelectedItem.Text
End Sub
````

# See Also

 * [TextChanged]({%slug listbox/server-side-programming/server-events/textchanged%})
