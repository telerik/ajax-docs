---
title: OnItemDataBound
page_title: OnItemDataBound - RadTreeMap
description: Check our Web Forms article about OnItemDataBound.
slug: treemap/server-side-programming/events/onitemdatabound
tags: onitemdatabound
published: True
position: 0
---

# OnItemDataBound



The following article demonstrates the usage of the **ItemDataBound** server-side event of the **RadTreeMap**.

## 

The **ItemDataBound** event occurs for each new item, that is added to the Items collection of the **RadTreeMap**, when it is bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

The **ItemDataBound** event handler receives two arguments:

1. The **RadTreeMap** that is loading items. This argument is of type object, but can be cast to the **RadTreeMap** type.

1. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom color, based on a specific text of the currently evaluated item (see **Example 1**).

Example 1: Demonstrates how to set a red color, if the currently evaluated item Text is "Important Item":



````C#	
protected void TreeMap1_ItemDataBound(object sender, TreeMapItemDataBoundEventArguments e)
{
    if (e.Item.Text == "Important Item")
        e.Item.Color = Color.Red;
}	
````
````VB	
Protected Sub TreeMap1_ItemDataBound(sender As Object, e As TreeMapItemDataBoundEventArguments)
    If e.Item.Text = "Important Item" Then
        e.Item.Color = Color.Red
    End If
End Sub	
````

