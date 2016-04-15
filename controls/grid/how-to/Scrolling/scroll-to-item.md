---
title: Scroll RadGrid to Specific item
page_title: Scroll RadGrid to Specific item | RadGrid for ASP.NET AJAX Documentation
description: Scroll RadGrid to Specific item
slug: grid/how-to/scrolling/scroll-to-item
tags: scroll,grid,to,specific,item
published: True
position: 10
---


#  Scroll RadGrid to Specific item


The example below shows how you can scroll **RadGrid** to show a specific item first.

All the user needs to do is enter an ID in the numeric input and click the Button.


````ASP.NET
<telerik:RadNumericTextBox RenderMode="Lightweight" runat="server" ID="ActiveItemID" MinValue="0" MaxValue="50" NumberFormat-DecimalDigits="0" />
<asp:Button ID="Button1" Text="Go To Item" runat="server" OnClientClick="clientClick(); return false;" />

<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" MasterTableView-ClientDataKeyNames="ID">
    <ClientSettings>
        <Scrolling AllowScroll="true" ScrollHeight="300px" UseStaticHeaders="true" />
    </ClientSettings>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    DataTable table = new DataTable();
    table.Columns.Add("ID", typeof(int));
    table.Columns.Add("FirstName", typeof(string));
    table.Columns.Add("candName", typeof(string));
    table.Columns.Add("Age", typeof(int));
    table.Columns.Add("Date", typeof(DateTime));
    table.Columns.Add("BoolValue", typeof(Boolean));

    for (int i = 0; i < 50; i++)
    {
        table.Rows.Add(i, "FirstName" + i, null, 20 + i, DateTime.Now.AddDays(i), i % 2 == 0);
    }

    (sender as RadGrid).DataSource = table;
}
````
````JavaScript
function clientClick() {
    var grid = $find("<%=RadGrid1.ClientID%>");
    var master = grid.get_masterTableView();
    var activeItemID = $find("<%=ActiveItemID.ClientID%>").get_value();

    var items = master.get_dataItems();
    for (var i = 0; i < items.length; i++) {
        var id = items[i].getDataKeyValue("ID");
        if (id == activeItemID) {
            var rowElement = items[i].get_element();
            var offset = rowElement.offsetTop;
            setScroll(grid, offset);
        }
    }
}

function setScroll(grid, scrollTop) {
    var dataDiv = $telerik.findElement(grid.get_element(), grid.get_id() + "_GridData");
    dataDiv.scrollTop = scrollTop;
}
````



