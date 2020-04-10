---
title: ColumnCreating
page_title: ColumnCreating Event - RadGrid | UI for ASP.NET AJAX
description: ColumnCreating Event
slug: grid/server-side-programming/events/columncreating
published: True
position: 50
---

# ColumnCreating Event

Fires before a custom column is created. You can handle the event to replace or modify the instance of the column that should be created and added into the collection of column in the corresponding GridTableView .

>note RadGrid ColumnCreating event is fired only for custom columns that inherit one of RadGrid's column types. Additionally, as this event is fired very early in RadGrid's lifecycle, it will not fire if the custom user-created column is placed declaratively in the .aspx page, as the markup is parsed at a later stage.
>Another peculiarity to note, is that the ColumnCreating event will fire only after a postback. It will not fire on initial page load (IsPostBack = false). The explanation for this is that the event is designed to service any needs to restore custom column properties from the viewstate or other source. Where these column properties are initially set when defining the custom column, this is not the case when the page posts back and RadGrid needs to load its properties from the viewstate. This is where the ColumnCreating event comes in, giving the ability to manually restore custom properties for the column.
>

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridColumnCreatingEventArgs)` **e**

    * Event arguments 

        * `(GridColumn)` **e.Column**

            Gets or sets the column which will be created.

        * `(string)` **e.ColumnTupe**

            Gets the the type of the column which will be created.

        * `(GridTableView)` **e.OwnerTableView**

            Gets the GridTableView which holds the column which will be created.


### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnColumnCreating="RadGrid1_ColumnCreating">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ColumnCreating += RadGrid1_ColumnCreating;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ColumnCreating, AddressOf RadGrid1_ColumnCreating
End Sub
````

The event handler

````C#
protected void RadGrid1_ColumnCreating(object sender, GridColumnCreatingEventArgs e)
{
    GridColumn a = e.Column;
    string columnType = e.ColumnType;
    GridTableView ownerTableView = e.OwnerTableView;
}
````
````VB
Protected Sub RadGrid1_ColumnCreating(ByVal sender As Object, ByVal e As GridColumnCreatingEventArgs)
    Dim column As GridColumn = e.Column
    Dim columnType As String = e.ColumnType
    Dim ownerTableView As GridTableView = e.OwnerTableView
End Sub
````

