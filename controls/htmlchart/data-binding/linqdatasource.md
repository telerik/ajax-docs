---
title: LinqDataSource
page_title: LinqDataSource | RadHtmlChart for ASP.NET AJAX Documentation
description: LinqDataSource
slug: htmlchart/data-binding/linqdatasource
tags: linqdatasource
published: True
position: 1
---

# LinqDataSource

This help article describes which properties to use to bind a **RadHtmlChart** to a **LinqDataSource** and presents a code example. You can bind a **RadHtmlChart** to a **LinqDataSource** using the following properties:

* **DataSourceID** in the main tag sets the declarative data source for the entire chart. You can use the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie; **DataFieldX** for Bubble, Scatter and ScatterLine; etc.) for the series to point it to the desired data source field.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

The data context, used in the following example, is created from the Northwind database:

>caption Example 1: Bind a **LinqDataSource** to a **RadHtmlChart**.

````ASP.NET
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

>caption Example 2: Handling the Selecting event of the **LinqDataSource** from **Example 1**.

````C#
protected void LinqDataSource1_Selecting(object sender, LinqDataSourceSelectEventArgs e)
{
	LinqToSqlReadOnly.NorthwindReadOnlyDataContext northwindContext = new LinqToSqlReadOnly.NorthwindReadOnlyDataContext();
	e.Result = northwindContext.Products.Where(p => p.CategoryID == 1).Take(5);
}
````
````VB
Protected Sub LinqDataSource1_Selecting(sender As Object, e As System.Web.UI.WebControls.LinqDataSourceSelectEventArgs) Handles LinqDataSource1.Selecting
	Dim northwindContext As New LinqToSqlReadOnly.NorthwindReadOnlyDataContext()
	e.Result = northwindContext.Products.Where(Function(p) p.CategoryID = 1).Take(5)
End Sub
````

## See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart LinqDataSource Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/linqdatasource/defaultcs.aspx)
