---
title: ButtonDataBound
page_title: ButtonDataBound | UI for ASP.NET AJAX Documentation
description: ButtonDataBound
slug: toolbar/server-side-programming/buttondatabound
tags: buttondatabound
published: True
position: 3
---

# ButtonDataBound



## 

The __ButtonDataBound__ event occurs for each new button that is added to the __Items__ collection of the toolbar when it is bound. This event only occurs if the buttons are loaded from a data source (the __DataSource__ or __DataSourceID__ property is set).

For each button that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

1. The [ItemCreated]({%slug toolbar/server-side-programming/itemcreated%}) event occurs.

1. The __Text__ and __Value__ properties of the item are set, based on the data.

1. The __ButtonDataBound__ event occurs.

The __ButtonDataBound__ event handler receives two arguments:

1. The __RadToolBar__ that is loading items. This argument is of type object, but can be cast to the __RadToolBar__ type.

1. An EventArgs object. This object has an __Button__ property, which provides access to the item that was just bound. This item, in turn, has a __DataItem__ property, which lets you access the item in the data source to which the __RadToolBarButton__ is being bound.

Use the __ButtonDataBound__ event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:

>tabbedCode

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
>end

# See Also

 * [ItemCreated]({%slug toolbar/server-side-programming/itemcreated%})

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Custom Attributes]({%slug toolbar/radtoolbar-items/custom-attributes%})
