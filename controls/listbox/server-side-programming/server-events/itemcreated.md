---
title: ItemCreated
page_title: ItemCreated | UI for ASP.NET AJAX Documentation
description: ItemCreated
slug: listbox/server-side-programming/server-events/itemcreated
tags: itemcreated
published: True
position: 15
---

# ItemCreated



## 

The __ItemCreated__event occurs for each new item that is added to the __Items__ collection of the RadListBox.

>note If the item is added from a data source (the __DataSource__ or __DataSourceID__ property specifies the source of the items), it is a good idea to use the[ItemDataBound](4F4B15B3-7C02-4BAF-A1E1-27F089C40A92)event instead. __ItemCreated__ occurs before the __ItemDataBound__ event (before any item properties have been set to reflect the data in the data source).
>


The __ItemCreated__event handler receives two arguments:

* The __RadListBox__ that is loading items. This argument is of type object, but can be cast to the __RadListBox__ type.

* An EventArgs object of type __RadListBoxItemEventArgs__. This object has an __Item__ property, which provides access to the item that has just been added.

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            RadListBoxItem newItem = new RadListBoxItem("New Item", "NewItemValue");
	            RadListBox1.Items.Add(newItem);
	        }
	    }
	
	    protected void RadListBox1_ItemCreated(object sender, RadListBoxItemEventArgs e)
	    {
	        RadListBoxItem newItem = e.Item;
	        if (newItem.Text == "New Item")
	        {
	            newItem.Enabled = false;
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            Dim newItem As New RadListBoxItem("New Item", "NewItemValue")
	            RadListBox1.Items.Add(newItem)
	        End If
	    End Sub
	
	    Protected Sub RadListBox1_ItemCreated(sender As Object, e As RadListBoxItemEventArgs)
	        Dim newItem As RadListBoxItem = e.Item
	        If newItem.Text = "New Item" Then
	            newItem.Enabled = False
	        End If
	    End Sub
	#End Region
	
	
	End Class


>end

# See Also
