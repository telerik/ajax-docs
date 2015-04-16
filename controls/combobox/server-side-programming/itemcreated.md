---
title: ItemCreated
page_title: ItemCreated | UI for ASP.NET AJAX Documentation
description: ItemCreated
slug: combobox/server-side-programming/itemcreated
tags: itemcreated
published: True
position: 2
---

# ItemCreated



## 

The **ItemCreated** event occurs for each new item that is added to the **Items** collection of the combobox.

>note If the item is added from a data source (the **DataSource** or **DataSourceID** property specifies the source of the items), it is a good idea to use the [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) event instead. **ItemCreated** occurs before the **ItemDataBound** event (before any item properties have been set to reflect the data in the data source).
>


The **ItemCreated** event handler receives two arguments:

1. The **RadComboBox** that is loading items. This argument is of type object, but can be cast to the **RadComboBox** type.

1. An EventArgs object. This object has an **Item** property, which provides access to the item that has just been added.

Use the **ItemCreated** event handler to make changes to items as they are added to the combobox:



````C#
	
	    protected void Page_Load(object sender, EventArgs e) 
	    { 
	        if (!Page.IsPostBack)     
	            RadComboBox1.LoadContentFile("~/App_Data/combobox.xml"); 
	    }
	
	    protected void RadComboBox1_ItemCreated(object sender, RadComboBoxItemEventArgs e) 
	    { 
	        RadComboBoxItem newItem = e.Item; 
	        if (newItem.Text == "Paris")            
	            newItem.Enabled = false; 
	    }
	
````
````VB.NET
	     
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        If Not Page.IsPostBack Then
	
	            RadComboBox1.LoadContentFile("~/App_Data/combobox.xml")
	        End If
	    End Sub
	
	    Protected Sub RadComboBox1_ItemCreated(ByVal sender As Object, ByVal e As RadComboBoxItemEventArgs) Handles RadComboBox1.ItemCreated
	
	        Dim newItem As RadComboBoxItem = e.Item
	        If newItem.Text = "Paris" Then
	            newItem.Enabled = False
	        End If
	    End Sub
	
````


# See Also

 * [Overview]({%slug combobox/radcombobox-items/overview%})
