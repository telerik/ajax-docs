---
title: Dynamically Setting the Height and Width of a RadDiagram using JavaScript
description: 
type: how-to
page_title: Set RadDiagram Width and Height on the client-side
slug: diagram-dynamically-set-width-height
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
The Telerik RadDiagram is a versatile tool for creating interactive and visually appealing diagrams in web applications. In certain scenarios, you may want to dynamically adjust the height and width of a RadDiagram to ensure it fits the browser window. This knowledge base article provides a step-by-step guide on how to achieve this using JavaScript.

## Solution
To dynamically set the height and width of a RadDiagram and ensure it fits the browser window, follow these steps:

1. Adjust CSS Properties: Modify the width and height CSS properties of the DOM element representing the RadDiagram. This will change the size of the diagram visually. You can achieve this through JavaScript code.
2. Call the diagram resize method: After adjusting the CSS properties, it's essential to call the [resize method](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/resize) for the Kendo Diagram to properly resize and redraw the diagram elements according to the new dimensions.

Here's a simple example demonstrating these steps:

````ASPX
<telerik:RadDiagram ID="RadDiagram1" runat="server">
    <LayoutSettings Type="Tree" Subtype="Down" Enabled="true">
    </LayoutSettings>
    <ShapesCollection>
        <telerik:DiagramShape Id="a1" Width="100" Height="50">
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="b1" Width="100" Height="50">
        </telerik:DiagramShape>
        <telerik:DiagramShape Id="b2" Width="100" Height="50">
        </telerik:DiagramShape>
    </ShapesCollection>
    <ConnectionsCollection>
        <telerik:DiagramConnection>
            <FromSettings Connector="Bottom" ShapeId="a1" />
            <ToSettings Connector="Top" ShapeId="b1" />
            <StrokeSettings />
        </telerik:DiagramConnection>
        <telerik:DiagramConnection>
            <FromSettings Connector="Bottom" ShapeId="a1" />
            <ToSettings Connector="Top" ShapeId="b2" />
        </telerik:DiagramConnection>
    </ConnectionsCollection>
</telerik:RadDiagram>

<a href="#" onclick="resizeDiagram(); return false;">Resize Diagram</a>

<script>
    function resizeDiagram() {
        // Obtain a reference to the RadDiagram using its ClientID
        var diagram = $find("<%= RadDiagram1.ClientID %>");
        
        // Obtain the Kendo Diagram widget associated with the RadDiagram
        var kendoDiagram = diagram.get_kendoWidget();

        // Adjust the width and height CSS properties
        diagram.get_element().style.width = "200px";
        diagram.get_element().style.height = "200px";

        // Call the resize method to apply the new dimensions
        kendoDiagram.resize();
    }
</script>
````

In this example, the resizeDiagram function is triggered when the "Resize Diagram" link is clicked. It first retrieves the RadDiagram instance and the associated Kendo Diagram widget. Then, it adjusts the width and height CSS properties of the RadDiagram's DOM element and calls the resize method to ensure the proper sizing and rendering of the diagram.

By following these steps, you can dynamically control the height and width of a RadDiagram using JavaScript to ensure that it fits the browser window.

 
    