---
title: get_allowMultiColumnSorting()
page_title: get_allowMultiColumnSorting() | RadGrid for ASP.NET AJAX Documentation
description: get_allowMultiColumnSorting()
slug: grid/client-side-programming/gridtableview-object/properties/get_allowmulticolumnsorting()
tags: get_allowmulticolumnsorting()
published: True
position: 0
---

# get_allowMultiColumnSorting()



## 

Returns a Boolean value indicating whether multi-column sorting is enabled for the grid instance. Can be used to create some condition for executing different script logic depending on whether the property is enabled or not.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
    OnNeedDataSource="RadGrid1_NeedDataSource" AllowSorting="true">
    <MasterTableView DataKeyNames="OrderID" AllowMultiColumnSorting="true">
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

    if (masterTableView.get_allowMultiColumnSorting()) {
        alert("Multi-column sorting is enabled.");
    }
}
````


