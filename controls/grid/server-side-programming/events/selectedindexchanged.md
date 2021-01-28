---
title: SelectedIndexChanged
page_title: SelectedIndexChanged Event - RadGrid
description: Check our Web Forms article about SelectedIndexChanged Event.
slug: grid/server-side-programming/events/selectedindexchanged
published: True
position: 50
---

# SelectedIndexChanged Event

Fired when a different item is selected in a data listing control between posts to the server.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnSelectedIndexChanged="RadGrid1_SelectedIndexChanged">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.SelectedIndexChanged += RadGrid1_SelectedIndexChanged;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.SelectedIndexChanged, AddressOf RadGrid1_SelectedIndexChanged
End Sub
````

The event handler

````C#
protected void RadGrid1_SelectedIndexChanged(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

  
