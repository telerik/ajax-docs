---
title: get_id()
page_title: get_id() - RadGrid
description: Check our Web Forms article about get_id().
slug: grid/client-side-programming/griddataitem-object/properties/get_id()
tags: get_id()
published: True
position: 5
---

# get_id()



## 

Returns a String, representing the ClientID for the element. Can be used as an identificator to save some of the records in a preserving collection.

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
    alert(item.get_id());
}
````


