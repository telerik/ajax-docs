---
title: XmlDataSource
page_title: XmlDataSource | UI for ASP.NET AJAX Documentation
description: XmlDataSource
slug: htmlchart/data-binding/xmldatasource
tags: xmldatasource
published: True
position: 4
---

# XmlDataSource



## 

This Help article describes which properties to use to bind a __RadHtmlChart__ to an __XmlDataSource__ and presents a code example.You can bind the __RadHtmlChart__ to an __XmlDataSource__ using the following properties:

* __DataSourceID__ in the main tag sets the declarative datasource for the entire chart.You can use the __DataSource__ property for a programmatic data source if you create the connection in the code-behind.

* __DataFieldY__ property (and __ColorField__, __ExplodeField__, __NameField__ for Pie;	and __DataFieldX__ for Scatter and ScatterLine)for the series to point it to the desired data source field.

* __DataLabelsField__ for the x-axis labels to populate the items for the axis.

__Example 1__: Bind an __XmlDataSource__ to a __RadHtmlChart__. The content of the XML data follows next.

````ASPNET
		<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="ChartData.xml">
		</asp:XmlDataSource>
		<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" DataSourceID="XmlDataSource1">
			<PlotArea>
				<Series>
					<telerik:BarSeries Name="2011" DataFieldY="Price">
						<TooltipsAppearance DataFormatString="${0}" />
						<LabelsAppearance Visible="false" />
					</telerik:BarSeries>
				</Series>
				<XAxis DataLabelsField="Title">
				</XAxis>
				<YAxis>
					<LabelsAppearance DataFormatString="${0}" />
				</YAxis>
			</PlotArea>
			<Legend>
				<Appearance Visible="false" />
			</Legend>
			<ChartTitle Text="Books Pricing">
			</ChartTitle>
		</telerik:RadHtmlChart>
````



The XML file in Example 2 is used in the data source __XmlDataSource1__:

__Example 2__: A simple XML file that serves as a data source.

````XML
		<?xml version="1.0" encoding="utf-8" ?>
		<books>
			<book Title="Pure JavaScript" Price="49.95"/>
			<book Title="Effective C++" Price="25.99"/>
			<book Title="Assembly Language: Step-By-Step" Price="34.95"/>
			<book Title="Oracle PL/SQL Best Practices" Price="64.99"/>
		</books>
````



# See Also

 * [RadHtmlChart XMLDataSource Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtoxml/defaultcs.aspx)
