---
title: Group Chart Data Source
description: Learn to group Chart Data Source
type: how-to
page_title: Group Chart Data Source. | RadHtmlChart
slug: htmlchart-group-chart-data-source
tags: htmlchart, group, datasource, htmlchart datasource
res_type: kb
---

## Environment 

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms HtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This article illustrates how to manually group a data source, so that its structure is suitable for a chart data-binding. The example uses a DataTable data source for the purpose. 

Generally each series of a data bound chart must reference a separate data source field to get values. If, however, these values are stored in a common field you must group them in separate fields.

## Solution

The main method that must be called to trigger the data source grouping manipulations is **RadHtmlChartGroupDataSource.GroupDataSource(HtmlChart, DataSource, DataGroupColumn, SeriesType, DataFieldY, DataFieldX)** and takes the following arguments:

- **HtmlChart** – The RadHtmlChart instance.
- **DataSource** –The raw DataTable data source.
- **DataGroupColumn** – The name of the column in the raw data source which will be the criteria for grouping the chart series items into series. There will be as many series as the number of distinct values in this column.
- **SeriesType** – The type of the series. Currently the example supports Area, Bar, Column, Line, Scatter and ScatterLine series. You can, however, expand that list in the AddChartSeriesType() method.
- **DataFieldY** - The name of the column in the raw data source that stores the y-values.
- **DataFieldX** - The name of the column in the raw data source that stores the x-values.

You can make additional series configurations (e.g., set series names, define tooltips/labels template, etc.) in the ***RadHtmlChartGroupDataSource.ConfigureChartSeries()*** method.

````ASP.NET
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="800" Height="500" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        //Group data source and bind it to category series:
        RadHtmlChartGroupDataSource.GroupDataSource(RadHtmlChart1, GetRawDataSource(), "Year", "ColumnSeries", "Sales", "Quarter");

        //Group data source and bind it to numeric series:
        //RadHtmlChartGroupDataSource.GroupDataSource(RadHtmlChart1, GetRawDataSource(), "Year", "ScatterLineSeries", "Sales", "Purchases");
    }
}

private DataTable GetRawDataSource()
{
    DataTable dtDataPoints = new DataTable();

    dtDataPoints.Columns.Add(new DataColumn("Year", typeof(string)));
    dtDataPoints.Columns.Add(new DataColumn("Quarter", typeof(string)));
    dtDataPoints.Columns.Add(new DataColumn("Sales", typeof(int)));
    dtDataPoints.Columns.Add(new DataColumn("Purchases", typeof(int)));

    dtDataPoints.Rows.Add(new object[] { "2012", "Q1", 210000, 110000 });
    dtDataPoints.Rows.Add(new object[] { "2012", "Q2", 320000, 250000 });
    dtDataPoints.Rows.Add(new object[] { "2012", "Q3", 280000, 300000 });
    dtDataPoints.Rows.Add(new object[] { "2012", "Q4", 400000, 350000 });
    dtDataPoints.Rows.Add(new object[] { "2014", "Q1", 350000, 100000 });
    dtDataPoints.Rows.Add(new object[] { "2014", "Q2", 380000, 180000 });
    dtDataPoints.Rows.Add(new object[] { "2014", "Q3", 350000, 280000 });
    dtDataPoints.Rows.Add(new object[] { "2014", "Q4", 420000, 300000 });

    return dtDataPoints;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        'Group data source and bind it to category series:End Class
        RadHtmlChartGroupDataSource.GroupDataSource(RadHtmlChart1, GetRawDataSource(), "Year", "ColumnSeries", "Sales", "Quarter")

        'Group data source and bind it to numeric series:
        'RadHtmlChartGroupDataSource.GroupDataSource(RadHtmlChart1, GetRawDataSource(), "Year", "ScatterLineSeries", "Sales", "Purchases")
    End If
End Sub

Private Function GetRawDataSource() As DataTable
    Dim dtDataPoints As New DataTable()

    dtDataPoints.Columns.Add(New DataColumn("Year", GetType(String)))
    dtDataPoints.Columns.Add(New DataColumn("Quarter", GetType(String)))
    dtDataPoints.Columns.Add(New DataColumn("Sales", GetType(Integer)))
    dtDataPoints.Columns.Add(New DataColumn("Purchases", GetType(Integer)))

    dtDataPoints.Rows.Add(New Object() {"2012", "Q1", 210000, 110000})
    dtDataPoints.Rows.Add(New Object() {"2012", "Q2", 320000, 250000})
    dtDataPoints.Rows.Add(New Object() {"2012", "Q3", 280000, 300000})
    dtDataPoints.Rows.Add(New Object() {"2012", "Q4", 400000, 350000})
    dtDataPoints.Rows.Add(New Object() {"2014", "Q1", 350000, 100000})
    dtDataPoints.Rows.Add(New Object() {"2014", "Q2", 380000, 180000})
    dtDataPoints.Rows.Add(New Object() {"2014", "Q3", 350000, 280000})
    dtDataPoints.Rows.Add(New Object() {"2014", "Q4", 420000, 300000})

    Return dtDataPoints
End Function
````

````RadHtmlChartGroupDataSource.CS
/// <summary>
/// A Class that provides functionality for grouping RadHtmlChart's data source
/// </summary>
public static class RadHtmlChartGroupDataSource
{
	/// <summary>
	/// Groups the RadHtmlChart's data source.
	/// </summary>
	/// <param name="HtmlChart">The RadHtmlChart instance.</param>
	/// <param name="DataSource">The raw DataTable data source.</param>
	/// <param name="DataGroupColumn">The name of the column in the raw data source which will be the criteria for grouping the chart series items into series. There will be as many series as the number of distinct values in this column.</param>
	/// <param name="SeriesType">The type of the series. Currently the example supports Area, Bar, Column, Line, Scatter and ScatterLine series. You can, however, expand that list in the AddChartSeriesType() method.</param>
	/// <param name="DataFieldY">The name of the column in the raw data source that stores the y-values.</param>
	/// <param name="DataFieldX">The name of the column in the raw data source that stores the x-values. </param>
	public static void GroupDataSource(RadHtmlChart HtmlChart, DataTable DataSource, string DataGroupColumn, string SeriesType, string DataFieldY, string DataFieldX)
	{
		//Get number of distinct rows by DataGroupColumn (e.g., Year column)
		DataTable distinctValuesDT = DataSource.DefaultView.ToTable(true, DataGroupColumn);
		int numDistinctValues = distinctValuesDT.Rows.Count;

		//Add RadHtmlChart series
		ConfigureChartSeries(HtmlChart, numDistinctValues, distinctValuesDT, SeriesType, DataFieldY, DataFieldX);

		//Group data source and bind it to the chart
		HtmlChart.DataSource = GetGroupedData(DataSource, DataGroupColumn, DataFieldY, numDistinctValues, distinctValuesDT);
		HtmlChart.DataBind();
	}
	/// <summary>
	/// Configures chart series. For example sets series names, define tooltips/labels template, etc.
	/// </summary>
	private static void ConfigureChartSeries(RadHtmlChart HtmlChart, int NumDistinctValues, DataTable DistinctValuesDT, string SeriesType, string DataFieldY, string DataFieldX)
	{
		HtmlChart.PlotArea.Series.Clear();
		//Detect whether series are of category type
		string[] categorySeriesArray = { "AreaSeries", "BarSeries", "ColumnSeries", "LineSeries" };
		bool isCategorySeries = Array.IndexOf(categorySeriesArray, SeriesType) > -1 ? true : false;

		//Configure x-axis DataLabelsField if series are of category type
		if (isCategorySeries)
		{
			HtmlChart.PlotArea.XAxis.DataLabelsField = DataFieldX + "0";
		}

		for (int i = 0; i < NumDistinctValues; i++)
		{
			//Construct the series name, tooltips template and labels format string
			string seriesName = DistinctValuesDT.Columns[0].ColumnName + " : " + DistinctValuesDT.Rows[i][0].ToString();
			string tooltipsTemplate = "Category: #=dataItem." + DataFieldX + i + "#<br />Value: #=dataItem." + DataFieldY + i + "#";
			string labelsFormatString = "{0:N0}";

			//Add the corresponding series type to the chart
			AddChartSeriesType(HtmlChart, SeriesType, DataFieldY, DataFieldX, i, seriesName, tooltipsTemplate, labelsFormatString);
		}
	}
	/// <summary>
	/// Adds chart series. Currently the method supports Area, Bar, Column, Line, Scatter and ScatterLine series. You can, however, expand that list here.
	/// </summary>
	private static void AddChartSeriesType(RadHtmlChart HtmlChart, string SeriesType, string DataFieldY, string DataFieldX, int Index, string SeriesName, string TooltipsTemplate, string LabelsFormatString)
	{
		switch (SeriesType)
		{
			case "AreaSeries":
				AreaSeries areaSeries1 = new AreaSeries();
				areaSeries1.Name = SeriesName;
				areaSeries1.DataFieldY = DataFieldY + Index;
				areaSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				areaSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(areaSeries1);
				break;

			case "BarSeries":
				BarSeries barSeries1 = new BarSeries();
				barSeries1.Name = SeriesName;
				barSeries1.DataFieldY = DataFieldY + Index;
				barSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				barSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(barSeries1);
				break;

			case "ColumnSeries":
				ColumnSeries columnSeries1 = new ColumnSeries();
				columnSeries1.Name = SeriesName;
				columnSeries1.DataFieldY = DataFieldY + Index;
				columnSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				columnSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(columnSeries1);
				break;

			case "LineSeries":
				LineSeries lineSeries1 = new LineSeries();
				lineSeries1.Name = SeriesName;
				lineSeries1.DataFieldY = DataFieldY + Index;
				lineSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				lineSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(lineSeries1);
				break;

			case "ScatterSeries":
				ScatterSeries scatterSeries1 = new ScatterSeries();
				scatterSeries1.Name = SeriesName;
				scatterSeries1.DataFieldY = DataFieldY + Index;
				scatterSeries1.DataFieldX = DataFieldX + Index;
				scatterSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				scatterSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(scatterSeries1);
				break;

			case "ScatterLineSeries":
				ScatterLineSeries scatterLineSeries1 = new ScatterLineSeries();
				scatterLineSeries1.Name = SeriesName;
				scatterLineSeries1.DataFieldY = DataFieldY + Index;
				scatterLineSeries1.DataFieldX = DataFieldX + Index;
				scatterLineSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate;
				scatterLineSeries1.LabelsAppearance.DataFormatString = LabelsFormatString;
				HtmlChart.PlotArea.Series.Add(scatterLineSeries1);
				break;

			default:
				break;
		}
	}
	/// <summary>
	/// The actual data source grouping manipulations.
	/// </summary>
	private static DataTable GetGroupedData(DataTable RawDataTable, string DataGroupColumn, string DataFieldY, int NumDistinctValues, DataTable DistinctValuesDT)
	{
		DataTable commonDT = new DataTable();

		//Split the raw DataTable by numDistinctValues to an array of temporary DataTables
		DataTable[] tempDTarray = new DataTable[NumDistinctValues];
		tempDTarray = SplitDataTable(RawDataTable, DataGroupColumn, NumDistinctValues, DistinctValuesDT);

		//Add rows to the common DataTable
		for (int i = 0; i < tempDTarray[0].Rows.Count; i++)
		{
			commonDT.Rows.Add();
		}

		//Add columns to the common DataTable and fill values from each temp DataTable
		for (int i = 0; i < NumDistinctValues; i++)
		{
			//Loop through the columns of each temp DataTable
			for (int g = 0; g < tempDTarray[i].Columns.Count; g++)
			{
				string columnName = tempDTarray[i].Columns[g].ColumnName;
				//Add columns from the temp DataTables to the common DataTable
				commonDT.Columns.Add(columnName, tempDTarray[i].Columns[g].DataType);

				//Loop through the rows of the each temp DataTable
				for (int f = 0; f < tempDTarray[i].Rows.Count; f++)
				{
					//Fill values from each temp DataTable to the common DataTable
					commonDT.Rows[f][columnName] = tempDTarray[i].Rows[f][columnName];
				}
			}
		}
		return commonDT;
	}
	/// <summary>
	/// A helper method for the data source grouping manipulations.
	/// </summary>
	private static DataTable[] SplitDataTable(DataTable RawDataTable, string DataGroupColumn, int NumDistinctValues, DataTable DistinctValuesDT)
	{
		DataTable[] tempDTarray = new DataTable[NumDistinctValues];

		for (int i = 0; i < NumDistinctValues; i++)
		{
			//Split the raw DataTable to multiple temporary DataTables by distinct DataGroupColumn values
			tempDTarray[i] = RawDataTable.Select(DataGroupColumn + "='" + DistinctValuesDT.Rows[i][0].ToString() + "'").CopyToDataTable();

			for (int g = 0; g < tempDTarray[i].Columns.Count; g++)
			{
				//Add g-th index to column names for each i-th DataTable from the temporary DataTable array
				string columnName = tempDTarray[i].Columns[g].ColumnName + i;
				tempDTarray[i].Columns[g].ColumnName = columnName;
			}
		}

		return tempDTarray;
	}
}
````
````RadHtmlChartGroupDataSource.VB
''' <summary>
''' A Class that provides functionality for grouping RadHtmlChart's data source
''' </summary>
Public NotInheritable Class RadHtmlChartGroupDataSource
    Private Sub New()
    End Sub
    ''' <summary>
    ''' Groups the RadHtmlChart's data source.
    ''' </summary>
    ''' <param name="HtmlChart">The RadHtmlChart instance.</param>
    ''' <param name="DataSource">The raw DataTable data source.</param>
    ''' <param name="DataGroupColumn">The name of the column in the raw data source which will be the criteria for grouping the chart series items into series. There will be as many series as the number of distinct values in this column.</param>
    ''' <param name="SeriesType">The type of the series. Currently the example supports Area, Bar, Column, Line, Scatter and ScatterLine series. You can, however, expand that list in the AddChartSeriesType() method.</param>
    ''' <param name="DataFieldY">The name of the column in the raw data source that stores the y-values.</param>
    ''' <param name="DataFieldX">The name of the column in the raw data source that stores the x-values. </param>
    Public Shared Sub GroupDataSource(HtmlChart As RadHtmlChart, DataSource As DataTable, DataGroupColumn As String, SeriesType As String, DataFieldY As String, DataFieldX As String)
        'Get number of distinct rows by DataGroupColumn (e.g., Year column)
        Dim distinctValuesDT As DataTable = DataSource.DefaultView.ToTable(True, DataGroupColumn)
        Dim numDistinctValues As Integer = distinctValuesDT.Rows.Count

        'Add RadHtmlChart series
        ConfigureChartSeries(HtmlChart, numDistinctValues, distinctValuesDT, SeriesType, DataFieldY, DataFieldX)

        'Group data source and bind it to the chart
        HtmlChart.DataSource = GetGroupedData(DataSource, DataGroupColumn, DataFieldY, numDistinctValues, distinctValuesDT)
        HtmlChart.DataBind()
    End Sub
    ''' <summary>
    ''' Configures chart series. For example sets series names, define tooltips/labels template, etc.
    ''' </summary>
    Private Shared Sub ConfigureChartSeries(HtmlChart As RadHtmlChart, NumDistinctValues As Integer, DistinctValuesDT As DataTable, SeriesType As String, DataFieldY As String, DataFieldX As String)
        HtmlChart.PlotArea.Series.Clear()
        'Detect whether series are of category type
        Dim categorySeriesArray As String() = {"AreaSeries", "BarSeries", "ColumnSeries", "LineSeries"}
        Dim isCategorySeries As Boolean = If(Array.IndexOf(categorySeriesArray, SeriesType) > -1, True, False)

        'Configure x-axis DataLabelsField if series are of category type
        If isCategorySeries Then
            HtmlChart.PlotArea.XAxis.DataLabelsField = DataFieldX & "0"
        End If

        For i As Integer = 0 To NumDistinctValues - 1
            'Construct the series name, tooltips template and labels format string
            Dim seriesName As String = DistinctValuesDT.Columns(0).ColumnName + " : " & DistinctValuesDT.Rows(i)(0).ToString()
            Dim tooltipsTemplate As String = "Category: #=dataItem." & DataFieldX & i & "#<br />Value: #=dataItem." & DataFieldY & i & "#"
            Dim labelsFormatString As String = "{0:N0}"

            'Add the corresponding series type to the chart
            AddChartSeriesType(HtmlChart, SeriesType, DataFieldY, DataFieldX, i, seriesName, _
                tooltipsTemplate, labelsFormatString)
        Next
    End Sub
    ''' <summary>
    ''' Adds chart series. Currently the method supports Area, Bar, Column, Line, Scatter and ScatterLine series. You can, however, expand that list here.
    ''' </summary>
    Private Shared Sub AddChartSeriesType(HtmlChart As RadHtmlChart, SeriesType As String, DataFieldY As String, DataFieldX As String, Index As Integer, SeriesName As String, _
        TooltipsTemplate As String, LabelsFormatString As String)
        Select Case SeriesType
            Case "AreaSeries"
                Dim areaSeries1 As New AreaSeries()
                areaSeries1.Name = SeriesName
                areaSeries1.DataFieldY = DataFieldY & Index
                areaSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                areaSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(areaSeries1)
                Exit Select

            Case "BarSeries"
                Dim barSeries1 As New BarSeries()
                barSeries1.Name = SeriesName
                barSeries1.DataFieldY = DataFieldY & Index
                barSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                barSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(barSeries1)
                Exit Select

            Case "ColumnSeries"
                Dim columnSeries1 As New ColumnSeries()
                columnSeries1.Name = SeriesName
                columnSeries1.DataFieldY = DataFieldY & Index
                columnSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                columnSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(columnSeries1)
                Exit Select

            Case "LineSeries"
                Dim lineSeries1 As New LineSeries()
                lineSeries1.Name = SeriesName
                lineSeries1.DataFieldY = DataFieldY & Index
                lineSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                lineSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(lineSeries1)
                Exit Select

            Case "ScatterSeries"
                Dim scatterSeries1 As New ScatterSeries()
                scatterSeries1.Name = SeriesName
                scatterSeries1.DataFieldY = DataFieldY & Index
                scatterSeries1.DataFieldX = DataFieldX & Index
                scatterSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                scatterSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(scatterSeries1)
                Exit Select

            Case "ScatterLineSeries"
                Dim scatterLineSeries1 As New ScatterLineSeries()
                scatterLineSeries1.Name = SeriesName
                scatterLineSeries1.DataFieldY = DataFieldY & Index
                scatterLineSeries1.DataFieldX = DataFieldX & Index
                scatterLineSeries1.TooltipsAppearance.ClientTemplate = TooltipsTemplate
                scatterLineSeries1.LabelsAppearance.DataFormatString = LabelsFormatString
                HtmlChart.PlotArea.Series.Add(scatterLineSeries1)
                Exit Select
            Case Else

                Exit Select
        End Select
    End Sub
    ''' <summary>
    ''' The actual data source grouping manipulations.
    ''' </summary>
    Private Shared Function GetGroupedData(RawDataTable As DataTable, DataGroupColumn As String, DataFieldY As String, NumDistinctValues As Integer, DistinctValuesDT As DataTable) As DataTable
        Dim commonDT As New DataTable()

        'Split the raw DataTable by numDistinctValues to an array of temporary DataTables
        Dim tempDTarray As DataTable() = New DataTable(NumDistinctValues - 1) {}
        tempDTarray = SplitDataTable(RawDataTable, DataGroupColumn, NumDistinctValues, DistinctValuesDT)

        'Add rows to the common DataTable
        For i As Integer = 0 To tempDTarray(0).Rows.Count - 1
            commonDT.Rows.Add()
        Next

        'Add columns to the common DataTable and fill values from each temp DataTable
        For i As Integer = 0 To NumDistinctValues - 1
            'Loop through the columns of each temp DataTable
            For g As Integer = 0 To tempDTarray(i).Columns.Count - 1
                Dim columnName As String = tempDTarray(i).Columns(g).ColumnName
                'Add columns from the temp DataTables to the common DataTable
                commonDT.Columns.Add(columnName, tempDTarray(i).Columns(g).DataType)

                'Loop through the rows of the each temp DataTable
                For f As Integer = 0 To tempDTarray(i).Rows.Count - 1
                    'Fill values from each temp DataTable to the common DataTable
                    commonDT.Rows(f)(columnName) = tempDTarray(i).Rows(f)(columnName)
                Next
            Next
        Next
        Return commonDT
    End Function
    ''' <summary>
    ''' A helper method for the data source grouping manipulations.
    ''' </summary>
    Private Shared Function SplitDataTable(RawDataTable As DataTable, DataGroupColumn As String, NumDistinctValues As Integer, DistinctValuesDT As DataTable) As DataTable()
        Dim tempDTarray As DataTable() = New DataTable(NumDistinctValues - 1) {}

        For i As Integer = 0 To NumDistinctValues - 1
            'Split the raw DataTable to multiple temporary DataTables by distinct DataGroupColumn values
            tempDTarray(i) = RawDataTable.[Select](DataGroupColumn & "='" & DistinctValuesDT.Rows(i)(0).ToString() & "'").CopyToDataTable()

            For g As Integer = 0 To tempDTarray(i).Columns.Count - 1
                'Add g-th index to column names for each i-th DataTable from the temporary DataTable array
                Dim columnName As String = tempDTarray(i).Columns(g).ColumnName + i.ToString()
                tempDTarray(i).Columns(g).ColumnName = columnName
            Next
        Next

        Return tempDTarray
    End Function
End Class
````


**Requirements and Limitations of Data Source Grouping Example**

In order for this example to work properly the following conditions must be met:

- The number of rows for each series must match. For example Table 1, Year field has a set of 4 rows with a value of “2012” that will be used for the first series and another set of 4 rows with a value of “2014” that will be used for the second series.
- The x-axis items sequence must match for each series from a category chart. For example Table 1, Quarter field has 2 sets of rows that form identical sequences – Q1, Q2, Q3, Q4.
 
   
    
    