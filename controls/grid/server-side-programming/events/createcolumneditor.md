---
title: CreateColumnEditor
page_title: CreateColumnEditor Event - RadGrid | UI for ASP.NET AJAX
description: CreateColumnEditor Event
slug: grid/server-side-programming/events/createcolumneditor
published: True
position: 50
---

# CreateColumnEditor Event

Fired -after- the NeedDataSource event of the grid (which is raised right after the PageLoad event) and -before- any postback events for controls on the page/user control.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridCreateColumnEditorEventArgs)` **e**

    * Event arguments 

        * `(GridColumn)` **e.Column**

            Gets or sets the GridEditor asociated column.

        * `(IGridColumnEditor)` **e.ColumnEditor**

            Gets or sets the column editor that have been created.


### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnCreateColumnEditor="RadGrid1_CreateColumnEditor">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.CreateColumnEditor += RadGrid1_CreateColumnEditor;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.CreateColumnEditor, AddressOf RadGrid1_CreateColumnEditor
End Sub
````

The event handler

````C#
protected void RadGrid1_CreateColumnEditor(object sender, GridCreateColumnEditorEventArgs e)
{
    GridColumn column = e.Column;
    IGridColumnEditor columnEditor = e.ColumnEditor;
}
````
````VB
Protected Sub RadGrid1_CreateColumnEditor(ByVal sender As Object, ByVal e As GridCreateColumnEditorEventArgs)
    Dim column As GridColumn = e.Column
    Dim columnEditor As IGridColumnEditor = e.ColumnEditor
End Sub
````

# Examples

## Attaching a custom column editor programmatically

In a CreateColumnEditor event handler, you can attach an instance of your custom editor to a column by assigning the e.ColumnEditor parameter of the handler:

````C#
protected void RadGrid1_CreateColumnEditor(object sender, Telerik.Web.UI.GridCreateColumnEditorEventArgs e)
{
    GridBoundColumn column = e.Column as GridBoundColumn;
    if (column != null && column.DataField == "ShipAddress")
    {
        e.ColumnEditor = new MyMultiLineTextBoxColumnEditor(column);
    }
    if (column != null && column.DataField == "OrderDate")
    {
        e.ColumnEditor = new MyDateColumnEditor(column);
    }
}
````
````VB
Private Sub RadGrid1_CreateColumnEditor(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridCreateColumnEditorEventArgs) Handles RadGrid1.CreateColumnEditor
    Dim column As GridBoundColumn = TryCast(e.Column, GridBoundColumn)
    If column IsNot Nothing AndAlso column.DataField = "ShipAddress" Then
        e.ColumnEditor = New MultiLineTextBoxColumnEditor(column)
    End If
    If column IsNot Nothing AndAlso column.DataField = "OrderDate" Then
        e.ColumnEditor = New DateColumnEditor(column)
    End If
End Sub
````

  
