---
title: aggregates
page_title: aggregates | UI for ASP.NET AJAX Documentation
description: aggregates
slug: clientdatasource/client-side-programming/client-side-api/methods/aggregates
tags: aggregates
published: True
position: 3
---

# aggregates



## aggregates

Method to return the calculated aggregate values of the __RadClientDataSource__.


|  __Method__  |  __Returns__  |  __Description__  |
| ------ | ------ | ------ |
| __aggregates__ |Object|Returns the aggregate results. There is a key for every aggregated field.|

````ASPNET
	        <telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	            <DataSource>
	                <WebServiceDataSourceSettings ServiceType="OData">
	                    <Select Url="http://demos.telerik.com/aspnet-ajax/Services/SampleODataService.svc/Products" />
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


