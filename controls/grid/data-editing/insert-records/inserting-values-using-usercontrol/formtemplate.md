---
title: Inserting Values Using UserControl/FormTemplate
page_title: Inserting Values Using UserControl/FormTemplate | UI for ASP.NET AJAX Documentation
description: Inserting Values Using UserControl/FormTemplate
slug: grid/data-editing/insert-records/inserting-values-using-usercontrol/formtemplate
tags: inserting,values,using,usercontrol/formtemplate
published: True
position: 1
---

# Inserting Values Using UserControl/FormTemplate



Inserting values through __WebUserControl Edit Form__ and __FormTemplate__ can be done in exactly the same way as updating values from these custom edit forms. The only difference is that you need to create a new record in the grid data source instead of updating an already existing one. To handle the actual insert operation when the user hits the __Insert__ button, you can hook the __InsertCommand__ event of Telerik RadGrid or the __ItemCommand__ event (checking whether __e.CommandName__ is __RadGrid.PerformInsertCommandName__).The forthcoming code snippets show how this can be done with user control custom edit form:

>tabbedCode

````C#
	    protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)
	    {
	        UserControl userControl = (UserControl)e.Item.FindControl(GridEditFormItem.EditFormUserControlID);
	
	        //Create new row in the DataSource
	        DataRow newRow = this.Employees.NewRow();
	
	        //Insert new values
	        Hashtable newValues = new Hashtable();
	
	        newValues["Country"] = (userControl.FindControl("TextBox7") as TextBox).Text;
	        newValues["City"] = (userControl.FindControl("TextBox8") as TextBox).Text;
	        newValues["Region"] = (userControl.FindControl("TextBox9") as TextBox).Text;
	        newValues["HomePhone"] = (userControl.FindControl("TextBox10") as TextBox).Text;
	        newValues["BirthDate"] = (userControl.FindControl("TextBox11") as TextBox).Text;
	        newValues["TitleOfCourtesy"] = (userControl.FindControl("ddlTOC") as DropDownList).SelectedItem.Value;
	
	        newValues["Notes"] = (userControl.FindControl("TextBox1") as TextBox).Text;
	        newValues["Address"] = (userControl.FindControl("TextBox6") as TextBox).Text;
	        newValues["FirstName"] = (userControl.FindControl("TextBox2") as TextBox).Text;
	        newValues["LastName"] = (userControl.FindControl("TextBox3") as TextBox).Text;
	        newValues["HireDate"] = (userControl.FindControl("Textbox5") as TextBox).Text;
	        newValues["Title"] = (userControl.FindControl("TextBox4") as TextBox).Text;
	
	        //make sure that unique primary key value is generated for the inserted row
	        newValues["EmployeeID"] = (int)this.Employees.Rows[this.Employees.Rows.Count - 1]["EmployeeID"] + 1;
	        try
	        {
	            foreach (DictionaryEntry entry in newValues)
	            {
	                newRow[(string)entry.Key] = entry.Value;
	            }
	            this.Employees.Rows.Add(newRow);
	            this.Employees.AcceptChanges();
	        }
	        catch (Exception ex)
	        {
	            RadGrid1.Controls.Add(new LiteralControl("Unable to update/insert Employees. Reason: " + ex.Message));
	            e.Canceled = true;
	        }
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.InsertCommand
	
	        Dim userControl As UserControl = CType(e.Item.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
	
	        'Prepare new row to add it in the DataSource
	        Dim newRow As DataRow = Me.Employees.NewRow
	
	        'Insert new values
	        Dim newValues As Hashtable = New Hashtable
	
	        newValues("Country") = CType(userControl.FindControl("TextBox7"), TextBox).Text
	        newValues("City") = CType(userControl.FindControl("TextBox8"), TextBox).Text
	        newValues("Region") = CType(userControl.FindControl("TextBox9"), TextBox).Text
	        newValues("HomePhone") = CType(userControl.FindControl("TextBox10"), TextBox).Text
	        newValues("BirthDate") = CType(userControl.FindControl("TextBox11"), TextBox).Text
	        newValues("TitleOfCourtesy") = CType(userControl.FindControl("ddlTOC"), DropDownList).SelectedItem.Value
	
	        newValues("Notes") = CType(userControl.FindControl("TextBox1"), TextBox).Text
	        newValues("Address") = CType(userControl.FindControl("TextBox6"), TextBox).Text
	        newValues("FirstName") = CType(userControl.FindControl("TextBox2"), TextBox).Text
	        newValues("LastName") = CType(userControl.FindControl("TextBox3"), TextBox).Text
	        newValues("HireDate") = CType(userControl.FindControl("Textbox5"), TextBox).Text
	        newValues("Title") = CType(userControl.FindControl("TextBox4"), TextBox).Text
	
	        'make sure that unique primary key value is generated for the inserted row
	        newValues("EmployeeID") = (CType(Me.Employees.Rows((Me.Employees.Rows.Count - 1))("EmployeeID"), Integer) + 1)
	        Try
	            For Each entry As DictionaryEntry In newValues
	                newRow(CType(entry.Key, String)) = entry.Value
	            Next
	            Me.Employees.Rows.Add(newRow)
	            Me.Employees.AcceptChanges()
	        Catch ex As Exception
	            RadGrid1.Controls.Add(New LiteralControl(("Unable to update/insert Employees. Reason: " + ex.Message)))
	            e.Canceled = True
	        End Try
	    End Sub
````
>end

and with form template custom edit form (note that with form template you may prefer the [codeless approach](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx) by enabling the [automatic operations](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx) supported by Telerik RadGrid):

>tabbedCode

````C#
	
	    private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.PerformInsertCommandName)
	        {
	            GridEditableItem editedItem = e.Item as GridEditableItem;
	
	            //Create new row in the DataSource
	            DataRow newRow = this.Employees.NewRow();
	
	            //Insert new values
	            Hashtable newValues = new Hashtable();
	
	            newValues["Country"] = (editedItem.FindControl("TextBox7") as TextBox).Text;
	            newValues["City"] = (editedItem.FindControl("TextBox8") as TextBox).Text;
	            newValues["Region"] = (editedItem.FindControl("TextBox9") as TextBox).Text;
	            newValues["HomePhone"] = (editedItem.FindControl("TextBox10") as TextBox).Text;
	            newValues["BirthDate"] = (editedItem.FindControl("TextBox11") as TextBox).Text;
	            newValues["TitleOfCourtesy"] = (editedItem.FindControl("ddlTOC") as DropDownList).SelectedItem.Value;
	
	            newValues["Notes"] = (editedItem.FindControl("TextBox1") as TextBox).Text;
	            newValues["Address"] = (editedItem.FindControl("TextBox6") as TextBox).Text;
	            newValues["FirstName"] = (editedItem.FindControl("TextBox2") as TextBox).Text;
	            newValues["LastName"] = (editedItem.FindControl("TextBox3") as TextBox).Text;
	            newValues["HireDate"] = (editedItem.FindControl("Textbox5") as TextBox).Text;
	            newValues["Title"] = (editedItem.FindControl("TextBox4") as TextBox).Text;
	
	            //make sure that unique primary key value is generated for the inserted row
	            newValues["EmployeeID"] = (int)this.Employees.Rows[this.Employees.Rows.Count - 1]["EmployeeID"] + 1;
	            try
	            {
	                foreach (DictionaryEntry entry in newValues)
	                {
	                    newRow[(string)entry.Key] = entry.Value;
	                }
	                this.Employees.Rows.Add(newRow);
	                this.Employees.AcceptChanges();
	            }
	            catch (Exception ex)
	            {
	                RadGrid1.Controls.Add(new LiteralControl("Unable to update/insert Employees. Reason: " + ex.Message));
	                e.Canceled = true;
	            }
	        }
	    }
	
````
````VB.NET
	    Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As WebControls.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.PerformInsertCommandName Then
	
	            Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	
	            'Create new row in the DataSource
	            Dim newRow As DataRow = Me.Employees.NewRow
	            Dim newValues As Hashtable = New Hashtable
	
	            'Insert new values
	            newValues("Country") = CType(editedItem.FindControl("TextBox7"), TextBox).Text
	            newValues("City") = CType(editedItem.FindControl("TextBox8"), TextBox).Text
	            newValues("Region") = CType(editedItem.FindControl("TextBox9"), TextBox).Text
	            newValues("HomePhone") = CType(editedItem.FindControl("TextBox10"), TextBox).Text
	            newValues("BirthDate") = CType(editedItem.FindControl("TextBox11"), TextBox).Text
	            newValues("TitleOfCourtesy") = CType(editedItem.FindControl("ddlTOC"), DropDownList).SelectedItem.Value
	
	            newValues("Notes") = CType(editedItem.FindControl("TextBox1"), TextBox).Text
	            newValues("Address") = CType(editedItem.FindControl("TextBox6"), TextBox).Text
	            newValues("FirstName") = CType(editedItem.FindControl("TextBox2"), TextBox).Text
	            newValues("LastName") = CType(editedItem.FindControl("TextBox3"), TextBox).Text
	            newValues("HireDate") = CType(editedItem.FindControl("Textbox5"), TextBox).Text
	            newValues("Title") = CType(editedItem.FindControl("TextBox4"), TextBox).Text
	
	            'make sure that unique primary key value is generated for the inserted row
	            newValues("EmployeeID") = (CType(Me.Employees.Rows((Me.Employees.Rows.Count - 1))("EmployeeID"), Integer) + 1)
	            Try
	                Dim entry As DictionaryEntry
	                For Each entry In newValues
	                    newRow(CType(entry.Key, String)) = entry.Value
	                Next
	                Me.Employees.Rows.Add(newRow)
	                Me.Employees.AcceptChanges()
	            Catch ex As Exception
	                RadGrid1.Controls.Add(New LiteralControl(("Unable to update/insert Employees. Reason: " + ex.Message)))
	                e.Canceled = True
	            End Try
	
	        End If
	    End Sub
````
>end

Additionally, review the online demos linked below to see the approach in real-life example:

[User control custom edit form](http://demos.telerik.com/aspnet-ajax/grid/examples/dataediting/usercontroleditform/defaultcs.aspx)

[Form template custom edit form](http://demos.telerik.com/aspnet-ajax/grid/examples/dataediting/templateformupdate/defaultcs.aspx)

## Important detail when inserting with WebUserControl as edit form

If you use WebUserControl as edit form in Telerik RadGrid and populate the values inside the user control with __DataItem__ property (defined in the code-behind of this user control), you have to make sure that this __DataItem__ property is of type Object. Thus the automatic insert operation (when clicking Add new record from the link button inside the CommandItem) will be performed as expected.

>tabbedCode

````C#
	
	    public object DataItem
	    {
	        get
	        {
	            return this._dataItem;
	        }
	        set
	        {
	            this._dataItem = value;
	        }
	    }
	
````
````VB.NET
	    Public Property DataItem() As Object
	        Get
	            Return Me._dataItem
	        End Get
	        Set(ByVal Value As Object)
	            Me._dataItem = Value
	        End Set
	    End Property
````
>end

## Setting predefined values for controls inside user control on item insertion

When you want to access controls inside the currently inserted item, having user control as an edit form in Telerik RadGrid, you should do the following:

1. Cancel the default action if __e.CommandName__ is __RadGrid.InitInsertCommandName__;

1. Insert the new item and rebind the grid;

1. Obtain reference to the newly inserted item using the __GetInsertItem()__ method for the respective GridTableView;

1. Locate the respective control inside the user control calling the __FindControl()__ method of this user control.

Here is an example which will change the text for TextBox with __ID txtEmployeeID__ inside insertion form user control of Telerik RadGrid:

>tabbedCode

````C#
	
	    private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            e.Canceled = true;
	            e.Item.OwnerTableView.InsertItem();
	
	            GridEditableItem insertedItem = e.Item.OwnerTableView.GetInsertItem();
	            String MyUserControlId = GridEditFormItem.EditFormUserControlID;
	            UserControl MyUserControl = insertedItem.FindControl(MyUserControlId) as UserControl;
	            TextBox box = MyUserControl.FindControl("txtEmployeeID") as TextBox;
	            box.Text = "11";
	        }
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            e.Canceled = True
	            e.Item.OwnerTableView.InsertItem()
	
	            Dim insertedItem As GridEditableItem = e.Item.OwnerTableView.GetInsertItem()
	            Dim MyUserControlId As String = GridEditFormItem.EditFormUserControlID
	            Dim MyUserControl As UserControl = insertedItem.FindControl(MyUserControlId)
	            Dim box As TextBox = CType(MyUserControl.FindControl("txtEmployeeID"), TextBox)
	            box.Text = "11"
	        End If
	    End Sub
````
>end

## Setting predefined values for controls inside FormTemplate on item insertion

When you want to access controls inside the currently inserted item, having FormTemplate as an edit form in Telerik RadGrid, you should do the following:

1. Cancel the default action if __e.CommandName__ is __RadGrid.InitInsertCommandName__;

1. Insert the new item and rebind the grid;

1. Obtain reference to the newly inserted item using the __GetInsertItem()__ method for the respective GridTableView;

1. Locate the respective control inside the FormTemplate calling the __FindControl()__ method of the corresponding __GridEditableItem__.

Here is an example which will change the text for TextBox with __ID txtEmployeeID__ inside insertion form user control of Telerik RadGrid:

>tabbedCode

````C#
	    private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            e.Canceled = true;
	            e.Item.OwnerTableView.InsertItem();
	
	            GridEditableItem insertedItem = e.Item.OwnerTableView.GetInsertItem();
	            TextBox box = insertedItem.FindControl("txtEmployeeID") as TextBox;
	            box.Text = "11";
	        }
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            e.Canceled = True
	            e.Item.OwnerTableView.InsertItem()
	
	            Dim insertedItem As GridEditableItem = e.Item.OwnerTableView.GetInsertItem()
	            Dim box As TextBox = CType(insertedItem.FindControl("txtEmployeeID"), TextBox)
	            box.Text = "11"
	        End If
	    End Sub
````
>end

When you have dropdown list/checkbox in the grid make sure that you specify the field to which you bind the control inside the form template as __key__ for the dictionary object (passed to the __InsertItem(newValues)__ method). For example:

>tabbedCode

````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            e.Canceled = True
	            'Prepare an IDictionary with the predefined values
	            Dim newValues As System.Collections.Specialized.ListDictionary = New System.Collections.Specialized.ListDictionary()
	
	            'set initial selection for the dropdown list on init insert
	            newValues("Country") = "Germany"
	
	            'set initial checked state for the checkbox on init insert
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

The other option is to set __AppendDataBoundItems="true"__ for a dropdown list (residing in form template custom edit form) and add __default empty item__ in the dropdown control to avoid exception generation on initial insert:

````ASPNET
	  <EditFormSettings EditFormType="Template">
	  <FormTemplate>
	       -------------
	        <asp:DropDownList ID="DropDownList1" AppendDataBoundItems="true" DataSourceID="AccessDataSource2"
	        DataTextField="ProductID" DataValueField="ProductID" SelectedValue='<%# Bind("ProductID") %>' runat="server">
	          <asp:ListItem Text="" Value="" />
	        </asp:DropDownList>
	      --------------
	  </FormTemplate>
	</EditFormSettings>
````



This is a codeless approach, however have in mind that this empty option will be displayed in the dropdown editor of an existing edited grid row as well.
