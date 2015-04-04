---
title: Using FormTemplate/UserControl
page_title: Using FormTemplate/UserControl | UI for ASP.NET AJAX Documentation
description: Using FormTemplate/UserControl
slug: treelist/data-editing/updating-records/using-formtemplate/usercontrol
tags: using,formtemplate/usercontrol
published: True
position: 1
---

# Using FormTemplate/UserControl



This article will introduce you to how you can proceed when updating values in RadTreeList using FormTemplate and WebUserControl edit forms. Generally, the approach is the same as when an insert operation takes place - you need to get hold of the respective edit form and then use theFindControl(controlID) method to access the controls used for editing values.

## Updating values using FormTemplate

Once the __UpdateCommand__ event of RadTreeList is fired, you can access the __TreeListEditFormItem__ through the event arguments (e.Item).Now you only need to use the __FindControl(controlId)__ method and extract the values from the respective controls.

>tabbedCode

````ASPNET
	        <telerik:RadTreeList ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	                AutoGenerateColumns="false" DataSourceID="SqlDataSource1" OnUpdateCommand="RadTreeList1_UpdateCommand">
	                <Columns>
	                    <telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID"
	                        ReadOnly="true" />
	                    <telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName" />
	                    <telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName" />
	                    <telerik:TreeListBoundColumn DataField="HomePhone" HeaderText="HomePhone" UniqueName="HomePhone" />
	                    <telerik:TreeListDateTimeColumn DataField="HireDate" HeaderText="HireDate" UniqueName="HireDate" />
	                    <telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" UniqueName="ReportsTo" ReadOnly="true" />
	                    <telerik:TreeListEditCommandColumn UniqueName="EditColumn" />
	                </Columns>
	                <EditFormSettings EditFormType="Template">
	                    <FormTemplate>
	                        <table>
	                            <tr>
	                                <td>
	                                    FirstName:
	                                </td>
	                                <td>
	                                    <asp:TextBox ID="TextBox1" Text='<%# Bind("FirstName") %>' runat="server">
	                                    </asp:TextBox>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    Last Name:
	                                </td>
	                                <td>
	                                    <asp:TextBox ID="TextBox2" Text='<%# Bind("LastName") %>' runat="server">
	                                    </asp:TextBox>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    Home Phone:
	                                </td>
	                                <td>
	                                    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" SelectionOnFocus="SelectAll"
	                                        TextWithLiterals='<%# Bind("HomePhone") %>'  Mask="(###) ###-####">
	                                    </telerik:RadMaskedTextBox>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    Hire Date:
	                                </td>
	                                <td>
	                                    <telerik:RadDatePicker ID="RadDatePicker1" DbSelectedDate='<%# Bind("HireDate") %>'
	                                        runat="server">
	                                    </telerik:RadDatePicker>
	                                </td>
	                            </tr>
	                        </table>
	                        <asp:Button ID="btnUpdate" Text="Update" runat="server" CommandName="Update">
	                        </asp:Button>&nbsp;
	                        <asp:Button ID="btnCancel" Text="Cancel" runat="server" CausesValidation="False"
	                            CommandName="Cancel"></asp:Button>
	                    </FormTemplate>
	                </EditFormSettings>
	            </telerik:RadTreeList>
````
````C#
	    protected void RadTreeList1_UpdateCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
	    {
	        //Canceling out the automatic datasource operation (needed if you use a datasource control)
	        e.Canceled = true;
	
	        //Accessing the TreeListEditFormItem and the DataKeyValue of the edited row
	        TreeListEditFormItem editedItem = (e.Item as TreeListEditFormItem);
	        string dataKeyValue = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString();
	
	        //Extracting the values from the edit form
	        string firstName = (editedItem.FindControl("TextBox1") as TextBox).Text;
	        string lastName = (editedItem.FindControl("TextBox2") as TextBox).Text;
	        string homePhone = (editedItem.FindControl("RadMaskedTextBox1") as RadMaskedTextBox).TextWithLiterals;
	        DateTime? hireDate = (editedItem.FindControl("RadDatePicker1") as RadDatePicker).SelectedDate;
	
	        //Updating logic follows, this part depends on your own custom way of performing CRUD operations
	        SqlDataSource1.UpdateParameters["EmployeeID"].DefaultValue = dataKeyValue;
	        SqlDataSource1.UpdateParameters["LastName"].DefaultValue = lastName;
	        SqlDataSource1.UpdateParameters["FirstName"].DefaultValue = firstName;
	        SqlDataSource1.UpdateParameters["HomePhone"].DefaultValue = homePhone;
	        SqlDataSource1.UpdateParameters["HireDate"].DefaultValue = hireDate.ToString();
	        SqlDataSource1.Update();
	
	        //Closing the edit form and rebinding the treelist control
	        RadTreeList1.EditIndexes.Clear();
	        RadTreeList1.Rebind();
	    }
````
````VB.NET
	    Protected Sub RadTreeList1_UpdateCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs)
	        'Canceling out the automatic datasource operation (needed if you use a datasource control)
	        e.Canceled = True
	
	        'Accessing the TreeListEditFormItem and the DataKeyValue of the edited row
	        Dim editedItem As TreeListEditFormItem = TryCast(e.Item, TreeListEditFormItem)
	        Dim dataKeyValue As String = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString()
	
	        'Extracting the values from the edit form
	        Dim firstName As String = TryCast(editedItem.FindControl("TextBox1"), TextBox).Text
	        Dim lastName As String = TryCast(editedItem.FindControl("TextBox2"), TextBox).Text
	        Dim homePhone As String = TryCast(editedItem.FindControl("RadMaskedTextBox1"), RadMaskedTextBox).TextWithLiterals
	        Dim hireDate As System.Nullable(Of DateTime) = TryCast(editedItem.FindControl("RadDatePicker1"), RadDatePicker).SelectedDate
	
	        'Updating logic follows, this part depends on your own custom way of performing CRUD operations
	        SqlDataSource1.UpdateParameters("EmployeeID").DefaultValue = dataKeyValue
	        SqlDataSource1.UpdateParameters("LastName").DefaultValue = lastName
	        SqlDataSource1.UpdateParameters("FirstName").DefaultValue = firstName
	        SqlDataSource1.UpdateParameters("HomePhone").DefaultValue = homePhone
	        SqlDataSource1.UpdateParameters("HireDate").DefaultValue = hireDate.ToString()
	        SqlDataSource1.Update()
	
	        'Closing the edit form and rebinding the treelist control
	        RadTreeList1.EditIndexes.Clear()
	        RadTreeList1.Rebind()
	    End Sub
````
>end

## Updating values using WebUserControl

This is also identical with inserting values using a WebUserControl. Once you get a reference to the user control, the FindControl(controlId) method comes to help.Here follows an example of how you can implement the approach for manual extraction of values.

>tabbedCode

````ASPNET
	        <telerik:RadTreeList ID="RadTreeList2" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	        AutoGenerateColumns="false" EditMode="EditForms" DataSourceID="SqlDataSource1" OnUpdateCommand="RadTreeList2_UpdateCommand">
	            <Columns>
	                <telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID"
	                    ReadOnly="true" />
	                <telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName" />
	                <telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName" />
	                <telerik:TreeListBoundColumn DataField="HomePhone" HeaderText="HomePhone" UniqueName="HomePhone" />
	                <telerik:TreeListDateTimeColumn DataField="HireDate" HeaderText="HireDate" UniqueName="HireDate" />
	                <telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" UniqueName="ReportsTo" ReadOnly="true" />
	                <telerik:TreeListEditCommandColumn UniqueName="EditColumn" />
	            </Columns>
	            <EditFormSettings EditFormType="WebUserControl" UserControlPath="~/WebUserControl.ascx">
	            </EditFormSettings>
	        </telerik:RadTreeList>
````
````C#
	    protected void RadTreeList2_UpdateCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
	    {
	
	        //Canceling out the automatic datasource operation (needed if you use a datasource control)
	        e.Canceled = true;
	
	        //Accessing the TreeListEditFormItem and the DataKeyValue of the edited row
	        TreeListEditFormItem editedItem = (e.Item as TreeListEditFormItem);
	        string dataKeyValue = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString();
	
	        //Getting reference to the user control and extracting the values in it
	        UserControl userControl = (UserControl)e.Item.FindControl(GridEditFormItem.EditFormUserControlID);
	        string firstName = (userControl.FindControl("TextBox1") as TextBox).Text;
	        string lastName = (userControl.FindControl("TextBox2") as TextBox).Text;
	        string homePhone = (userControl.FindControl("RadMaskedTextBox1") as RadMaskedTextBox).TextWithLiterals;
	        DateTime? hireDate = (userControl.FindControl("RadDatePicker1") as RadDatePicker).SelectedDate;
	        string reportsTo = (userControl.FindControl("TextBox3") as TextBox).Text;
	
	        //Updating logic follows, this part depends on your own custom way of performing CRUD operations
	        SqlDataSource1.UpdateParameters["EmployeeID"].DefaultValue = dataKeyValue;
	        SqlDataSource1.UpdateParameters["LastName"].DefaultValue = lastName;
	        SqlDataSource1.UpdateParameters["FirstName"].DefaultValue = firstName;
	        SqlDataSource1.UpdateParameters["HomePhone"].DefaultValue = homePhone;
	        SqlDataSource1.UpdateParameters["HireDate"].DefaultValue = hireDate.ToString();
	        SqlDataSource1.UpdateParameters["ReportsTo"].DefaultValue = reportsTo;
	        SqlDataSource1.Update();
	
	        //Closing the edit form and rebinding the treelist control
	        RadTreeList2.EditIndexes.Clear();
	        RadTreeList2.Rebind();
	    }
````
````VB.NET
	    Protected Sub RadTreeList2_UpdateCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs)
	        'Canceling out the automatic datasource operation (needed if you use a datasource control)
	        e.Canceled = True
	
	        'Accessing the TreeListEditFormItem and the DataKeyValue of the edited row
	        Dim editedItem As TreeListEditFormItem = CType(e.Item, TreeListEditFormItem)
	        Dim dataKeyValue As String = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString()
	
	        'Getting reference to the user control and extracting the values in it
	        Dim userControl As UserControl = DirectCast(e.Item.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
	        Dim firstName As String = CType(userControl.FindControl("TextBox1"), TextBox).Text
	        Dim lastName As String = CType(userControl.FindControl("TextBox2"), TextBox).Text
	        Dim homePhone As String = CType(userControl.FindControl("RadMaskedTextBox1"), RadMaskedTextBox).TextWithLiterals
	        Dim hireDate As System.Nullable(Of DateTime) = CType(userControl.FindControl("RadDatePicker1"), RadDatePicker).SelectedDate
	        Dim reportsTo As String = CType(userControl.FindControl("TextBox3"), TextBox).Text
	
	        'Updating logic follows, this part depends on your own custom way of performing CRUD operations
	        SqlDataSource1.UpdateParameters("EmployeeID").DefaultValue = dataKeyValue
	        SqlDataSource1.UpdateParameters("LastName").DefaultValue = lastName
	        SqlDataSource1.UpdateParameters("FirstName").DefaultValue = firstName
	        SqlDataSource1.UpdateParameters("HomePhone").DefaultValue = homePhone
	        SqlDataSource1.UpdateParameters("HireDate").DefaultValue = hireDate.ToString()
	        SqlDataSource1.UpdateParameters("ReportsTo").DefaultValue = reportsTo
	        SqlDataSource1.Update()
	
	        'Closing the edit form and rebinding the treelist control
	        RadTreeList1.EditIndexes.Clear()
	        RadTreeList1.Rebind()
	    End Sub
````
>end

Again, you can configure the user control to implement the IBindable interface in order for the RadTreeList to be able to extract values:

>tabbedCode

````ASPNET
	<table>
	    <tr>
	        <td>
	            FirstName:
	        </td>
	        <td>
	            <asp:TextBox ID="TextBox1" Text='<%# DataBinder.Eval( Container, "DataItem.FirstName") %>'
	                runat="server">
	            </asp:TextBox>
	        </td>
	    </tr>
	    <tr>
	        <td>
	            Last Name:
	        </td>
	        <td>
	            <asp:TextBox ID="TextBox2" Text='<%# DataBinder.Eval( Container, "DataItem.LastName") %>'
	                runat="server">
	            </asp:TextBox>
	        </td>
	    </tr>
	    <tr>
	        <td>
	            Home Phone:
	        </td>
	        <td>
	            <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" SelectionOnFocus="SelectAll"
	                TextWithLiterals='<%# DataBinder.Eval( Container, "DataItem.HomePhone") %>' Mask="(###) ###-####">
	            </telerik:RadMaskedTextBox>
	        </td>
	    </tr>
	    <tr>
	        <td>
	            Hire Date:
	        </td>
	        <td>
	            <telerik:RadDatePicker ID="RadDatePicker1" DbSelectedDate='<%# DataBinder.Eval( Container, "DataItem.HireDate") %>'
	                runat="server">
	            </telerik:RadDatePicker>
	        </td>
	    </tr>
	</table>
	<asp:Button ID="btnUpdate" Text='<%# (Container is TreeListEditFormInsertItem) ? "Insert" : "Update" %>'
	    runat="server" CommandName='<%# (Container is TreeListEditFormInsertItem) ? "PerformInsert" : "Update" %>'>
	</asp:Button>&nbsp;
	<asp:Button ID="btnCancel" Text="Cancel" runat="server" CausesValidation="False"
	    CommandName="Cancel"></asp:Button>
````
````C#
	public partial class WebUserControl : System.Web.UI.UserControl, IBindableControl
	{
	    public void ExtractValues(IOrderedDictionary dictionary)
	   {
	       //retrives all RadInputs and add thier values to the dictionary
	       foreach (var input in Controls.OfType<RadInputControl>().Select(control => new {FieldName = control.ID, FieldValue = control.Text}))
	       {
	           dictionary.Add(input.FieldName, input.FieldValue);
	       }
	   }
	   public object DataItem { get; set; }
	}
````
````VB.NET
	Partial Class WebUserControlVB
	    Inherits System.Web.UI.UserControl
	    Implements IBindableControl
	
	    Public Sub ExtractValues(ByVal dictionary As System.Collections.Specialized.IOrderedDictionary) Implements System.Web.UI.IBindableControl.ExtractValues
	        For Each i In Controls.OfType(Of RadInputControl)().Select(Function(control) New With {.FieldName = control.ID, .FieldValue = control.Text})
	            dictionary.Add(i.FieldName, i.FieldValue)
	        Next
	    End Sub
	    Private dtItem As Object
	    Public Property DataItem() As Object
	        Get
	            Return dtItem
	        End Get
	        Set(ByVal value As Object)
	            dtItem = value
	        End Set
	    End Property
	
	End Class
````
>end
