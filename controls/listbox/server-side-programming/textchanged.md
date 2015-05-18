---
title: TextChanged
page_title: TextChanged | RadListBox for ASP.NET AJAX Documentation
description: TextChanged
slug: listbox/server-side-programming/server-events/textchanged
tags: textchanged
published: True
position: 8
---

# TextChanged

## 

The **TextChanged** fires when you change the selected item. It will fire automatically if the **AutoPostBack="True".**The event fires after the [SelectedIndexChanged]({%slug listbox/server-side-programming/server-events/selectedindexchanged%}) server event.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing no methods


````C#
protected void RadListBox1_TextChanged(object sender, EventArgs e)
{
	TextBox.Text = RadListBox1.SelectedItem.Text;
}
````
````VB.NET
Protected Sub RadListBox1_TextChanged(sender As Object, e As EventArgs)
	TextBox.Text = RadListBox1.SelectedItem.Text
End Sub
````

# See Also

 * [SelectedIndexChanged]({%slug listbox/server-side-programming/server-events/selectedindexchanged%})
