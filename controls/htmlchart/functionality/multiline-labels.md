---
title: Multiline Labels
page_title: Multiline Labels | RadHtmlChart for ASP.NET AJAX Documentation
description: Multiline Labels
slug: htmlchart/functionality/multiline-labels
tags: multiline,labels
published: True
position: 2
---

# Multiline Labels



## 

You can split labels and titles in **RadHtmlChart** into multiple lines by using the **"\n"** line feed character. This help article shows how to wrap labels and titles in a chart (**Figure 1**) with a small sample (**Example 1**). The multiline labels feature is available since **Q3 2014**. If you are using an older version of the suite, [ this ]( http://feedback.telerik.com/Project/108/Feedback/Details/38633 ) page provides a workaround.

>note You can add line breaks in tooltips via the **<br />** tag because tooltips in **RadHtmlChart** are rendered with simple HTML.
>

>caption Figure 1: Wrapping text in chart labels and titles by using a line feed character ("\n").

![htmlchart-multiline-labels](images/htmlchart-multiline-labels.png)

**Example 1**: How to split labels, titles and tooltips in **RadHtmlChart** into several lines. This code creates the chart shown in **Figure 1**.

````ASPNET
		<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="800px" Height="500px">
			<ChartTitle Text="Top 3 Economies of \n India"></ChartTitle>
			<PlotArea>
				<Series>
					<telerik:ColumnSeries Name="Year:\n2011-12">
						<LabelsAppearance>
							<ClientTemplate>
	                        #=series.name#\n
	                        GDP: #=value#
							</ClientTemplate>
						</LabelsAppearance>
						<TooltipsAppearance>
							<ClientTemplate>
	                        #=series.name#<br />
	                        GDP: #=value#<br />
	                        State: #=category#
							</ClientTemplate>
						</TooltipsAppearance>
						<SeriesItems>
							<telerik:CategorySeriesItem Y="1199000" />
							<telerik:CategorySeriesItem Y="679000" />
							<telerik:CategorySeriesItem Y="662000" />
						</SeriesItems>
					</telerik:ColumnSeries>
					<telerik:ColumnSeries Name="Year:\n2012-13">
						<LabelsAppearance>
							<ClientTemplate>
	                        #=series.name#\n
	                        GDP: #=value#
							</ClientTemplate>
						</LabelsAppearance>
						<TooltipsAppearance>
							<ClientTemplate>
	                        #=series.name#<br />
	                        GDP: #=value#<br />
	                        State: #=category#
							</ClientTemplate>
						</TooltipsAppearance>
						<SeriesItems>
							<telerik:CategorySeriesItem Y="1372000" />
							<telerik:CategorySeriesItem Y="768000" />
							<telerik:CategorySeriesItem Y="754000" />
						</SeriesItems>
					</telerik:ColumnSeries>
				</Series>
				<XAxis>
					<Items>
						<telerik:AxisItem LabelText="Maha-\nrashtra" />
						<telerik:AxisItem LabelText="Uttar\nPradesh" />
						<telerik:AxisItem LabelText="Andhra\nPradesh" />
					</Items>
				</XAxis>
				<YAxis>
					<TitleAppearance Text="Nominal GDP\n(in Crores of Rupees)"></TitleAppearance>
					<MinorGridLines Visible="false" />
				</YAxis>
			</PlotArea>
		</telerik:RadHtmlChart>
````



# See Also

 * [RadHtmlChart Server-side API]({%slug htmlchart/server-side-programming/overview%})

 * [RadHtmlChart ClientTemplate for Series Labels and Tooltips]({%slug htmlchart/functionality/clienttemplate/overview%})
