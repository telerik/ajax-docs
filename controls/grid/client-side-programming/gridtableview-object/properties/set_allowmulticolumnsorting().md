---
title: set_allowMultiColumnSorting()
page_title: set_allowMultiColumnSorting() | UI for ASP.NET AJAX Documentation
description: set_allowMultiColumnSorting()
slug: grid/client-side-programming/gridtableview-object/properties/set_allowmulticolumnsorting()
tags: set_allowmulticolumnsorting()
published: True
position: 1
---

# set_allowMultiColumnSorting()



## 

Sets whether multi-column sorting is enabled for the grid instance when bound on client-side. Review the [toggleAllowMultiColumnSorting client-side method](http://demos.telerik.com/aspnet-ajax/grid/examples/client/databinding/defaultcs.aspx) on this online demo for more details.

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            AllowSorting="true">
	            <ClientSettings>
	                <DataBinding SelectMethod="GetDataAndCount" Location="Service.svc"
	                    SortParameterType="Linq" FilterParameterType="Linq">
	                </DataBinding>
	            </ClientSettings>
	            <MasterTableView DataKeyNames="OrderID" ClientDataKeyNames="OrderID"
	                AllowMultiColumnSorting="true">
	                <Columns>
	                    <telerik:GridBoundColumn DataField="ProductID" HeaderText="Product ID" DataType="System.Int32">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" DataType="System.String">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="Unit Price" DataType="System.Decimal"
	                        DataFormatString="{0:C}">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridCheckBoxColumn DataField="Discontinued" HeaderText="Discontinued" DataType="System.Boolean">
	                    </telerik:GridCheckBoxColumn>
	                </Columns>
	            </MasterTableView>
	        </telerik:RadGrid>
	        <br />
	        <asp:CheckBox ID="CheckBox1" runat="server" onclick="checkBoxClick(this);"
	            Checked="true" Text="Toggle" />
````



````JavaScript
	            function checkBoxClick(checkBox) {
	                var grid = $find('<%= RadGrid1.ClientID %>');
	                var masterTableView = grid.get_masterTableView();
	
	                // multi-column sorting will depend on the user interaction
	                masterTableView.set_allowMultiColumnSorting(checkBox.checked);
	            }
````


