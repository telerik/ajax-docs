---
title: ItemClick
page_title: ItemClick | RadMenu for ASP.NET AJAX Documentation
description: ItemClick
slug: menu/server-side-programming/itemclick
tags: itemclick
published: True
position: 1
---

# ItemClick


## 

The server-side **ItemClick** event occurs when the user clicks on a menu item, causing a postback.

The **ItemClick** event handler receives two arguments:

1. The **RadMenu** that contains the clicked item. This argument is of type object, but can be cast to the **RadMenu** type.

1. A **RadMenuEventArgs** object. This object has an **Item** property that you can use to access the item that was clicked.

Use the **ItemClick** event handler to respond when the user clicks an item in the menu.


````C#
protected void RadMenu1_ItemClick(object sender, RadMenuEventArgs e)
{ 
    Telerik.Web.UI.RadMenuItem ItemClicked = e.Item; 
    Response.Write("Server event raised -- you clicked: " + ItemClicked.Text); 
}
````
````VB.NET
Protected Sub RadMenu1_ItemClick(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMenuEventArgs) Handles RadMenu1.ItemClick
    Dim ItemClicked As Telerik.Web.UI.RadMenuItem = e.Item
    Response.Write("Server event raised -- you clicked: " + ItemClicked.Text)
End Sub
````


# See Also

 * [OnClientItemClicking]({%slug menu/client-side-programming/events/onclientitemclicking%})

 * [OnClientItemClicked]({%slug menu/client-side-programming/events/onclientitemclicked%})
