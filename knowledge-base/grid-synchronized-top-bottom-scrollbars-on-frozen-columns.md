---
title: Adding Horizontal Scrollbars to the Top and Bottom of RadGrid with Frozen Columns
description: Learn how to add synchronized horizontal scrollbars to the top and bottom of a RadGrid with frozen columns in UI for ASP.NET AJAX.
type: how-to
page_title: Synchronized Top and Bottom Scrollbars in RadGrid with Frozen Columns
meta_title: Synchronized Top and Bottom Scrollbars in RadGrid with Frozen Columns
slug: grid-synchronized-top-bottom-scrollbars-on-frozen-columns
tags: grid, frozen-columns, horizontal-scrollbar, radgrid, asp.net-ajax
res_type: kb
ticketid: 1714901
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> Grid for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

Adding a horizontal scrollbar on both the top and bottom of a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) with frozen columns requires a custom implementation. This customization synchronizes a top scrollbar with the grid's native scrollbars, which split the scrollable area and frozen columns into separate DIVs.

This knowledge base article also answers the following questions:
- How can I add a horizontal scrollbar on top of the grid with frozen columns?
- How do I synchronize two scrollbars in a RadGrid with frozen columns?
- What is the solution for top and bottom scrollbars in a RadGrid?

## Solution

To achieve synchronized horizontal scrollbars at the top and bottom of the RadGrid with frozen columns, follow these steps:

1. Add an additional DIV element above the RadGrid to act as the top scrollbar.
2. Synchronize the top scrollbar with the grid’s native scrollbars using JavaScript.

````ASP.NET
<div style="width: 800px">
    <div id="dummyScrollWrapper" style="overflow-x: scroll; margin-bottom: 5px;">
        <div id="dummyScroll" style="height: 20px;"></div>
    </div>
    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
        <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
            <Columns>
                <!-- Define your columns here -->
            </Columns>
        </MasterTableView>
        <ClientSettings>
            <Scrolling AllowScroll="true" FrozenColumnsCount="2" UseStaticHeaders="true" />
        </ClientSettings>
    </telerik:RadGrid>
</div>
````

````JavaScript
function pageLoad() {
    let grid = $find("<%= RadGrid1.ClientID %>");
    let gridId = "<%= RadGrid1.ClientID %>";
    let frozenDiv = document.getElementById(gridId + "_Frozen");
    let dummyScrollWrapper = document.getElementById("dummyScrollWrapper");
    let dummyScroll = document.getElementById("dummyScroll");

    if (!frozenDiv || !dummyScrollWrapper || !dummyScroll) return;

    // Set the initial width for the dummy scrollbar
    setTimeout(function () {
        let frozenScrollDiv = document.getElementById(`${gridId}_FrozenScroll`);
        if (frozenScrollDiv) {
            dummyScroll.style.width = frozenScrollDiv.style.width;
        }
    }, 100);

    // Synchronize the bottom scrollbar with the top scrollbar
    frozenDiv.addEventListener("scroll", function () {
        dummyScrollWrapper.scrollLeft = frozenDiv.scrollLeft;
    });

    // Synchronize the top scrollbar with the bottom scrollbar
    dummyScrollWrapper.addEventListener("scroll", function () {
        frozenDiv.scrollLeft = dummyScrollWrapper.scrollLeft;
    });

    // Adjust the scrollbar width on window resize
    $(window).on("resize", function () {
        let frozenScrollDiv = document.getElementById(`${gridId}_FrozenScroll`);
        if (frozenScrollDiv) {
            dummyScroll.style.width = frozenScrollDiv.style.width;
        }
    });
}
````

````CSS
#dummyScrollWrapper {
    overflow-x: scroll;
}

#dummyScroll {
    height: 20px;
}
````

This solution synchronizes the top scrollbar with the RadGrid's native scrollbars, ensuring smooth scrolling functionality for grids with frozen columns.

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadGrid Frozen Columns](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/scrolling/frozen-columns)

