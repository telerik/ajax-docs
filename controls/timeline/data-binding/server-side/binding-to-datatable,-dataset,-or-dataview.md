---
title: Binding to DataTable, DataSet, or DataView
page_title: Binding to DataTable, DataSet, or DataView | RadTimeline for ASP.NET AJAX Documentation
description: Binding to DataTable, DataSet, or DataView
slug: timeline/data-binding/server-side/binding-to-datatable,-dataset,-or-dataview
tags: binding,to,datatable,,dataset,or,dataview
published: True
position: 2
---

# Binding to DataTable, DataSet, or DataView

## 

**RadTimeline** can be bound also to a **DataTable**, **DataSet** and **DataView**. The example below shows binding to a DataTable object on the server-side.

To demonstrate that this binding is happening entirely programmatically in the code-behind, the declaration of the following **RadTimeline** object includes no `DataSourceID` property or `<Items>` section:

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" 
OnItemDataBound="RadTimeline1_ItemDataBound"></telerik:RadTimeline>
````

In the **Page_Load** event handler, you can create and fill the DataTable object, then bind it to the RadTimeline. The `DataBind()` method should be called after setting the `DataSource` property.  

The binding of the `Actions` fields in the sample below is done in the Timeline's OnItemDataBound event handler, which allows you to ajust the `Actions` related data further.

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

    DataRow[] orderActions = OrderActionsTable().Select("OrderID = " + orderID);
    foreach (DataRow row in orderActions)
    {
        e.Item.Actions.Add(new TimelineItemAction()
        {
            Text = row["Text"].ToString(),
            Url = row["Url"].ToString()
        });
    }
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
    Dim orderActions As DataRow() = OrderActionsTable().[Select]("OrderID = " & orderID)

    For Each row As DataRow In orderActions
        e.Item.Actions.Add(New TimelineItemAction() With {
            .Text = row("Text").ToString(),
            .Url = row("Url").ToString()
        })
    Next
End Sub
````

