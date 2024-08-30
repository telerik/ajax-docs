---
title: Selecting a Drawer Item After Postback in RadDrawer for ASP.NET AJAX
description: Learn how to maintain the selection of a RadDrawer item after postback when using navigation URLs, ensuring a consistent user experience.
type: how-to
page_title: How to Keep RadDrawer Item Selected After Postback in ASP.NET AJAX Applications
slug: drawer-how-to-persist-item-selection-after-postback
tags: raddrawer, asp.net ajax, postback, navigation, selection, local storage
res_type: kb
ticketid: 1662980
---

## Environment

| Product | RadDrawer for ASP.NET AJAX |
| --- | --- |
| Version | All |

## Description

In an ASP.NET AJAX application, I have implemented a [RadDrawer](https://docs.telerik.com/devtools/aspnet-ajax/controls/drawer/overview) control that contains items with navigation URLs. When an item is clicked, it navigates to the respective page. After the navigation and postback, I want the previously selected item to remain selected. How can this be achieved?

This KB article also answers the following questions:

- How can the selection of a navigation item in RadDrawer persist across postbacks?
- How do you use local storage to remember the selected item in RadDrawer?
- How to restore the selection of a RadDrawer item after navigating to another page?

## Solution

To maintain the selection state of a RadDrawer item across postbacks when navigation URLs are involved, use the local storage or a query parameter to store the selected item's index upon clicking. Then, upon page load, check for the stored selected item and reapply the selection. Below is a step-by-step guide to implement this functionality:

1. **Store the Selected Item Index**: On the item click event, store the index of the clicked item in local storage.
2. **Restore the Selected Item**: On page load, retrieve the stored item index from local storage and apply the 'selected' class to the corresponding drawer item.

### Implementing the Solution

Define the RadDrawer with Client-Side Events:

````ASP.NET
<telerik:RadDrawer runat="server" ID="RadDrawer1" Mode="push" DrawerWidth="200" SwipeToOpen="true">
    <ContentTemplate>
        <p style="user-select: none">
            This is the content element containing the text.
        </p>
        <p style="user-select: none">
            Swipe/Drag the mouse to the right to open the RadDrawer.
        </p>
    </ContentTemplate>
    <ItemsTemplate>
        <ul> 
            <li data-role='drawer-item'>
                <a href="https://www.example.com/">Item 1</a>
            </li>
            <li data-role='drawer-item'>
                <a href="https://www.example.com/">Item 2</a>
            </li> 
            <li data-role='drawer-item'>
                <a href="https://www.example.com/">Item 3</a>
            </li> 
        </ul>
    </ItemsTemplate>
    <ClientEvents OnItemClick="onItemClick" />
</telerik:RadDrawer>
````

Add the JavaScript Code to Handle Selection:

````JavaScript
var drawerItems = [];

document.addEventListener('DOMContentLoaded', function () {
    drawerItems = document.querySelectorAll('[data-role="drawer-item"]');
    var selectedIndex = localStorage.getItem('selectedDrawerItem'); // Check for a selected item in localStorage

    if (selectedIndex !== null) {
        drawerItems.forEach(function (item) {
            item.classList.remove('k-state-selected'); // Remove existing selection
        });

        drawerItems[selectedIndex].classList.add('k-state-selected'); // Apply the selection to the stored item
    }
});

function onItemClick(sender, args) {
    var clickedItemIndex = Array.from(drawerItems).indexOf(args.get_item());

    localStorage.setItem('selectedDrawerItem', clickedItemIndex); // Store the index of the selected item
}
````

This script listens for the `DOMContentLoaded` event to restore the selected item based on the index stored in local storage. When a drawer item is clicked, the `onItemClick` function stores the index of the clicked item in local storage.

## Notes

- Ensure that each navigation URL is unique to prevent conflicts in selection states when navigating between pages.
- Adjust the CSS class used for selected items (`k-state-selected` in this example) based on your application's styling requirements.

## See Also

- [RadDrawer Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/drawer/overview)
- [Local Storage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
