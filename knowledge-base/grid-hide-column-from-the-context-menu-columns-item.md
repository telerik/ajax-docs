---
title: How To Hide Column from the Grid Context Menu
description: Dynamically hide a Column from the Grid Context Menu Columns Item
type: how-to
page_title: Dynamically Hide Column from the Grid Context Menu
slug: how-to-hide-column-from-the-grid-context-menu-columns-item
position: 
tags: RadGrid, GridContextMenu
ticketid: 1444059
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.917</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

On occasion it is necessary to remove one ore more hide/show Column options available to the user in a **RadGrid Header Context Menu**. This can be accomplished using a combination of the RadGrid Client-side API and the RadMenu Client-side API.

## Solution

Using the following Client Settings on a RadGrid, call the **OnHeaderShowingMenu** event. Since the Header Context Menu is just a RadMenu Context Menu use the Client-side API to hide the element. In the below example, the column _Id_ will not be visible.

````HTML
<telerik:RadGrid ID="RadGrid1" runat="server"
    EnableHeaderContextMenu="true"
    AutoGenerateColumns="False"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnItemCommand="RadGrid1_ItemCommand">
    <ClientSettings AllowColumnHide="true">
        <ClientEvents OnHeaderMenuShowing="OnHeaderMenuShowing"/>
    </ClientSettings>
    <MasterTableView Width="100%">
        <Columns>
            <telerik:GridBoundColumn HeaderText="Id"
                DataField="ProductId" UniqueName="Id">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Name"
                DataField="ProductName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Unit Price"
                DataField="UnitPrice">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Quantity Per Unit"
                DataField="QuantityPerUnit">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Units In Stock"
                DataField="UnitsInStock">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Units In Transit"
                DataField="UnitsOnOrder">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn HeaderText="Reorder Level"
                DataField="ReorderLevel">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````HTML
<script type="text/javascript">
    function OnHeaderMenuShowing(sender, args) {
        var menu = args.get_menu(); //  Gets the RadContextMenu object
        var radMenuItem = menu.findItemByText("Columns");   //  Gets the Columns RadMenuItem Object
        var radMenuItemCollection = radMenuItem.get_items();    //  Gets the Collection of Items in the Columns Object

        //  Iterate the Collection
        for (var i = 0; i < radMenuItemCollection.get_count(); i++) {
            // Do Some Logic to Hide the Item
            if (radMenuItemCollection.getItem(i).get_text() === "Id") {
                radMenuItemCollection.getItem(i).set_visible(false);
            }
        }
    }
</script>
````

## See Also

* [GridHeaderContextMenu](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/columns/header-context-menu)
* [GridOneHeaderMenuShowing](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/events/onheadermenushowing)
* [RadContextMenu](https://docs.telerik.com/devtools/aspnet-ajax/controls/menu/context-menus/radcontextmenu-object)
* [RadMenu Client-side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/menu/client-side-programming/overview)
