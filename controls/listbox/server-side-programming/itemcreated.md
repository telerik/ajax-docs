---
title: ItemCreated
page_title: ItemCreated | RadListBox for ASP.NET AJAX Documentation
description: ItemCreated
slug: listbox/server-side-programming/server-events/itemcreated
tags: itemcreated
published: True
position: 17
---

# ItemCreated

## 

The **ItemCreated** event occurs for each new item that is added to the **Items** collection of the RadListBox.

>note If the item is added from a data source (the **DataSource** or **DataSourceID** property specifies the source of the items), it is a good idea to use the [ItemDataBound]({%slug combobox/server-side-programming/itemdatabound%}) event instead. **ItemCreated** occurs before the **ItemDataBound** event (before any item properties have been set to reflect the data in the data source).
>


The **ItemCreated** event handler receives two arguments:

* The **RadListBox** that is loading items. This argument is of type object, but can be cast to the **RadListBox** type.

* An EventArgs object of type **RadListBoxItemEventArgs**. This object has an **Item** property, which provides access to the item that has just been added.


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
````

# See Also
