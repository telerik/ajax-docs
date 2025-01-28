---
title: Dynamically Updating Dropdowns in RadGrid EditItemTemplate Based on Selection
description: Learn how to update a dropdown list within a RadGrid's EditItemTemplate based on another dropdown's selection change using client-side logic.
type: how-to
page_title: Dynamically Updating Dropdowns in RadGrid EditItemTemplate Based on Selection
slug: grid-dynamically-updating-dropdowns-in-edititemtemplate-based-on-selection
tags: radgrid, dropdownlist, edititemtemplate, clientside, asp.net ajax
res_type: kb
ticketid: 1677014
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Progress® Telerik® UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</table>

## Description

I am using a RadGrid that contains dropdown lists in the EditItemTemplate. I need to populate the dropdown in column 2 based on the selection made in the dropdown of column 1, all from the client side.

This knowledge base article also answers the following questions:

- How can I dynamically change the options of a dropdown in RadGrid based on another dropdown's selection?
- What is the process to link two dropdown lists in a RadGrid EditItemTemplate?
- How do I implement cascading dropdowns within a RadGrid?

## Solution

To dynamically update a dropdown list in a RadGrid's EditItemTemplate based on the selection of another dropdown, follow the steps below:

### Step 1: Setup the RadGrid with Dropdowns

Ensure your RadGrid is configured with two dropdown lists in the EditItemTemplate. Example setup:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="false" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView EditMode="EditForms">
        <Columns>
            <telerik:GridEditCommandColumn />
            <telerik:GridTemplateColumn HeaderText="Column 1">
                <EditItemTemplate>
                    <telerik:RadDropDownList ID="DropDownList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                        <Items>
                            <telerik:DropDownListItem Text="Option 1" Value="1" />
                            <telerik:DropDownListItem Text="Option 2" Value="2" />
                        </Items>
                    </telerik:RadDropDownList>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridTemplateColumn HeaderText="Column 2">
                <EditItemTemplate>
                    <telerik:RadDropDownList ID="DropDownList2" runat="server" />
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

### Step 2: Handle the SelectedIndexChanged Event

In the code-behind, manage the `SelectedIndexChanged` event of the first dropdown to update the second dropdown's data source.

````C#
protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
{
    RadDropDownList dropdown1 = (RadDropDownList)sender;
    GridEditableItem editItem = (GridEditableItem)dropdown1.NamingContainer;
    RadDropDownList dropdown2 = (RadDropDownList)editItem.FindControl("DropDownList2");

    string selectedValue = dropdown1.SelectedValue;
    dropdown2.DataSource = GetDataBasedOnSelection(selectedValue);
    dropdown2.DataBind();
}

private List<string> GetDataBasedOnSelection(string selectedValue)
{
    // Fetch data based on the selected value
    return new List<string> { "Item 1", "Item 2", "Item 3" };
}

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    DataTable dataTable = new DataTable();

    dataTable.Columns.Add("Column1", typeof(string));
    dataTable.Columns.Add("Column2", typeof(string));

    dataTable.Rows.Add("Value 1", "Value A");
    dataTable.Rows.Add("Value 2", "Value B");
    dataTable.Rows.Add("Value 3", "Value C");

    RadGrid1.DataSource = dataTable;
}
````

### Explanation

The `SelectedIndexChanged` event dynamically populates the second dropdown based on the first dropdown's selection. Adjust the `GetDataBasedOnSelection` method to suit your data retrieval logic.

This method leverages the AJAX capabilities of Telerik controls for a seamless user experience.

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadDropDownList Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/overview)
