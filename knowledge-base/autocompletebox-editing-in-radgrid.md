---
title: Edit and insert with autocomplete
description: Editing in RadGrid using RadAutoCompleteBox in GridTemplateColumn and built-in GridAutoCompleteColumn
type: how-to
page_title: Edit and insert with autocomplete - RadGrid | Telerik Web UI
slug: autocompletebox-editing-in-radgrid
position: 
tags: autocompletebox, radautocompletebox, radgrid, grid, gridtemplatecolumn, editing, gridautocompletecolumn
ticketid: 1433098
res_type: kb
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
Editing in RadGrid using RadAutoCompleteBox in GridTemplateColumn and built-in GridAutoCompleteColumn

## Solution

Assuming there is a field in the DataSource that will hold values separated by the Delimiter defined in the settings of RadAutoCompleteBox or GridAutoCompleteColumn. In this  examples, the "AutoCompleteField" will be used and values are separated by spaces:

![Field in DataSource/DataBase](https://github.com/telerik/ajax-docs/blob/master/knowledge-base/images/datasource-field-for-autocomplete.png)

### GridAutoCompleteColumn

For GridAutoCompleteColumn all you need is few properties to be set:

-DataField points to the field on Grid's data source
-DataTextField and DataValueField points to the fields on  the data source specified by the DataSourceID

````XML
<telerik:GridAutoCompleteColumn HeaderText="AutoComplete with GridAutoCompleteColumn" 
    DataSourceID="SqlDataSource2" 
    DataField="AutoCompleteField" 
    DataTextField="ShipCountry" 
    DataValueField="ShipCountry">
</telerik:GridAutoCompleteColumn>
````

### RadAutoCompleteBox 

To implement RadAutoCompleteBox inside a GridTemplateColumn, please follow the instructions below:

Create a TemplateColumn with:

- ItemTemplate - for displaying the data coming from AutoCompleteField
- EditItemTemplate - used for editing/inserting data
- Evaluate the AutoCompleteField in the ItemTemplate
- Add a RadAutoCompleteBox to the EditItemTemplate and Bind its Text property (using Bind() expression)
- Define a DataSource for the RadAutoCompleteBox and set the DataTextField and DataValueField properties that point to the fields in RadAutoCompleteBox's data source.

````XML
<telerik:GridTemplateColumn HeaderText="AutoComplete with GridTemplateColumn" UniqueName="TemplateColumn1">
    <ItemTemplate>
        <%# Eval("AutoCompleteField") %>
    </ItemTemplate>
    <EditItemTemplate>
        <telerik:RadAutoCompleteBox ID="RadAutoCompleteBox1" runat="server" Delimiter=" "
            DataSourceID="SqlDataSource2" 
            DataTextField="ShipCountry" 
            DataValueField="ShipCountry"
            Text='<%# Bind("AutoCompleteField") %>'>
        </telerik:RadAutoCompleteBox>
    </EditItemTemplate>
</telerik:GridTemplateColumn>
````

Once the columns is configured, you will need to do several more adjustments. Since this is a TemplateColumn, some things may require addittional configurations.

Wire up the ItemDataBound event for the RadGrid

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemDataBound="RadGrid1_ItemDataBound">
</telerik:RadGrid>
````

In the ItemDataBound event handler, find and populate the RadAutoCompleBox control with the values that are bound to the Grid's row

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item.IsInEditMode)
    {
        GridEditableItem editItem = e.Item as GridEditableItem;

        if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
        {
            // Insert mode

            // In insert mode, the row is new, there is no data for the AutoCompleteBox to populate
        }
        else
        {
            // Edit mode
            // get reference to RadAutoCompleteBox
            RadAutoCompleteBox racb = editItem["TemplateColumn1"].FindControl("RadAutoCompleteBox1") as RadAutoCompleteBox;

            // Get the AutoCompleteField cell values
            var values = ((editItem.DataItem as DataRowView).Row as DataRow)["AutoCompleteField"].ToString();

            // populate RadAutoCompleteBox with the values from the cell

            foreach (var entry in values.Split(new char[] { racb.Delimiter[0] }, StringSplitOptions.RemoveEmptyEntries))
            {
                racb.Entries.Add(new AutoCompleteBoxEntry(entry));
            }
        }
    }
}
````
That concludes the data binding of controls.

**CRUD**

To Enable (Automatic DataSource Operations)[https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/automatic-datasource-operations], the Grid must be bound using (Declarative DataSource)[https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource]

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" 
    DataSourceID="SqlDataSource1"
    AllowAutomaticInserts="true"
    AllowAutomaticUpdates="true"
    AllowAutomaticDeletes="true">
</telerik:RadGrid>
````

Configure the SqlDataSource send CRUD requests to SQL database

````XML
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:ConnectionString %>"
    InsertCommand="INSERT INTO [Orders] ([OrderDate], [Freight], [ShipName], [ShipCountry], [AutoCompleteField]) VALUES (@OrderDate, @Freight, @ShipName, @ShipCountry, @AutoCompleteField)"
    SelectCommand="SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry], [AutoCompleteField] FROM [Orders]"
    UpdateCommand="UPDATE [Orders] SET [OrderDate] = @OrderDate, [Freight] = @Freight, [ShipName] = @ShipName, [ShipCountry] = @ShipCountry, [AutoCompleteField] = @AutoCompleteField WHERE [OrderID] = @OrderID"
    DeleteCommand="DELETE FROM [Orders] WHERE [OrderID] = @OrderID">
</asp:SqlDataSource>
````

### FULL Code Snippets

<details><summary>Default.aspx</summary>
<p>

````ASPX
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Default" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            <Scripts>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
            </Scripts>
        </telerik:RadScriptManager>

        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" AllowFilteringByColumn="true"
            OnItemDataBound="RadGrid1_ItemDataBound"
            AutoGenerateEditColumn="true"
            AutoGenerateDeleteColumn="true"
            DataSourceID="SqlDataSource1"
            AllowAutomaticInserts="true"
            AllowAutomaticUpdates="true"
            AllowAutomaticDeletes="true">

            <MasterTableView DataSourceID="SqlDataSource1" AutoGenerateColumns="False" CommandItemDisplay="Top"
                DataKeyNames="OrderID" InsertItemDisplay="Top">
                <Columns>
                    <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" Display="false"
                        FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
                    </telerik:GridBoundColumn>
                    <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime" Display="false"
                        FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                        SortExpression="OrderDate" UniqueName="OrderDate">
                    </telerik:GridDateTimeColumn>
                    <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal" Display="false"
                        FilterControlAltText="Filter Freight column" HeaderText="Freight"
                        SortExpression="Freight" UniqueName="Freight">
                    </telerik:GridNumericColumn>
                    <telerik:GridBoundColumn DataField="ShipName"
                        FilterControlAltText="Filter ShipName column" HeaderText="ShipName" Display="false"
                        SortExpression="ShipName" UniqueName="ShipName">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="ShipCountry"
                        FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry" Display="false"
                        SortExpression="ShipCountry" UniqueName="ShipCountry">
                    </telerik:GridBoundColumn>

                    <telerik:GridAutoCompleteColumn HeaderText="AutoComplete with GridAutoCompleteColumn"
                        DataSourceID="SqlDataSource2"
                        DataField="AutoCompleteField"
                        DataTextField="ShipCountry"
                        DataValueField="ShipCountry">
                    </telerik:GridAutoCompleteColumn>

                    <telerik:GridTemplateColumn HeaderText="AutoComplete with GridTemplateColumn" UniqueName="TemplateColumn1">
                        <ItemTemplate>
                            <%# Eval("AutoCompleteField") %>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <telerik:RadAutoCompleteBox ID="RadAutoCompleteBox1" runat="server" Delimiter=" "
                                DataSourceID="SqlDataSource2"
                                DataTextField="ShipCountry"
                                DataValueField="ShipCountry"
                                Text='<%# Bind("AutoCompleteField") %>'>
                            </telerik:RadAutoCompleteBox>
                        </EditItemTemplate>
                    </telerik:GridTemplateColumn>

                </Columns>
            </MasterTableView>
        </telerik:RadGrid>

        <asp:SqlDataSource ID="SqlDataSource1" runat="server"
            ConnectionString="<%$ ConnectionStrings:ConnectionString %>"
            InsertCommand="INSERT INTO [Orders] ([OrderDate], [Freight], [ShipName], [ShipCountry], [AutoCompleteField]) VALUES (@OrderDate, @Freight, @ShipName, @ShipCountry, @AutoCompleteField)"
            SelectCommand="SELECT [OrderID], [OrderDate], [Freight], [ShipName], [ShipCountry], [AutoCompleteField] FROM [Orders]"
            UpdateCommand="UPDATE [Orders] SET [OrderDate] = @OrderDate, [Freight] = @Freight, [ShipName] = @ShipName, [ShipCountry] = @ShipCountry, [AutoCompleteField] = @AutoCompleteField WHERE [OrderID] = @OrderID"
            DeleteCommand="DELETE FROM [Orders] WHERE [OrderID] = @OrderID"></asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource2" runat="server"
            ConnectionString="<%$ ConnectionStrings:ConnectionString %>"
            SelectCommand="SELECT DISTINCT [ShipCountry] FROM [Orders]"></asp:SqlDataSource>
    </form>
</body>
</html>
````

</p>
</details>

<details><summary>Default.aspx.cs</summary>
<p>

````C#
using System;
using System.Data;
using Telerik.Web.UI;

public partial class Default : System.Web.UI.Page
{
    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        RadGrid1.DataSource = GetGridSource();
    }
    private DataTable GetGridSource()
    {
        DataTable dataTable = new DataTable();

        DataColumn column = new DataColumn();
        column.DataType = Type.GetType("System.Int32");
        column.ColumnName = "OrderID";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.DateTime");
        column.ColumnName = "OrderDate";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.Decimal");
        column.ColumnName = "Freight";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.String");
        column.ColumnName = "ShipName";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.String");
        column.ColumnName = "ShipCountry";
        dataTable.Columns.Add(column);

        DataColumn[] PrimaryKeyColumns = new DataColumn[1];
        PrimaryKeyColumns[0] = dataTable.Columns["OrderID"];
        dataTable.PrimaryKey = PrimaryKeyColumns;

        for (int i = 0; i <= 80; i++)
        {
            DataRow row = dataTable.NewRow();
            row["OrderID"] = i + 1;
            row["OrderDate"] = DateTime.Now;
            row["Freight"] = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01;
            row["ShipName"] = "Name " + (i + 1);
            row["ShipCountry"] = "Country " + (i + 1);

            dataTable.Rows.Add(row);
        }

        return dataTable;
    }
    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item.IsInEditMode)
        {
            GridEditableItem editItem = e.Item as GridEditableItem;

            if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
            {
                // Insert mode

                // In insert mode, the row is new, there is no data for the AutoCompleteBox to populate
            }
            else
            {
                // Edit mode
                // get reference to RadAutoCompleteBox
                RadAutoCompleteBox racb = editItem["TemplateColumn1"].FindControl("RadAutoCompleteBox1") as RadAutoCompleteBox;

                // Get the AutoCompleteField cell values
                var values = ((editItem.DataItem as DataRowView).Row as DataRow)["AutoCompleteField"].ToString();

                // populate RadAutoCompleteBox with the values from the cell

                foreach (var entry in values.Split(new char[] { racb.Delimiter[0] }, StringSplitOptions.RemoveEmptyEntries))
                {
                    racb.Entries.Add(new AutoCompleteBoxEntry(entry));
                }

                // OR use a method 

                PopulateAutoCompleteBoxFromString(values, racb);
            }
        }
    }
    private void PopulateAutoCompleteBoxFromString(string text, RadAutoCompleteBox racb)
    {
        racb.Entries.Clear();
        char[] delimiterChar = { racb.Delimiter[0] };

        var entries = text.Split(delimiterChar);

        foreach (var entryText in entries)
        {
            string trimmedText = entryText.Trim();

            if (!String.IsNullOrEmpty(trimmedText))
                racb.Entries.Add(new AutoCompleteBoxEntry(trimmedText));
        }
    }
}
````

</p>
</details>


<details><summary>web.config</summary>
<p>

````XML
<connectionStrings>
  <add name="ConnectionString" connectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|Northwind.mdf;Integrated Security=True" providerName="System.Data.SqlClient"/>
  <add name="TelerikConnectionString" connectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|Telerik.mdf;Integrated Security=True" providerName="System.Data.SqlClient"/>
  <!--<add name="NorthwindConnectionString" connectionString="Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|Northwind.mdf;Integrated Security=True;User Instance=True" providerName="System.Data.SqlClient"/>-->
  <!--<add name="TelerikConnectionString" connectionString="Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|Telerik.mdf;Integrated Security=True;User Instance=True" providerName="System.Data.SqlClient"/>-->
</connectionStrings>
````

<p>
</details>

## See Also

- [Accessing Cells and Rows](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows)
- [Distinguish Edit or Insert Mode](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/distinguish-edit-or-insert-mode)

