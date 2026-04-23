---
title: Configuring Telerik Range Bar Chart to Work with Dates
description: Learn how to configure a Telerik UI for ASP.NET AJAX HtmlChart RangeBar to handle Unix timestamps and render dates. Resolve axis and formatting issues in your chart.
type: how-to
page_title: Configuring RangeBar Chart with Dates in ASP.NET AJAX HtmlChart
meta_title: Configuring RangeBar Chart with Dates in ASP.NET AJAX HtmlChart
slug: htmlchart-configuring-rangebar-chart-dates
tags: htmlchart, asp.net ajax, rangebar, datetime, axis, clienttemplate 
res_type: kb
ticketid: 1713176
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> 
HtmlChart for UI for ASP.NET AJAX 
</td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

When using the [HtmlChart](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview) RangeBarSeries in Telerik UI for ASP.NET AJAX, configuring the chart to work with dates requires special consideration. The `RangeSeriesItem` accepts `decimal?` values for its `From` and `To` properties, not `DateTime`. To use dates, you must convert them to Unix timestamps (milliseconds since January 1, 1970). Additionally, the RangeBarSeries swaps the axes, which may require adjustments to axis configuration and labeling.

This knowledge base article also answers the following questions:
- How to configure a RangeBar chart with Unix timestamps in ASP.NET AJAX HtmlChart?
- Why does my RangeBar chart render empty when using DateTime values?
- How to format date labels in a RangeBar chart?

## Solution

To configure a RangeBar chart to work with dates, follow these steps:

1. Convert `DateTime` values to Unix timestamps (in milliseconds) by subtracting January 1, 1970, and casting the result to `decimal`. Example:
   ```csharp
   decimal timestamp = (decimal)scopeStart.Subtract(new DateTime(1970, 1, 1)).TotalMilliseconds;
   ```

2. Pass the converted Unix timestamps into the `RangeSeriesItem` constructor:
   ```csharp
   series1.SeriesItems.Add(new RangeSeriesItem((decimal)from1, (decimal)to1));
   ```

3. Configure the axes for the RangeBarSeries:
   - The YAxis is the horizontal value axis where `From` and `To` values are plotted. Set `MinValue`, `MaxValue`, and `Step` using Unix timestamps.
   - The XAxis is the vertical category axis and does not require `Type="Date"` or `BaseUnit`.

4. Format the YAxis labels as readable dates using a `ClientTemplate`:
   ```html
   <ClientTemplate>
       #= kendo.toString(new Date(value), 'MMM dd, yyyy') #
   </ClientTemplate>
   ```

### Example Code

Below is an example of how to configure the RangeBar chart in markup and code-behind.

#### Markup
```html
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart2" Width="900px" Height="400px">
    <ChartTitle Text="Services">
        <Appearance Align="Center" />
    </ChartTitle>
    <Legend>
        <Appearance Visible="true" Position="Bottom" />
    </Legend>
    <PlotArea>
        <Series>
            <telerik:RangeBarSeries Name="123">
                <SeriesItems>
                    <telerik:RangeSeriesItem From="1748736000000" To="1783123200000" />
                </SeriesItems>
                <Appearance>
                    <FillStyle BackgroundColor="#5B9BD5" />
                </Appearance>
            </telerik:RangeBarSeries>
        </Series>
        <XAxis>
            <MinorGridLines Visible="false" />
        </XAxis>
        <YAxis>
            <MinValue></MinValue>
            <MaxValue></MaxValue>
            <Step></Step>
            <MinorGridLines Visible="true" />
            <MajorGridLines Visible="true" />
            <LabelsAppearance>
                <ClientTemplate>
                    #= kendo.toString(new Date(value), 'MMM dd, yyyy') #
                </ClientTemplate>
            </LabelsAppearance>
        </YAxis>
    </PlotArea>
</telerik:RadHtmlChart>
```

#### Code-Behind
```csharp
protected void Page_Load(object sender, EventArgs e)
{
    RadHtmlChart2.PlotArea.YAxis.MinValue = ToTimestamp(new DateTime(2025, 5, 1));
    RadHtmlChart2.PlotArea.YAxis.MaxValue = ToTimestamp(new DateTime(2026, 8, 1));
    RadHtmlChart2.PlotArea.YAxis.Step = (decimal)TimeSpan.FromDays(30).TotalMilliseconds;

    var series1 = new RangeBarSeries();
    long from1 = 1748736000000;  // Jun 01, 2025
    long to1 = 1783123200000;    // Jul 03, 2026
    series1.SeriesItems.Add(new RangeSeriesItem((decimal)from1, (decimal)to1));

    RadHtmlChart2.PlotArea.Series.Add(series1);
}

private decimal ToTimestamp(DateTime date)
{
    return (decimal)date.Subtract(new DateTime(1970, 1, 1)).TotalMilliseconds;
}
```

## See Also

- [HtmlChart Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [Programmatic Creation of SeriesItems with DateTime](https://www.telerik.com/products/aspnet-ajax/documentation/controls/htmlchart/how-to/programmatic-creation-of-seriesitems-with-datetime)
- [HtmlChart RangeBarSeries Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/chart-types/range-bar)
- [2026 Q1 (Version number: 2026.1.211) breaking changes](https://www.telerik.com/forums/known-issues-and-important-changes#6054750)
