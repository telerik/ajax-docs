---
title: get_selectedItems()
page_title: get_selectedItems() | RadGrid for ASP.NET AJAX Documentation
description: get_selectedItems()
slug: grid/client-side-programming/gridtableview-object/properties/get_selecteditems()
tags: get_selecteditems()
published: True
position: 19
---

# get_selectedItems()



## 

A collection of all selected items (of type GridDataItem) for the respective GridTableView instance. Can be used to traverse the selected items and get corresponding values.

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource" AllowMultiRowSelection="true">
	            <ClientSettings>
	                <Selecting AllowRowSelect="true" />
	            </ClientSettings>
	            <MasterTableView DataKeyNames="OrderID" ClientDataKeyNames="OrderID">
	                <Columns>
	                    <telerik:GridClientSelectColumn UniqueName="SelectColumnName">
	                    </telerik:GridClientSelectColumn>
	                </Columns>
	            </MasterTableView>
	        </telerik:RadGrid>
	        <br />
	        <asp:Button ID="Button1" runat="server" Text="Click"
	            OnClientClick="buttonClick(); return false;" />
	        <br />
	        <span id="output"></span>
````



````JavaScript
	            function buttonClick() {
	                var grid = $find('<%= RadGrid1.ClientID %>');
	                var masterTableView = grid.get_masterTableView();
	
	                var selectedItems = masterTableView.get_selectedItems();
	                var result = "";
	
	                for (var i = 0; i < selectedItems.length; i++) {
	                    var item = selectedItems[i];
	
	                    var dataKeyValue = item.getDataKeyValue("OrderID");
	                    var cellValue = $(item.get_cell("ShipCountry")).text();
	
	                    result = result + ("Order " + dataKeyValue +
	                       " was registered from " + cellValue + ".<br/>");
	                    $("#output").html(result);
	                }
	            }
````


