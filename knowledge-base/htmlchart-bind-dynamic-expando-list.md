---
title: Using Dynamic ExpandoObject as DataSource in RadHtmlChart
description: Learn how to bind a dynamic ExpandoObject list to the DataSource of a RadHtmlChart in ASP.NET AJAX applications.
type: how-to
page_title: Binding Dynamic Expando List to RadHtmlChart DataSource in ASP.NET AJAX
slug: htmlchart-bind-dynamic-expando-list
tags: radhtmlchart, asp.net ajax, datasource, databind, expandoobject, datatable
res_type: kb
ticketid: 1684733
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadHtmlChart for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I have created a dynamic "expando" object list and assigned it to the DataSource of a RadHtmlChart. No error occurs, but the HTMLChart remains empty. In CodeLens, I see the DataSource is available on the RadHTMLChart. Is this type of DataSource supported?


This knowledge base article also answers the following questions:

- How to bind a RadHtmlChart to a dynamic data source in ASP.NET AJAX?
- Can I use an ExpandoObject as a DataSource for RadHtmlChart?
- How to convert an ExpandoObject list to a DataTable for RadHtmlChart binding?

## Solution

The `ExpandoObject` is not directly supported as a data source for the RadHtmlChart due to the dynamic creation of its properties. However, you can convert an `ExpandoObject` list to a `DataTable`, which is a supported data source for the RadHtmlChart. Follow these steps to convert and bind the data:

1. Convert the `ExpandoObject` list to a `DataTable`.

2. Bind the `DataTable` to the RadHtmlChart.

Here's the implementation:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadHtmlChart1.DataSource = GetDataSource();
        RadHtmlChart1.DataBind();
    }
}

private DataTable GetDataSource()
{
    List<ExpandoObject> dataSource = GetExpandoObjectData();
    DataTable dataTable = ExpandoListToDataTable(dataSource);

    return dataTable;
}

private DataTable ExpandoListToDataTable(List<ExpandoObject> list)
{
    DataTable dataTable = new DataTable();

    if (list == null || list.Count == 0) return dataTable;

    // Use the first item to define the columns
    IDictionary<string, object> firstRow = list[0];
    foreach (string key in firstRow.Keys)
    {
        dataTable.Columns.Add(key, firstRow[key].GetType() ?? typeof(object));
    }

    // Populate the rows
    foreach (ExpandoObject item in list)
    {
        IDictionary<string, object> dict = item;
        DataRow row = dataTable.NewRow();
        foreach (string key in dict.Keys)
        {
            row[key] = dict[key] ?? DBNull.Value;
        }
        dataTable.Rows.Add(row);
    }

    return dataTable;
}

private List<ExpandoObject> GetExpandoObjectData()
{
    // Example data creation using ExpandoObject
    dynamic row1 = new ExpandoObject();
    row1.X_Axis_Categories = "Label 1";
    row1.First_Series_Values = 1;
    row1.Second_Series_Values = 5;

    dynamic row2 = new ExpandoObject();
    row2.X_Axis_Categories = "Label 2";
    row2.First_Series_Values = 10;
    row2.Second_Series_Values = 15;

    return new List<ExpandoObject> { row1, row2 };
}
````

3. Ensure your RadHtmlChart markup is set up to use the columns from your DataTable as data fields:

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Height="300px">
    <PlotArea>
        <Series>
            <telerik:LineSeries DataFieldY="First_Series_Values" Name="first series"></telerik:LineSeries>
            <telerik:LineSeries DataFieldY="Second_Series_Values" Name="second series"></telerik:LineSeries>
        </Series>
        <XAxis DataLabelsField="X_Axis_Categories"></XAxis>
    </PlotArea>
</telerik:RadHtmlChart>
````

## See Also

- [Data Binding Overview for RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/documentation/controls/htmlchart/data-binding/overview#data-binding-overview)
- [DataTable Class in .NET](https://docs.microsoft.com/en-us/dotnet/api/system.data.datatable?view=netframework-4.8)
