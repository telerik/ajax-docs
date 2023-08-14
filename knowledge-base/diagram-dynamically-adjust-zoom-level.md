---
title: Dynamically Adjusting Zoom on a RadDiagram to Ensure Visibility
description: Learn how to dynamically adjust the zoom level of a RadDiagram to ensure visibility of all shapes and connectors using JavaScript and the Kendo Diagram widget API - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Adjust RadDiagram Zoom to ensure all shapes and connection are visible
slug: diagram-dynamically-adjust-zoom-level 
position: 
tags: 
ticketid: 1619343
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadDiagram for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
The Telerik RadDiagram is a powerful tool for creating interactive diagrams in web applications. There are scenarios where you may need to dynamically adjust the zoom level of a RadDiagram to ensure that all shapes and connectors are visible within the viewport. This article provides a step-by-step solution for achieving this through JavaScript, utilizing the Kendo Diagram widget API.

## Solution
To dynamically adjust the zoom level of a RadDiagram to ensure that all shapes and connectors are visible, follow these steps:

1. JavaScript Setup: Create a JavaScript function that will handle adjusting the zoom level whenever the browser window is resized. This function will utilize the Kendo Diagram widget's bringIntoView method.
2. Integration with RadDiagram: Integrate the JavaScript function with your RadDiagram by using the OnLoad client event to trigger the zoom adjustment when the diagram is loaded.
3. Accessing Kendo Diagram Widget: Obtain a reference to the Kendo Diagram widget associated with the RadDiagram. This can be done using the get_kendoWidget method.
4. Using bringIntoView Method: Utilize the bringIntoView method of the Kendo Diagram widget to ensure that all shapes and connectors are brought into the visible area.

Here's a code example illustrating these steps:

````ASPX
<script>
    function diagramLoad(diagram, load) {
        window.onresize = function (event) {
            var diagramWidget = diagram.get_kendoWidget();
            diagramWidget.bringIntoView(diagramWidget.shapes);
        };

    }
</script>
<telerik:RadDiagram BackColor="#f2f2f2" ID="ModelDiagram" Skin="Metro" runat="server">
    <ClientEvents OnLoad="diagramLoad" />
          <ShapeDefaultsSettings Path="m30,0 L90,0 L120,52 L90,104 L30,104 L0,52 z" Width="120" Height="104">
                <ConnectorsCollection>
                    <telerik:DiagramShapeConnector Name="top"  />
                    <telerik:DiagramShapeConnector Name="bottom" />
                    <telerik:DiagramShapeConnector Name="deg60" />
                    <telerik:DiagramShapeConnector Name="deg120" />
                    <telerik:DiagramShapeConnector Name="deg180" />
                    <telerik:DiagramShapeConnector Name="deg240" />
                    <telerik:DiagramShapeConnector Name="deg300" />
                    <telerik:DiagramShapeConnector Name="deg360" />
                    <telerik:DiagramShapeConnector Name="Auto" />
                </ConnectorsCollection>
            </ShapeDefaultsSettings>
            <ShapesCollection>
                <telerik:DiagramShape Id="management" X="60" Y="50">
                    <FillSettings Color="#8db310" />
                    <ContentSettings Text="Management" Color="#fff" />
                </telerik:DiagramShape>
                <telerik:DiagramShape Id="teamlead1" X="10" Y="170">
                    <FillSettings Color="#f28200" />
                    <ContentSettings Text="Team Lead" Color="#fff" />
                </telerik:DiagramShape>
                <telerik:DiagramShape Id="teamlead2" X="250" Y="190">
                    <FillSettings Color="#f28200" />
                    <ContentSettings Text="Team Lead" Color="#fff" />
                </telerik:DiagramShape>
                <telerik:DiagramShape Id="creative" X="10" Y="300">
                    <FillSettings Color="#fac53b" />
                    <ContentSettings Text="Creative" Color="#fff" />
                </telerik:DiagramShape>
                <telerik:DiagramShape Id="developer" X="140" Y="350">
                    <FillSettings Color="#fac53b" />
                    <ContentSettings Text="Developer" Color="#fff" />
                </telerik:DiagramShape>
                <telerik:DiagramShape Id="marketing" X="700" Y="350">
                    <FillSettings Color="#fac53b" />
                    <ContentSettings Text="Marketing" Color="#fff" />
                </telerik:DiagramShape>
            </ShapesCollection>
            <ConnectionsCollection>
                <telerik:DiagramConnection>
                    <FromSettings ShapeId="management" />
                    <ToSettings ShapeId="teamlead1" />
                </telerik:DiagramConnection>
                <telerik:DiagramConnection>
                    <FromSettings ShapeId="management" />
                    <ToSettings ShapeId="teamlead2" />
                </telerik:DiagramConnection>
                <telerik:DiagramConnection>
                    <FromSettings ShapeId="teamlead1" />
                    <ToSettings ShapeId="creative" />
                </telerik:DiagramConnection>
                <telerik:DiagramConnection>
                    <FromSettings ShapeId="teamlead1" />
                    <ToSettings ShapeId="developer" />
                </telerik:DiagramConnection>
                <telerik:DiagramConnection>
                    <FromSettings ShapeId="teamlead2" />
                    <ToSettings ShapeId="marketing" />
                </telerik:DiagramConnection>
            </ConnectionsCollection>
</telerik:RadDiagram>
````


In this example, the diagramLoad function is triggered when the RadDiagram is loaded. The window.onresize event is used to dynamically adjust the zoom level whenever the browser window is resized. The diagramWidget variable obtains the Kendo Diagram widget, and the bringIntoView method is called with the array of shapes to ensure they are all visible within the viewport.


For more examples and detailed information on the zoom and bringIntoView methods, consult the following Kendo UI documentation pages:

- [zoom Method](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/zoom)
- [bringIntoView Method](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/bringintoview)

By following these steps and utilizing the provided resources, you can dynamically adjust the zoom level of a RadDiagram to ensure that all shapes and connectors remain visible within the browser window.

   