---
title: Data Source String Fields Are Not Parsed to Decimal
page_title: Data Source String Fields Are Not Parsed to Decimal | RadHtmlChart for ASP.NET AJAX Documentation
description: Data Source String Fields Are Not Parsed to Decimal
slug: htmlchart/changes-and-backwards-compatibility/data-source-string-fields-are-not-parsed-to-decimal
tags: data,source,string,fields,are,not,parsed,to,decimal
published: True
position: 3
---

# Data Source String Fields Are Not Parsed to Decimal

As of the **Q2 2015 SP1** release, **RadHtmlChart** doesn't try to parse automatically string fields from the data source to a decimal format. This means if the chart's category x-axis refers to a string type column from the data source that can be parsed to a decimal format, it will be handled as a string and the labeled displayed will not be parsed.

The old and the new behavior of the control is illustrated with the code from **Example 1** and is shown in **Figure 1**.

>warning You should always ensure to define the type of the data source fields, so that the chart can properly parse and render the data.

>caption Figure 1: String columns from the data source that can be parsed to a decimal format will be displayed as strings.

![data-source-string-fields-are-not-parsed-to-decimal](images/data-source-string-fields-are-not-parsed-to-decimal.png)

>caption Example1: Data binding a DataTable data source that contains a string column that can be parsed to a decimal format.

````ASP.NET
<telerik:RadHtmlChart ID="ColumnChart1" runat="server" Width="200px" Height="150px">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries DataFieldY="yValues">
			</telerik:ColumnSeries>
		</Series>
		<XAxis DataLabelsField="xItems">
			<LabelsAppearance>
				<TextStyle FontSize="18" />
			</LabelsAppearance>
		</XAxis>
	</PlotArea>
</telerik:RadHtmlChart>

<telerik:RadHtmlChart runat="server" ID="PieChart1" Width="200px" Height="200px">
	<PlotArea>
		<Series>
			<telerik:PieSeries DataFieldY="yValues" NameField="legendItems">
			</telerik:PieSeries>
		</Series>
	</PlotArea>
	<Legend>
		<Appearance>
			<TextStyle FontSize="18" />
		</Appearance>
	</Legend>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	PieChart1.DataSource = GetData();
	PieChart1.DataBind();

	ColumnChart1.DataSource = GetData();
	ColumnChart1.DataBind();
}

protected DataTable GetData()
{
	DataTable dt = new DataTable();

	dt.Columns.Add("yValues", typeof(int));
	dt.Columns.Add("xItems", typeof(string));
	dt.Columns.Add("legendItems", typeof(string));

	dt.Rows.Add(25, "01", "0");
	dt.Rows.Add(31, "02", "1");
	dt.Rows.Add(18, "03", "2");

	return dt;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	PieChart1.DataSource = GetData()
	PieChart1.DataBind()

	ColumnChart1.DataSource = GetData()
	ColumnChart1.DataBind()
End Sub

Protected Function GetData() As DataTable
	Dim dt As New DataTable()

	dt.Columns.Add("yValues", GetType(Integer))
	dt.Columns.Add("xItems", GetType(String))
	dt.Columns.Add("legendItems", GetType(String))

	dt.Rows.Add(25, "01", "0")
	dt.Rows.Add(31, "02", "1")
	dt.Rows.Add(18, "03", "2")

	Return dt
End Function
````

## See Also

 * [Important Changes Regarding Data Binding DateTime Parsable String Fields]({%slug htmlchart/changes-and-backwards-compatibility/important-changes-regarding-data-binding-datetime-parsable-string-fields%})

 * [Important Changes Regarding Series Declaration]({%slug htmlchart/changes-and-backwards-compatibility/important-changes-regarding-series-declaration%})
 
