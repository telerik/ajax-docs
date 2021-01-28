---
title: ItemEvent
page_title: ItemEvent Event - RadGrid
description: Check our Web Forms article about ItemEvent Event.
slug: grid/server-side-programming/events/itemevent
published: True
position: 50
---

# ItemEvent Event

Marked for internal usage.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridItemEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            Set to true to cancel the default event execution, if available. The ItemCreated and ItemDataBound event cannot be cancelled.

        * `(GridItemEventInfo)` **e.EventInfo**

            Event info object. Cast to derrived classes to obtain the appropriate instance.

        * `(GridItem)` **e.Item**

            Gets the `GridEditableItem` which fired the event.

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemEvent="RadGrid1_ItemEvent">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ItemEvent += RadGrid1_ItemEvent;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ItemEvent, AddressOf RadGrid1_ItemEvent
End Sub
````

The event handler

````C#
protected void RadGrid1_ItemEvent(object sender, GridItemEventArgs e)
{
    bool canceled = e.Canceled;
    GridItemEventInfo eventInfo = e.EventInfo;
    GridItem item = e.Item;
}
````
````VB
Protected Sub RadGrid1_ItemEvent(ByVal sender As Object, ByVal e As GridItemEventArgs)
    Dim canceled As Boolean = e.Canceled
    Dim eventInfo As GridItemEventInfo = e.EventInfo
    Dim item As GridItem = e.Item
End Sub
````
  
