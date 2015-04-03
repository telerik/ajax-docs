---
title: SqlDataSource
page_title: SqlDataSource | UI for ASP.NET AJAX Documentation
description: SqlDataSource
slug: htmlchart/data-binding/sqldatasource
tags: sqldatasource
published: True
position: 0
---

# SqlDataSource



## 

This help article describes which properties to use to bind a __RadHtmlChart__ to a __SqlDataSource__ and presents a code example. You can bind a __RadHtmlChart__ to a __SqlDataSource__using the following properties:

* __DataSourceID__ in the main tag sets the declarative data source for the entire chart. You can use	the __DataSource__ property for a programmatic data source if you create the connection in the code-behind.

* __DataFieldY__ property (and __ColorField__, __ExplodeField__, __NameField__ for Pie; __DataFieldX__ for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* __DataLabelsField__ for the x-axis labels to populate the items for the axis.

The data, used in the following example, is pulled from the database __Telerik__, which can be foundin the App_Data folder in the main demos directory.

__Example 1__: Bind a __SqlDataSource__ to a __RadHtmlChart__.

````ASPNET
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



# See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart Database Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/database/defaultcs.aspx)
