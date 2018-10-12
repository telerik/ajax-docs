---
title: ItemCreated
page_title: ItemCreated | RadMenu for ASP.NET AJAX Documentation
description: ItemCreated
slug: menu/server-side-programming/itemcreated
tags: itemcreated
published: True
position: 2
---

# ItemCreated

## 

**ItemCreated** occurs every time a new item is added to **Items** collection of the **RadMenu** instance or to the **Items** collection of an item in the menu. **ItemCreated** occurs for all menu items, not just those that result from data binding (when the **DataSource** or **DataSourceID** property is set).If the menu is bound to a data source, this event occurs *before* any data binding: that is, before any properties have been set to reflect the data from the data source.

>note When working with data-bound menus, it can be more useful to use the **[ItemDataBound event]({%slug menu/server-side-programming/itemdatabound%})** , which occurs after the item properties have been set to reflect the data source and which provides access to the **DataItem** property of an item.
>


The **ItemCreated** event handler receives two arguments:

1. The **RadMenu** to which the item was just added. This argument is of type object, but can be cast to the **RadMenu** type.

1. A **RadMenuEventArgs** object. This object has an **Item** property that you can use to access the item that was just added.

Use an **ItemCreated** event handler to initialize items as they are added to the menu when it is not data bound (for example, when they are [loaded from an XML file]({%slug menu/radmenu-items/loading-items-from-xml%}) or [from a Web service]({%slug menu/data-binding/web-service-binding%})).



````C#
protected void RadMenu1_ItemCreated(object sender, RadMenuEventArgs e)
{ 
    e.Item.ToolTip = e.Item.Text; 
}
````
````VB.NET
Protected Sub RadMenu1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMenuEventArgs) Handles RadMenu1.ItemCreated
    e.Item.ToolTip = e.Item.Text
End Sub
````


# See Also

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Custom Attributes]({%slug menu/radmenu-items/custom-attributes%})
