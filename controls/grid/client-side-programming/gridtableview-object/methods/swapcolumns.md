---
title: swapColumns
page_title: swapColumns | RadGrid for ASP.NET AJAX Documentation
description: swapColumns
slug: grid/client-side-programming/gridtableview-object/methods/swapcolumns
tags: swapcolumns
published: True
position: 45
---

# swapColumns



## 

This method allows you to swap the columns with the specified UniqueName. The method accept two arguments - the first one is the unique name of thefirst table column to swap and the second argument is the the unique name of the second table column. Note that you have to enable the **AllowColumnsReorder** and **ReorderColumnsOnClient** properties and set **ColumnsReorderMethod** property to *Swap* in order to be able to swap the columns. Generally used when there is a need to reorder columns on the client.

````ASP.NET
	        <script type="text/javascript">
	            function onDataBound(sender, args) {
	                var masterTableView = sender.get_masterTableView();
	                masterTableView.swapColumns("ProductID", "CategoryID");
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
	            <ClientSettings AllowColumnsReorder="true" ReorderColumnsOnClient="true" ColumnsReorderMethod="Swap">
	                <ClientEvents OnDataBound="onDataBound" />
	                <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
	                    <DataService TableName="Products" Type="OData" />
	                </DataBinding>
	            </ClientSettings>
	        </telerik:RadGrid>
````



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Reorder Columns]({%slug grid/client-side-programming/gridtableview-object/methods/reordercolumns%})
