---
title: ColumnsReorder
page_title: ColumnsReorder Event - RadGrid | UI for ASP.NET AJAX
description: ColumnsReorder Event
slug: grid/server-side-programming/events/columnsreorder
published: True
position: 50
---

# ColumnsReorder Event

Fired when column reorder occurs (only when ClientSettings -> ReorderColumnsOnClient is set to false!)

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridColumnsReorderEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled

        * `(GridColumn)` **e.Source**

            Gets the column which will be reordered.

        * `(GridColumn)` **e.Target**

            Gets the column on which place will be positioned the reordered column.


### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnColumnsReorder="RadGrid1_ColumnsReorder">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ColumnsReorder += RadGrid1_ColumnsReorder;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ColumnsReorder, AddressOf RadGrid1_ColumnsReorder
End Sub
````

The event handler

````C#
protected void RadGrid1_ColumnsReorder(object sender, GridColumnsReorderEventArgs e)
{
    bool canceled = e.Canceled;
    GridColumn sourceColumn = e.Source;
    GridColumn targetColumn = e.Target;
}
````
````VB
Protected Sub RadGrid1_ColumnsReorder(ByVal sender As Object, ByVal e As GridColumnsReorderEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim sourceColumn As GridColumn = e.Source
    Dim targetColumn As GridColumn = e.Target
End Sub
````

  
