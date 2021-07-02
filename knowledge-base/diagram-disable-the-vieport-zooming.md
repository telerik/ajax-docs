---
title: Disable the Viewport Zooming in RadDiagram
description: Disable the Viewport Zooming in RadDiagram. Check it now!
type: how-to
page_title: Disable the Viewport Zooming in RadDiagram
slug: diagram-disable-the-vieport-zooming
res_type: kb
---


### DESCRIPTION

If you have a requirement to disable the buil-in zooming of the Diagram's viewport areа, you can achieve it by configuring the zooming levels of the control.

### SOLUTION

You can disable the zooming either by increasing  the `ZoomRate` of the diagram:

````ASP.NET
<telerik:RadDiagram ID="RadDiagram1" runat="server" Width="1000" Height="700" ZoomRate="0">
    <LayoutSettings Enabled="true"></LayoutSettings>
    <ShapesCollection>
        <telerik:DiagramShape Id="s1"></telerik:DiagramShape>
        <telerik:DiagramShape Id="s2"></telerik:DiagramShape>
    </ShapesCollection>
    <ConnectionsCollection>
        <telerik:DiagramConnection>
            <FromSettings ShapeId="s1" />
            <ToSettings ShapeId="s2" />
        </telerik:DiagramConnection>
    </ConnectionsCollection>
</telerik:RadDiagram>
````


or passing the same value to its `ZoomMin` and `ZoomMax` properties:

````ASP.NET
<telerik:RadDiagram ID="RadDiagram1" runat="server" Width="1000" Height="700" ZoomMin="1" ZoomMax="1">
    <LayoutSettings Enabled="true"></LayoutSettings>
    <ShapesCollection>
        <telerik:DiagramShape Id="s1"></telerik:DiagramShape>
        <telerik:DiagramShape Id="s2"></telerik:DiagramShape>
    </ShapesCollection>
    <ConnectionsCollection>
        <telerik:DiagramConnection>
            <FromSettings ShapeId="s1" />
            <ToSettings ShapeId="s2" />
        </telerik:DiagramConnection>
    </ConnectionsCollection>
</telerik:RadDiagram>
````

