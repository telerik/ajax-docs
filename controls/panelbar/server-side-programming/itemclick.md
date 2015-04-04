---
title: ItemClick
page_title: ItemClick | UI for ASP.NET AJAX Documentation
description: ItemClick
slug: panelbar/server-side-programming/itemclick
tags: itemclick
published: True
position: 1
---

# ItemClick



## 

The server-side __ItemClick__ event occurs when the user clicks on a panel item, causing a postback.

The __ItemClick__ event handler receives two arguments:

1. The __RadPanelBar__ that contains the clicked item. This argument is of type object, but can be cast to the __RadPanelBar__ type.

1. A __RadPanelBarEventArgs__ object. This object has an __Item__ property that you can use to access the item that was clicked.

Use the __ItemClick__ event handler to respond when the user clicks an item in the panel bar.



````C#
	
	    protected void RadPanelBar1_ItemClick(object sender, RadPanelBarEventArgs e) 
	    { 
	        RadPanelItem ItemClicked = e.Item; Response.Write("Server event raised -- you clicked: " + ItemClicked.Text); 
	    }
	
````
````VB.NET
	
	    Protected Sub RadPanelBar1_ItemClick(ByVal sender As Object, ByVal e As RadPanelBarEventArgs)
	        Dim ItemClicked As RadPanelItem = e.Item
	        Response.Write("Server event raised -- you clicked: " + ItemClicked.Text)
	    End Sub
	
````


# See Also

 * [OnClientItemClicking]({%slug panelbar/client-side-programming/onclientitemclicking%})

 * [OnClientItemClicked]({%slug panelbar/client-side-programming/onclientitemclicked%})
