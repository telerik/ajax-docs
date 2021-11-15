---
title: Set the horizontal scroll position to a specific column in a RadGrid
description: Set the horizontal scroll position to a specific column in a RadGrid. Check it now!
type: how-to
page_title: Set the horizontal scroll position to a specific column in a RadGrid
slug: grid-set-the-horizontal-scroll-position-to-a-specific-column
res_type: kb
---

## Description

By default, the scroll position on the initial load of the grid is at the beginning (leftmost column).       

## Solution

In order to set the scroll to be on the last cell execute the following JavaScript functions.

OnGridCreated event handler:

````JavaScript
function OnGridCreated(sender, args) {
    var grid = $find("<%=RadGrid1.ClientID%>");  // Get the client-side object of the Grid
    var master = grid.get_masterTableView();     // Get the master table
    var offset = master.getColumnByUniqueName("Freight").get_element().offsetLeft;  // Get the offset of the specific column cell
 
    setScroll(grid, offset);
}
````

And the setScroll function:

````JavaScript
function setScroll(grid, scrollLeft) {
    var dataDiv = $telerik.findElement(grid.get_element(), grid.get_id() + "_GridData");
    dataDiv.scrollLeft = scrollLeft;  // Set the scroll offset
} 
````

 