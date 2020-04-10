---
title: ItemInserted
page_title: ItemInserted Event - RadGrid | UI for ASP.NET AJAX
description: ItemInserted Event
slug: grid/server-side-programming/events/iteminserted
published: True
position: 50
---

# ItemInserted Event

Fired when an automatic insert operation is executed.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridInsertedEventArgs)` **e**

    * Event arguments 

        * `(int)` **e.AffectedRows**
            
            Gets the rows affected from the operation that changed the `RadGrid` data.

        * `(Exception)` **e.Exception**

            Gets the exception related with the operation. The property value will be 'null' if no exception occured durring the operation.
            
        * `(bool)` **e.ExceptionHandled**

            Gets or sets a value which if set to 'true' and exception was thrown will cause the `RadGrid` to skip throwing the exception and will let the user handle it.

        * `(GridEditableItem)` **e.Item**

            Gets the `GridEditableItem` which caused the event.

        * `(bool)` **e.KeepInInsertMode**

            Gets or sets a value determining if the GridEditableItem which fired the event will stay in insert mode after the postback.

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemInserted="RadGrid1_ItemInserted">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ItemInserted += RadGrid1_ItemInserted;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ItemInserted, AddressOf RadGrid1_ItemInserted
End Sub
````

The event handler

````C#
protected void RadGrid1_ItemInserted(object sender, GridInsertedEventArgs e)
{
    int affectedRows = e.AffectedRows;
    Exception exception = e.Exception;
    bool exceptionHandled = e.ExceptionHandled;
    GridEditableItem item = e.Item;
    bool keepInInsertMode = e.KeepInInsertMode;
}
````
````VB
Protected Sub RadGrid1_ItemInserted(ByVal sender As Object, ByVal e As GridInsertedEventArgs)
    Dim affectedRows As Integer = e.AffectedRows
    Dim exception As Exception = e.Exception
    Dim exceptionHandled As Boolean = e.ExceptionHandled
    Dim item As GridEditableItem = e.Item
    Dim keepInInsertMode As Boolean = e.KeepInInsertMode
End Sub
````
