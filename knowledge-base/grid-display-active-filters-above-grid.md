---
title: Display Active Filters Above Grid
description: Learn how to show which columns are being filtered in a RadGrid control and the specific filter values applied to each column.
type: how-to
page_title: Display Active Filters Above Grid
slug: grid-display-active-filters-above-grid
tags: radgrid, asp.net ajax, filtering, display, columns, values
res_type: kb
ticketid: 1672360
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

I need to display the active filters applied to a RadGrid control, including both the columns being filtered and the specific values used for filtering. The filtered columns and their respective values should be shown in a label above the control.

This knowledge base article also answers the following questions:

- How can I display the columns that are currently being filtered in a RadGrid?
- How do I show the filter values for each filtered column in a RadGrid?
- What method can be used to list active filters in a RadGrid control?

## Solution

To display the filtered columns and their corresponding filter values above a RadGrid control, follow these steps:

1. Loop through each column in the RadGrid to check if it is being filtered.
2. For columns with active filters, retrieve the filter value and function.
3. Concatenate the collected filter details into a readable format.
4. Display this information in a label or another suitable control placed above the RadGrid.

Here is a code example that demonstrates this approach:

````ASP.NET
<asp:Label Text="lblFilterDetails" ID="lblFilterDetails" runat="server" />
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnPreRender="RadGrid1_PreRender" 
    AllowFilteringByColumn="true" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <!-- Define your RadGrid columns here -->
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    List<string> filterDetails = new List<string>();

    foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
    {
        if (!string.IsNullOrEmpty(column.CurrentFilterValue))
        {
            string filteredColumn = column.UniqueName;
            string filterFunction = column.CurrentFilterFunction.ToString();
            string filterValue = column.CurrentFilterValue;

            string filterInfo = string.Format("Filtering column {0} with filter function {1} and value {2}", filteredColumn, filterFunction, filterValue);

            filterDetails.Add(filterInfo);
        }
    }

    lblFilterDetails.Text = filterDetails.Count > 0 ? "Filtered Columns: " + string.Join(", ", filterDetails) : "No filters applied.";
}
````

### Explanation
- **RadGrid1_PreRender**: This event ensures that the filter information is retrieved after filtering is applied.
- **filterDetails**: A list that holds the filter details for each filtered column.
- **lblFilterDetails**: The control used to display the active filter information above the RadGrid.

By following this solution, you can effectively display the filtered columns along with their filter functions and values, helping users understand how the data is being filtered.

## See Also

- [RadGrid Filtering Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/functionality/filtering/overview)
