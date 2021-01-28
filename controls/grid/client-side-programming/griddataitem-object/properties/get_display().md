---
title: get_display()
page_title: get_display() - RadGrid
description: Check our Web Forms article about get_display().
slug: grid/client-side-programming/griddataitem-object/properties/get_display()
tags: get_display()
published: True
position: 0
---

# get_display()



## 

The property which specifies if the row is visible. It returns a boolean value which indicates whether the item is visible. Keep in mind that the property will return a correct value only if you previously call **set_disaply()** function. Basically you can use it in cases when you need to check whether a row is visible.

````ASP.NET
<script type="text/javascript">
    function onDataBound(sender, args) {
        var masterTableView = sender.get_masterTableView();
        masterTableView.get_dataItems()[0].set_display(true);
        alert("The first item is display: " + masterTableView.get_dataItems()[0].get_display());
    }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="true" AllowSorting="true"
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

 * [GridDataItem Class Members]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})
