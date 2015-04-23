---
title: add
page_title: ClientDataSource Object add() | RadClientDataSource for ASP.NET AJAX Documentation
description: add
slug: clientdatasource/client-side-programming/client-side-api/methods/add
tags: add
published: True
position: 0
---

# ClientDataSource Object - add()



Method which appends a new data item to the data source.


|  **Parameters**  |  **Description**  |
| ------ | ------ |
| **newValues** |JSON formatted values to insert as a new item.|

````ASPNET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="http://demos.telerik.com/aspnet-ajax/Services/SampleODataService.svc/Products" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Schema>
        <Model ID="ProductID"></Model>
    </Schema>
</telerik:RadClientDataSource>
<asp:Button ID="Button1" runat="server" Text="Button" OnClientClick="buttonClick(); return false;" />
````



````JavaScript
<script type="text/javascript">
    var dataSource;
    function pageLoad() {
        dataSource = $find('<%= RadClientDataSource1.ClientID %>');
        dataSource.fetch();
    }
    function buttonClick() {
        var data = dataSource.view();
        var lastItem = data[data.length - 1];
        alert(lastItem.ProductName); // displays "Queso Manchego La Pastora"
        alert(lastItem.UnitPrice); // displays "6"

        dataSource.add({
            ProductName: "Success",
            UnitPrice: 9
        }, "1");

        var data = dataSource.view();
        var lastItem = data[data.length - 1];
        alert(lastItem.ProductName); // displays "Success"
        alert(lastItem.UnitPrice); // displays "9"
    }
</script>
````


