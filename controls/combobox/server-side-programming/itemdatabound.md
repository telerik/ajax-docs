---
title: ItemDataBound
page_title: ItemDataBound | RadComboBox for ASP.NET AJAX Documentation
description: ItemDataBound
slug: combobox/server-side-programming/itemdatabound
tags: itemdatabound
published: True
position: 3
---

# ItemDataBound



## 

The **ItemDataBound** event occurs for each new item that is added to the **Items** collection of the combobox when it is bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

For each item that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

2. The [ItemCreated]({%slug combobox/server-side-programming/itemcreated%}) event occurs.

3. The **Text** and **Value** properties of the item are set, based on the data.

4. The **ItemDataBound** event occurs.

The **ItemDataBound** event handler receives two arguments:

1. The **RadComboBox** that is loading items. This argument is of type object, but can be cast to the **RadComboBox** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadComboBoxItem** is being bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:



````C#
	     
	protected void RadComboBox1_ItemDataBound(object o, RadComboBoxItemEventArgs e)
	{ 
	    DataRowView dataSourceRow = (DataRowView) e.Item.DataItem;  
	    //set custom attributes from the datasource:  
	    e.Item.Attributes["customAttribute1"] = dataSourceRow["CustomAttribute1"].ToString(); 
	    e.Item.Attributes["customAttribute2"] = dataSourceRow["CustomAttribute2"].ToString();
	}
				
````
````VB.NET
	
	    Protected Sub RadComboBox1_ItemDataBound(ByVal o As Object, ByVal e As RadComboBoxItemEventArgs) Handles RadComboBox1.ItemDataBound
	
	        Dim dataSourceRow As DataRowView = CType(e.Item.DataItem, DataRowView)
	        'set custom attributes from the datasource:  
	        e.Item.Attributes("customAttribute1") = dataSourceRow("CustomAttribute1").ToString()
	        e.Item.Attributes("customAttribute1") = dataSourceRow("CustomAttribute2").ToString()
	
	    End Sub
	
````


# See Also

 * [Overview]({%slug combobox/data-binding/overview%})

 * [Custom Attributes]({%slug combobox/radcombobox-items/custom-attributes%})
