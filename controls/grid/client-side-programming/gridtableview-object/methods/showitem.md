---
title: showItem
page_title: showItem | RadGrid for ASP.NET AJAX Documentation
description: showItem
slug: grid/client-side-programming/gridtableview-object/methods/showitem
tags: showitem
published: True
position: 43
---

# showItem



## 

This property allows you to show a data row which has been previously hidden. The method accept a single argument which represents index of table row that will be shown. Basically used when you need to display a hidden row on the client.

````ASP.NET
<script type="text/javascript">
    function onDataBound(sender, args) {
        var masterTableView = sender.get_masterTableView();
        masterTableView.showItem(0);
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



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

 * [Show FilterItem]({%slug grid/client-side-programming/gridtableview-object/methods/showfilteritem%})

 * [Show InsertItem]({%slug grid/client-side-programming/gridtableview-object/methods/showinsertitem%})

 * [Show Column]({%slug grid/client-side-programming/gridtableview-object/methods/showcolumn%})
