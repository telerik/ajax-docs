---
title: Reordering siblings of RadTreeView
description: Reordering siblings of RadTreeView. Check it now!
type: how-to
page_title: Reordering siblings of RadTreeVie
slug: treeview-reordering-siblings-of-radtreeview
res_type: kb
---

## How to  

Reorder the siblings of RadTreeView  
  
## Solution   

A common solution of this issue is by taking advantage of the **context menu mechanism**.  
  
````ASPX
<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientContextMenuItemClicking="contextMenuItemClicking">
    <ContextMenus>
        <telerik:RadTreeViewContextMenu ID="ContextMenu1" runat="server">
            <Items>
                <telerik:RadMenuItem Text="Move up" Value="up" />
                <telerik:RadMenuItem Text="Move down" Value="down" />
            </Items>
        </telerik:RadTreeViewContextMenu>
    </ContextMenus>
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 2">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode2" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode3" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 2">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 3">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````

````JavaScript
function contextMenuItemClicking(sender, args) {
    var menuItem = args.get_menuItem();
    var treeNode = args.get_node();
    menuItem.get_menu().hide();

    switch (menuItem.get_value()) {
        case "up":
            var previousNode = treeNode.get_previousNode();
            if (previousNode) {
                insertBefore(previousNode, treeNode);
            }
            else {
                alert("Node cannot be moved up!")
            }
            break;
        case "down":
            var nextNode = treeNode.get_nextNode();
            if (nextNode) {
                insertAfter(nextNode, treeNode);
            }
            else {
                alert("Node cannot be moved down!");
            }
            break;
    }
}

function insertBefore(previousNode, currentNode) {
    var previousNodeParent = previousNode.get_parent();
    var index = previousNodeParent.get_nodes().indexOf(previousNode);
    previousNodeParent.get_nodes().insert(index, currentNode);
}

function insertAfter(nextNode, currentNode) {
    var nextNodeParent = nextNode.get_parent();
    var index = nextNodeParent.get_nodes().indexOf(nextNode);
    nextNodeParent.get_nodes().insert(index, currentNode);
}   
````

 