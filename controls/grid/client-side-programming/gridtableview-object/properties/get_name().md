---
title: get_name()
page_title: get_name() | RadGrid for ASP.NET AJAX Documentation
description: get_name()
slug: grid/client-side-programming/gridtableview-object/properties/get_name()
tags: get_name()
published: True
position: 12
---

# get_name()



## 

Returns a String which represents the **Name** property (set on the server) for the corresponding GridTableView client object. Can be used to identify table in grid hierarchy client-side.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" PageSize="3"
    OnNeedDataSource="RadGrid1_NeedDataSource" OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
    <ClientSettings>
        <Selecting AllowRowSelect="true" />
        <ClientEvents OnRowSelected="rowSelected" />
    </ClientSettings>
    <MasterTableView DataKeyNames="CustomerID" CommandItemDisplay="Top" Name="Customers">
        <DetailTables>
            <telerik:GridTableView DataKeyNames="OrderID" Name="Orders">
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````



````JavaScript
function rowSelected(sender, args) {
    var tableView = args.get_tableView();

    if (tableView.get_name() == "Customers") {
        alert("The selected record is from the main table.");
    }
}
````


