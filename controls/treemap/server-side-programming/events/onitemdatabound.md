---
title: OnItemDataBound
page_title: OnItemDataBound | UI for ASP.NET AJAX Documentation
description: OnItemDataBound
slug: treemap/server-side-programming/events/onitemdatabound
tags: onitemdatabound
published: True
position: 0
---

# OnItemDataBound



The following article demonstrates the usage of the __ItemDataBound__ server-side event of the __RadTreeMap__.

## 

The __ItemDataBound__ event occurs for each new item, that is added to the Items collection of the __RadTreeMap__, when it is bound. This event only occurs if the items are loaded from a data source (the __DataSource__or __DataSourceID__ property is set).

The __ItemDataBound__ event handler receives two arguments:

1. The __RadTreeMap__ that is loading items. This argument is of type object, but can be cast to the __RadTreeMap__ type.

1. An EventArgs object. This object has an __Item__ property, which provides access to the item that was just bound.

Use the __ItemDataBound__ event handler to make changes to items as they are bound to the data. For example, you can set custom color, based on a specific text of the currently evaluated item (see __Example 1__).

Example 1: Demonstrates how to set a red color, if the currently evaluated item Text is "Important Item":

>tabbedCode

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


>end
