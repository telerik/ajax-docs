---
title: RadHtmlChart Integration With KendoUI Widgets
page_title: RadHtmlChart Integration With KendoUI Widgets | RadHtmlChart for ASP.NET AJAX Documentation
description: RadHtmlChart Integration With KendoUI Widgets
slug: htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets
tags: radhtmlchart,integration,with,kendoui,widgets
published: True
position: 3
---

# RadHtmlChart Integration With KendoUI Widgets

This help article illustrates how to use a **RadHtmlChart** control and a [Kendo UI Widget](http://docs.telerik.com/kendo-ui/introduction) on the same WebForms page. **RadHtmlChart** is an ASP.NET server-side wrapper of the Kendo UI charting widget and it already loads the chart specific scripts and jQuery. You can select either pattern below in order to avoid script conflicts in such a setup:

* [Use External jQuery with RadScriptManager](#use-external-jquery-with-radscriptmanager)

* [Disable Embedded Resources of RadHtmlChart](#disable-embedded-resources-of-radhtmlchart)

## Use External jQuery with RadScriptManager

When you load an external jQuery on a page that has a RadHtmlChart instance you should consider a possible jQuery conflict because the chart already loads it internally. This scenario usually happens on pages that contain controls from different suites (e.g, RadHtmlChart and Kendo UI widget which depends on external jQuery).

You can easily handle that situation by configuring RadScriptManager to use the external jQuery as follows:

1. Add script references to the external jQuery library (**jQuery.js**) andKendo UI library (**kendo.all.min.js**) in the head tag.

	**ASP.NET**
	
		<head runat="server">
			<title></title>
			<script type="text/javascript" src="../KendoUI/js/jquery.min.js"></script>
			<script type="text/javascript" src="../KendoUI/js/kendo.all.min.js"></script>
		</head>


1. Configure the RadScriptManager as per the **Including external jQuery** section from the [Using jQuery](020D635F-654D-41FB-9BD0-258E4ED5B401) article.

	**ASP.NET**
	
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
			<Scripts>
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
			</Scripts>
		</telerik:RadScriptManager>


See **Example 1** for details.

>caption Example 1: RadHtmlChart and Kendo UI editor integration with external jQuery.

````ASP.NET
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
	<title></title>
	<!--Kendo UI editor specific CSS -->
	<link href="../KendoUI/styles/kendo.common.min.css" rel="stylesheet" />
	<link href="../KendoUI/styles/kendo.default.min.css" rel="stylesheet" />
	<link href="../KendoUI/styles/kendo.dataviz.min.css" rel="stylesheet" />
	<link href="../KendoUI/styles/kendo.dataviz.default.min.css" rel="stylesheet" />
	<!--jQuery and Kendo UI JavaScript libraries-->
	<script type="text/javascript" src="../KendoUI/js/jquery.min.js"></script>
	<script type="text/javascript" src="../KendoUI/js/kendo.all.min.js"></script>
</head>
<body>
	<form id="form1" runat="server">
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
			<Scripts>
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
			</Scripts>
		</telerik:RadScriptManager>
		<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="600px" Height="400px">
			<PlotArea>
				<Series>
					<telerik:ColumnSeries Name="Product 1">
						<SeriesItems>
							<telerik:CategorySeriesItem Y="15000" />
							<telerik:CategorySeriesItem Y="23000" />
							<telerik:CategorySeriesItem Y="10000" />
						</SeriesItems>
					</telerik:ColumnSeries>
				</Series>
				<XAxis>
					<Items>
						<telerik:AxisItem LabelText="1" />
						<telerik:AxisItem LabelText="2" />
						<telerik:AxisItem LabelText="3" />
					</Items>
				</XAxis>
			</PlotArea>
			<ChartTitle Text="Product sales for 2011">
			</ChartTitle>
			<Legend>
				<Appearance Position="Bottom" />
			</Legend>
		</telerik:RadHtmlChart>
		<textarea id="kendoEditorTextArea" style="width: 600px; height: 400px;">some content in textarea</textarea>
		<script type="text/javascript">
			$(document).ready(function () {
				//Render kendo editor on document ready event
				$("#kendoEditorTextArea").kendoEditor();
			});
		</script>
	</form>
</body>
</html>
````

## Disable Embedded Resources of RadHtmlChart

You can [Disable Embedded Scripts](F02D3323-FFA7-46E6-A4DE-303D5EF15A43) of RadHtmlChart and manually reference them for custom deployment scenarios. You should also ensure there are no jQuery / scripts conflicts when integrating RadHtmlChart with Kendo UI widgets in such a scenario.

This can be done by loading a single jQuery and considering the following scripts dependency order:

1. Add script references to the files listed below in this specific order.
1. **Core.js** — a basic script that the Telerik.Web.UI depends on.
1. **jQuery.js** — the jQuery JavaScript library from the Telerik.Web.UI assembly.
1. **jQueryInclude.js** — a script that assigns the Telerik.Web.UI jQuery to the global $ and jQuery aliases.
1. **jQueryPlugins.js** — additional JavaScript plugins required by the **RadHtmlChart**.
1. **kendo.all.min.js** — the Kendo UI JavaScript library.
1. **RadHtmlChart.js** — the **RadHtmlChart**'s specific scripts including the skins. It must be loaded after the **kendo.all.min.js** file, in order to prevent the **RadHtmlChart** skins from overriding by the Kendo UI themes.
1. If you are using **RadScriptManager**, set the **EnableScriptCombine** property to **false**.
1. Set the **EnableEmbeddedScripts** property of the **RadHtmlChart** control to **false**

>caption Example2: RadHtmlChart and Kendo UI editor integration with disabling embedded resources of the chart.

````ASP.NET
<!--Kendo UI editor specific CSS -->
<link href="../KendoUI/styles/kendo.common.min.css" rel="stylesheet" />
<link href="../KendoUI/styles/kendo.default.min.css" rel="stylesheet" />
<link href="../KendoUI/styles/kendo.dataviz.min.css" rel="stylesheet" />
<link href="../KendoUI/styles/kendo.dataviz.default.min.css" rel="stylesheet" />
<!--Reference the following scripts in this specific order-->
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableScriptCombine="false">
	<Scripts>
		<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
		<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
		<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
		<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
		<asp:ScriptReference Path="../KendoUI/js/kendo.all.min.js" />
		<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.HtmlChart.RadHtmlChart.js" />
	</Scripts>
</telerik:RadScriptManager>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="600px" Height="400px" EnableEmbeddedScripts="false">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Product 1">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="15000" />
					<telerik:CategorySeriesItem Y="23000" />
					<telerik:CategorySeriesItem Y="10000" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="1" />
				<telerik:AxisItem LabelText="2" />
				<telerik:AxisItem LabelText="3" />
			</Items>
		</XAxis>
	</PlotArea>
	<ChartTitle Text="Product sales for 2011">
	</ChartTitle>
	<Legend>
		<Appearance Position="Bottom" />
	</Legend>
</telerik:RadHtmlChart>
<textarea id="kendoEditorTextArea" style="width: 600px; height: 400px;">some content in textarea</textarea>
<script type="text/javascript">
	$(document).ready(function () {
		//Render kendo editor on document ready event
		$("#kendoEditorTextArea").kendoEditor();
	});
</script>
````


## See Also

 * [Kendo UI Components](http://docs.telerik.com/kendo-ui/introduction)[Using jQuery](020D635F-654D-41FB-9BD0-258E4ED5B401)[Disabling Embedded Resources](F02D3323-FFA7-46E6-A4DE-303D5EF15A43)
