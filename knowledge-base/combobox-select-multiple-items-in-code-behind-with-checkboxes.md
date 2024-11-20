---
title: Select Multiple Items in Code-Behind with CheckBoxes 
description: Learn how to programmatically select multiple items in a RadComboBox when CheckBoxes are enabled, using the Page_Load event in ASP.NET AJAX.
type: how-to
page_title: Select Multiple Items in Code-Behind with CheckBoxes 
slug: combobox-select-multiple-items-in-code-behind-with-checkboxes
tags: radcombobox, asp.net ajax, checkboxes, selection, programmatically
res_type: kb
ticketid: 1670621
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadComboBox for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using the [RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview) with `CheckBoxes="True"`, I need to allow the selection of multiple values. How can I programmatically set some values as selected on the Page-Load of the page? This KB article also answers the following questions:

- How to check multiple items in RadComboBox programmatically?
- How to set selected values in RadComboBox with CheckBoxes on page load?
- How to highlight selected items in RadComboBox with CheckBoxes?

## Solution

To achieve the selection of multiple values in a RadComboBox with checkboxes enabled, use the `Page_Load` event to iterate over the items and set the `Checked` property of each `RadComboBoxItem` that you want to select to `true`. Here is a step-by-step guide to accomplish this:

1. **Prepare a List of Values to Select**: Identify and prepare a list of the values that you want to be selected by default.

2. **Iterate Over RadComboBox Items**: Loop through each item in the RadComboBox.

3. **Check Items Based on Values**: For each item, check if its value is in the list of values to select. If so, set its `Checked` property to `true`.

### Code Example

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" OnClientLoad="onLoad"
    EmptyMessage="Select item" CheckBoxes="True" EnableCheckAllItemsCheckBox="True">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" Value="Value1" />
        <telerik:RadComboBoxItem Text="Item 2" Value="Value2" />
        <telerik:RadComboBoxItem Text="Item 3" Value="Value3"/>
        <telerik:RadComboBoxItem Text="Item 4" Value="Value4"/>
    </Items>
</telerik:RadComboBox>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // List of values you want to select by default
        List<string> selectedValues = new List<string> { "Value1", "Value2", "Value3" };

        // Iterate over the items in the RadComboBox
        foreach (RadComboBoxItem item in rcbCompagnie.Items)
        {
            // Check if the item's value is in the list of selected values
            if (selectedValues.Contains(item.Value))
            {
                item.Checked = true;
            }
        }
    }
}
````

### Styling Selected Items

To style the selected items, you can use the `OnClientLoad` event:

````JavaScript
function onLoad(sender, args) {
    let items = sender.get_items().toArray();
    let checkedItems = items.filter((item) => item.get_checked());

    checkedItems.forEach((item) => {
        item.get_element().style.backgroundColor = "red";
    })
}
````

## See Also

- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [Client-Side Programming of RadComboBox](https://www.telerik.com/products/aspnet-ajax/documentation/controls/combobox/client-side-programming/events/onclientload#onclientload)
