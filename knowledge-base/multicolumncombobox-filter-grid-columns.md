---
title: Filter Grid columns with MultiColumnComboBox
description: Learn how to use MultiColumnComboBox as a column filter within RadGrid
type: how-to
page_title: Filter Grid columns with MultiColumnComboBox
slug: multicolumncombobox-filter-grid-columns
tags: radmulticolumncombobox, radgrid, filter, asp.net ajax, datasource, filteringbycolumn, multiselect
res_type: kb
category: knowledge-base
ticketid: 1653380
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms MultiColumnComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I implement the MultiColumnComboBox as a filter within a Grid column to enhance the filtering capabilities?

This KB article also answers the following questions:

- How to filter RadGrid records using MultiColumnComboBox?
- How to implement custom filtering in RadGrid with MultiColumnComboBox?
- How to use MultiColumnComboBox columns for RadGrid filtering?

## Solution

First, add the **RadMultiColumnComboBox** as a ***FilterTemplate*** to a **Grid** column. Configure its data source, display fields, and columns as needed.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" DataSourceID="SqlDataSource1" Width="800px" AllowFilteringByColumn="True">
    <MasterTableView DataSourceID="SqlDataSource1" AutoGenerateColumns="false" DataKeyNames="CustomerID">
        <Columns>
            <telerik:GridBoundColumn UniqueName="CustomerID" HeaderText="Customer ID" DataField="CustomerID" />
            <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="ContactName" DataField="ContactName">
                <FilterTemplate>
                    <telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" DataSourceID="SqlDataSource1"
                        Filter="contains" FilterFields="ContactName, ContactTitle, CompanyName" Width="400px" Height="300px"
                        DataTextField="ContactName" DataValueField="CustomerID"
                        Placeholder="select from the dropdown or type">
                        <ColumnsCollection>
                            <telerik:MultiColumnComboBoxColumn Field="ContactName" Title="Name" Width="200px" />
                            <telerik:MultiColumnComboBoxColumn Field="ContactTitle" Title="Title" Width="200px" />
                            <telerik:MultiColumnComboBoxColumn Field="CompanyName" Title="Company" Width="200px" />
                        </ColumnsCollection>
                        <ClientEvents OnChange="onChange" />
                    </telerik:RadMultiColumnComboBox>
                </FilterTemplate>
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn UniqueName="ContactTitle" HeaderText="ContactTitle" DataField="ContactTitle" />
            <telerik:GridBoundColumn UniqueName="CompanyName" HeaderText="CompanyName" DataField="CompanyName" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient"
    SelectCommand="SELECT [CustomerID], [ContactName], [ContactTitle], [CompanyName] FROM [Customers]"></asp:SqlDataSource>
````

After that, implement the [`onChange`](https://docs.telerik.com/kendo-ui/api/javascript/ui/combobox/events/change) JavaScript function to filter the Grid based on the selection from the MultiColumnComboBox.

````JavaScript
function onChange(sender, args) {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var tableView = grid.get_masterTableView();
    var filterText = sender.get_dataItem().ContactName;  // You can also specify the other fields, depending on the returned data

    tableView.filter("ContactName", filterText, "EqualTo"); 
}
````

This setup allows you to filter RadGrid records based on the selected item in the MultiColumnComboBox, offering a powerful and user-friendly filtering experience in your ASP.NET AJAX applications.

## See Also

- [RadMultiColumnComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/multicolumncombobox/overview)
- [RadGrid Filtering](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/overview)
