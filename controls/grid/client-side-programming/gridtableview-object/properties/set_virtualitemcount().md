---
title: set_virtualItemCount()
page_title: set_virtualItemCount() | RadGrid for ASP.NET AJAX Documentation
description: set_virtualItemCount()
slug: grid/client-side-programming/gridtableview-object/properties/set_virtualitemcount()
tags: set_virtualitemcount()
published: True
position: 21
---

# set_virtualItemCount()



## 

This property allows you to set the virtual item count value for the respective **GridTableView** object. Applies to client-side bound grid only. Generally used when need to set the virtual item count on the client.

````ASP.NET
<script type="text/javascript">
    function dataBound(sender, args) {
        var masterTableView = sender.get_masterTableView();
        masterTableView.set_virtualItemCount(5);
    }
</script>
<telerik:RadGrid ID="RadGrid3" runat="server" AllowPaging="true" AllowSorting="true" OnItemCommand="RadGrid3_ItemCommand"
    AllowFilteringByColumn="true" PageSize="5">
    <MasterTableView ClientDataKeyNames="ProductID" CommandItemDisplay="Top">
        <Columns>
            <telerik:GridBoundColumn DataField="ProductID" HeaderText="ProductID" UniqueName="ProductID"
                DataType="System.Int32" />
            <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" UniqueName="ProductName"
                DataType="System.String" />
            <telerik:GridBoundColumn DataField="CategoryID" HeaderText="CategoryID" UniqueName="CategoryID"
                DataType="System.Int32" />
            <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="UnitPrice" UniqueName="UnitPrice" DataFormatString="{0:C}"></telerik:GridBoundColumn>
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



## See Also

 * [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})
