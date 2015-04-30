---
title: Multiple Y-Axes
page_title: Multiple Y-Axes | RadHtmlChart for ASP.NET AJAX Documentation
description: Multiple Y-Axes
slug: htmlchart/functionality/axes/multiple-y-axes
tags: multiple,y-axes
published: True
position: 2
---

# Multiple Y-Axes

**RadHtmlChart** supports multiple Y-axes to provide an additional scale against which to plot information as of the Q2 2012 release.

To use multiple Y-axes, you add the required **telerik:AxisY** definitions in the **AdditionalYAxes** tag inside **PlotArea**. **Figure 1** shows a Column chart with an additional y-axis defined on the right. As you can see in the markup in **Example 1**, you configure the additional y-axes similar to the main YAxis, but you set the axis' **Name** property - its value is used in the series' **AxisName** property to specify which axis is used by the current series.

As of Q1 2014, you can use the **AxisCrossingPoints** tag to rearrange the position of the main and the additional Y-axes of the chart. **Figure 1** shows the additional y-axis repositioned on the right of the chart. The markup in Example 1 shows that the **AxisCrossingPoints** tag is defined in the **X-Axis** configuration section. The order of the **AxisCrossingPoint** properties corresponds to the Y-axes declarations and the **Value**	attribute sets the position through the X-axis.

>caption Figure 1: A Column chart with an additional y-axis, which is repositioned on the right.

![htmlchart-multiple-y-axes-overview](images/htmlchart-multiple-y-axes-overview.png)

>caption Example 1: The simple markup to create **Figure 1** with the **AdditionalYAxes** and **AxisCrossingPoints** tags.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="640px" Height="480px">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Total cases">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="1000" />
					<telerik:CategorySeriesItem Y="2000" />
					<telerik:CategorySeriesItem Y="2500" />
					<telerik:CategorySeriesItem Y="1750" />
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries AxisName="AdditionalAxis" Name="Outstanding Cases">
				<Appearance>
					<FillStyle BackgroundColor="Red" />
				</Appearance>
				<SeriesItems>
					<telerik:CategorySeriesItem Y="200" />
					<telerik:CategorySeriesItem Y="230" />
					<telerik:CategorySeriesItem Y="170" />
					<telerik:CategorySeriesItem Y="190" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<YAxis Color="Orange" Width="3">
			<TitleAppearance Text="Total Cases count">
				<TextStyle Color="Black" />
			</TitleAppearance>
			<LabelsAppearance>
				<TextStyle Color="Black" />
			</LabelsAppearance>
		</YAxis>
		<AdditionalYAxes>
			<telerik:AxisY Name="AdditionalAxis" Color="Red" Width="3">
				<TitleAppearance Text="Outstanding Cases count">
					<TextStyle Color="Black" />
				</TitleAppearance>
				<LabelsAppearance>
					<TextStyle Color="Black" />
				</LabelsAppearance>
			</telerik:AxisY>
		</AdditionalYAxes>
		<XAxis>
			<LabelsAppearance DataFormatString="Quarter {0}" />
			<Items>
				<telerik:AxisItem LabelText="1" />
				<telerik:AxisItem LabelText="2" />
				<telerik:AxisItem LabelText="3" />
				<telerik:AxisItem LabelText="4" />
			</Items>
			<AxisCrossingPoints>
				<telerik:AxisCrossingPoint Value="0" />
				<telerik:AxisCrossingPoint Value="4" />
			</AxisCrossingPoints>
		</XAxis>
	</PlotArea>
</telerik:RadHtmlChart>
````

## See Also

 * [RadHtmlChart Structure]({%slug htmlchart/radhtmlchart-structure%})
