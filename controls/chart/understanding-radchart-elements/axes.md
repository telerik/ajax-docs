---
title: Axes
page_title: Axes | UI for ASP.NET AJAX Documentation
description: Axes
slug: chart/understanding-radchart-elements/axes
tags: axes
published: True
position: 2
---

# Axes



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


X and Y axes are included in all chart types but the [Pie]({%slug chart/understanding-radchart-types/pie-charts%}) chart. Typically the YAxis displays values and the XAxis displays categories.For example, the YAxis might show "items sold" or "revenue", while the XAxis might show "Months" or "Products". The X axis can also display values. A second "Y" axis property YAxis2 is provided for displaying a second scale of measurements.
>caption 

![XAxis, YAxis and YAxis2](images/radchart-understandingelements003.png)

## Axis Elements

Each axis has:

* Grid lines display perpendicular to the axis covering the plot area.

* Axis line

* Axis label

* Axis marks along the axis line

* Item labels below the axis line

The example below shows a sample X-axis with several appearance related properties customized.
>caption 

![Axis Elements](images/radchart-understandingelements002.png)

The RadChart PlotArea property has sub properties XAxis, YAxis and YAxis2. Each axis object has an Appearance property used to make the customizations shown above.Some significant axis appearance related properties are:

* The LabelAppearance property includes sub properties that control the axis label __visibility__, __Border__, __Corners__, __Dimensions__, __FillStyle__, __Position__ and __Shadow__.

* MajorGridlines controls the appearance of grid lines displaying over the plot area including __visibility__, __Cap__, __Color__, __PenStyle__ and __Width__.

* TextAppearance handles the axis item label text, most notably TextAppearance.TextProperties controls font properties and color.

>note Axis properties can be set from the Properties Window of Visual Studio, in the XML configuration file, or through the API. Properties for the X and Y axis are identical except where noted.
>


## Formatting Axis

You can modify the overall appearance of an axes by changing the AutoScale and AutoShrink properties.These properties when set to true cause the axis to expand and shrink to accommodate dynamically added and removed items. This is useful when the number of items changes on-the-fly.

>tip Turn AutoScale off if you want complete control over labeling of an axis.
>




## Formatting Axis Labels
>caption 

![Axis Positioning](images/radchart-understandingelements004.png)

To display a range of values along an axis, specify for the ChartAxis a starting MinValue, an ending MaxValue, and a Step. In the example above, the YAxis has a MinValue of "0", a MaxValue of "250" and a Step of "50." The X axis is labeled explicitly by setting PlotArea.XAxis properties:

* AutoScale = False

* MaxValue = 3

* MinValue = 1

* Step = 1

* Visible = True

* Items is populated with with 3 ChartAxisItem objects where the Appearance.Text property contains "Non-Smokers", "Social Smokers" and "Heavy Smokers".

You can control the size and position of the labels using the axis __Appearance.LabelAppearance____Dimensions__ and __Position__ properties.





## Unique YAxis and YAxis2 Properties

AxisMode: AxisMode can be __Normal__ (the default) or __Extended__. __Extended__ mode provides buffer space above the largest value for best visual formatting.

ScaleBreaks: The ScaleBreaks feature allows you to "break off" large chunks of the axis so that graphs with large amplitude are easier to read. ScaleBreaks are available for both YAxis and YAxis2 of the plot area. By default __Enabled__ is false so scale breaks do not display. Set the maximum number of breaks using __MaxBreaks__ and __MinCollapsibleSpace__ to set the minimum interval between data points before a break will occur. For the lines that make up each break, __Spacing__ controls the amount of space between lines and __LineType__ controls the shape of the line (i.e. __Sinusoid__, __Straight__, __JaggedCurve__ and __Curve__).


