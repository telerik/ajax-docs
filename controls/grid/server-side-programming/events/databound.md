---
title: DataBound
page_title: DataBound Event - RadGrid | UI for ASP.NET AJAX
description: DataBound Event
slug: grid/server-side-programming/events/databound
published: True
position: 50
---

# DataBound Event

Fired when the server control is bound to a data source.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnDataBound="RadGrid1_DataBound"">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.DataBound += RadGrid1_DataBound;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.DataBound, AddressOf RadGrid1_DataBound
End Sub
````

The event handler

````C#
protected void RadGrid1_DataBound(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

  
