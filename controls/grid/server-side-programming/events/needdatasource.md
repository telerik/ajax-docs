---
title: NeedDataSource
page_title: NeedDataSource Event - RadGrid | UI for ASP.NET AJAX
description: NeedDataSource Event
slug: grid/server-side-programming/events/needdatasource
published: True
position: 50
---

# NeedDataSource Event

Fired when RadGrid needs a data source for rebinding.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridNeedDataSourceEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.IsFromDetailTable**

            Returns true if the event is fired for the DetailTable.

        * `(GridRebindReason)` **e.RebindReason**

            Gets a value specifying why the event was fired.

        * `(int)` **e.RowsCount**

            Gets a value specifying the number of rows that should be extracted from the data source when virtualization and custom paging are enabled.

        * `(int)` **e.StartRowIndex**

            Gets a value specifying the index of the first row in the data source that should be extracted when virtualization and custom paging are enabled.
            
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.NeedDataSource += RadGrid1_NeedDataSource;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.NeedDataSource, AddressOf RadGrid1_NeedDataSource
End Sub
````

The event handler

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    bool isFromDetailTable = e.IsFromDetailTable;
    GridRebindReason rebindReason= e.RebindReason;
    int rowsCount = e.RowsCount;
    int startRowIndex = e.StartRowIndex;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    Dim isFromDetailTable As Boolean = e.IsFromDetailTable
    Dim rebindReason As GridRebindReason = e.RebindReason
    Dim rowsCount As Integer = e.RowsCount
    Dim startRowIndex As Integer = e.StartRowIndex
End Sub
````

