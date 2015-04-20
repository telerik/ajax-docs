---
title: get_filterExpressions()
page_title: get_filterExpressions() | UI for ASP.NET AJAX Documentation
description: get_filterExpressions()
slug: clientdatasource/client-side-programming/client-side-api/properties/get_filterexpressions()
tags: get_filterexpressions()
published: True
position: 0
---

# get_filterExpressions()



This property returs a collection of **FilterExpression** objects. Generally used when there is a need to access the filter expressionson the client. The example below demonstrates how to manipulating the filter expressions of the **RadClientDataSource** control byusing the properties of the **FilterExpression** collection.

````ASPNET
<script type="text/javascript">
    function applyFilter() {
        var filterEntry = new Telerik.Web.UI.ClientDataSource.FilterEntry();
        filterEntry.set_fieldName("ProductName");
        filterEntry.set_value("Chai");
        filterEntry.set_operator(Telerik.Web.UI.ClientDataSource.FilterOperator.Contains);
        var filterExpression = new Telerik.Web.UI.ClientDataSource.FilterExpression();
        filterExpression.add(filterEntry);
        dataSource.get_filterExpressions().add(filterExpression);
    }
</script>
<telerik:radclientdatasource runat="server" id="RadClientDataSource1">
</telerik:radclientdatasource>
````



````ASPNET
<script type="text/javascript">
    function applyFilter() {
        dataSource.get_filterExpressions().add({ fieldName: "ProductName", value: text, operator: Telerik.Web.UI.ClientDataSource.FilterOperator.Contains });
    }
</script>
<telerik:radclientdatasource runat="server" id="RadClientDataSource2">
</telerik:radclientdatasource>
````



# See Also

 * [ClientDataSource Object]({%slug clientdatasource/client-side-programming/clientdatasource-object%})
