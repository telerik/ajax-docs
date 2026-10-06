---
title: Resizing Rows
page_title: Resizing Rows - RadGrid
description: Learn how to enable, configure, and handle resizable RadGrid rows in ASP.NET AJAX.
slug: grid/rows/resizing-rows
components: ["grid"]
tags: resizing,rows
published: True
position: 2
---

# Resizing Rows

You can allow users to change the height of **RadGrid** rows by enabling row resizing. The grid displays a row indicator column that provides a resize handle unless you hide it.

## Enabling Row Resizing

Set **ClientSettings.Resizing.AllowRowResize** to `true` to enable row resizing. **RadGrid** automatically generates a **GridRowIndicatorColumn** that provides a resize handle. Users can resize rows by dragging any part of the bottom edge. To hide the indicator column, set **ClientSettings.Resizing.ShowRowIndicatorColumn** to `false`.

![RadGrid row indicator column used to resize row height](images/grd_RowIndicatorColumn.png)

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<asp:AccessDataSource ID="AccessDataSource1" runat="server"
    DataFile="~/App_Data/Northwind.mdb"
    SelectCommand="SELECT * FROM Customers" />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="AccessDataSource1" Skin="WebBlue">
  <MasterTableView DataSourceID="AccessDataSource1" TableLayout="Auto">
  </MasterTableView>
  <ClientSettings>
    <Scrolling AllowScroll="True" UseStaticHeaders="True" />
    <Resizing AllowRowResize="True" />
  </ClientSettings>
</telerik:RadGrid>
````

## See Also

* [OnRowResizing client-side event]({%slug grid/client-side-programming/events/onrowresizing%})

* [OnRowResized client-side event]({%slug grid/client-side-programming/events/onrowresized%})

* [GridRowIndicatorColumn]({%slug grid/columns/column-types%}#gridrowindicatorcolumn)


