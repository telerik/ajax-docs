---
title: get_pageSize()
page_title: get_pageSize() | RadGrid for ASP.NET AJAX Documentation
description: get_pageSize()
slug: grid/client-side-programming/gridtableview-object/properties/get_pagesize()
tags: get_pagesize()
published: True
position: 15
---

# get_pageSize()



## 

Returns the page size for the respective **GridTableView** object. You should keep in mind that itindicates how many records a full page contains, not the current records count. For example, the last page of the grid usually contains less records than the standard page size. In this case, the exact count of the records can be obtained fromthe length of the [dataItems collection]({%slug grid/client-side-programming/gridtableview-object/properties/get_dataitems()%}).

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource">
	            <MasterTableView DataKeyNames="OrderID">
	            </MasterTableView>
	        </telerik:RadGrid>
	        <br />
	        <asp:Button ID="Button1" runat="server" Text="Click"
	            OnClientClick="buttonClick(); return false;" />
````



````JavaScript
	            function buttonClick() {
	                var grid = $find('<%= RadGrid1.ClientID %>');
	                var masterTableView = grid.get_masterTableView();
	
	                var pageSize = masterTableView.get_pageSize();
	                alert(pageSize);
	            }
````


