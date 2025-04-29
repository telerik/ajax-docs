---
title: Styling Items in GridDropDownColumn in Insert Mode with InPlace EditMode
description: Learn how to customize the width, height, and font-size of dropdown items in a GridDropDownColumn while in Insert mode with InPlace EditMode in RadGrid for ASP.NET AJAX.
type: how-to
page_title: Customizing Dropdown Appearance in Insert Mode of GridDropDownColumn
slug: grid-styling-grid-dropdowncolumn-in-insert-mode
tags: radgrid, asp.net ajax, griddropdowncolumn, editmode, styling, itemdatabound, inplace-editmode
res_type: kb
ticketid: 1685934
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

I want to customize the appearance of the dropdown items in a **GridDropDownColumn** while in Insert mode using InPlace EditMode. Is there a way to achieve this effectively?

This knowledge base article also answers the following questions:
- How to change the style of dropdown items in a RadGrid GridDropDownColumn during Insert mode?
- Can I adjust the size and font of the dropdown in GridDropDownColumn while editing?
- What is the proper way to style GridDropDownColumn items in InPlace EditMode?

## Solution

To customize the dropdown items in a **GridDropDownColumn** while in Insert mode, use the `ItemDataBound` event of the RadGrid and apply server-side adjustments combined with CSS. Follow these steps:

Set up the RadGrid with necessary columns and data sources, including a **GridDropDownColumn**.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px" AutoGenerateColumns="False" AllowPaging="true" DataSourceID="SqlDataSource1" OnItemDataBound="RadGrid1_ItemDataBound">
    <MasterTableView DataKeyNames="OrderID">
        <Columns>
            <telerik:GridEditCommandColumn />
            <telerik:GridBoundColumn DataField="OrderID" HeaderText="Order ID" ReadOnly="True" UniqueName="OrderID" />
            <telerik:GridDropDownColumn DataField="CustomerID" HeaderText="Customer" UniqueName="CustomerID" ListTextField="CompanyName" ListValueField="CustomerID" DataSourceID="SqlDataSource2" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT OrderID, CustomerID FROM Orders"
    UpdateCommand="UPDATE Orders SET CustomerID = @CustomerID WHERE OrderID = @OrderID">
    <UpdateParameters>
        <asp:Parameter Name="CustomerID" Type="String" />
        <asp:Parameter Name="OrderID" Type="Int32" />
    </UpdateParameters>
</asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource2" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT CustomerID, CompanyName FROM Customers ORDER BY CompanyName"></asp:SqlDataSource>
````

Use the `ItemDataBound` event to modify the dropdown's appearance dynamically.

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        GridEditableItem editItem = e.Item as GridEditableItem;
        RadComboBox comboBox = editItem.FindControl("RCB_CustomerID") as RadComboBox;

        if (comboBox != null)
        {
            comboBox.Width = Unit.Pixel(300); // Set width
            comboBox.Height = Unit.Pixel(500); // Set height
            comboBox.Style.Add("font-size", "14px"); // Set font size
        }
    }
}
````

The ID of the RadComboBox in the GridDropDownColumn is dynamically generated. Use the format `RCB_<DataField>` to locate the control. For example, if the DataField is `CustomerID`, the ID will be `RCB_CustomerID`.

This approach allows you to effectively style the dropdown in Insert mode while using InPlace EditMode.

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
