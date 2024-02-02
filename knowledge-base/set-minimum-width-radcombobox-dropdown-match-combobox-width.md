---
title: Setting the Minimum Width of RadComboBox Dropdown in ASP.NET AJAX
description: Learn how to set the minimum width of the dropdown in a RadComboBox to match the width of the combobox itself.
type: how-to
page_title: Set Minimum Width of RadComboBox Dropdown to Match Combobox Width
slug: set-minimum-width-radcombobox-dropdown-match-combobox-width
tags: radcombobox, dropdown, width, asp.net ajax
res_type: kb
---
## Environment
| Property | Value |
| --- | --- |
| Product | RadComboBox for ASP.NET AJAX |
| Version | all |

## Description
To ensure that the dropdown of a RadComboBox is always at least as wide as the combobox itself, you can use the following approach:

## Solution
1. Add the following JavaScript code to your page:

```javascript
<script>
    function OnClientDropDownOpening(sender, args) {
        var comboboxWidth = sender.get_wrapper().parentElement.style.width;
        sender.get_dropDownElement().style.minWidth = comboboxWidth;
    }
</script>
```

2. In your RadComboBox markup, add the `OnClientDropDownOpening` event handler and set the `DropDownAutoWidth` property to "Enabled".

```html
<telerik:RadComboBox ID="RadComboBox1" DropDownAutoWidth="Enabled" Width="150px" OnClientDropDownOpening="OnClientDropDownOpening" runat="server">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" />
        <telerik:RadComboBoxItem Text="Item 2" />
        <telerik:RadComboBoxItem Text="Item 3" />
        <telerik:RadComboBoxItem Text="Item 4" />
    </Items>
</telerik:RadComboBox>
```

This code will ensure that the dropdown width of the RadComboBox matches the width of the combobox itself if the width based on the contents is smaller than the combobox's width.

## See Also
- [RadComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [DropDownAutoWidth Property Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview#dropdownautowidth-property)
