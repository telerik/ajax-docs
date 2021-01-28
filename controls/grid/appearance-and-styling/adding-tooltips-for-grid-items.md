---
title: Adding Tooltips for Grid Items
page_title: Adding Tooltips for Grid Items - RadGrid
description: Check our Web Forms article about Adding Tooltips for Grid Items.
slug: grid/appearance-and-styling/adding-tooltips-for-grid-items
tags: adding,tooltips,for,grid,items
published: True
position: 7
---

# Adding Tooltips for Grid Items



## 

There are many cases when you want you grid to show a tooltip when an item is hovered with the mouse. Tooltips are understood by screen readers and can be used as an accessibility feature.

## Add Tooltips on Server-Side

In brief you need to handle either **ItemDataBound** or **ItemCreated** Event. Usually, the tooltips are displayed for the header and the grid data cells

In the first case you show the tooltips only when **GridHeaderItem** is hovered. In this case you should check in the event handler if **e.Item** is **GridHeaderItem**.

The second scenario is when the tooltips will be shown for any grid item. In this case you should check if **e.Item** is **GridDataItem**.

Here is a full working sample:

````ASP.NET
        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
            OnNeedDataSource="RadGrid1_NeedDataSource"
            OnItemDataBound="RadGrid1_ItemDataBound">
            <MasterTableView DataKeyNames="ID">
            </MasterTableView>
        </telerik:RadGrid>
````
````C#
    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        RadGrid1.DataSource = Enumerable.Range(1, 60).Select(x => new
        {
            ID = x,
            Name = "Name " + x,
            Description = "Description for " + x
        });
    }

    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        //Check for GridHeaderItem if you want tooltips for the header cells
        if (e.Item is GridHeaderItem)
        {
            GridHeaderItem headerItem = e.Item as GridHeaderItem;

            foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
            {
                headerItem[column.UniqueName].ToolTip = column.UniqueName;
            }
        }
        if (e.Item is GridDataItem)
        {
            GridDataItem gridItem = e.Item as GridDataItem;
            foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
            {
                //this line will show a tooltip based on the ID data field
                gridItem[column.UniqueName].ToolTip = "ID: " +
                    gridItem.GetDataKeyValue("ID").ToString();

                //This is in case you wish to display other row value
                if (column.UniqueName == "Name")
                {
                    gridItem[column.UniqueName].ToolTip = gridItem["Description"].Text;
                }
            }
        }
    }
````
````VB
    Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
        RadGrid1.DataSource = Enumerable.Range(1, 60).[Select](Function(x) New With {
        .ID = x,
        .Name = "Name " & x,
        .Description = "Description for " & x
    })
    End Sub

    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
        If TypeOf e.Item Is GridHeaderItem Then
            Dim headerItem As GridHeaderItem = TryCast(e.Item, GridHeaderItem)

            For Each column As GridColumn In RadGrid1.MasterTableView.RenderColumns
                headerItem(column.UniqueName).ToolTip = column.UniqueName
            Next
        End If

        If TypeOf e.Item Is GridDataItem Then
            Dim gridItem As GridDataItem = TryCast(e.Item, GridDataItem)

            For Each column As GridColumn In RadGrid1.MasterTableView.RenderColumns
                gridItem(column.UniqueName).ToolTip = "ID: " & gridItem.GetDataKeyValue("ID").ToString()

                If column.UniqueName = "Name" Then
                    gridItem(column.UniqueName).ToolTip = gridItem("Description").Text
                End If
            Next
        End If
    End Sub
````

## Add Tooltips on Client-Side

You can also ad Tooltips using JavaScript. And if you want to display the unique ID of the item, you can set the field name to the ClientDataKeyNames collection. More information you can find here:  
* [Extracting Key Values Client-side](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Selecting/extracting-key-values-client-side)
* [Accessing Cells and Rows - getDataKeyValue()](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#getdatakeyvalue)

This example is also fully isolated and you can simply copy-paste it to your web site.

````ASP.NET
        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
            OnNeedDataSource="RadGrid1_NeedDataSource">
            <ClientSettings>
                <%--This can be OnDataBound if you are using client-side binding--%>
                <ClientEvents OnGridCreated="gridCreated" />
            </ClientSettings>
            <MasterTableView DataKeyNames="ID" ClientDataKeyNames="ID">
            </MasterTableView>
        </telerik:RadGrid>
````
````C#
    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        RadGrid1.DataSource = Enumerable.Range(1, 60).Select(x => new
        {
            ID = x,
            Name = "Name " + x,
            Description = "Description for " + x
        });
    }
````
````VB
    Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
        RadGrid1.DataSource = Enumerable.Range(1, 60).[Select](Function(x) New With {
        .ID = x,
        .Name = "Name " & x,
        .Description = "Description for " & x
    })
    End Sub
````
````JavaScript  
            function gridCreated(sender, args) {
                var $ = $telerik.$,
                 tableView = sender.get_masterTableView(),
                 columns = tableView.get_columns(),
                 items = tableView.get_dataItems();

                for (var col of columns) {
                    var colName = col.get_uniqueName();

                    var headerCell = col.get_element();
                    headerCell.title = colName;

                    for (var item of items) {
                        var cell = item.get_cell(colName);
                        if (colName == "Name") {
                            cell.title = $(item.get_cell("Description")).text().trim();
                        }
                        else {
                            cell.title = "ID: " + item.getDataKeyValue("ID");
                        }
                    }
                }
            }
````


## Add Professional Tooltips with Built-in Skins

Telerik UI for ASP.NET AJAX provides its own RadToolTip component which can be used to match the skin and theme of your app. In addition, it also provides rich functionality like dynamic AJAX loading depending on the targeted value and auto-tooltipify of an entire area. 

You can check these implementation and use them in your own project:  
* [RadToolTip versus RadToolTipManager](https://demos.telerik.com/aspnet-ajax/tooltip/examples/tooltipversustooltipmanager/defaultcs.aspx)
* [Set Target](https://demos.telerik.com/aspnet-ajax/tooltip/examples/bindtotarget/defaultcs.aspx)
* [Update TargetControls with AJAX](https://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=tooltip)
* [Complex Tooltip Data Without Additional Requests](https://demos.telerik.com/aspnet-ajax/tooltip/examples/databasetooltipswithoutlod/defaultcs.aspx)
