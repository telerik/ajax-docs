---
title: Accessing Tables
page_title: Accessing the Grid Tables on server - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing RadGrid's Tables on server
slug: grid/accessing-values-and-controls/server-side/accessing-tables
published: True
position: 1
---

# Accessing Tables (GridTableView objects) in RadGrid - server side

## MasterTable of a Grid

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView masterTable = RadGrid1.MasterTableView;
}
````

## DetailTables of a Grid

Iterate through the GridTableViewCollection

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView Name="MasterTable">
        <DetailTables>
            <telerik:GridTableView Name="ChildTable1">
                <DetailTables>
                    <telerik:GridTableView Name="GrandChildTable1">
                    </telerik:GridTableView>
                    <telerik:GridTableView Name="GrandChildTable2">
                    </telerik:GridTableView>
                </DetailTables>
            </telerik:GridTableView>
            <telerik:GridTableView Name="ChildTable2">
                <DetailTables>
                    <telerik:GridTableView Name="GrandChildTable1">
                    </telerik:GridTableView>
                    <telerik:GridTableView Name="GrandChildTable2">
                    </telerik:GridTableView>
                </DetailTables>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````


````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    foreach (GridTableView childTable in RadGrid1.MasterTableView.DetailTables)
    {
        if (childTable.Name == "ChildTable1")
        {
            childTable.AllowSorting = true;

        }
        else if (childTable.Name == "ChildTable2")
        {
            childTable.AllowFilteringByColumn = true;
        }
        childTable.Rebind();

        foreach (GridTableView grandChildTable in childTable.DetailTables)
        {
            if (grandChildTable.Name == "GrandChildTable1")
            {
                grandChildTable.AllowFilteringByColumn = true;
            }
            else if (grandChildTable.Name == "GrandChildTable2")
            {
                grandChildTable.AllowSorting = true;
            }

            grandChildTable.Rebind();
        }
    }
}
````

