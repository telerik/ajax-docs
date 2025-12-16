---
title: Persisting Search Context in RadSearchBox Across Page Reloads
description: Learn how to maintain the selected search context in RadSearchBox for ASP.NET AJAX using local storage, ensuring the last search context is preset after a page reload.
type: how-to
page_title: How to Persist Search Context in RadSearchBox for ASP.NET AJAX
slug: persist-search-context-radsearchbox
tags: radsearchbox, asp.net ajax, localstorage, search context, client-side
res_type: kb
ticketid: 1657667
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms SearchBox for ASP.NET AJAX</td>
    </tr>
</table>

## Description

When using the RadSearchBox, it's convenient for users to have their last search context automatically selected when they return to the page. This KB article also answers the following questions:

- How do I save the RadSearchBox search context to local storage?
- How to retrieve and set the RadSearchBox search context from local storage on page load?
- How can I ensure the search context selected by a user persists across page reloads?

## Solution

To persist the search context of the [RadSearchBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/client-side-programming/events/onclientsearch#onclientsearch) across page reloads, use the `localStorage` web API to store the search context when it changes and retrieve it on page load. Follow these steps:

1. Setup the SearchBox and its data sources: 

````ASP.NET
<telerik:RadSearchBox RenderMode="Lightweight" ID="RadSearchBox1" runat="server" Width="500" DropDownSettings-Height="200px"
    DataSourceID="SqlDataSource1" DataTextField="ProductName" DataValueField="ProductID" DataContextKeyField="SupplierID">
    <SearchContext DataSourceID="SqlDataSource2" DataTextField="ContactName" DataKeyField="SupplierID" />
</telerik:RadSearchBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT [ProductId], [ProductName],[SupplierID] FROM [Products]"></asp:SqlDataSource>
<asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT TOP 10 [SupplierID], [ContactName] FROM [Suppliers]"></asp:SqlDataSource>
````

2. **Persist Search Context Drop-Down Item**: To remember the selected item in the search context dropdown, override the search context's prototype methods to handle item click events and page load retrieval.

````JavaScript
var $T = Telerik.Web.UI;

$T.SearchContext.prototype._onItemClick = function (e) {
    var target = $T.RadSearchBox._getTarget(e); // Get the clicked li element
    var targetText = target.textContent; // Get the target's text 

    if (targetText) {
        localStorage.setItem("searchContextTarget", targetText); // Save the text in the local storage
    }

    this._updateControlState(target);
    this._closeDropDown();
    this.get_element().focus();
}

function pageLoad() {
    $T.SearchContext.prototype._updateControlState = function (element) {
        var itemText = localStorage.getItem("searchContextTarget"); // Retrieve the item from local storage

        var selectedItem = this._selectedItem; // Reference to the currently selected item in the SearchContext
        var listItems = document.querySelectorAll("li"); // Select all <li> elements in the document
        var listItem;

        // Iterate over each <li> element to find the one that contains the text from local storage
        listItems.forEach(function(item) {
            if (item.textContent.includes(itemText)) { // Check if the text includes the desired item
                listItem = item;
            }
        });

        if (listItem) { // If the desired list item is found
            var item = listItem._item; // The list item has a property _item which refers to the relevant object

            if (item) { 
                item.set_selected(true); // Set the item as selected
            } else {
                if (selectedItem) { // If no item object and there's a selected item
                    selectedItem.set_selected(false); // Deselect the currently selected item
                } else {
                    this._updateInputElement(this._defaulItemText); // Update the input element with a default item text if no item is selected
                }
            }
        }
    }

    $T.SearchContext.prototype._updateControlState(); // Call the updated _updateControlState function
}
````

This solution ensures that the search context the user selects is preserved across page reloads, improving the user experience by remembering their last search context.

## See Also

- [RadSearchBox Client-Side Programming]({%slug searchbox/client-side-programming/radsearchbox-object%})
- [Local Storage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
