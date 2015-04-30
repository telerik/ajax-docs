---
title: resizeItem
page_title: resizeItem | RadGrid for ASP.NET AJAX Documentation
description: resizeItem
slug: grid/client-side-programming/gridtableview-object/methods/resizeitem
tags: resizeitem
published: True
position: 36
---

# resizeItem



## 

This method allows you to resize an item of the **RadGrid**. The method accepts two arguments - the first argument is the indexof the table item, while the second one determines the new height of the item. Additionally you have to enable the **AllowRowResize**property. Generally used when there is a need to set a height of an item on the client.

````ASP.NET
	        <script type="text/javascript">
	            function onDataBound(sender, args) {
	                var masterTableView = sender.get_masterTableView();
	                var rowIndex = masterTableView.get_dataItems()[0].get_element().rowIndex
	                masterTableView.resizeItem(rowIndex, 200);
	            }
	        </script>
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" AllowSorting="true"
	            AllowFilteringByColumn="true" PageSize="5">
	            <MasterTableView ClientDataKeyNames="ProductID" CommandItemDisplay="Top">
	                <Columns>
	                    <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" UniqueName="ProductID"
	                        DataType="System.Int32" />
	                    <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" UniqueName="ProductName"
	                        DataType="System.String" />
	                    <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" UniqueName="CategoryID"
	                        DataType="System.Int32" />
	                    <telerik:GridNumericColumn DataField="UnitPrice" DataType="System.Decimal" NumericType="Currency"
	                        HeaderText="UnitPrice Numeric" SortExpression="UnitPrice">
	                    </telerik:GridNumericColumn>
	                    <telerik:GridNumericColumn DataField="UnitsInStock" HeaderText="UnitsInStock" UniqueName="UnitsInStock"
	                        DataType="System.Int16" />
	                    <telerik:GridCheckBoxColumn DataField="Discontinued" HeaderText="Discontinued" UniqueName="Discontinued"
	                        DataType="System.Boolean" />
	                </Columns>
	            </MasterTableView>
	            <ClientSettings>
	                <Resizing AllowRowResize="true" />
	                <ClientEvents OnDataBound="onDataBound" />
	                <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
	                    <DataService TableName="Products" Type="OData" />
	                </DataBinding>
	            </ClientSettings>
	        </telerik:RadGrid>
````



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Resize Column]({%slug grid/client-side-programming/gridtableview-object/methods/resizecolumn%})
