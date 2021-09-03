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


## Solution

### External Legend for ColumnChart

![htmlchart-render-external-legend](images/htmlchart-render-external-legend.png)

1. Configure a sample RadHtmlChart.

1. Follow the instructions from [this help article]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %}) in order to enable the integration of RadHtmlChart with Kendo UI scripts
   
1. Handle the RadHtmlChart's OnClientLoad event and bind a custom Kendo UI client template in it.

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

### External Legend for PieChart

Creating an external legend for a pie chart is a bit more specific, as the chart actually has one series, visually displayed as multiple one. In order to implement an external legend with it, we will work directly with the chart data source.

![htmlchart-render-external-legend](images/htmlchart-render-external-legend-pie.png)

1. Configure a sample Pie RadHtmlChart.

1. Follow the instructions from [this help article]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %}) in order to enable the integration of RadHtmlChart with Kendo UI scripts
   
1. Handle the RadHtmlChart's OnClientLoad event and bind a custom Kendo UI client template in it.

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
            <ClientEvents OnLoad="onChartLoad" OnKendoWidgetInitializing="onInitializing" />
            <Legend>
                <Appearance Visible="false" />
            </Legend>
            <PlotArea>
                <Series>
                    <telerik:PieSeries DataFieldY="ShipQty" NameField="ProdName">
                    </telerik:PieSeries>
                </Series>
            </PlotArea>
        </telerik:RadHtmlChart>

        <script id="legendItemTemplate" type="text/kendo">
            <span class="legend-item" data-bind="events: {click: onClick}" >
                <span class="legend-marker" data-bind="style:{background: markerColor}"></span>
                <span>#:data.ProdName#</span>
             </span>
        </script>

        <div data-bind="source:series" data-template="legendItemTemplate" id="legend">
        </div>

        <script>
            var chart;
            var index = 0;
            var series;
            function onInitializing(sender, args) {
                console.log(args);
                series = args.series;
                console.log(series[0]);
            }

            function onChartLoad(chartObj, args) {

                chart = $find("<%=RadHtmlChart1.ClientID%>").get_kendoWidget();
                var seriesData = chart.dataSource.options.data;
                
                var viewModel = kendo.observable({
                    series: seriesData,
                    onClick: function (e) {
                        var category = e.data.ProdName;
                        var series = chart.findSeriesByIndex(0);
                        var point = series.findPoint(function (point) {
                            return point.category === category;
                        });
                        var visible = point ? false : true;

                        series.toggleVisibility(visible, function (item) {
                            return item.ProdName == category;
                        });
                        e.data.set("visible", visible);
                    },

                    markerColor: function (e) {
                        var pointIdx = chart.options.series[0].data.map(function (ev) { return ev.ProdName; }).indexOf(e.ProdName);
                        var colors = chart.options.seriesColors;
                        var color = colors[pointIdx % colors.length];
                        return e.get("visible") ? color : "grey";
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
            RadHtmlChart1.DataSource = GetData();
            RadHtmlChart1.DataBind();
        }
    }

    private object GetData()
    {
        DataTable dt = new DataTable();
        dt.Columns.Add("ProdName");
        dt.Columns.Add("ShipQty");
        dt.Columns.Add("visible");

        for (int i = 1; i < 50; i++)
        {
            dt.Rows.Add(
                "Prod_" + i,
                i,
                true
            ) ;
        }

        return dt;
    }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        If Not IsPostBack Then
            RadHtmlChart1.DataSource = GetData()
            RadHtmlChart1.DataBind()
        End If
    End Sub

    Private Function GetData() As Object
        Dim dt As DataTable = New DataTable()
        dt.Columns.Add("ProdName")
        dt.Columns.Add("ShipQty")
        dt.Columns.Add("visible")

        For i As Integer = 1 To 50 - 1
            dt.Rows.Add("Prod_" & i, i, True)
        Next

        Return dt
    End Function
````


## See Also

* [Render External Legend in Kendo UI Chart widget](https://docs.telerik.com/kendo-ui/controls/charts/how-to/appearance/external-legend)

* [RadHtmlChart Integration With Kendo UI Widgets]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets %})


