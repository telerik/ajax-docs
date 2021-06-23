---
title: Prevent columns from being hidden via the HeaderContextMenu
description: Prevent columns from being hidden via the HeaderContextMenu
type: how-to
page_title: Prevent columns from being hidden via the HeaderContextMenu - RadGrid
slug: grid-prevent-hiding-columns-via-the-headercontextmenu
res_type: kb
---


## DESCRIPTION

How do I prevent certain columns from appearing in the HeaderContextMenu? I don't want users to hide some columns.

## SOLUTION

The RadContextMenu is implemented using a RadMenu - which provides access to the full [RadMenu API](https://docs.telerik.com/devtools/aspnet-ajax/controls/menu/client-side-programming/overview). When the RadContextMenu is opened, a client-side event can be triggered. That event can be used to hide specific elements in the RadMenu - making it impossible for them to be selected.

In the RadGrid markup, create an event handler for the RadContextMenu using the [OnClientItemOpening](https://docs.telerik.com/devtools/aspnet-ajax/controls/menu/client-side-programming/events/onclientitemopening) event.

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="false" OnNeedDataSource="RadGrid1_NeedDataSource"
    FilterType="HeaderContext" EnableHeaderContextFilterMenu="true" EnableHeaderContextMenu="true">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn DataField="Id" />
            <telerik:GridBoundColumn DataField="Name" />
        </Columns>
    </MasterTableView>
    <HeaderContextMenu OnClientItemOpening="hideColumnOption" />
</telerik:RadGrid>
````

Use JavaScript to add the Display: None style to any items you want to be hidden. Items are selected by Index.

````JavaScript
function hideColumnOption(sender, args) {
    var item = args.get_item();
  
    //Hide the column at index 1
    item.get_items().getItem(1).get_element().style.display = "none";
}
````
 
