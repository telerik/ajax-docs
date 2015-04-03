---
title: getDataServiceQuery(entityName)
page_title: getDataServiceQuery(entityName) | UI for ASP.NET AJAX Documentation
description: getDataServiceQuery(entityName)
slug: grid/client-side-programming/gridtableview-object/methods/getdataservicequery(entityname)
tags: getdataservicequery(entityname)
published: True
position: 26
---

# getDataServiceQuery(entityName)



## 

The method will automatically send a result (holding all filter and sort expressions in appropriate format and will apply paging on server using skip and top) to the query method of the [ ADO.NET Data Service ](http://astoria.mslivelabs.com/). The resulting value from the getDataServiceQuery(entityName) method will generate an expression that can be recognized by the corresponding data service.


|  __getDataServiceQuery(entityName)__  |  |  |
| ------ | ------ | ------ |
| __entityName__ |String|The name of the entity for which the expression (evaluated by the ADO.NET Data Service) will be generated.|

Example:

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	         var northwindService = new Sys.Data.DataService("NorthwindDataService.svc");
	         tableView = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	         northwindService.query(tableView.getDataServiceQuery("Customers"), updateGrid);
	
	         function updateGrid(result) {
	             tableView.set_dataSource(result);
	             tableView.dataBind();
	         }
	     </script>
	    </telerik:RadCodeBlock>
````



For example if the grid control has:

* page size = 10

* currentpage index = 3

* is sorted by CustomerID descending

* is filtered by CompanyName where equal to "Alfreds Futterkiste"

* and the entityName passed to the method is 'Customers'

you will get the following expression returned by the getDataServiceQuery(entityName) method:

*/Customers?$skip=30&$top=10&$orderby=CustomerID desc&$filter=CompanyName eq 'Alfreds Futterkiste'*
