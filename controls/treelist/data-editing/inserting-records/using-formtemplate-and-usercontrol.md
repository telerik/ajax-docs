---
title: Using FormTemplate and UserControl
page_title: Using FormTemplate andUserControl | RadTreeList for ASP.NET AJAX Documentation
description: Using FormTemplate and UserControl
slug: treelist/data-editing/inserting-records/using-formtemplate-and-usercontrol
tags: using,formtemplate/usercontrol
published: True
position: 1
previous_url: treelist/data-editing/inserting-records/using-formtemplate/usercontrol
---

# Using FormTemplate/UserControl



This article will show you how you can retrieve the values from FormTemplate and WebUserControl edit forms on insert command. You can afterwards use them to perform your own inserting logic to your treelist datasource.

## Inserting values using FormTemplate

The main logic here lies on using the FindControl(controlID) method - once you obtain a reference to the **TreeListEditFormInsertItem** you can easily access the controls in it by ID.



````ASPNET
<telerik:RadTreeList ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	AutoGenerateColumns="false" EditMode="EditForms" DataSourceID="SqlDataSource1"
	OnInsertCommand="RadTreeList1_InsertCommand">
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" 
		UniqueName="EmployeeID" ReadOnly="true" />
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" 
		UniqueName="LastName" />
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" 
		UniqueName="FirstName" />
		<telerik:TreeListBoundColumn DataField="HomePhone" HeaderText="HomePhone" 
		UniqueName="HomePhone" />
		<telerik:TreeListDateTimeColumn DataField="HireDate" HeaderText="HireDate" 
		UniqueName="HireDate" />
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" 
		UniqueName="ReportsTo" ReadOnly="true" />
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
				<asp:Button ID="btnUpdate" Text="Insert"
					runat="server" CommandName="PerformInsert">
				</asp:Button>&nbsp;
				<asp:Button ID="btnCancel" Text="Cancel" runat="server" CausesValidation="False"
					CommandName="Cancel"></asp:Button>
			</FormTemplate>
		</EditEormSettings>
</telerik:RadTreeList>
````
````C#
protected void RadTreeList1_InsertCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
{
	//Canceling the automatic datasource operation
	e.Canceled = true;

	//Extracting the values from the form template edit form using the FindControl() method
	TreeListEditFormInsertItem insertedItem = e.Item as TreeListEditFormInsertItem;
	string firstName = (insertedItem.FindControl("TextBox1") as TextBox).Text;
	string lastName = (insertedItem.FindControl("TextBox2") as TextBox).Text;
	string homePhone = (insertedItem.FindControl("RadMaskedTextBox1") as RadMaskedTextBox).TextWithLiterals;
	DateTime? hireDate = (insertedItem.FindControl("RadDatePicker1") as RadDatePicker).SelectedDate;

	//Inserting logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.InsertParameters["FirstName"].DefaultValue = firstName;
	SqlDataSource1.InsertParameters["LastName"].DefaultValue = lastName;
	SqlDataSource1.InsertParameters["HomePhone"].DefaultValue = homePhone;
	SqlDataSource1.InsertParameters["HireDate"].DefaultValue = hireDate.ToString();
	SqlDataSource1.Insert();

	//Closing the insert form and rebinding the treelist control
	RadTreeList1.InsertIndexes.Clear();
	RadTreeList1.Rebind();
}
````
````VB.NET
Protected Sub RadTreeList1_InsertCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs)
	'Canceling the automatic datasource operation
	e.Canceled = True

	'Extracting the values from the form template edit form using the FindControl() method
	Dim insertedItem As TreeListEditFormInsertItem = TryCast(e.Item, TreeListEditFormInsertItem)
	Dim firstName As String = TryCast(insertedItem.FindControl("TextBox1"), TextBox).Text
	Dim lastName As String = TryCast(insertedItem.FindControl("TextBox2"), TextBox).Text
	Dim homePhone As String = TryCast(insertedItem.FindControl("RadMaskedTextBox1"), RadMaskedTextBox).TextWithLiterals
	Dim hireDate As System.Nullable(Of DateTime) = TryCast(insertedItem.FindControl("RadDatePicker1"), RadDatePicker).SelectedDate

	'Inserting logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.InsertParameters("FirstName").DefaultValue = firstName
	SqlDataSource1.InsertParameters("LastName").DefaultValue = lastName
	SqlDataSource1.InsertParameters("HomePhone").DefaultValue = homePhone
	SqlDataSource1.InsertParameters("HireDate").DefaultValue = hireDate.ToString()
	SqlDataSource1.Insert()

	'Closing the insert form and rebinding the treelist control
	RadTreeList1.InsertIndexes.Clear()
	RadTreeList1.Rebind()
End Sub
````


## Inserting values using WebUserControl

The approach here would be similar to when using FormTemplate. The difference is the way you access the user control.

Here is sample code for extracting the values from the user control on InsertCommand event of RadTreeList:



````ASPNET
<telerik:RadTreeList ID="RadTreeList2" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	AutoGenerateColumns="false" EditMode="EditForms" DataSourceID="SqlDataSource1"
	OnInsertCommand="RadTreeList2_InsertCommand">
	<editformsettings editformtype="WebUserControl" usercontrolpath="~/WebUserControl.ascx">
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
</editformsettings>
</telerik:RadTreeList>
````
````C#
protected void RadTreeList2_InsertCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
{
	//Canceling the automatic datasource operation
	e.Canceled = true;

	//Extracting the values from the form template edit form using the FindControl() method
	TreeListEditFormInsertItem insertedItem = e.Item as TreeListEditFormInsertItem;
	UserControl userControl = (UserControl)insertedItem.FindControl(GridEditFormInsertItem.EditFormUserControlID);
	string firstName = (userControl.FindControl("TextBox1") as TextBox).Text;
	string lastName = (userControl.FindControl("TextBox2") as TextBox).Text;
	string homePhone = (userControl.FindControl("RadMaskedTextBox1") as RadMaskedTextBox).TextWithLiterals;
	DateTime? hireDate = (userControl.FindControl("RadDatePicker1") as RadDatePicker).SelectedDate;
	string reportsTo = (userControl.FindControl("TextBox3") as TextBox).Text;

	//Inserting logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.InsertParameters["FirstName"].DefaultValue = firstName;
	SqlDataSource1.InsertParameters["LastName"].DefaultValue = lastName;
	SqlDataSource1.InsertParameters["HomePhone"].DefaultValue = homePhone;
	SqlDataSource1.InsertParameters["HireDate"].DefaultValue = hireDate.ToString();
	SqlDataSource1.InsertParameters["ReportsTo"].DefaultValue = reportsTo;
	SqlDataSource1.Insert();

	//Closing the insert form and rebinding the treelist control
	RadTreeList1.InsertIndexes.Clear();
	RadTreeList1.Rebind();
}
````
````VB.NET
Protected Sub RadTreeList2_InsertCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs)
	'Canceling the automatic datasource operation
	e.Canceled = True

	'Extracting the values from the form template edit form using the FindControl() method
	Dim insertedItem As TreeListEditFormInsertItem = TryCast(e.Item, TreeListEditFormInsertItem)
	Dim userControl As UserControl = DirectCast(insertedItem.FindControl(GridEditFormInsertItem.EditFormUserControlID), UserControl)
	Dim firstName As String = TryCast(userControl.FindControl("TextBox1"), TextBox).Text
	Dim lastName As String = TryCast(userControl.FindControl("TextBox2"), TextBox).Text
	Dim homePhone As String = TryCast(userControl.FindControl("RadMaskedTextBox1"), RadMaskedTextBox).TextWithLiterals
	Dim hireDate As System.Nullable(Of DateTime) = TryCast(userControl.FindControl("RadDatePicker1"), RadDatePicker).SelectedDate
	Dim reportsTo As String = TryCast(userControl.FindControl("TextBox3"), TextBox).Text

	'Inserting logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.InsertParameters("FirstName").DefaultValue = firstName
	SqlDataSource1.InsertParameters("LastName").DefaultValue = lastName
	SqlDataSource1.InsertParameters("HomePhone").DefaultValue = homePhone
	SqlDataSource1.InsertParameters("HireDate").DefaultValue = hireDate.ToString()
	SqlDataSource1.InsertParameters("ReportsTo").DefaultValue = reportsTo
	SqlDataSource1.Insert()

	'Closing the insert form and rebinding the treelist control
	RadTreeList2.InsertIndexes.Clear()
	RadTreeList2.Rebind()
End Sub
````


Additionally, if you want the treelist to be able to extract values from the user control, the latter needs to implement the IBindable interface.Here follows a sample implementation:



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
<asp:Button ID="btnUpdate" Text="Insert" runat="server" CommandName="PerformInsert"
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


>caution Note that RadTreeList expects the newly inserted value of the field that is specified as DataKeyNames to be larger than any of the already available values of this field in the datasource.
>

