---
title: get_dataItems()
page_title: get_dataItems() | RadGrid for ASP.NET AJAX Documentation
description: get_dataItems()
slug: grid/client-side-programming/gridtableview-object/properties/get_dataitems()
tags: get_dataitems()
published: True
position: 6
---

# get_dataItems()



## 

Property that returns a collection of **[GridDataItems]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})** which the respective **[GridTableView]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})** holds.Generally used when there is a need to access the grid data on the client.

Example:

````ASP.NET
	        <telerik:RadGrid ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" runat="server" >
	            <MasterTableView AutoGenerateColumns="false">
	                <Columns>
	                    <telerik:GridBoundColumn UniqueName="CustomerID" DataField="CustomerID" HeaderText="Customer ID">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridBoundColumn UniqueName="ContactName" DataField="ContactName" HeaderText="Contact Name">
	                    </telerik:GridBoundColumn>
	                </Columns>
	            </MasterTableView>
	            <ClientSettings>
	                <ClientEvents OnGridCreated="gridCreated" />
	            </ClientSettings>
	        </telerik:RadGrid>
````



````JavaScript
	            function gridCreated(sender,args) {
	                 var dataItems = $find('<%=RadGrid1.ClientID%>').get_masterTableView().get_dataItems();
	                 for (var i = 0; i < dataItems.length; i++) {
	                     var customerId = dataItems[i].get_cell("CustomerID").innerHTML,
	                         contactName = dataItems[i].get_cell("ContactName").innerHTML;
	                     alert('The customer with ID ' + customerId + ' has contacted ' + contactName);
	                 }
	             }
````


