---
title: DetailTableDataBind
page_title: DetailTableDataBind Event - RadGrid
description: Check our Web Forms article about DetailTableDataBind Event.
slug: grid/server-side-programming/events/detailtabledatabind
published: True
position: 50
---

# DetailTableDataBind Event

Fired when a table from DetailTablesCollection binds to a data source.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridDetailTableDataBindEventArgs)` **e**

    * Event arguments

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(GridTableView)` **e.DetailTableView**

            Gets a reference to the detail table being bound.

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.DetailTableDataBind += RadGrid1_DetailTableDataBind;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.DetailTableDataBind, AddressOf RadGrid1_DetailTableDataBind
End Sub
````

The event handler

````C#
protected void RadGrid1_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
{
    bool canceled = e.Canceled;
    GridTableView detailTableView = e.DetailTableView;
}
````
````VB
Protected Sub RadGrid1_DetailTableDataBind(ByVal sender As Object, ByVal e As GridDetailTableDataBindEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim detailTableView As GridTableView = e.DetailTableView
End Sub
````

# Exemples

## Hierarchical data-binding

Binding detail tables using database select

````C#
private void RadGrid1_DetailTableDataBind(object source, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
    GridDataItem parentItem = e.DetailTableView.ParentItem as GridDataItem;
    if (parentItem.Edit)
    {
        return;
    }
    if (e.DetailTableView.DataMember == "OrderDetails")
    {
        dsNWind1.OrderDetails.Clear();
        daOrderDetails.SelectCommand.CommandText = "Select * from [Order Details] where OrderID = " + parentItem["OrderID"].Text;
        daOrderDetails.Fill(dsNWind1.OrderDetails);
    }
}
````
````VB
Private Sub RadGrid1_DetailTableDataBind(ByVal source As Object, ByVal e As GridDetailTableDataBindEventArgs) Handles RadGrid1.DetailTableDataBind
    Dim parentItem As GridDataItem = CType(e.DetailTableView.ParentItem, GridDataItem)
    If parentItem.Edit Then
        Return
    End If
    If (e.DetailTableView.DataMember = "OrderDetails") Then
        dsNWind1.OrderDetails.Clear()
        daOrderDetails.SelectCommand.CommandText = "Select * from [Order Details] where OrderID = " + parentItem("OrderID").Text
        daOrderDetails.Fill(dsNWind1.OrderDetails)
    End If
End Sub
````

  
