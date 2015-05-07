---
title: Navigating through single grid at a time with keyboard navigation enabled
page_title: Navigating through single grid at a time with keyboard navigation enabled | RadGrid for ASP.NET AJAX Documentation
description: Navigating through single grid at a time with keyboard navigation enabled
slug: grid/accessibility-and-internationalization/how-to/navigating-through-single-grid-at-a-time-with-keyboard-navigation-enabled
tags: navigating,through,single,grid,at,a,time,with,keyboard,navigation,enabled
published: True
position: 0
---

# Navigating through single grid at a time with keyboard navigation enabled



## 

When you place several grid instances on the same page with keyboard navigation switched on and navigate through the records using the arrow keys, all grids will intercept the active row changes. To avoid this default behavior and navigate through a single grid item at time, you can intercept the *OnActiveRowChanging *event of each grid instance and cancel the action depending on certain condition (for example allow the navigation in the boundaries of the last hovered table).

The forthcoming code implementation demonstrates the approach in a real-life scenario:

````ASP.NET
<script type="text/javascript">    var activeGrid; function ActiveRowChanging(sender, eventArgs) {
    if (sender.get_id().indexOf(activeGrid) == -1) {
      eventArgs.set_cancel(true);
    }
  }
  function RowMouseOver(sender, eventArgs) {
    activeGrid = eventArgs.get_tableView().get_owner().get_id();
  }
</script>
<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" GridLines="None"
  AllowMultiRowSelection="True" ShowStatusBar="True" PageSize="5" Width="97%" AllowPaging="True"
  AllowSorting="True" runat="server" Skin="Web20">
  <ClientSettings AllowKeyboardNavigation="True" AllowColumnsReorder="True" ReorderColumnsOnClient="True">
    <Resizing AllowColumnResize="True" AllowRowResize="True" />
    <Selecting AllowRowSelect="True" />
    <ClientEvents OnActiveRowChanging="ActiveRowChanging" OnRowMouseOver="RowMouseOver" />
  </ClientSettings>
  <MasterTableView Width="100%" DataSourceID="SqlDataSource1" />
  <PagerStyle Mode="NextPrevAndNumeric" />
</telerik:RadGrid><br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
<br />
<telerik:RadGrid ID="RadGrid2" DataSourceID="SqlDataSource1" GridLines="None"
  AllowMultiRowSelection="True" ShowStatusBar="True" PageSize="5" Width="97%" AllowPaging="True"
  AllowSorting="True" runat="server" Skin="Web20">
  <ClientSettings AllowKeyboardNavigation="True" AllowColumnsReorder="True" ReorderColumnsOnClient="True">
    <Resizing AllowColumnResize="True" AllowRowResize="True" />
    <Selecting AllowRowSelect="True" />
    <ClientEvents OnActiveRowChanging="ActiveRowChanging" OnRowMouseOver="RowMouseOver" />
  </ClientSettings>
  <MasterTableView Width="100%" DataSourceID="SqlDataSource1" />
  <PagerStyle Mode="NextPrevAndNumeric" />
</telerik:RadGrid>
````



Note that you can alter the logic to support similar behavior when selecting a row in one of the grids or other type of action.
