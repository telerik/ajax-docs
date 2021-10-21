---
title: Change Connectors Collection Dynamically
description: Change Connectors Collection Dynamically. Check it now!
type: how-to
page_title: Change Connectors Collection Dynamically
slug: diagram-change-connectors-collection-dynamically
res_type: kb
---


### DESCRIPTION

If your project requires to change to `Visual` template of a `Shape` (e.g. from rectangle to triangle), you will most probably need to update the connectors collection for the newly applied shape path.



### SOLUTION

Passing an object containing the new connectors of the shape to its [redraw()](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/diagram/shape/methods/redraw) method will allow you to change the initially set default connectors as desired. In the sample below you can see how to update the connectors collection after clicking a shape (the changes will be seen after the clicked shape is focused again):

````ASP.NET
<telerik:RadDiagram ID="diagram1" runat="server">
    <LayoutSettings Enabled="true"></LayoutSettings>
    <ClientEvents OnClick="OnShapeClick" />
    <ShapeDefaultsSettings Width="80" Height="80">
        <FillSettings Color="green"></FillSettings>
        <ConnectorsCollection>
            <telerik:DiagramShapeConnector Name="Top" />
            <telerik:DiagramShapeConnector Name="Bottom" />
            <telerik:DiagramShapeConnector Name="Auto" />
        </ConnectorsCollection>
    </ShapeDefaultsSettings>
    <ShapesCollection>
        <telerik:DiagramShape Id="s1" Visual="my_rect">
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="s2" Visual="my_rect">
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="s3" Visual="my_rect">
        </telerik:DiagramShape>
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
    </ConnectionsCollection>
</telerik:RadDiagram>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function OnShapeClick(args) {
            var shape = args.item;
  
            if (shape instanceof kendo.dataviz.diagram.Shape) {
                var newOptons = {
                    visual: my_triangle,
                    connectors: [
                              { name: "bottomRight" },
                              { name: "bottomLeft" },
                              { name: "top" }]
                };
                shape.redraw(newOptons);
                shape.redrawVisual();
            }
        }
  
        function my_triangle(options) {
            var ns = kendo.dataviz.diagram;
            var group = new ns.Group({ autoSize: true });
  
            var path = new ns.Path({
                data: "M43.51,0.50 L86.50,74.50 L0.50,74.50 za", height: options.height, width: options.width, fill: options.fill
            });
            group.append(path);
            return group;
        }
        function my_rect(options) {
            var ns = kendo.dataviz.diagram;
            var group = new ns.Group({ autoSize: true });
  
            var rect = new ns.Rectangle({ height: options.height, width: options.width, fill: options.fill });
            group.append(rect);
            return group;
        }
    </script>
</telerik:RadCodeBlock>
````


### SEE ALSO



[RadDiagram Visual Templates]({%slug diagram/functionality/shape-templates%})

[RadDiagram Client-side Events]({%slug diagram/client-side-programming/events%})

[kendo.dataviz.diagram.Shape](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/diagram/shape)

[kendo.dataviz.diagram.Connector](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/diagram/connector)


