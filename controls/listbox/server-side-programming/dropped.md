---
title: Dropped
page_title: Dropped | RadListBox for ASP.NET AJAX Documentation
description: Dropped
slug: listbox/server-side-programming/server-events/dropped
tags: dropped
published: True
position: 2
---

# Dropped

## 

The **Dropped** event fires after the [Dropping]({%slug listbox/server-side-programming/server-events/dropping%}) event (if not cancelled). It is fired when a RadListBoxItem is dropped over an **HTML element** which has **id** attribute set. It is **not fired** when you drop an item over another RadListBox/RadListBoxItem.


The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following properties:

* **HtmlElementID** - the ID of the target element which the item is dropped over.

* **SourceDragItems** - a collection of RadListBoxItems which were dropped

````C#
protected void RadListBox_Dropped(object sender, RadListBoxDroppedEventArgs e)
{
	if (TextBox1.ClientID == e.HtmlElementID)
	{
		TextBox1.Text = String.Empty;
		foreach (RadListBoxItem item in e.SourceDragItems)
		{
			TextBox1.Text += item.Text + ", \n";
		}
		if (TextBox1.Text.Length > 0)
			TextBox1.Text = TextBox1.Text.TrimEnd(new char[] { ',', ' ', '\n' });
	}
} 		
````
````VB.NET
Protected Sub RadListBox_Dropped(sender As Object, e As RadListBoxDroppedEventArgs)
	If TextBox1.ClientID = e.HtmlElementID Then
		TextBox1.Text = [String].Empty
		For Each item As RadListBoxItem In e.SourceDragItems
			TextBox1.Text += item.Text + ", " & vbLf
		Next
		If TextBox1.Text.Length > 0 Then
			TextBox1.Text = TextBox1.Text.TrimEnd(New Char() {","C, " "C, ControlChars.Lf})
		End If
	End If
End Sub
````

# See Also

 * [Online Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/draganddrop/defaultvb.aspx)

 * [Dropping]({%slug listbox/server-side-programming/server-events/dropping%})

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})
