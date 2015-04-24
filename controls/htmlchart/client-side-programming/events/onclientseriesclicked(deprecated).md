---
title: OnClientSeriesClicked(deprecated)
page_title: OnClientSeriesClicked(deprecated) | RadHtmlChart for ASP.NET AJAX Documentation
description: OnClientSeriesClicked(deprecated)
slug: htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)
tags: onclientseriesclicked(deprecated)
published: True
position: 1
---

# OnClientSeriesClicked(deprecated)



## 

>caution  **OnClientSeriesClicked** client-side event has been deprecated since Q3 2014. Please, use[OnSeriesClick]({%slug htmlchart/client-side-programming/events/overview%})instead.
>


The **OnClientSeriesClicked** event occurs when the series in the RadHtmlChart are clicked. This article discussesthe objects of the **RadHtmlChart OnClientSeriesClicked** event and their properties and methods and then shows an example of how toretrieve properties when the event occurs (**Example 1**).

The **OnClientSeriesClicked** event handler receives the following parameters:

* The client-side object of the clicked **RadHtmlChart** control.

* An event arguments object that exposes the following properties and methods:

* **get_category()** - Returns the category of the clicked series.

* **PieSeries**/**DonutSeries** - Returns the **NameField** of the clicked item (orthe **Name** property of the **PieSeries**/**DonutSeries** item).

* **BubbleSeries, ScatterSeries** and **ScatterLineSeries** use a numerical x-axis instead of acategorical x-axis and therefore they return undefined because there is no category.

* **Other series types** - Returns the text of the x-axis label that correspondsto the clicked item.

* **get_dataItem()** - Returns the data points of the clicked series:

* **BubbleSeries** - An object of the clicked item is returned. This object exposes three fields: **X**,**Y** and **Size**.For example: *args.get_dataItem().size* will return the **Size** of the clicked series item.

* **PieSeries/DonutSeries** - An object of the clicked item is returned. It exposes four fields: **Value**,**Category**, **Color** and **Explode**.For example: *args.get_dataItem().value* will return the **Value** of the clicked series item.

* **ScatterSeries** and **ScatterLineSeries** - An array withtwo elements is returned—the **X** and **Y** value of the item: *args.get_dataItem()[1]*will return the **Y** value of the item.

* **Other series types** - The **Y** value of the item.

* **get_seriesData()** - Returns the data points of the clicked series:

* **BubbleSeries** - An object for each item is returned. The object exposes three fields: **X**,**Y** and **Size**.For example: *args.get_seriesData()[2].size* will return the size of the third series item (if such item is available).

* **PieSeries/DonutSeries** - An object for each item is returned. It exposes four fields: **Value**,**Category**, **Color** and **Explode**.For example: *args.get_seriesData()[2].value* will return the value of the third series item (if such item is available).

* **ScatterSeries** and **ScatterLineSeries** - An array is returned with an element for each series item.Each array element exposes two fields: **[0]** and **[1]** for the **X** and**Y** value of the item: *args.get_seriesData()[2][0]*will return the **X** value of the third series item.

* **Other series types** - An array with the **Y** values of the items from the series is returned. For example:*args.get_seriesData()[0]* will return the **Y** value of the first item in the series.

* **get_seriesName()** - Returns the **Name** of the clicked series. It corresponds to the **Name**property of the series. If the series does not have a name set, *undefined* will be returned.

* **get_seriesType()** - Returns the type of the clicked series (e.g., Bar, Pie, ScatterLine, and so on) as a string.

* **get_value()** - Returns the value of the clicked item.

* **BubbleSeries** - An object of the clicked item is returned. It exposes three fields: **X**,**Y** and **Size**.For example: *args.get_value().size* will return the size of the clicked series item.

* **ScatterSeries and ScatterLineSeries** - Returnsan object that exposes the **X** and **Y** fields for the **X**value and the **Y** value of the item. For example: *args.get_value().x* willreturn the **X** value of a scatter-type item.

* **Other series types** - Returns the **Y** value of the clicked series item.

>important For databound series, the **get_seriesData()** and **get_dataItem()** methodsreturn objects whose fields correspond to the columns from the	data source. For example, if the **ExplodeField** property of a PieSeries is set to "IsExploded" the **dataItem** will contain a	field named "IsExploded" that will hold the value from the row. See **Example 1** .
>


**Example 1**: How do yo modify the **dataItem** in the event and reflect the changes in the chart? This example shows how to togglewhether the clicked item is exploded.



````ASPNET
		<telerik:RadHtmlChart runat="server" ID="PieChart1" Width="600" Height="400" Transitions="false"
			OnClientSeriesClicked="OnClientSeriesClicked">
			<PlotArea>
				<Series>
					<telerik:PieSeries DataFieldY="TheData" NameField="TheName" ColorField="TheColor" ExplodeField="IsExploded">
					</telerik:PieSeries>
				</Series>
			</PlotArea>
		</telerik:RadHtmlChart>
		<script type="text/javascript">
			function OnClientSeriesClicked(sender, args) {
				var theDataItem = args.get_dataItem();
				theDataItem.IsExploded = !theDataItem.IsExploded;
				sender.repaint();
			}
		</script>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			PieChart1.DataSource = GetData();
			PieChart1.DataBind();
		}
		
		protected DataTable GetData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("TheData", typeof(decimal)));
			tbl.Columns.Add(new DataColumn("TheColor", typeof(string)));
			tbl.Columns.Add(new DataColumn("TheName", typeof(string)));
			tbl.Columns.Add(new DataColumn("IsExploded", typeof(bool)));
			tbl.Rows.Add(new object[] { 100, "#66FFCC", "First", false });
			tbl.Rows.Add(new object[] { 200, "#FF66FF", "Second", true });
			tbl.Rows.Add(new object[] { 300, "#0099FF", "Third", false });
			tbl.Rows.Add(new object[] { 400, "#BBBBBB", "Fourth", false });
			return tbl;
		}
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        PieChart1.DataSource = GetData()
	        PieChart1.DataBind()
	    End Sub
	
	    Protected Function GetData() As DataTable
	        Dim tbl As New DataTable()
	        tbl.Columns.Add(New DataColumn("TheData", GetType(Decimal)))
	        tbl.Columns.Add(New DataColumn("TheColor", GetType(String)))
	        tbl.Columns.Add(New DataColumn("TheName", GetType(String)))
	        tbl.Columns.Add(New DataColumn("IsExploded", GetType(Boolean)))
	        tbl.Rows.Add(New Object() {100, "#66FFCC", "First", False})
	        tbl.Rows.Add(New Object() {200, "#FF66FF", "Second", True})
	        tbl.Rows.Add(New Object() {300, "#0099FF", "Third", False})
	        tbl.Rows.Add(New Object() {400, "#BBBBBB", "Fourth", False})
	        Return tbl
	    End Function
````


**Example 2**: The following example shows how to retreive some information about the clicked **RadHtmlChart** via the listed properties.

````ASPNET
				<script type="text/javascript">
	    			function OnClientSeriesClicked(sender, eventArgs) {
	    				alert("You clicked on a series item with value '" + eventArgs.get_value() + "' from category '" + eventArgs.get_category() + "'.");
	    			}
				</script>
				<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="800px" Height="400px" OnClientSeriesClicked="OnClientSeriesClicked">
	            <PlotArea>
	                <Series>
	                    <telerik:ColumnSeries Name="In 2010">
	                        <SeriesItems>
	                            <telerik:CategorySeriesItem Y="46.3" />
	                            <telerik:CategorySeriesItem Y="46.5" />
	                            <telerik:CategorySeriesItem Y="46.2" />
	                            <telerik:CategorySeriesItem Y="46.4" />
	                        </SeriesItems>
	                    </telerik:ColumnSeries>
						<telerik:ColumnSeries Name="In 2011">
	                        <SeriesItems>
						        <telerik:CategorySeriesItem Y="42.8" />
	                            <telerik:CategorySeriesItem Y="42.4" />
	                            <telerik:CategorySeriesItem Y="42.2" />
	                            <telerik:CategorySeriesItem Y="42.9" />
							</SeriesItems>
	                    </telerik:ColumnSeries>
	                </Series>
	                <XAxis>
	                    <Items>
	                        <telerik:AxisItem LabelText="January" />
	                        <telerik:AxisItem LabelText="Februrary" />
	                        <telerik:AxisItem LabelText="March" />
	                        <telerik:AxisItem LabelText="April" />
	                    </Items>
	                </XAxis>
	                <YAxis>
	                    <LabelsAppearance DataFormatString="{0}%" />
	                </YAxis>
	            </PlotArea>
	            <ChartTitle Text="Firefox market share">
	            </ChartTitle>
	        </telerik:RadHtmlChart>
````



# See Also

 * [Overview]({%slug htmlchart/client-side-programming/events/overview%})

 * [Pie Chart]({%slug htmlchart/chart-types/pie-chart%})

 * [OnClientSeriesHovered(deprecated)]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%})
