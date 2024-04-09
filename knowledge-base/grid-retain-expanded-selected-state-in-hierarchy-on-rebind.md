---
title: Retain expanded/selected state in hierarchy on rebind 
description: Learn how to retain expanded/selected state in hierarchy on rebind
type: how-to
page_title: Retain expanded/selected state in hierarchy on rebind. | RadGrid
slug: grid-retain-expanded-selected-state-in-hierarchy-on-rebind
res_type: kb
---

## DESCRIPTION

By default when you rebind a parent table in hierarchical grid the settings/expanded state for the nested tables will be lost. This is because the refresh action resets all previous settings applied for the nested controls to avoid viewstate inconsistencies/unexpected behavior.

The approach shown in the artcile represents how to retain the expanded/selected state for Grid items in hierarchy upon a rebind command (hitting the [Refresh] button in an arbitrary command item or the [Rebind grid] button below the grid). Note that the data refresh will be performed through an ajax request when you hit a [Refresh] button and with standard postback from the button outside of the grid body. Nonetheless, the expanded/selected items will retain their state in each level of the hierarchy.

## SOLUTION

The items configuration is maintained in a custom manner in two variables stored in the Session state. Essentially, you need to update these variables on ItemCommand when the command name is:
- `RadGrid.ExpandCollapseCommandName`
- `RadGrid.SelectCommandName`
- `RadGrid.DeselectCommandName`

The restoration of the previous hierarchy configuration is performed inside the DataBound handler of the grid when the data is already bound - this is the safe place to apply the expand/select settings which are otherwise lost on subsequent rebind.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="grdRebind" runat="server" Text="Rebind grid" OnClick="grdRebind_Click" />
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Sunset" />

<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource2" runat="server" Skin="Sunset"
    Width="600px" AutoGenerateColumns="False" AllowSorting="True" AllowMultiRowSelection="true"
    GridLines="None" OnDataBound="RadGrid1_DataBound" OnItemCommand="RadGrid1_ItemCommand">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <MasterTableView DataSourceID="SqlDataSource2" DataKeyNames="CustomerID" CommandItemDisplay="Top">
        <DetailTables>
            <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource3" Width="100%"
                runat="server" CommandItemDisplay="Top" PageSize="10">
                <ParentTableRelation>
                    <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
                </ParentTableRelation>
                <DetailTables>
                    <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource4" Width="100%"
                        runat="server" PageSize="10" CommandItemDisplay="Top">
                        <ParentTableRelation>
                            <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
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
                            <telerik:GridButtonColumn UniqueName="OrderDetailsSelectColumn" CommandName="Select"
                                Text="Select" />
                            <telerik:GridButtonColumn UniqueName="OrderDetailsDeselectColumn" CommandName="Deselect"
                                Text="Deselect" />
                        </Columns>
                    </telerik:GridTableView>
                </DetailTables>
                <Columns>
                    <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
                        DataField="OrderID" UniqueName="OrderID">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
                        DataField="OrderDate" UniqueName="OrderDate">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
                        DataField="EmployeeID" UniqueName="EmployeeID">
                    </telerik:GridBoundColumn>
                    <telerik:GridButtonColumn UniqueName="OrdersSelectColumn" CommandName="Select" Text="Select" />
                    <telerik:GridButtonColumn UniqueName="OrdersDeselectColumn" CommandName="Deselect"
                        Text="Deselect" />
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
            <telerik:GridButtonColumn UniqueName="CustomersSelectColumn" CommandName="Select"
                Text="Select" />
            <telerik:GridButtonColumn UniqueName="CustomersSelectColumn" CommandName="Deselect"
                Text="Deselect" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="SELECT TOP 7 * FROM Customers" runat="server"></asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" SelectCommand="SELECT * FROM Orders WHERE CustomerID = @CustomerID" runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="String" />
    </SelectParameters>
</asp:SqlDataSource>

<asp:SqlDataSource ID="SqlDataSource4" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
    SelectCommand="SELECT * FROM [Order Details] WHERE OrderID = @OrderID" runat="server">
    <SelectParameters>
        <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32" />
    </SelectParameters>
</asp:SqlDataSource>
````

````C#
private Hashtable _ordersExpandedState;
private Hashtable _selectedState;

public void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        //reset states
        this._ordersExpandedState = null;
        this.Session["_ordersExpandedState"] = null;
        this._selectedState = null;
        this.Session["_selectedState"] = null;
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

private void ClearSelectedChildren(string parentHierarchicalIndex)
{
    string[] indexes = new string[this.SelectedStates.Keys.Count];
    this.SelectedStates.Keys.CopyTo(indexes, 0);
    foreach (string index in indexes)
    {
        //all indexes of child items
        if (index.StartsWith(parentHierarchicalIndex + "_") ||
            index.StartsWith(parentHierarchicalIndex + ":"))
        {
            this.SelectedStates.Remove(index);
        }
    }
}

//Save/load selected states Hash from the session
//this can also be implemented in the ViewState
private Hashtable SelectedStates
{
    get
    {
        if (this._selectedState == null)
        {
            _selectedState = this.Session["_selectedState"] as Hashtable;
            if (_selectedState == null)
            {
                _selectedState = new Hashtable();
                this.Session["_selectedState"] = _selectedState;
            }
        }

        return this._selectedState;
    }
}
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
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
            this.ClearSelectedChildren(e.Item.ItemIndexHierarchical);
            this.ClearExpandedChildren(e.Item.ItemIndexHierarchical);
        }
    }
    //Is the item about to be selected 
    else if (e.CommandName == RadGrid.SelectCommandName)
    {
        //Save its unique index among all the items in the hierarchy
        this.SelectedStates[e.Item.ItemIndexHierarchical] = true;
    }
    //Is the item about to be deselected 
    else if (e.CommandName == RadGrid.DeselectCommandName)
    {
        this.SelectedStates.Remove(e.Item.ItemIndexHierarchical);
    }
}
protected void RadGrid1_DataBound(object sender, EventArgs e)
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

    //Select all items using our custom storage
    indexes = new string[this.SelectedStates.Keys.Count];
    this.SelectedStates.Keys.CopyTo(indexes, 0);

    arr = new ArrayList(indexes);
    //Sort to ensure that a parent item is selected before any of its children
    arr.Sort();

    foreach (string key in arr)
    {
        bool value = (bool)this.SelectedStates[key];
        if (value)
        {
            RadGrid1.Items[key].Selected = true;
        }
    }
}
protected void grdRebind_Click(object sender, EventArgs e)
{
    RadGrid1.Rebind();
}
````


   
   
