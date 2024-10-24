---
title: Fixing Missing ARIA Attributes in RadComboBox with CheckBoxes
description: Learn how to address the missing aria-checked attributes and correct the invalid use of aria-selected in RadComboBox items with checkboxes and ARIA support enabled.
type: troubleshooting
page_title: How to Correct ARIA Attribute Errors in RadComboBox with CheckBoxes for Accessibility Compliance
slug: radcombobox-checkboxes-aria-support
tags: radcombobox, asp.net ajax, aria, checkboxes, accessibility, wcag
res_type: kb
ticketid: 1667614
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
<td>2024.3.805</td>
</tr>
</table>

## Description

When using the [RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview) with `EnableAriaSupport` set to `true` and `CheckBoxes` enabled, ARC toolkit reports errors related to missing `aria-checked` attributes and an invalid use of `aria-selected` in elements with the role of checkbox. This issue occurs when the dropdown is extended.

## Cause

The cause of the issue is that the RadComboBox items with checkboxes enabled and ARIA support do not automatically manage the `aria-checked` attribute, which is required for checkboxes to be compliant with WCAG 2.2 Success Criterion 4.1.2. Additionally, the `aria-selected` attribute is used incorrectly in this context.

## Solution

To resolve the missing `aria-checked` attributes and correct the invalid use of `aria-selected`, add a JavaScript function that sets the `aria-checked` attribute for each checkbox item in the RadComboBox when the dropdown is opened. This function also ensures that the `aria-selected` attribute is handled correctly.

The following example demonstrates how to implement this solution:

```aspx
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" EnableAriaSupport="true" CheckBoxes="true" OnClientDropDownOpened="onDropDownOpened">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" />
        <telerik:RadComboBoxItem Text="Item 2" />
        <telerik:RadComboBoxItem Text="Item 3" />
        <telerik:RadComboBoxItem Text="Item 4" />
    </Items>
</telerik:RadComboBox>

<script>
    function onDropDownOpened(sender, args) {
        var $ = $telerik.$;
        // Select all li elements with class rcbItem and role checkbox and update aria-checked attribute
        $('.rcbItem[role="checkbox"]').each(function () {
            if ($(this).find('.rcbCheckBox').is(':checked')) {
                $(this).attr('aria-checked', 'true');
            } else {
                $(this).attr('aria-checked', 'false');
            }
        });
    }
</script>
```

This script selects all list items (`li`) with the class `rcbItem` and the role `checkbox`, and updates the `aria-checked` attribute based on whether the checkbox within the item is checked or not. This approach ensures that the RadComboBox with checkboxes complies with accessibility standards.

## See Also

- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [WCAG 2.2 Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
