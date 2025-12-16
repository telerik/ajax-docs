---
title: Persisting Search Context in RadSearchBox for ASP.NET AJAX
description: Learn how to save and automatically preset the last selected search context in RadSearchBox using local storage.
type: how-to
page_title: Save and Preset Search Context in RadSearchBox
slug: searchbox-persist-search-context-radsearchbox
tags: radsearchbox, asp.net-ajax, localstorage, search, context, persist
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

When using the [RadSearchBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/overview) in ASP.NET AJAX applications, it may be necessary to preserve the user's last search context even after the page reloads. This KB article also answers the following questions:

- How can I save the search context of RadSearchBox into local storage?
- How do I automatically set the search context in RadSearchBox on page load?
- What is the best way to persist search information in a web application?

## Solution

To persist the search context of a RadSearchBox, follow these steps:

1. Handle the `OnClientSearch` event to save the current search context into the local storage.
2. Use the `OnClientLoad` event to preset the search context from the local storage when the RadSearchBox loads.

### Step-by-Step Implementation

1. **Add the RadSearchBox to your ASP.NET Page:**

    Define the RadSearchBox control with `OnClientLoad` and `OnClientSearch` event handlers.

    ````ASP.NET
    <telerik:RadSearchBox runat="server" ID="RadSearchBox1" DataSourceID="SqlDataSource1" OnClientLoad="onLoad" 
        OnClientSearch="onClientSearch" DataKeyNames="FirstName" DataTextField="FirstName" EnableAutoComplete="true">
    </telerik:RadSearchBox>

    <asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
        ProviderName="System.Data.SqlClient" SelectCommand="SELECT [FirstName], [LastName], [EmployeeID] FROM [Employees]"></asp:SqlDataSource>
    ````

2. **Implement the JavaScript Functions:**

    - The `onClientSearch` function captures the current search context and stores it in local storage.
    - The `onLoad` function retrieves the stored search context and sets it as the value of the input element of RadSearchBox when the page loads.

    ````JavaScript
    function onClientSearch(sender, args) {
        var searchContext = args.get_text();
        localStorage.setItem('LastSearchContext', searchContext);
    }

    function onLoad(sender, args) {
        var searchBox = $find("<%= RadSearchBox1.ClientID %>");
        var inputElement = searchBox.get_inputElement();

        var lastSearch = localStorage.getItem('LastSearchContext'); // Retrieve the search context from local storage
        if (lastSearch) {
            inputElement.value = lastSearch;
        }
    }
    ````

By following these steps, the RadSearchBox will remember the user's last search context even after the page is reloaded, enhancing the user experience.

## See Also

- [RadSearchBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/searchbox/overview)
- [RadSearchBox Client-Side Programming]({%slug searchbox/client-side-programming/radsearchbox-object%})
- [Using LocalStorage in Web Applications](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
