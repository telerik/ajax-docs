---
title: get_owner()
page_title: get_owner() - RadGrid
description: Check our Web Forms article about get_owner().
slug: grid/client-side-programming/griddataitem-object/properties/get_owner()
tags: get_owner()
published: True
position: 9
---

# get_owner()



## 

Returns a client-side object of type **Telerik.Web.UI.GridTableView** which represents the parent of the current item.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <ClientSettings>
        <ClientEvents OnRowCreated="rowCreated" />
    </ClientSettings>
    <MasterTableView DataKeyNames="OrderID">
    </MasterTableView>
</telerik:RadGrid>
````



````JavaScript
function rowCreated(sender, args) {
    var item = args.get_item();
    var tableView = item.get_owner();

    if (tableView.get_id() == args.get_tableView().get_id()) {
        alert("The table view can be accessed in two ways.");
    }
}
````


