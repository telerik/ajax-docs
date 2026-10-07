---
title: Navigating through single grid at a time with keyboard navigation enabled
page_title: Navigating through single grid at a time with keyboard navigation enabled - RadGrid
description: Learn how to limit keyboard navigation to one RadGrid at a time when multiple grids share a page and handle active row changes.
slug: grid/accessibility-and-internationalization/how-to/navigating-through-single-grid-at-a-time-with-keyboard-navigation-enabled
tags: navigating,through,single,grid,at,a,time,with,keyboard,navigation,enabled
published: True
position: 0
---

# Navigating through single grid at a time with keyboard navigation enabled



## Limiting keyboard navigation to one grid

When several grid instances on the same page have keyboard navigation enabled, all grids can intercept active row changes from the arrow keys. Handle the `OnActiveRowChanging` event for each grid and cancel the action unless the last hovered grid should receive the navigation.

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
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource1" GridLines="None"
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
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid2" DataSourceID="SqlDataSource1" GridLines="None"
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



You can adapt the logic to apply the same behavior when selecting a row or handling another grid action.

## See Also

- [Keyboard Support]({%slug grid/accessibility-and-internationalization/keyboard-support%})
- [Cancel Enter and Arrow Key Press]({%slug grid/accessibility-and-internationalization/how-to/cancel-enter-and-arrow-key-press-%})
