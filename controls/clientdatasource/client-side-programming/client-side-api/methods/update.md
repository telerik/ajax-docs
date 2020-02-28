---
title: update
page_title: ClientDataSource Object update() | RadClientDataSource for ASP.NET AJAX Documentation
description: update
slug: clientdatasource/client-side-programming/client-side-api/methods/update
tags: update
published: True
position: 1
---

# ClientDataSource Object - update()


Method which updates the values of the item with the specified model ID.


|  **Parameters**  |  **Description**  |
| ------ | ------ |
| **newValues, id** |JSON formatted values to update in the item and the model ID of the item to be updated.|

````ASPNET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/aspnet-ajax/Services/SampleODataService.svc/Products" />
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
        alert(data[0].ProductName); // displays "Chai"
        alert(data[0].UnitPrice); // displays "18"

        dataSource.update({
            ProductName: "Success",
            UnitPrice: 9
        }, "1");

        data = dataSource.view();
        alert(data[0].ProductName); // displays "Success"
        alert(data[0].UnitPrice); // displays "9"
    }
</script>
````


