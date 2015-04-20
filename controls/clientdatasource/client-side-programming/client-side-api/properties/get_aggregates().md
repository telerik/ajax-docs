---
title: get_aggregates()
page_title: get_aggregates() | UI for ASP.NET AJAX Documentation
description: get_aggregates()
slug: clientdatasource/client-side-programming/client-side-api/properties/get_aggregates()
tags: get_aggregates()
published: True
position: 3
---

# get_aggregates()



This property returs a collection of **Aggregate** objects. Generally used when there is a need to access the aggregate expressionson the client. The example below demonstrates how to manipulating the aggregates of the **RadClientDataSource** control byusing the properties of the **Aggregate** collection.

````ASPNET
<script type="text/javascript">
    function applyAggregate() {
        var aggregate = new Telerik.Web.UI.ClientDataSource.Aggregate();
        var aggregateFunction = new Telerik.Web.UI.ClientDataSource.AggregateFunction();
        aggregate.set_field("UnitPrice");
        aggregate.set_aggregate(aggregateFunction.Max);
        dataSource.get_aggregates().add(aggregate);
    }
</script>
<telerik:radclientdatasource runat="server" id="RadClientDataSource1">
</telerik:radclientdatasource>
````



````ASPNET
<script type="text/javascript">
    function applyAggregate() {
        dataSource.get_aggregates().add({ field: "UnitPrice", aggregate: "max" });
    }
</script>
<telerik:radclientdatasource runat="server" id="RadClientDataSource2">
</telerik:radclientdatasource>
````



# See Also

 * [Overview]({%slug clientdatasource/client-side-programming/overview%})

 * [ClientDataSource Object]({%slug clientdatasource/client-side-programming/clientdatasource-object%})
