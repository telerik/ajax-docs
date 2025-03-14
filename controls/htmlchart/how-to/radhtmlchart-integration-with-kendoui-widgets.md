---
title: RadHtmlChart Integration With KendoUI Widgets
page_title: RadHtmlChart Integration With KendoUI Widgets - RadHtmlChart
description: Check our Web Forms article about RadHtmlChart Integration With KendoUI Widgets.
slug: htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets
tags: radhtmlchart,integration,with,kendoui,widgets
published: True
position: 3
---

## Important Information

> **It is generally not recommended to use both Telerik UI for ASP.NET AJAX and Kendo UI for jQuery on the same page.** These suites use different versions of Kendo UI scripts, which may cause compatibility issues.

# RadHtmlChart Integration With KendoUI Widgets

This help article illustrates a workaround of how to use the [ASP.NET AJAX Chart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx) control and a [Kendo UI Widget](https://docs.telerik.com/kendo-ui/introduction) on the same WebForms page. **RadHtmlChart** is an ASP.NET server-side wrapper of the Kendo UI charting widget and it already loads the chart specific scripts and jQuery. You can select either pattern below in order to avoid script conflicts in such a setup:

* [Use External jQuery with RadScriptManager](#use-external-jquery-with-radscriptmanager)

* [Disable Embedded Resources of RadHtmlChart](#disable-embedded-resources-of-radhtmlchart)

## Use External jQuery with RadScriptManager

When you load an external jQuery on a page that has a RadHtmlChart instance you should consider a possible jQuery conflict because the chart already loads it internally. This scenario usually happens on pages that contain controls from different suites (e.g, RadHtmlChart and Kendo UI widget which depends on external jQuery).

You can easily handle that situation by configuring RadScriptManager to use the external jQuery as follows:

1. Reference jQuery and the Kendo UI stylesheet in the <head> section:

	````ASP.NET
	<head runat="server">
    	<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	</head>
	````

2. Configure the RadScriptManager as per the **Including external jQuery** section from the [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}) article.

	````ASP.NET
		<telerik:RadScriptManager EnableCdn="true" ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
			<Scripts>
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
			</Scripts>
		</telerik:RadScriptManager>
	````

3. Add RadHtmlChart. Define the RadHtmlChart before loading Kendo UI scripts.

	````ASP.NET
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
	````

4. Load Kendo UI Scripts After RadHtmlChart. Ensure that Kendo UI scripts load after RadHtmlChart:

	````ASP.NET
        <%-- Load Kendo scripts after the AJAX Chart --%>
        <script src="https://kendo.cdn.telerik.com/2024.4.1112/js/kendo.all.min.js"></script>
	````

5. Initialize Kendo UI Widgets. After scripts are loaded, initialize Kendo UI widgets, such as Kendo Editor.

	````ASP.NET
	<textarea id="kendoEditorTextArea" style="width: 600px; height: 400px;">some content in textarea</textarea>
		<script type="text/javascript">
			$(document).ready(function () {
				//Render kendo editor on document ready event
				$("#kendoEditorTextArea").kendoEditor();
			});
		</script>
	````

See **Example 1** for details.

>caption Example 1: RadHtmlChart and Kendo UI editor integration with external jQuery.

````ASP.NET
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>RadControls</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/10.0.1/default/default-ocean-blue.css" />

</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager EnableCdn="true" ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
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

        <%-- Load Kendo scripts after the AJAX Chart --%>
        <script src="https://kendo.cdn.telerik.com/2024.4.1112/js/kendo.all.min.js"></script>

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

You can [Disable Embedded Scripts]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) of RadHtmlChart and manually reference them for custom deployment scenarios. You should also ensure there are no jQuery / scripts conflicts when integrating RadHtmlChart with Kendo UI widgets in such a scenario.

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
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>RadControls</title>
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/10.2.0/default/default-ocean-blue.css" />
</head>
<body>
    <form id="form1" runat="server">
	<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableScriptCombine="false">
		<Scripts>
			<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
			<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
			<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
			<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
			<asp:ScriptReference Path="https://kendo.cdn.telerik.com/2025.1.227/js/kendo.all.min.js" />
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
    </form>
</body>
</html>
````


## See Also

 * [Kendo UI Components](https://docs.telerik.com/kendo-ui/introduction)
 
 * [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%})
 
 * [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})
