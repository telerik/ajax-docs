---
title: remove
page_title: ClientDataSource Object remove() | UI for ASP.NET AJAX Documentation
description: remove
slug: clientdatasource/client-side-programming/client-side-api/methods/remove
tags: remove
published: True
position: 2
---

# ClientDataSource Object - remove()



Removes the data item from the data source with the specified model ID.


|  **Parameters**  |  **Description**  |
| ------ | ------ |
| **ID** |The model ID of the data item which should be removed.|

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
        alert(data.length);  // displays "12"
        alert(data[0].ProductName); // displays "Chai"

        dataSource.remove("1");

        data = dataSource.view();
        alert(data.length);  // displays "11"
        alert(data[0].ProductName); // displays "Chang"
    }
</script>
````


