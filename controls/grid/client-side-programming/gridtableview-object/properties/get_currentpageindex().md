---
title: get_currentPageIndex()
page_title: get_currentPageIndex() | RadGrid for ASP.NET AJAX Documentation
description: get_currentPageIndex()
slug: grid/client-side-programming/gridtableview-object/properties/get_currentpageindex()
tags: get_currentpageindex()
published: True
position: 4
---

# get_currentPageIndex()



## 

Returns the current page index for the respective **GridTableView** object. Can be used to check which page the user is currently viewing.

````ASP.NET
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
	
	                var pageIndex = masterTableView.get_currentPageIndex();
	                alert("Active page: " + (pageIndex + 1));
	            }
````


