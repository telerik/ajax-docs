---
title: Reduce the Filter Menu Options
page_title: Reduce the Filter Menu Options | RadGrid for ASP.NET AJAX Documentation
description: Reduce the Filter Menu Options
slug: grid/how-to/filtering/reduce-the-filter-menu-options
previous_url: controls/grid/functionality/filtering/how-to/reduce-the-filter-menu-options
tags: reduce,the,filter,menu,options
published: True
position: 2
---

# Reduce the Filter Menu Options



##

You can reduce the filter menu options to display only a subset of the available filter functions. There are two possible approaches - client-side and server-side.

To limit the filter options displayed for a given column on the client, you need to intercept the [OnFilterMenuShowing]({%slug grid/client-side-programming/events/onfiltermenushowing%}) client event of RadGrid/[OnClientShown](http://www.telerik.com/help/aspnet-ajax/menu_clientsideonclientshown.html) event of the filter menu and hide some of the possible choices from within the body of the respective handler. This solution is suitable when you would like to customize the filter options on a per column basis and still have some of them displayed for particular columns despite they are hidden for others.

Below is a sample code implementation (based on the approach explained above) that customizes the filter menu options for columns with *String* and *Int64 *data type. If no DataType is specified for the columns explicitly in their html markup, it will be taken from the data type of the underlying source field:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" AutoGenerateColumns="false" ID="RadGrid1" DataSourceID="SqlDataSource1"
    Width="760px" AllowFilteringByColumn="True" AllowSorting="True" PageSize="15"
    ShowFooter="True" AllowPaging="True" runat="server" GridLines="None" EnableLinqExpressions="false">
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
    <FilterMenu OnClientShowing="MenuShowing" />
</telerik:RadGrid>
<br />
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders" runat="server"></asp:SqlDataSource>
````
````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
    var column = null;

    function filterMenuShowing(sender, eventArgs) {
      // Set value for column to be used in MenuShowing().
      column = eventArgs.get_column();
    }

    function MenuShowing(menu, args) {

      if (column == null) return;

      // Iterate through filter menu items.
      var items = menu.get_items();
      for (i = 0; i < items.get_count() ; i++) {
        var item = items.getItem(i);
        if (item === null)
          continue;

        // Make adjustments based on data type.
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


The following steps describe how to accomplish the same functionality server-side:

1. Provide a handler for the grid's **Init** event.

1. In the **Init** event handler, use the grid's **FilterMenu** property to access the filtering menu. There is a single filtering menu server-side, which is cloned for each of the separate filter menus that appear client-side.

1. Traverse the items in the filtering menu and determine which of them should be removed by checking their **Text** property.

1. Remove any items that you do not want included in the filter menus using the **RemoveAt(index)** method of the filtering menu's **Items** collection.

>tip There is a single filtering menu object server-side. Not all of its items appear in every filter menu client-side. This way of implementation has been chosen to speed up the grid performance by merely creating one menu instance server side and cloning the instance for different columns. The filtering menu is independent for each column in RadGrid - this means that the filtering menu options vary by the **DataType** of the corresponding column. Hence integer column will have one set of filter menu options (EqualTo, NotEqualTo, GreaterThan, LessThan, etc.), string column will have additional options (Contains, StartsWith. etc.) and so on.However, if you remove some of the options from the menu on the server, this will affect all grid columns and they will be stripped from each column filter menu options (if available by default for that type of column).
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

