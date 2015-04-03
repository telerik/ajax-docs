---
title: Shared Template for ToolTips
page_title: Shared Template for ToolTips | UI for ASP.NET AJAX Documentation
description: Shared Template for ToolTips
slug: htmlchart/functionality/clienttemplate/shared-template-for-tooltips
tags: shared,template,for,tooltips
published: True
position: 2
---

# Shared Template for ToolTips



## Shared Templates for ToolTips

You can hover over a single series item and display a common tooltip with information about all theseries items from the particular category. As of Q3 2013, the templates for tooltips in __RadHtmlChart__can be shared among all the series items within their group. You can share these templatesby setting the following properties in the __CommonTooltipsAppearance__ element, exposed by the __PlotArea__ of the chart:

* __Shared__ - You must explicitly set this property to __true__ forstandard charts. For Sparkline layout, the default value is __true__.

* __SharedTemplate__ - You must set the composite __SharedTemplate__ property to theappropriate string that represents the desired shared template that you want to apply to the tooltipswhen they render. The __SharedTemplate__ composite property can use the following fields:

* __points__ - The category points (__#= points[i].series.name#, #= points[i].value #__) where i is the index of the series.

* __category__ - The category name (__#= category #__)The string delimited inside __#=.....#__ is the expression to be evaluated. The tooltips are HTML, so HTML can be used outside of the expression tags.

>note You can use number formats inside __SharedTemplates__ . You can find more information in[this Formatting Numbers]({%slug htmlchart/appearance-and-styling/format-numbers%})article in the section called *Formatting Labels and Tooltips by Using their Client Templates.* 
>


## Example of Using SharedTemplates for ToolTips

This example illustrates the code that configures __SharedTemplate__ for tooltips in __Example 1__ and shows the actual output in__Figure 1__.
>caption Figure 1: Hover over a single series item and display common information about all the series items from	the category in the tooltip.

![htmlchart-client Templates-shared Template](images/htmlchart-clientTemplates-sharedTemplate.png)

The chart in __Figure 1__ was created with the markup in __Example 1__.

Example 1: You can share the information about the series items from the category in a tooltip by configuring the__Shared__ and __SharedTemplate__ properties exposed by the__CommonTooltipsAppearance__ element in the __PlotArea__.

````C#
			<telerik:radhtmlchart runat="server" id="ColumnChart" width="800" height="500">
				<ChartTitle Text="GDP for Transport and Communication">
				</ChartTitle>
				<PlotArea>
					<CommonTooltipsAppearance Shared="true" Color="White" BackgroundColor="Gray">
						<SharedTemplate>
							<div>GDP in #= category #</div>
							 # for (var i = 0; i < points.length; i++) { # 
							<div>#: points[i].series.name#: #: points[i].value #</div>
							# } #
						</SharedTemplate>
					</CommonTooltipsAppearance>
					<XAxis>
						<Items>
							<telerik:AxisItem LabelText="1999"></telerik:AxisItem>
							<telerik:AxisItem LabelText="2000"></telerik:AxisItem>
							<telerik:AxisItem LabelText="2001"></telerik:AxisItem>
							<telerik:AxisItem LabelText="2002"></telerik:AxisItem>
						</Items>
						<TitleAppearance Text="Years">
						</TitleAppearance>
					</XAxis>
					<YAxis>
						<TitleAppearance Text="GDP">
						</TitleAppearance>
					</YAxis>
					<Series>
						<telerik:ColumnSeries Name="Transport">
							<Appearance>
								<FillStyle BackgroundColor="#2A7A00"></FillStyle>
							</Appearance>
							<SeriesItems>
								<telerik:CategorySeriesItem Y="32735.7"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="37911.3"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="39462.8"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="32234.5"></telerik:CategorySeriesItem>
							</SeriesItems>
						</telerik:ColumnSeries>
						<telerik:ColumnSeries Name="Community">
							<Appearance>
								<FillStyle BackgroundColor="#B8D936"></FillStyle>
							</Appearance>
							<SeriesItems>
								<telerik:CategorySeriesItem Y="12453.9"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="14394.3"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="16333.1"></telerik:CategorySeriesItem>
								<telerik:CategorySeriesItem Y="25109"></telerik:CategorySeriesItem>
							</SeriesItems>
						</telerik:ColumnSeries>
					</Series>
				</PlotArea>
			</telerik:radhtmlchart>
````



# See Also

 * [Overview]({%slug htmlchart/functionality/clienttemplate/overview%})

 * [Display HTML and Execute JavaScript]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%})

 * [Format Numbers]({%slug htmlchart/appearance-and-styling/format-numbers%})
