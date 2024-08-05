---
title: Changing RadTabStrip Tab Color Based on RadGrid Content
description: Learn how to dynamically change the color of a RadTabStrip tab depending on whether the associated RadGrid has data.
type: how-to
page_title: How to Change RadTabStrip Tab Color When RadGrid is Empty in ASP.NET AJAX
slug: tabstrip-change--tab-color-based-on-grid-content
tags: radtabstrip, radgrid, asp.net ajax, tab color, empty grid
res_type: kb
ticketid: 1660206
---

## Environment

| Product | Version |
| --- | --- |
| RadTabStrip for ASP.NET AJAX | All|

## Description

I need to change the color of a tab in [RadTabStrip](https://docs.telerik.com/devtools/aspnet-ajax/controls/tabstrip/overview) when the associated RadGrid is empty. How can I achieve this?

This KB article also answers the following questions:

- How to dynamically change RadTabStrip tab color based on RadGrid data?
- How can I highlight empty grids in a TabStrip control?
- Is it possible to visually indicate when a RadGrid within a RadTabStrip has no records?

## Solution

To dynamically change the color of a RadTabStrip tab based on the content of an associated RadGrid, follow these steps:

1. Create a JavaScript function to check if the RadGrid has any records.
2. Find the corresponding tab in the RadTabStrip.
3. If the RadGrid is empty, add a CSS class to the tab to change its background color.
4. Ensure the CSS class is applied when a tab is selected, as internal styling may override it.

Here is the JavaScript code:

````JavaScript
function setTabColor() {
    var hasRecords = getHasRecords($find("<%= RadGrid1.ClientID %>")); // Check if the Grid has any records
    var tabStrip = $find("<%= TabStrip1.ClientID %>"); // Find the TabStrip and corresponding tab
    var tab = tabStrip.findTabByText("TAB2");

    if (tab && !hasRecords) {
        tab.get_element().classList.add("myClass"); // Add the CSS class
    }
}

function getHasRecords(grid) {
    var masterTable = grid.get_masterTableView();
    return masterTable.get_dataItems().length > 0 ? true : false;
}

function pageLoad() {
    setTabColor();
}

function onTabSelected(sender, args) {
    setTabColor();
}
````

And the CSS:

````CSS
html body .RadTabStrip .rtsLI.myClass .rtsLink {
    background-color: red;
    background-image: none;
}
````

Add these scripts to your page and the tab color will change based on whether the associated RadGrid is empty.

## Notes

- Replace `"TAB2"` in the `findTabByText` method with the actual text of the tab you want to target.
- Ensure the RadGrid's `ClientID` is correctly referenced in the `$find` method.

## See Also

- [RadTabStrip Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/tabstrip/overview)
- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
