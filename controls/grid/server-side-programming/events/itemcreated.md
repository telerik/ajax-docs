---
title: ItemCreated
page_title: ItemCreated Event - RadGrid | UI for ASP.NET AJAX
description: ItemCreated Event
slug: grid/server-side-programming/events/itemcreated
published: True
position: 50
---

# ItemCreated Event

Fired on the server when an item in the RadGrid control is created.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridItemEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            Set to true to cancel the default event execution, if available. The ItemCreated event cannot be cancelled.

        * `(GridItemEventInfo)` **e.EventInfo**

            Event info object. Cast to derrived classes to obtain appropriate instance.

        * `(GridItem)` **e.Item**

            Gets the GridItem which fired the event.

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemCreated="RadGrid1_ItemCreated">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ItemCreated += RadGrid1_ItemCreated;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ItemCreated, AddressOf RadGrid1_ItemCreated
End Sub
````

The event handler

````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    bool canceled = e.Canceled;
    GridItemEventInfo eventInfo = e.EventInfo;
    GridItem item = e.Item;
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim eventInfo As GridItemEventInfo = e.EventInfo
    Dim item As GridItem = e.Item
End Sub
````

