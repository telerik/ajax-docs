---
title: Displaying Multiple Aggregates on a Single Column
description: Learn how to display multiple aggregate functions like count, min, max, and average for a single column in RadGrid for ASP.NET AJAX.
type: how-to
page_title: Displaying Multiple Aggregates on a Single Column
slug: grid-displaying-multiple-aggregates-on-a-single-column
tags: radgrid, asp.net ajax, aggregate, custom aggregate, grid
res_type: kb
ticketid: 1677684
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description

In migrating from another UX control set to Telerik, there's a requirement to maintain the functionality of displaying multiple aggregate functions for a single column in RadGrid. Specifically, it's necessary to show the count of items, the minimum value, the maximum value, and the average value in the footer row of a column. This knowledge base article also answers the following questions:

- How to implement custom aggregate functions in RadGrid?
- Can RadGrid display multiple summary values in a column's footer?
- How to create a custom aggregate function for a RadGrid column?

## Solution

To achieve the display of multiple aggregate values for a single column in RadGrid, use the `Custom` aggregate option and handle the `OnCustomAggregate` event. Within this event, perform the necessary calculations (sum, min, max, avg) and set the result in a formatted string. Follow the steps below to implement this:

1. Define the RadGrid with the `Custom` aggregate option for the desired column. Enable the footer to display the aggregate result.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" 
    ShowFooter="true" OnCustomAggregate="RadGrid1_CustomAggregate">
    <MasterTableView AutoGenerateColumns="False">
        <Columns>
            <telerik:GridNumericColumn Aggregate="Custom" DataField="Freight" DataType="System.Double" HeaderText="Freight" UniqueName="Freight" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

2. Implement the `RadGrid1_CustomAggregate` event handler to calculate the sum, minimum, maximum, and average values. Format the result as a string and assign it to `e.Result`.

````C#
protected void RadGrid1_CustomAggregate(object sender, GridCustomAggregateEventArgs e)
{
    if (e.Column.UniqueName == "Freight")
    {
        List<double> freightValues = new List<double>();

        foreach (GridDataItem item in RadGrid1.MasterTableView.Items)
        {
            if (double.TryParse(item["Freight"].Text, out double freight))
            {
                freightValues.Add(freight);
            }
        }

        if (freightValues.Count > 0)
        {
            double sum = freightValues.Sum();
            double min = freightValues.Min();
            double max = freightValues.Max();
            double avg = freightValues.Average();

            e.Result = $"Sum: {sum:N2} | Min: {min:N2} | Max: {max:N2} | Avg: {avg:N2}";
        }
        else
        {
            e.Result = "No Data";
        }
    }
}

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable(); 
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("Freight", typeof(double)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 5; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["Freight"] = index;

        dt.Rows.Add(row);
    }

    return dt;
}
````
````VB
Protected Sub RadGrid1_CustomAggregate(sender As Object, e As GridCustomAggregateEventArgs)
    If e.Column.UniqueName = "Freight" Then
        Dim freightValues As New List(Of Double)()

        For Each item As GridDataItem In RadGrid1.MasterTableView.Items
            Dim freight As Double
            If Double.TryParse(item("Freight").Text, freight) Then
                freightValues.Add(freight)
            End If
        Next

        If freightValues.Count > 0 Then
            Dim sum As Double = freightValues.Sum()
            Dim min As Double = freightValues.Min()
            Dim max As Double = freightValues.Max()
            Dim avg As Double = freightValues.Average()

            e.Result = String.Format("Sum: {0:N2} | Min: {1:N2} | Max: {2:N2} | Avg: {3:N2}", sum, min, max, avg)
        Else
            e.Result = "No Data"
        End If
    End If
End Sub

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    DirectCast(sender, RadGrid).DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As New DataTable()

    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Double)))

    dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

    For i As Integer = 0 To 4
        Dim index As Integer = i + 1

        Dim row As DataRow = dt.NewRow()

        row("OrderID") = index
        row("Freight") = index

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````

