---
title: get_parentRow()
page_title: get_parentRow() | UI for ASP.NET AJAX Documentation
description: get_parentRow()
slug: grid/client-side-programming/gridtableview-object/properties/get_parentrow()
tags: get_parentrow()
published: True
position: 17
---

# get_parentRow()



## 

If called from a nested GridTableView returns the parent item for the current nested hierarchical GridTableView. Returns null if called from the MasterTableView.

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" PageSize="3"
	            OnNeedDataSource="RadGrid1_NeedDataSource" OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
	            <ClientSettings>
	                <Selecting AllowRowSelect="true" />
	                <ClientEvents OnRowSelected="rowSelected" />
	            </ClientSettings>
	            <MasterTableView DataKeyNames="CustomerID" ClientDataKeyNames="CustomerID"
	                CommandItemDisplay="Top" Name="Customers">
	                <DetailTables>
	                    <telerik:GridTableView DataKeyNames="OrderID" Name="Orders">
	                    </telerik:GridTableView>
	                </DetailTables>
	            </MasterTableView>
	        </telerik:RadGrid>
````



````JavaScript
	            function rowSelected(sender, args) {
	                var tableView = args.get_tableView();
	
	                if (tableView.get_name() == "Orders") {
	                    var parentRow = tableView.get_parentRow();
	                    var parentItem = $find(parentRow.id);
	
	                    var dataKeyValue = parentItem.getDataKeyValue("CustomerID");
	                    alert("Corresponding parent ID of the selected record is "
	                        + dataKeyValue + ".");
	                }
	            }
````


