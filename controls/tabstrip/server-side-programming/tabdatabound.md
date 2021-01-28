---
title: TabDataBound
page_title: TabDataBound - RadTabStrip
description: Check our Web Forms article about TabDataBound.
slug: tabstrip/server-side-programming/tabdatabound
tags: tabdatabound
published: True
position: 3
---

# TabDataBound

## 

**TabDataBound** occurs for each tab in the tab strip immediately after it is bound to a data source. This event only occurs when the application sets the **DataSource** property and calls the **DataBind** method explicitly, or when the **DataSourceID** property is set at design time. The event occurs immediately after the tab properties have been set to reflect the values in the data source.

The **TabDataBound** event handler receives two arguments:

1. The **RadTabStrip** to which the tab was just added. This argument is of type object, but can be cast to the **RadTabStrip** type.

1. A **RadTabStripEventArgs** object. This object has an **Tab** property that you can use to access the tab that was just added. You can access the data item to which the tab has just been bound using its **DataItem** property. The value of **DataItem** should be cast to the type of items in the data source so that you can work with its fields appropriately.

>note The **TabDataBound** event handler is the only time when the **DataItem** property of a tab is set.
>


Use a **TabDataBound** event handler to initialize the properties of tabs to reflect values from the data source that are not automatically mapped using the **DataTextField**, **DataValueField**, and **NavigateUrlField** properties:

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

