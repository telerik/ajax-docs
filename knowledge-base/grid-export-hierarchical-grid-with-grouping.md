---
title: Export Hierarchical Grid with Grouping
description: Learn how to Export Hierarchical Grid with Grouping
type: how-to
page_title: Export Hierarchical Grid with Grouping. | RadGrid
slug: grid-export-hierarchical-grid-with-grouping
res_type: kb
tags: grid, grid excel, grid pdf, excel export, pdf export
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This code sample demonstrates how to use the [Export Infrastructure]({%slug controls/export-infrastructure%}) ​​to export hierarchical RadGrid with grouping. Both features are not supported in RadGrid's built-it binary export formats, but by using the flexibility of the Export Infrastructure export we can easily create the desired Excel or Word document.

## Solution

The code below has the following functions:

`ExportButton_Click` triggers the export process by first preparing the grid data using the `LoopHierarchyRecursive` function and then exporting the Grid data based on the selected format using the `ExportGrid` function.

`LoopHierarchyRecursive` recursively traverses through the Hierarchy of the Grid to collect data for export. It iterates through Group headers and data items, extracting data and populating them into the export table (`xls.Table`). It also handles nested items recursively.

`TraverseHeaderItem` traverses the header items of the Grid to collect header data for export. It extracts header text and populates them into the export table, applying some styling.

`TraverseGroupHeaderItems` traverses the group header items of the Grid to collect group header data for export. It extracts group header text and populates them into the export table, applying some styling.

`ExportGrid` exports the Grid data based on the selected export format. It initializes the export structure (`xls.ExportStructure`), renders the export content based on the selected format (Word, Excel, or Excel BIFF), sets the appropriate MIME type, and sends the exported data as a response.

`RadGrid1_PreRender` expands the first item in the Grid if it's not a postback, ensuring that the first item is initially expanded for better user experience.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" ClientEvents-OnRequestStart="onRequestStart">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:ImageButton ImageUrl="img/Excel_BIFF.png" AlternateText="xls" ID="ExportButton1" OnClick="ExportButton_Click" runat="server" />
<asp:ImageButton ImageUrl="img/Excel_XLSX.png" AlternateText="xlsx" ID="ExportButton2" OnClick="ExportButton_Click" runat="server" />
<asp:ImageButton ImageUrl="img/Word_DOCX.png" AlternateText="docx" ID="ExportButton3" OnClick="ExportButton_Click" runat="server" />

<telerik:RadGrid ID="RadGrid1" ShowStatusBar="true" ShowGroupPanel="true" RetainExpandStateOnRebind="true" OnPreRender="RadGrid1_PreRender"
    DataSourceID="SqlDataSource1" runat="server" AutoGenerateColumns="False" PageSize="7"
    AllowSorting="false" AllowMultiRowSelection="False" AllowPaging="True" GridLines="None">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <ExportSettings ExportOnlyData="true"></ExportSettings>
    <MasterTableView EnableHierarchyExpandAll="true" DataSourceID="SqlDataSource1" DataKeyNames="CustomerID"
        AllowMultiColumnSorting="True" HierarchyLoadMode="ServerBind" HierarchyDefaultExpanded="false" Name="Master">
        <GroupByExpressions>
            <telerik:GridGroupByExpression>
                <GroupByFields>
                    <telerik:GridGroupByField FieldName="CustomerID" HeaderText="CustomerID" />
                </GroupByFields>
                <SelectFields>
                    <telerik:GridGroupByField FieldName="CustomerID" HeaderText="CustomerID" />
                </SelectFields>
            </telerik:GridGroupByExpression>
        </GroupByExpressions>
        <DetailTables>
            <telerik:GridTableView EnableHierarchyExpandAll="true" DataKeyNames="OrderID" DataSourceID="SqlDataSource2" Width="100%"
                runat="server" HierarchyLoadMode="ServerBind" HierarchyDefaultExpanded="false" Name="First">
                <ParentTableRelation>
                    <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID"></telerik:GridRelationFields>
                </ParentTableRelation>
                <DetailTables>
                    <telerik:GridTableView EnableHierarchyExpandAll="true" DataKeyNames="OrderID" DataSourceID="SqlDataSource3" Width="100%"
                        runat="server" HierarchyLoadMode="ServerBind" HierarchyDefaultExpanded="false" Name="Second">
                        <ParentTableRelation>
                            <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID"></telerik:GridRelationFields>
                        </ParentTableRelation>
                        <Columns>
                            <telerik:GridBoundColumn SortExpression="UnitPrice" HeaderText="Unit Price"
                                DataField="UnitPrice" UniqueName="UnitPrice">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn SortExpression="Quantity" HeaderText="Quantity"
                                DataField="Quantity" UniqueName="Quantity">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn SortExpression="Discount" HeaderText="Discount"
                                DataField="Discount" UniqueName="Discount">
                            </telerik:GridBoundColumn>
                        </Columns>
                        <SortExpressions>
                            <telerik:GridSortExpression FieldName="Quantity" SortOrder="Descending"></telerik:GridSortExpression>
                        </SortExpressions>
                    </telerik:GridTableView>
                </DetailTables>
                <Columns>
                    <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID"
                        DataField="OrderID" UniqueName="OrderID">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered"
                        DataField="OrderDate" UniqueName="OrderDate" DataFormatString="{0:D}">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="Freight" HeaderText="Freight"
                        DataField="Freight" UniqueName="Freight">
                    </telerik:GridBoundColumn>
                </Columns>
                <SortExpressions>
                    <telerik:GridSortExpression FieldName="OrderDate"></telerik:GridSortExpression>
                </SortExpressions>
            </telerik:GridTableView>
        </DetailTables>
        <Columns>
            <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID"
                DataField="CustomerID" UniqueName="CustomerID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name"
                DataField="ContactName" UniqueName="ContactName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company"
                DataField="CompanyName" UniqueName="CompanyName">
            </telerik:GridBoundColumn>
        </Columns>
        <SortExpressions>
            <telerik:GridSortExpression FieldName="CompanyName"></telerik:GridSortExpression>
        </SortExpressions>
    </MasterTableView>
    <ClientSettings AllowDragToGroup="true">
    </ClientSettings>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnection %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 4 * FROM Customers"
    runat="server"></asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnection %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 4 * FROM Orders Where CustomerID = @CustomerID"
    runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string"></asp:SessionParameter>
    </SelectParameters>
</asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnection %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 4 * FROM [Order Details] where OrderID = @OrderID"
    runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32"></asp:SessionParameter>
    </SelectParameters>
</asp:SqlDataSource>
````

````C#
using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using xls = Telerik.Web.UI.ExportInfrastructure;
using Telerik.Web.UI;
using System.Drawing;

public partial class Default : Page
{
    private xls.Table table = new xls.Table();
    private int row = 1;
    private Dictionary<string, int> currentGroupHeaderItem = new Dictionary<string, int>();

    protected void ExportButton_Click(object sender, ImageClickEventArgs e)
    {
        // Prepare the grid data for export
        LoopHierarchyRecursive(RadGrid1.MasterTableView, 0, 0);

        // Get the export format and export the grid
        var format = (sender as ImageButton).AlternateText;
        ExportGrid(format);
    }

    // Recursively loop through grid hierarchy to collect data
    void LoopHierarchyRecursive(GridTableView gridTableView, int nestedLevel, int groupLevel)
    {
        GridItem[] headerCollection = gridTableView.GetItems(GridItemType.GroupHeader);
        int totalCol = TraverseHeaderItem(gridTableView, nestedLevel, groupLevel);

        foreach (GridDataItem item in gridTableView.Items)
        {
            if (item.Visible)
            {
                string[] groupIndexArray = item.GroupIndex.Split('_');

                // Traverse group header items if available
                if (headerCollection.Length != 0)
                {
                    TraverseGroupHeaderItems(headerCollection, groupIndexArray, gridTableView, nestedLevel, groupLevel, totalCol);
                }

                // Fill data cells
                int currentGroupColumn = groupIndexArray.Length > 1 ? groupIndexArray.Length - 1 : 1;
                int groupIndex = groupIndexArray.Length > 1 ? groupIndexArray.Length - 2 : 0;

                for (int i = groupIndexArray.Length + 1; i < item.Controls.Count; i++)
                {
                    table.Cells[nestedLevel + groupLevel + currentGroupColumn, row].Value = (item.Controls[i] as GridTableCell).Text;
                    table.Cells[new Point(nestedLevel + groupLevel + currentGroupColumn, row)].Style.BackColor = Color.LightGray;
                    currentGroupColumn++;
                }

                row++;

                // Recursively loop through child items
                if (item.HasChildItems)
                {
                    groupIndex += groupLevel;
                    LoopHierarchyRecursive((item.ChildItem as GridNestedViewItem).NestedTableViews[0], item.ItemIndexHierarchical.Split(':').Length, groupIndex);
                    groupIndex -= groupLevel;
                }
            }
        }
    }

    // Traverse grid header item to collect header data
    private int TraverseHeaderItem(GridTableView tableView, int nestedLevel, int groupLevel)
    {
        int currentGroupColumn = 0;

        if (tableView.Items.Count > 0)
        {
            GridHeaderItem header = tableView.GetItems(GridItemType.Header)[0] as GridHeaderItem;

            if (header.Visible)
            {
                nestedLevel += groupLevel;
                currentGroupColumn = tableView.GroupByExpressions.Count > 1 ? tableView.GroupByExpressions.Count : 1;

                for (int i = 0; i < header.Cells.Count; i++)
                {
                    if (header.Cells[i].Text != "&nbsp;")
                    {
                        table.Cells[currentGroupColumn + nestedLevel, row].Value = header.Cells[i].Text;
                        table.Cells[currentGroupColumn + nestedLevel, row].Style.BackColor = Color.GreenYellow;
                        currentGroupColumn++;
                    }
                }

                int prevCells = currentGroupColumn - 1;
                while (0 < prevCells)
                {
                    table.Cells[prevCells + nestedLevel, row].Style.BackColor = Color.GreenYellow;
                    prevCells--;
                }

                row++;
            }
        }
        return currentGroupColumn;
    }

    // Traverse group header items to collect group header data
    private void TraverseGroupHeaderItems(GridItem[] headerCollection, string[] groupIndexArray, GridTableView tableView, int nestedLevel, int groupLevel, int totalCol)
    {
        if (!currentGroupHeaderItem.ContainsKey(tableView.ID))
        {
            currentGroupHeaderItem[tableView.ID] = 0;
        }

        if (currentGroupHeaderItem[tableView.ID] >= headerCollection.Length)
        {
            return;
        }

        string[] headerIndex = headerCollection[currentGroupHeaderItem[tableView.ID]].GroupIndex.Split('_');

        for (int j = 0; j < headerIndex.Length; j++)
        {
            if (headerIndex[j] != groupIndexArray[j])
            {
                return;
            }
        }

        GridGroupHeaderItem currentHeaderItem = headerCollection[currentGroupHeaderItem[tableView.ID]] as GridGroupHeaderItem;
        int currentColumn = headerIndex.Length + nestedLevel + groupLevel;

        table.Cells[currentColumn, row].Value = currentHeaderItem.DataCell.Text;
        table.Cells[currentColumn, row].Style.BackColor = Color.DarkGray;

        while (currentColumn < totalCol + groupLevel + nestedLevel)
        {
            table.Cells[currentColumn, row].Style.BackColor = Color.DarkGray;
            currentColumn++;
        }

        currentGroupHeaderItem[tableView.ID] += 1;
        row++;
        TraverseGroupHeaderItems(headerCollection, groupIndexArray, tableView, nestedLevel, groupLevel, totalCol);
    }

    // Export grid data based on selected format
    private void ExportGrid(string format)
    {
        xls.ExportStructure structure = new xls.ExportStructure();
        structure.Tables.Add(table);

        string mimeType = "";
        byte[] renderedBytes = null;

        switch (format)
        {
            case "docx":
                xls.DocxRenderer docxRenderer = new xls.DocxRenderer(structure);
                renderedBytes = docxRenderer.Render();
                mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                break;
            case "xlsx":
                xls.XlsxRenderer xlsxRenderer = new xls.XlsxRenderer(structure);
                renderedBytes = xlsxRenderer.Render();
                mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                break;
            case "xls":
                xls.XlsBiffRenderer xlsRenderer = new xls.XlsBiffRenderer(structure);
                renderedBytes = xlsRenderer.Render();
                mimeType = "application/vnd.ms-excel";
                break;
            default:
                break;
        }

        // Send the exported data as response
        Response.Clear();
        Response.AppendHeader("Content-Disposition", "attachment; filename=ExportFile." + format);
        Response.ContentType = mimeType;
        Response.BinaryWrite(renderedBytes);
        Response.End();
    }

    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        // Expand the first item in the grid when not in postback
        if (!IsPostBack)
        {
            RadGrid1.Items[0].Expanded = true;
            RadGrid1.Items[0].ChildItem.NestedTableViews[0].Items[0].Expanded = true;
        }
    }
}

````

````JavaScript
function onRequestStart(sender, args) {
    if (args.get_eventTarget().indexOf("Export") >= 0) {
        args.set_enableAjax(false);
    }
}
````
 
   
