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

## DetailTables of a Hierarchical Grid

In a hierarchical grid, each item in the **Items** collection of a parent **GridTableView** has a **ChildItem** property of type **GridNestedViewItem**. This child item is the container for the nested child table(s). The **GridNestedViewItem** has a **NestedTableViews** property that holds the collection of all the detail tables for the parent table.

Example markup

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

Code behind examples

You can use these properties to access the detail tables of a row in the parent table, as follows:

````C#
GridTableView firstDetail = RadGrid1.MasterTableView.Items[0].ChildItem.NestedTableViews[0];
````
````VB
Dim firstDetail As GridTableView = RadGrid1.MasterTableView.Items(0).ChildItem.NestedTableViews(0)
````

Conversely, if you have a reference to the instance of an item in a child table and want to access the parent table view, you can use the **ParentItem** property.

````C#
GridTableView parentTable = childItem.OwnerTableView.ParentItem.OwnerTableView;
````
````VB
Dim parentTable As GridTableView = childItem.OwnerTableView.ParentItem.OwnerTableView
````

You can also Iterate through the DetailTables GridTableViewCollection

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

## See Also
 
- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing RadGrid]({%slug grid/accessing-values-and-controls/server-side/accessing-radgrid %})
- [Accessing Items]({%slug grid/accessing-values-and-controls/server-side/accessing-items %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/server-side/accessing-cells %})
- [Accessing Controls]({%slug grid/accessing-values-and-controls/server-side/accessing-controls %})

