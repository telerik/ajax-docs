---
title: Triggering RadGrid's EnableNextPrevFrozenColumns from External Buttons
description: Learn how to control the EnableNextPrevFrozenColumns feature of RadGrid for ASP.NET AJAX using external buttons.
type: how-to
page_title: Using External Buttons to Control RadGrid's Frozen Columns Navigation
slug: grid-trigger-next-prev-frozen-columns-external-buttons
tags: radgrid, asp.net ajax, frozen columns, enablenextprevfrozencolumns, external buttons, onclientclick
res_type: kb
ticketid: 1658263
---

## Environment

| Product | RadGrid for ASP.NET AJAX |
| --- | --- |
| Version | All |

## Description

I need to control the EnableNextPrevFrozenColumns feature of the RadGrid from external buttons, without using a template inside the RadGrid. I want to trigger this feature using an OnClientClick event from these external buttons.

This KB article also answers the following questions:

- How can I use external buttons to navigate frozen columns in RadGrid?
- Is it possible to trigger RadGrid's next and previous frozen columns from buttons outside the grid?
- Can external buttons control the EnableNextPrevFrozenColumns feature in RadGrid?

## Solution

To control the EnableNextPrevFrozenColumns feature of RadGrid from external buttons, follow these steps:

1. Add two external buttons outside the RadGrid. Set their `AutoPostBack` property to `false` and subscribe them to the `OnClientClicked` event.

    ````ASP.NET
    <telerik:RadButton runat="server" ID="RadButton2" Text="Previous" AutoPostBack="false" OnClientClicked="onClientClick" />
    <telerik:RadButton runat="server" ID="RadButton1" Text="Next" AutoPostBack="false" OnClientClicked="onClientClick" />
    ````

2. Implement the `onClientClick` JavaScript function. This function will programmatically click the corresponding next or previous button within the RadGrid based on the text of the sender button.

    ````JavaScript
    function onClientClick(sender, args) {
        var button = undefined; // Declare the button 
        var text = sender.get_text(); // Get the text of the sender button

        if (text === "Next") {
            button = document.querySelector(".rgNext"); // Select the next button by its class name
        } else if (text === "Previous") {
            button = document.querySelector(".rgPrev"); // Select the previous button by its class name
        }

        if (button) {
            button.click(); // Programmatically click the selected button
        }
    }
    ````

3. Ensure the RadGrid is properly configured to use the EnableNextPrevFrozenColumns feature.

This approach allows you to control the navigation of frozen columns in RadGrid using external buttons, facilitating a more flexible UI design.

## See Also

- [Frozen Columns Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/scrolling/frozen-columns)
- [RadButton Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/overview)
