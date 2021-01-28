---
title: Filtering
page_title: Filtering - RadMultiSelect
description: Check our Web Forms article about Filtering.
slug: multiselect/functionality/filtering
tags: filtering,client,server
published: True
position: 2
---

# Filtering

**RadMultiSelect** lets the user type a search query in the input and it will filter the data source so only relevant items are shown. By default, the filter operation is performed on the client, over the current data. You can also use [server filtering](#server-filtering).

To enable filtering set the `Filter` property to the desired filter operation:

    * `Contains`
    * `StartsWith`
    * `EndsWith`

The `MinLength` property defines the minimum input length before the filter operation is performed.

>caution When you apply server filtering, only the source of **RadMultiSelect** is filtered. To page and filter the dataset, use the [virtualization]({%slug multiselect/functionality/virtualization%}) feature.
>

>caption Example 1: Basic filtering in RadMultiSelect - the `name` field will be searchable

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="name" DataValueField="id" Width="400px"
    Filter="Contains" MinLength="3">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiSelect>
<script>
    function OnLoad(sender, args) {
        var data = [
            { id: 1, name: "Apples", fruitType: "regular" },
            { id: 2, name: "Oranges", fruitType: "citrus" },
            { id: 3, name: "Bananas", fruitType: "citrus" }
        ];
        sender.get_kendoWidget().setDataSource(data);
    }
</script>
````

>tip Client filtering will work with both client-side and server-side binding. If used with a declarative data source, it will serialize its data to an array on the client, just like it would behave if the data was fetched from a web service call.

## Server Filtering

When you set the `WebServiceClientDataSource.EnableServerFiltering` property to `true`, filtering will request the data from the server.

This can be useful when there is a lot of data that would slow down the browser by creating a lot of elements, or would be costly to the server. Combined with `MinLength`, you can improve the performance for both the client, and the server.

The server filtering requires binding to a web service, and it will result in GET requests where querystring parameters will denote the filtered field and operator. For example, if the `ProductName` field is set as the `DataValueField`, `Filter` is `Contains` and the user input is `che`, the parameter added to the URL will look something like `&$filter=substringof('che',tolower(ProductName))"`.

With server filtering, **RadMultiSelect** will not request the data when initializing, only when the user types in a search string of sufficient length (see `MinLength`). This is done by setting the `autoBind` property of the underlying Kendo widget to `false`.

>caption Example 2: Enabling server filtering

````ASP.NET
<telerik:RadMultiSelect runat="server" ID="RadMultiSelect2" Width="400px"
    DataTextField="ProductName"
    DataValueField="ProductID"
    Placeholder="Select products..."
    MinLength="3">
    <WebServiceClientDataSource runat="server" EnableServerFiltering="true">
        <WebServiceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" />
        </WebServiceSettings>
    </WebServiceClientDataSource>
</telerik:RadMultiSelect>
````

## See Also

* [Live Demo - Server Filtering](https://demos.telerik.com/aspnet-ajax/multiselect/serverfiltering/defaultcs.aspx)

* [Kendo UI MultiSelect Widget API Reference](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect)

