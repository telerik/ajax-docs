---
title: XmlDataSource
page_title: XmlDataSource | RadHtmlChart for ASP.NET AJAX Documentation
description: XmlDataSource
slug: htmlchart/data-binding/xmldatasource
tags: xmldatasource
published: True
position: 4
---

# XmlDataSource

This Help article describes which properties to use to bind a **RadHtmlChart** to an **XmlDataSource** and presents a code example.You can bind the **RadHtmlChart** to an **XmlDataSource** using the following properties:

* **DataSourceID** in the main tag sets the declarative data-source for the entire chart.You can use the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie;	and **DataFieldX** for Scatter and ScatterLine)for the series to point it to the desired data source field.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

>caption Example 1: Bind an **XmlDataSource** to a **RadHtmlChart**. The content of the XML data follows next.

````ASP.NET
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

The XML file in Example 2 is used in the data source **XmlDataSource1**:

>caption Example 2: A simple XML file that serves as a data source.

````XML
<?xml version="1.0" encoding="utf-8" ?>
<books>
	<book Title="Pure JavaScript" Price="49.95"/>
	<book Title="Effective C++" Price="25.99"/>
	<book Title="Assembly Language: Step-By-Step" Price="34.95"/>
	<book Title="Oracle PL/SQL Best Practices" Price="64.99"/>
</books>
````

## See Also

 * [RadHtmlChart XMLDataSource Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtoxml/defaultcs.aspx)
