---
title: Different Edit Forms on Edit and Insert
page_title: Different Edit Forms on Edit and Insert | UI for ASP.NET AJAX Documentation
description: Different Edit Forms on Edit and Insert
slug: grid/data-editing/how-to/different-edit-forms-on-edit-and-insert
tags: different,edit,forms,on,edit,and,insert
published: True
position: 12
---

# Different Edit Forms on Edit and Insert



## 

In some editing scenarios you may need to display different edit forms for Telerik RadGrid on edit and insert action. This is easily achievable having [WebUserControl custom edit form]({%slug grid/data-editing/edit-mode/custom-edit-forms%}) for your grid instance. You can hook the __ItemCommand__ event of the grid and switch the user control when __e.CommandName__ is __RadGrid.EditCommand__ or __RadGrid.InitInsertCommandName__. Note that you also have to clear the rest of the edited items (on insert action) or hide the insertion form (on edit action) to avoid duplication of the edit form type for several edited grid items.The code below represents sample case:



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="False"
	    Width="100%" AllowSorting="True" AllowPaging="True">
	    <MasterTableView CommandItemDisplay="Top">
	      <EditFormSettings UserControlName="EmployeeDetailsVB.ascx" EditFormType="WebUserControl">
	        <EditColumn UniqueName="EditCommandColumn1">
	        </EditColumn>
	      </EditFormSettings>
	      <Columns>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	        <telerik:GridBoundColumn HeaderText="TOC" DataField="TitleOfCourtesy" UniqueName="TitleOfCourtesy">
	          <HeaderStyle Width="60px"></HeaderStyle>
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
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	     SelectCommand="SELECT * FROM [Orders]"></asp:SqlDataSource>
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            e.Canceled = True
	            RadGrid1.EditIndexes.Clear()
	
	            e.Item.OwnerTableView.EditFormSettings.UserControlName = "MyInsertFormUserControl.ascx"
	            e.Item.OwnerTableView.InsertItem()
	
	        ElseIf (e.CommandName = RadGrid.EditCommandName) Then
	            e.Item.OwnerTableView.IsItemInserted = False
	            e.Item.OwnerTableView.EditFormSettings.UserControlName = "EmployeeDetailsVB.ascx"
	        End If
	    End Sub
````
````C#
	
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            e.Canceled = true;
	            RadGrid1.EditIndexes.Clear();
	
	            e.Item.OwnerTableView.EditFormSettings.UserControlName = "MyInsertFormUserControl.ascx";
	            e.Item.OwnerTableView.InsertItem();
	        }
	        else if (e.CommandName == RadGrid.EditCommandName)
	        {
	            e.Item.OwnerTableView.IsItemInserted = false;
	            e.Item.OwnerTableView.EditFormSettings.UserControlName = "EmployeeDetailsVB.ascx";
	        }
	    }
````


With auto-generated edit forms or __FormTemplate__ custom edit form you can merely show/hide some of the column editors (subscribing to the __ItemCreated__ event of the grid). Additional info about this can be found [here]({%slug grid/data-editing/distinguish-edit-or-insert-mode%}).
