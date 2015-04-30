---
title: get_element()
page_title: get_element() | RadGrid for ASP.NET AJAX Documentation
description: get_element()
slug: grid/client-side-programming/griddataitem-object/properties/get_element()
tags: get_element()
published: True
position: 2
---

# get_element()



## 

This property presents the **HTML TableRow element** - <tr> for the current item. Basically you can use it in cases when you needto get the **HTML TableRow element** on client.

````ASP.NET
	        <script type="text/javascript">
	            function onDataBound(sender, args) {
	                var masterTableView = sender.get_masterTableView();
	                alert("The HTML TableRow element of the first row: " + masterTableView.get_dataItems()[0].get_element());
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

 * [GridDataItem Class Members]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})
