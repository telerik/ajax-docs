---
title: Automatic Load On Demand
page_title: Automatic Load On Demand | RadComboBox for ASP.NET AJAX Documentation
description: Automatic Load On Demand
slug: combobox/load-on-demand/automatic-load-on-demand
tags: automatic,load,on,demand
published: True
position: 1
---

# Automatic Load On Demand



## 

RadComboBox supports automatic load-on-demand. This means that you can quickly enable the load-on-demand capabilities of the control and easily achieve paging of the items. You can follow the steps below to do this:

1. Assign a **data source** to the RadComboBox (a declarative one is used in this example).

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	height="200px" 
	emptymessage="Select"
	datasourceid="SqlDataSource1" 
	datatextfield="ProductName" 
	datavaluefield="ProductID">
</telerik:radcombobox>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient" SelectCommand="SELECT [ProductName], [ProductID] FROM [Products] ORDER By ProductName" />
````





2. Turn on load-on-demand mechanism by setting the **EnableAutomaticLoadOnDemand** property to *True*. From all the items withdrawn from the data source, RadComboBox filters only the ones which text match the text typed in the input area. It does this automatically.

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	height="200px" 
	emptymessage="Select"
	datasourceid="SqlDataSource1" 
	datatextfield="ProductName" 
	datavaluefield="ProductID"
	enableautomaticloadondemand="true">
</telerik:radcombobox>
````





3. [*Optional*] Set either or both of the **ShowMoreResultsBox** and **EnableVirtualScrolling** properties to *True* to enable the respective features. What remains is, to tell the RadComboBox how many Items to load on each request by setting its **ItemsPerRequest** property to the desired value. The default is -1, which means that the control will load all items at once.

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	height="200px" 
	emptymessage="Select"
	datasourceid="SqlDataSource1" 
	datatextfield="ProductName" 
	datavaluefield="ProductID"
	enableautomaticloadondemand="true" 
	showmoreresultsbox="true" 
	enablevirtualscrolling="true"
	itemsperrequest="10">
</telerik:radcombobox>
````





You can use this feature with any kind of declarative data source, including .NET 3.5’s Linq and EntityDataSource. (When working with the last mentioned data source, RadComboBox uses simple optimization techniques to improve the performance.)

In fact you can use all types of enumerable data sources with the **DataSource** property. In this case, it is important to note that you set the property on **each postback**. RadComboBox will automatically bind to the data source whenever a request for items is made.

Finally it is important to note that the [ItemsRequested]({%slug combobox/server-side-programming/itemsrequested%}) event still fires with automatic load-on-demand. In the respective event handler you can still:

* Add / Remove Items.

* Access / Change the ‘Show More Results’ message via the event arguments.

* Get / Set the EndOfItems event argument to explicitly stop subsequent ‘show more results/virtual scrolling’ requests.
