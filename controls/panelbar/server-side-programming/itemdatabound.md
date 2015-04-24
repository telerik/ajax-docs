---
title: ItemDataBound
page_title: ItemDataBound | RadPanelBar for ASP.NET AJAX Documentation
description: ItemDataBound
slug: panelbar/server-side-programming/itemdatabound
tags: itemdatabound
published: True
position: 3
---

# ItemDataBound



## 

**ItamDataBound** occurs for each item in the panel bar immediately after it has been bound to a data source. This event only occurs when the application sets the **DataSource** property and calls the **DataBind** method explicitly, or when the **DataSourceID** property is set at design time. The event occurs immediately after the item properties have been set to reflect the values in the data source.

The **ItemDataBound** event handler receives two arguments:

1. The **RadPanelBar** to which the item was just added. This argument is of type object, but can be cast to the **RadPanelBar** type.

1. A **RadPanelBarEventArgs** object. This object has an **Item** property that you can use to access the item that was just added. You can access the data item to which the item has just been bound using its **DataItem** property. The value of **DataItem** should be cast to the type of items in the data source so that you can work with its fields appropriately.

>note The **ItemDataBound** event handler is the only time when the **DataItem** property of a panel item is set.
>


Use an **ItemDataBound** event handler to initialize the properties of panel items to reflect values from the data source that are not mapped automatically using the **DataTextField**, **DataValueField**, and **DataNavigateUrlField** properties:



````C#
	
	    protected void RadPanelBar1_ItemDataBound(object sender, RadPanelBarEventArgs e)
	    {
	        DataRowView row = (DataRowView)e.Item.DataItem;
	        e.Item.Enabled = Boolean.Parse(row["Available"].ToString());
	        e.Item.ToolTip = "Learn more about " + e.Item.Text;
	    }
	
````
````VB.NET
	
	    Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As RadPanelBarEventArgs)
	        Dim row As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	        e.Item.Enabled = [Boolean].Parse(row("Available").ToString())
	        e.Item.ToolTip = "Learn more about " + e.Item.Text
	    End Sub
	
````


# See Also

 * [Overview]({%slug panelbar/data-binding/overview%})
