---
title: reorderColumns
page_title: reorderColumns | RadGrid for ASP.NET AJAX Documentation
description: reorderColumns
slug: grid/client-side-programming/gridtableview-object/methods/reordercolumns
tags: reordercolumns
published: True
position: 34
---

# reorderColumns



## 

This method allows you to reorder the columns with the specified UniqueName. The method accept two arguments - the first one is the "from" unique nameof the table column and the second argument is the "to" unique name of the table column. Note that you have to enable the**AllowColumnsReorder** and **ReorderColumnsOnClient** properties and set **ColumnsReorderMethod** property to *Reorder* in order to be able to reorder the columns. Generally used when there is a need to reorder columns on the client.

````JavaScript
function onDataBound(sender, args) {
    var masterTableView = sender.get_masterTableView();
    masterTableView.reorderColumns("ProductID", "CategoryID");
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
    <ClientSettings AllowColumnsReorder="true" ReorderColumnsOnClient="true" ColumnsReorderMethod="Reorder">
        <ClientEvents OnDataBound="onDataBound" />
        <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
            <DataService TableName="Products" Type="OData" />
        </DataBinding>
    </ClientSettings>
</telerik:RadGrid>
````



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Swap Columns]({%slug grid/client-side-programming/gridtableview-object/methods/swapcolumns%})
