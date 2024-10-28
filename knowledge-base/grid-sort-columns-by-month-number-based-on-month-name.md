---
title: Sort Columns by Month Number Based on Month Name
description: This article explains how to sort a RadGrid column by month number when the month name is clicked, ensuring correct chronological order.
type: how-to
page_title: Sort Columns by Month Number Based on Month Name
slug: grid-sort-columns-by-month-number-based-on-month-name
tags: radgrid, asp.net ajax, sorting, gridboundcolumn, sortexpression
res_type: kb
ticketid: 1668677
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When sorting a grid column by month name, the months are ordered alphabetically, resulting in an incorrect chronological sequence (e.g., December appears before January). I want to sort the column based on the month number when the month name is clicked while maintaining the sort indicator on the month name column.

This KB article also answers the following questions:

- How to sort RadGrid columns chronologically by month name?
- How to use a hidden column for sorting in RadGrid?
- How to maintain the sort indicator on a RadGrid column while sorting by a different field?

## Solution

To sort a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) column by month number while displaying and sorting by the month name, follow these steps:

1. Add a hidden column to the RadGrid that holds the month number.
2. Set the `SortExpression` of the month name column to the field name of the month number.
3. Ensure the data source includes both month name and month number.

Here's an example implementation:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowSorting="True" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="False">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn DataField="MonthName" HeaderText="Month" SortExpression="MonthNumber" UniqueName="MonthName" />
            <telerik:GridBoundColumn DataField="MonthNumber" HeaderText="Month #" UniqueName="MonthNumber" Visible="false" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

And the corresponding backend code in VB.NET:

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetData();
}

private DataTable GetData()
{
    DataTable dt = new DataTable();
    dt.Columns.Add("MonthName", typeof(string));
    dt.Columns.Add("MonthNumber", typeof(int));

    dt.Rows.Add("February", 2);
    dt.Rows.Add("April", 4);
    dt.Rows.Add("March", 3);
    dt.Rows.Add("May", 5);
    dt.Rows.Add("June", 6);
    dt.Rows.Add("January", 1);
    dt.Rows.Add("July", 7);
    dt.Rows.Add("September", 9);
    dt.Rows.Add("November", 11);
    dt.Rows.Add("October", 10);
    dt.Rows.Add("December", 12);
    dt.Rows.Add("August", 8);

    return dt;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GetData()
End Sub

Private Function GetData() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add("MonthName", GetType(String))
    dt.Columns.Add("MonthNumber", GetType(Integer))
    dt.Rows.Add("February", 2)
    dt.Rows.Add("April", 4)
    dt.Rows.Add("March", 3)
    dt.Rows.Add("May", 5)
    dt.Rows.Add("June", 6)
    dt.Rows.Add("January", 1)
    dt.Rows.Add("July", 7)
    dt.Rows.Add("September", 9)
    dt.Rows.Add("November", 11)
    dt.Rows.Add("October", 10)
    dt.Rows.Add("December", 12)
    dt.Rows.Add("August", 8)
    Return dt
End Function
````

This setup ensures that clicking the month name column sorts the data based on the numerical month value while keeping the sort indicator on the name column.

## See Also

- [Basic Sorting](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/sorting/basic-sorting/defaultcs.aspx)
- [Sorting in RadGrid](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/functionality/sorting/overview)
