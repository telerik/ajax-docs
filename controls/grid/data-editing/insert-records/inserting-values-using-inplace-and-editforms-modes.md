---
title: Inserting Values Using InPlace and EditForms Modes
page_title: Inserting Values Using InPlace and EditForms Modes | UI for ASP.NET AJAX Documentation
description: Inserting Values Using InPlace and EditForms Modes
slug: grid/data-editing/insert-records/inserting-values-using-inplace-and-editforms-modes
tags: inserting,values,using,inplace,and,editforms,modes
published: True
position: 0
---

# Inserting Values Using InPlace and EditForms Modes



__Insert operation__Generally, there are three common techniques to insert grid row with __InPlace__ and __EditForms__ edit mode:

1. Enabling the automatic operations for the control - this is a codeless approach and requires zero lines of code (see [this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx) for more info).

1. Use the __ExtractValuesFromItem(dictonaryObject, editedItem)__ method. You can create an empty dictionary object and pass it as first parameter of the __ExtractValuesFromItem()__ method to extract the values from the inserted item (which is the second parameter to that method). The dictionary object will hold __key -> value__ pairs where each __key__ will be the __DataField__of the insertion field column and the corresponding __value__ will be the data entered by the user.

1. Fetch the data from each editor field individually through the auto-generated column editors. For this purpose you will need to iterate through the editable fields for the inserted grid row and modify the grid source on every loop.

The code below demonstrates the both approaches about how to perform the insert operation in Telerik RadGrid when the user presses the __Insert__ button from the insertion form (thus firing the __InsertCommand__ event).

>note Note that we use the ViewState property (named GridSource) to update the grid source.
>


````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <MasterTableView AutoGenerateColumns="False">
	      <Columns>
	        <telerik:GridBoundColumn HeaderText="OrderID" DataField="OrderID" ReadOnly="True"
	          UniqueName="OrderID" Display="False">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="EmployeeID" DataField="EmployeeID" UniqueName="EmployeeID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="OrderDate" DataField="OrderDate" UniqueName="OrderDate">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="ShipName" DataField="ShipName" UniqueName="ShipName">
	        </telerik:GridBoundColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:Label ID="Label1" Style="z-index: 102; left: 744px; position: absolute; top: 56px"
	    runat="server"></asp:Label>
````



## Example 1: Using ExtractValuesFromItem

>tabbedCode

````C#
	
	    private DataTable GridSource
	    {
	        get
	        {
	            Object obj = this.ViewState["_gds"];
	            if (obj != null)
	            {
	                return (DataTable)obj;
	            }
	            else
	            {
	                DataTable table = DataSourceHelperCS.GetDataTable("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders");
	                this.ViewState["_gds"] = table;
	                return table;
	            }
	        }
	    }
	    private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = this.GridSource;
	    }
	    private void RadGrid1_InsertCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        GridEditableItem editedItem = e.Item as GridEditableItem;
	        DataTable ordersTable = this.GridSource;
	
	        DataRow newRow = ordersTable.NewRow();
	
	        //As this example demonstrates only in-memory editing, a new primary key value should be generated
	        //This should not be applied when updating directly the database
	        DataRow[] allValues = ordersTable.Select("", "OrderID", DataViewRowState.CurrentRows);
	        if (allValues.Length > 0)
	        {
	            newRow["OrderID"] = (int)allValues[allValues.Length - 1]["OrderID"] + 1;
	        }
	        else
	        {
	            newRow["OrderID"] = 1; //the table is empty;
	        }
	
	        //Set new values
	        Hashtable newValues = new Hashtable();
	        //The GridTableView will fill the values from all editable columns in the hash
	        e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);
	
	        try
	        {
	            foreach (DictionaryEntry entry in newValues)
	            {
	                newRow[(string)entry.Key] = entry.Value;
	            }
	        }
	        catch (Exception ex)
	        {
	            Label1.Text += "Unable to insert into Orders. Reason: " + ex.Message;
	            e.Canceled = true;
	        }
	
	        ordersTable.Rows.Add(newRow);
	        //Code for updating the database ca go here...
	
	        Label1.Text += "Order " + newRow["OrderID"] + " inserted";
	
	    }
	
````
````VB.NET
	
	    Private ReadOnly Property GridSource As DataTable
	        Get
	            Dim obj As Object = Me.ViewState("_gds")
	            If (Not (obj) Is Nothing) Then
	                Return CType(obj, DataTable)
	            Else
	                Dim table As DataTable = DataSourceHelperVB.GetDataTable("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders")
	                Me.ViewState("_gds") = table
	                Return table
	            End If
	        End Get
	    End Property
	
	    Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = Me.GridSource
	    End Sub
	
	    Private Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	        Dim ordersTable As DataTable = Me.GridSource
	        Dim newRow As DataRow = ordersTable.NewRow
	        'As this example demonstrates only in-memory editing, a new primary key value should be generated
	        'This should not be applied when updating directly the database
	        Dim allValues() As DataRow = ordersTable.Select("", "OrderID", DataViewRowState.CurrentRows)
	        If (allValues.Length > 0) Then
	            newRow("OrderID") = (CType(allValues((allValues.Length - 1))("OrderID"), Integer) + 1)
	        Else
	            newRow("OrderID") = 1
	            'the table is empty;
	        End If
	        'Set new values
	        Dim newValues As Hashtable = New Hashtable
	        'The GridTableView will fill the values from all editable columns in the hash
	        e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
	        Try
	            For Each entry As DictionaryEntry In newValues
	                newRow(CType(entry.Key, String)) = entry.Value
	            Next
	        Catch ex As Exception
	            Label1.Text = (Label1.Text + ("Unable to insert into Orders. Reason: " + ex.Message))
	            e.Canceled = True
	        End Try
	        ordersTable.Rows.Add(newRow)
	        'Code for updating the database ca go here...
	        Label1.Text = (Label1.Text + ("Order " _
	           + (newRow("OrderID") + " inserted")))
	    End Sub
````
>end

## Example 2: Using the auto-generated column editors

>tabbedCode

````C#
	
	    private DataTable GridSource
	    {
	        get
	        {
	            Object obj = this.ViewState["_gds"];
	            if (obj != null)
	            {
	                return (DataTable)obj;
	            }
	            else
	            {
	                DataTable table = DataSourceHelperCS.GetDataTable("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders");
	                this.ViewState["_gds"] = table;
	                return table;
	            }
	        }
	    }
	    private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = this.GridSource;
	    }
	    private void RadGrid1_InsertCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        GridEditableItem editedItem = e.Item as GridEditableItem;
	        GridEditManager editMan = editedItem.EditManager;
	        DataTable ordersTable = this.GridSource;
	
	        DataRow newRow = ordersTable.NewRow();
	
	        //As this example demonstrates only in-memory editing, a new primary key value should be generated
	        //This should not be applied when updating directly the database
	        DataRow[] allValues = ordersTable.Select("", "OrderID", DataViewRowState.CurrentRows);
	        if (allValues.Length > 0)
	        {
	            newRow["OrderID"] = (int)allValues[allValues.Length - 1]["OrderID"] + 1;
	        }
	        else
	        {
	            newRow["OrderID"] = 1; //the table is empty;
	        }
	
	        //Set new values
	
	        foreach (GridColumn column in e.Item.OwnerTableView.RenderColumns)
	        {
	            if (column is IGridEditableColumn)
	            {
	                IGridEditableColumn editableCol = (column as IGridEditableColumn);
	                if (editableCol.IsEditable)
	                {
	                    IGridColumnEditor editor = editMan.GetColumnEditor(editableCol);
	
	                    string editorText = "unknown";
	                    object editorValue = null;
	
	                    if (editor is GridTextColumnEditor)
	                    {
	                        editorText = (editor as GridTextColumnEditor).Text;
	                        editorValue = (editor as GridTextColumnEditor).Text;
	                    }
	
	                    if (editor is GridBoolColumnEditor)
	                    {
	                        editorText = (editor as GridBoolColumnEditor).Value.ToString();
	                        editorValue = (editor as GridBoolColumnEditor).Value;
	                    }
	
	                    if (editor is GridDropDownColumnEditor)
	                    {
	                        editorText = (editor as GridDropDownColumnEditor).SelectedText + "; " +
	                         (editor as GridDropDownColumnEditor).SelectedValue;
	                        editorValue = (editor as GridDropDownColumnEditor).SelectedValue;
	                    }
	
	                    try
	                    {
	                        newRow[column.UniqueName] = editorValue;
	                    }
	                    catch (Exception ex)
	                    {
	                        Label1.Text += "Unable to insert into Orders. Reason: " + ex.Message;
	                        e.Canceled = true;
	                    }
	                }
	            }
	        }
	
	        ordersTable.Rows.Add(newRow);
	        this.GridSource.AcceptChanges();
	
	        //Code for updating the database ca go here...
	
	        Label1.Text += "Order " + newRow["OrderID"] + " inserted";
	
	    }
````
````VB.NET
	    Private ReadOnly Property GridSource As DataTable
	        Get
	            Dim obj As Object = Me.ViewState("_gds")
	            If (Not (obj) Is Nothing) Then
	                Return CType(obj, DataTable)
	            Else
	                Dim table As DataTable = DataSourceHelperVB.GetDataTable("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders")
	                Me.ViewState("_gds") = table
	                Return table
	            End If
	        End Get
	    End Property
	
	    Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	        RadGrid1.DataSource = Me.GridSource
	    End Sub
	
	    Private Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	        Dim ordersTable As DataTable = Me.GridSource
	        Dim newRow As DataRow = ordersTable.NewRow
	        'As this example demonstrates only in-memory editing, a new primary key value should be generated
	        'This should not be applied when updating directly the database
	        Dim allValues() As DataRow = ordersTable.Select("", "OrderID", DataViewRowState.CurrentRows)
	        If (allValues.Length > 0) Then
	            newRow("OrderID") = (CType(allValues((allValues.Length - 1))("OrderID"), Integer) + 1)
	        Else
	            newRow("OrderID") = 1
	            'the table is empty;
	        End If
	        'Set new values
	        Dim newValues As Hashtable = New Hashtable
	        'The GridTableView will fill the values from all editable columns in the hash
	        e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
	        Try
	            For Each entry As DictionaryEntry In newValues
	                newRow(CType(entry.Key, String)) = entry.Value
	            Next
	        Catch ex As Exception
	            Label1.Text = (Label1.Text + ("Unable to insert into Orders. Reason: " + ex.Message))
	            e.Canceled = True
	        End Try
	        ordersTable.Rows.Add(newRow)
	        'Code for updating the database ca go here...
	        Label1.Text = (Label1.Text + ("Order " _
	           + (newRow("OrderID") + " inserted")))
	    End Sub
````
>end

__Note__: You can also see the [ Accessing cells and rows]({%slug grid/rows/accessing-cells-and-rows%}) section for more details about insert dependance from the __Display/Visible/ReadOnly__ properties of grid columns.

## Setting predefined values for different column editors

In order to set predefined insert values for different column editors you can take advantage of the __DefaultInsertValue__ property exposed and supported by the following columns of the RadGrid control: __GridBoundColumn, GridCheckBoxColumn, GridHTMLEditorColumn, GridNumericColumn, GridDateTimeColumn, GridMaskedColumn, GridTemplateColumn__. The DefaultInsertValue property is of type System.String. When a grid item enters into insert mode the preset default insert value will be converted to the type specified by the DataType property of the column and will be bound to the column data field. If the developer chooses to set default insert values in the alternative way described below - the values in the DefaultInsertValue property for all columns will be disregarded.

Alternatively, you can use the [ API for controlling automatic operationsto achieve your goal.]({%slug grid/data-editing/api-for-controlling-the-automatic-operations%}) To set default values for __GridBoundColumn/GridDropDownColumn/GridCheckBoxColumn__/etc. field you can create __ListDictionary__ object and set these preset values using the columns __UniqueNames__ as keys.For __GridTemplateColumn__ fields, make sure that you specify the field to which you bind the control inside the template column as __key__ for the dictionary object (passed to the __InsertItem(newValues)__ method).

Below is a sample demonstration:

>tabbedCode

````ASPNET
	  <telerik:RadGrid ID="RadGrid2" runat="server">
	    <MasterTableView Width="100%" CommandItemDisplay="Top" DataSourceID="SqlDataSource1"
	      AutoGenerateColumns="False">
	      <Columns>
	        <telerik:GridTemplateColumn HeaderText="Check/Uncheck" UniqueName="BoolColumn">
	          <EditItemTemplate>
	            <asp:CheckBox ID="chkBoxEdit" runat="server" Checked='<%# Bind("Bool") %>' />
	          </EditItemTemplate>
	          <ItemTemplate>
	            <asp:CheckBox ID="chkBoxDefault" runat="server" Checked='<%# Eval("Bool") %>' />
	          </ItemTemplate>
	        </telerik:GridTemplateColumn>
	        <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" UniqueName="CompanyName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="ContactName" HeaderText="ContactName" UniqueName="ContactName">
	        </telerik:GridBoundColumn>
	        <telerik:GridTemplateColumn UniqueName="CountryColumn" DataField="Country">
	          <ItemTemplate>
	            <asp:Label ID="Label1" runat="server" Text='<%# Eval("Country") %>'></asp:Label>
	          </ItemTemplate>
	          <EditItemTemplate>
	            ContactTitle:
	            <asp:DropDownList ID="ddList1" runat="server" DataTextField="Country" DataValueField="Country"
	              DataSource='<%# LoadCountryNames()  %>' SelectedValue='<%# Bind("Country") %>'>
	            </asp:DropDownList>
	          </EditItemTemplate>
	        </telerik:GridTemplateColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	   <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	       SelectCommand="SELECT [CompanyName], [ContactName], [ContactTitle], [Country], [Bool] FROM [Customers]">
	   </asp:SqlDataSource>
````
````VB.NET
	
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid2.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            'cancel the default operation
	            e.Canceled = True
	
	            'Prepare an IDictionary with the predefined values
	  Dim newValues As System.Collections.Specialized.ListDictionary = New
	            System.Collections.Specialized.ListDictionary()
	            newValues("ContactName") = "default contact name"
	            newValues("CompanyName") = " default company name"
	
	            'set default value for the dropdown list inside the EditItemTemplate
	            newValues("Country") = "Germany"
	            'set default checked state for checkbox inside the EditItemTemplate
	            newValues("Bool") = False
	
	            'Insert the item and rebind
	            e.Item.OwnerTableView.InsertItem(newValues)
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            // cancel the default operation
	            e.Canceled = true;
	
	            //Prepare an IDictionary with the predefined values
	            System.Collections.Specialized.ListDictionary newValues = new System.Collections.Specialized.ListDictionary();
	            newValues["ContactName"] = "default contact name";
	            newValues["CompanyName"] = " default company name";
	
	            //set default value for the dropdown list inside the EditItemTemplate
	            newValues["Country"] = "Germany";
	
	            //set default checked state for the checkbox inside the EditItemTemplate
	            newValues["Bool"] = false;
	
	            //Insert the item and rebind
	            e.Item.OwnerTableView.InsertItem(newValues);
	
	        }
	    }
````
>end

The other option is to set __AppendDataBoundItems="true"__ for the dropdown list (residing in edit template of template column) and add __default empty item__ in the dropdown control to avoid exception generation on initial insert:

````ASPNET
	<telerik:GridTemplateColumn>
	  <ItemTemplate>
	     <%# Eval("ProductID") %>
	   </ItemTemplate>
	     <EditItemTemplate>
	     <asp:DropDownList ID="DropDownList1" AppendDataBoundItems="true" DataSourceID="SqlDataSource2"
	       DataTextField="ProductID" DataValueField="ProductID" SelectedValue='<%# Bind("ProductID") %>' runat="server">
	         <asp:ListItem Text="" Value="" />
	       </asp:DropDownList>
	     </EditItemTemplate>
	</telerik:GridTemplateColumn>
````



This is a codeless approach, however have in mind that this empty option will be displayed in the dropdown editor of an existing edited grid row as well.
