---
title: DataBinding
page_title: DataBinding Server Event - RadGrid | UI for ASP.NET AJAX
description: DataBinding Server Event
slug: grid/server-side-programming/events/databinding
published: True
position: 50
---

# DataBinding Server Event

Fired right before the server control binds to a data source. This event will fire only once, when RadGrid is initially binding.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(EventArgs)` **e**

    * Does not contain arguments

### Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnDataBinding="RadGrid1_DataBinding">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.DataBinding += RadGrid1_DataBinding;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.DataBinding, AddressOf RadGrid1_DataBinding
End Sub
````

The event handler

````C#
protected void RadGrid1_DataBinding(object sender, EventArgs e)
{
    //execute some logic
}
````
````VB
Protected Sub RadGrid1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
    'execute some logic
End Sub
````

