---
title: ItemDataBound
page_title: ItemDataBound | UI for ASP.NET AJAX Documentation
description: ItemDataBound
slug: panelbar/server-side-programming/itemdatabound
tags: itemdatabound
published: True
position: 3
---

# ItemDataBound



## 

__ItamDataBound__ occurs for each item in the panel bar immediately after it has been bound to a data source. This event only occurs when the application sets the __DataSource__ property and calls the __DataBind__ method explicitly, or when the __DataSourceID__ property is set at design time. The event occurs immediately after the item properties have been set to reflect the values in the data source.

The __ItemDataBound__ event handler receives two arguments:

1. The __RadPanelBar__ to which the item was just added. This argument is of type object, but can be cast to the __RadPanelBar__ type.

1. A __RadPanelBarEventArgs__ object. This object has an __Item__ property that you can use to access the item that was just added. You can access the data item to which the item has just been bound using its __DataItem__ property. The value of __DataItem__ should be cast to the type of items in the data source so that you can work with its fields appropriately.

>note The __ItemDataBound__ event handler is the only time when the __DataItem__ property of a panel item is set.
>


Use an __ItemDataBound__ event handler to initialize the properties of panel items to reflect values from the data source that are not mapped automatically using the __DataTextField__, __DataValueField__, and __DataNavigateUrlField__ properties:

>tabbedCode

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
>end

# See Also

 * [Overview]({%slug panelbar/data-binding/overview%})
