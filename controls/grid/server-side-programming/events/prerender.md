---
title: PreRender
page_title: PreRender Event - RadGrid
description: Check our Web Forms article about PreRender Event.
slug: grid/server-side-programming/events/prerender
published: True
position: 50
---

# PreRender Event

Fired when the server control is about to render to its containing Page object.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnPreRender="RadGrid1_PreRender">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.PreRender += RadGrid1_PreRender;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.PreRender, AddressOf RadGrid1_PreRender
End Sub
````

The event handler

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

  
