---
title: Creating a MultiSelect with Quantity Input in Kendo UI for jQuery
description: Learn how to create a custom MultiSelect with quantity input using Kendo UI for jQuery MultiSelect and NumericTextBox.
type: how-to
page_title: MultiSelect with Quantity Input in Kendo UI for jQuery
meta_title: MultiSelect with Quantity Input in Kendo UI for jQuery
slug: multiselect-with-quantity-input-kendo-ui-jquery
tags: multiselect, numerictextbox, kendo ui for jquery, dropdown, custom implementation
res_type: kb
ticketid: 1717800
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
MultiSelect for Kendo UI for jQuery, <br/>
NumericTextBox for Kendo UI for jQuery
</td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

There is no native Kendo UI for jQuery component that combines MultiSelect functionality with quantity input. However, you can achieve this by combining the [MultiSelect](https://docs.telerik.com/kendo-ui/controls/editors/multiselect/overview) and NumericTextBox components. The MultiSelect handles item selection, while a quantity panel displays NumericTextBox inputs for each selected item. The quantities are tracked, and a summary text is dynamically updated.

This knowledge base article also answers the following questions:
- How to create a MultiSelect dropdown with quantity input?
- How to combine Kendo UI MultiSelect and NumericTextBox?
- How to add dynamic inputs for selected items in a dropdown?

## Solution

To achieve this functionality, follow the steps below:

1. Initialize a Kendo UI for jQuery MultiSelect.
2. Set the `autoClose` property to `false` to keep the dropdown open while selecting multiple items.
3. Use the `change` event of the MultiSelect to render a quantity panel with NumericTextBox inputs.
4. Track the quantities in an object and update the summary text dynamically.

Below is the complete implementation:

```html
<label for="multiselect">Products</label>
<select id="multiselect"></select>
<div id="quantity-panel"></div>
<label for="order-summary">Generated text</label>
<input id="order-summary" class="summary-input" type="text" readonly placeholder="Selections will appear here" />

<style>
#multiselect,
.summary-input {
  width: 100%;
}

#quantity-panel {
  margin-top: 0.75rem;
}

.qty-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid #e8e3d9;
}

.qty-row:last-child {
  border-bottom: none;
}

.qty-label {
  flex: 1;
}

.qty-row .k-numerictextbox {
  width: 5.5rem;
}
</style>

<script>
$(document).ready(() => {
    let quantities = {};
    let multiselect = $("#multiselect").kendoMultiSelect({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "Apple", value: "apple" },
            { text: "Banana", value: "banana" },
            { text: "Pineapple", value: "pineapple" }
        ],
        placeholder: "Select products...",
        autoClose: false,
        change() {
            renderQuantityPanel();
            updateSummary();
        }
    }).data("kendoMultiSelect");

    function renderQuantityPanel() {
        let panel = $("#quantity-panel").empty();
        let items = multiselect.dataItems();

        if (!items.length) return;

        items.forEach((item) => {
            let { value: id, text: name } = item;

            let row = $('<div class="qty-row"></div>');
            row.append(`<span class="qty-label">${kendo.htmlEncode(name)}</span>`);
            let input = $('<input class="qty-input" />');

            row.append(input);
            panel.append(row);

            input.kendoNumericTextBox({
                min: 1,
                max: 999,
                value: quantities[id] || 1,
                format: "n0",
                decimals: 0,
                restrictDecimals: true,
                change() {
                    quantities[id] = this.value() || 1;
                    updateSummary();
                },
                spin() {
                    quantities[id] = this.value() || 1;
                    updateSummary();
                }
            });

            if (!quantities[id]) quantities[id] = 1;
        });
    }

    function updateSummary() {
        let parts = multiselect.dataItems().map((item) => {
            let qty = quantities[item.value] || 1;
            return `${qty} x ${item.text}`;
        });

        $("#order-summary").val(parts.join(", "));
    }
});
</script>
```

This implementation allows the selection of multiple items with a corresponding NumericTextBox for quantity input. The summary text dynamically displays the selected items and their quantities.

## See Also

- [MultiSelect Overview](https://docs.telerik.com/kendo-ui/controls/editors/multiselect/overview)
- [NumericTextBox Overview](https://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
