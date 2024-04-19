---
title: Export Hierarchical Grid
description: Learn how to Export Hierarchical Grid
type: how-to
page_title: Export Hierarchical Grid. | RadGrid
slug: grid-export-hierarchical-grid
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

This code sample illustrates how hierarchical RadGrid can be exported. You can choose whether to export all grid items, only the expanded ones or to collapse all items before export.

## Solution

The **HierarchyDefaultExpanded** property of the corresponding table-views is set to true in order to expand all items.
Expanded Grid items are persisted using the approach from the [Retain expanded/selected state in hierarchy on rebind]({%slug grid-retain-expanded-selected-state-in-hierarchy-on-rebind%}) article.

Coloring the table-views in different colors is also an option. This is configured on ItemCreated, so that it is applied in all export types.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <ClientEvents OnRequestStart="onRequestStart"></ClientEvents>
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1"></telerik:AjaxUpdatedControl>
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Default" />

<div>
    <asp:RadioButtonList ID="RadioButtonList1" runat="server">
        <asp:ListItem Text="Export all items" Value="All" Selected="True"></asp:ListItem>
        <asp:ListItem Text="Export expanded items only" Value="Expanded"></asp:ListItem>
        <asp:ListItem Text="Collapse all items before export" Value="Collapsed"></asp:ListItem>
    </asp:RadioButtonList>
    <br />
    <asp:CheckBox ID="CheckBox1" runat="server" Text="Enable colouring when exporting"
        Checked="true"></asp:CheckBox>
</div>
<br />

<telerik:RadGrid ID="RadGrid1" ShowStatusBar="true" DataSourceID="SqlDataSource1"
    runat="server" AutoGenerateColumns="False" PageSize="7" AllowSorting="True" AllowMultiRowSelection="False"
    AllowPaging="True" GridLines="None" OnItemCommand="RadGrid1_ItemCommand" OnDataBound="RadGrid1_DataBound"
    OnItemCreated="RadGrid1_ItemCreated">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" CommandItemDisplay="Top"
        Name="Customers" AllowMultiColumnSorting="True" ExpandCollapseColumn-Display="true"
        RowIndicatorColumn-Display="false">
        <CommandItemSettings ShowExportToExcelButton="true" ShowExportToWordButton="true"
            ShowExportToPdfButton="true"></CommandItemSettings>
        <DetailTables>
            <telerik:GridTableView Name="Orders" DataKeyNames="OrderID" DataSourceID="SqlDataSource2"
                Width="100%" runat="server">
                <ParentTableRelation>
                    <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID"></telerik:GridRelationFields>
                </ParentTableRelation>
                <DetailTables>
                    <telerik:GridTableView Name="OrderDetails" DataKeyNames="OrderID" DataSourceID="SqlDataSource3"
                        Width="100%" runat="server">
                        <ParentTableRelation>
                            <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID"></telerik:GridRelationFields>
                        </ParentTableRelation>
                        <Columns>
                            <telerik:GridBoundColumn SortExpression="UnitPrice" HeaderText="Unit Price" HeaderButtonType="TextButton"
                                DataField="UnitPrice" UniqueName="UnitPrice">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn SortExpression="Quantity" HeaderText="Quantity" HeaderButtonType="TextButton"
                                DataField="Quantity" UniqueName="Quantity">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn SortExpression="Discount" HeaderText="Discount" HeaderButtonType="TextButton"
                                DataField="Discount" UniqueName="Discount">
                            </telerik:GridBoundColumn>
                        </Columns>
                    </telerik:GridTableView>
                </DetailTables>
                <Columns>
                    <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
                        DataField="OrderID" UniqueName="OrderID">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
                        DataField="OrderDate" UniqueName="OrderDate" DataFormatString="{0:D}">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="Freight" HeaderText="Freight" HeaderButtonType="TextButton"
                        DataField="Freight" UniqueName="Freight">
                    </telerik:GridBoundColumn>
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
        <Columns>
            <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
                DataField="CustomerID" UniqueName="CustomerID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
                DataField="ContactName" UniqueName="ContactName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
                DataField="CompanyName" UniqueName="CompanyName">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
    <ExportSettings ExportOnlyData="true" IgnorePaging="true" OpenInNewWindow="true">
        <Excel Format="Html"></Excel>
    </ExportSettings>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
    runat="server"></asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
    runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string"></asp:SessionParameter>
    </SelectParameters>
</asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
    runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32"></asp:SessionParameter>
    </SelectParameters>
</asp:SqlDataSource>
````

````C#
private bool isExport = false;

protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName.Contains("Export"))
    {
        isExport = true;
        if (RadioButtonList1.SelectedValue == "All")
        {
            RadGrid1.MasterTableView.HierarchyDefaultExpanded = true; // for the first level
            RadGrid1.MasterTableView.DetailTables[0].HierarchyDefaultExpanded = true; // for the second level  
        }
        if (RadioButtonList1.SelectedValue == "Expanded")
        {
            RadGrid1.ExportSettings.IgnorePaging = false;
            RadGrid1.Rebind();
        }
    }

    //save the expanded/selected state in the session
    if (e.CommandName == RadGrid.ExpandCollapseCommandName)
    {
        //Is the item about to be expanded or collapsed
        if (!e.Item.Expanded)
        {
            //Save its unique index among all the items in the hierarchy
            this.ExpandedStates[e.Item.ItemIndexHierarchical] = true;
        }
        else //collapsed
        {
            this.ExpandedStates.Remove(e.Item.ItemIndexHierarchical);
            this.ClearExpandedChildren(e.Item.ItemIndexHierarchical);
        }
    }
}


protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (isExport && CheckBox1.Checked)
    {
        if (e.Item is GridHeaderItem)
        {
            switch (e.Item.OwnerTableView.Name)
            {
                case "Customers": e.Item.OwnerTableView.BackColor = System.Drawing.Color.LightGray; break;
                case "Orders": e.Item.OwnerTableView.BackColor = System.Drawing.Color.Gray; break;
                case "OrderDetails": e.Item.OwnerTableView.BackColor = System.Drawing.Color.DarkGray; break;
            }
        }
    }
}

protected void RadGrid1_DataBound(object sender, EventArgs e)
{
    if (RadioButtonList1.SelectedValue == "Expanded")
    {
        //Expand all items using our custom storage
        string[] indexes = new string[this.ExpandedStates.Keys.Count];
        this.ExpandedStates.Keys.CopyTo(indexes, 0);

        ArrayList arr = new ArrayList(indexes);
        //Sort so we can guarantee that a parent item is expanded before any of
        //its children
        arr.Sort();

        foreach (string key in arr)
        {
            bool value = (bool)this.ExpandedStates[key];
            if (value)
            {
                RadGrid1.Items[key].Expanded = true;
            }
        }
    }
}

private Hashtable _ordersExpandedState;

public void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        //reset states
        this._ordersExpandedState = null;
        this.Session["_ordersExpandedState"] = null;
    }
}

//Save/load expanded states Hash from the session
//this can also be implemented in the ViewState
private Hashtable ExpandedStates
{
    get
    {
        if (this._ordersExpandedState == null)
        {
            _ordersExpandedState = this.Session["_ordersExpandedState"] as Hashtable;
            if (_ordersExpandedState == null)
            {
                _ordersExpandedState = new Hashtable();
                this.Session["_ordersExpandedState"] = _ordersExpandedState;
            }
        }

        return this._ordersExpandedState;
    }
}

//Clear the state for all expanded children if a parent item is collapsed
private void ClearExpandedChildren(string parentHierarchicalIndex)
{
    string[] indexes = new string[this.ExpandedStates.Keys.Count];
    this.ExpandedStates.Keys.CopyTo(indexes, 0);
    foreach (string index in indexes)
    {
        //all indexes of child items
        if (index.StartsWith(parentHierarchicalIndex + "_") ||
            index.StartsWith(parentHierarchicalIndex + ":"))
        {
            this.ExpandedStates.Remove(index);
        }
    }
}
````
  