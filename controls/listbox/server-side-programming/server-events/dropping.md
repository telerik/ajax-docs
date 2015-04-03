---
title: Dropping
page_title: Dropping | UI for ASP.NET AJAX Documentation
description: Dropping
slug: listbox/server-side-programming/server-events/dropping
tags: dropping
published: True
position: 1
---

# Dropping



## 

The __Dropping__ server event fires just before a RadListBoxItem is dropped over an __HTML element__ which has __id__ attribute set. The event can be cancelled. It is __not fired__ when you drop an item over another RadListBox/RadListBoxItem.



The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __HtmlElementID__ - the ID of the target element which the item is dropped over.

* __Cancel__ - set it to True to cancel the event and prevent the dropping

* __SourceDragItems__ - a collection of RadListBoxItems which are about to be dropped

````C#
	
	    protected void RadListBox_Dropping(object sender, RadListBoxDroppedEventArgs e)
	    {
	        if (TextBox1.ClientID != e.HtmlElementID)
	        {
	            e.Cancel = true;
	        }
	    } 
				
````



# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/draganddrop/defaultvb.aspx)

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Dropped]({%slug listbox/server-side-programming/server-events/dropped%})
