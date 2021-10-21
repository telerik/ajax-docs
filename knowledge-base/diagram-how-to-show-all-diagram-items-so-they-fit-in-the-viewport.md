---
title: How to show all diagram items so they fit in the viewport
description: How to show all diagram items so they fit in the viewport. Check it now!
type: how-to
page_title: How to show all diagram items so they fit in the viewport
slug: diagram-how-to-show-all-diagram-items-so-they-fit-in-the-viewport
res_type: kb
---

## How to

Fit all diagram items in the viewport so the user sees them, regardless of their count and position.

While you can empirically find dimensions you can set to the diagram so all items (shapes and connections) can be seen, this is not ideal, especially when you have a dynamically generated diagram - you can't know what size will be enough and also not too much.  In other words, I would rather have RadDiagram to adjust its width and height to fit without clipping.

## Solution

You can

 1. use the [API provided by the underlying Kendo Diagram widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram):
     
     - the [boundingBox() method](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/boundingbox) will give you the rectangle that encompasses all items
     
     - the [bringIntoView() method](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/bringintoview) will zoom and/or pan the diagram as necessary to put that in the viewport

 1. have the diagram take 100% of its container so you don't have to define explicit dimensions


Here is an example:

````ASPX
<script>
    function fitDiagram(sender, args) {
        var kDiag = sender.get_kendoWidget();
        kDiag.bringIntoView(kDiag.boundingBox());
    }
</script>
<div style="width: 200px; height: 200px; border: 2px solid red; overflow: auto;">
    <telerik:RadDiagram runat="server" ID="RadDiagram1" Width="100%" Height="100%" ZoomRate="0">
        <ClientEvents OnLoad="fitDiagram" />
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
</div>
````


