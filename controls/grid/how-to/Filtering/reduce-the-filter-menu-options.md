---
title: Reduce the Filter Menu Options
page_title: Reduce the Filter Menu Options - RadGrid
description: Check our Web Forms article about Reduce the Filter Menu Options.
slug: grid/how-to/filtering/reduce-the-filter-menu-options
components: ["grid"]
previous_url: controls/grid/functionality/filtering/how-to/reduce-the-filter-menu-options
tags: reduce,the,filter,menu,options
published: True
position: 2
---

# Reduce the Filter Menu Options

You can limit the filter functions displayed in a RadGrid filter menu by using either a client-side or a server-side approach.

For per-column customization on the client, handle both of these events:

1. RadGrid's [OnFilterMenuShowing]({%slug grid/client-side-programming/events/onfiltermenushowing%}) event fires before the filter menu opens. Use its event arguments to identify the column whose menu is opening.
2. The filter menu's [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%}) event fires immediately before the menu is displayed. Use this handler to show or hide options based on the column captured in `OnFilterMenuShowing`.

The two handlers work together: `OnFilterMenuShowing` provides the column context, and `OnClientShowing` lets you update the menu items before the menu appears. The filter menu's `OnClientShown` event fires after the menu is displayed, so it is not interchangeable with `OnClientShowing` when you need to change which options are shown.

The following example customizes the available filter functions for columns with `System.String` and `System.Int64` data types. It uses an in-memory `DataTable`, so it does not require a database or a Northwind connection string. If a column's `DataType` is not specified in the markup, RadGrid determines it from the corresponding field in the data source.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" AutoGenerateColumns="false" ID="RadGrid1"
    Width="760px" AllowFilteringByColumn="True" AllowSorting="True" PageSize="15"
    ShowFooter="True" AllowPaging="True" runat="server" GridLines="None" EnableLinqExpressions="false"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <PagerStyle Mode="NextPrevAndNumeric" />
    <GroupingSettings CaseSensitive="false" />
    <MasterTableView AutoGenerateColumns="false" EditMode="InPlace" AllowFilteringByColumn="True"
        ShowFooter="True" TableLayout="Auto">
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" SortExpression="OrderID"
                UniqueName="OrderID" FilterControlWidth="40px" DataType="System.Int64">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn FilterControlWidth="105px" DataField="ShipName" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName" DataType="System.String">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn FilterControlWidth="50px" DataField="OrderDate" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate" PickerType="None" DataFormatString="{0:d}"
                DataType="System.DateTime">
            </telerik:GridDateTimeColumn>
            <telerik:GridDateTimeColumn FilterControlWidth="120px" DataField="ShippedDate" HeaderText="ShippedDate"
                SortExpression="ShippedDate" UniqueName="ShippedDate" PickerType="DatePicker"
                DataFormatString="{0:D}" DataType="System.DateTime">
                <HeaderStyle Width="160px" />
            </telerik:GridDateTimeColumn>
            <telerik:GridBoundColumn FilterControlWidth="50px" DataField="ShipCountry" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry" DataType="System.String">
            </telerik:GridBoundColumn>
            <telerik:GridMaskedColumn FilterControlWidth="50px" DataField="ShipPostalCode" HeaderText="ShipPostalCode"
                SortExpression="ShipPostalCode" UniqueName="ShipPostalCode" Mask="#####">
                <FooterStyle Font-Bold="true" />
            </telerik:GridMaskedColumn>
            <telerik:GridNumericColumn HeaderStyle-Width="90px" FilterControlWidth="50px" DataField="Freight"
                DataType="System.Decimal" HeaderText="Freight" SortExpression="Freight" UniqueName="Freight"
                Aggregate="Sum">
                <FooterStyle Font-Bold="true" />
            </telerik:GridNumericColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <Scrolling AllowScroll="false" />
        <ClientEvents OnFilterMenuShowing="filterMenuShowing" />
    </ClientSettings>
    <FilterMenu OnClientShowing="filterMenuClientShowing" />
</telerik:RadGrid>
````
````C#
using System;
using System.Data;
using Telerik.Web.UI;

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    var data = new DataTable();
    data.Columns.Add("OrderID", typeof(long));
    data.Columns.Add("ShipName", typeof(string));
    data.Columns.Add("OrderDate", typeof(DateTime));
    data.Columns.Add("ShippedDate", typeof(DateTime));
    data.Columns.Add("ShipCountry", typeof(string));
    data.Columns.Add("ShipPostalCode", typeof(string));
    data.Columns.Add("Freight", typeof(decimal));

    data.Rows.Add(10248L, "Ship Name 1", new DateTime(2024, 1, 1), new DateTime(2024, 1, 3), "France", "44000", 32.5m);
    data.Rows.Add(10249L, "Ship Name 2", new DateTime(2024, 2, 1), new DateTime(2024, 2, 3), "Germany", "10115", 18.75m);
    data.Rows.Add(10250L, "Ship Name 3", new DateTime(2024, 3, 1), new DateTime(2024, 3, 3), "Brazil", "01000", 45.00m);

    ((RadGrid)sender).DataSource = data;
}
````
````VB
Imports System
Imports System.Data
Imports Telerik.Web.UI

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    Dim data As New DataTable()
    data.Columns.Add("OrderID", GetType(Long))
    data.Columns.Add("ShipName", GetType(String))
    data.Columns.Add("OrderDate", GetType(DateTime))
    data.Columns.Add("ShippedDate", GetType(DateTime))
    data.Columns.Add("ShipCountry", GetType(String))
    data.Columns.Add("ShipPostalCode", GetType(String))
    data.Columns.Add("Freight", GetType(Decimal))

    data.Rows.Add(10248L, "Ship Name 1", New DateTime(2024, 1, 1), New DateTime(2024, 1, 3), "France", "44000", 32.5D)
    data.Rows.Add(10249L, "Ship Name 2", New DateTime(2024, 2, 1), New DateTime(2024, 2, 3), "Germany", "10115", 18.75D)
    data.Rows.Add(10250L, "Ship Name 3", New DateTime(2024, 3, 1), New DateTime(2024, 3, 3), "Brazil", "01000", 45.0D)

    DirectCast(sender, RadGrid).DataSource = data
End Sub
````
````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
    var column = null;

    function filterMenuShowing(sender, eventArgs) {
            // Store the column for the filter menu handler.
      column = eventArgs.get_column();
    }

    function filterMenuClientShowing(menu, args) {

      if (column == null) return;

      // Iterate through filter menu items.
      var items = menu.get_items();
            for (var i = 0; i < items.get_count(); i++) {
        var item = items.getItem(i);
        if (item === null)
          continue;

        // Adjust the visible options based on the column's data type.
        switch (column.get_dataType()) {

          case "System.String":

            if (!(item.get_value() in { 'NoFilter': '', 'Contains': '', 'NotIsEmpty': '', 'IsEmpty': '', 'NotEqualTo': '', 'EqualTo': '' }))
              item.set_visible(false);
            else
              item.set_visible(true);
            break;

          case "System.Int64":

            if (!(item.get_value() in { 'NoFilter': '', 'GreaterThan': '', 'LessThan': '', 'NotEqualTo': '', 'EqualTo': '' }))
              item.set_visible(false);
            else
              item.set_visible(true);
            break;
        }
      }

      column = null;
      menu.repaint();
    }
    </script>
</telerik:RadCodeBlock>
````

When `FilterType` is set to `Combined`, the filter options are nested under a menu item, so the handler must use that item's child collection. With the `Classic` filter type, the options are direct children of the menu. This difference is about `FilterType`, not the grid's `RenderMode`.

````JavaScript
<script type="text/javascript">
    var column;

    function filterMenuShowing(sender, args) {
        column = args.get_column();
    }

    function filterMenuClientShowing(menu, args) {

        if (column == null) return;

        // Get a reference to the first menu item.
        var firstMenuItem = menu.get_items().getItem(0);

        // Combined filter options are nested; Classic filter options are direct menu items.
        var items = firstMenuItem.get_cssClass() === "RadFilterMenu_Combined" ? firstMenuItem.get_items() : menu.get_items();

        // rest of the code...
    }
</script>
````


To reduce the filter options server-side:

1. Handle the grid's **Init** event.

2. In the **Init** handler, use the grid's **FilterMenu** property to access the filtering menu. RadGrid creates one server-side menu and clones it for the client-side menus.

3. Check each item's **Text** property to determine whether it should be removed.

4. Remove unwanted items from the menu's **Items** collection by using **RemoveAt(index)**.

>note RadGrid creates one server-side filter menu and clones it for the client-side menus. The available options vary by column data type: for example, integer columns include comparison operators, while string columns also include options such as Contains and StartsWith. Removing an item from the server-side menu affects every column menu where that option would otherwise be available.
>


The following example shows how to reduce the set of filter functions so that the filter menu can only show the **NoFilter**, **Contains**, **EqualTo**, **GreaterThan** and **LessThan** items:



````C#
protected void RadGrid1_Init(object sender, System.EventArgs e)
{
    GridFilterMenu menu = RadGrid1.FilterMenu;
    int i = 0;
    while (i < menu.Items.Count)
    {
        if (menu.Items[i].Text == "NoFilter" || menu.Items[i].Text == "Contains" || menu.Items[i].Text == "EqualTo" || menu.Items[i].Text == "GreaterThan" || menu.Items[i].Text == "LessThan")
        {
            i++;
        }
        else
        {
            menu.Items.RemoveAt(i);
        }
    }
}
````
````VB
Private Sub RadGrid1_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.Init
    Dim menu As GridFilterMenu = RadGrid1.FilterMenu
    Dim i As Integer = 0
    While i < menu.Items.Count
        If menu.Items(i).Text = "NoFilter" Or _
           menu.Items(i).Text = "Contains" Or _
           menu.Items(i).Text = "EqualTo" Or _
           menu.Items(i).Text = "GreaterThan" Or _
           menu.Items(i).Text = "LessThan" Then
            i = i + 1
        Else
            menu.Items.RemoveAt(i)
        End If
    End While
End Sub
'RadGrid1_Init

````

