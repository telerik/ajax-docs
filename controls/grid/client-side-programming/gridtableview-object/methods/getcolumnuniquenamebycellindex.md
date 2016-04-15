---
title: getColumnUniqueNameByCellIndex
page_title: getColumnUniqueNameByCellIndex | RadGrid for ASP.NET AJAX Documentation
description: getColumnUniqueNameByCellIndex
slug: grid/client-side-programming/gridtableview-object/methods/getcolumnuniquenamebycellindex
tags: getcolumnuniquenamebycellindex
published: True
position: 25
---

# getColumnUniqueNameByCellIndex



## 

Method which returns the UniqueName of the column by given **header row** element and cell **index** passed as first and second arguments.

**getColumnUniqueNameByCellIndex(headerRow, index)**

* **headerRow** - HTML table header row element(**<th>**).

* **index** - Cell index (**integer**))

````ASP.NET
<script type="text/javascript">
    function cellSelected(sender, args) {
        var masterTableView = sender.get_masterTableView();
        var headerRow = masterTableView.HeaderRow
        var cellIndex = args.get_column().get_element().cellIndex;
        alert(masterTableView.getColumnUniqueNameByCellIndex(headerRow, cellIndex));
    }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid3" runat="server" AllowPaging="true" AllowSorting="true" OnItemCommand="RadGrid3_ItemCommand"
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
        <ClientEvents OnCellSelected="cellSelected" />
        <Selecting CellSelectionMode="SingleCell" />
        <DataBinding Location="http://demos.kendoui.com/service/Northwind.svc" ResponseType="JSONP">
            <DataService TableName="Products" Type="OData" />
        </DataBinding>
    </ClientSettings>
</telerik:RadGrid>
````



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})
