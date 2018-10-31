---
title: Accessing Controls
page_title: Accessing Controls | RadGrid for ASP.NET AJAX Documentation
description: Accessing Controls
slug: treelist/mobile-support/mobile-rendering/accessing-controls
tags: accessing,controls
published: True
position: 7
---

# Accessing Controls



With "**Mobile**" **RenderMode** you can access controls in the same manner as with the other rendering mode with only few specific to the mobile rendering scenarios. One difference that you should consider is that the controls type is different from the other render modes.

## Accessing column editors in PopUp edit mode

With the default setting of the mobile rendering, all columns will render native controls and you should have that in mind when you try to get reference to column editors.

With edit modes **EditForms** and **InPlace**,getting reference to column editors is exactly the same as with the other render modes, but a major difference is introduced in **PopUp** edit mode. The mobile **PopUp** editing introduces new edit menu, which renders a completely different layout and controls structure.


The following examples demonstrate how to get reference to **native** column editors in **PopUp** edit mode and native controls:

````ASP.NET	
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>

<telerik:RadTreeList runat="server" ID="RadTreeList1"
	RenderMode="Mobile" OnItemCreated="RadGrid1_ItemCreated">
		<Columns>
			<telerik:TreeListNumericColumn DataField="ID" HeaderText="ID"></telerik:TreeListNumericColumn>
			<telerik:TreeListDateTimeColumn DataField="Date" HeaderText="Date"></telerik:TreeListDateTimeColumn>
		</Columns>
</telerik:RadGrid>
````

````C#	
protected void RadTreeList1_ItemCreated(object sender, TreeListItemCreatedEventArgs e)
    {

        if (e.Item is TreeListEditFormItem)
        {
            TreeListEditFormItem item = e.Item as TreeListEditFormItem;
            TextBox idEditor = item.EditFormCell.FindControl("ID").Controls[0] as TextBox;   
            TextBox dateEditor = item.EditFormCell.FindControl("Date").Controls[0] as TextBox;
        }
    }

````
````VB
Protected Sub RadTreeList1_ItemCreated(sender As Object, e As TreeListItemCreatedEventArgs)
	If TypeOf e.Item Is TreeListEditFormItem Then
		Dim item As TreeListEditFormItem = TryCast(e.Item, TreeListEditFormItem)
		Dim idEditor As TextBox = TryCast(item.EditFormCell.FindControl("ID").Controls(0), TextBox)
		Dim dateEditor As TextBox = TryCast(item.EditFormCell.FindControl("Date").Controls(0), TextBox)
	End If
End Sub

````



When you want to render the standard editors for a column and you are setting the **UseNativeEditorsInMobileMode** property of a **TreeListEditableColumn** to "**false**", each column will render editors	corresponding to the column type (*for example, the TreeListNumericColumn will have a RadNumericTextBox as an editor, the TreeListDateTimeColumn will have RadDatePicker, etc.*).

## See Also

 * [Mobile rendering Overview]({%slug treelist/mobile-support/mobile-rendering/overview%})

 * [Mobile rendering data-editing]({%slug treelist/mobile-support/mobile-rendering/data-editing%})

