---
title: Prevent Auto-Deselecting of Items
page_title: Prevent Auto-Deselecting of Items | RadGrid for ASP.NET AJAX Documentation
description: Prevent Auto-Deselecting of Items
slug: controls/grid/how-to/selecting/Selecting/prevent-auto-deselecting-of-items
tags: how to
published: True
position: 11
---

# Prevent Auto-Deselecting of Items

When you enable the selection functionality of **RadGrid**, it has a single row selection by default. If you want to allow multi-row selection, you can use the **AllowMultiRowSelection** property and make avail of the `Ctrl` and `Shift` keys to select and deselect items. For convenience, you can also use a **GridClientSelectColumn** which will generate a CheckBox for every row.

By design, simply clicking on a row will select it, but will also deselect any previously selected rows if you are not holding the required keys mentioned above. This default behavior can be seen in the [Grid - Row Selection](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/selecting/row-selection/defaultcs.aspx)  live demo.

If you prefer to toggle the selected state of the row using single clicks without holding any keys, you can prevent the auto-deselecting using the approach provided below.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    OnNeedDataSource="RadGrid1_NeedDataSource" AllowMultiRowSelection="true">
    <ClientSettings>
        <Selecting AllowRowSelect="true" UseClientSelectColumnOnly="true" />
        <ClientEvents OnRowClick="toggleSelection" />
    </ClientSettings>
    <MasterTableView DataKeyNames="OrderID">
        <Columns>
            <telerik:GridClientSelectColumn UniqueName="SelectColumnName">
            </telerik:GridClientSelectColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````JavaScript
function toggleSelection(sender, args) {
    args.get_gridDataItem().set_selected(!args.get_gridDataItem().get_selected());
}
````

# See Also

 * [Client-side Selecting Multiple Rows]({%slug grid/functionality/selecting/selecting-rows/client-side-selecting-multiple-rows%})
