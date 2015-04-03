---
title: Migrate Axes Configuration
page_title: Migrate Axes Configuration | UI for ASP.NET AJAX Documentation
description: Migrate Axes Configuration
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration
tags: migrate,axes,configuration
published: True
position: 1
---

# Migrate Axes Configuration



This article illustrates how to migrate the configuration of Y and X axes from __RadChart__ to	__RadHtmlChart__. The examples illustrate how to migrate the axes declaratively; however, the	same classes and properties of the axes can be used for the programmatic creation as well.

## Configuring Y-axis

### Configuring RadChart Y-axis

You can configure the y-axis in __RadChart__ through the __YAxis__ element of the __PlotArea__.If you want the __MinValue__, __MaxValue__ and __Step__ properties of the axisto take effect, you must explicitly set the __AutoScale__ property to __false__.You can also fine-tune the minor and major grid lines of the axis through the __MinorGridLines__ and__MajorGridLines__ objects exposed by the __PlotArea.YAxis.Appearance__ tag.__Example 1__ illustrates how to configure the y-axis in __RadChart__.

__Example 1__: Configure __MinValue__, __MaxValue__ and__Step__ properties as well as the __MinorGridLines__ and__MajorGridLines__ objects of the y-axis in __RadChart__.

````ASPNET
			<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
				<PlotArea>
					<YAxis MinValue="5" MaxValue="45" Step="10" AutoScale="false">
						<Appearance>
							<MajorGridLines Width="1" />
							<MinorGridLines Visible="false" />
						</Appearance>
					</YAxis>
				</PlotArea>
				<Series>
					<telerik:ChartSeries Type="Line">
						<Items>
							<telerik:ChartSeriesItem YValue="30"></telerik:ChartSeriesItem>
							<telerik:ChartSeriesItem YValue="10"></telerik:ChartSeriesItem>
							<telerik:ChartSeriesItem YValue="20"></telerik:ChartSeriesItem>
						</Items>
					</telerik:ChartSeries>
				</Series>
			</telerik:RadChart>
````



### Configuring RadHtmlChart Y-axis

You can configure the y-axis in __RadHtmlChart__ through the __YAxis__ element of the __PlotArea__.Setting the __MinValue__, __MaxValue__ and __Step__ properties of the axisdoesn't require additional configuration.You can also fine-tune the minor and major grid lines of the axis through the __MinorGridLines__ and__MajorGridLines__ objects exposed by the __PlotArea.YAxis__ element.__Example 2__ illustrates how to configure the y-axis in __RadHtmlChart__.

__Example 2__: Configure __MinValue__, __MaxValue__ and__Step__ properties as well as the __MinorGridLines__ and__MajorGridLines__ objects of the y-axis in __RadHtmlChart__.

````ASPNET
		<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<YAxis MinValue="5" MaxValue="45" Step="10">
					<MajorGridLines Width="1" />
					<MinorGridLines Visible="false" />
				</YAxis>
				<Series>
					<telerik:LineSeries>
						<SeriesItems>
							<telerik:CategorySeriesItem Y="30" />
							<telerik:CategorySeriesItem Y="10" />
							<telerik:CategorySeriesItem Y="20" />
						</SeriesItems>
					</telerik:LineSeries>
				</Series>
			</PlotArea>
		</telerik:RadHtmlChart>
````



## Configuring X-axis

### Configuring RadChart X-axis

You can configure the x-axis in __RadChart__ through the __XAxis__ element of the __PlotArea__.If you want to set labels for the x-axis items, you must specify the __TextBlock.Text__ property of each__ChartAxisItem__ object from the __XAxis.Items__ collection.If you want the x-axis settingsto take effect, you must explicitly set the __AutoScale__ property to __false__.__Example 3__ illustrates how to configure the x-axis in __RadChart__.

__Example 3__: Setting labels to the x-axis items in __RadChart__.

````ASPNET
			<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
				<PlotArea>
					<XAxis AutoScale="false">
						<Items>
							<telerik:ChartAxisItem>
								<TextBlock Text="item 1"></TextBlock>
							</telerik:ChartAxisItem>
							<telerik:ChartAxisItem>
								<TextBlock Text="item 2"></TextBlock>
							</telerik:ChartAxisItem>
							<telerik:ChartAxisItem>
								<TextBlock Text="item 3"></TextBlock>
							</telerik:ChartAxisItem>
						</Items>
					</XAxis>
				</PlotArea>
				<Series>
					<telerik:ChartSeries Type="Line">
						<Items>
							<telerik:ChartSeriesItem YValue="30"></telerik:ChartSeriesItem>
							<telerik:ChartSeriesItem YValue="10"></telerik:ChartSeriesItem>
							<telerik:ChartSeriesItem YValue="20"></telerik:ChartSeriesItem>
						</Items>
					</telerik:ChartSeries>
				</Series>
			</telerik:RadChart>
````



### Configuring RadHtmlChart X-axis

You can configure the x-axis in __RadHtmlChart__ through the __XAxis__ element of the __PlotArea__.If you want to set labels for the x-axis items, you must specify the __LabelText__ property of each__AxisItem__ object from the __XAxis.Items__ collection.No additional configuration is required for the x-axis labels to take effect.__Example 4__ illustrates how to configure the x-axis in __RadHtmlChart__.

__Example 4__: Setting labels to the x-axis items in __RadHtmlChart__.

````ASPNET
		<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<XAxis>
					<Items>
						<telerik:AxisItem LabelText="item 1" />
						<telerik:AxisItem LabelText="item 2" />
						<telerik:AxisItem LabelText="item 3" />
					</Items>
				</XAxis>
				<Series>
					<telerik:LineSeries>
						<SeriesItems>
							<telerik:CategorySeriesItem Y="30" />
							<telerik:CategorySeriesItem Y="10" />
							<telerik:CategorySeriesItem Y="20" />
						</SeriesItems>
					</telerik:LineSeries>
				</Series>
			</PlotArea>
		</telerik:RadHtmlChart>
````



# See Also

 * [RadHtmlChart : Migrating Data Binding Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})

 * [RadHtmlChart : Migrating Date Axis Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})

 * [RadHtmlChart : Migrating Functionalities - Features and Series Types Parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})

 * [RadHtmlChart : Migrating Series Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})

 * [RadHtmlChart : Configuring Axes]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [RadHtmlChart : Date Axis]({%slug htmlchart/functionality/axes/date-axis%})

 * [RadHtmlChart : Formatting Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [RadHtmlChart : Multiple Y-axes]({%slug htmlchart/functionality/axes/multiple-y-axes%})
