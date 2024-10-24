---
title: Resolving Incorrect ARIA Attribute Value in RadComboBox with Load-on-Demand
description: This article provides a solution to the ARIA attribute value issue in RadComboBox with Load-on-Demand functionality, ensuring WAI-ARIA compliance.
type: troubleshooting
page_title: Fix ARIA Attribute Value Error in RadComboBox for ASP.NET AJAX
slug: combobox-aria-attribute-value-error
tags: dropdown, combobox, web forms, asp.net ajax, aria, load-on-demand, accessibility, wai-aria
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
</tbody>
</table>

## Description
When using the [RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview) with `EnableLoadOnDemand="true"` and subscribing to the `OnItemsRequested` event, an error notification from ARC Toolkit Chrome add-on indicates an error: `ARIA attribute value is incorrect`. This issue occurs on the first load when the listbox is not pre-loaded. However, after the listbox is displayed, the error does not recur.

## Cause
The problem stems from the `Load-on-Demand` functionality, where the dropdown list is not initially rendered. Consequently, the `aria-controls` attribute references an ID for a component that does not exist at the moment, leading to the error.

## Solution
To fix this issue, dynamically set the `id` attribute for the listbox in the `OnClientLoad` event and remove it in the `OnClientDropDownOpened` event. This approach ensures effective management of the `aria-controls` attribute, aligning it with the `Load-on-Demand` behavior and maintaining WAI-ARIA compliance.

```aspx
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight"
    EnableAriaSupport="true"
    AllowCustomText="true"
    CausesValidation="false"
    EnableLoadOnDemand="true" OnItemsRequested="RadComboBox1_ItemsRequested"
    OnClientLoad="OnClientLoad"
    OnClientDropDownOpened="OnClientDropDownOpened"
    EmptyMessage="RadComboBox1 Empty Message">
</telerik:RadComboBox>

<script>
    function OnClientLoad(sender, args) {
        var listboxId = sender.get_id() + "_listbox";
        $telerik.$(".rcbSlide").attr("id", listboxId);
    }

    function OnClientDropDownOpened(sender, args) {
        var listboxId = sender.get_id() + "_listbox";
        $telerik.$(".rcbSlide").removeAttr("id");
    }
</script>
```
```C#
protected void RadComboBox1_ItemsRequested(object sender, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e)
{
    RadComboBox combo = sender as RadComboBox;
    combo.Items.Add(new RadComboBoxItem("Item1", "1"));
    combo.Items.Add(new RadComboBoxItem("Item2", "2"));
    combo.Items.Add(new RadComboBoxItem("Item3", "3"));
}
```

This solution ensures the `aria-controls` attribute correctly references the listbox when it becomes available, preventing accessibility issues related to non-existent IDs.

## See Also
- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [WAI-ARIA Basics](https://www.w3.org/WAI/standards-guidelines/aria/)

