---
title: SqlDataSource
page_title: SqlDataSource | RadHtmlChart for ASP.NET AJAX Documentation
description: SqlDataSource
slug: htmlchart/data-binding/sqldatasource
tags: sqldatasource
published: True
position: 0
---

# SqlDataSource

This help article describes which properties to use to bind a **RadHtmlChart** to a **SqlDataSource** and presents a code example. You can bind a **RadHtmlChart** to a **SqlDataSource** using the following properties:

* **DataSourceID** in the main tag sets the declarative data source for the entire chart. You can use	the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie; **DataFieldX** for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

The data, used in the following example, is pulled from the database **Telerik**, which can be found in the App_Data folder in the main demos directory (you can download the installation for the Demos App from [here](https://www.telerik.com/account/product-download?product=RCAJAX)).

>caption Example 1: Bind a **SqlDataSource** to a **RadHtmlChart**.

````ASP.NET
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	SelectCommand="SELECT [Year], [Value] FROM [Data] WHERE ([Subcategory_Id] = 1)">
</asp:SqlDataSource>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" DataSourceID="SqlDataSource1">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries DataFieldY="Value" Name="Electricity Consumption">
			</telerik:ColumnSeries>
		</Series>
		<XAxis DataLabelsField="Year">
			<LabelsAppearance RotationAngle="75" />
			<TitleAppearance Text="Year" />
		</XAxis>
		<YAxis>
			<TitleAppearance Text="MWh" />
		</YAxis>
	</PlotArea>
	<Legend>
		<Appearance Visible="false" />
	</Legend>
	<ChartTitle Text="Electricity Consumption">
	</ChartTitle>
</telerik:RadHtmlChart>
````



## See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart Database Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/database/defaultcs.aspx)
