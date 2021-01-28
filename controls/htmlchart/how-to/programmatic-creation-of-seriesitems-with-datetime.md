---
title: Programmatic Creation Of SeriesItems With DateTime
page_title: Programmatic Creation Of SeriesItems With DateTime - RadHtmlChart
description: Check our Web Forms article about Programmatic Creation Of SeriesItems With DateTime.
slug: htmlchart/how-to/programmatic-creation-of-seriesitems-with-datetime
tags: programmatic,creation,of,seriesitems,with,datetime
published: True
position: 2
---

# Programmatic Creation Of SeriesItems With DateTime

This help article illustrates how to create programmatically numeric series items (i.e., **ScatterSeriesItem** and **BubbleSeriesItem**) with DateTime for their **X** values.

*Problem*:

You cannot assign directly DateTime objects to numeric series item's **X** property.

*Cause*:

Since the purpose of the numeric series (i.e., **ScatterSeries**, **ScatterLineSeries** and **BubbleSeries**) is to display continuous data, the series items' **X** property is of decimal type that doesn't correspond to the DateTime type.

*Solution*:

You can do the following steps, in order to assign programmatically DateTime values to numeric series items.

* Convert the .NET DateTime object to its JavaScript Date object representation. This conversion is necessary because JavaScript uses the Unix Epoch(*i.e., the number of seconds that have elapsed since 1/1/1970 at 12:00:00 AM*) as a base to track dates as the number of milliseconds from it to the actual date.

* Cast the converted value to decimal and pass it to the series item's **X** property.

**Example 1** illustrates how to convert .NET DateTime objects to JavaScript Date objects and add them to series items' **X** values.

>caption Example 1: Programmatic assignment of DateTime objects to **ScatterSeriesItem**'s **X** property.



````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="640px" Height="480px">
	<PlotArea>
		<Series>
			<telerik:ScatterLineSeries Name="Stock A">
				<LabelsAppearance>
					<ClientTemplate>
						#= kendo.format(\'{0:d/MM/yyyy}\', new Date(value.x)) #,  #=kendo.format(\'{0:C0}\',value.y)#
					</ClientTemplate>
				</LabelsAppearance>
				<TooltipsAppearance Color="White">
					<ClientTemplate>
						#= kendo.format(\'{0:d/MM/yyyy}\', new Date(value.x)) #,  #=kendo.format(\'{0:C0}\',value.y)#
					</ClientTemplate>
				</TooltipsAppearance>
			</telerik:ScatterLineSeries>
		</Series>
		<YAxis>
			<LabelsAppearance DataFormatString="C0"></LabelsAppearance>
			<TitleAppearance Text="Price"></TitleAppearance>
		</YAxis>
		<XAxis Type="date">
			<TitleAppearance Text="Closing Date">
			</TitleAppearance>
			<LabelsAppearance DataFormatString="d">
			</LabelsAppearance>
		</XAxis>
	</PlotArea>
	<ChartTitle Text="Closing Stock Prices">
	</ChartTitle>
</telerik:RadHtmlChart>
````
````C#
//A method that converts the .NET DateTime object to its JavaScript Date object representation
protected decimal ConvertToJavaScriptDateTime(DateTime fromDate)
{
	return (decimal)fromDate.Subtract(new DateTime(1970, 1, 1)).TotalMilliseconds;
}
protected void Page_Load(object sender, EventArgs e)
{
	//Instantiate ScatterSeriesItem objects
	ScatterSeriesItem ssi1 = new ScatterSeriesItem();
	ScatterSeriesItem ssi2 = new ScatterSeriesItem();
	ScatterSeriesItem ssi3 = new ScatterSeriesItem();
	ScatterSeriesItem ssi4 = new ScatterSeriesItem();
	//Instantiate DateTime objects
	DateTime date1 = (new DateTime(2014, 03, 03, 0, 0, 0));
	DateTime date2 = (new DateTime(2014, 03, 10, 0, 0, 0));
	DateTime date3 = (new DateTime(2014, 03, 17, 0, 0, 0));
	DateTime date4 = (new DateTime(2014, 03, 24, 0, 0, 0));
	//Set the converted x values to the ScatterSeriesItem objects
	ssi1.X = ConvertToJavaScriptDateTime(date1);
	ssi2.X = ConvertToJavaScriptDateTime(date2);
	ssi3.X = ConvertToJavaScriptDateTime(date3);
	ssi4.X = ConvertToJavaScriptDateTime(date4);
	//Set the y values to the ScatterSeriesItem objects
	ssi1.Y = 3;
	ssi2.Y = 6;
	ssi3.Y = 5;
	ssi4.Y = 9;
	//Add the ScatterSeriesItem objects to the ScatterLineSeries
	(RadHtmlChart1.PlotArea.Series[0] as ScatterLineSeries).SeriesItems.Add(ssi1);
	(RadHtmlChart1.PlotArea.Series[0] as ScatterLineSeries).SeriesItems.Add(ssi2);
	(RadHtmlChart1.PlotArea.Series[0] as ScatterLineSeries).SeriesItems.Add(ssi3);
	(RadHtmlChart1.PlotArea.Series[0] as ScatterLineSeries).SeriesItems.Add(ssi4);
}
````
````VB
'A method that converts the .NET DateTime object to its JavaScript Date object representation
Protected Function ConvertToJavaScriptDateTime(fromDate As DateTime) As Decimal
	Return CDec(fromDate.Subtract(New DateTime(1970, 1, 1)).TotalMilliseconds)
End Function
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	'Instantiate ScatterSeriesItem objects
	Dim ssi1 As New ScatterSeriesItem()
	Dim ssi2 As New ScatterSeriesItem()
	Dim ssi3 As New ScatterSeriesItem()
	Dim ssi4 As New ScatterSeriesItem()
	'Instantiate DateTime objects
	Dim date1 As DateTime = (New DateTime(2014, 3, 3, 0, 0, 0))
	Dim date2 As DateTime = (New DateTime(2014, 3, 10, 0, 0, 0))
	Dim date3 As DateTime = (New DateTime(2014, 3, 17, 0, 0, 0))
	Dim date4 As DateTime = (New DateTime(2014, 3, 24, 0, 0, 0))
	'Set the converted x values to the ScatterSeriesItem objects
	ssi1.X = ConvertToJavaScriptDateTime(date1)
	ssi2.X = ConvertToJavaScriptDateTime(date2)
	ssi3.X = ConvertToJavaScriptDateTime(date3)
	ssi4.X = ConvertToJavaScriptDateTime(date4)
	'Set the y values to the ScatterSeriesItem objects
	ssi1.Y = 3
	ssi2.Y = 6
	ssi3.Y = 5
	ssi4.Y = 9
	'Add the ScatterSeriesItem objects to the ScatterLineSeries
	TryCast(RadHtmlChart1.PlotArea.Series(0), ScatterLineSeries).SeriesItems.Add(ssi1)
	TryCast(RadHtmlChart1.PlotArea.Series(0), ScatterLineSeries).SeriesItems.Add(ssi2)
	TryCast(RadHtmlChart1.PlotArea.Series(0), ScatterLineSeries).SeriesItems.Add(ssi3)
	TryCast(RadHtmlChart1.PlotArea.Series(0), ScatterLineSeries).SeriesItems.Add(ssi4)
End Sub
````


## See Also

 * [HtmlChart - Programmatic Chart Creation](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/serversideapi/programmaticcreation/defaultcs.aspx)

 * [RadHtmlChart Date Axis]({%slug htmlchart/functionality/axes/date-axis%})

 * [RadHtmlChart Configuring Series Items]({%slug htmlchart/server-side-programming/series-items-configuration%})
