---
title: Init
page_title: Init Event - RadGrid
description: Check our Web Forms article about Init Event.
slug: grid/server-side-programming/events/init
published: True
position: 50
---

# Init Event

Fired when the server control is initialized, which is the first step in its lifecycle.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnInit="RadGrid1_Init">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.Init += RadGrid1_Init;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.Init, AddressOf RadGrid1_Init
End Sub
````

The event handler

````C#
protected void RadGrid1_Init(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_Init(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

  
