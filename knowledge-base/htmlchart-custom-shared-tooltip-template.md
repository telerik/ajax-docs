---
title: Change shared tooltip client-side template of RadHtmlChart
description: See how to control the Tooltip appearance by defining a custom common tooltip client template
type: how-to
page_title: Modify built-in shared tooltip template of BoxPlotChart
slug: htmlchart-custom-shared-tooltip-template
position: 
tags: 
ticketid: 1347359
res_type: kb
category: knowledge-base
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.917</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
You can control the shared Tooltip appearance of **RadHtmlChart** by defining a custom common tooltip client-side template like explained here:
[https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/clienttemplate/overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/clienttemplate/overview)

## Solution
````ASP.NET
<telerik:RadHtmlChart runat="server" ID="BoxPlotChart" Width="800" Height="500">
    <PlotArea>
        <CommonTooltipsAppearance Shared="True">
            <ClientTemplate>
                    Lower: #= dataItem.lower# <br/>
                    Q1: #= dataItem.q1# <br/>
                    Median: #=dataItem.median# <br/>
                    Mean: #=dataItem.mean # <br/>
                    Q3: #=dataItem.q3 # <br/>
                    Upper: #=dataItem.upper # <br/>
            </ClientTemplate>
        </CommonTooltipsAppearance>
        <Series>
            <telerik:BoxPlotSeries
                DataLowerField="lower"
                DataQ1Field="q1"
                DataMedianField="median"
                DataQ3Field="q3"
                DataMeanField="mean"
                DataUpperField="upper"
                DataOutliersField="outliers">
                <TooltipsAppearance Color="White"></TooltipsAppearance>
                <Appearance FillStyle-BackgroundColor="#4f99d2"></Appearance>
            </telerik:BoxPlotSeries>
        </Series>
        <XAxis>
            <Items>
                <telerik:AxisItem LabelText="January" />
                <telerik:AxisItem LabelText="February" />
                <telerik:AxisItem LabelText="March" />
            </Items>
        </XAxis>
    </PlotArea>
    <ChartTitle Text="Total money spent on online purchases"></ChartTitle>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    BoxPlotChart.DataSource = GetData();
}

protected DataTable GetData()
{
    DataTable table = new DataTable();

    table.Columns.Add(new DataColumn("lower", typeof(int)));
    table.Columns.Add(new DataColumn("q1", typeof(int)));
    table.Columns.Add(new DataColumn("median", typeof(int)));
    table.Columns.Add(new DataColumn("q3", typeof(int)));
    table.Columns.Add(new DataColumn("upper", typeof(int)));
    table.Columns.Add(new DataColumn("mean", typeof(int)));
    table.Columns.Add(new DataColumn("outliers", typeof(int?[])));

    table.Rows.Add(new object[] { 26, 38, 51, 63, 75, 49, new int?[] { 20, 140, 145, 5, 90, 100 } });
    table.Rows.Add(new object[] { 46, 58, 66, 100, 105, 68, new int?[] { 120, 110, 15 } });
    table.Rows.Add(new object[] { 31, 41, 52, 62, 70, 52, new int?[] { 14, 20, 85, 135 } });
    return table;
}
````

## See Also
* [ClientTemplate Overview]({%slug htmlchart/functionality/clienttemplate/overview%})

* [Box Plot Chart]({%slug htmlchart/chart-types/box-plot-chart%})
