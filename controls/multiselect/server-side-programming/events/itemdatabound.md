---
title: ItemDataBound
page_title: ItemDataBound | RadMultiSelect for ASP.NET AJAX Documentation
description: ItemDataBound
slug: multiselect/server-side-programming/events/itemdatabound
tags: itemdatabound
published: True
position: 0
---

# ItemDataBound


## 

The **ItemDataBound** event occurs for each new item that is added to the **Items** collection of **RadMultiSelect** when it is bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

For each item that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

2. The **Text** and **Value** properties of the item are set, based on the data.

3. The **ItemDataBound** event occurs.

The **ItemDataBound** event handler receives two arguments:

1. The **RadMultiSelect** instance that is loading items. This argument is of type object, but can be cast to the **RadMultiSelect** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadMultiSelect** is being bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:

````ASPNET
<telerik:RadMultiSelect runat="server" DataTextField="Name" DataValueField="ID" ID="RadMultiSelect1" Filter="Contains" OnItemDataBound="RadMultiSelect1_ItemDataBound">
</telerik:RadMultiSelect>
````


````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadMultiSelect1.DataSource = Enumerable.Range(1, 10).Select(x => new MyCustomItem()
        {
            ID = x,
            Name = "Name #" + x
        });

        RadMultiSelect1.DataBind();
    }
}

protected void RadMultiSelect1_ItemDataBound(object sender, Telerik.Web.UI.RadMultiSelectItemEventArgs e)
{
    e.Item.Attributes.Add("myAttribute", "Attribute " + e.Item.Value);
}

public class MyCustomItem
{
    public int ID { get; set; }
    public string Name { get; set; }
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        RadMultiSelect1.DataSource = Enumerable.Range(1, 10).[Select](Function(x) New MyCustomItem() With {
        .ID = x,
        .Name = "Name #" & x
    })
        RadMultiSelect1.DataBind()
    End If
End Sub

Protected Sub RadMultiSelect1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMultiSelectItemEventArgs)
    e.Item.Attributes.Add("myAttribute", "Attribute " & e.Item.Value)
End Sub

Public Class MyCustomItem
    Public Property ID As Integer
    Public Property Name As String
End Class
````


