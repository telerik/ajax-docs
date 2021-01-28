---
title: get_isInEditMode()
page_title: get_isInEditMode() - RadGrid
description: Check our Web Forms article about get_isInEditMode().
slug: grid/client-side-programming/griddataitem-object/properties/get_isineditmode()
tags: get_isineditmode()
published: True
position: 6
---

# get_isInEditMode()



## 

Returns a **Boolean** value, indicating whether the GridDataItem is in edit mode or not. Can be used to create a condition to execute script logic depending on the item status.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True"
    OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateEditColumn="true">
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
    if (item.get_isInEditMode()) {
        alert("Record " + item.get_itemIndex() + " is in edit mode.");
    }
}
````


