---
title: Automatic Text-wrapping
page_title: Automatic Text-wrapping - RadChart
description: Check our Web Forms article about Automatic Text-wrapping.
slug: chart/features/automatic-text-wrapping
tags: automatic,text-wrapping
published: True
position: 1
---

# Automatic Text-wrapping

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

RadChart supports automatic Notepad-like word-wrapping functionality for the following text elements:

* Chart Title

* Chart Legend Item Labels

* Axis Item Labels

* Axis Labels

* MarkedZone Labels

* EmptySeriesMessage Label

* DataTable-related text elements

Automatic text-wrapping is disabled by default. The chart control provides fine-grained API that allows you to enable wrapping for all elements, or alternatively on individual element basis.

The behavior is controlled either via the **RadChart.AutoTextWrap** property that enables text-wrapping globally for all supported chart elements, or you can set the AutoTextWrap properties for the respective chart elements. Setting a value for individual element always takes precedence i.e. you can have the global RadChart.AutoTextWrap property set to true, and still disable the text-wrapping for the title by setting its respective AutoTextWrap property to false.

AutoTextWrap properties that control the wrapping settings for individual elements (usually under Appearance on the respective TextBlock for each element):

* Chart Title (**ChartTitle.TextBlock.Appearance.AutoTextWrap**)

* Legend-related

	* For all legend items (**Legend.Appearance.ItemTextAppearance.AutoTextWrap**)

	* For individual legend item (**Legend -> Items -> LabelItem.TextBlock.Appearance.AutoTextWrap**)

* Axis-related

	* For axis label (**Axis.AxisLabel.Appearance.AutoTextWrap**)

	* For all axis item labels (**Axis.Appearance.TextAppearance.AutoTextWrap**)

	* For individual axis item label (**Axis -> Items -> ChartAxisItem.TextBlock.AutoTextWrap**)

* DataTable text elements (**PlotArea.DataTable.Appearance.AutoTextWrap**)

* MarkedZone Labels (**ChartMarkedZone.Label.TextBlock.Appearance.AutoTextWrap**)

* EmptySeriesMessage (**PlotArea.EmptySeriesMessage.TextBlock.Appearance.AutoTextWrap**)

## Text-wrapping enabled for all chart elements:

````XML
<telerik:RadChart ID="RadChart1" runat="server" DataSourceID="AccessDataSource1"
	AutoTextWrap="true" Skin="Wood" AutoLayout="true" Height="500px" Width="700px"
	SeriesOrientation="Horizontal">
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<PlotArea>
		<XAxis AutoScale="false">
			<Items>
				<telerik:ChartAxisItem TextBlock-Text="Cote de Blaye" />
				<telerik:ChartAxisItem TextBlock-Text="Thuringer Rostbratwurst" />
				<telerik:ChartAxisItem TextBlock-Text="Mishi Kobe Niku" />
				<telerik:ChartAxisItem TextBlock-Text="Sir Rodney's Marmalade" />
				<telerik:ChartAxisItem TextBlock-Text="Carnarvon Tigers" />
				<telerik:ChartAxisItem TextBlock-Text="Raclette Courdavault" />
				<telerik:ChartAxisItem TextBlock-Text="Manjimup Dried Apples" />
				<telerik:ChartAxisItem TextBlock-Text="Tarte au sucre" />
				<telerik:ChartAxisItem TextBlock-Text="Ipoh Coffee" />
				<telerik:ChartAxisItem TextBlock-Text="Rossle Sauerkraut" />
			</Items>
		</XAxis>
	</PlotArea>
	<ChartTitle>
		<Appearance Dimensions-Margins="0,50,0,50">
		</Appearance>
		<TextBlock Text="Ten Most Expensive Products: AutoTextWrap set to true globally." />
	</ChartTitle>
</telerik:RadChart>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="-/Nwind.mdb"
	SelectCommand="SELECT * FROM [Ten Most Expensive Products]"></asp:AccessDataSource>
````

**Result:**

![](images/radchart-chartwrapall.png)

## Text-wrapping enabled for all elements, but explicitly disabled for the axis item labels:

````XML
<telerik:RadChart ID="RadChart2" runat="server" DataSourceID="AccessDataSource1"
	AutoTextWrap="true" Skin="Metal" AutoLayout="true" Height="500px" Width="700px"
	SeriesOrientation="Horizontal">
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<PlotArea>
		<XAxis AutoScale="false">
			<Appearance TextAppearance-AutoTextWrap="false">
			</Appearance>
			<Items>
				<telerik:ChartAxisItem TextBlock-Text="Cote de Blaye" />
				<telerik:ChartAxisItem TextBlock-Text="Thuringer Rostbratwurst" />
				<telerik:ChartAxisItem TextBlock-Text="Mishi Kobe Niku" />
				<telerik:ChartAxisItem TextBlock-Text="Sir Rodney's Marmalade" />
				<telerik:ChartAxisItem TextBlock-Text="Carnarvon Tigers" />
				<telerik:ChartAxisItem TextBlock-Text="Raclette Courdavault" />
				<telerik:ChartAxisItem TextBlock-Text="Manjimup Dried Apples" />
				<telerik:ChartAxisItem TextBlock-Text="Tarte au sucre" />
				<telerik:ChartAxisItem TextBlock-Text="Ipoh Coffee" />
				<telerik:ChartAxisItem TextBlock-Text="Rossle Sauerkraut" />
			</Items>
		</XAxis>
	</PlotArea>
	<ChartTitle>
		<Appearance Dimensions-Margins="0,50,0,50">
		</Appearance>
		<TextBlock Text="Ten Most Expensive Products: AutoTextWrap set to true globally, wrapping disabled for axis item labels explicitly." />
	</ChartTitle>
</telerik:RadChart>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="-/Nwind.mdb"
	SelectCommand="SELECT * FROM [Ten Most Expensive Products]"></asp:AccessDataSource>
````

**Result:**
>caption 

![](images/radchart-chartwrapallexceptaxis.png)

## Text-wrapping enabled only for the axis item labels explicitly:

````XML
<telerik:RadChart ID="RadChart3" runat="server" DataSourceID="AccessDataSource1"
	Skin="Marble" AutoLayout="true" Height="500px" Width="700px" SeriesOrientation="Vertical">
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<Series>
		<telerik:ChartSeries DataYColumn="UnitPrice" Name="Product Unit Price">
		</telerik:ChartSeries>
	</Series>
	<PlotArea DataTable-Visible="false">
		<XAxis AutoScale="false">
			<Appearance TextAppearance-TextProperties-Color="Black">
				<TextAppearance AutoTextWrap="true" TextProperties-Font="Georgia, 10pt">
				</TextAppearance>
				<LabelAppearance Position-AlignedPosition="Left" RotationAngle="45">
				</LabelAppearance>
			</Appearance>
			<Items>
				<telerik:ChartAxisItem TextBlock-Text="Cote de Blaye" />
				<telerik:ChartAxisItem TextBlock-Text="Thuringer Rostbratwurst" />
				<telerik:ChartAxisItem TextBlock-Text="Mishi Kobe Niku" />
				<telerik:ChartAxisItem TextBlock-Text="Sir Rodney's Marmalade" />
				<telerik:ChartAxisItem TextBlock-Text="Carnarvon Tigers" />
				<telerik:ChartAxisItem TextBlock-Text="Raclette Courdavault" />
			</Items>
		</XAxis>
	</PlotArea>
	<ChartTitle>
		<TextBlock Text="Sample Chart Products: wrapping only axis item labels." />
	</ChartTitle>
</telerik:RadChart>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="-/Nwind.mdb"
	SelectCommand="SELECT * FROM [Ten Most Expensive Products]"></asp:AccessDataSource>
````

**Result:**

![](images/radchart-chartwrapaxisonly.png)
