---
title: Add a required indicator to the DropDownColumn when editing or inserting an item
description: Learn how to add a required indicator to the DropDownColumn when editing or inserting an item
type: how-to
page_title: Add a required indicator to the DropDownColumn when editing or inserting an item. | RadGrid
slug: grid-add-required-indicator-to-drop-down-column-when-editing-or-inserting-an-item
res_type: kb
ticket-id: 1645674
tags: grid, grid drop down column, telerik ajax grid drop down column, required symbol
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Sometimes, you want to indicate that a **DropDownColumn** (or any other column) must have a value selected when editing or inserting a new item. 
For that, you might want to add something of a required symbol (asterisk) at the header of the column.

![Required symbol (asterisk) showing when editing/inserting a record](images/grid-required-symbol.gif "Required symbol (asterisk) showing when editing/inserting a record")

## Solution

You can achieve such a behavior by adding a CSS class with an asterisk (*) as its content, and applying/removing it based on the different commands (Insert, Edit, Update, etc.):

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnItemCommand="RadGrid1_ItemCommand">
    <MasterTableView CommandItemDisplay="Top">
        <Columns>
            <telerik:GridEditCommandColumn />
            <telerik:GridDropDownColumn UniqueName="PhoneType" DataField="PhoneTypeCode" HeaderText="Contact Type" DataSourceID="dsPhoneType"
                DropDownControlType="RadComboBox" ListTextField="LookUpTypeDescription" ListValueField="LookUpTypeValue">
            </telerik:GridDropDownColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````CSS
.required::after {
    content: "*";
    color: red;
    padding-left: 5px;
}
````

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    RadGrid radGrid = (RadGrid)sender;
    GridDropDownColumn dropDownColumn = radGrid.MasterTableView.GetColumn("PhoneType") as GridDropDownColumn;

    if (e.CommandName == RadGrid.InitInsertCommandName || e.CommandName == RadGrid.EditCommandName) // Add more commands if you wish
    {
        dropDownColumn.HeaderStyle.CssClass += "required";
    }
    else if (e.CommandName == RadGrid.PerformInsertCommandName || e.CommandName == RadGrid.CancelCommandName || e.CommandName == RadGrid.UpdateCommandName)
    {
        dropDownColumn.HeaderStyle.CssClass = "";
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    Dim radGrid As RadGrid = CType(sender, RadGrid)
    Dim dropDownColumn As GridDropDownColumn = TryCast(radGrid.MasterTableView.GetColumn("PhoneType"), GridDropDownColumn)

    If e.CommandName = RadGrid.InitInsertCommandName OrElse e.CommandName = RadGrid.EditCommandName Then
        dropDownColumn.HeaderStyle.CssClass += "required"
    ElseIf e.CommandName = RadGrid.PerformInsertCommandName OrElse e.CommandName = RadGrid.CancelCommandName OrElse e.CommandName = RadGrid.UpdateCommandName Then
        dropDownColumn.HeaderStyle.CssClass = ""
    End If
End Sub
````
 
  