---
title: Updating Values Using UserControl and FormTemplate
page_title: Updating Values Using UserControl and FormTemplate | RadGrid for ASP.NET AJAX Documentation
description: Updating Values Using UserControl and FormTemplate
slug: grid/data-editing/update-records/updating-values-using-usercontrol-and-formtemplate
tags: updating,values,using,usercontrol,and,formtemplate
published: True
position: 1
---

# Updating Values Using UserControl and FormTemplate



## Referring Controls in UserControls

The code below shows how to retrieve a value from a control in a user control custom edit form in Telerik RadGrid. The example demonstrates how to refer to controls by obtaining references to them with the *FindControl(controlId)* method. This text can be used to update your DataSource (you can also see [this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultVB.aspx) for more info):



````VB
Private Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
    Dim MyUserControl As UserControl = CType(e.Item.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
    'Locate the changed row in the DataSource
    Dim changedRows As DataRow() = Me.Employees.Select("EmployeeID = " & editedItem.OwnerTableView.DataKeyValues(editedItem.ItemIndex)("EmployeeID"))

    If (Not changedRows.Length = 1) Then
        e.Canceled = True
        Return
    End If
    'Update new values
    Dim newValues As Hashtable = New Hashtable
    newValues("Country") = CType(MyUserControl.FindControl("TextBox7"), TextBox).Text
    newValues("City") = CType(MyUserControl.FindControl("TextBox8"), TextBox).Text
    newValues("Region") = CType(MyUserControl.FindControl("TextBox9"), TextBox).Text
    newValues("HomePhone") = CType(MyUserControl.FindControl("TextBox10"), TextBox).Text
    newValues("BirthDate") = CType(MyUserControl.FindControl("TextBox11"), TextBox).Text
    newValues("TitleOfCourtesy") = CType(MyUserControl.FindControl("ddlTOC"), DropDownList).SelectedItem.Value
    newValues("Notes") = CType(MyUserControl.FindControl("TextBox1"), TextBox).Text
    newValues("Address") = CType(MyUserControl.FindControl("TextBox6"), TextBox).Text
    newValues("FirstName") = CType(MyUserControl.FindControl("TextBox2"), TextBox).Text
    newValues("LastName") = CType(MyUserControl.FindControl("TextBox3"), TextBox).Text
    newValues("HireDate") = CType(MyUserControl.FindControl("Textbox5"), TextBox).Text
    newValues("Title") = CType(MyUserControl.FindControl("TextBox4"), TextBox).Text
    changedRows(0).BeginEdit()
    Try
        Dim entry As DictionaryEntry
        For Each entry In newValues
            changedRows(0)(CType(entry.Key, String)) = entry.Value
        Next
        changedRows(0).EndEdit()
        Me.Employees.AcceptChanges()
    Catch ex As Exception
        changedRows(0).CancelEdit()
        e.Canceled = True
    End Try
End Sub
````
````C#
void RadGrid1_UpdateCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;
    UserControl userControl = (UserControl)e.Item.FindControl(GridEditFormItem.EditFormUserControlID);
    //Prepare new row to add it in the DataSource
    DataRow[] changedRows = this.Employees.Select("EmployeeID = " + editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["EmployeeID"]);
    if (changedRows.Length != 1)
    {
        RadGrid1.Controls.Add(new LiteralControl("Unable to locate the Employee for updating."));
        e.Canceled = true;
        return;
    }
    //Update new values
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
    changedRows[0].BeginEdit();
    try
    {
        foreach (DictionaryEntry entry in newValues)
        {
            changedRows[0][(string)entry.Key] = entry.Value;
        }
        changedRows[0].EndEdit();
        this.Employees.AcceptChanges();
    }
    catch (Exception ex)
    {
        changedRows[0].CancelEdit();
        RadGrid1.Controls.Add(new LiteralControl("Unable to update Employees. Reason: " + ex.Message));
        e.Canceled = true;
    }
}

````


## Referring controls in FormTemplate

The code below shows to retrieve a value from a control in a form template custom edit form in Telerik RadGrid. The example demonstrates how to refer a controls obtaining references to them with the *FindControl(controlId)* method in such type of edit form. This text can be used to update your DataSourcemanually:



````C#
private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.UpdateCommandName)
    {
        GridEditableItem editedItem = e.Item as GridEditableItem;
        //Locate the changed row in the DataSource
        DataRow[] changedRows = this.Employees.Select("EmployeeID = " + editedItem["EmployeeID"].Text);

        if (changedRows.Length != 1)
        {
            this.Label1.Text += "Unable to locate the Employee for updating.";
            e.Canceled = true;
            return;
        }
        //Update new values
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
        changedRows[0].BeginEdit();
        try
        {
            foreach (DictionaryEntry entry in newValues)
            {
                changedRows[0][(string)entry.Key] = entry.Value;
            }
            changedRows[0].EndEdit();
        }
        catch (Exception ex)
        {
            changedRows[0].CancelEdit();
            Label1.Text += "Unable to update Employees. Reason: " + ex.Message;
            e.Canceled = true;
        }
        //Code for updating the database can go here...
        Label1.Text += "Employee " + editedItem["EmployeeID"].Text + " updated";
    }
}
````
````VB
Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As WebControls.GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If (e.CommandName = RadGrid.UpdateCommandName) Then
        Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
        'Locate the changed row in the DataSource
        Dim changedRows As DataRow() = Me.Employees.Select("EmployeeID = " + editedItem("EmployeeID").Text)
        If (Not changedRows.Length = 1) Then
            Me.Label1.Text += "Unbale to locate the Employee for updating."
            e.Canceled = True
            Return
        End If
        'Update new values
        Dim newValues As Hashtable = New Hashtable
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
        changedRows(0).BeginEdit()
        Try
            Dim entry As DictionaryEntry
            For Each entry In newValues
                changedRows(0)(CType(entry.Key, String)) = entry.Value
            Next
            changedRows(0).EndEdit()
        Catch ex As Exception
            changedRows(0).CancelEdit()
            Label1.Text += "Unable to update Employees. Reason: " & ex.Message
            e.Canceled = True
        End Try
        'Code for updating the database can go here...
        Label1.Text += "Employee " & editedItem("EmployeeID").Text & " updated"
    End If
End Sub
````


Note that with form template you may prefer the [ codeless approach ](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx) by enabling the [ automatic operations ](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx) supported by Telerik RadGrid.
