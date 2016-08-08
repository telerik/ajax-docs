---
title: Grid with TreeView and ComboBox editors
page_title: Grid with TreeView and ComboBox editors | RadGrid for ASP.NET AJAX Documentation
description: Grid with TreeView and ComboBox editors
slug: grid/how-to/data-editing/grid-with-treeview-and-combobox-editorss
previous_url: controls/grid/data-editing/how-to/grid-with-treeview-and-combobox-editors
tags: grid,with,treeview,and,combobox,editors
published: True
position: 18
---

# Grid with TreeView and ComboBox editors



[This online demo](http://demos.telerik.com/aspnet-ajax/controls/examples/integration/gridwithtreeviewcomboboxeditors/defaultcs.aspx?product=grid) illustrates how to implement treeview/combobox hybrid editor and dependent load-on-demand combobox editors in RadGrid for ASP.NET AJAX.

The first type editor is useful when you would like to visualize hierarchical treeview structure for easier navigation among the combobox options when editing cell values (if applicable).

The second scenario is preferred when one wants to reduce the options in a combobox editor based on the selection in another dropdown editor (using the integrated callback mechanism of the filtered combo), thus receiving some performance gains since only the combobox is refreshed as opposed to the entire grid.

![RadTreeView and RadComboBox editors in RadGrid](images/grid_treeview-combo-editors.PNG)

Examine the code implementation and the comments in the source for more details.

##



````JavaScript
<style type="text/css">
    div.RadComboBoxDropDown .rcbItem
    {
        margin: 0;
        padding: 0;
    }
</style>
 <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
    <script type="text/javascript">

        //stop the event bubbling
        function StopPropagation(e) {
            if (!e) {
                e = window.event;
            }

            e.cancelBubble = true;
        }

        //find the selected node in the treeview inside the combobox and scroll it into view
        function OnClientDropDownOpenedHandler(sender, eventArgs) {
            var tree = sender.get_items().getItem(0).findControl("RadTreeView1");
            var selectedNode = tree.get_selectedNode();

            if (selectedNode) {
                selectedNode.scrollIntoView();
            }
        }
        //when tree node is clicked, set the text and value for the item in the combobox and commit the changes
        function nodeClicking(sender, args) {

            //get the id of the employeesCombo in the edited row (passed from the server in the ItemDataBound event handler)
            var comboBox = $find(window['comboId']);
            var node = args.get_node();

            comboBox.set_text(node.get_text());

            comboBox.trackChanges();
            comboBox.get_items().getItem(0).set_text(node.get_text());
            comboBox.get_items().getItem(0).set_value(node.get_value());
            comboBox.commitChanges();

            comboBox.hideDropDown();

            // Call comboBox.attachDropDown if:
            // 1) The RadComboBox is inside an AJAX panel.
            // 2) The RadTreeView has a server-side event handler for the NodeClick event, i.e. it initiates a postback when clicking on a Node.
            // Otherwise the AJAX postback becomes a normal postback regardless of the outer AJAX panel.

            comboBox.attachDropDown();
        }
        function freightComboClientSelectedIndexChangedHandler(sender, eventArgs) {
            //get reference to the grid row DOM element
            var gridRow = sender.get_element().parentNode.parentNode;
            //locate the customers combobox in the same row using the $telerik.findControl method from the Telerik Client Static Library
            //note that the id of the combobox concatenates RCB_ + UniqueName value for the column, i.e. RCB_CustomerName in this particular case
            var customersCombo = $telerik.findControl(gridRow, "RCB_CustomerName");
            // this will fire the ItemsRequested server event and hook the OnClientItemsRequested client event of the
            // customers combobox passing the freight as a parameter to the first event
            customersCombo.add_itemsRequested(customersComboItemsRequested);
            customersCombo.requestItems(eventArgs.get_item().get_value(), false);
        }
        function customersComboItemsRequested(sender, eventArgs) {
            if (sender.get_items().get_count() > 0) {
                // pre-select the first item
                sender.findItemByText(sender.get_items().getItem(0).get_text()).select();
            }
            //detach the client items requested event as it not needed any more
            sender.remove_itemsRequested(customersComboItemsRequested);
        }
    </script>
</telerik:RadScriptBlock>
````
````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" EnableAJAX="true">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
                <telerik:AjaxUpdatedControl ControlID="lblMessage" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
<asp:Label ID="Label1" runat="server" EnableViewState="false" Font-Bold="true" Text="Orders List" />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" AutoGenerateColumns="false" PageSize="15" AllowPaging="true"
    AllowSorting="true" runat="server" DataSourceID="OrdersDataSource" AllowAutomaticUpdates="true"
    AllowAutomaticInserts="True" ShowStatusBar="true" OnItemDataBound="RadGrid1_ItemDataBound"
    OnUpdateCommand="RadGrid1_UpdateCommand" OnInsertCommand="RadGrid1_InsertCommand"
    OnItemCreated="RadGrid1_ItemCreated" onitemcommand="RadGrid1_ItemCommand">
    <MasterTableView DataKeyNames="OrderID" EditMode="InPlace" CommandItemDisplay="TopAndBottom"
        TableLayout="Fixed">
        <Columns>
            <telerik:GridBoundColumn UniqueName="OrderID" DataField="OrderID" HeaderText="OrderID"
                ReadOnly="true" />
            <telerik:GridDropDownColumn ListTextField="Freight" ListValueField="Freight" DataField="Freight"
                DataSourceID="ComboOrdersDataSource" HeaderText="Freight" UniqueName="Freight"
                AllowAutomaticLoadOnDemand="true" />
            <telerik:GridTemplateColumn UniqueName="LastName" HeaderText="Employee Name" SortExpression="LastName"
                ItemStyle-Width="400px">
                <ItemTemplate>
                    <%#DataBinder.Eval(Container.DataItem, "LastName")%>
                </ItemTemplate>
                <EditItemTemplate>
                    <!-- Show employees in the treeview -->
                    <telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" Width="180px"
                        ShowToggleImage="True" Style="vertical-align: middle;" OnClientDropDownOpened="OnClientDropDownOpenedHandler"
                        ExpandAnimation-Type="None" CollapseAnimation-Type="None">
                        <ItemTemplate>
                            <div id="div1" onclick="StopPropagation(event);">
                                <telerik:RadTreeView RenderMode="Lightweight" runat="server" ID="RadTreeView1" OnClientNodeClicking="nodeClicking"
                                    Height="140px" DataTextField="LastName" DataValueField="EmployeeID" DataFieldID="EmployeeID"
                                    DataFieldParentID="ReportsTo" DataSourceID="EmployeesDataSource" />
                            </div>
                        </ItemTemplate>
                        <Items>
                            <telerik:RadComboBoxItem Text="" />
                        </Items>
                    </telerik:RadComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridDropDownColumn ListTextField="ContactName" ListValueField="CustomerID"
                DataField="CustomerID" DataSourceID="CustomersDataSource" HeaderText="Customer Name"
                UniqueName="CustomerName" AllowAutomaticLoadOnDemand="true" />
            <telerik:GridEditCommandColumn ButtonType="ImageButton" HeaderStyle-Width="60px" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
<asp:Label ID="lblMessage" runat="server" EnableViewState="false" Font-Bold="true" />
<asp:SqlDataSource ID="OrdersDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT orders.[OrderID], orders.[EmployeeID], orders.[CustomerID], orders.[Freight],
                          employees.[EmployeeID], employees.[LastName]
                          FROM [Orders] AS orders
                          INNER JOIN [Employees] AS employees
                          ON orders.EmployeeID = employees.EmployeeID"
    InsertCommand="INSERT INTO [Orders] ([EmployeeID], [CustomerID],[Freight]) VALUES (@EmployeeID, @CustomerID, @Freight)"
    UpdateCommand="UPDATE [Orders] SET [EmployeeID] = @EmployeeID, [CustomerID] = @CustomerID, [Freight] = @Freight WHERE [OrderID] = @OrderID">
    <InsertParameters>
        <asp:Parameter Name="EmployeeID" Type="Int16" />
        <asp:Parameter Name="CustomerID" Type="String" />
        <asp:Parameter Name="Freight" Type="String" />
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="EmployeeID" Type="Int16" />
        <asp:Parameter Name="CustomerID" Type="String" />
        <asp:Parameter Name="Freight" Type="String" />
    </UpdateParameters>
</asp:SqlDataSource>
<asp:SqlDataSource ID="CustomersDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [CustomerID], [ContactName] FROM [Customers] Order By ContactName" />
<asp:SqlDataSource ID="ComboOrdersDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT DISTINCT [Freight] FROM [Orders] Order By Freight" />
<asp:SqlDataSource ID="EmployeesDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [EmployeeID], [LastName], [ReportsTo] FROM [Employees]" />
````
````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    //if a grid item is in edit mode, wire the ItemsRequested event of the customersCombo to filter the items in it based on the selection in the freight combo
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        RadComboBox freightCombo = (e.Item as GridEditableItem)["Freight"].Controls[0] as RadComboBox;

        if (Page.IsCallback)
        {
            RadComboBox customersCombo = (e.Item as GridEditableItem)["CustomerName"].Controls[0] as RadComboBox;
            customersCombo.ItemsRequested += new RadComboBoxItemsRequestedEventHandler(customersCombo_ItemsRequested);
        }
    }
}

protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode && (!e.Item.OwnerTableView.IsItemInserted))
    {
        //wire the OnClientSelectedIndexChanged event of the first LOD combo editor to initiate callback on item selection
        RadComboBox freightCombo = (e.Item as GridEditableItem)["Freight"].Controls[0] as RadComboBox;
        freightCombo.OnClientSelectedIndexChanged = "freightComboClientSelectedIndexChangedHandler";

        //set the selected value for the Employees combobox to match the value in the edited cell
        RadComboBox employeesCombo = (e.Item as GridEditableItem).FindControl("RadComboBox1") as RadComboBox;
        employeesCombo.Items[0].Text = DataBinder.Eval(e.Item.DataItem, "LastName").ToString();

        //set the selection in the treeview inside the combobox to match the value in the edited cell
        RadTreeView employeesTreeView = employeesCombo.Items[0].FindControl("RadTreeView1") as RadTreeView;
        employeesTreeView.FindNodeByText(DataBinder.Eval(e.Item.DataItem, "LastName").ToString()).Selected = true;
        //Expand all nodes to scroll the selected into view. Have in mind that load-on-demand is recommended with very large number of nodes in the treeview
        employeesTreeView.ExpandAllNodes();

        //register script block which holds the client id of the employeesComboBox. Will be used to reference the client object of the combobox in the RadTreeView's OnClientNodeClicking event handler
        RadScriptManager.RegisterClientScriptBlock(this.Page, typeof(Page), "employeesComboScript", "<script type='text/javascript'>window['comboId'] = '" + e.Item.FindControl("RadComboBox1").ClientID + "';</script>", false);

    }
    else if (e.Item is GridDataInsertItem)
    {
        //wire the OnClientSelectedIndexChanged event of the first LOD combo editor to initiate callback on item selection
        RadComboBox freightCombo = (e.Item as GridDataInsertItem)["Freight"].Controls[0] as RadComboBox;
        freightCombo.OnClientSelectedIndexChanged = "freightComboClientSelectedIndexChangedHandler";

        //register script block which holds the client id of the employeesComboBox. Will be used to reference the client object of the combobox in the RadTreeView's OnClientNodeClicking event handler
        RadScriptManager.RegisterClientScriptBlock(this.Page, typeof(Page), "employeesComboScript", "<script type='text/javascript'>window['comboId'] = '" + e.Item.FindControl("RadComboBox1").ClientID + "';</script>", false);
    }
}

protected void customersCombo_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    LoadFilteredCustomersManually(e.Text, sender as RadComboBox);
}

protected void LoadFilteredCustomersManually(string freight, RadComboBox customersCombo)
{
    //if the orderID value cannot be parsed as integer(i.e. auto LOD is triggered), exit the handler
    try
    {
        System.Double.Parse(freight);
    }
    catch
    {
        return;
    }

    SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
    connection.Open();

    //select customer name based on the orderID
    SqlCommand comm = new SqlCommand("SELECT CustomerID FROM [Orders] WHERE Freight=@Freight", connection);
    comm.Parameters.AddWithValue("@Freight", freight);

    string cid = comm.ExecuteScalar().ToString();

    comm = new SqlCommand("SELECT CustomerID, ContactName from [Customers] WHERE CustomerID = '"+ cid + "'", connection);
    SqlDataAdapter adapter = new SqlDataAdapter(comm);

    DataTable dt = new DataTable();
    adapter.Fill(dt);

    //populate the customers combo with the new set of items
    customersCombo.Items.Clear();

    foreach (DataRow row in dt.Rows)
    {
        customersCombo.Items.Add(new RadComboBoxItem(row["ContactName"].ToString(), row["CustomerID"].ToString()));
    }
    connection.Close();
}

protected void RadGrid1_UpdateCommand(object sender, GridCommandEventArgs e)
{
    string empId = (((e.Item as GridEditableItem).FindControl("RadComboBox1") as RadComboBox).Items[0].FindControl("RadTreeView1") as RadTreeView).SelectedNode.Value;

    //if the EmployeeID value is empty, cancel the update operation
    if(empId == string.Empty)
    {
        e.Canceled = true;
        SetMessage("Order cannot be updated. You must select an employee from the provided list");
    }
    else{
        OrdersDataSource.UpdateParameters["EmployeeID"].DefaultValue = empId;
    }
}

protected void RadGrid1_InsertCommand(object sender, GridCommandEventArgs e)
{
    //if the EmployeeID value is empty, cancel the insert operation
    if((((e.Item as GridEditableItem).FindControl("RadComboBox1") as RadComboBox).Items[0].FindControl("RadTreeView1") as RadTreeView).SelectedNode == null)
    {
        e.Canceled = true;
        SetMessage("Order cannot be inserted. You must select an employee from the provided list");
    }
    else
    {
        string empId = (((e.Item as GridEditableItem).FindControl("RadComboBox1") as RadComboBox).Items[0].FindControl("RadTreeView1") as RadTreeView).SelectedNode.Value;
        OrdersDataSource.InsertParameters["EmployeeID"].DefaultValue = empId;
    }
}

protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    //switch the edit/insert modes to ensure that only one operation will be processed at given time
    if (e.CommandName == RadGrid.EditCommandName)
    {
        e.Item.OwnerTableView.IsItemInserted = false;
    }
    else if (e.CommandName == RadGrid.InitInsertCommandName)
    {
        RadGrid1.EditIndexes.Clear();
    }

}

public void SetMessage(string message)
{
    lblMessage.Text = message;
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    'if a grid item is in edit mode, wire the ItemsRequested event of the customersCombo to filter the items in it based on the selection in the freight combo
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim freightCombo As RadComboBox = TryCast(TryCast(e.Item, GridEditableItem)("Freight").Controls(0), RadComboBox)

        If Page.IsCallback Then
            Dim customersCombo As RadComboBox = TryCast(TryCast(e.Item, GridEditableItem)("CustomerName").Controls(0), RadComboBox)
            AddHandler customersCombo.ItemsRequested, AddressOf customersCombo_ItemsRequested
        End If
    End If
End Sub

Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode AndAlso (Not e.Item.OwnerTableView.IsItemInserted) Then
        'wire the OnClientSelectedIndexChanged event of the first LOD combo editor to initiate callback on item selection
        Dim freightCombo As RadComboBox = TryCast(TryCast(e.Item, GridEditableItem)("Freight").Controls(0), RadComboBox)
        freightCombo.OnClientSelectedIndexChanged = "freightComboClientSelectedIndexChangedHandler"

        'set the selected value for the Employees combobox to match the value in the edited cell
        Dim employeesCombo As RadComboBox = TryCast(TryCast(e.Item, GridEditableItem).FindControl("RadComboBox1"), RadComboBox)
        employeesCombo.Items(0).Text = DataBinder.Eval(e.Item.DataItem, "LastName").ToString()

        'set the selection in the treeview inside the combobox to match the value in the edited cell
        Dim employeesTreeView As RadTreeView = TryCast(employeesCombo.Items(0).FindControl("RadTreeView1"), RadTreeView)
        employeesTreeView.FindNodeByText(DataBinder.Eval(e.Item.DataItem, "LastName").ToString()).Selected = True
        'Expand all nodes to scroll the selected into view. Have in mind that load-on-demand is recommended with very large number of nodes in the treeview
        employeesTreeView.ExpandAllNodes()

        'register script block which holds the client id of the employeesComboBox. Will be used to reference the client object of the combobox in the RadTreeView's OnClientNodeClicking event handler

        RadScriptManager.RegisterClientScriptBlock(Me.Page, GetType(Page), "employeesComboScript", "<script type='text/javascript'>window['comboId'] = '" + e.Item.FindControl("RadComboBox1").ClientID + "';</script>", False)
    ElseIf TypeOf e.Item Is GridDataInsertItem Then
        'wire the OnClientSelectedIndexChanged event of the first LOD combo editor to initiate callback on item selection
        Dim freightCombo As RadComboBox = TryCast(TryCast(e.Item, GridDataInsertItem)("Freight").Controls(0), RadComboBox)
        freightCombo.OnClientSelectedIndexChanged = "freightComboClientSelectedIndexChangedHandler"

        'register script block which holds the client id of the employeesComboBox. Will be used to reference the client object of the combobox in the RadTreeView's OnClientNodeClicking event handler
        RadScriptManager.RegisterClientScriptBlock(Me.Page, GetType(Page), "employeesComboScript", "<script type='text/javascript'>window['comboId'] = '" + e.Item.FindControl("RadComboBox1").ClientID + "';</script>", False)
    End If
End Sub

Private Sub customersCombo_ItemsRequested(ByVal sender As Object, ByVal e As RadComboBoxItemsRequestedEventArgs)
    LoadFilteredCustomersManually(e.Text, TryCast(sender, RadComboBox))
End Sub

Protected Sub LoadFilteredCustomersManually(ByVal freight As String, ByVal customersCombo As RadComboBox)
    'if the orderID value cannot be parsed as integer(i.e. auto LOD is triggered), exit the handler
    Try
        Dim fid As Double = System.[Double].Parse(freight)
    Catch
        Return
    End Try

    Dim connection As New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
    connection.Open()

    'select customer name based on the orderID
    Dim comm As New SqlCommand("SELECT CustomerID FROM [Orders] WHERE Freight=@Freight", connection)
    comm.Parameters.AddWithValue("@Freight", freight)

    Dim cid As String = comm.ExecuteScalar().ToString()

    comm = New SqlCommand("SELECT CustomerID, ContactName from [Customers] WHERE CustomerID = '" + cid + "'", connection)
    Dim adapter As New SqlDataAdapter(comm)

    Dim dt As New DataTable()
    adapter.Fill(dt)

    'populate the customers combo with the new set of items
    customersCombo.Items.Clear()

    For Each row As DataRow In dt.Rows
        customersCombo.Items.Add(New RadComboBoxItem(row("ContactName").ToString(), row("CustomerID").ToString()))
    Next
    connection.Close()
End Sub

Protected Sub RadGrid1_UpdateCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Dim empId As String = TryCast(TryCast(TryCast(e.Item, GridEditableItem).FindControl("RadComboBox1"), RadComboBox).Items(0).FindControl("RadTreeView1"), RadTreeView).SelectedNode.Value

    'if the EmployeeID value is empty, cancel the update operation
    If empId = String.Empty Then
        e.Canceled = True
        SetMessage("Order cannot be updated. You must select an employee from the provided list")
    Else
        OrdersDataSource.UpdateParameters("EmployeeID").DefaultValue = empId
    End If
End Sub

Protected Sub RadGrid1_InsertCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.InsertCommand
    'if the EmployeeID value is empty, cancel the insert operation
    If TryCast(TryCast(TryCast(e.Item, GridEditableItem).FindControl("RadComboBox1"), RadComboBox).Items(0).FindControl("RadTreeView1"), RadTreeView).SelectedNode Is Nothing Then
        e.Canceled = True
        SetMessage("Order cannot be inserted. You must select an employee from the provided list")
    Else
        Dim empId As String = TryCast(TryCast(TryCast(e.Item, GridEditableItem).FindControl("RadComboBox1"), RadComboBox).Items(0).FindControl("RadTreeView1"), RadTreeView).SelectedNode.Value
        OrdersDataSource.InsertParameters("EmployeeID").DefaultValue = empId
    End If
End Sub

Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    'switch the edit/insert modes to ensure that only one operation will be processed at given time
    If e.CommandName = RadGrid.EditCommandName Then
        e.Item.OwnerTableView.IsItemInserted = False
    ElseIf e.CommandName = RadGrid.InitInsertCommandName Then
        RadGrid1.EditIndexes.Clear()
    End If

End Sub

Public Sub SetMessage(ByVal message As String)
    lblMessage.Text = message
End Sub
````



