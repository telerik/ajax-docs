---
title: Make Items Exclusive and Randomize Selections in RadCheckBoxList
description: Learn how to mark certain RadCheckBoxList items as exclusive, enabling a unique selection behavior, select all non-exclusive items, and randomize the list order.
type: how-to
page_title: Make Items Exclusive and Randomize Selections in RadCheckBoxList
slug: checkboxlist-exclusive-selection-randomization
tags: radcheckboxlist, asp.net ajax, exclusive selection, randomize list, select all, buttonlistitem
res_type: kb
ticketid: 1669462
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadCheckBoxList for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description
I'm working with a RadCheckBoxList with multi-choice enabled and need to implement several behaviors. First, I want to mark one or more choices as "exclusive" - selecting one of these clears all other selections. Secondly, I need a way to select all values except the exclusive ones. Lastly, I'm looking to randomize the list of items. This KB article also answers the following questions:

- How can I make selections in RadCheckBoxList mutually exclusive?
- What is the approach to select all items except certain ones in RadCheckBoxList?
- How can I randomize the items in RadCheckBoxList?

## Solution

To customize the selection behavior and list order in RadCheckBoxList, follow these steps:

### Marking Items as Exclusive

Handle the `OnSelectedIndexChanged` event. When an exclusive item is selected, clear all other selections. Use a list to manage exclusive items based on your data source.

````C#
protected void RadCheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
{
    List<string> exclusiveItems = new List<string> { "1", "7", "10" }; // Example exclusive items

    foreach (ButtonListItem item in RadCheckBoxList1.Items)
    {
        if (exclusiveItems.Contains(item.Value) && item.Selected)
        {
            foreach (ButtonListItem otherItem in RadCheckBoxList1.Items)
            {
                if (!exclusiveItems.Contains(otherItem.Value))
                {
                    otherItem.Selected = false;
                }
            }
            break;
        }
    }
}
````

### Select All Non-Exclusive Items

Add a button to select all items except the exclusive ones. Refer to the same list of exclusive items to identify which items to select.

````C#
protected void SelectAllButton_Click(object sender, EventArgs e)
{
    List<string> exclusiveItems = new List<string> { "1", "7", "10" }; // Example exclusive items

    foreach (ButtonListItem item in RadCheckBoxList1.Items)
    {
        if (!exclusiveItems.Contains(item.Value))
        {
            item.Selected = true;
        }
    }
}
````

### Randomize the List of Items

Shuffle the list items programmatically and rebind them to the RadCheckBoxList.

````C#
protected void RandomizeButton_Click(object sender, EventArgs e)
{
    List<ButtonListItem> items = RadCheckBoxList1.Items.Cast<ButtonListItem>().ToList();
    List<ButtonListItem> shuffledItems = items.OrderBy(item => Guid.NewGuid()).ToList();

    RadCheckBoxList1.Items.Clear();

    foreach (ButtonListItem item in shuffledItems)
    {
        RadCheckBoxList1.Items.Add(item);
    }
}
````

### Full code snippet

````ASP.NET
<telerik:RadCheckBoxList ID="CheckBoxList1" runat="server" OnSelectedIndexChanged="RadCheckBoxList1_SelectedIndexChanged" >
    <Items>
        <telerik:ButtonListItem Text="Item1" Value="1" />
        <telerik:ButtonListItem Text="Item2" Value="2" />
        <telerik:ButtonListItem Text="Item3" Value="3" />
        <telerik:ButtonListItem Text="Item4" Value="4" />
        <telerik:ButtonListItem Text="Item5" Value="5" />
        <telerik:ButtonListItem Text="Item6" Value="6" />
    </Items>
</telerik:RadCheckBoxList>

<telerik:RadButton runat="server" ID="RadButton2" Text="Select non-exclusive values" AutoPostBack="true" OnClick="RadButton1_Click" />
<telerik:RadButton runat="server" ID="RadButton1" Text="Randomize" AutoPostBack="true" OnClick="RandomizeButton_Click" />
````

````C#
List<string> exclusiveItems = new List<string> { "1", "3", "5" }; // Example exclusive items

protected void RadCheckBoxList1_SelectedIndexChanged(object sender, EventArgs e)
{
    foreach (ButtonListItem item in CheckBoxList1.Items)
    {
        if (exclusiveItems.Contains(item.Value) && item.Selected)
        {
            foreach (ButtonListItem otherItem in CheckBoxList1.Items)
            {
                if (!exclusiveItems.Contains(otherItem.Value))
                {
                    otherItem.Selected = false;
                }
            }
            break;
        }
    }
}

protected void RadButton1_Click(object sender, EventArgs e)
{
    foreach (ButtonListItem item in CheckBoxList1.Items)
    {
        if (!exclusiveItems.Contains(item.Value))
        {
            item.Selected = true;
        }
    }
}

protected void RandomizeButton_Click(object sender, EventArgs e)
{
    ButtonListItemCollection itemsList = CheckBoxList1.Items;

    List<ButtonListItem> items = CheckBoxList1.Items.Cast<ButtonListItem>().ToList();
    List<ButtonListItem> shuffledItems = items.OrderBy(item => Guid.NewGuid()).ToList();

    CheckBoxList1.Items.Clear();

    foreach (ButtonListItem item in shuffledItems)
    {
        CheckBoxList1.Items.Add(item);
    }
}
````

These steps provide a foundation for implementing exclusive selection, a select-all function respecting exclusivity, and randomizing RadCheckBoxList items. Adjust the code samples to fit your specific requirements and data source.

## See Also

- [RadCheckBoxList Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/checkboxlist/overview)
- [RadCheckBoxList Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/checkboxlist/client-side-programming/overview)
