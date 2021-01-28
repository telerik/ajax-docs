---
title: Accessing Items
page_title: Accessing items Client-Side - RadGrid
description: Check our Web Forms article about Accessing Grid Items on Client.
slug: grid/accessing-values-and-controls/client-side/accessing-items
published: True
position: 2
---

# Accessing Grid Items Client-Side

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
</telerik:RadGrid>

<telerik:RadButton runat="server" ID="RadButton1" Text="RadButton1" AutoPostBack="false" OnClientClicked="RadButton1_OnClientClicked" />
````

## Looping through the dataItems collection

````JavaScript
function RadButton1_OnClientClicked(sender, args) {
    // Grid
    var grid = $find('<%= RadGrid1.ClientID %>');
    // MasterTable
    var masterTable = grid.get_masterTableView();
    // Items/Rows
    var dataItems = masterTable.get_dataItems();

    for (var i = 0; i < dataItems.length; i++) {
        var item = dataItems[i];
    }
}
````

## Access Selected Items only

````JavaScript
function RadButton1_OnClientClicked(sender, args) {
    // Grid
    var grid = $find('<%= RadGrid1.ClientID %>');
    
    var selectedItems = grid.get_selectedItems();

    for (var i = 0; i < selectedItems.length; i++) {
        var dataItem = selectedItem[i];

    }
}
````

## Accessing the Header row (tr element)

````JavaScript
function myFunction(){
    var grid = $telerik.findControl(document, "RadGrid1");
    var gridElement = grid.get_element();

    // If Scrolling with StaticHeaders is enabled, Grid renders a separate HTML table for the Headers, and separate ones for the rows
    // otherwise one HTML table is rendered for both the Headers and the Rows
    var HasStaticHeaders = grid.ClientSettings.Scrolling && grid.ClientSettings.Scrolling.UseStaticHeaders;
    var headerRow = HasStaticHeaders ? grid.GridHeaderDiv.querySelector("thead > tr") : grid.get_masterTableView().HeaderRow;
}
````
 
## See Also

- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing RadGrid]({%slug grid/accessing-values-and-controls/client-side/accessing-radgrid %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/client-side/accessing-cells %})
