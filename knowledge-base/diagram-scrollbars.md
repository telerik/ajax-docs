---
title: Add draggable scrollbars in RadDiagram
description: Draggable scrollbars in RadDiagram
type: how-to
page_title: Use Draggable Scrollbars in RadDiagram
slug: diagram-scrollbars
position: 
tags: 
ticketid: 1375484
res_type: kb
---

## Description
How can I implement scrollbars in the RadDiagram for ASP.NET AJAX?

## Solution
The following example demonstrates how to use a scrollbar as a Diagram element.

````ASP.NET
<div style="overflow: auto; width: 1000px; height: 300px;">
    <telerik:RadDiagram ID="RadDiagram1" runat="server" Editable="false" Pannable="false" ZoomRate="0">
        <ClientEvents OnLoad="onDataBound" />
        <ShapesCollection>
            <telerik:DiagramShape Id="s1" X="700" Y="100"></telerik:DiagramShape>
            <telerik:DiagramShape Id="s2" X="200" Y="300"></telerik:DiagramShape>
            <telerik:DiagramShape Id="s3" X="700" Y="300"></telerik:DiagramShape>
            <telerik:DiagramShape Id="s4" X="1200" Y="300"></telerik:DiagramShape>
        </ShapesCollection>
        <ConnectionsCollection>
            <telerik:DiagramConnection>
                <FromSettings ShapeId="s1" />
                <ToSettings ShapeId="s2" />
            </telerik:DiagramConnection>
            <telerik:DiagramConnection>
                <FromSettings ShapeId="s1" />
                <ToSettings ShapeId="s3" />
            </telerik:DiagramConnection>
            <telerik:DiagramConnection>
                <FromSettings ShapeId="s1" />
                <ToSettings ShapeId="s4" />
            </telerik:DiagramConnection>
        </ConnectionsCollection>
    </telerik:RadDiagram>
</div>
````

````JavaScript
<script>
    function onDataBound(diagram, args) {
        var kendoDiagram = diagram.get_kendoWidget();
        var bbox = kendoDiagram.boundingBox();

        kendoDiagram.wrapper.width(bbox.width + bbox.x + 50);
        kendoDiagram.wrapper.height(bbox.height + bbox.y + 50);
        kendoDiagram.resize();
    }
</script>
````

## See Also

[Use Scrollbars in the Kendo UI Diagram widget](https://docs.telerik.com/kendo-ui/knowledge-base/using-scrollbar)

 
