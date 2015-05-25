---
title: get_isFilterItemVisible()
page_title: get_isFilterItemVisible() | RadGrid for ASP.NET AJAX Documentation
description: get_isFilterItemVisible()
slug: grid/client-side-programming/gridtableview-object/properties/get_isfilteritemvisible()
tags: get_isfilteritemvisible()
published: True
position: 10
---

# get_isFilterItemVisible()



## 

Returns a Boolean value indicating if the **GridTableView** filter item is currently visible or not. Can be used to create some condition for executing different script logic depending on the visibility status of the filter item.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
    OnNeedDataSource="RadGrid1_NeedDataSource" AllowFilteringByColumn="true">
    <MasterTableView DataKeyNames="OrderID" IsFilterItemExpanded="false">
    </MasterTableView>
</telerik:RadGrid>
<br />
<asp:Button ID="Button1" runat="server" Text="Click"
    OnClientClick="buttonClick(); return false;" />
````



````JavaScript
function buttonClick() {
    var grid = $find('<%= RadGrid1.ClientID %>');
    var masterTableView = grid.get_masterTableView();

    if (!masterTableView.get_isFilterItemVisible()) {
        alert("The user is unable to see the filter controls.");
    }
}
````


