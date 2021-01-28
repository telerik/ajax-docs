---
title: ItemDataBound
page_title: ItemDataBound - RadMultiColumnComboBox
description: Check our Web Forms article about ItemDataBound.
slug: multicolumncombobox/server-side-programming/events/itemdatabound
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

1. The **RadMultiColumnComboBox** that is loading items. This argument is of type object, but can be cast to the **RadMultiColumnComboBox** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadMultiColumnComboBox** is being bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can set custom attributes based on other fields in the DataItem:

````ASPNET
<telerik:RadMultiColumnComboBox DataTextField="Name" DataValueField="Id" runat="server" ID="RadMultiColumnComboBox1" OnItemDataBound="RadMultiColumnComboBox1_ItemDataBound">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="Id" Width="30px" Title="Id" />
        <telerik:MultiColumnComboBoxColumn Field="Title" Width="250px">
            <Template>
                Position of <strong>#:data.Title#</strong>: #: attributes.customAttrText #
            </Template>
        </telerik:MultiColumnComboBoxColumn>
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````


````C#
protected void RadMultiColumnComboBox1_ItemDataBound(object sender, RadMultiColumnComboBoxItemEventArgs e)
{
    var dataItem = e.Item.DataItem as MyClass;
    e.Item.Attributes.Add("customAttrText", "#" + dataItem.Id);
}

protected void Page_Load(object sender, EventArgs e)
{
    var items = Enumerable.Range(0, 10).Select(x => new MyClass() { Id = x, Name = "Name " + x, Title = "Title " + x });
    RadMultiColumnComboBox1.DataSource = items;
    RadMultiColumnComboBox1.DataBind();
}

public class MyClass
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}
````
````VB.NET
    Protected Sub RadMultiColumnComboBox1_ItemDataBound(ByVal sender As Object, ByVal e As RadMultiColumnComboBoxItemEventArgs)
        Dim dataItem = TryCast(e.Item.DataItem, [MyClass])
        e.Item.Attributes.Add("customAttrText", "#" & dataItem.Id)
    End Sub

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        Dim items = Enumerable.Range(0, 10).[Select](Function(x) New [MyClass]() With {
            .Id = x,
            .Name = "Name " & x,
            .Title = "Title " & x
        })
        RadMultiColumnComboBox1.DataSource = items
        RadMultiColumnComboBox1.DataBind()
    End Sub

    Public Class [MyClass]
        Public Property Id As Integer
        Public Property Name As String
        Public Property Title As String
    End Class
````

