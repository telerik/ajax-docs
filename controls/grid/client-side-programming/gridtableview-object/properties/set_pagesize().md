---
title: set_pageSize()
page_title: set_pageSize() - RadGrid
description: Check our Web Forms article about set_pageSize().
slug: grid/client-side-programming/gridtableview-object/properties/set_pagesize()
tags: set_pagesize()
published: True
position: 16
---

# set_pageSize()



## 

Sets the page size for the respective **GridTableView** object.

The internal logic that is executed 'behind the scenes' when using this property to set the page size is to fire command event with name 'PageSize'. For this purpose we use the [fireCommand]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) client-side method of the respective GridTableView client object. Then you can intercept the [ItemCommand]({%slug grid/control-lifecycle/command-reference-%}) server-side event of the grid, check whether the executed command name is "PageSize" and specify the new number of items that will be visualized on the current page.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView DataKeyNames="OrderID">
    </MasterTableView>
</telerik:RadGrid>
<br />
<telerik:RadNumericTextBox RenderMode="Lightweight" ID="RadNumericTextBox1" runat="server" MinValue="5" MaxValue="90"
    Label="Page Size:">
    <NumberFormat DecimalDigits="0" />
</telerik:RadNumericTextBox>
<asp:Button ID="Button1" runat="server" Text="Click"
    OnClientClick="buttonClick(); return false;" />
````



````JavaScript
function buttonClick() {
    var grid = $find('<%= RadGrid1.ClientID %>');
    var masterTableView = grid.get_masterTableView();

    var value = $find('<%= RadNumericTextBox1.ClientID %>').get_value();
    if (value != "") {
        masterTableView.set_pageSize(value);
    }
}
````


