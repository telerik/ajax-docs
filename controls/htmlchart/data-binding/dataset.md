---
title: DataSet
page_title: DataSet - RadHtmlChart
description: Check our Web Forms article about DataSet.
slug: htmlchart/data-binding/dataset
tags: dataset
published: True
position: 6
---

# DataSet

This help article describes which properties to use to bind a **RadHtmlChart** to a **DataSet** and presents a code example. You can bind a **RadHtmlChart** to a **DataSet** using the following properties:

* **DataSourceID** in the main tag sets the declarative data source for the entire chart. You can use	the **DataSource** property for a programmatic data source if you create the connection in the code-behind.

* **DataFieldY** property (and **ColorField**, **ExplodeField**, **NameField** for Pie; **DataFieldX** for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* **DataLabelsField** for the x-axis labels to populate the items for the axis.

**Example 1** demonstrates the setup of a **RadHtmlChart**, bound to a DataSet in **Example 2**.

>caption Example 1: The markup of the **RadHtmlChart** that is bound to a DataSet in **Example 2**.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Products" DataFieldY="Price">
				<TooltipsAppearance DataFormatString="${0}" />
				<LabelsAppearance Visible="false" />
			</telerik:ColumnSeries>
		</Series>
		<XAxis DataLabelsField="Name">
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="${0}" />
		</YAxis>
	</PlotArea>
	<Legend>
		<Appearance Visible="false" />
	</Legend>
	<ChartTitle Text="Bookstore Products">
	</ChartTitle>
</telerik:RadHtmlChart>
````


>caption Example 2: The DataSet for the **RadHtmlChart** created in **Example 1**.


````C#
protected void Page_Load(object sender, System.EventArgs e)
{
	RadHtmlChart1.DataSource = GetData();
	RadHtmlChart1.DataBind();
}

private DataSet GetData()
{
	DataSet ds = new DataSet("Bookstore");
	DataTable dt = new DataTable("Products");
	dt.Columns.Add("Id", Type.GetType("System.Int32"));
	dt.Columns.Add("Name", Type.GetType("System.String"));
	dt.Columns.Add("Price", Type.GetType("System.Double"));
	dt.Rows.Add(1, "Pen", 5.45);
	dt.Rows.Add(2, "Audio book", 9.95);
	dt.Rows.Add(3, "Pencil", 1.99);
	dt.Rows.Add(4, "Book", 15.95);
	dt.Rows.Add(5, "Newspaper", 0.95);
	dt.Rows.Add(6, "Magazine", 3.95);
	ds.Tables.Add(dt);
	return ds;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As System.EventArgs)
	RadHtmlChart1.DataSource = GetData()
	RadHtmlChart1.DataBind()
End Sub

Private Function GetData() As DataSet
	Dim ds As New DataSet("Bookstore")
	Dim dt As New DataTable("Products")
	dt.Columns.Add("Id", Type.[GetType]("System.Int32"))
	dt.Columns.Add("Name", Type.[GetType]("System.String"))
	dt.Columns.Add("Price", Type.[GetType]("System.Double"))
	dt.Rows.Add(1, "Pen", 5.45)
	dt.Rows.Add(2, "Audio book", 9.95)
	dt.Rows.Add(3, "Pencil", 1.99)
	dt.Rows.Add(4, "Book", 15.95)
	dt.Rows.Add(5, "Newspaper", 0.95)
	dt.Rows.Add(6, "Magazine", 3.95)
	ds.Tables.Add(dt)
	Return ds
End Function
````

## See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart DataSet Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtodataset/defaultcs.aspx)
