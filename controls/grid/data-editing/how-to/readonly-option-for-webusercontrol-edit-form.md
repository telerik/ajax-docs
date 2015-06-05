---
title: ReadOnly Option for WebUserControl Edit Form
page_title: ReadOnly Option for WebUserControl Edit Form | RadGrid for ASP.NET AJAX Documentation
description: ReadOnly Option for WebUserControl Edit Form
slug: grid/data-editing/how-to/readonly-option-for-webusercontrol-edit-form
tags: readonly,option,for,webusercontrol,edit,form
published: True
position: 5
---

# ReadOnly Option for WebUserControl Edit Form


In some particular cases you may want to present the WebUserControl edit form of your grid instance in read only mode - for example if you would like to acquaint the user with the structure of this edit form without giving him the option to actually edit the data in the grid. This scenario is useful when setting permissions for the users on a regular basis - some of them can be allowed to edit data (through EditCommandColumn) and for the rest you can display a preview column.

The "preview" functionality for user control edit form is easily achievable. To support read only mode for your user control edit form please follow the steps depicted below :

1. Add **GridButtonColumn** to your grid instance with **CommandName = "Preview".**

	**ASP.NET**
	<MasterTableView CommandItemDisplay="Top" GridLines="None">
	  <EditFormSettings UserControlName="EmployeeDetailsVB.ascx" EditFormType="WebUserControl">
	      <EditColumn UniqueName="EditCommandColumn1">
	      </EditColumn>
	  </EditFormSettings>
	  <Columns>
	      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	      </telerik:GridEditCommandColumn>
	      <telerik:GridButtonColumn CommandName="Preview" Text="Preview" UniqueName="Preview">
	      </telerik:GridButtonColumn>
	      <telerik:GridBoundColumn HeaderText="TOC" DataField="TitleOfCourtesy" UniqueName="TitleOfCourtesy">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn HeaderText="FirstName" DataField="FirstName" UniqueName="FirstName">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn HeaderText="LastName" DataField="LastName" UniqueName="LastName">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn HeaderText="Hire Date" DataField="HireDate" UniqueName="HireDate">
	      </telerik:GridBoundColumn>
	      <telerik:GridBoundColumn HeaderText="Title" DataField="Title" UniqueName="Title">
	      </telerik:GridBoundColumn>
	   </Columns>
	</MasterTableView>

2. Handle the **Preview** command execution in your **ItemCommand** event handler and call the **SetPreviewMode**() method to force the user control in preview mode:



	**VB**
	Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	    If (e.CommandName = "Preview") Then
	        e.Item.Edit = True
	        e.Item.OwnerTableView.Rebind()
	        Dim editItem As GridDataItem = e.Item.OwnerTableView.Items(e.Item.ItemIndex)
	        Dim ucID = GridEditFormItem.EditFormUserControlID
	        Dim MyUserControl As EmployeeDetailsVB = editItem.EditFormItem.FindControl(ucID)
	        MyUserControl.SetPreviewMode()
	    End If
	End Sub

	**C#**
	private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	{
	    if (e.CommandName == "Preview")
	    {
	        e.Item.Edit = true;
	        e.Item.OwnerTableView.Rebind();
	        GridDataItem editItem = e.Item.OwnerTableView.Items[e.Item.ItemIndex];
	        string ucID = GridEditFormItem.EditFormUserControlID as string;
	        EmployeeDetailsVB MyUserControl = editItem.EditFormItem.FindControl(ucID) as EmployeeDetailsVB;
	        MyUserControl.SetPreviewMode();
	    }
	}

3. In the **code-behind of the user control disable all controls** which reside in the edit form (except the cancel button) and change the cancel button text to **Close.**

````C#
public void SetPreviewMode()
{
    btnUpdate.Visible = false;
    foreach (Control ctrl in this.Controls)
    {
        if (ctrl is WebControl)
        {
            ((WebControl)(ctrl)).Enabled = false;
        }
    }
    btnCancel.Enabled = true;
    btnCancel.Text = "Close";
}
````
````VB
Public Sub SetPreviewMode()
    btnUpdate.Visible = False
    For Each ctrl As Control In Me.Controls
        If (TypeOf ctrl Is WebControl) Then
            CType(ctrl, WebControl).Enabled = False
        End If
    Next
    btnCancel.Enabled = True
    btnCancel.Text = "Close"
End Sub
````
