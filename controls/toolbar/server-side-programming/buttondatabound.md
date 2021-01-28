---
title: ButtonDataBound
page_title: ButtonDataBound - RadToolBar
description: Check our Web Forms article about ButtonDataBound.
slug: toolbar/server-side-programming/buttondatabound
tags: buttondatabound
published: True
position: 3
---

# ButtonDataBound

## 

The **ButtonDataBound** event occurs for each new button that is added to the **Items** collection of the toolbar when it is bound. This event only occurs if the buttons are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

For each button that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

1. The [ItemCreated]({%slug toolbar/server-side-programming/itemcreated%}) event occurs.

1. The **Text** and **Value** properties of the item are set, based on the data.

1. The **ButtonDataBound** event occurs.

The **ButtonDataBound** event handler receives two arguments:

1. The **RadToolBar** that is loading items. This argument is of type object, but can be cast to the **RadToolBar** type.

1. An EventArgs object. This object has an **Button** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadToolBarButton** is being bound.

Use the **ButtonDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:


````C#	     
protected void RadToolBar1_ButtonDataBound(object sender, RadToolBarButtonEventArgs e)
{   
    DataRowView dataSourceRow = (DataRowView) e.Item.DataItem;     
    //set custom attributes from the datasource:     
    e.Button.Attributes["customAttribute1"] = dataSourceRow["CustomAttribute1"].ToString();     
}				
````
````VB.NET	     
Protected Sub RadToolBar1_ButtonDataBound(ByVal sender As Object, ByVal e As RadToolBarButtonEventArgs)

    Dim dataSourceRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
    'set custom attributes from the datasource: 
    e.Button.Attributes("customAttribute1") = dataSourceRow("CustomAttribute1").ToString()

End Sub	
````


# See Also

 * [ItemCreated]({%slug toolbar/server-side-programming/itemcreated%})

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Custom Attributes]({%slug toolbar/radtoolbar-items/custom-attributes%})
