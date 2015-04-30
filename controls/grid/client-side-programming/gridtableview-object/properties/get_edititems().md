---
title: get_editItems()
page_title: get_editItems() | RadGrid for ASP.NET AJAX Documentation
description: get_editItems()
slug: grid/client-side-programming/gridtableview-object/properties/get_edititems()
tags: get_edititems()
published: True
position: 7
---

# get_editItems()



## 

Property which retrieves the GridDataItem objects of the current table view that are in edit mode. Can be used to traversethe edit items in order to access the inner controls.

````ASP.NET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
	            GridLines="None" Width="1200px" OnNeedDataSource="RadGrid1_NeedDataSource"
	            AutoGenerateEditColumn="true" AllowMultiRowEdit="true">
	            <ClientSettings>
	                <ClientEvents OnGridCreated="gridCreated" />
	            </ClientSettings>
	            <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" EditMode="InPlace"
	                CommandItemDisplay="Top">
	                <Columns>
	                    <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
	                        FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
	                        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
	                        FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
	                        SortExpression="OrderDate" UniqueName="OrderDate">
	                    </telerik:GridDateTimeColumn>
	                    <telerik:GridTemplateColumn UniqueName="Sharing" EditFormHeaderTextFormat="Sharing">
	                        <ItemTemplate>
	                            <asp:Label ID="Label1" runat="server" Text="Test 1"></asp:Label>
	                        </ItemTemplate>
	                        <EditItemTemplate>
	                            <telerik:RadComboBox ID="RadComboBoxSharing" runat="server" DataSource='<%# (new string[] { "Coordinated", "Test 1", "Test 2"}) %>'
	                                OnClientSelectedIndexChanged='<%# string.Format("function (s,a){{selectedIndexChanged(s,a,{0},\"{1}\");}}",
	                                                  Container.ItemIndex,Container.OwnerTableView.ClientID) %>'>
	                            </telerik:RadComboBox>
	                        </EditItemTemplate>
	                    </telerik:GridTemplateColumn>
	                    <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
	                        FilterControlAltText="Filter Freight column" HeaderText="Freight"
	                        SortExpression="Freight" UniqueName="Freight">
	                    </telerik:GridNumericColumn>
	                    <telerik:GridBoundColumn DataField="ShipName"
	                        FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
	                        SortExpression="ShipName" UniqueName="ShipName">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridTemplateColumn UniqueName="IndefiniteSharing" EditFormHeaderTextFormat="IndefiniteSharing">
	                        <ItemTemplate>
	                            <asp:Label ID="Label2" runat="server" Text="Test 1"></asp:Label>
	                        </ItemTemplate>
	                        <EditItemTemplate>
	                            <div style="width: 170px;">
	                                <asp:TextBox ID="TextBoxIndefiniteSharing" runat="server"></asp:TextBox>
	                            </div>
	                        </EditItemTemplate>
	                    </telerik:GridTemplateColumn>
	                    <telerik:GridTemplateColumn UniqueName="IndefiniteSharingRad" EditFormHeaderTextFormat="IndefiniteSharingRad">
	                        <ItemTemplate>
	                            <asp:Label ID="Label3" runat="server" Text="Test 1"></asp:Label>
	                        </ItemTemplate>
	                        <EditItemTemplate>
	                            <div style="width: 170px;">
	                                <telerik:RadTextBox ID="RadTextBoxIndefiniteSharing" runat="server"></telerik:RadTextBox>
	                            </div>
	                        </EditItemTemplate>
	                    </telerik:GridTemplateColumn>
	                    <telerik:GridBoundColumn DataField="ShipCountry"
	                        FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
	                        SortExpression="ShipCountry" UniqueName="ShipCountry">
	                    </telerik:GridBoundColumn>
	                </Columns>
	            </MasterTableView>
	        </telerik:RadGrid>
````



````JavaScript
	            function selectedIndexChanged(sender, args, index, tableViewID) {
	                var tableView = $find(tableViewID);
	                var editForm = index >= 0 ? tableView.get_dataItems()[index].get_element() :
	                    tableView.get_insertItem();
	
	                hideIndefiniteSharing(editForm);
	            }
	            function gridCreated(sender, args) {
	                var editItems = sender.get_masterTableView().get_editItems();
	                for (var i = 0; i < editItems.length; i++) {
	                    hideIndefiniteSharing(editItems[i].get_element());
	                }
	
	                var insertItemForm = sender.get_masterTableView().get_insertItem();
	                if (insertItemForm) {
	                    hideIndefiniteSharing(insertItemForm);
	                }
	            }
	            function hideIndefiniteSharing(editForm) {
	                var combo = $telerik.findControl(editForm, "RadComboBoxSharing");
	                var condition = !(combo.get_selectedItem().get_value() == "Coordinated");
	
	                var textBox = $telerik.findElement(editForm, "TextBoxIndefiniteSharing");
	                textBox.style.display = condition ? "" : "none";
	
	                var radTextBox = $telerik.findControl(editForm, "RadTextBoxIndefiniteSharing");
	                radTextBox.set_visible(condition);
	            }
````


