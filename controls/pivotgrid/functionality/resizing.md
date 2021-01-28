---
title: Resizing
page_title: Resizing - RadPivotGrid
description: Check our Web Forms article about Resizing.
slug: pivotgrid/functionality/resizing
tags: resizing
published: True
position: 5
---

# Resizing

If you want the pivotgrid to be resizable, set the **ClientSettings.Resizing.AllowColumnResize** property to **True**. When **AllowColumnResize** is **True**, users can resize columns by dragging the handle between column headers. The default value for this property is **false**.

>note When Resizing is enabled, the **ColumnHeaderTableLayout** property is set to **Fixed**.
>

## Real-Time Resizing

There are two modes of column resizing with respect to visualization:

* The content of the resized columns can be rendered real-time as the user drags the handle. This feature puts a significant load on client computer's CPU.

* Users can see only the handle moving during a resize operation, and only when the mouse is released are the resized columns rendered. In this mode, the load on the CPU is much lighter.

To specify whether columns are resized using real-time resizing, set the **ClientSettings.Resizing.EnableRealTimeResize** property. The default value for this property is **False**.

When **EnableRealTimeResize** is **False**, only the resizing handle is rendered.

When **EnableRealTimeResize** is **True**, the column content is rendered during resize.


## Example

You can set the resizing-related properties declaratively at design time:

````ASP.NET
<telerik:RadPivotGrid RenderMode="Lightweight" runat="server">
  <ClientSettings>
    <Resizing AllowColumnResize="True" EnableRealTimeResize="True"/>
  </ClientSettings>
  ...
</telerik:RadPivotGrid>
````

You can also set these properties at runtime in the code-behind:


````C#
RadPivotGrid RadPivotGrid1 = new RadPivotGrid();
RadPivotGrid1.ClientSettings.Resizing.AllowColumnResize = true;
RadPivotGrid1.ClientSettings.Resizing.EnableRealTimeResize = true;
//...			
````
````VB
Dim RadPivotGrid1 As RadPivotGrid = New RadPivotGrid
RadPivotGrid1.ClientSettings.Resizing.AllowColumnResize = True
RadGrid1.ClientSettings.Resizing.EnableRealTimeResize = true
'...

````



