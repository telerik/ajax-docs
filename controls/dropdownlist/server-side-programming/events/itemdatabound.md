---
title: ItemDataBound
page_title: ItemDataBound - RadDropDownList
description: Check our Web Forms article about ItemDataBound.
slug: dropdownlist/server-side-programming/events/itemdatabound
tags: itemdatabound
published: True
position: 0
---

# ItemDataBound



## 

The **ItemDataBound** event occurs for each new item that is added to the **Items** collection of the dropdownlist when it is bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

For each item that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

2. The **Text** and **Value** properties of the item are set, based on the data.

3. The **ItemDataBound** event occurs.

The **ItemDataBound** event handler receives two arguments:

1. The **RadDropDownList** that is loading items. This argument is of type object, but can be cast to the **RadDropDownList** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadDropDownListItem** is being bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1"
	 runat="server"
	 AutoPostBack="true"
	 OnItemDataBound="RadDropDownList1_ItemDataBound">
</telerik:RadDropDownList>
````





````C#
protected void Page_Load(object sender, EventArgs e)
{
	for (int i = 0; i < RadDropDownList1.Items.Count; i++)
	{
		RadDropDownList1.Items[i].DataBind();
	}
}

protected void RadDropDownList1_ItemDataBound(object sender, DropDownListItemEventArgs e)
{
	DataRowView dataItem = (DataRowView)e.Item.DataItem;
	e.Item.Attributes["ImagePath"] = dataItem["ImagePath"].ToString();
	e.Item.Attributes["Description"] = dataItem["Description"].ToString();
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	For i As Integer = 0 To RadDropDownList1.Items.Count - 1
		RadDropDownList1.Items(i).DataBind()
	Next
End Sub

Protected Sub RadDropDownList1_ItemDataBound(sender As Object, e As DropDownListItemEventArgs)
	Dim dataItem As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	e.Item.Attributes("ImagePath") = dataItem("ImagePath").ToString()
	e.Item.Attributes("Description") = dataItem("Description").ToString()
End Sub
````

