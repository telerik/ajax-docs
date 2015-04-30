---
title: get_isItemInserted()
page_title: get_isItemInserted() | RadGrid for ASP.NET AJAX Documentation
description: get_isItemInserted()
slug: grid/client-side-programming/gridtableview-object/properties/get_isiteminserted()
tags: get_isiteminserted()
published: True
position: 11
---

# get_isItemInserted()



## 

Returns a Boolean value indicating if the **GridTableView** is currently in insert mode. Can be used to create some condition for executing different script logic depending on the visibility status of the insert item.

````ASP.NET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource">
	            <MasterTableView DataKeyNames="OrderID" CommandItemDisplay="Top">
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
	
	                if (masterTableView.get_isItemInserted()) {
	                    alert("The Insert form is open.");
	                }
	            }
````


