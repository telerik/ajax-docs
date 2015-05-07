---
title: Accessing Controls
page_title: Accessing Controls | RadGrid for ASP.NET AJAX Documentation
description: Accessing Controls
slug: grid/mobile-support/mobile-rendering/accessing-controls
tags: accessing,controls
published: True
position: 7
---

# Accessing Controls



With "**Mobile**" **RenderMode** you can access controlsin the same manner as with the other rendering mode with only few specific to themobile rendering scenarios. One difference that you should consider is that thecontrols type is different from the other render modes.

## Accessing column editors in PopUp edit mode

With the default setting of the mobile rendering, all columns will render native controlsand you should have that in mind when you try to get reference to column editors.

With edit modes **EditForms**, **InPlace** and **Batch**,getting reference to column editors is exactly the same as with the other render modes, but a major difference is introduced in **PopUp** edit mode. The mobile **PopUp** editing introducesnew edit menu, which renders a completely different layout and controls structure.

The following examples demonstrate how to get reference to **native** column editors in **PopUp** edit mode and native controls:

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
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
	if (e.Item is GridEditFormItem && e.Item.IsInEditMode)
	{
		GridEditFormItem item = e.Item as GridEditFormItem;
		TextBox idEditor = item.EditFormCell.FindControl("ID").Controls[0] as TextBox;
		TextBox lastNameEditor = item.EditFormCell.FindControl("Name").Controls[0] as TextBox;
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


When you want to render the standard editors for a column and you are setting the	**UseNativeEditorsInMobileMode** property of a **GridEditableColumn**to "**false**", each column from the above example will render editors	corresponding to the column type (*for example, the GridNumericColumn will have a RadNumericTextBox as an editor, the GridDateTimeColumn will have RadDatePicker, etc.*).

## See Also

 * [Mobile rendering Overview]({%slug grid/mobile-support/mobile-rendering/overview%})

 * [Mobile rendering data-editing]({%slug grid/mobile-support/mobile-rendering/data-editing%})

 * [Auto-Generated Editors]({%slug grid/data-editing/grid-editors/auto-generated-editors%})
