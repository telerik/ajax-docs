---
title: Persist Frozen Columns on the client
page_title: Persist frozen columns on the client | RadGrid for ASP.NET AJAX Documentation
description: Persist frozen columns on the client
slug: grid/how-to/persisting-frozen-columns-client-side
tags: persist,frozen,columns,on,the,client
published: True
position: 10
---


#  Persist frozen columns on the client


The **RadGrid** provides the option to freeze/unfreeze columns on the client. This feature is activated via the **ClientSettings-Scrolling-EnableColumnClientFreeze** property. When the user freezes/unfreezes columns this is not persisted after postback out of the box.  

The following example illustrates how to persist the frozen columns client-side after operations that perform postback (e.g. paging).


````JavaScript
var frozenColumns = [];

function pageLoad() {
    var grid = $find("<%=RadGrid1.ClientID%>");
    var columns = grid.get_masterTableView().get_columns();

    for (var i = grid.ClientSettings.Scrolling.FrozenColumnsCount; i < columns.length; i++) {
        if (frozenColumns.indexOf(columns[i].get_uniqueName()) >= 0) {
            columns[i]._toggleFreeze();
        }
    }
}

function gridCommand(sender, args) {
    frozenColumns = [];

    var frozenCount = sender.ClientSettings.Scrolling.FrozenColumnsCount;
    var columns = sender.get_masterTableView().get_columns();

    for (var i = 0; i < frozenCount; i++) {
        frozenColumns.push(columns[i].get_uniqueName());
    }
}
````
````ASP.NET
<telerik:RadAjaxPanel runat="server">
    <telerik:RadGrid runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" AllowPaging="true" EnableHeaderContextMenu="true" Width="700px">
        <HeaderStyle Width="200px" />
        <MasterTableView>
        </MasterTableView>
        <ClientSettings>
            <Scrolling AllowScroll="true" EnableColumnClientFreeze="True" FrozenColumnsCount="1" UseStaticHeaders="True" />
            <ClientEvents OnCommand="gridCommand" />
        </ClientSettings>
    </telerik:RadGrid>
</telerik:RadAjaxPanel>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    DataTable table = new DataTable();
    int columnsCount = 20;
    int rowsCount = 30;
    for (int i = 0; i < columnsCount; i++)
    {
        table.Columns.Add("Column" + i, typeof(string));
    }

    for (int i = 0; i < rowsCount; i++)
    {
        table.Rows.Add();
        for (int z = 0; z < columnsCount; z++)
        {
            table.Rows[i][z] = "SomeValue" + i;
        }
    }

    (sender as RadGrid).DataSource = table;
}
````



