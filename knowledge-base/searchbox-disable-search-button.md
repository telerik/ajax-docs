---
title: Disabling the Search Button in RadSearchBox on the Client Side After Search
description: Learn how to disable the search button in RadSearchBox on the client side after the onClientSearch event is fired.
type: how-to
page_title: How to Disable the RadSearchBox Search Button Client-Side Post-Search
slug: searchbox-disable-search-button
tags: radsearchbox, aspnet-ajax, client-side, disable-button, onclientsearch
res_type: kb
ticketid: 1661219
---

## Environment

| Product | Version |
| --- | --- |
| RadSearchBox for ASP.NET AJAX | All |

## Description

When using the [RadSearchBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/overview) control, you might encounter a scenario where you need to disable the search button on the client side after the `onClientSearch` event is fired.

This KB article also answers the following questions:

- How can I disable the search button in RadSearchBox after a search is performed?
- Is it possible to prevent further searches by disabling the search button client-side in RadSearchBox?
- What client-side method can be used to disable the search button in RadSearchBox after a search event?

## Solution

To disable the search button on the client side after the `onClientSearch` event is triggered, perform the following steps:

1. Use local storage to store the class of the search button when the search is initiated.
2. Upon page reload, check local storage for the search button's class.
3. If found, disable the button and remove the class from local storage.

Implement the solution with the following JavaScript code:

````JavaScript
var searchButtonClass;

function pageLoad() {
    searchButtonClass = localStorage.getItem("searchButtonClass"); // Get the button's class from local storage

    if (searchButtonClass) {
        document.querySelector(`.${searchButtonClass}`).disabled = true; // Find the button element and disable it
        localStorage.removeItem("searchButtonClass"); // Remove the item from local storage
    }
}

function onClientSearch(sender, args) {
    searchButtonClass = sender.get_searchButtonElement().classList[1]; // Get the corresponding class name
    localStorage.setItem("searchButtonClass", searchButtonClass); // Add it to local storage
}
````

Add this script to your page to disable the search button after the `onClientSearch` event is fired. Ensure to call the `pageLoad` function when the page loads to check if the button needs to be disabled.

## Notes

- The solution uses local storage to remember the state of the search button across page reloads.
- Ensure the `pageLoad` function is called on every page load to check and apply the button's disabled state if necessary.

## See Also

- [RadSearchBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/overview)
- [RadSearchBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/client-side-programming/radsearchbox-object)
