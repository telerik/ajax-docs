---
title: OnClientContextMenuShown
page_title: OnClientContextMenuShown - RadTreeView
description: Check our Web Forms article about OnClientContextMenuShown.
slug: treeview/client-side-programming/events/onclientcontextmenushown
tags: onclientcontextmenushown
published: True
position: 25
---

# OnClientContextMenuShown



## 

The **OnClientContextMenuShown** client-side event occurs after opening a context menu.

The event handler receives parameters:

1. The TreeView instance that fired the event.

1. Event arguments with functions:

* **get_menu()** retrieves a reference to the context menu.

* **get_node()** retrieves a reference to the clicked on node.

* **get_domEvent()** retrieves a DOM element that represents the context menu.

The example below displays the menu id and the node that the context menu is being opened for. The event is canceled if the menu is being opened for node "Printers".

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientContextMenuShowing="ClientContextMenuShown">
    <Nodes>
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Search" ImageUrl="~/images/search.ico"
            Expanded="True" Value="1">
            <Nodes>
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Documents" ImageUrl="~/images/search4doc.ico"
                    Category="NoDragging">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Files" ImageUrl="~/images/search4Files.ico">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="People" ImageUrl="~/images/search4people.ico">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Printers" ImageUrl="~/images/search4printer.ico">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Web" ImageUrl="~/images/searchweb.ico"
                    Category="NonCheckable">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSide" Text="Recent Searches">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallBack" Text="Network Locations"
                    ContextMenuID="SearchMenu">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
    <ContextMenus>
        <telerik:RadTreeViewContextMenu ID="SearchMenu" runat="server" Flow="Horizontal">
            <DefaultGroupSettings ExpandDirection="Auto" Flow="Vertical" />
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Local Search">
                    <GroupSettings ExpandDirection="Auto" Flow="Vertical" />
                </telerik:RadMenuItem>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Search Network">
                    <GroupSettings ExpandDirection="Auto" Flow="Vertical" />
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadTreeViewContextMenu>
    </ContextMenus>
</telerik:RadTreeView>
````
````JavaScript
function ClientContextMenuShown(sender, eventArgs) {
	var node = eventArgs.get_node();
	var menu = eventArgs.get_menu();

	alert("Showing menu " + menu.get_id() +
			" for node " + node.get_text());
}
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientContextMenuShowing]({%slug treeview/client-side-programming/events/onclientcontextmenushowing%})

 * [OnClientContextMenuItemClicking]({%slug treeview/client-side-programming/events/onclientcontextmenuitemclicking%})

 * [OnClientContextMenuItemClicked]({%slug treeview/client-side-programming/events/onclientcontextmenuitemclicked%})
