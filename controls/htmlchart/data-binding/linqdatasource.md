---
title: LinqDataSource
page_title: LinqDataSource | UI for ASP.NET AJAX Documentation
description: LinqDataSource
slug: htmlchart/data-binding/linqdatasource
tags: linqdatasource
published: True
position: 1
---

# LinqDataSource



## 

This help article describes which properties to use to bind a __RadHtmlChart__ to a __LinqDataSource__and presents a code example. You can bind a __RadHtmlChart__ to a __LinqDataSource__using the following properties:

* __DataSourceID__ in the main tag sets the declarative data source for the entire chart. You can use the	__DataSource__ property for a programmatic data source if you create the connection in the code-behind.

* __DataFieldY__ property (and __ColorField__, __ExplodeField__, __NameField__ for Pie; __DataFieldX__ for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* __DataLabelsField__ for the x-axis labels to populate the items for the axis.

The data context, used in the following example, is created from the Northwind database:

__Example 1__: Bind a __LinqDataSource__ to a __RadHtmlChart__.

````ASPNET
		<asp:LinqDataSource ID="LinqDataSource1" runat="server" OnSelecting="LinqDataSource1_Selecting">
		</asp:LinqDataSource>
		<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" DataSourceID="LinqDataSource1">
			<PlotArea>
				<Series>
					<telerik:ColumnSeries DataFieldY="UnitsInStock" Name="Units">
						<TooltipsAppearance Visible="false" />
					</telerik:ColumnSeries>
				</Series>
				<XAxis DataLabelsField="ProductName">
					<LabelsAppearance />
					<MajorGridLines Visible="false" />
					<MinorGridLines Visible="false" />
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



__Example 2__: Handling the Selecting event of the __LinqDataSource__ from __Example 1__.



````C#
		protected void LinqDataSource1_Selecting(object sender, LinqDataSourceSelectEventArgs e)
		{
			LinqToSqlReadOnly.NorthwindReadOnlyDataContext northwindContext = new LinqToSqlReadOnly.NorthwindReadOnlyDataContext();
			e.Result = northwindContext.Products.Where(p => p.CategoryID == 1).Take(5);
		}
````
````VB.NET
		Protected Sub LinqDataSource1_Selecting(sender As Object, e As System.Web.UI.WebControls.LinqDataSourceSelectEventArgs) Handles LinqDataSource1.Selecting
			Dim northwindContext As New LinqToSqlReadOnly.NorthwindReadOnlyDataContext()
			e.Result = northwindContext.Products.Where(Function(p) p.CategoryID = 1).Take(5)
		End Sub
````


# See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart LinqDataSource Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/linqdatasource/defaultcs.aspx)
