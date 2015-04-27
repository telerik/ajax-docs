---
title: Export to PDF
page_title: Export to PDF | RadDiagram for ASP.NET AJAX Documentation
description: Export to PDF
slug: diagram/import-and-export/export-to-pdf
tags: export,to,pdf
published: True
position: 3
---

# Export to PDF

You can export **RadDiagram** to PDF on the client. This is done in two simple steps (**Example 1**):

1. Get a reference to the client-side object of the underlying Kendo UI diagram as described in the [Overview]({%slug diagram/client-side-programming/overview%}) help article.

1. Call the **saveAsPDF** method of the client-side object of the diagram.

RadDiagram has a composite property **PdfSettings** that exposes properties for configuring the settings of the exported PDF file. You can find a full list of the properties in the [API reference of the Pdf class](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_pdf.html).

>caution The export to PDF functionality is currently supported in Firefox, Chrome, IE10+ and Opera 15.0+ (Blink).

>caption **Example 1**: Export a diagram to PDF via the **saveAsPDF** method.

````ASP.NET
<telerik:RadDiagram ID="RadDiagram1" runat="server">
	<PdfSettings FileName="diagram.pdf" Title="Diagram Exported to PDF" />
	<LayoutSettings Type="Tree" Subtype="Down" Enabled="true">
	</LayoutSettings>
	<ClientEvents OnLoad="onLoad" />
	<ShapesCollection>
		<telerik:DiagramShape Id="DiagramShape1"></telerik:DiagramShape>
		<telerik:DiagramShape Id="DiagramShape2"></telerik:DiagramShape>
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
		diagramWidget.saveAsPDF();
	}
</script>
````

The **saveAsPDF** method is a shortcut for [exportPDF](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-exportPDF), which is less straightforward and you need to set the export settings on the client if you use it. **Example 2** shows how to export a diagram via the **exportPDF** method.

>caption **Example 2**: Export a diagram to PDF via the **exportPDF** method.

````ASP.NET
<telerik:RadDiagram ID="RadDiagram1" runat="server">
	<LayoutSettings Type="Tree" Subtype="Down" Enabled="true">
	</LayoutSettings>
	<ClientEvents OnLoad="onLoad" />
	<ShapesCollection>
		<telerik:DiagramShape Id="DiagramShape1"></telerik:DiagramShape>
		<telerik:DiagramShape Id="DiagramShape2"></telerik:DiagramShape>
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
		diagramWidget.exportPDF().done(function (data) {
			kendo.saveAs({
				dataURI: data,
				fileName: "diagram.pdf"
			});
		});
	}
</script>
````

# See Also

 * [RadDiagram Client-Side Basics]({%slug diagram/client-side-programming/overview%})

 * [Members of Pdf Class](http://www.telerik.com/help/aspnet-ajax/allmembers_t_telerik_web_ui_pdf.html)

 * [exportPDF method of Kendo UI Diagram](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/diagram#methods-exportPDF)