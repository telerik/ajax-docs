---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: diagram/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The __RadDiagram__ control is built on top of the [Kendo UI DataViz Diagram](http://demos.telerik.com/kendo-ui/dataviz/diagram/index.html). This means that you can interact with the diagram entirely on the client-side.

## Getting the RadDiagram Client-side Object

__RadDiagram__ creates a client-side object, which you can reference via the __ClientID__ of the control and the __$find__ function. Then, you can access the actual object that exposes the API of the Kendo UI diagram through the __get_kendoWidget__ method of __RadDiagram__'s client-side object.

When you have referenced the Kendo UI diagram, you can utilize the [full capabilities of its API](http://docs.telerik.com/kendo-ui/api/dataviz/diagram). For instance, you can create a new shape as shown in __Example 1__.

__Example 1__: Creating a diagram shape on the client-side

````JavaScript
	
	    	var diagram = $find("<%=RadDiagram1.ClientID %>").get_kendoWidget();
	        diagram.addShape();
	
````



You can also access the Kendo UI diagram as you would have accessed it if it was created with the Kendo UI API. To do so, you can utilize the __ClientID__ from__Example 1__.

# See Also

 * [Kendo UI DataViz Diagram API](http://docs.telerik.com/kendo-ui/api/dataviz/diagram)
