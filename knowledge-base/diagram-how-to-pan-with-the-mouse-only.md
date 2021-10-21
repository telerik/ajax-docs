---
title: How to pan with the mouse only
description: How to pan with the mouse only - RadDiagram Telerik Web UI. Check it now!
type: how-to
page_title: How to pan with the mouse only
slug: diagram-how-to-pan-with-the-mouse-only
res_type: kb
---


## HOW TO

Pan the RadDiagram canvas by clicking and dragging with the mouse only without using the keyboard.

## DESCRIPTION

By default, to pan RadDiagram, you must also hold down the Ctrl key.

## SOLUTION

To let the user pan immediately, set the **[Pannable.Key](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/pannable#pannable.key)**[setting](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/configuration/pannable#pannable.key) to **None**.

It is important to note that panning and selecting are effectively the same gesture - dragging with the mouse or a finger/stylus. This is the reason why a key modifier is required, without it the diagram cannot know the user intent because the action is ambiguous.

This means that the Pannable.Key and Selectable.Key must be different.

On mobile devices where a keyboard is not available the diagram cannot tell the gestures apart and so it pans on dragging and selects on tap upon an element (like a shape) automatically.

Here is an example:

````ASP.NET
<telerik:RadDiagram runat="server" ID="RadDiagram1">
    <PannableSettings Key="None" />
    <ShapesCollection>
        <telerik:DiagramShape Id="DiagramShape1" Width="100" Height="70" X="260" Y="100" Type="rectangle">
            <ContentSettings Text="Parent" />
            <FillSettings Color="#25a0da" />
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="DiagramShape2" Height="70" X="60" Y="250" Type="circle">
            <ContentSettings Text="Child 1" />
            <FillSettings Color="#FFBE33" />
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="DiagramShape3" Height="70" X="245" Y="250" Type="circle">
            <ContentSettings Text="Child 2" />
            <FillSettings Color="#FFBE33" />
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="DiagramShape4" Height="70" X="440" Y="250" Type="circle">
            <ContentSettings Text="Child 3" />
            <FillSettings Color="#FFBE33" />
        </telerik:DiagramShape>
    </ShapesCollection>
    <ConnectionsCollection>
        <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
            <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
            <ToSettings Connector="Top" ShapeId="DiagramShape2" />
        </telerik:DiagramConnection>
        <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
            <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
            <ToSettings Connector="Top" ShapeId="DiagramShape3" />
        </telerik:DiagramConnection>
        <telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
            <FromSettings Connector="Bottom" ShapeId="DiagramShape1" />
            <ToSettings Connector="Top" ShapeId="DiagramShape4" />
        </telerik:DiagramConnection>
    </ConnectionsCollection>
</telerik:RadDiagram>
````

 