---
title: Migrate Date Axis Configuration
page_title: Migrate Date Axis Configuration | UI for ASP.NET AJAX Documentation
description: Migrate Date Axis Configuration
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration
tags: migrate,date,axis,configuration
published: True
position: 3
---

# Migrate Date Axis Configuration



The term date axis refers to an axis from a chart that can display discrete or continuous data in a DateTime type.	This article illustrates how to migrate the configuration of date axis with discrete and continuous data from __RadChart__ to	__RadHtmlChart__. The examples illustrate how to migrate the date axes declaratively; however, the	same classes and properties of the axis can be used for the programmatic creation as well.

## Configuring Date Axis with Discrete Data

### Configuring Date Axis with Discrete Data in RadChart

__RadChart__ doesn't support a date axis out of the box and therefore you must perform additional manipulations.

1. Convert the DateTime values to __ToOADate__ format and then pass them to the XAxis' items.

1. Set the XAxis' __AutoScale__ and __IsZeroBased__ propertiesto __false__.

1. Choose an appropriate date __ValueFormat__ for the XAxis (i.e., __ShortTime__,__ShortDate__, __LongTime__ or __LongDate__).

1. You can set a desired __CustomFormat__ for the XAxis (e.g., "M/dd/yyyy").

__Example 1__ illustrates how to configure a date axis in__RadChart__ that displays discrete data in __Figure 1__.
>caption Figure 1: Display discrete data with date axis in RadChart.

![htmlchart-migrating-date-axis-chart-discrete](images/htmlchart-migrating-date-axis-chart-discrete.png)

__Example 1__: Configuring date axis in __RadChart__ that displays discrete data.



````ASPNET
		<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<XAxis AutoScale="false" IsZeroBased="false" DataLabelsColumn="myXValues">
					<Appearance ValueFormat="ShortDate" CustomFormat="M/dd/yyyy">
					</Appearance>
				</XAxis>
			</PlotArea>
			<Series>
				<telerik:ChartSeries Type="Line" DataYColumn="myYValues" Name="Series 1">
				</telerik:ChartSeries>
			</Series>
			<ChartTitle TextBlock-Text="Chart Title">
			</ChartTitle>
		</telerik:RadChart>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadChart1.DataSource = ConvertColumnToODate(GetData(), "myXvalues");
			RadChart1.DataBind();
		}
		protected DataTable GetData()
		{
			DataTable dt = new DataTable();
	
			dt.Columns.Add("ID");
			dt.Columns.Add("myYValues");
			dt.Columns.Add("myXValues");
	
			dt.Rows.Add(1, 30, new DateTime(2012, 05, 10));
			dt.Rows.Add(2, 10, new DateTime(2012, 05, 13));
			dt.Rows.Add(3, 20, new DateTime(2012, 05, 15));
	
			return dt;
		}
	
		protected DataTable ConvertColumnToODate(DataTable dt, string columnName)
		{
			for (int i = 0; i < dt.Rows.Count; i++)
			{
	
				dt.Rows[i][columnName] = (DateTime.Parse(dt.Rows[i][columnName].ToString())).ToOADate();
			}
			return dt;
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs)
			RadChart1.DataSource = ConvertColumnToODate(GetData(), "myXvalues")
			RadChart1.DataBind()
		End Sub
		Protected Function GetData() As DataTable
			Dim dt As New DataTable()
	
			dt.Columns.Add("ID")
			dt.Columns.Add("myYValues")
			dt.Columns.Add("myXValues")
	
			dt.Rows.Add(1, 30, New DateTime(2012, 5, 10))
			dt.Rows.Add(2, 10, New DateTime(2012, 5, 13))
			dt.Rows.Add(3, 20, New DateTime(2012, 5, 15))
	
			Return dt
		End Function
	
		Protected Function ConvertColumnToODate(dt As DataTable, columnName As String) As DataTable
			For i As Integer = 0 To dt.Rows.Count - 1
	
				dt.Rows(i)(columnName) = (DateTime.Parse(dt.Rows(i)(columnName).ToString())).ToOADate()
			Next
			Return dt
		End Function
````


### Configuring Date Axis with Discrete Data in RadHtmlChart

__RadHtmlChart__ does support date axis out of the box. The DateTime format of the x-axis itemsis automatically recognized and no additional configuration is needed.

1. In order to display discrete data in__RadHtmlChart__ you must set the x-axis __Type__ property to__Category__.

1. The format of the x-axis items labels is controlled through the__XAxis.LabelsAppearance.DataFormatString__ property(e.g., __DataFormatString__="M/dd/yyyy").

__Example 2__ illustrates how to configure a date axis in__RadHtmlChart__ that displays discrete data in __Figure 2__.
>caption Figure 2: Display discrete data with date axis in RadHtmlChart.

![htmlchart-migrating-date-axis-htmlchart-discrete](images/htmlchart-migrating-date-axis-htmlchart-discrete.png)

__Example 2__: Configuring date axis in __RadHtmlChart__ that displays discrete data.



````ASPNET
		<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<XAxis Type="category" DataLabelsField="myXValues">
					<LabelsAppearance DataFormatString="M/dd/yyyy"></LabelsAppearance>
				</XAxis>
				<Series>
					<telerik:LineSeries DataFieldY="myYValues" Name="Series 1">
					</telerik:LineSeries>
				</Series>
			</PlotArea>
			<ChartTitle Text="Chart Title">
			</ChartTitle>
		</telerik:RadHtmlChart>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadHtmlChart1.DataSource = GetData();
			RadHtmlChart1.DataBind();
		}
		protected DataTable GetData()
		{
			DataTable dt = new DataTable();
	
			dt.Columns.Add("ID");
			dt.Columns.Add("myYValues");
			dt.Columns.Add("myXValues");
	
			dt.Rows.Add(1, 30, new DateTime(2012, 05, 10));
			dt.Rows.Add(2, 10, new DateTime(2012, 05, 13));
			dt.Rows.Add(3, 20, new DateTime(2012, 05, 15));
	
			return dt;
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs)
			RadHtmlChart1.DataSource = GetData()
			RadHtmlChart1.DataBind()
		End Sub
		Protected Function GetData() As DataTable
			Dim dt As New DataTable()
	
			dt.Columns.Add("ID")
			dt.Columns.Add("myYValues")
			dt.Columns.Add("myXValues")
	
			dt.Rows.Add(1, 30, New DateTime(2012, 5, 10))
			dt.Rows.Add(2, 10, New DateTime(2012, 5, 13))
			dt.Rows.Add(3, 20, New DateTime(2012, 5, 15))
	
			Return dt
		End Function
````


## Configuring Date Axis with Continuous Data

### Configuring Date Axis with Continuous Data in RadChart

__RadChart__ doesn't support a date axis out of the box and therefore you must perform additional manipulations.

1. Convert the DateTime values to __ToOADate__ format and then pass them to the series item's X values.

1. Set the XAxis' __IsZeroBased__ propertyto __false__.

1. Choose an appropriate date __ValueFormat__ for the XAxis (i.e., __ShortTime__,__ShortDate__, __LongTime__ or __LongDate__).

1. You can set a desired __CustomFormat__ for the XAxis (e.g., "M/dd/yyyy").

1. If you want to set the XAxis' __MinValue__ and __MaxValue__properties, you must also set the __AutoScale__ property to __false__.

__Example 3__ illustrates how to configure a date axis in__RadChart__ that displays continuous data in __Figure 3__.
>caption Figure 3: Display continuous data with date axis in RadChart.

![htmlchart-migrating-date-axis-chart-continuous](images/htmlchart-migrating-date-axis-chart-continuous.png)

__Example 3__: Configuring date axis in __RadChart__ that displays continuous data.



````ASPNET
		<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<XAxis IsZeroBased="false">
					<Appearance ValueFormat="ShortDate" CustomFormat="M/dd/yyyy">
					</Appearance>
				</XAxis>
			</PlotArea>
			<Series>
				<telerik:ChartSeries Type="Line" DataYColumn="myYValues" DataXColumn="myXValues" Name="Series 1">
				</telerik:ChartSeries>
			</Series>
			<ChartTitle TextBlock-Text="Chart Title">
			</ChartTitle>
		</telerik:RadChart>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadChart1.DataSource = ConvertColumnToODate(GetData(), "myXvalues");
			RadChart1.DataBind();
		}
		protected DataTable GetData()
		{
			DataTable dt = new DataTable();
	
			dt.Columns.Add("ID");
			dt.Columns.Add("myYValues");
			dt.Columns.Add("myXValues");
	
			dt.Rows.Add(1, 30, new DateTime(2012, 05, 10));
			dt.Rows.Add(2, 10, new DateTime(2012, 05, 13));
			dt.Rows.Add(3, 20, new DateTime(2012, 05, 15));
	
			return dt;
		}
	
		protected DataTable ConvertColumnToODate(DataTable dt, string columnName)
		{
			for (int i = 0; i < dt.Rows.Count; i++)
			{
	
				dt.Rows[i][columnName] = (DateTime.Parse(dt.Rows[i][columnName].ToString())).ToOADate();
			}
			return dt;
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs)
			RadChart1.DataSource = ConvertColumnToODate(GetData(), "myXvalues")
			RadChart1.DataBind()
		End Sub
		Protected Function GetData() As DataTable
			Dim dt As New DataTable()
	
			dt.Columns.Add("ID")
			dt.Columns.Add("myYValues")
			dt.Columns.Add("myXValues")
	
			dt.Rows.Add(1, 30, New DateTime(2012, 5, 10))
			dt.Rows.Add(2, 10, New DateTime(2012, 5, 13))
			dt.Rows.Add(3, 20, New DateTime(2012, 5, 15))
	
			Return dt
		End Function
	
		Protected Function ConvertColumnToODate(dt As DataTable, columnName As String) As DataTable
			For i As Integer = 0 To dt.Rows.Count - 1
	
				dt.Rows(i)(columnName) = (DateTime.Parse(dt.Rows(i)(columnName).ToString())).ToOADate()
			Next
			Return dt
		End Function
````


### Configuring Date Axis with Continuous Data in RadHtmlChart

__RadHtmlChart__ does support date axis out of the box. The DateTime format of the x-axis itemsis automatically recognized and no additional configuration is needed.

1. In order to display continuous data in__RadHtmlChart__ you must set the x-axis __Type__ property to__Date__.

1. The format of the x-axis items labels is controlled through the__XAxis.LabelsAppearance.DataFormatString__ property(e.g., __DataFormatString__="M/dd/yyyy").

__Example 4__ illustrates how to configure a date axis in__RadHtmlChart__ that displays continuous data in __Figure 4__.
>caption Figure 4: Display continuous data with date axis in RadHtmlChart.

![htmlchart-migrating-date-axis-htmlchart-continuous](images/htmlchart-migrating-date-axis-htmlchart-continuous.png)

__Example 4__: Configuring date axis in __RadHtmlChart__ that displays continuous data.



````ASPNET
		<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<XAxis Type="Date" DataLabelsField="myXValues">
					<LabelsAppearance DataFormatString="M/dd/yyyy"></LabelsAppearance>
				</XAxis>
				<Series>
					<telerik:LineSeries DataFieldY="myYValues" Name="Series 1">
					</telerik:LineSeries>
				</Series>
			</PlotArea>
			<ChartTitle Text="Chart Title">
			</ChartTitle>
		</telerik:RadHtmlChart>
````
````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			RadHtmlChart1.DataSource = GetData();
			RadHtmlChart1.DataBind();
		}
		protected DataTable GetData()
		{
			DataTable dt = new DataTable();
	
			dt.Columns.Add("ID");
			dt.Columns.Add("myYValues");
			dt.Columns.Add("myXValues");
	
			dt.Rows.Add(1, 30, new DateTime(2012, 05, 10));
			dt.Rows.Add(2, 10, new DateTime(2012, 05, 13));
			dt.Rows.Add(3, 20, new DateTime(2012, 05, 15));
	
			return dt;
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs)
			RadHtmlChart1.DataSource = GetData()
			RadHtmlChart1.DataBind()
		End Sub
		Protected Function GetData() As DataTable
			Dim dt As New DataTable()
	
			dt.Columns.Add("ID")
			dt.Columns.Add("myYValues")
			dt.Columns.Add("myXValues")
	
			dt.Rows.Add(1, 30, New DateTime(2012, 5, 10))
			dt.Rows.Add(2, 10, New DateTime(2012, 5, 13))
			dt.Rows.Add(3, 20, New DateTime(2012, 5, 15))
	
			Return dt
		End Function
````


# See Also

 * [RadHtmlChart : Migrating Axes Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})

 * [RadHtmlChart : Migrating Data Binding Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})

 * [RadHtmlChart : Migrating Functionalities - Features and Series Types Parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})

 * [RadHtmlChart : Migrating Series Configuration]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})

 * [RadHtmlChart : Configuring Axes]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [RadHtmlChart : Date Axis]({%slug htmlchart/functionality/axes/date-axis%})

 * [RadHtmlChart : Formatting Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [RadHtmlChart : Multiple Y-axes]({%slug htmlchart/functionality/axes/multiple-y-axes%})
