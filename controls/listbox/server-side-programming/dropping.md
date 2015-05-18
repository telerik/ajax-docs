---
title: Dropping
page_title: Dropping | RadListBox for ASP.NET AJAX Documentation
description: Dropping
slug: listbox/server-side-programming/server-events/dropping
tags: dropping
published: True
position: 1
---

# Dropping

## 

The **Dropping** server event fires just before a RadListBoxItem is dropped over an **HTML element** which has **id** attribute set. The event can be cancelled. It is **not fired** when you drop an item over another RadListBox/RadListBoxItem.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **HtmlElementID** - the ID of the target element which the item is dropped over.

* **Cancel** - set it to True to cancel the event and prevent the dropping

* **SourceDragItems** - a collection of RadListBoxItems which are about to be dropped

````C#
protected void RadListBox_Dropping(object sender, RadListBoxDroppedEventArgs e)
{
	if (TextBox1.ClientID != e.HtmlElementID)
	{
		e.Cancel = true;
	}
} 
````
````VB.NET
Protected Sub RadListBox_Dropping(sender As Object, e As RadListBoxDroppedEventArgs)
	If TextBox1.ClientID <> e.HtmlElementID Then
		e.Cancel = True
	End If
End Sub 
````

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/draganddrop/defaultvb.aspx)

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Dropped]({%slug listbox/server-side-programming/server-events/dropped%})
