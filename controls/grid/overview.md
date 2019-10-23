---
title: Overview
page_title: RadGrid Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/overview
tags: overview
published: True
position: 0
---

# Grid Overview

Telerik **RadGrid** is designed to eliminate the typical trade off associated with ASP.NET grid controls — rich functionality at the expense of weight and performance. Thanks to its innovative architecture, **RadGrid** is extremely fast and generates very little output. Added to this is true cross-browser support — Internet Explorer, all Gecko-based browsers, and Opera.

## Basic Grid

![](images/grid-overview-basic.png)

Code Snippet

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Skin="Bootstrap" OnNeedDataSource="RadGrid_NeedDataSource">
</telerik:RadGrid>
````
````C#
protected void RadGrid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = Enumerable.Range(1, 5).Select(x => new
    {
        OrderID = x,
        OrderDate = DateTime.Now.Date.AddHours(x),
        Freight = x + x * 0.1,
        ShipName = "Name " + x,
        ShipCountry = "Country " + x
    });
}
````
````VB
Protected Sub RadGrid_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    TryCast(sender, RadGrid).DataSource = Enumerable.Range(1, 5).Select(Function(x) New With {
        Key .OrderID = x,
            .OrderDate = DateTime.Now.Date.AddHours(x),
            .Freight = x * 0.1,
            .ShipName = "Name " & x,
            .ShipCountry = "Country " & x
    })
End Sub
````

## Advanced Grid

![](images/grid-overview-advanced.png)

Code Snippet

````ASP.NET
<telerik:RadGrid ID="RadGrid2" runat="server" AllowPaging="True" Skin="Bootstrap" PageSize="6" Visible="true"
    AllowFilteringByColumn="true" AllowSorting="true" GroupingEnabled="true" ShowFooter="true"
    OnDetailTableDataBind="RadGrid_DetailTableDataBind"
    OnNeedDataSource="RadGrid_NeedDataSource">
    <MasterTableView CommandItemDisplay="Top" Name="TableLevel1" Caption="Table Level1">
        <GroupByExpressions>
            <telerik:GridGroupByExpression>
                <SelectFields>
                    <telerik:GridGroupByField FieldName="Group" />
                </SelectFields>
                <GroupByFields>
                    <telerik:GridGroupByField FieldName="Group" />
                </GroupByFields>
            </telerik:GridGroupByExpression>
        </GroupByExpressions>
        <CommandItemSettings ShowExportToCsvButton="true" ShowExportToExcelButton="true" ShowExportToPdfButton="true" ShowExportToWordButton="true" ShowPrintButton="true" ShowSaveChangesButton="true" ShowCancelChangesButton="true" />
        <DetailTables>
            <telerik:GridTableView Name="TableLevel2" Caption="Table Level2">
                <DetailTables>
                    <telerik:GridTableView Name="TableLevel3" Caption="Table Level3">
                    </telerik:GridTableView>
                </DetailTables>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    if (!e.IsFromDetailTable)
    {
        (sender as RadGrid).DataSource = Enumerable.Range(1, 5).Select(x => new
        {
            OrderID = x,
            OrderDate = DateTime.Now.Date.AddHours(x),
            Freight = x + x * 0.1,
            ShipName = "Name " + x,
            ShipCountry = "Country " + x,
            Group = x % 2 == 0 ? "G1" : "G2"
        });
    }
}
protected void RadGrid_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
{
    if (e.DetailTableView.Name == "TableLevel2")
    {
        e.DetailTableView.DataSource = Enumerable.Range(1, 2).Select(x => new
        {
            ID = x,
            Description = "T Level 2 Data " + x
        });
    }
    else if (e.DetailTableView.Name == "TableLevel3")
    {
        e.DetailTableView.DataSource = Enumerable.Range(1, 2).Select(x => new
        {
            ID = x,
            Description = "T Level 3 Data " + x
        });
    }
}
````
````VB
Protected Sub RadGrid_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    If Not e.IsFromDetailTable Then
        TryCast(sender, RadGrid).DataSource = Enumerable.Range(1, 5).Select(Function(x) New With {
            Key .OrderID = x,
                .OrderDate = DateTime.Now.Date.AddHours(x),
                .Freight = x + x * 0.1,
                .ShipName = "Name " & x,
                .ShipCountry = "Country " & x,
                .Group = If(x Mod 2 = 0, "G1", "G2")
        })
    End If
End Sub

Protected Sub RadGrid_DetailTableDataBind(ByVal sender As Object, ByVal e As GridDetailTableDataBindEventArgs)
    If e.DetailTableView.Name = "TableLevel2" Then
        e.DetailTableView.DataSource = Enumerable.Range(1, 2).Select(Function(x) New With {
            Key .ID = x,
                .Description = "T Level 2 Data " & x
        })
    ElseIf e.DetailTableView.Name = "TableLevel3" Then
        e.DetailTableView.DataSource = Enumerable.Range(1, 2).Select(Function(x) New With {
            Key .ID = x,
                .Description = "T Level 3 Data " & x
        })
    End If
End Sub
````

## Colorful Grid with built-in Skins

![](images/grid-overview-skins.gif)

Code Snippets to generate a Grid for each Skin and compare them

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
    string[] skins = new string[] {
        "Material", // light
        "Black", // dark
        "Office2007", // blue
        "Silk", // green
        "WebBlue", // blue
        "Simple", // orange
        "Web20", // blue
        "Bootstrap", // light
        "BlackMetroTouch", // dark
        "Outlook", // blue
        "Telerik", // green
        "Sunset", // orange
        "MetroTouch", // light
        "Glow", // dark
        "Windows7", // light
        "Default", // dark
        "Vista", // blue
    };

    foreach (string skin in skins)
    {
        Panel pnl = new Panel();
        pnl.CssClass = "gridwrapper";
        pnl.ID = Guid.NewGuid().ToString();
        pnl.Style.Add("max-width", "1200px");
        pnl.Style.Add("margin", "0 auto 20px auto");

        RadGrid grid = new RadGrid();
        grid.ID = string.Format("Grid{0}", skin);
        grid.Skin = skin;
        grid.NeedDataSource += Grid_NeedDataSource;
        grid.PreRender += Grid_PreRender;

        grid.MasterTableView.SortExpressions.Add(new GridSortExpression() { FieldName = "Freight", SortOrder = GridSortOrder.Descending });

        grid.AllowPaging = true;
        grid.PageSize = 3;
        grid.AllowSorting = true;
        grid.AllowFilteringByColumn = true;
        pnl.Controls.Add(grid);
        PlaceHolder1.Controls.Add(pnl);
    }
}

private void Grid_PreRender(object sender, EventArgs e)
{
    (sender as RadGrid).MasterTableView.GetItems(GridItemType.AlternatingItem).First().Selected = true;
}

private void Grid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = Enumerable.Range(1, 20).Select(x => new
    {
        OrderID = x,
        OrderDate = DateTime.Now.Date.AddDays(x),
        Freight = x * .1,
        ShipName = "Name " + x,
        ShipCountry = "Country " + x
    });
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init

    Dim skins As String() = New String() {
        "Material",
        "Black",
        "Office2007",
        "Silk",
        "WebBlue",
        "Simple",
        "Web20",
        "Bootstrap",
        "BlackMetroTouch",
        "Outlook",
        "Telerik",
        "Sunset",
        "MetroTouch",
        "Glow",
        "Windows7",
        "Default",
        "Vista"
    }

    For Each skin As String In skins
        Dim pnl As Panel = New Panel()
        pnl.CssClass = "gridwrapper"
        pnl.ID = Guid.NewGuid().ToString()
        pnl.Style.Add("max-width", "1200px")
        pnl.Style.Add("margin", "0 auto 20px auto")
        Dim grid As RadGrid = New RadGrid()
        grid.ID = String.Format("Grid{0}", skin)
        grid.Skin = skin

        AddHandler grid.NeedDataSource, AddressOf Grid_NeedDataSource
        AddHandler grid.PreRender, AddressOf Grid_PreRender

        grid.MasterTableView.SortExpressions.Add(New GridSortExpression() With {
            .FieldName = "Freight",
            .SortOrder = GridSortOrder.Descending
        })

        grid.AllowPaging = True
        grid.PageSize = 3
        grid.AllowSorting = True
        grid.AllowFilteringByColumn = True
        pnl.Controls.Add(grid)
        PlaceHolder1.Controls.Add(pnl)
    Next
End Sub

Private Sub Grid_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    TryCast(sender, RadGrid).MasterTableView.GetItems(GridItemType.AlternatingItem).First().Selected = True
End Sub

Private Sub Grid_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    TryCast(sender, RadGrid).DataSource = Enumerable.Range(1, 20).Select(Function(x) New With {
        Key .OrderID = x,
            .OrderDate = DateTime.Now.Date.AddDays(x),
            .Freight = x * 0.1,
            .ShipName = "Name " & x,
            .ShipCountry = "Country " & x
    })
End Sub
````

## Setting up the environment

If the `Telerik Web UI for ASP.NET AJAX` is not installed yet, you can start off by installing it following the [First Steps]({%slug getting-started/first-steps%}) article.

## Creating a RadGrid

There are three ways to create a RadGrid:

* [Using the Designer]({%slug grid/getting-started/getting-started-with-radgrid-for-asp.net-ajax%})
* [Declaratively]({%slug grid/defining-structure/declarative-definition%})
* [Programmatically]({%slug grid/defining-structure/creating-a-radgrid-programmatically%})

## Binding data

Binding data to RadGrid can also be done in multiple different ways listed in the [Telerik RadGrid Data Binding Basics]({%slug grid/data-binding/understanding-data-binding/telerik-radgrid-data-binding-basics%}) article.

Depending on the Business Requirements, you can bind data to it on:

* [Client-Side]({%slug grid/data-binding/understanding-data-binding/client-side-binding/client-side-binding%})
* [Server-Side]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%})
* [Declaratively]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%})

## Features/Functionalities

RadGrid has many top-of-the line features/functionalities that you can benefit of. Check out the complete list of all [Features]({%slug grid/getting-started/key-features%})

Commonly used Functionalities are:

* [Filtering]({%slug grid/functionality/filtering/overview%})
* [Paging]({%slug grid/functionality/paging/overview%})
* [Sorting]({%slug grid/functionality/sorting/overview%})
* [Grouping]({%slug grid/functionality/grouping/overview%})
* [Scrolling]({%slug grid/functionality/scrolling/overview%})

## Changing the appearance

* [Choosing from the built-in Skins]({%slug grid/appearance-and-styling/skins%})
* [Modifying the built-in Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
* [Creating Custom Skins using the Telerik Sass Theme Builder]({%slug theme-builder/overview%})

## Optimizing Performance

* [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})
* [Ajaxifying RadGrid]({%slug grid/performance/ajaxifying-radgrid%})
* [Saving the grid ViewState in Session]({%slug grid/performance/saving-the-grid-viewstate-in-session%})
* [Rebind Grid with EnableViewState = false]({%slug grid/performance/rebind-grid-with-enableviewstate-=-false%})

## Troubleshooting

* [Common Issues]({%slug grid/troubleshooting/most-common-mistakes%})
* [Known reasons for Error Messages]({%slug grid/troubleshooting/known-reasons-for-error-messages%})
* [Known Limitations]({%slug grid/troubleshooting/known-limitations%})

# See Also

* [Install Telerik Web UI for ASP.NET AJAX]({%slug getting-started/first-steps%})
* [Getting Started with RadGrid for ASP.NET AJAX]({%slug grid/getting-started/getting-started-with-radgrid-for-asp.net-ajax%})
* [Key Features]({%slug grid/getting-started/key-features%})
