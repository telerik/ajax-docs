---
title: TabDataBound
page_title: TabDataBound | UI for ASP.NET AJAX Documentation
description: TabDataBound
slug: tabstrip/server-side-programming/tabdatabound
tags: tabdatabound
published: True
position: 3
---

# TabDataBound



## 

__TabDataBound__ occurs for each tab in the tab strip immediately after it is bound to a data source. This event only occurs when the application sets the __DataSource__ property and calls the __DataBind__ method explicitly, or when the __DataSourceID__ property is set at design time. The event occurs immediately after the tab properties have been set to reflect the values in the data source.

The __TabDataBound__ event handler receives two arguments:

1. The __RadTabStrip__ to which the tab was just added. This argument is of type object, but can be cast to the __RadTabStrip__ type.

1. A __RadTabStripEventArgs__ object. This object has an __Tab__ property that you can use to access the tab that was just added. You can access the data item to which the tab has just been bound using its __DataItem__ property. The value of __DataItem__ should be cast to the type of items in the data source so that you can work with its fields appropriately.

>note The __TabDataBound__ event handler is the only time when the __DataItem__ property of a tab is set.
>


Use a __TabDataBound__ event handler to initialize the properties of tabs to reflect values from the data source that are not automatically mapped using the __DataTextField__, __DataValueField__, and __NavigateUrlField__ properties:





````C#
	   
	protected void RadTabStrip1_TabDataBound(object sender, RadTabStripEventArgs e)
	{
	   DataRowView row = (DataRowView)e.Tab.DataItem;
	   e.Tab.Enabled = Boolean.Parse(row["Available"].ToString());
	   e.Tab.ToolTip = "Learn more about " + e.Tab.Text;
	} 
	
				
````
````VB.NET
	  
	Protected Sub RadTabStrip1_TabDataBound(ByVal sender As Object, ByVal e As RadTabStripEventArgs) Handles RadTabStrip1.TabDataBOund
	 Dim row As DataRowView = DirectCast(e.Tab.DataItem, DataRowView)
	 e.Tab.Enabled = [Boolean].Parse(row("Available").ToString())
	 e.Tab.ToolTip = "Learn more about " + e.Tab.Text
	End Sub 
	
				
````

