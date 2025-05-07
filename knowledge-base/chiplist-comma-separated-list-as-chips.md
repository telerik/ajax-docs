---
title: Representing Comma-Separated List as Chips in RadChipList for ASP.NET AJAX
description: Learn how to dynamically convert comma-separated values into chips using RadChipList for ASP.NET AJAX and bind the data effectively.
type: how-to
page_title: Dynamically Convert Comma-Separated Values into Chips in RadChipList
slug: chiplist-comma-separated-list-as-chips
tags: radchiplist, asp.net-ajax, createitem, dynamic-chips, binding-data
res_type: kb
ticketid: 1686711
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>
RadChipList for ASP.NET AJAX
</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I need to allow users to input values, like medical condition codes, in a text box and dynamically convert each value into a chip when followed by a comma. This functionality should reflect how Adobe Lightroom handles keywords for photos—users type a word followed by a comma, and it transforms into a chip. I also want to store and bind this data appropriately, considering the use of a comma-separated string.

This knowledge base article also answers the following questions:

- How to dynamically create chips in RadChipList for ASP.NET AJAX?
- How to convert user input into RadChipList items with a text box?
- How to bind data from RadChipList into a comma-separated string?

## Solution

To achieve this functionality, use the `RadChipList` control alongside a `RadTextBox` to dynamically create chips each time the user enters a value followed by a comma. The `createItem` method of the [RadChipList](https://www.telerik.com/products/aspnet-ajax/documentation/controls/chiplist/client-side-programming/methods#createitem) enables dynamic chip creation. Follow the steps below:

1. Add a `RadTextBox` and a `RadChipList` to your page.
2. Use the `OnKeyPress` client-side event of the `RadTextBox` to check for the comma character.
3. When a comma is detected, extract the input, create a chip using `createItem`, and clear the text box for further input.

````ASP.NET
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
    <ClientEvents OnKeyPress="onKeyPress" />
</telerik:RadTextBox>

<telerik:RadChipList runat="server" ID="ChipList1" />
````

````JavaScript
let itemsArray = [];

function onKeyPress(sender, args) {
    if (args.get_keyCharacter() === ',') {
        let code = sender.get_textBoxValue().trim(); // Get current input

        if (code) {
            let chipList = $find('<%= ChipList1.ClientID %>'); // Find RadChipList instance
            let selectedChip = chipList.createItem(code); // Create a chip with the input text

            itemsArray.push(selectedChip); // Add chip to array
            chipList.set_items(itemsArray); // Update the chip list

            setTimeout(() => {
                sender.set_textBoxValue(""); // Clear the text box for new input
            }, 10);
        }
    }
}
````

Explanation:

- The `OnKeyPress` event triggers each time a key is pressed within the `RadTextBox`.
- The `args.get_keyCharacter()` method checks if the pressed key is a comma.
- The `createItem` method dynamically creates a chip with the input text.
- The `set_textBoxValue()` method clears the text box after the chip is created.

## See Also

- [RadChipList Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/chiplist/overview)
