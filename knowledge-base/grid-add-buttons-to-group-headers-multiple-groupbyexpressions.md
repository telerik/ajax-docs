---
title: Adding Editable Controls to RadGrid Group Headers with Multiple GroupByExpressions
description: Learn how to add editable controls, such as a button, to specific RadGrid group headers when using multiple GroupByExpressions in UI for ASP.NET AJAX.
type: how-to
page_title: Adding Buttons to Group Headers in RadGrid with Multiple GroupByExpressions
meta_title: Adding Buttons to Group Headers in RadGrid with Multiple GroupByExpressions
slug: grid-add-buttons-to-group-headers-multiple-groupbyexpressions
tags: grid, ui for asp.net ajax, groupbyexpressions, group-header, radbutton, itemdatabound
res_type: kb
ticketid: 1720093
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Grid for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I need to add a button to the group headers of the second grouping level in a RadGrid with multiple GroupByExpressions. The button will allow navigation to another page. The button should only appear for the inner grouping level and not the outer grouping level.

This knowledge base article also answers the following questions:

- How to make group headers editable in RadGrid?
- How to show controls in specific group levels in RadGrid?
- How to bind buttons dynamically in RadGrid group headers?

## Solution

To add editable controls to specific group headers in RadGrid with multiple GroupByExpressions:

1. Place the desired control, such as a `RadButton`, inside the `GroupHeaderTemplate` of the `MasterTableView`. Set its `Visible` property to `false` initially.

2. Handle the `ItemDataBound` event to determine which group headers should display the control. For each `GridGroupHeaderItem`, cast its `DataItem` to `DataRowView`. Use the grouped data to identify the header level based on the presence of specific fields.

3. Set the control's visibility and properties dynamically in the `ItemDataBound` event.

Here is the complete implementation:

### RadGrid Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="false" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemDataBound="RadGrid1_ItemDataBound">
    <MasterTableView DataKeyNames="itemnmbr, Plant, itmclscd" ShowFooter="false">
        <GroupHeaderTemplate>
            <asp:Literal ID="GroupLabel" runat="server" Mode="Encode" />
            <telerik:RadButton ID="ItemClassButton" runat="server" Text="Open item class" ButtonType="LinkButton" Visible="false" />
        </GroupHeaderTemplate>
        <Columns>
            <telerik:GridButtonColumn ButtonType="LinkButton" HeaderText="Item Number" DataTextField="itemnmbr" UniqueName="itemnmbr" />
            <telerik:GridBoundColumn HeaderText="UofM" DataField="UofM" />
            <telerik:GridNumericColumn HeaderText="HistQty" DataField="HistQty" DataFormatString="{0:F0}" />
            <telerik:GridNumericColumn HeaderText="HistPrice" DataField="HistPrice" DataFormatString="{0:F4}" />
            <telerik:GridNumericColumn HeaderText="QuotedPrice" DataField="QuotedPrice" DataFormatString="{0:F4}" />
            <telerik:GridNumericColumn HeaderText="QuotedMargin" DataField="QuotedMargin" DataFormatString="{0:p1}" />
            <telerik:GridNumericColumn HeaderText="Level4Price" DataField="Level4Price" DataFormatString="{0:F4}" />
            <telerik:GridNumericColumn HeaderText="Level4Margin" DataField="Level4Margin" DataFormatString="{0:p1}" />
            <telerik:GridNumericColumn HeaderText="NewPrice" DataField="NewPrice" DataFormatString="{0:F4}" />
        </Columns>
        <GroupByExpressions>
            <telerik:GridGroupByExpression>
                <SelectFields>
                    <telerik:GridGroupByField HeaderText="Plant" FieldName="Plant" />
                </SelectFields>
                <GroupByFields>
                    <telerik:GridGroupByField FieldName="Plant" />
                </GroupByFields>
            </telerik:GridGroupByExpression>
            <telerik:GridGroupByExpression>
                <SelectFields>
                    <telerik:GridGroupByField HeaderText="Item Class" FieldName="itmclscd" />
                </SelectFields>
                <GroupByFields>
                    <telerik:GridGroupByField FieldName="itmclscd" />
                </GroupByFields>
            </telerik:GridGroupByExpression>
        </GroupByExpressions>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem header)
    {
        DataRowView group = (DataRowView)header.DataItem;
        Literal label = (Literal)header.FindControl("GroupLabel");
        RadButton button = (RadButton)header.FindControl("ItemClassButton");
        bool isItemClassGroup = group.DataView.Table.Columns.Contains("itmclscd");

        button.Visible = isItemClassGroup;

        if (isItemClassGroup)
        {
            string itemClass = Convert.ToString(group["itmclscd"]);
            label.Text = "Item Class: " + itemClass + " ";
            button.NavigateUrl = "~/ItemClassDetails.aspx?itmclscd=" + Server.UrlEncode(itemClass);
        }
        else
        {
            label.Text = "Plant: " + Convert.ToString(group["Plant"]);
        }
    }
}

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetData();
}

private DataTable GetData()
{
    DataTable table = new DataTable();
    table.Columns.Add("itemnmbr", typeof(string));
    table.Columns.Add("Plant", typeof(string));
    table.Columns.Add("itmclscd", typeof(string));
    table.Columns.Add("UofM", typeof(string));
    table.Columns.Add("HistQty", typeof(int));
    table.Columns.Add("HistPrice", typeof(decimal));
    table.Columns.Add("QuotedPrice", typeof(decimal));
    table.Columns.Add("QuotedMargin", typeof(decimal));
    table.Columns.Add("Level4Price", typeof(decimal));
    table.Columns.Add("Level4Margin", typeof(decimal));
    table.Columns.Add("NewPrice", typeof(decimal));

    for (int index = 0; index < 24; index++)
    {
        table.Rows.Add(
            "ITEM-" + (index + 1).ToString("000"),
            "Plant " + (index / 12 + 1),
            "CLASS-" + (index / 4 % 3 + 1),
            "EA",
            10 + index,
            5m + index,
            6m + index,
            0.20m,
            7m + index,
            0.25m,
            6.5m + index);
    }

    return table;
}
````

## See Also

- [RadGrid ItemDataBound Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/server-side-programming/events/itemdatabound)
- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)


