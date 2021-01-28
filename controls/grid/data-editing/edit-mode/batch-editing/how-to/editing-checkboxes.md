---
title: Editing CheckBoxes
page_title: Editing CheckBoxes - RadGrid
description: Check our Web Forms article about Editing CheckBoxes.
slug: grid/data-editing/edit-mode/batch-editing/how-to/editing-checkboxes
tags: batch,editing,checkbox
published: True
position: 0
---

# Editing CheckBoxes directly in Batch Edit Mode


By default when **Batch Edit** mode is enabled the user needs to click on the cell first and then change its value. In some cases the users may prefer different behavior - for example when editing a boolean field that is presented by **CheckBox** in **RadGrid**. 

The following example illustrates how you can change the value of a cell by clicking directly on the **CheckBox** in it. 


````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1"
	OnNeedDataSource="RadGrid1_NeedDataSource"
	AutoGenerateColumns="false"
	AllowPaging="true" PageSize="10">

	<MasterTableView CommandItemDisplay="Top" DataKeyNames="ID" EditMode="Batch">

		<Columns>
			<telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" ReadOnly="true" InsertVisiblityMode="AlwaysVisible">
			</telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="Name" HeaderText="Name" UniqueName="Name" ReadOnly="true">
			</telerik:GridBoundColumn>
			<telerik:GridTemplateColumn DataField="BoolField1" HeaderText="Template Column" UniqueName="BoolField1">
				<ItemTemplate>
					<asp:CheckBox runat="server" ID="CheckBox1" Enabled="true" Checked='<%# Eval("BoolField1") %>' onclick="checkBoxClick(this, event);" />
				</ItemTemplate>
				<EditItemTemplate>
					<asp:CheckBox runat="server" ID="CheckBox2" />
				</EditItemTemplate>
			</telerik:GridTemplateColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>
````
````JavaScript
function checkBoxClick(sender, args) {
	var grid = $find("<%= RadGrid1.ClientID %>");
	var masterTableView = grid.get_masterTableView();
	var batchEditingManager = grid.get_batchEditingManager();
	var parentCell = $telerik.$(sender).closest("td")[0];

	var initialValue = sender.checked;
	sender.checked = !sender.checked;

	batchEditingManager.changeCellValue(parentCell, initialValue);
}
````



# See Also

 * [Client-Side API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})


