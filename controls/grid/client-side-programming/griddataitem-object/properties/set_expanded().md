---
title: set_expanded()
page_title: set_expanded() | RadGrid for ASP.NET AJAX Documentation
description: set_expanded()
slug: grid/client-side-programming/griddataitem-object/properties/set_expanded()
tags: set_expanded()
published: True
position: 4
---

# set_expanded()



## 

This property takes a Boolean value, indicating whether the element will be expanded or not. It has effect when the **HierarchyLoadMode** setting is set to **Client**.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource"
    OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
    <ClientSettings EnableRowHoverStyle="true">
        <ClientEvents OnRowClick="rowClick" />
    </ClientSettings>
    <MasterTableView DataKeyNames="CustomerID" Name="Customers"
        HierarchyLoadMode="Client">
        <DetailTables>
            <telerik:GridTableView runat="server" DataKeyNames="OrderID" Name="Orders">
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````



````JavaScript
function rowClick(sender, args) {
    if (args.get_tableView().get_name() == "Customers") {
        args.get_item().set_expanded(!args.get_item().get_expanded());

        // alternative approaches including cases with different load mode
        //args.get_tableView().expandItem(args.get_item().get_element());
        //args.get_tableView().fireCommand("ExpandCollapse", args.get_item().get_itemIndex());
    }
}
````


