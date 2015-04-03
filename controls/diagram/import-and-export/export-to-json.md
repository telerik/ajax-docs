---
title: Export to JSON
page_title: Export to JSON | UI for ASP.NET AJAX Documentation
description: Export to JSON
slug: diagram/import-and-export/export-to-json
tags: export,to,json
published: True
position: 2
---

# Export to JSON



## 

You can export __RadDiagram__ to a JSON object literal on the client. This is done in two simple steps (__Example 1__):

1. Get a reference to the client-side object of the underlying Kendo UI diagram as described in the[Overview]({%slug diagram/client-side-programming/overview%}) help article.

1. Call the [save](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-save) method of the client-side object of the diagram.

__Example 1__: Export a diagram to a JSON object literal.

````ASPNET
	    <telerik:RadDiagram ID="RadDiagram2" runat="server">
	        <LayoutSettings Type="Tree" Subtype="Down" Enabled="true">
	        </LayoutSettings>
	        <ClientEvents OnLoad="onLoad" />
	        <ShapesCollection>
	            <telerik:DiagramShape Id="DiagramShape3"></telerik:DiagramShape>
	            <telerik:DiagramShape Id="DiagramShape4"></telerik:DiagramShape>
	        </ShapesCollection>
	        <ConnectionsCollection>
	            <telerik:DiagramConnection>
	                <FromSettings Connector="Top" ShapeId="DiagramShape1" />
	                <ToSettings Connector="Bottom" ShapeId="DiagramShape2" />
	                <StrokeSettings />
	            </telerik:DiagramConnection>
	        </ConnectionsCollection>
	    </telerik:RadDiagram>
	    <script type="text/javascript">
	        function onLoad(diagram) {
	            var diagramWidget = diagram.get_kendoWidget();
	            var json = diagramWidget.save();
	            console.log(json);
	        }
	    </script>
````



You can find a live example of the export to JSON functionality in the[JSON Import and Export demo](http://demos.telerik.com/aspnet-ajax/diagram/examples/saveload/defaultcs.aspx).

# See Also

 * [RadDiagram Client-Side Basics]({%slug diagram/client-side-programming/overview%})

 * [save method of Kendo UI Diagram](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-save)

 * [RadDiagram JSON Import and Export Demo](http://demos.telerik.com/aspnet-ajax/diagram/examples/saveload/defaultcs.aspx)
