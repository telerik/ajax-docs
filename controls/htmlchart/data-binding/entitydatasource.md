---
title: EntityDataSource
page_title: EntityDataSource | RadHtmlChart for ASP.NET AJAX Documentation
description: EntityDataSource
slug: htmlchart/data-binding/entitydatasource
tags: entitydatasource
published: True
position: 2
---

# EntityDataSource

This help article describes which properties to use to bind a **RadHtmlChart** to an **EntityDataSource** and presents a code example. You can bind a **RadHtmlChart** to an **EntityDataSource** using the following properties:

* **DataSourceID** in the main tag sets the declarative data source for the entire chart. You can use the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie and Donut; **DataFieldX** for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

The data context, used in the following example, is created from the Northwind database.

>caption Example 1: Bind an **EntityDataSource** to a **RadHtmlChart**.

````ASP.NET
<asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
	DefaultContainerName="NorthwindEntities" CommandText="select p.ProductName, p.UnitsInStock from NorthwindEntities.Products as p where p.CategoryID = 1">
</asp:EntityDataSource>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" DataSourceID="EntityDataSource1">
	<PlotArea>
		<Series>
			<telerik:BarSeries DataFieldY="UnitsInStock" Name="Drinks">
				<TooltipsAppearance Visible="false" />
			</telerik:BarSeries>
		</Series>
		<XAxis DataLabelsField="ProductName">
			<MinorGridLines Visible="false" />
			<MajorGridLines Visible="false" />
		</XAxis>
		<YAxis>
			<TitleAppearance Text="Units" />
			<MinorGridLines Visible="false" />
		</YAxis>
	</PlotArea>
	<Legend>
		<Appearance Visible="false" />
	</Legend>
	<ChartTitle Text="Units In Stock">
	</ChartTitle>
</telerik:RadHtmlChart>
````

## See Also

 * [RadHtmlChart Bar Chart]({%slug htmlchart/chart-types/bar-chart%})

 * [RadHtmlChart EntityDataSource Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/entitydatasource/defaultcs.aspx)
