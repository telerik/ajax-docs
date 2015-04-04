---
title: OnItemDataBound
page_title: OnItemDataBound | UI for ASP.NET AJAX Documentation
description: OnItemDataBound
slug: searchbox/search-context/events/onitemdatabound
tags: onitemdatabound
published: True
position: 0
---

# OnItemDataBound



The following article demonstrates the usage of the server-side event __OnItemDataBound__.

## 

The __ItemDataBound__ event occurs for each item that is added to the Items collection of the __SearchContext__ when it is bound. This event only occurs if the items are loaded from a data source (the DataSource or DataSourceID property is set). The event handler receives two parameters:

* __The SearchContext__ that is loading items. This argument is of type object, but can be cast to the SearchContext type.

* A __SearchBoxContextItemEventArgs__ object. This object has an Item property, which provides access to the item that was just bound. This item has a DataItem property, which lets you access the item in the data source, to which the __SearchContextItem__ is being bound.

__Example 1__: Demonstrates how to use the __ItemDataBound__ event handler, in order to set the __ImageUrl__ property of the __SearchContextItem__. 



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadSearchBox3.SearchContext.ItemDataBound += SearchContext_ItemDataBound;
	    }
	
	    void SearchContext_ItemDataBound(object sender, SearchBoxContextItemEventArgs e)
	    {
	        e.Item.ImageUrl = ((DataRowView)e.Item.DataItem)["PhotoPath"].ToString();
	    }
	
````
````VB.NET
	
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        RadSearchBox3.SearchContext.ItemDataBound += SearchContext_ItemDataBound
	    End Sub
	
	    Private Sub SearchContext_ItemDataBound(sender As Object, e As SearchBoxContextItemEventArgs)
	        e.Item.ImageUrl = DirectCast(e.Item.DataItem, DataRowView)("PhotoPath").ToString()
	
	    End Sub
	
````

