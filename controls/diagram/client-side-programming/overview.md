---
title: Overview
page_title: Overview | RadDiagram for ASP.NET AJAX Documentation
description: Client-side Programming Overview
slug: diagram/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

The **RadDiagram** control is built on top of the [Kendo UI DataViz Diagram](https://demos.telerik.com/kendo-ui/dataviz/diagram/index.html). This means that you can interact with the diagram entirely on the client-side.

## Getting the RadDiagram Client-side Object

**RadDiagram** creates a client-side object, which you can reference via the **ClientID** of the control and the **$find** function. Then, you can access the actual object that exposes the API of the Kendo UI diagram through the **get_kendoWidget** method of **RadDiagram**'s client-side object.

When you have referenced the Kendo UI diagram, you can utilize the [full capabilities of its API](https://docs.telerik.com/kendo-ui/api/dataviz/diagram). For instance, you can create a new shape as shown in **Example 1**.

>caption **Example 1**: Creating a diagram shape on the client-side

````JavaScript
var diagram = $find("<%=RadDiagram1.ClientID %>").get_kendoWidget();
diagram.addShape();
````

You can also access the Kendo UI diagram as you would have accessed it if it was created with the Kendo UI API. To do so, you can utilize the **ClientID** from **Example 1**.

# See Also

 * [Kendo UI DataViz Diagram API](https://docs.telerik.com/kendo-ui/api/dataviz/diagram)
