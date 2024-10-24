---
title: Centering Items in RadDiagram
description: Learn how to horizontally center items within the RadDiagram control in ASP.NET AJAX.
type: how-to
page_title: How to Center Shapes in RadDiagram for ASP.NET AJAX
slug: diagram-center-items-rad-diagram
tags: rad-diagram, asp.net-ajax, center, items, shapes
res_type: kb
ticketid: 1668422
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadDiagram for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description

Centering items horizontally within the RadDiagram control is a common requirement. This task can be achieved by utilizing the `bringIntoView()` method of the underlying diagram widget. 

This KB article also answers the following questions:
- How to ensure all RadDiagram shapes are visible in the viewport?
- How to automatically adjust the zoom to fit all shapes in RadDiagram?
- How to use the `bringIntoView()` method with RadDiagram in ASP.NET AJAX?

## Solution

To center all or specific shapes within the RadDiagram's viewport, utilize the `bringIntoView()` method. This method can zoom out the diagram as needed to ensure all specified shapes fit within its viewport.

Here's how you can implement this on the client-side `OnLoad` event of the RadDiagram:

1. Define the RadDiagram in your ASP.NET AJAX page with a client-side `OnLoad` event handler:

```asp
<telerik:RadDiagram ID="RadDiagram1" runat="server">
    <ClientEvents OnLoad="onLoad" />
         ...
</telerik:RadDiagram>
```

2. Implement the `onLoad` function in JavaScript to use the `bringIntoView()` method. Pass all diagram shapes to this method to ensure they are centered and visible in the diagram's viewport:

```javascript
function onLoad(diagram, args) {
    var diagramWidget = diagram.get_kendoWidget();
    diagramWidget.bringIntoView(diagramWidget.shapes);
}
```

By passing the diagram's shapes to the `bringIntoView()` method, the RadDiagram will adjust its zoom level as needed to fit all shapes within the viewport, effectively centering them.

## See Also

- [RadDiagram Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/diagram/overview)
- [bringIntoView() Method Documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram/methods/bringintoview)
- [How to Show All Diagram Items So They Fit in the Viewport](https://www.telerik.com/support/kb/aspnet-ajax/diagrams/details/how-to-show-all-diagram-items-so-they-fit-in-the-viewport)
