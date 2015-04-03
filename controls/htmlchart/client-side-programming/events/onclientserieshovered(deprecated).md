---
title: OnClientSeriesHovered(deprecated)
page_title: OnClientSeriesHovered(deprecated) | UI for ASP.NET AJAX Documentation
description: OnClientSeriesHovered(deprecated)
slug: htmlchart/client-side-programming/events/onclientserieshovered(deprecated)
tags: onclientserieshovered(deprecated)
published: True
position: 2
---

# OnClientSeriesHovered(deprecated)



## 

>caution  __OnClientSeriesHovered__ client-side event has been deprecated since Q3 2014. Please, use[OnSeriesHover]({%slug htmlchart/client-side-programming/events/overview%})instead.
>


The __OnClientSeriesHovered__ event occurs when the series in the __RadHtmlChart__ are hovered.This article discussesthe objects of the __RadHtmlChart OnClientSeriesHovered__ event and their properties and methods and then shows an example of how to	retrieve properties when the event occurs (__Example 1__).

The __OnClientSeriesHovered__ event handler receives the following parameters:

* The client-side object of the clicked __RadHtmlChart__ control.

* An event arguments object that exposes the following properties and methods:

* __get_category()__ - Returns the category of the clicked series.

* __PieSeries__/__DonutSeries__ - Returns the __NameField__ of the clicked item (or	the __Name__ property of the __PieSeries__/__DonutSeries__ item).

* __BubbleSeries, ScatterSeries__ and __ScatterLineSeries__ use a numerical x-axis instead of acategorical x-axis and therefore they return undefined because there is no category.

* __Other series types__ - Returns the text of the x-axis label that correspondsto the clicked item.

* __get_dataItem()__ - Returns the data points of the clicked series:

* __BubbleSeries__ - An object of the clicked item is returned. This object exposes three fields: __X__,__Y__ and __Size__.For example: *args.get_dataItem().size* will return the __Size__ of the clicked series item.

* __PieSeries/DonutSeries__ - An object of the clicked item is returned. It exposes four fields: __Value__,	__Category__, __Color__ and __Explode__.For example: *args.get_dataItem().value* will return the __Value__ of the clicked series item.

* __ScatterSeries__ and __ScatterLineSeries__ - An array withtwo elements is returned—the __X__ and __Y__ value of the item: *args.get_dataItem()[1]*	will return the __Y__ value of the item.

* __Other series types__ - The __Y__ value of the item.

* __get_seriesData()__ - Returns the data points of the clicked series:

* __BubbleSeries__ - An object for each item is returned. The object exposes three fields: __X__,	__Y__ and __Size__.	For example: *args.get_seriesData()[2].size* will return the size of the third series item (if such item is available).

* __PieSeries/DonutSeries__ - An object for each item is returned. It exposes four fields: __Value__,	__Category__, __Color__ and __Explode__.	For example: *args.get_seriesData()[2].value* will return the value of the third series item (if such item is available).

* __ScatterSeries__ and __ScatterLineSeries__ - An array is returned with an element for each series item.Each array element exposes two fields: __[0]__ and __[1]__ for the __X__ and__Y__ value of the item: *args.get_seriesData()[2][0]*will return the __X__ value of the third series item.

* __Other series types__ - An array with the __Y__ values of the items from the series is returned. For example:*args.get_seriesData()[0]* will return the __Y__ value of the first item in the series.

* __get_seriesName()__ - Returns the __Name__ of the clicked series. It corresponds to the __Name__	property of the series. If the series does not have a name set, *undefined* will be returned.

* __get_seriesType()__ - Returns the type of the clicked series (e.g., Bar, Pie, ScatterLine, and so on) as a string.

* __get_value()__ - Returns the value of the clicked item.

* __BubbleSeries__ - An object of the clicked item is returned. It exposes three fields: __X__,	__Y__ and __Size__.	For example: *args.get_value().size* will return the size of the clicked series item.

* __ScatterSeries and ScatterLineSeries__ - Returnsan object that exposes the __X__ and __Y__ fields for the __X__	value and the __Y__ value of the item. For example: *args.get_value().x* will	return the __X__ value of a scatter-type item.

* __Other series types__ - Returns the __Y__ value of the clicked series item.

>important For databound series, __get_seriesData()__ and __get_dataItem()__ methods return objects whose fields correspond to the columns from the	data source. For example, if the __ExplodeField__ property of a PieSeries is set to "IsExploded" the dataItem will contain a	field named "IsExploded" that will hold the value from the row.
>


__Example 1__: The following example shows how to retreive some information about the hovered __RadHtmlChart__ via the listed properties:

````ASPNET
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



# See Also

 * [Client-Side Events Basics]({%slug htmlchart/client-side-programming/events/overview%})

 * [Column Chart]({%slug htmlchart/chart-types/column-chart%})

 * [OnClientSeriesClicked(deprecated)]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%})
