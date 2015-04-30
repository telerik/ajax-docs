---
title: Migrate Axes Configuration
page_title: Migrate Axes Configuration | RadHtmlChart for ASP.NET AJAX Documentation
description: Migrate Axes Configuration
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration
tags: migrate,axes,configuration
published: True
position: 1
---

# Migrate Axes Configuration

This article illustrates how to migrate the configuration of Y and X axes from **RadChart** to	**RadHtmlChart**. The examples illustrate how to migrate the axes declaratively. However, the same classes and properties of the axes can be used for the programmatic creation as well.

## Configuring Y-axis

### Configuring RadChart Y-axis

You can configure the y-axis in **RadChart** through the **YAxis** element of the **PlotArea**.If you want the **MinValue**, **MaxValue** and **Step** properties of the axisto take effect, you must explicitly set the **AutoScale** property to **false**. You can also fine-tune the minor and major grid lines of the axis through the **MinorGridLines** and **MajorGridLines** objects exposed by the **PlotArea.YAxis.Appearance** tag. **Example 1** illustrates how to configure the y-axis in **RadChart**.

>caption Example 1: Configure **MinValue**, **MaxValue** and **Step** properties as well as the **MinorGridLines** and **MajorGridLines** objects of the y-axis in **RadChart**.

````ASP.NET
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

You can configure the y-axis in **RadHtmlChart** through the **YAxis** element of the **PlotArea**. Setting the **MinValue**, **MaxValue** and **Step** properties of the axis doesn't require additional configuration.You can also fine-tune the minor and major grid lines of the axis through the **MinorGridLines** and **MajorGridLines** objects exposed by the **PlotArea.YAxis** element. **Example 2** illustrates how to configure the y-axis in **RadHtmlChart**.

>caption Example 2: Configure **MinValue**, **MaxValue** and **Step** properties as well as the **MinorGridLines** and **MajorGridLines** objects of the y-axis in **RadHtmlChart**.

````ASP.NET
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

You can configure the x-axis in **RadChart** through the **XAxis** element of the **PlotArea**.If you want to set labels for the x-axis items, you must specify the **TextBlock.Text** property of each **ChartAxisItem** object from the **XAxis.Items** collection.If you want the x-axis settings to take effect, you must explicitly set the **AutoScale** property to **false**. **Example 3** illustrates how to configure the x-axis in **RadChart**.

>caption Example 3: Setting labels to the x-axis items in **RadChart**.

````ASP.NET
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

You can configure the x-axis in **RadHtmlChart** through the **XAxis** element of the **PlotArea**. If you want to set labels for the x-axis items, you must specify the **LabelText** property of each**AxisItem** object from the **XAxis.Items** collection.No additional configuration is required for the x-axis labels to take effect. **Example 4** illustrates how to configure the x-axis in **RadHtmlChart**.

>caption Example 4: Setting labels to the x-axis items in **RadHtmlChart**.

````ASP.NET
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

## See Also

 * [RadHtmlChart : Migrating Data Binding Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})

 * [RadHtmlChart : Migrating Date Axis Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})

 * [RadHtmlChart : Migrating Functionalities - Features and Series Types Parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})

 * [RadHtmlChart : Migrating Series Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})

 * [RadHtmlChart : Configuring Axes]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [RadHtmlChart : Date Axis]({%slug htmlchart/functionality/axes/date-axis%})

 * [RadHtmlChart : Formatting Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [RadHtmlChart : Multiple Y-axes]({%slug htmlchart/functionality/axes/multiple-y-axes%})
