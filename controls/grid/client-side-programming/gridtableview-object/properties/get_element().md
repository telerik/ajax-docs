---
title: get_element()
page_title: get_element() | RadGrid for ASP.NET AJAX Documentation
description: get_element()
slug: grid/client-side-programming/gridtableview-object/properties/get_element()
tags: get_element()
published: True
position: 8
---

# get_element()



## 

Returns HTML table which represents the respective table for the **GridTableView** object rendered on the client. Can be used in cases when the DOM element of the object is required.

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource">
	            <MasterTableView DataKeyNames="OrderID" CommandItemDisplay="Top">
	                <CommandItemTemplate>
	                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	                    <telerik:RadTextBox ID="RadTextBox1" runat="server"></telerik:RadTextBox>
	                </CommandItemTemplate>
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
	
	                var tableEl = masterTableView.get_element();
	
	                var textBox = $telerik.findElement(tableEl, "TextBox1");
	                textBox.value = "Success";
	
	                var radTextBox = $telerik.findControl(tableEl, "RadTextBox1");
	                radTextBox.set_value("Success");
	            }
````


