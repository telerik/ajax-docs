---
title: Import from JSON
page_title: Import from JSON | RadDiagram for ASP.NET AJAX Documentation
description: Import from JSON
slug: diagram/import-and-export/import-from-json
tags: import,from,json
published: True
position: 0
---

# Import from JSON

You can import the shapes and connections of **RadDiagram** from a data object in JSON format on the client. This is done in two simple steps (**Example 1**):

1. Get a reference to the client-side object of the underlying Kendo UI diagram as described in the [Overview]({%slug diagram/client-side-programming/overview%}) help article.

1. Call the [load](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-load) method of the client-side object of the diagram and pass a JSON object literal with the diagram data as an argument. The JSON object literal uses a specific format that you can check by [exporting an already declared diagram in JSON format]({%slug diagram/import-and-export/export-to-json%}).

>caption **Example 1**: Import a diagram from a JSON object literal.

````ASP.NET
<telerik:RadDiagram ID="RadDiagram1" runat="server">
	<ClientEvents OnLoad="onLoad" />
</telerik:RadDiagram>
<script type="text/javascript">
	function onLoad(diagram) {
		var diagramWidget = diagram.get_kendoWidget();
		var json = {
			"shapes": [{
				"id": "DiagramShape1",
				"content": {
					"align": "center middle",
					"text": "Diagram Shape 1",
					"color": "#fff",
					"fill": {
						"color": "#fff"
					}
				},
				"type": "rectangle",
				"x": 160,
				"y": 125,
				"width": 140,
				"height": 30,
			}],
			"connections": []
		}
		diagramWidget.load(json);
	}
</script>
````

You can find a live example of the import from JSON functionality in the [JSON Import and Export demo](https://demos.telerik.com/aspnet-ajax/diagram/examples/saveload/defaultcs.aspx).

# See Also

 * [RadDiagram Client-Side Basics]({%slug diagram/client-side-programming/overview%})

 * [load method of Kendo UI Diagram](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-load)

 * [RadDiagram JSON Import and Export Demo](https://demos.telerik.com/aspnet-ajax/diagram/examples/saveload/defaultcs.aspx)
