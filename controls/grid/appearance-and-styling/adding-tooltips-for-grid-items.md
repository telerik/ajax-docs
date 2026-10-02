---
title: Adding Tooltips for Grid Items
page_title: Adding Tooltips for Grid Items - RadGrid
description: Learn how to add server-side, client-side, and themed tooltips to RadGrid items in Telerik UI for ASP.NET AJAX.
slug: grid/appearance-and-styling/adding-tooltips-for-grid-items
components: ["grid"]
tags: adding,tooltips,for,grid,items
published: True
position: 7
---

# Adding Tooltips for Grid Items



## Adding Server-Side Tooltips

You can display a tooltip when a user hovers over a grid item. Tooltips can provide additional context, but do not use them as the only way to communicate essential information.

Handle the **ItemDataBound** or **ItemCreated** event. Tooltips are commonly displayed for header and data cells.

To display tooltips only for header cells, check whether **e.Item** is a **GridHeaderItem** in the event handler.

To display tooltips for data items, check whether **e.Item** is a **GridDataItem**.

The following sample shows both cases:

> caption Example: Configuring server-side tooltip events

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

## Adding Client-Side Tooltips

You can also add tooltips with JavaScript. To display a data key, include the field name in the **ClientDataKeyNames** collection. For more information, see:
* [Extracting key values on the client]({%slug grid/how-to/selecting/extracting-key-values-client-side%})
* [Accessing Grid Cells, Cell Values and Raw DataKey Values Client-Side]({%slug grid/accessing-values-and-controls/client-side/accessing-cells%})

The following example shows the client-side configuration:

> caption Example: Configuring client-side tooltip events

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


## Adding Tooltips with Built-in Skins

Telerik UI for ASP.NET AJAX provides the **RadToolTip** component, which can match the skin and theme of your application. It also supports dynamic AJAX loading and automatic tooltip creation for an area.

For implementation examples, see:
* [RadToolTip versus RadToolTipManager](https://demos.telerik.com/aspnet-ajax/tooltip/examples/tooltipversustooltipmanager/defaultcs.aspx)
* [Set Target](https://demos.telerik.com/aspnet-ajax/tooltip/examples/bindtotarget/defaultcs.aspx)
* [Update TargetControls with AJAX](https://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=tooltip)
* [Complex Tooltip Data Without Additional Requests](https://demos.telerik.com/aspnet-ajax/tooltip/examples/databasetooltipswithoutlod/defaultcs.aspx)

## See Also

* [Customizing Row Appearance]({%slug grid/appearance-and-styling/customizing-row-appearance%})
* [RadToolTip Overview]({%slug tooltip/overview%})
