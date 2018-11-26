---
title: ItemCreated
page_title: ItemCreated | RadPanelBar for ASP.NET AJAX Documentation
description: ItemCreated
slug: panelbar/server-side-programming/itemcreated
tags: itemcreated
published: True
position: 2
---

# ItemCreated



## 

**ItemCreated** occurs every time a new item is added to the **Items** collection of the **RadPanelBar** instance or to the **Items** collection of an item in the panel bar. **ItemCreated** occurs for all panel items, not just those that result from data binding (when the **DataSource** or **DataSourceID** property is set).If the panel bar is bound to a data source, this event occurs *before* any data binding: that is, before any properties have been set to reflect the data from the data source.

>note When working with data-bound panel bars, it can be more useful to use the **[ItemDataBound event]({%slug panelbar/server-side-programming/itemdatabound%})** , which occurs after the item properties have been set to reflect the data source and which provides access to the **DataItem** property of an item.
>


The **ItemCreated** event handler receives two arguments:

1. The **RadPanelBar** to which the item was just added. This argument is of type object, but can be cast to the **RadPanelBar** type.

1. A **RadPanelBarEventArgs** object. This object has an **Item** property that you can use to access the item that was just added.

Use an **ItemCreated** event handler to initialize items as they are added to the panel bar when it is not data bound (for example, when they are [loaded from an XML file]({%slug panelbar/radpanelbar-items/loading-items-from-xml%})).



````C#
	
protected void RadPanelBar1_ItemCreated(object sender, RadPanelBarEventArgs e) 
{ 
    e.Item.ToolTip = e.Item.Text; 
}
	
````
````VB.NET
	
Protected Sub RadPanelBar1_ItemCreated(ByVal sender As Object, ByVal e As RadPanelBarEventArgs)
    e.Item.ToolTip = e.Item.Text
End Sub
	
````

