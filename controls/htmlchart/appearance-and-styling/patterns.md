---
title: Patterns
page_title: Patterns
description: "Learn how to use Series Patterns of the Telerik UI for ASP.NET AJAX Chart."
slug: htmlchart/appearance-and-styling/patterns
tags: patterns
published: True
position: 8
---

# Patterns

The Chart offers customization options for presenting data visually, including support for using patterns in Chart series. Patterns are providing unique and visually differentiate between them. This article demonstrates how to apply various patterns to the series in a Bar Chart.

## Pattern Settings

The Chart series Patterns can be customized by adjusting the following settings:

| Property     | Data Type                        | Description                                                                                                        |
| ------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `Background` | `System.Drawing.Color`           | The background color of the pattern (can be the color's name or hex code).                                         |
| `Color`      | `System.Drawing.Color`           | The color of the pattern. Defaults to transparent (can be the color's name or hex code).                           |
| `Gap`        | `Double`                         | The gap between the elements of the pattern.                                                                       |
| `Radius`     | `Double`                         | The radius of the dots (applicable only for the **Dots** pattern).                                                 |
| `Size`       | `Double`                         | The size of the squares in the grid (applicable only for the **Grid** pattern).                                    |
| `Type`       | [`PatternType?`](#pattern-types) | Specifies the type of the pattern.                                                                                 |
| `Width`      | `Double`                         | The width of the lines (applicable for the **Crosshatch**, **DiagonalStripes**, and **VerticalStripes** patterns). |

## Pattern Types

Several pattern types can be used to enhance the visual presentation of the Chart series:

- `Crosshatch`
- `DiagonalStripes`
- `Dots`
- `Grid`
- `VerticalStripes`

## Create Patterns

The following examples showcases how to add Patterns to a Bar chart where each series uses a different pattern, allowing users to easily differentiate between them.

> note In order to use the patterns, you will need to set the `RenderAs` property of the Chart to **Canvas**.

### In the Markup

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="ColumnChart" Width="800" RenderAs="Canvas" BackColor="White">
    <PlotArea>
        <Series>
            <telerik:ColumnSeries>
                <PatternAppearance Type="VerticalStripes" Color="White" Background="Blue" Width="1.2" Gap="12" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="33" />
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries>
                <PatternAppearance Type="Crosshatch" Color="White" Background="#9933ff" Width="1.2" Gap="12" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="19" />
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries>
                <PatternAppearance Type="DiagonalStripes" Color="White" Background="#ff66ff" Width="1.2" Gap="12" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="28" />
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries>
                <PatternAppearance Type="Grid" Color="Red" Background="White" Size="12" Gap="1.2" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="33" />
                </SeriesItems>
            </telerik:ColumnSeries>
            <telerik:ColumnSeries>
                <PatternAppearance Type="Dots" Color="#009900" Background="#ffff99" Radius="7.2" Gap="3.6" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="26" />
                </SeriesItems>
            </telerik:ColumnSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

### In the CodeBehind

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadHtmlChart columnChart = new RadHtmlChart
        {
            ID = "ColumnChart1",
            Width = Unit.Pixel(800),
            RenderAs = ChartRenderingEngine.Canvas,
            BackColor = Color.White
        };

        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(33, PatternType.VerticalStripes, "White", "Blue", 1.2, 12));
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(19, PatternType.Crosshatch, "White", "#9933ff", 1.2, 12));
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(28, PatternType.DiagonalStripes, "White", "#ff66ff", 1.2, 12));
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(33, PatternType.Grid, "Red", "White", 12, 1.2));
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(26, PatternType.Dots, "#009900", "#ffff99", 7.2, 3.6, true));

        ChartPlaceholder.Controls.Add(columnChart);
    }
}

private ColumnSeries CreatePatternedColumnSeries(
    decimal yValue,
    PatternType patternType,
    string color,
    string background,
    double widthOrSizeOrRadius,
    double gap,
    bool isDotPattern = false)
{
    ColumnSeries series = new ColumnSeries();
    series.SeriesItems.Add(new CategorySeriesItem(yValue));

    series.PatternAppearance.Type = patternType;
    series.PatternAppearance.Color = ColorTranslator.FromHtml(color);
    series.PatternAppearance.Background = ColorTranslator.FromHtml(background);
    series.PatternAppearance.Width = widthOrSizeOrRadius;
    series.PatternAppearance.Gap = gap;
    series.PatternAppearance.Radius = isDotPattern ? widthOrSizeOrRadius : 0;

    return series;
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        Dim columnChart As RadHtmlChart = New RadHtmlChart With {
            .ID = "ColumnChart1",
            .Width = Unit.Pixel(800),
            .RenderAs = ChartRenderingEngine.Canvas,
            .BackColor = Color.White
        }

        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(33, PatternType.VerticalStripes, "White", "Blue", 1.2, 12))
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(19, PatternType.Crosshatch, "White", "#9933ff", 1.2, 12))
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(28, PatternType.DiagonalStripes, "White", "#ff66ff", 1.2, 12))
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(33, PatternType.Grid, "Red", "White", 12, 1.2))
        columnChart.PlotArea.Series.Add(CreatePatternedColumnSeries(26, PatternType.Dots, "#009900", "#ffff99", 7.2, 3.6, True))

        ChartPlaceholder.Controls.Add(columnChart)
    End If
End Sub

Private Function CreatePatternedColumnSeries(ByVal yValue As Decimal, ByVal patternType As PatternType, ByVal color As String, ByVal background As String, ByVal widthOrSizeOrRadius As Double, ByVal gap As Double, ByVal Optional isDotPattern As Boolean = False) As ColumnSeries
    Dim series As ColumnSeries = New ColumnSeries()

    series.SeriesItems.Add(New CategorySeriesItem(yValue))

    series.PatternAppearance.Type = patternType
    series.PatternAppearance.Color = ColorTranslator.FromHtml(color)
    series.PatternAppearance.Background = ColorTranslator.FromHtml(background)
    series.PatternAppearance.Width = widthOrSizeOrRadius
    series.PatternAppearance.Gap = gap
    series.PatternAppearance.Radius = If(isDotPattern, widthOrSizeOrRadius, 0)

    Return series
End Function
````

For a live demonstration, go to the [Chart Series Patterns](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/appearance/patterns/defaultcs.aspx) demo.
