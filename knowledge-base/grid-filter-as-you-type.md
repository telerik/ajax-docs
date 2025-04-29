---
title: Implementing Type Ahead Filtering in RadGrid for ASP.NET AJAX
description: Learn how to implement type-ahead filtering functionality in RadGrid for ASP.NET AJAX using JavaScript and server-side code.
type: how-to
page_title: Filter as you type in RadGrid
slug: grid-filter-as-you-type
tags: radgrid, asp.net ajax, filtering, type-ahead, javascript, server-code
res_type: kb
ticketid: 1685975
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

RadGrid for ASP.NET AJAX does not natively support "type ahead" filtering functionality similar to the RadComboBox component with the `Filter="Contains"` property. However, you can achieve this behavior by implementing custom JavaScript and server-side code to handle key events and dynamically filter the grid data based on user input.

This knowledge base article also answers the following questions:

- How to enable dynamic filtering without pressing Enter in RadGrid for ASP.NET AJAX?
- Is it possible to implement type-ahead filtering in RadGrid column filters?
- How can I create custom filtering behavior in RadGrid for ASP.NET AJAX?

## Solution

To implement type-ahead filtering in RadGrid for ASP.NET AJAX, follow these steps:

Define the columns in the RadGrid with filtering enabled and set the `FilterDelay` property to control the delay before filtering occurs.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="GriSystem">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="GriSystem" />
                <telerik:AjaxUpdatedControl ControlID="HiddenField1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadGrid ID="GriSystem" runat="server" AllowFilteringByColumn="true" AllowPaging="True" Width="800px"
    AutoGenerateColumns="False" CellSpacing="0" GridLines="None" OnNeedDataSource="GriSystem_NeedDataSource"
    GroupingSettings-CaseSensitive="False" OnItemCommand="GriSystem_ItemCommand"
    OnItemCreated="GriSystem_ItemCreated">
    <GroupingSettings CaseSensitive="False" />
    <MasterTableView DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName" FilterDelay="200"
                CurrentFilterFunction="Contains" ShowFilterIcon="false">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry" FilterDelay="200"
                CurrentFilterFunction="Contains" ShowFilterIcon="false">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry] FROM [Orders]"></asp:SqlDataSource>
<asp:HiddenField ID="HiddenField1" runat="server" Value="" />
<asp:Button ID="Button1" runat="server" Text="Button" OnClientClick="return false;" />
````

Implement JavaScript to dynamically apply filtering on keypress or paste events.

````JavaScript
function pageLoad() {
    let hiddenField = $get('<%= HiddenField1.ClientID %>');

    if (hiddenField.value !== "") {
        let textBox = $get(hiddenField.value);
        let text = textBox.value;

        textBox.onfocus = function () {
            this.value = "";
            this.value = text;
        };

        textBox.focus();
        hiddenField.value = "";
    }
}

function textBoxPaste(textBox) {
    $get('<%= HiddenField1.ClientID %>').value = textBox.value;
    $(textBox).keypress();
}
````

Bind the RadGrid to your data source dynamically and handle filtering commands.

````C#
protected void GriSystem_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    string ConnString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand("SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry] FROM [Orders]", conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    GriSystem.DataSource = myDataTable;
}
protected void GriSystem_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.FilterCommandName)
    {
        string colName = (e.CommandArgument as Pair).Second.ToString();
        GridColumn col = e.Item.OwnerTableView.GetColumn(colName) as GridColumn;
        TextBox textBox = (e.Item as GridFilteringItem)[colName].Controls[0] as TextBox;

        if (col.FilterDelay != null && textBox != null)
        {
            HiddenField1.Value = textBox.ClientID;
        }
    }
}
protected void GriSystem_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFilteringItem)
    {
        GridFilteringItem filterItem = e.Item as GridFilteringItem;
        foreach (GridBoundColumn col in filterItem.OwnerTableView.RenderColumns.OfType<GridBoundColumn>().Where(x => x.FilterDelay != null))
        {
            TextBox textBox = filterItem[col.UniqueName].Controls[0] as TextBox;
            textBox.Attributes.Add("onpaste", "textBoxPaste(this);");
        }
    }
}
````

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Filtering Customization](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/filtering/custom-option-for-filtering)
- [RadGrid Filtering with Dropdowns](https://www.telerik.com/forums/radgrid-filtering-with-dropdowns)
