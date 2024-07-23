---
title: Clearing Row Selection in RadGrid When Clicking Outside the Grid
description: Learn how to deselect rows in RadGrid for ASP.NET AJAX when the user clicks outside of the grid area.
type: how-to
page_title: Deselect RadGrid Rows by Clicking Outside the Grid in ASP.NET AJAX
slug: grid-clear-selected-rows-when-clicking-outside-the-grid
tags: radgrid, asp.net ajax, row selection, deselect, click event
res_type: kb
ticketid: 1659034
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All |

## Description

In scenarios where a RadGrid is used for selecting rows, it might be required to clear the selection when the user clicks outside the grid area. This functionality is useful in enhancing user experience by providing a clear way to deselect rows without having to manually clear the selection.

This KB article also answers the following questions:

- How can I improve user interaction with RadGrid selection?
- Is it possible to clear RadGrid selection by clicking outside the grid?
- What method can be used to deselect RadGrid rows on outside clicks?

## Solution

To achieve the functionality of clearing the RadGrid row selection when clicking outside the grid area, follow these steps:

1. Enable row selection in your RadGrid by setting the `AllowRowSelect` property to `true` in the ASP.NET markup.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px" AllowMultiRowSelection="true">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            ...
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <Selecting AllowRowSelect="true" />
    </ClientSettings>
</telerik:RadGrid>
````

2. Attach a click event handler to the document. This handler will listen for clicks occurring outside the RadGrid and clear the row selection accordingly.

````JavaScript
document.addEventListener('click', function (event) {
    var grid = $find("<%= RadGrid1.ClientID %>"); // Get the RadGrid control
    var target = event.target || event.srcElement; // Get the clicked target element
    var isClickInsideGrid = target.closest && target.closest("#<%= RadGrid1.ClientID %>");  // Check if the clicked target is outside the RadGrid
    
    if (!isClickInsideGrid && grid) {
        grid.get_masterTableView().clearSelectedItems(); // Clear the row selection
    }
});
````

This script checks if the click event occurred outside the RadGrid and then calls the `clearSelectedItems` method on the master table view of the grid to clear any selected rows.

## Notes

- Ensure that the RadGrid's `ClientID` is correctly replaced in the script to match your grid's ID.
- This solution assumes that you have jQuery available on your page since the `closest` function is part of jQuery. If jQuery is not available, you might need to implement an alternative way to check if the click occurred inside the grid.

## See Also

- [RadGrid for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Client-Side API Reference for RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/overview)
