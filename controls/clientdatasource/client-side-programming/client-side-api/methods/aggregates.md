---
title: aggregates
page_title: ClientDataSource Object aggregates() - RadClientDataSource
description: Check our Web Forms article about aggregates.
slug: clientdatasource/client-side-programming/client-side-api/methods/aggregates
tags: aggregates
published: True
position: 3
---

# ClientDataSource Object - aggregates()


Method to return the calculated aggregate values of the **RadClientDataSource**.


|  **Method**  |  **Returns**  |  **Description**  |
| ------ | ------ | ------ |
| **aggregates** |Object|Returns the aggregate results. There is a key for every aggregated field.|

````ASPNET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/aspnet-ajax/Services/SampleODataService.svc/Products" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Aggregates>
        <telerik:ClientDataSourceAggregate Field="ProductID" Aggregate="Count" />
        <telerik:ClientDataSourceAggregate Field="UnitPrice" Aggregate="Sum" />
    </Aggregates>
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
        var aggregates = dataSource.aggregates();
        var count = aggregates.ProductID.count; // returns "12"
        var sum = aggregates.UnitPrice.sum; // returns "340.35"
    }
</script>
````


