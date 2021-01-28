---
title: Client-side
page_title: Client-side - RadDiagram
description: Check our Web Forms article about Client-side.
slug: diagram/data-binding/client-side
tags: client-side
published: True
position: 1
---

# Client-side

This help article illustrates how to data bind the **RadDiagram** control on the client-side. You can do this in two ways:

* By importing a JSON literal with the shapes and connections data to the KendoUI Diagram through the **load()** method. See the [Import from JSON]({%slug diagram/import-and-export/import-from-json%}) help article.

* By integrating **RadDiagram** with two **RadClientDataSource** controls, responsible for shapes and connections. See the [Binding RadDiagram Shapes and Connections with RadClientDataSource](#binding-raddiagram-shapes-and-connections-with-radclientdatasource) section below.

## Binding RadDiagram Shapes and Connections with RadClientDataSource

You can data bind **RadDiagram** shapes and connections on the client-side to **RadClientDataSource** controls (**Example 1**) since Q1 2015.

This functionality is provided through the following properties:

* **ClientDataSourceID**—the server ID of the RadClientDataSource responsible for providing the [Shapes]({%slug diagram/structure/shape%}) data.

* **ConnectionsClientDataSourceID**—the server ID of the RadClientDataSource responsible for providing the [Connections]({%slug diagram/structure/connection%}) data.

The shapes and connections data should be in a JSON format with the necessary fields:

* for **Shapes**, you need fields with the exact names from [The fields of the shape model](https://docs.telerik.com/kendo-ui/dataviz/diagram/editing#the-fields-of-the-shape-model) article. These fields control the type, position and dimensions of the shapes.

* for **Connections**, you need fields with the exact names from [The fields of the connection model](https://docs.telerik.com/kendo-ui/dataviz/diagram/editing#the-fields-of-the-connection-model) article. These fields associate connections with the shapes.

You can also map shapes and connections field names of the diagram to the field names from the JSON literals through the **FieldName** and **OriginalFieldName** properties of the ClientDataSource Model of the RadClientDataSource. More information is available in the [Service Configuration]({%slug clientdatasource/service-configuration%}) help article.

If you want to customize the shapes yourself, you can get the necessary data from the **dataItem** object and reconfigure the shapes in either of the following ways:

* Use the [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#events-change) event (**Example 3**). This approach is also illustrated in the [Diagram - Client-side Data Binding](https://demos.telerik.com/aspnet-ajax/diagram/examples/client-side-data-binding/defaultcs.aspx) demo.

* In a [visual template]({%slug diagram/functionality/shape-templates%}) (**Example 4**).

You can find the full list of properties that can be customized in the [Shapes API](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#configuration-shapes) article.

>caption **Example 1**: Client-side binding of shapes and connections data in RadDiagram through **RadClientDataSource** controls. The sample uses JSON literals from **Example 2**.

````ASP.NET
<telerik:RadClientDataSource ID="ShapesDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="shapes-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadClientDataSource ID="ConnectionsDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="connections-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
	<Schema>
		<Model>
			<telerik:ClientDataSourceModelField FieldName="from" OriginalFieldName="from.shapeId" DataType="String" />
			<telerik:ClientDataSourceModelField FieldName="to" OriginalFieldName="to.shapeId" DataType="String" />
		</Model>
	</Schema>
</telerik:RadClientDataSource>
<telerik:RadDiagram ID="RadDiagram1" runat="server" Width="800px" Height="530px" ClientDataSourceID="ShapesDataSource" ConnectionsClientDataSourceID="ConnectionsDataSource">
	<ShapeDefaultsSettings>
		<ContentSettings Template="#=dataItem.content.text#" FontSize="16" />
	</ShapeDefaultsSettings>
</telerik:RadDiagram>
````

>caption **Example 2**: Shapes and Connections JSON literals used in **Example 1**, **Example 3** and **Example 4**.

>caption shapes-data.json

````JavaScript
[{
	"id": "management",
	"content": {
		"align": "center middle",
		"text": "Management",
		"color": "#fff"
	},
	"type": "circle",
	"x": 260,
	"y": 45,
	"width": 120,
	"height": 104,
	"stroke": {
		"width": 1,
		"color": "#808080"
	},
	"fill": {
		"color": "#8db310"
	}
}, {
	"id": "teamlead1",
	"content": {
		"align": "center middle",
		"text": "Team Lead",
		"color": "#fff"
	},
	"type": "circle",
	"x": 155,
	"y": 199,
	"width": 120,
	"height": 104,
	"stroke": {
		"width": 1,
		"color": "#808080"
	},
	"fill": {
		"color": "#f28200"
	}
}, {
	"id": "teamlead2",
	"content": {
		"align": "center middle",
		"text": "Team Lead",
		"color": "#fff"
	},
	"type": "circle",
	"x": 470,
	"y": 199,
	"width": 120,
	"height": 104,
	"stroke": {
		"width": 1,
		"color": "#808080"
	},
	"fill": {
		"color": "#f28200"
	}
}]
````

>caption connections-data.json

````JavaScript
[{
	"id" : "gj2Tb1uIvF",
	"from" : {
		"shapeId" : "management",
		"connector" : "Auto"
	},
	"to" : {
		"shapeId" : "teamlead1",
		"connector" : "Auto"
	}
}, {
	"id" : "lqYXdfGvhH",
	"from" : {
		"shapeId" : "management",
		"connector" : "Auto"
	},
	"to" : {
		"shapeId" : "teamlead2",
		"connector" : "Auto"
	}
}]
````

>caption **Example 3**: RadDiagram client-side data binding and shapes customization through the **OnChange** event.The sample uses JSON literals from **Example 2**.

````JavaScript
function OnChange(args) {
	var shape = args.added[0],
		dataItem = shape.dataItem;
	shape.redraw({
		fill: { color: dataItem.fill.color },
		stroke: {
			width: dataItem.stroke.width,
			color: dataItem.stroke.color
		},
		content: {
			color: dataItem.content.color,
			align: dataItem.content.align
		},
	});
}
````
````ASP.NET
<telerik:RadClientDataSource ID="ShapesDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="shapes-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadClientDataSource ID="ConnectionsDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="connections-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
	<Schema>
		<Model>
			<telerik:ClientDataSourceModelField FieldName="from" OriginalFieldName="from.shapeId" DataType="String" />
			<telerik:ClientDataSourceModelField FieldName="to" OriginalFieldName="to.shapeId" DataType="String" />
		</Model>
	</Schema>
</telerik:RadClientDataSource>
<telerik:RadDiagram ID="RadDiagramOnChange" runat="server" Width="800px" Height="530px" ClientDataSourceID="ShapesDataSource" ConnectionsClientDataSourceID="ConnectionsDataSource">
	<ClientEvents OnChange="OnChange" />
	<ShapeDefaultsSettings>
		<ContentSettings Template="#=dataItem.content.text#" FontSize="16" />
	</ShapeDefaultsSettings>
</telerik:RadDiagram>
````

>caption **Example 4**: RadDiagram client-side data binding and shapes customization through a visual template.The sample uses JSON literals from **Example 2**.

````JavaScript
var visualTemplate = function (options) {
	var dataItem = options.dataItem;
	var diagram = kendo.dataviz.diagram;
	var group = new diagram.Group();
	var shapeType;
	if (options.type == "circle") {
		shapeType = new diagram.Circle({
			fill: dataItem.fill,
			width: dataItem.width,
			height: dataItem.height,
			stroke: {
				width: dataItem.stroke.width,
				color: dataItem.stroke.color
			}
		});
	}
	group.append(shapeType);

	var textBlock1 = new diagram.TextBlock({
		text: dataItem.content.text,
		color: dataItem.content.color,
		fontSize: 16,
		x: 18,
		y: 43
	});
	group.append(textBlock1);
	return group;
}
````
````ASP.NET
<telerik:RadClientDataSource ID="ShapesDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="shapes-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadClientDataSource ID="ConnectionsDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select Url="connections-data.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
	<Schema>
		<Model>
			<telerik:ClientDataSourceModelField FieldName="from" OriginalFieldName="from.shapeId" DataType="String" />
			<telerik:ClientDataSourceModelField FieldName="to" OriginalFieldName="to.shapeId" DataType="String" />
		</Model>
	</Schema>
</telerik:RadClientDataSource>
<telerik:RadDiagram ID="RadDiagramVisual" runat="server" ClientDataSourceID="ShapesDataSource" ConnectionsClientDataSourceID="ConnectionsDataSource">
	<ShapeDefaultsSettings Visual="visualTemplate">
	</ShapeDefaultsSettings>
</telerik:RadDiagram>
````

# See Also

 * [Diagram - Client-side Data Binding Demo](https://demos.telerik.com/aspnet-ajax/diagram/examples/client-side-data-binding/defaultcs.aspx)

 * [Shape Templates]({%slug diagram/functionality/shape-templates%})

 * [RadDiagram Shapes API](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#configuration-shapes)

 * [RadDiagram OnChange Event](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#events-change)

 * [Shape]({%slug diagram/structure/shape%})

 * [Connection]({%slug diagram/structure/connection%})
