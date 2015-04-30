---
title: OnClientSeriesHovered(deprecated)
page_title: OnClientSeriesHovered(deprecated) | RadHtmlChart for ASP.NET AJAX Documentation
description: OnClientSeriesHovered(deprecated)
slug: htmlchart/client-side-programming/events/onclientserieshovered(deprecated)
tags: onclientserieshovered(deprecated)
published: True
position: 2
---

# OnClientSeriesHovered(deprecated)

>caution  **OnClientSeriesHovered** client-side event has been deprecated since Q3 2014. Please, use [OnSeriesHover]({%slug htmlchart/client-side-programming/events/overview%}) instead.

The **OnClientSeriesHovered** event occurs when the series in the **RadHtmlChart** are hovered.This article discusses the objects of the **RadHtmlChart OnClientSeriesHovered** event and their properties and methods and then shows an example of how to	retrieve properties when the event occurs (**Example 1**).

The **OnClientSeriesHovered** event handler receives the following parameters:

* The client-side object of the clicked **RadHtmlChart** control.

* An event arguments object that exposes the following properties and methods:

	* **get_category()** - Returns the category of the clicked series.
		* **PieSeries**/**DonutSeries** - Returns the **NameField** of the clicked item (or	the **Name** property of the **PieSeries**/**DonutSeries** item).
		* **BubbleSeries, ScatterSeries** and **ScatterLineSeries** use a numerical x-axis instead of a categorical x-axis and therefore they return undefined because there is no category.
		* **Other series types** - Returns the text of the x-axis label that corresponds to the clicked item.

	* **get_dataItem()** - Returns the data points of the clicked series:
		* **BubbleSeries** - An object of the clicked item is returned. This object exposes three fields: **X**,**Y** and **Size**.For example: *args.get_dataItem().size* will return the **Size** of the clicked series item.
		* **PieSeries/DonutSeries** - An object of the clicked item is returned. It exposes four fields: **Value**,	**Category**, **Color** and **Explode**.For example: *args.get_dataItem().value* will return the **Value** of the clicked series item.
		* **ScatterSeries** and **ScatterLineSeries** - An array with two elements is returned—the **X** and **Y** value of the item: *args.get_dataItem()[1]*	will return the **Y** value of the item.
		* **Other series types** - The **Y** value of the item.

	* **get_seriesData()** - Returns the data points of the clicked series:
		* **BubbleSeries** - An object for each item is returned. The object exposes three fields: **X**,	**Y** and **Size**.	For example: *args.get_seriesData()[2].size* will return the size of the third series item (if such item is available).
		* **PieSeries/DonutSeries** - An object for each item is returned. It exposes four fields: **Value**,	**Category**, **Color** and **Explode**.	For example: *args.get_seriesData()[2].value* will return the value of the third series item (if such item is available).
		* **ScatterSeries** and **ScatterLineSeries** - An array is returned with an element for each series item.Each array element exposes two fields: **[0]** and **[1]** for the **X** and**Y** value of the item: *args.get_seriesData()[2][0]*will return the **X** value of the third series item.
		* **Other series types** - An array with the **Y** values of the items from the series is returned. For example:*args.get_seriesData()[0]* will return the **Y** value of the first item in the series.

	* **get_seriesName()** - Returns the **Name** of the clicked series. It corresponds to the **Name**	property of the series. If the series does not have a name set, *undefined* will be returned.

	* **get_seriesType()** - Returns the type of the clicked series (e.g., Bar, Pie, ScatterLine, and so on) as a string.

	* **get_value()** - Returns the value of the clicked item.
		* **BubbleSeries** - An object of the clicked item is returned. It exposes three fields: **X**,	**Y** and **Size**.	For example: *args.get_value().size* will return the size of the clicked series item.
		* **ScatterSeries and ScatterLineSeries** - Returns an object that exposes the **X** and **Y** fields for the **X**	value and the **Y** value of the item. For example: *args.get_value().x* will	return the **X** value of a scatter-type item.
		* **Other series types** - Returns the **Y** value of the clicked series item.

>important For data bound series, **get_seriesData()** and **get_dataItem()** methods return objects whose fields correspond to the columns from the	data source. For example, if the **ExplodeField** property of a PieSeries is set to "IsExploded" the dataItem will contain a	field named "IsExploded" that will hold the value from the row.

>caption Example 1: The following example shows how to retrieve some information about the hovered **RadHtmlChart** via the listed properties:

````ASP.NET
<script type="text/javascript">
	function OnClientSeriesHovered(sender, eventArgs) {
		var message = $get("message");
		message.innerHTML = "The cursor is placed over a series of type '" + eventArgs.get_seriesType() + "' with name '" + eventArgs.get_seriesName() + "'.";
	}
</script>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="800px" Height="400px" OnClientSeriesHovered="OnClientSeriesHovered">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="In 2010">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="46.3" />
					<telerik:CategorySeriesItem Y="46.5" />
					<telerik:CategorySeriesItem Y="46.2" />
					<telerik:CategorySeriesItem Y="46.4" />
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="In 2011">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="42.8" />
					<telerik:CategorySeriesItem Y="42.4" />
					<telerik:CategorySeriesItem Y="42.2" />
					<telerik:CategorySeriesItem Y="42.9" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January" />
				<telerik:AxisItem LabelText="Februrary" />
				<telerik:AxisItem LabelText="March" />
				<telerik:AxisItem LabelText="April" />
			</Items>
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="{0}%" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Firefox market share">
	</ChartTitle>
</telerik:RadHtmlChart>
<span id="message"></span>
````

## See Also

 * [Client-Side Events Basics]({%slug htmlchart/client-side-programming/events/overview%})

 * [Column Chart]({%slug htmlchart/chart-types/column-chart%})

 * [OnClientSeriesClicked(deprecated)]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%})
