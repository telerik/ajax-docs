---
title: Virtualization
page_title: Virtualization | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: Virtualization
slug: multicolumncombobox/functionality/virtualization
tags: Virtualization
published: True
position: 5
---

# Virtualization

**RadMultiColumnComboBox** supports virtualization of the data and the UI at the same time in order to improve both server and client performance for cases when you have large amounts of data. As the user scrolls through the list of items, new pages of data are requested and the existing DOM elements are reused to render them.

## Prerequisites

Virtualization requires:

* `Height` and `VirtualSettings.ItemHeight` to be set in pixel values.
* All columns to have `Width` set in pixels.
* Remote data binding.
* That the corresponding service provides the paging of the data. This means that the following properties must be set:
    * `PageSize` set according to the `Height` and `ItemHeight` (usually `((Height / ItemHeight) * 4)`)
    * `EnableServerFiltering="true"`
    * `AllowPaging="true"`
    * `EnableServerPaging="true"`

>important RadMultiColumnComboBox is a server-side wrapper over the Kendo UI MultiColumnComboBox widget. The [Virtualization in Kendo DropDowns](https://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization) article explains in detail how virtualization works in the underlying widgets, and lists its behaviors, specifics and requirements. You should get familiar with it before using virtualization in RadMultiColumnComboBox.

## Examples

The following examples show how you can use virtualization with the service from the [Kendo Service repo](https://github.com/telerik/kendo-ui-demos-service). It also includes a [sample value mapper](https://github.com/telerik/kendo-ui-demos-service/blob/master/demos-and-odata-v3/KendoCRUDService/Controllers/OrdersController.cs) function that is optional.

>caption Example 1: Virtualization in RadMultiColumnComboBox. Includes a sample value mapper function

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"

    EnableServerFiltering="true"
    AllowPaging="true"
    EnableServerPaging="true"
    PageSize="80"
    
    
    Height="400" Width="300px"
    Placeholder="select from the dropdown or type"
    DataTextField="ShipName" DataValueField="OrderID"
    Filter="Contains" FilterFields="ShipName,ShipCountry">
    
    <WebServiceSettings ServiceType="OData" Select-DataType="JSON">
        <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders" />
    </WebServiceSettings>
    <VirtualSettings ItemHeight="28" ValueMapper="valueMapper" />
    
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="OrderID" Title="Order" Width="100" />
        <telerik:MultiColumnComboBoxColumn Field="ShipName" Title="Ship" Width="300" />
        <telerik:MultiColumnComboBoxColumn Field="ShipCountry" Title="Country " Width="200" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>

<script>
    function valueMapper(options) {
        $telerik.$.ajax({
            url: "https://demos.telerik.com/kendo-ui/service/Orders/ValueMapper",
            type: "GET",
            dataType: "jsonp",
            data: convertValues(options.value),
            success: function (data) {
                options.success(data);
            }
        })
    }
     
    function convertValues(value) {
        var data = {};
        value = $telerik.$.isArray(value) ? value : [value];
     
        for (var idx = 0; idx < value.length; idx++) {
            data["values[" + idx + "]"] = value[idx];
        }
     
        return data;
    }
</script>
````

You can achieve the same through a RadClientDataSource control. In such a case, you must set the web service settings (including the page size, and enabling the server operations) on the data source control instead of for the multi column combo box.

>caption Example 2: Virtualization in RadMultiColumnComboBox with RadClientDataSource plus a sample value mapper function.

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Filter="Contains" Skin="Default"

    ClientDataSourceID="RadClientDataSource1"
    
    Height="400" Width="300px" Placeholder="select from the dropdown or type"
    DataTextField="ShipName" DataValueField="OrderID">
    
    <VirtualSettings ItemHeight="28" ValueMapper="valueMapper" />
    
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="OrderID" Title="Order" Width="100" />
        <telerik:MultiColumnComboBoxColumn Field="ShipName" Title="Ship" Width="300" />
        <telerik:MultiColumnComboBoxColumn Field="ShipCountry" Title="Country " Width="200" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>

<telerik:RadClientDataSource 

    EnableServerFiltering="true"
    EnableServerPaging="true"
    AllowPaging="true"
    PageSize="80"
    
    ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData" Select-DataType="JSON">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>

<script>
    function valueMapper(options) {
        $telerik.$.ajax({
            url: "https://demos.telerik.com/kendo-ui/service/Orders/ValueMapper",
            type: "GET",
            dataType: "jsonp",
            data: convertValues(options.value),
            success: function (data) {
                options.success(data);
            }
        })
    }
     
    function convertValues(value) {
        var data = {};
        value = $telerik.$.isArray(value) ? value : [value];
     
        for (var idx = 0; idx < value.length; idx++) {
            data["values[" + idx + "]"] = value[idx];
        }
     
        return data;
    }
</script>
````


## See Also

* [Live Demo - Virtualization](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/virtualization/defaultcs.aspx)

* [Virtualization in Kendo DropDowns](https://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization)

* [Kendo UI MultiColumnComboBox Widget API Reference](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)

* [Filtering]({%slug multicolumncombobox/functionality/filtering%})

