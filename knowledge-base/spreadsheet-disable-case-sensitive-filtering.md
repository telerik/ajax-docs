---
title: Implementing Case-Insensitive Filtering in RadSpreadsheet
description: Learn how to modify the RadSpreadsheet control to support case-insensitive searches and filtering for a better user experience.
type: how-to
page_title: Disable Case-Sensitive Search in RadSpreadsheet for ASP.NET AJAX
slug: spreadsheet-disable-case-sensitive-filtering
tags: radspreadsheet, asp.net ajax, filtering, case-insensitive, search
res_type: kb
ticketid: 1659553
---

## Environment

| Product | Version |
| --- | --- |
| RadSpreadsheet for ASP.NET AJAX | All |

## Description

When searching or filtering in RadSpreadsheet, the operation is case-sensitive. For instance, searching for "grid" will not match items with "Grid" where the "G" is capitalized. This can lead to confusion and a less optimal user experience. This article outlines a method to enable case-insensitive filtering to improve usability.

This KB article also answers the following questions:

- How can I make the filter search in RadSpreadsheet case-insensitive?
- Is there a way to ignore case sensitivity when filtering in RadSpreadsheet?
- How do I adjust RadSpreadsheet filtering to be case-insensitive?

## Solution

To enable case-insensitive filtering in RadSpreadsheet, you will need to override the internal filtering function. The script provided below adjusts the filtering logic to ignore case when comparing values.

Insert the following JavaScript code in your ASP.NET AJAX page that hosts the RadSpreadsheet control:

````JavaScript
if (Telerik.Web.UI.Spreadsheet && Telerik.Web.UI.Spreadsheet.FilterMenuView) {
    Telerik.Web.UI.Spreadsheet.FilterMenuView.prototype.filterValueListBox = function (value) {
        var listBox = this.controls.valueListBox;
        var items = listBox.get_items();
        var count = items.get_count();
        var item;
        var isVisible;
        var hasVisibleItems = false;

        for (var i = 0; i < count; i++) {
            item = items.getItem(i);
            isVisible = item.get_text().toLowerCase().indexOf(value.toLowerCase()) > -1;

            item.set_visible(isVisible);
            hasVisibleItems = hasVisibleItems || isVisible;
        }

        $telerik.$(listBox.get_element()).find(".rlbCheckAllItems").toggle(hasVisibleItems);
    }
}
````

By including this script, RadSpreadsheet will perform case-insensitive filtering, improving the user experience by accommodating searches regardless of text case.

## See Also

- [RadSpreadsheet Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/spreadsheet/overview)

---
