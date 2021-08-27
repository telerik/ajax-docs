---
title: How to Render External Legend in RadHtmlChart
description: How to render External Legend in RadHtmlChart - Telerik UI for ASP.NET AJAX. Check it out!
type: how-to
page_title: How to Render External Legend in RadHtmlChart
slug: htmlchart-render-external-legend
position: 
tags: 
ticketid: 1533094
res_type: kb
---


## Description
In some scenarios, you might need to render the legend outside of RadHtmlChart (for example, if you want to have a scrollable legend element). The following example demonstrates how to achieve this behavior by [integrating RadHtmlChart with Kendo UI Template]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %}):

![htmlchart-render-external-legend](images/htmlchart-render-external-legend.png)

htmlchart-render-external-legend

## Solution

1. Configure asample RadHtmlChart.

1. Follow the instructions from [this help article]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %}) in order to enable the integration of RadHtmlChart with Kendo UI scripts
   
1. Hanlde the RadHtmlChart's OnClientLoad event and bind a custom Kendo UI client template in it.

````ASP.NET
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.common.min.css" />
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.rtl.min.css" />
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.default.min.css" />
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.2.616/styles/kendo.mobile.all.min.css" />

    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2021.2.616/js/angular.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2021.2.616/js/jszip.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2021.2.616/js/kendo.all.min.js"></script>
    <style>
        .legend-item {
            font: 12px sans-serif;
            margin: 2px;
            cursor: pointer;
        }

            .legend-item .legend-marker {
                display: inline-block;
                width: 8px;
                height: 8px;
            }
    </style>
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
            <ClientEvents OnLoad="onChartLoad" />
            <Legend>
                <Appearance Visible="false"/>
            </Legend>
        </telerik:RadHtmlChart>

        <script id="legendItemTemplate" type="text/kendo">
            <span class="legend-item" data-bind="events: {mouseenter: onMouseEnter, mouseleave: onMouseLeave, click: onClick}" >
                <span class="legend-marker" data-bind="style:{background: markerColor}"></span>
                <span>#:name#</span>
             </span>
        </script>

        <div data-bind="source:series" data-template="legendItemTemplate" id="legend">
        </div>


        <script>
            function onChartLoad(chartObj, args) {
                var chart = $find("RadHtmlChart1").get_kendoWidget();

                var viewModel = kendo.observable({
                    series: chart.options.series,
                    onMouseEnter: function (e) {
                        var name = e.data.name;
                        var series = chart.findSeriesByName(name);
                        series.toggleHighlight(true);
                    },
                    onMouseLeave: function (e) {
                        var name = e.data.name;
                        var series = chart.findSeriesByName(name);
                        series.toggleHighlight(false);
                    },
                    onClick: function (e) {
                        var name = e.data.name;
                        var series = chart.findSeriesByName(name);

                        if (e.data.visible) {
                            series.toggleVisibility(false);
                        }
                        else {
                            series.toggleVisibility(true);
                        }

                        e.data.set("visible", !e.data.visible);
                    },
                    markerColor: function (e) {
                        return e.get("visible") ? e.color : "grey";
                    }
                });

                kendo.bind($("#legend"), viewModel);
            }
        </script>
    </form>
</body>
</html>
````

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            ConfigureChart();
        }
    }

    protected void ConfigureChart()
    {
        for (int i = 0; i < 50; i++)
        {
            ColumnSeries series = new ColumnSeries();
            series.Name = "Series " + i;
            series.SeriesItems.Add(new CategorySeriesItem() { Y = i % 5 });
            RadHtmlChart1.PlotArea.Series.Add(series);
        }
    }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Not IsPostBack Then
            ConfigureChart()
        End If
    End Sub

    Protected Sub ConfigureChart()
        For i As Integer = 0 To 50 - 1
            Dim series As ColumnSeries = New ColumnSeries()
            series.Name = "Series " & i
            series.SeriesItems.Add(New CategorySeriesItem() With {
                .Y = i Mod 5
            })
            RadHtmlChart1.PlotArea.Series.Add(series)
        Next
    End Sub
````

## See Also

* [Render External Legend in Kendo UI Chart widget](https://docs.telerik.com/kendo-ui/controls/charts/how-to/appearance/external-legend)

* [RadHtmlChart Integration With Kendo UI Widgets]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %})


