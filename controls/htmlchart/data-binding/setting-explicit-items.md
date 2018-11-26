---
title: Setting Explicit Items
page_title: Setting Explicit Items | RadHtmlChart for ASP.NET AJAX Documentation
description: Setting Explicit Items
slug: htmlchart/data-binding/setting-explicit-items
tags: setting,explicit,items
published: True
position: 8
---

# Setting Explicit Items

This Help article describes how the items of the **RadHtmlChart** can be created or modified using different approaches (**Declarative**,	**DataBinding**, **Programmatic** etc.).

The data that will be displayed in the **RadHtmlChart** can be declared in several ways:

* **Declarative Creation** - Setting items in the markup (statically) using the **SeriesItems** collection of the desired chart series. See the "In 2010 (Markup)" ColumnSeries in **Example 1**.

	>note  **SeriesItems** from the markup take precedence over data loaded from the **DataSource** . See "In 2011	(Markup and DataSource)" ColumnSeries in the code in **Example 1** for details.


* **DataBinding** - The **DataFieldY** property of each series indicates the column from the data source that is used to load data for the **SeriesItems**. The "Upper Threshold (DataSource)" **LineSeries**	in **Example 1** is an example of this.

	>note The chart must be data bound to a data source that contains the given column.


* **Programmatic Creation** – You can create **SeriesItems** on the server like any other objects and then add them to the **SeriesItems** collection of the desired series. The **LineSeries** named "Lower Threshold(Programmatic)" in **Example 1** uses this approach.

	>note Such items are added after items declared in the markup and override any data binding.

* **Declarative and Programmatic Creation** – You can create **SeriesItems** programmatically and then add them to an existing	**SeriesItems** collection that is set in the markup. **SeriesItems** set in the markup can also be accessed and modified from the code-behind. See the code-behind of "In 2010 (Markup)" **ColumnSeries** in **Example 1** for details.

The y-axis automatically adjusts to accommodate the values and its appearance can be controlled more precisely via its properties.

>caption Example 1: Shows how the above setups are used in a real-live scenario.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="1000px" Height="400px">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="In 2010 (Markup)">
				<TooltipsAppearance DataFormatString="{0}%"></TooltipsAppearance>
				<LabelsAppearance Visible="false">
				</LabelsAppearance>
				<TooltipsAppearance Color="White" />
				<SeriesItems>
					<telerik:CategorySeriesItem Y="46.3"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.5"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.2"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.4"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.9"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.6"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="46.4"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="45.8"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="45.1"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="44.1"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="10.0"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="In 2011 (Markup and DataSource)" DataFieldY="DummyData">
				<TooltipsAppearance Color="White" DataFormatString="{0}%"></TooltipsAppearance>
				<LabelsAppearance Visible="false">
				</LabelsAppearance>
				<SeriesItems>
					<telerik:CategorySeriesItem Y="42.8"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.4"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.2"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.9"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.4"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.2"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="42.0"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="40.6"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="39.7"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="38.7"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="38.1"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="37.7"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:LineSeries Name="Upper Threshold (DataSource)" DataFieldY="UpperThreshold">
				<Appearance>
					<FillStyle BackgroundColor="#ff9c00" />
				</Appearance>
				<TooltipsAppearance Color="White" DataFormatString="{0}%"></TooltipsAppearance>
				<LabelsAppearance Visible="false">
				</LabelsAppearance>
				<MarkersAppearance Visible="false" />
			</telerik:LineSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January"></telerik:AxisItem>
				<telerik:AxisItem LabelText="Februrary"></telerik:AxisItem>
				<telerik:AxisItem LabelText="March"></telerik:AxisItem>
				<telerik:AxisItem LabelText="April"></telerik:AxisItem>
				<telerik:AxisItem LabelText="May"></telerik:AxisItem>
				<telerik:AxisItem LabelText="June"></telerik:AxisItem>
				<telerik:AxisItem LabelText="July"></telerik:AxisItem>
				<telerik:AxisItem LabelText="August"></telerik:AxisItem>
				<telerik:AxisItem LabelText="September"></telerik:AxisItem>
				<telerik:AxisItem LabelText="October"></telerik:AxisItem>
				<telerik:AxisItem LabelText="November"></telerik:AxisItem>
				<telerik:AxisItem LabelText="December"></telerik:AxisItem>
			</Items>
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="{0}%">
			</LabelsAppearance>
		</YAxis>
	</PlotArea>
	<Legend>
		<Appearance Position="Right">
		</Appearance>
	</Legend>
	<ChartTitle Text="Firefox market share">
		<Appearance Position="Top">
		</Appearance>
	</ChartTitle>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	//Set the datasource of the HtmlChart and databind it
	RadHtmlChart1.DataSource = GetData();
	RadHtmlChart1.DataBind();

	//Create a "Lower Threshold" LineSeries programmatically
	LineSeries lineSeries1 = new LineSeries();
	lineSeries1.Name = "Lower Threshold (Programmatic)";
	lineSeries1.LabelsAppearance.Visible = false;
	lineSeries1.TooltipsAppearance.Color = System.Drawing.Color.White;
	lineSeries1.TooltipsAppearance.DataFormatString = "{0}%";
	lineSeries1.MarkersAppearance.Visible = false;

	//Create a sample SeriesItems for the "Lower Threshold" LineSeries
	for (int i = 1; i <= 12; i++)
	{
		CategorySeriesItem item1 = new CategorySeriesItem();
		item1.Y = 10;
		lineSeries1.SeriesItems.Add(item1);
	}
	RadHtmlChart1.PlotArea.Series.Add(lineSeries1);

	//Access and modify the 11th SeriesItem of the "In 2010 (Markup)" ColumnSeries
	(RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems[10].Y = (decimal)44.0;

	//Create an additional SeriesItem for the "In 2010 (Markup)" ColumnSeries
	CategorySeriesItem seriesItem1 = new CategorySeriesItem();
	seriesItem1.Y = (decimal)43.5;
	(RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems.Add(seriesItem1);
}

protected DataTable GetData()
{
	DataTable dt = new DataTable();

	dt.Columns.Add("UpperThreshold");
	dt.Columns.Add("DummyData");
	for (int i = 0; i < 12; i++)
	{
		dt.Rows.Add(40, 30);
	}
	return dt;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	'Set the datasource of the HtmlChart and databind it
	RadHtmlChart1.DataSource = GetData()
	RadHtmlChart1.DataBind()

	'Create a "Lower Threshold" LineSeries programmatically
	Dim lineSeries1 As New LineSeries()
	lineSeries1.Name = "Lower Threshold (Programmatic)"
	lineSeries1.LabelsAppearance.Visible = False
	lineSeries1.TooltipsAppearance.Color = System.Drawing.Color.White
	lineSeries1.TooltipsAppearance.DataFormatString = "{0}%"
	lineSeries1.MarkersAppearance.Visible = False

	'Create a sample SeriesItems for the "Lower Threshold" LineSeries
	For i As Integer = 1 To 12
		Dim item1 As New CategorySeriesItem()
		item1.Y = 10
		lineSeries1.SeriesItems.Add(item1)
	Next
	RadHtmlChart1.PlotArea.Series.Add(lineSeries1)

	'Access and modify the 11th SeriesItem of the "In 2010 (Markup)" ColumnSeries
	TryCast(RadHtmlChart1.PlotArea.Series(0), ColumnSeries).SeriesItems(10).Y = CDec(44.0)

	'Create an additional SeriesItem for the "In 2010 (Markup)" ColumnSeries
	Dim seriesItem1 As New CategorySeriesItem()
	seriesItem1.Y = CDec(43.5)
	TryCast(RadHtmlChart1.PlotArea.Series(0), ColumnSeries).SeriesItems.Add(seriesItem1)
End Sub

Protected Function GetData() As DataTable
	Dim dt As New DataTable()

	dt.Columns.Add("UpperThreshold")
	dt.Columns.Add("DummyData")
	For i As Integer = 0 To 11
		dt.Rows.Add(40, 30)
	Next
	Return dt
End Function
````


## See Also

 * [RadHtmlChart Static Items demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/staticitems/defaultcs.aspx)

 * [RadHtmlChart Programmatic Creation demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/serversideapi/programmaticcreation/defaultcs.aspx)
