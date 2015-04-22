---
title: hideItem
page_title: hideItem | RadGrid for ASP.NET AJAX Documentation
description: hideItem
slug: grid/client-side-programming/gridtableview-object/methods/hideitem
tags: hideitem
published: True
position: 30
---

# hideItem



## 

This method allows you to hide the **GridDataItem** from the grid. The method accept one parameter which is the index ofthe table row that will be hidden.

````ASPNET
	         <script type="text/javascript">
	             function dataBound(sender, args) {
	                 sender.get_masterTableView().hideItem(0);
	                 alert("The first row is hidden.");
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
	                <ClientEvents OnDataBound="dataBound" />
	                <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
	                    <DataService TableName="Products" Type="OData" />
	                </DataBinding>
	            </ClientSettings>
	        </telerik:RadGrid>
````



# See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})
