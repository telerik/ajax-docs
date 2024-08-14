---
title: Dynamically Styling Items in RadAutoCompleteBox
description: Learn how to apply dynamic styling to RadAutoCompleteBox items based on their properties, such as marking discontinued items in red.
type: how-to
page_title: How to Apply Dynamic Styles to RadAutoCompleteBox Items Based on Conditions
slug: autocompletebox-dynamically-styling-items
tags: radautocompletebox, asp.net ajax, dynamic styling, client-side programming, onclientdropdownopened
res_type: kb
ticketid: 1661377
---

## Environment

| Product | Version |
| --- | --- |
| RadAutoCompleteBox for ASP.NET AJAX | All |

## Description

I want to control the dynamic styling of the [RadAutoCompleteBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/overview). Specifically, I need to show items in inventory, turning the discontinued items red.

This KB article also answers the following questions:

- How can I change the background color of RadAutoCompleteBox items based on a condition?
- Is it possible to apply custom styles to specific items in RadAutoCompleteBox?
- Can I dynamically style RadAutoCompleteBox items using client-side events?

## Solution

To dynamically style items in the RadAutoCompleteBox, use the `OnClientDropDownOpened` event. Loop through all items in the expanded dropdown and change their color based on whether they are discontinued.

1. Handle the `OnClientDropDownOpened` event in your RadAutoCompleteBox definition:

````ASP.NET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" EmptyMessage="Please type here" DataSourceID="SqlDataSource1" DataTextField="FirstName" InputType="Text" Width="350" DropDownWidth="150px" OnClientDropDownOpened="onDropDownOpened" />
````

2. Implement the `onDropDownOpened` function to loop through the dropdown items and apply the desired styling:

````JavaScript
function onDropDownOpened(sender, args) {
    var dropDown = sender.get_dropDownElement();
    var list = dropDown.querySelector("ul");
    var itemCollection = list.childNodes;

    itemCollection.forEach((item) => {
        var isDiscontinued = getIsDiscontinued(item); // Logic to check if an item is discontinued

        if (isDiscontinued) {
            item.style.backgroundColor = "red";
        }
    });
}

function getIsDiscontinued(item) {
    // Replace with actual logic to check if an item is discontinued
    if (item.textContent.includes("n")) { // Example condition
        return true;
    }

    return false;
}
````

In this solution, the `getIsDiscontinued` function is a placeholder for your logic to determine if an item is discontinued. Replace it with your actual logic.

## Notes

- The `OnClientDropDownOpened` event occurs when the dropdown of the RadAutoCompleteBox is opened.
- Use appropriate conditions within the `getIsDiscontinued` function to match your specific requirements for identifying discontinued items.

## See Also

- [RadAutoCompleteBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/client-side-programming/overview)
- [RadAutoCompleteBox Server-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/server-side-programming/overview)
