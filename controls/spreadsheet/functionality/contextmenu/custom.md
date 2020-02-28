---
title: Custom
page_title: RadSpreadsheet Custom Context Menu| UI for ASP.NET AJAX Documentation
description: Custom ContextMenu 
slug: spreadsheet/functionality/contextmenu/custom
tags: custom
published: True
position: 1
---

# Custom Context Menu

**RadSpreadsheet**'s ContextMenu can be customized. Instead of using the built-in ContextMenu, a custom ContextMenu can be defined declaratively (in the aspx page) or in the code-behind. The following example shows a CellContextMenu, RowHeaderContextMenu and ColumnHeaderContextMenu declared in the **RadSpreadsheet**'s ContextMenus tag: 

````ASPNET
<script>
    function CellContextMenuItemClicked(sender, args) {
        if (args.get_item().get_value() == "CustomSetBold") {
            var range = $find("RadSpreadsheet1").get_activeSheet().get_selection();
            range.set_bold(true);
        }
    }
</script>

<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1">
    <ContextMenus>
        <CellContextMenu OnClientItemClicked="CellContextMenuItemClicked">
            <Items>
                <telerik:RadMenuItem Text="Copy" Value="CommandCopy"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Paste" Value="CommandPaste"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="HideRow" Value="CommandHideRow"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="HideColumn" Value="CommandHideColumn"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Bold" Value="CustomSetBold"></telerik:RadMenuItem>
            </Items>
        </CellContextMenu>
        <RowHeaderContextMenu>
            <Items>
                <telerik:RadMenuItem Text="HideRow" Value="CommandHideRow"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="DeleteRow" Value="CommandDeleteRow"></telerik:RadMenuItem>
            </Items>
        </RowHeaderContextMenu>
        <ColumnHeaderContextMenu>
            <Items>
                <telerik:RadMenuItem Text="HideColumn" Value="CommandHideColumn"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="DeleteColumn" Value="CommandDeleteColumn"></telerik:RadMenuItem>
            </Items>
        </ColumnHeaderContextMenu>
    </ContextMenus>
</telerik:RadSpreadsheet>
````

The MenuItems can have text and/or functionality different than the built-in ContextMenu items. In the example above the CellContextMenu's OnClientItemClicked event is handled and the control's client-side API is used to set the font-weight of the text in the selected range when the user clicks on the item with text "Bold". The other four CellContextMenu items and the items of the RowHeaderContextMenu and ColumnHeaderContextMenu demonstrate how the default ContextMenu functionality can be achieved by setting the value property of the item to a command name. If one of folowing commands is set to an item's **Value** property it will be recognized by the control and the item will have the corresponding functionality:

* CommandCut

* CommandCopy

* CommandPaste

* CommandHideRow

* CommandDeleteRow

* CommandHideColumn

* CommandDeleteColumn

# See Also

* [Spreadsheet - Context Menu Demo](https://demos.telerik.com/aspnet-ajax/spreadsheet/examples/contextmenu/defaultcs.aspx)

