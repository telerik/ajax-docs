---
title: Accessing Controls
page_title: Accessing Controls - RadGrid
description: Learn how to access native and standard RadGrid column editors in Mobile render mode, including controls in PopUp edit forms.
slug: grid/mobile-support/mobile-rendering/accessing-controls
components: ["grid"]
tags: mobile-rendering,accessing,controls,editors,popup
published: True
position: 7
---

# Accessing Controls



With **Mobile** **RenderMode**, you access RadGrid controls in the same way as in other render modes, with a few mobile-specific differences. The control types can differ because mobile rendering uses native HTML controls by default.

## Access column editors in PopUp edit mode

By default, mobile rendering uses native controls for column editors. Account for this difference when you retrieve references to column editors.

With **EditForms**, **InPlace**, and **Batch** edit modes, you retrieve column editors as in other render modes. **PopUp** edit mode is different because mobile editing uses a separate menu with a different layout and control structure.

The following example retrieves references to native column editors in **PopUp** edit mode:

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>

<telerik:RadGrid runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid_NeedDataSource"
	RenderMode="Mobile" OnItemCreated="RadGrid1_ItemCreated">
	<MasterTableView CommandItemDisplay="Top" EditMode="PopUp" AutoGenerateColumns="false">
		<Columns>
			<telerik:GridEditCommandColumn></telerik:GridEditCommandColumn>
			<telerik:GridNumericColumn DataField="ID" HeaderText="ID"></telerik:GridNumericColumn>
			<telerik:GridBoundColumn DataField="Name" HeaderText="Name"></telerik:GridBoundColumn>
			<telerik:GridDateTimeColumn DataField="Date" HeaderText="Date"></telerik:GridDateTimeColumn>
			<telerik:GridCheckBoxColumn DataField="Active" HeaderText="Active"></telerik:GridCheckBoxColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>
````

````C#
using System;
using System.Data;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
	if (e.Item is GridEditFormItem && e.Item.IsInEditMode)
	{
		GridEditFormItem item = e.Item as GridEditFormItem;
		TextBox idEditor = item.EditFormCell.FindControl("ID").Controls[0] as TextBox;
		TextBox nameEditor = item.EditFormCell.FindControl("Name").Controls[0] as TextBox;
		TextBox dateEditor = item.EditFormCell.FindControl("Date").Controls[0] as TextBox;
		CheckBox boolEditor = item.EditFormCell.FindControl("Active").Controls[0] as CheckBox;
	}
}

protected void RadGrid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
	DataTable table = new DataTable();
	table.Columns.Add("ID", typeof(int));
	table.Columns.Add("Name", typeof(string));
	table.Columns.Add("Date", typeof(DateTime));
	table.Columns.Add("Active", typeof(Boolean));
	for (int i = 0; i < 5; i++)
	{
		table.Rows.Add(i, "Name" + i, DateTime.Now.AddDays(i), i % 2 == 0);
	}

	(sender as RadGrid).DataSource = table;
}

````
````VB
Imports System
Imports System.Data
Imports System.Web.UI.WebControls
Imports Telerik.Web.UI

Protected Sub RadGrid1_ItemCreated(sender As Object, e As GridItemEventArgs)
	If TypeOf e.Item Is GridEditFormItem AndAlso e.Item.IsInEditMode Then
		Dim item As GridEditFormItem = TryCast(e.Item, GridEditFormItem)
		Dim idEditor As TextBox = TryCast(item.EditFormCell.FindControl("ID").Controls(0), TextBox)
		Dim lastNameEditor As TextBox = TryCast(item.EditFormCell.FindControl("Name").Controls(0), TextBox)
		Dim dateEditor As TextBox = TryCast(item.EditFormCell.FindControl("Date").Controls(0), TextBox)
		Dim boolEditor As CheckBox = TryCast(item.EditFormCell.FindControl("Active").Controls(0), CheckBox)
	End If
End Sub

Protected Sub RadGrid_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
	Dim table As New DataTable()
	table.Columns.Add("ID", GetType(Integer))
	table.Columns.Add("Name", GetType(String))
	table.Columns.Add("Date", GetType(DateTime))
	table.Columns.Add("Active", GetType([Boolean]))
	For i As Integer = 0 To 4
		table.Rows.Add(i, "Name", DateTime.Now.AddDays(i), i Mod 2 = 0)
	Next

	TryCast(sender, RadGrid).DataSource = table
End Sub
````


To render standard editors instead of native controls, set the **UseNativeEditorsInMobileMode** property of a **GridEditableColumn** to `False`. Each column then renders the editor corresponding to its type. For example, **GridNumericColumn** uses **RadNumericTextBox** and **GridDateTimeColumn** uses **RadDatePicker**.

## See Also

- [Mobile rendering overview]({%slug grid/mobile-support/mobile-rendering/overview%})

- [Mobile rendering data editing]({%slug grid/mobile-support/mobile-rendering/data-editing%})

- [Auto-generated editors]({%slug grid/data-editing/grid-editors/auto-generated-editors%})
