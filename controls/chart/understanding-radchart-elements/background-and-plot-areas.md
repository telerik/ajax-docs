---
title: Background and Plot Areas
page_title: Background and Plot Areas | UI for ASP.NET AJAX Documentation
description: Background and Plot Areas
slug: chart/understanding-radchart-elements/background-and-plot-areas
tags: background,and,plot,areas
published: True
position: 1
---

# Background and Plot Areas



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## Chart Background

The background of the chart is the outermost rectangle that encloses all other elements of the chart. It stretches for the whole width and length of the output image of the chart. Using the Appearance property of the chart you can fully customize the chart background look and feel including:

* Border visibility, color, pen style and width.

* The Corners property lets you square or round each corner individually. The degree of rounding can be tailored.

* FillStyle controls the fill color and type (solid, hatched, image, gradient).

* ImageQuality and TextQuality properties can also be fine tuned.

## Plot Area

The plot area is the working rectangular area between X and Y axes where data is displayed. The size of the plot depends on the chart background size and the chart margins, which define the distance between the border of the plot area and the border of the chart background. This area is represented by the RadChart PlotArea property. Some unique PlotArea properties are:

* SeriesOrientation is an enumeration that orients the entire PlotArea either Vertical or Horizontal.

* XAxis, YAxis, and YAxis2 properties. These axis properties control the scale and appearance of both axes. See the [Axes]({%slug chart/understanding-radchart-elements/axes%}) topic for more information.

* [DataTable]({%slug chart/understanding-radchart-elements/data-table%}): Displays a spreadsheet style table of the data in the chart, typically just below the chart itself.See the [DataTable]({%slug chart/understanding-radchart-elements/data-table%}) topic for more information.

* [EmptySeriesMessage](CC5AF201-9BF3-4696-BC86-0D46A61F7C0B): The predefined message that displays in the PlotArea when there is no series data defined for the chart.

* [MarkedZones](9D3B011D-12DF-44A4-8E94-1EAF25E616C1): Areas in the background of the chart that can be defined, labeled and filled. [MarkedZones](9D3B011D-12DF-44A4-8E94-1EAF25E616C1) are used to highlight or group areas on the chart.




>caption 

![RadChart Background and Plot Area](images/radchart-understandingelements001.png)

Like the RadChart as a whole, PlotArea has an Appearance property allowing customization:

* Border visibility, color, pen style and width.

* The Corners property lets you square or round each corner individually. The degree of rounding can be tailored.

* FillStyle controls the fill color and type (solid, hatched, image, gradient).

* The Dimensions property provides control of __Width__, __Height__, __Margins__, __Paddings__ and if you want the dimensions to Autosize__.__

* SeriesPalette is a property of the chart that lets you to choose a predefined skin color palette for each series.This can help provide a distinct look to differentiate each series.

* The __Shadow__ property lets you control shadow Blur, shadow Color, shadow Distance and Position relative to the plot area.
