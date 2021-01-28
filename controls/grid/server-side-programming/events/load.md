---
title: Load
page_title: Load Event - RadGrid
description: Check our Web Forms article about Load Event.
slug: grid/server-side-programming/events/load
published: True
position: 50
---

# Load Event

Fired when the server control is loaded into the RadGrid object.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnLoad="RadGrid1_Load">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.Load += RadGrid1_Load;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.Load, AddressOf RadGrid1_Load
End Sub
````

The event handler

````C#
protected void RadGrid1_Load(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_Load(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

  
