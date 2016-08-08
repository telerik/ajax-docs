---
title: Different Edit and Insert Forms
page_title: Different Edit and Insert Forms | RadGrid for ASP.NET AJAX Documentation
description: Different Edit and Insert Forms
slug: grid/how-to/data-editing/different-edit-and-insert-forms
previous_url: controls/grid/data-editing/how-to/different-edit-and-insert-forms
tags: different,edit,and,insert,forms
published: True
position: 11
---

# Different Edit and Insert Forms



##

In number of cases it can be more convenient to have different edit/insert form when configuring **EditForms** edit mode for your grid instance. This can be especially helpful when you want to allow the user enter value for some of the grid columns on insert (for the newly created record in the grid) but forbid that on edit command. The sample approach below represents how to implement this functionality with minimum amount of code (residing in the **ItemCommand** handler of the grid). These are the main points:

* when the command name passed through the **e.CommandName** argument is either **Edit**, **PerformInsert** or **Cancel**, hide the corresponding column in the grid and set it as read-only.

* when the command name is **InitInsert**, cancel the default insert action and display the column editor for the hidden column by setting its **ReadOnly** property to **false**. The additional **Display="true"** setting is used when the **EditForm** attribute of the grid table is set to **InPlace**.

Note that you can extend the example to switch the visibility for multiple column editor instances on insert/update.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Width="400px">
  <MasterTableView CommandItemDisplay="TopAndBottom" AutoGenerateColumns="false" EditMode="EditForms">
    <Columns>
      <telerik:GridBoundColumn UniqueName="BirthDate" DataField="BirthDate" Display="false"
        HeaderText="Birth date" DataFormatString="{0:d}" />
      <telerik:GridBoundColumn UniqueName="FirstName" DataField="FirstName" HeaderText="First name" />
      <telerik:GridBoundColumn UniqueName="LastName" DataField="LastName" HeaderText="Last name" />
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
    </Columns>
  </MasterTableView></telerik:RadGrid>
````
````VB
Private Sub RadGrid1_NeedDataSource(ByVal source As System.Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = DataSourceHelperVB.GetDataTable("SELECT FirstName, LastName, BirthDate From Employees")
End Sub
Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
    Dim birthDateColumn As GridBoundColumn = CType(e.Item.OwnerTableView.GetColumnSafe("BirthDate"), GridBoundColumn)
    If (e.CommandName = RadGrid.InitInsertCommandName) Then
        e.Canceled = True
        If (e.Item.OwnerTableView.EditMode = GridEditMode.InPlace) Then
            birthDateColumn.Display = True
        End If
        birthDateColumn.ReadOnly = False
        e.Item.OwnerTableView.InsertItem()
        Dim insertedItem As GridEditableItem = RadGrid1.MasterTableView.GetInsertItem()
        CType(insertedItem("BirthDate").Controls(0), TextBox).Text = String.Empty
    ElseIf (e.CommandName = RadGrid.EditCommandName Or e.CommandName = RadGrid.PerformInsertCommandName Or e.CommandName = RadGrid.CancelCommandName) Then
        birthDateColumn.ReadOnly = True
        birthDateColumn.Display = False
    End If
End Sub
````
````C#
private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = DataSourceHelperVB.GetDataTable("SELECT FirstName, LastName, BirthDate From Employees");
}
private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    GridBoundColumn birthDateColumn = (GridBoundColumn)e.Item.OwnerTableView.GetColumnSafe("BirthDate") as GridBoundColumn;
    if (e.CommandName == RadGrid.InitInsertCommandName)
    {
        e.Canceled = true;
        if (e.Item.OwnerTableView.EditMode == GridEditMode.InPlace)
        {
            birthDateColumn.Display = true;
        }
        birthDateColumn.ReadOnly = false;
        e.Item.OwnerTableView.InsertItem();
        GridEditableItem insertedItem = RadGrid1.MasterTableView.GetInsertItem();
        ((TextBox)(insertedItem["BirthDate"].Controls[0])).Text = String.Empty;
    }
    else if (e.CommandName == RadGrid.EditCommandName || e.CommandName == RadGrid.PerformInsertCommandName || e.CommandName == RadGrid.CancelCommandName)
    {
        birthDateColumn.ReadOnly = true;
        birthDateColumn.Display = false;
    }
}
````

