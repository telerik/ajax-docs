---
title: resizeColumn
page_title: resizeColumn | RadGrid for ASP.NET AJAX Documentation
description: resizeColumn
slug: grid/client-side-programming/gridtableview-object/methods/resizecolumn
tags: resizecolumn
published: True
position: 35
---

# resizeColumn



## 

This method allows you to resize a column of the **RadGrid**. The method accepts two arguments - the first argument is the indexof the table column, while the second one determines the new width of the column. Additionally you have to enable the **AllowColumnResize**property. Generally used when there is a need to set a width of a column on the client.

````JavaScript
function onDataBound(sender, args) {
    var masterTableView = sender.get_masterTableView();
    masterTableView.resizeColumn(0, 700);
}
````

````ASP.NET
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
        <Resizing AllowColumnResize="true" />
        <ClientEvents OnDataBound="onDataBound" />
        <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
            <DataService TableName="Products" Type="OData" />
        </DataBinding>
    </ClientSettings>
</telerik:RadGrid>
````



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Resize Item]({%slug grid/client-side-programming/gridtableview-object/methods/resizeitem%})
