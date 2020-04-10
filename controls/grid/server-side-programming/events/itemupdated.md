---
title: ItemUpdated
page_title: ItemUpdated Event - RadGrid | UI for ASP.NET AJAX
description: ItemUpdated Event
slug: grid/server-side-programming/events/itemupdated
published: True
position: 50
---

# ItemUpdated Event

Fired when an automatic update operation is executed.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridUpdatedEventArgs)` **e**

    * Event arguments 

        * `(int)` **e.AffectedRows**
            
            Gets the rows affected from the operation that changed the `RadGrid` data.

        * `(Exception)` **e.Exception**

            Gets the exception related with the operation. The property value will be 'null' if no exception occured durring the operation.
            
        * `(bool)` **e.ExceptionHandled**

            Gets or sets a value which if set to 'true' and exception was thrown will cause the `RadGrid` to skip throwing the exception and will let the user handle it.

        * `(GridEditableItem)` **e.Item**

            Gets the `GridEditableItem` which caused the event.
            
        * `(bool)` **e.KeepInEditMode**

            Gets or sets a value determining if the GridEditableItem which fired the event will stay in edit mode after the postback.

        * `(bool)` **e.SuppressRebind**

            Gets or sets a value determining if the `RadGrid`.Rebind() method will be called after the event.
            
            
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemUpdated="RadGrid1_ItemUpdated">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ItemUpdated += RadGrid1_ItemUpdated;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ItemUpdated, AddressOf RadGrid1_ItemUpdated
End Sub
````

The event handler

````C#
protected void RadGrid1_ItemUpdated(object sender, GridUpdatedEventArgs e)
{
    int affectedRows = e.AffectedRows;
    Exception exception = e.Exception;
    bool exceptionHandled = e.ExceptionHandled;
    GridEditableItem item = e.Item;
    bool keepInEditMode = e.KeepInEditMode;
    bool suppressRebind = e.SuppressRebind;
}
````
````VB
Protected Sub RadGrid1_ItemUpdated(ByVal sender As Object, ByVal e As GridUpdatedEventArgs)
    Dim affectedRows As Integer = e.AffectedRows
    Dim exception As Exception = e.Exception
    Dim exceptionHandled As Boolean = e.ExceptionHandled
    Dim item As GridEditableItem = e.Item
    Dim suppressRebind As Boolean = e.SuppressRebind
End Sub
````
  
