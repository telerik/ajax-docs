---
title: ItemDataBound
page_title: ItemDataBound | RadTimeline for ASP.NET AJAX Documentation
description: ItemDataBound
slug: timeline/server-side-programming/events/itemdatabound
tags: itemdatabound
published: True
position: 0
---

# ItemDataBound

## 

The **ItemDataBound** event occurs for each new item that is added to the **Items** collection of **RadTimeline** when it is bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

For each item that is added from a data source, the following events occur:

1. A new item is created and added to the Items collection.

2. The **Title**, **Subtitle**, **Date** and **Description** properties of the item are set, based on the data.

3. The **ItemDataBound** event occurs.

The **ItemDataBound** event handler receives two arguments:

1. The **RadTimeline** instance that is loading items. This argument is of type object, but can be cast to the **RadTimeline** type.

2. An EventArgs object. This object has an **Item** property, which provides access to the item that was just bound. This item, in turn, has a **DataItem** property, which lets you access the item in the data source to which the **RadTimeline** is being bound.

Use the **ItemDataBound** event handler to make changes to items as they are bound to the data. For example, you can customize the `Url` of the items based on other fields in the DataItem:

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" OnItemDataBound="RadTimeline1_ItemDataBound"></telerik:RadTimeline>
````


````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadTimeline1.DataTitleField = "ShipName";
        RadTimeline1.DataSubtitleField = "ShipCountry";
        RadTimeline1.DataDateField = "OrderDate";
        RadTimeline1.DataDescriptionField = "Freight";
        RadTimeline1.DataSource = OrdersTable();
        RadTimeline1.DataBind();
    }
}
public int OrdersCount = 10;
private DataTable OrderActionsTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("ActionID", typeof(int)));
    dt.Columns.Add(new DataColumn("Text", typeof(string)));
    dt.Columns.Add(new DataColumn("Url", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["ActionID"] };
    var rand = new Random();

    for (int i = 0; i < rand.Next(4, 20); i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["ActionID"] = index;
        row["OrderID"] = rand.Next(0, OrdersCount);
        row["Text"] = "Action " + (i + 1);
        row["Url"] = "https://google.com/search?q=action+" + (i + 1);

        dt.Rows.Add(row);
    }

    return dt;
}
private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < OrdersCount; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}


protected void RadTimeline1_ItemDataBound(object sender, RadTimelineItemEventArgs e)
{
    var dataItem = e.Item.DataItem as DataRowView;
    var orderID = dataItem["OrderID"].ToString();
    e.Item.Actions.Add(new TimelineItemAction()
    {
        Text = "Go to order",
        Url = "https://google.com/search?q=" + orderID
    });
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        RadTimeline1.DataTitleField = "ShipName"
        RadTimeline1.DataSubtitleField = "ShipCountry"
        RadTimeline1.DataDateField = "OrderDate"
        RadTimeline1.DataDescriptionField = "Freight"
        RadTimeline1.DataSource = OrdersTable()
        RadTimeline1.DataBind()
    End If
End Sub

Public OrdersCount As Integer = 10

Private Function OrderActionsTable() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("ActionID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("Text", GetType(String)))
    dt.Columns.Add(New DataColumn("Url", GetType(String)))
    dt.PrimaryKey = New DataColumn() {dt.Columns("ActionID")}
    Dim rand = New Random()

    For i As Integer = 0 To rand.[Next](4, 20) - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()
        row("ActionID") = index
        row("OrderID") = rand.[Next](0, OrdersCount)
        row("Text") = "Action " & (i + 1)
        row("Url") = "https://google.com/search?q=action+" & (i + 1)
        dt.Rows.Add(row)
    Next

    Return dt
End Function

Private Function OrdersTable() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
    dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
    dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

    For i As Integer = 0 To OrdersCount - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()
        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index
        dt.Rows.Add(row)
    Next

    Return dt
End Function

Protected Sub RadTimeline1_ItemDataBound(ByVal sender As Object, ByVal e As RadTimelineItemEventArgs)
    Dim dataItem = TryCast(e.Item.DataItem, DataRowView)
    Dim orderID = dataItem("OrderID").ToString()
    e.Item.Actions.Add(New TimelineItemAction() With {
        .Text = "Go to order",
        .Url = "https://google.com/search?q=" & orderID
    })
End Sub
````


