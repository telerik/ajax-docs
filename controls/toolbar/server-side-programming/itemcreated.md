---
title: ItemCreated
page_title: ItemCreated | UI for ASP.NET AJAX Documentation
description: ItemCreated
slug: toolbar/server-side-programming/itemcreated
tags: itemcreated
published: True
position: 2
---

# ItemCreated



## 

The __ItemCreated__ event occurs for each new item that is added to the __Items__ collection of the toolbar.

The __ItemCreated__ event handler receives two arguments:

1. The __RadToolBar__ that is loading items. This argument is of type object, but can be cast to the __RadToolBar__ type.

1. An EventArgs object. This object has an __Item__ property, which provides access to the item that has just been added.

Use the __ItemCreated__ event handler to make changes to items as they are added to the toolbar:

>tabbedCode

````C#
	
	    protected void RadToolBar1_ItemCreated(object sender, RadToolBarEventArgs e) 
	    { 
	        e.Item.Text = "Some Text"; 
	    }
	
````



````VB.NET
	
	    Protected Sub RadToolBar1_ItemCreated(ByVal sender As Object, ByVal e As RadToolBarEventArgs)
	
	        e.Item.Text = "Some Text"
	
	    End Sub
	
````


>end

# See Also

 * [ButtonDataBound]({%slug toolbar/server-side-programming/buttondatabound%})
