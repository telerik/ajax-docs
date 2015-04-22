---
title: Performing Batch Updates
page_title: Performing Batch Updates | RadGrid for ASP.NET AJAX Documentation
description: Performing Batch Updates
slug: grid/data-editing/update-records/performing-batch-updates
tags: performing,batch,updates
published: True
position: 2
---

# Performing Batch Updates



## 

A common scenario is to force several grid items in edit mode and then update them on single button click.

In the example below there is **UpdateAll** button in the grid command item template. The visitor can edit several grid items by pressing the edit button for each item(the Update button will be hidden and only the **Cancel** button will be present in edit mode). After editing the content of the grid items, a batch update is triggered when hitting the **UpdateAll** button in the command item template (the update is executed in the **ItemCommand** event handler when **e.CommandName = UpdateAll**). The idea is to iterate through all items in the **EditItems** collection of the grid and update their data with the new values in the grid data source.



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowMultiRowEdit="True" DataSourceID="SqlDataSource1"
	    OnItemCommand="RadGrid1_ItemCommand" OnItemDataBound="RadGrid1_ItemDataBound">
	    <MasterTableView DataKeyNames="CustomerID" AutoGenerateColumns="false" EditMode="InPlace"
	      CommandItemDisplay="TopAndBottom">
	      <Columns>
	        <telerik:GridBoundColumn ReadOnly="true" DataField="CustomerID" UniqueName="CustomerID"
	          HeaderText="CustomerID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="ContactName" UniqueName="ContactName" HeaderText="ContactName">
	        </telerik:GridBoundColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	      </Columns>
	      <CommandItemTemplate>
	        <asp:Button runat="server" ID="UpdateAll" Text="Update All" CommandName="UpdateAll" /></CommandItemTemplate>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 10 CustomerID, ContactName FROM Customers"
	    runat="server"></asp:SqlDataSource>
````
````C#
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == "UpdateAll")
	        {
	            foreach (GridEditableItem editedItem in RadGrid1.EditItems)
	            {
	                Hashtable newValues = new Hashtable();
	                //The GridTableView will fill the values from all editable columns in the hash
	                e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);
	                SqlDataSource1.UpdateCommand = String.Format("Update Customers SET ContactName='{0}' WHERE CustomerID='{1}'"
	                    , newValues["ContactName"], editedItem.GetDataKeyValue("CustomerID").ToString());
	                SqlDataSource1.Update();
	                editedItem.Edit = false;
	            }
	        }
	        RadGrid1.Rebind();
	    }
	
	    protected void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem && e.Item.IsInEditMode)
	        {
	            GridDataItem dataItem = e.Item as GridDataItem;
	            //Hides the Update button for each edit form
	            dataItem["EditCommandColumn"].Controls[0].Visible = false;
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        If (e.CommandName = "UpdateAll") Then
	            For Each editedItem As GridEditableItem In RadGrid1.EditItems
	                Dim newValues As Hashtable = New Hashtable
	                'The GridTableView will fill the values from all editable columns in the hash
	                e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
	                SqlDataSource1.UpdateCommand = String.Format("Update Customers SET ContactName='{0}' WHERE CustomerID='{1}'", newValues("ContactName"), editedItem.GetDataKeyValue("CustomerID").ToString())
	                SqlDataSource1.Update()
	                editedItem.Edit = False
	            Next
	        End If
	        RadGrid1.Rebind()
	    End Sub
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If (TypeOf e.Item Is GridDataItem AndAlso e.Item.IsInEditMode) Then
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	            'Hides the Update button for each edit form
	            dataItem("EditCommandColumn").Controls(0).Visible = False
	        End If
	    End Sub
````


**Client-side editing with batch update**One possible implementation is demonstrated on [this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/dataediting/clienteditbatchupdates/defaultcs.aspx) of RadGrid for ASP.NET AJAX (review the code implementation for details). The general idea is to:

* Wire the ondblclick event of the grid cells

* Togglethe visibility of the column editors and store the end user changes

* Push the altered content on the server and update the data source

Furthermore, a user-friendly confirm dialog will be displayed to prompt whether the updates should be propagated or discarded when you perform sorting, paging, etc. operation. The example uses **RadAjaxManager** instance to ajaxify the grid and perform **RadAjaxManagerClientObject.ajaxRequest(args)** calls. These calls are invoked in the **ProcessChanges** and **CancelChanges** client methods and the data in the source is refreshed inside the **OnAjaxRequest** handler on the server. The sample also features RadInputManager and RadFormDecorator which are used to filter the numeric entries and style the textboxes, checkboxes and dropdowns.

Another approach is presented in the paragraph below.

The following sample takes advantage of the editSelected() client side method, to put the control in edit mode for all items that were previously selected. Once the control is in edit mode, the user can enter data in the edit fields, and then after clicking a button in the command template, all the data will be updated from the code-behind section.



````ASPNET
	     <script type="text/javascript">
	         function ToggleEditSelected() {
	             var grid = $find("RadGrid1");
	             var masterTable = grid.get_masterTableView();
	             masterTable.editSelectedItems();
	         }
	     </script>
	      
	       <telerik:RadGrid AllowMultiRowEdit="true"
	        AllowMultiRowSelection="true"
	        ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" runat="server"
	           OnItemCommand="RadGrid1_ItemCommand" >
	           <MasterTableView DataKeyNames="CustomerID" CommandItemDisplay="Top">
	               <CommandItemTemplate>
	                   <a href="javascript:void(0);" onclick="ToggleEditSelected();">
	                       Edit selected</a>
	                   <asp:LinkButton ID="LinkButton1" CommandName="UpdateChanges" runat="server">Update all</asp:LinkButton>
	               </CommandItemTemplate>
	           </MasterTableView>
	           <ClientSettings>
	               <Selecting AllowRowSelect="True"></Selecting>
	           </ClientSettings>
	       </telerik:RadGrid>
````
````C#
	    private void InitializeComponent()
	    {
	        this.RadGrid1.NeedDataSource += new Telerik.Web.UI.GridNeedDataSourceEventHandler(this.RadGrid1_NeedDataSource);
	        this.RadGrid1.ItemCommand += new Telerik.Web.UI.GridCommandEventHandler(this.RadGrid1_ItemCommand);
	        this.Load += new System.EventHandler(this.Page_Load);
	    }
	    public DataTable CustomersTable
	    {
	
	        get
	        {
	            DataTable res = (DataTable)this.Session["CustomersTable"];
	            if (res == null)
	            {
	                res = DataSourceHelperCS.GetDataTable("SELECT TOP 5 [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [City]  FROM [Customers]");
	                this.Session["CustomersTable"] = res;
	            }
	
	            return res;
	        }
	    }
	
	    private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = this.CustomersTable;
	    }
	
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == "UpdateChanges")
	        {
	            if (RadGrid1.EditIndexes.Count == 0)
	            {
	                return;
	            }
	
	            foreach (GridDataItem item in RadGrid1.EditItems)
	            {
	                this.UpdateItem(item.EditFormItem);
	            }
	
	            e.Item.OwnerTableView.Rebind();
	            return;
	        }
	    }
	
	    private void UpdateItem(GridEditableItem editedItem)
	    {
	        DataTable customersTable = this.CustomersTable;
	
	        //Locate the changed row in the DataSource
	        DataRow[] changedRows = customersTable.Select("CustomerID = '" + editedItem.GetDataKeyValue("CustomerID").ToString() + "'");
	
	        if (changedRows.Length != 1)
	        {
	            return;
	        }
	
	        //Update new values
	        Hashtable newValues = new Hashtable();
	        //The GridTableView will fill the values from all editable columns in the hash
	        editedItem.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);
	
	        DataRow changedRow = changedRows[0];
	        changedRow.BeginEdit();
	        try
	        {
	            foreach (DictionaryEntry entry in newValues)
	            {
	                changedRow[(string)entry.Key] = entry.Value;
	            }
	            changedRow.EndEdit();
	        }
	        catch (Exception)
	        {
	            changedRow.CancelEdit();
	        }
	    }
	
````
````VB.NET
	    Public ReadOnly Property CustomersTable As DataTable
	        Get
	            Dim res As DataTable = CType(Me.Session("CustomersTable"), DataTable)
	            If res Is Nothing Then
	   res = DataSourceHelperVB.GetDataTable("SELECT TOP 5 [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [City", FROM(Customers), ")", this.Session[CustomersTableUnknown=res)
	            End If
	            Return res
	        End Get
	    End Property
	
	    Private Sub InitializeComponent()
	        AddHandler RadGrid1.NeedDataSource, AddressOf Me.RadGrid1_NeedDataSource
	        AddHandler RadGrid1.ItemCommand, AddressOf Me.RadGrid1_ItemCommand
	        AddHandler Load, AddressOf Me.Page_Load
	    End Sub
	
	    Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = Me.CustomersTable
	    End Sub
	
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        If (e.CommandName = "UpdateChanges") Then
	            If (RadGrid1.EditIndexes.Count = 0) Then
	                Return
	            End If
	            For Each item As GridDataItem In RadGrid1.EditItems
	                Me.UpdateItem(item.EditFormItem)
	            Next
	            e.Item.OwnerTableView.Rebind()
	            Return
	        End If
	    End Sub
	
	    Private Sub UpdateItem(ByVal editedItem As GridEditableItem)
	        Dim customersTable As DataTable = Me.CustomersTable
	        'Locate the changed row in the DataSource
	        Dim changedRows() As DataRow = customersTable.Select(("CustomerID = '" _
	            + (editedItem.GetDataKeyValue("CustomerID").ToString + "'")))
	        If (changedRows.Length <> 1) Then
	            Return
	        End If
	        'Update new values
	        Dim newValues As Hashtable = New Hashtable
	        'The GridTableView will fill the values from all editable columns in the hash
	        editedItem.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
	        Dim changedRow As DataRow = changedRows(0)
	        changedRow.BeginEdit()
	        Try
	            For Each entry As DictionaryEntry In newValues
	                changedRow(CType(entry.Key, String)) = entry.Value
	            Next
	            changedRow.EndEdit()
	        Catch Ex As Exception
	            changedRow.CancelEdit()
	        End Try
	    End Sub
````

