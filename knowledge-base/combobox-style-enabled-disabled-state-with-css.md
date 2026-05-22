---
title: Styling the RadComboBox with CSS for Enabled and Disabled States
description: Learn how to style the RadComboBox in UI for ASP.NET AJAX to match the background of the RadTextBox for both enabled and disabled states.
type: how-to
page_title: How to Apply Custom CSS Styles to RadComboBox States
meta_title: Custom CSS for RadComboBox Enabled and Disabled States
slug: combobox-style-enabled-disabled-state-with-css
tags: radcombobox, css, styling, enabled, disabled, ui-for-asp-net-ajax
res_type: kb
ticketid: 1714420
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadComboBox for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to style the RadComboBox so that its background color is white when enabled and grey when disabled, similar to the RadTextBox. I am unable to get the desired background color changes to reflect on the RadComboBox.

This knowledge base article also answers the following questions:
- How to customize the background color of RadComboBox for enabled and disabled states?
- How to match RadComboBox styling with RadTextBox?
- How to apply different styles to RadComboBox based on its state?

## Solution

To style the RadComboBox to visually match the RadTextBox for both enabled and disabled states, use the following custom CSS:

````CSS
/* Style for enabled RadComboBox */
html body .RadComboBox .rcbInput {
    background-color: #fff; /* White background for enabled */
}

/* Style for disabled RadComboBox */
html body .RadComboBox .rcbDisabled .rcbInput {
    background-color: #e0e0e0; /* Grey background for disabled */
}
````

### Steps to Apply the CSS

1. Add the CSS code to your web application's stylesheet or `<style>` section.
2. Ensure the class selectors `.rcbInput` and `.rcbDisabled` are applied correctly to the RadComboBox input elements.
3. Adjust the background-color values (`#fff` for white and `#e0e0e0` for grey) to match your design requirements.

This will ensure that the RadComboBox has a white background when enabled and a grey background when disabled.

## See Also

- [RadComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [RadTextBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview)
