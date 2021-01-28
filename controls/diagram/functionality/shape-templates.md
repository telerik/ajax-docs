---
title: Shape Templates
page_title: Shape Templates - RadDiagram
description: Check our Web Forms article about Shape Templates.
slug: diagram/functionality/shape-templates
tags: shape,templates
published: True
position: 1
---

# Shape Templates

You can fully control where and how data is displayed in the **RadDiagram** shapes by defining a visual template. This requires the creation of a function, which uses the [Kendo UI Diagram API](https://docs.telerik.com/kendo-ui/api/dataviz/diagram#configuration-shapeDefaults.visual) for defining the visual element to render. You can set the name of this function in two properties of the diagram control:

* The **ShapeDefaultsSettings-Visual** inner property of **RadDiagram** controls the template of all shapes, so if you set the function name here, the template will be applied to all of them.

* If you use the **Visual** property of a **DiagramShape** object in the diagram, the template will be applied to that particular shape.

**Example 1** creates the diagram with circles in **Figure 1** rather than the default rectangular shapes.

>caption **Figure 1**: Shapes with configured template.

![diagram-visual-template](images/diagram-visual-template.png)

>caption **Example 1**: Client-side function that creates a template with green circles and white text for the shapes in the diagram.

````ASP.NET
<script type="text/javascript">
	var visualTemplate = function (options) {
		var diagram = kendo.dataviz.diagram;

		var group = new diagram.Group({
			autoSize: true
		});

		var circle = new diagram.Circle({
			width: 100,
			height: 100,
			fill: "#32CD32"
		});
		group.append(circle);

		var textBlock1 = new diagram.TextBlock({
			text: "Name:",
			color: "#ffffff",
			fontSize: 16,
			x: 28,
			y: 32
		});

		group.append(textBlock1);

		var textBlock2 = new diagram.TextBlock({
			text: options.id,
			color: "#ffffff",
			fontSize: 16,
			x: 28,
			y: 50
		});

		group.append(textBlock2);
		return group;
	};
</script>

<telerik:RadDiagram ID="diagram1" runat="server">
	<ShapeDefaultsSettings Visual="visualTemplate"></ShapeDefaultsSettings>
	<ShapesCollection>
		<telerik:DiagramShape Id="Shape1" X="100" Y="110">
		</telerik:DiagramShape>
		<telerik:DiagramShape Id="Shape2" X="230" Y="240">
		</telerik:DiagramShape>
		<telerik:DiagramShape Id="Shape3" X="360" Y="40">
		</telerik:DiagramShape>
	</ShapesCollection>
	<ConnectionsCollection>
		<telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
			<FromSettings ShapeId="Shape1" Connector="Right" />
			<ToSettings ShapeId="Shape2" Connector="Top" />
		</telerik:DiagramConnection>
		<telerik:DiagramConnection StartCap="FilledCircle" EndCap="ArrowEnd">
			<FromSettings ShapeId="Shape1" Connector="Right" />
			<ToSettings ShapeId="Shape3" Connector="Left" />
		</telerik:DiagramConnection>
	</ConnectionsCollection>
</telerik:RadDiagram>
````

**Example 2** creates a diagram with custom template, depending on each shape configuration. Each shape using the template contains both text and image.

>caption **Figure 2**: Shapes with configured template with text and image.

![diagram-visual-template](images/diagram-visual-template-1.png)

>caption **Example 2**: Shape template setting different text and image for each shape in the diagram.

````ASP.NET
<script>
	function ImageTemplate(options) {
		var dataviz = kendo.dataviz;
		var group = new dataviz.diagram.Group({ autoSize: true });
		var content = options.source.substring(options.source.lastIndexOf("/") + 1, options.source.lastIndexOf("."));

		group.append(new dataviz.diagram.Rectangle({
			x: 0,
			y: 0,
			width: options.width,
			height: options.height,
			fill: {
				color: options.fill.color
			}
		}));

		group.append(new dataviz.diagram.TextBlock({
			text: content,
			x: 90,
			y: 30
		}));

		var image = new dataviz.diagram.Image({
			source: options.source,
			x: 10,
			y: 10,
			width: 60,
			height: 60,
		});
		group.append(image);

		return group;
	};
</script>

<telerik:RadDiagram ID="RadDiagram1" runat="server">
	<LayoutSettings Enabled="true" Type="Tree" Subtype="Down"></LayoutSettings>
	<ShapeDefaultsSettings Visual="ImageTemplate" Width="200" Height="80"></ShapeDefaultsSettings>
	<ShapesCollection>
		<telerik:DiagramShape Id="s1" Source="./Images/Daniel Moor.jpg">
			<FillSettings Color="#7F7F7F" />
		</telerik:DiagramShape>
		<telerik:DiagramShape Id="s2" Source="./Images/Diego Wilson.jpg">
			<FillSettings Color="#C0C0C0" />
		</telerik:DiagramShape>
		<telerik:DiagramShape Id="s3" Source="./Images/Ann Brown.jpg">
			<FillSettings Color="#C0C0C0" />
		</telerik:DiagramShape>
	</ShapesCollection>
	<ConnectionsCollection>
		<telerik:DiagramConnection>
			<FromSettings ShapeId="s1" Connector="Bottom" />
			<ToSettings ShapeId="s2" Connector="Top" />
		</telerik:DiagramConnection>
		<telerik:DiagramConnection>
			<FromSettings ShapeId="s1" Connector="Bottom" />
			<ToSettings ShapeId="s3" Connector="Top" />
		</telerik:DiagramConnection>
	</ConnectionsCollection>
</telerik:RadDiagram>
````

# See Also

 * [Kendo UI Diagram API for creating visual templates](https://docs.telerik.com/kendo-ui/api/dataviz/diagram#configuration-shapeDefaults.visual)

 * [RadDiagram Server-Side Programming]({%slug diagram/server-side-programming%})

 * [RadDiagram Client-Side Programming]({%slug diagram/client-side-programming/overview%})
