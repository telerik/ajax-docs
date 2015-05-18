---
title: ItemCheck
page_title: ItemCheck | RadListBox for ASP.NET AJAX Documentation
description: ItemCheck
slug: listbox/server-side-programming/server-events/itemcheck
tags: itemcheck
published: True
position: 9
---

# ItemCheck

## 

The **ItemCheck** event fires after a user checks or unchecks an item's checkbox. To fire automatically the **AutoPostBack** property should be set to True.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following property:

* **Item** - the RadListBoxItem object that has just been checked/unchecked

````C#
protected void RadListBox1_ItemCheck(object sender, RadListBoxItemEventArgs e)
{
	Label.Text = e.Item.Text;
}	
````
````VB.NET
Protected Sub RadListBox1_ItemCheck(sender As Object, e As RadListBoxItemEventArgs)
	Label.Text = e.Item.Text
End Sub
````


