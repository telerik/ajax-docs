---
title: Deselect checkboxes when text is deleted
description: Learn how to deselect a checkbox when the corresponding text is deleted from the text section.
type: how-to
page_title: Deselect checkboxes when text is deleted
slug: combobox-deselect-checkboxes-when-text-is-deleted
tags: radcombobox, checkbox, text, deselect, delete
res_type: kb
ticket-id: 1649559
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

I would like to deselect a checkbox in a RadComboBox when the corresponding text is deleted from the text section. Currently, deleting the text does not update the combobox selections.

## Solution

To achieve this, you can use the [`OnClientTextChange`]({%slug combobox/client-side-programming/events/onclienttextchange%})  event of the ComboBox. Whenever the text changes,   it will iterate through the checked items and deselect any item whose text is not included in the current text of the Combobox.

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" Width="300px"
    OnClientTextChange="onClientTextChange" AllowCustomText="true" CheckBoxes="true" Filter="Contains">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" />
        <telerik:RadComboBoxItem Text="Item 2" />
        <telerik:RadComboBoxItem Text="Item 3" />
        <telerik:RadComboBoxItem Text="Item 4" />
        <telerik:RadComboBoxItem Text="Item 5" />
    </Items>
</telerik:RadComboBox>
````

````JavaScript
function onClientTextChange(sender, args) {
    var comboBox = sender;
    var text = comboBox.get_text().toLowerCase(); // Get the text from the input and convert it to lowercase
    var checkedItems = comboBox.get_checkedItems(); // Get the checked items

    checkedItems.forEach((item) => {
        var itemText = item.get_text().toLowerCase(); // Get the text of each checked item and convert it to lowercase

        if (!text.includes(itemText)) { // Check if the item's text is not included in the current text of the combobox
            item.uncheck(); // Deselect the item
        }
    });
}
````


   
