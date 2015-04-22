---
title: get_owner()
page_title: get_owner() | RadGrid for ASP.NET AJAX Documentation
description: get_owner()
slug: grid/client-side-programming/gridtableview-object/properties/get_owner()
tags: get_owner()
published: True
position: 13
---

# get_owner()



## 

Returns the parent of type **Telerik.Web.UI.RadGrid** of the current object. Can be used to identify the owner grid object of the table view.

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource">
	            <MasterTableView DataKeyNames="OrderID">
	                <Columns>
	                    <telerik:GridTemplateColumn DataField="ShipCountry"
	                        FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
	                        SortExpression="ShipCountry" UniqueName="ShipCountry">
	                        <ItemTemplate>
	                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Eval("ShipCountry") %>'
	                                onchange='<%# "textBoxChange(this, event,"+Container.ItemIndex+",\""
	                            +Container.OwnerTableView.ClientID+"\");" %>'>
	                            </asp:TextBox>
	                            <telerik:RadTextBox ID="RadTextBox1" runat="server" Text='<%# Eval("ShipCountry") %>'
	                                ClientEvents-OnValueChanged='<%# "function(s,a){valueChanged(s,a,"+
	                            Container.ItemIndex+",\""+Container.OwnerTableView.ClientID+"\");}" %>'>
	                            </telerik:RadTextBox>
	                        </ItemTemplate>
	                    </telerik:GridTemplateColumn>
	                </Columns>
	            </MasterTableView>
	        </telerik:RadGrid>
````



````JavaScript
	            function textBoxChange(textBox, event, index, tableViewID) {
	                var tableView = $find(tableViewID);
	                var row = tableView.get_dataItems()[index];
	
	                var grid = tableView.get_owner();
	                alert("Grid ID: " + grid.get_id());
	            }
	            function valueChanged(sender, args, index, tableViewID) {
	                var tableView = $find(tableViewID);
	                var row = tableView.get_dataItems()[index];
	
	                var grid = tableView.get_owner();
	                alert("Grid ID: " + grid.get_id());
	            }
````


