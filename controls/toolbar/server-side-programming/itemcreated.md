---
title: ItemCreated
page_title: ItemCreated - RadToolBar
description: Check our Web Forms article about ItemCreated.
slug: toolbar/server-side-programming/itemcreated
tags: itemcreated
published: True
position: 2
---

# ItemCreated

## 

The **ItemCreated** event occurs for each new item that is added to the **Items** collection of the toolbar.

The **ItemCreated** event handler receives two arguments:

1. The **RadToolBar** that is loading items. This argument is of type object, but can be cast to the **RadToolBar** type.

1. An EventArgs object. This object has an **Item** property, which provides access to the item that has just been added.

Use the **ItemCreated** event handler to make changes to items as they are added to the toolbar:


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

# See Also

 * [ButtonDataBound]({%slug toolbar/server-side-programming/buttondatabound%})
