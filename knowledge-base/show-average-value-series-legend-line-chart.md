---
title: Displaying Average Value in Legend for Line Chart
description: Learn how to show average values for a line chart series in the legend using Kendo UI for ASP.NET Core Chart.
type: how-to
page_title: Show Average Value in Series Legend for Line Chart
meta_title: Show Average Value in Series Legend for Line Chart
slug: show-average-value-series-legend-line-chart
tags: chart, legenditem, visual, asp.net core, average-value, series
res_type: kb
ticketid: 1717616
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Chart for UI for ASP.NET Core</td>
</tr>
<tr>
<td>Version</td>
<td>2026.1.415</td>
</tr>
</tbody>
</table>

## Description

I want to display the average value of each series in the legend of a line chart in Kendo UI for ASP.NET Core Chart. The goal is to customize the legend to include the average value along with the series name and marker.

This knowledge base article also answers the following questions:
- How to customize a legend in Kendo UI for ASP.NET Core Chart?
- How to use LegendItem Visual function to display additional data?
- How to display calculated values in the legend of a line chart?

## Solution

To achieve this, use the `LegendItem()` builder with the `Visual()` method. This method allows manual customization of the legend item as vector graphics. Follow these steps:

1. Create a `ChartSeriesViewModel` class to hold the series data and the average value.

2. Calculate the average value of each series in the backend and pass it to the view.

3. Serialize the calculated averages into JavaScript and use them in the `Visual()` function.

4. Define a custom JavaScript function for `Visual()` to render the legend item with the series name, marker, and average value.

Here is the implementation:

### Backend (Controller and Model)

```csharp
public class ChartSeriesViewModel
{
    public string Name { get; set; }
    public List<double> Values { get; set; }
    public double Average { get; set; }
}

public IActionResult Index()
{
    List<ChartSeriesViewModel> seriesData = new List<ChartSeriesViewModel>
    {
        new ChartSeriesViewModel
        {
            Name = "East Asia & Pacific",
            Values = new List<double> { 7.61, 5.47, 5.18, 5.24, 4.76, 4.72, 4.67, 5.05, 4.76, 3.96, -0.12, 6.1, 2.85 }
        },
        new ChartSeriesViewModel
        {
            Name = "European Union",
            Values = new List<double> { 2.23, 1.89, -0.7, -0.08, 1.6, 2.31, 1.98, 2.84, 2.07, 1.81, -5.67, 5.47, 3.54 }
        },
        new ChartSeriesViewModel
        {
            Name = "World",
            Values = new List<double> { 4.54, 3.32, 2.71, 2.81, 3.07, 3.08, 2.81, 3.39, 3.29, 2.59, -3.07, 6.02, 3.08 }
        }
    };

    foreach (var series in seriesData)
    {
        series.Average = Math.Round(series.Values.Average(), 2);
    }

    return View(seriesData);
}
```

### View

```csharp
@model IEnumerable<line_chart.Models.ChartSeriesViewModel>

@{
    List<ChartSeriesViewModel> seriesList = Model.ToList();
}

@(Html.Kendo().Chart()
    .Name("chart")
    .Title(t => t.Text("GDP Growth (Annual %)"))
    .Legend(legend => legend.Position(ChartLegendPosition.Bottom)
        .Orientation(ChartLegendOrientation.Horizontal))
    .Series(series =>
    {
        foreach (var chartSeries in seriesList)
        {
            series.Line(chartSeries.Values.ToArray())
                .Name(chartSeries.Name)
                .LegendItem(li => li.Visual("getLegendVisual"));
        }
    })
    .CategoryAxis(axis => axis.Categories(
        "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"))
    .ValueAxis(axis => axis.Numeric().Labels(labels => labels.Format("{0}%")))
)

<script>
    let seriesAverages = @Html.Raw(System.Text.Json.JsonSerializer.Serialize(
        seriesList.ToDictionary(s => s.Name, s => s.Average)
    ));

    function getLegendVisual(e) {
        let drawing = kendo.drawing;
        let geometry = kendo.geometry;

        let color = e.options.markers.background || e.options.line.color || "#000";
        let avg = seriesAverages[e.series.name];

        let group = new drawing.Group();

        // Line marker
        let line = new drawing.Path({ stroke: { color: color, width: 2 } })
            .moveTo(0, 7).lineTo(22, 7);

        let markerRect = new geometry.Rect([8, 3], [8, 8]);
        let marker = new drawing.Rect(markerRect, {
            fill: { color: color },
            stroke: { color: color }
        });

        // Series name text
        let nameText = new drawing.Text(
            e.series.name,
            new geometry.Point(28, 0),
            { font: "12px Arial, sans-serif", fill: { color: "#333" } }
        );

        // Average text
        let avgText = new drawing.Text(
            "(Avg: " + avg + "%)",
            new geometry.Point(28, 16),
            { font: "11px Arial, sans-serif", fill: { color: "#666" } }
        );

        group.append(line, marker, nameText, avgText);
        return group;
    }
</script>
```


