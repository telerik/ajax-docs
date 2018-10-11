---
title: Using Inplace and EditForms Modes
page_title: Using Inplace and EditForms Modes | RadTreeList for ASP.NET AJAX Documentation
description: Using Inplace and EditForms Modes
slug: treelist/data-editing/updating-records/using-inplace-and-editforms-modes
tags: using,inplace,and,editforms,modes
published: True
position: 0
---

# Using Inplace and EditForms Modes



When you want to do manual updates of the treelist datasource, in order to do so, you need to get hold of the edited values in the edit form before performing your custom updating logic. This article will elaborate on the two ways to access these values.

## Accessing the edited values using ExtractValuesFromItem() method

The ExtractValuesFromItem(dictionaryObject, editableItem, includePrimaryKey) method of RadTreeList takes the following arguments:

* IDictionary dictionaryObject - the collection which will hold the values, using the column UniqueName of each edit field as a key.

* TreeListEditableItem - the current editable item from which the values will be extracted.

* bool includePrimaryKey - indicates whether the primary key value for the current item should be extracted along with the other values.

It would be easy to recognize the currently updated item by its DataKeyValue if the includePrimaryKey is true, thus including this value in the dictionary object.



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	AutoGenerateColumns="false" DataSourceID="SqlDataSource1"
	OnUpdateCommand="RadTreeList1_UpdateCommand">
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID"
			ReadOnly="true" />
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName" />
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName" />
		<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title" />
		<telerik:TreeListDateTimeColumn DataField="HireDate" HeaderText="HireDate" UniqueName="HireDate" />
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" UniqueName="ReportsTo"
			ReadOnly="true" />
		<telerik:TreeListEditCommandColumn UniqueName="EditColumn" />
	</Columns>
</telerik:RadTreeList>
````
````C#
protected void RadTreeList1_UpdateCommand(object sender, TreeListCommandEventArgs e)
{
	//Canceling out the automatic datasource operation (needed if you use a datasource control)
	e.Canceled = true;


	//Using the ExtractValuesFromItem() method to get hold of the edited values
	System.Collections.Specialized.OrderedDictionary newValues = new System.Collections.Specialized.OrderedDictionary();
	TreeListEditableItem editedItem = e.Item as TreeListEditableItem;
	e.Item.OwnerTreeList.ExtractValuesFromItem(newValues, editedItem, true);


	//Updating logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.UpdateParameters["EmployeeID"].DefaultValue = newValues["EmployeeID"].ToString();
	SqlDataSource1.UpdateParameters["LastName"].DefaultValue = newValues["LastName"].ToString();
	SqlDataSource1.UpdateParameters["FirstName"].DefaultValue = newValues["FirstName"].ToString();
	SqlDataSource1.UpdateParameters["Title"].DefaultValue = newValues["Title"].ToString();
	SqlDataSource1.UpdateParameters["HireDate"].DefaultValue = newValues["HireDate"].ToString();

	SqlDataSource1.Update();

	//Closing the edit form and rebinding the treelist control
	RadTreeList1.EditIndexes.Clear();
	RadTreeList1.Rebind();
}
````
````VB.NET
Protected Sub RadTreeList1_UpdateCommand(ByVal sender As Object, ByVal e As TreeListCommandEventArgs) Handles RadTreeList1.UpdateCommand

	'Canceling out the automatic datasource operation (needed if you use a datasource control)
	e.Canceled = True


	'Using the ExtractValuesFromItem() method to get hold of the edited values
	Dim newValues As New System.Collections.Specialized.OrderedDictionary()
	Dim editedItem As TreeListEditableItem = CType(e.Item, TreeListEditableItem)
	e.Item.OwnerTreeList.ExtractValuesFromItem(newValues, editedItem, True)


	'Updating logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.UpdateParameters("EmployeeID").DefaultValue = newValues("EmployeeID").ToString()
	SqlDataSource1.UpdateParameters("LastName").DefaultValue = newValues("LastName").ToString()
	SqlDataSource1.UpdateParameters("FirstName").DefaultValue = newValues("FirstName").ToString()
	SqlDataSource1.UpdateParameters("Title").DefaultValue = newValues("Title").ToString()
	SqlDataSource1.UpdateParameters("HireDate").DefaultValue = newValues("HireDate").ToString()

	SqlDataSource1.Update()

	'Closing the edit form and rebinding the treelist control
	RadTreeList1.EditIndexes.Clear()
	RadTreeList1.Rebind()
End Sub
````


## Accessing the insert values using column editors

This can be achieved by getting hold of the current editable item and then accessing each column editor by column UniqueName. Then you just get the value from the control that the editor holds by using the control's own API.

>tip If you need to access the datakeyvalue of the currently edited item, you should keep in mind that the **TreeListEditableItem** should becast to **TreeListDataItem** if you are using **InPlace** edit mode, and to **TreeListEditFormItem** if you are using **EditForms** . Then you can use the GetDataKeyValue("DataKeyNames") method.
>




````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList2" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	AutoGenerateColumns="false" DataSourceID="SqlDataSource1"
	OnUpdateCommand="RadTreeList2_UpdateCommand">
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID"
			ReadOnly="true" />
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName" />
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName" />
		<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title" />
		<telerik:TreeListDateTimeColumn DataField="HireDate" HeaderText="HireDate" UniqueName="HireDate" />
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" UniqueName="ReportsTo"
			ReadOnly="true" />
		<telerik:TreeListEditCommandColumn UniqueName="EditColumn" />
	</Columns>
</telerik:RadTreeList>
````
````C#
protected void RadTreeList2_UpdateCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
{
	//Canceling out the automatic datasource operation (needed if you use a datasource control)
	e.Canceled = true;

	//Accessing the DataKeyValue of the edited item, which is used to recognize the edited row in the datasource
	TreeListEditFormItem editedItem = (e.Item as TreeListEditFormItem);
	string dataKeyValue = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString();

	//For InPlace editing, these two lines would be:
	//TreeListDataItem editedItem = (e.Item as TreeListDataItem);
	//string dataKeyValue = editedItem.GetDataKeyValue("EmployeeID");

	//Accessing the values of the edited item through the column editors
	string lastName = (editedItem.GetColumnEditor("LastName") as TreeListTextBoxColumnEditor).TextBoxControl.Text;
	string firstName = (editedItem.GetColumnEditor("FirstName") as TreeListTextBoxColumnEditor).TextBoxControl.Text;
	string title = (editedItem.GetColumnEditor("Title") as TreeListTextBoxColumnEditor).TextBoxControl.Text;
	DateTime? hireDate = (editedItem.GetColumnEditor("HireDate") as TreeListDateTimeColumnEditor).DatePickerControl.SelectedDate;

	//Updating logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.UpdateParameters["EmployeeID"].DefaultValue = dataKeyValue;
	SqlDataSource1.UpdateParameters["LastName"].DefaultValue = lastName;
	SqlDataSource1.UpdateParameters["FirstName"].DefaultValue = firstName;
	SqlDataSource1.UpdateParameters["Title"].DefaultValue = title;
	SqlDataSource1.UpdateParameters["HireDate"].DefaultValue = hireDate.ToString();
	SqlDataSource1.Update();

	//Closing the edit form and rebinding the treelist control
	RadTreeList2.EditIndexes.Clear();
	RadTreeList2.Rebind();
}
````
````VB.NET
Protected Sub RadTreeList1_UpdateCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs) Handles RadTreeList1.UpdateCommand
	'Canceling out the automatic datasource operation (needed if you use a datasource control)
	e.Canceled = True

	'Accessing the DataKeyValue of the edited item, which is used to recognize the edited row in the datasource
	Dim editedItem As TreeListEditFormItem = CType(e.Item, TreeListEditFormItem)
	Dim dataKeyValue As String = editedItem.ParentItem.GetDataKeyValue("EmployeeID").ToString()

	'For InPlace editing, the last two lines would be:
	'Dim editedItem As TreeListDataItem = CType(e.Item, TreeListDataItem)
	'Dim dataKeyValue As String = editedItem.GetDataKeyValue("EmployeeID")

	'Accessing the values of the edited item through the column editors
	Dim lastName As String = CType(editedItem.GetColumnEditor("LastName"), TreeListTextBoxColumnEditor).TextBoxControl.Text
	Dim firstName As String = CType(editedItem.GetColumnEditor("FirstName"), TreeListTextBoxColumnEditor).TextBoxControl.Text
	Dim title As String = CType(editedItem.GetColumnEditor("Title"), TreeListTextBoxColumnEditor).TextBoxControl.Text
	Dim hireDate As System.Nullable(Of DateTime) = CType(editedItem.GetColumnEditor("HireDate"), TreeListDateTimeColumnEditor).DatePickerControl.SelectedDate


	'Updating logic follows, this part depends on your own custom way of performing CRUD operations
	SqlDataSource1.UpdateParameters("EmployeeID").DefaultValue = dataKeyValue
	SqlDataSource1.UpdateParameters("LastName").DefaultValue = lastName
	SqlDataSource1.UpdateParameters("FirstName").DefaultValue = firstName
	SqlDataSource1.UpdateParameters("Title").DefaultValue = title
	SqlDataSource1.UpdateParameters("HireDate").DefaultValue = hireDate.ToString()
	SqlDataSource1.Update()

	'Closing the edit form and rebinding the treelist control
	RadTreeList1.EditIndexes.Clear()
	RadTreeList1.Rebind()
End Sub
````

