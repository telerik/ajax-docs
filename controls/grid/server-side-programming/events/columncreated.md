---
title: ColumnCreated
page_title: ColumnCreated Event - RadGrid | UI for ASP.NET AJAX
description: ColumnCreated Event
slug: grid/server-side-programming/events/columncreated
published: True
position: 50
---

# ColumnCreated Event

This event is fired after the creation of auto-generated columns (including structure columns). You can get the column from the event arguments and check its data type or unique name to recognize it. In this event you could set the column properties and customize the look and behavior of the column.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridColumnCreatedEventArgs)` **e**

    * Event arguments 

        * `(GridColumn)` **e.Column**

            Gets the column that have been created.

        * `(GridTableView)` **e.OwnerTableView**

            Gets the GridTableView which holds the column which have been created.


### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnColumnCreated="RadGrid1_ColumnCreated">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ColumnCreated += RadGrid1_ColumnCreated;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ColumnCreated, AddressOf RadGrid1_ColumnCreated
End Sub
````

The event handler

````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    GridColumn column = e.Column;
    GridTableView ownerTableView = e.OwnerTableView;
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
    Dim column As GridColumn = e.Column
    Dim ownerTableView As GridTableView = e.OwnerTableView
End Sub
````

# Examples

## Customizing auto-generated columns

````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    if (e.Column.UniqueName == "FirstName")
    {
        e.Column.HeaderText = "Name";
        e.Column.AutoPostBackOnFilter = true;
    }
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
    If e.Column.UniqueName = "FirstName" Then
        e.Column.HeaderText = "Name"
        e.Column.AutoPostBackOnFilter = True
    End If
End Sub
````

## Localizing the Grid Headers

````ASPX
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True" runat="server" OnColumnCreated="RadGrid1_ColumnCreated">
  <MasterTableView Width="100%" AutoGenerateColumns="True" />
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="SELECT * FROM [Customers]"> </asp:SqlDataSource>
````
````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    GridColumn boundColumn = e.Column as GridColumn;
    switch (boundColumn.UniqueName)
    {
        case "ContactName":
            boundColumn.HeaderText = "My customized contact name";
            break;
        case "ContactTitle":
            boundColumn.HeaderText = "My customized contact title";
            break;
        case "Address":
            boundColumn.HeaderText = "My customized address";
            break;
    }
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
    Dim boundColumn As GridColumn = CType(e.Column, GridColumn)

    Select Case boundColumn.UniqueName
        Case "ContactName"
            boundColumn.HeaderText = "My customized contact name"
        Case "ContactTitle"
            boundColumn.HeaderText = "My customized contact title"
        Case "Address"
            boundColumn.HeaderText = "My customized address"
    End Select
End Sub
````
  
