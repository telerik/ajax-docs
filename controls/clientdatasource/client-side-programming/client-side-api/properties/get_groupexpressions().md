---
title: get_groupExpressions()
page_title: get_groupExpressions() | UI for ASP.NET AJAX Documentation
description: get_groupExpressions()
slug: clientdatasource/client-side-programming/client-side-api/properties/get_groupexpressions()
tags: get_groupexpressions()
published: True
position: 2
---

# get_groupExpressions()



This property returs a collection of **GroupExpression** objects. Generally used when there is a need to access the group expressionson the client. The example below demonstrates how to manipulating the group expressions of the **RadClientDataSource** control byusing the properties of the **GroupExpression** collection.

````ASPNET
<script type="text/javascript">
    function applyGrouping() {
        var groupExpression = new Telerik.Web.UI.ClientDataSource.GroupExpression();
        groupExpression.set_fieldName("ProductName");
        dataSource.get_groupExpressions().add(groupExpression);
    }
</script>
<telerik:RadClientDataSource runat="server" id="RadClientDataSource1">
</telerik:RadClientDataSource>
````



````ASPNET
<script type="text/javascript">
    function applyGrouping() {
        dataSource.get_groupExpressions().add({ fieldName: "ProductName" });
    }
</script>
<telerik:RadClientDataSource runat="server" id="RadClientDataSource2">
</telerik:RadClientDataSource>
````



# See Also

 * [ClientDataSource Object]({%slug clientdatasource/client-side-programming/clientdatasource-object%})
