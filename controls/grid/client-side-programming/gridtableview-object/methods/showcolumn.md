---
title: showColumn
page_title: showColumn | RadGrid for ASP.NET AJAX Documentation
description: showColumn
slug: grid/client-side-programming/gridtableview-object/methods/showcolumn
tags: showcolumn
published: True
position: 40
---

# showColumn



## 

This property allows you to show a column which has been previously hidden. The method accept a single argument which represents index of the tablecolumn that will be shown. Basically used when you need to display a hidden column on the client.

````ASP.NET
	       <script type="text/javascript">
	           function onDataBound(sender, args) {
	               var masterTableView = sender.get_masterTableView();
	               var columnIndex = masterTableView.getColumnByUniqueName("ProductID").get_element().cellIndex;
	               masterTableView.showColumn(columnIndex);
	           }
	        </script>
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" AllowSorting="true"
	            AllowFilteringByColumn="true" PageSize="5">
	            <MasterTableView ClientDataKeyNames="ProductID" CommandItemDisplay="Top">
	                <Columns>
	                    <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" UniqueName="ProductID"
	                        DataType="System.Int32" Display="false" />
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
	                <ClientEvents OnDataBound="onDataBound" />
	                <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
	                    <DataService TableName="Products" Type="OData" />
	                </DataBinding>
	            </ClientSettings>
	        </telerik:RadGrid>
````



# See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Show FilterItem]({%slug grid/client-side-programming/gridtableview-object/methods/showfilteritem%})

 * [Show InsertItem]({%slug grid/client-side-programming/gridtableview-object/methods/showinsertitem%})

 * [Show Item]({%slug grid/client-side-programming/gridtableview-object/methods/showitem%})
