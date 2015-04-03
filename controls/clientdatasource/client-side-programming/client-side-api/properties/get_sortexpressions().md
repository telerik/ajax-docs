---
title: get_sortExpressions()
page_title: get_sortExpressions() | UI for ASP.NET AJAX Documentation
description: get_sortExpressions()
slug: clientdatasource/client-side-programming/client-side-api/properties/get_sortexpressions()
tags: get_sortexpressions()
published: True
position: 1
---

# get_sortExpressions()



This property returs a collection of __SortExpression__ objects. Generally used when there is a need to access the sort expressionson the client. The example below demonstrates how to manipulating the sort expressions of the __RadClientDataSource__ control byusing the properties of the __SortExpression__ collection.

````ASPNET
	        <script type="text/javascript">
	            function applySortExpression() {
	                var sortExpression = new Telerik.Web.UI.ClientDataSource.SortExpression();
	                sortExpression.set_fieldName("ProductName");
	                sortExpression.set_sortOrder(Telerik.Web.UI.ClientDataSource.SortOrder.Asc);
	                dataSource.get_sortExpressions().add(sortExpression);
	            }
	        </script>
	        <telerik:RadClientDataSource runat="server" id="RadClientDataSource1">
	        </telerik:RadClientDataSource>
````



````ASPNET
	        <script type="text/javascript">
	            function applySortExpression() {
	                dataSource.get_sortExpressions().add({ fieldName: "ProductName", sortOrder: Telerik.Web.UI.ClientDataSource.SortOrder.Asc });
	            }
	        </script>
	        <telerik:RadClientDataSource runat="server" id="RadClientDataSource2">
	        </telerik:RadClientDataSource>
````



# See Also

 * [ClientDataSource Object]({%slug clientdatasource/client-side-programming/clientdatasource-object%})
