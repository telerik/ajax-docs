---
title: TreeView ContextMenu not showing or immediately collapsing on mobile devices
description: TreeView ContextMenu not showing or immediately collapsing on mobile devices. Check it now!
type: how-to
page_title: TreeView ContextMenu not showing or immediately collapsing on mobile devices
slug: treeview-contextmenu-not-showing-on-mobile-devices
res_type: kb
---


### PROBLEM

When you long press a TreeView node, the context menu shows, but when you lift your finger, the node is selected and the context menu hides.

### DESCRIPTION

By default, the context menu is shown when you long press a node which fires the contextmenu. Unfortunately, when the touchend event for the node is fired, it fires the client-side node click event which is hiding the ContextMenu. This behavior can be easily observed when you long press on a node for a few seconds before lifting your finger.

The difference between the desktop and mobile versions is that in the desktop only the [contextmenu](https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu) event is fired, thus showing the ContextMenu without clicking the node. On the mobile devices, the context menu event is fired shortly after you *longpress* the node but also the *touchend* for the node is fired after the finger is lifted. That is why the following workaround is used as it is hard for the control to distinguish the which event is fired and which should be prevented.

### SOLUTION

The workaround uses the OnClientNodeClicking and OnContextMenuShowing events and a simple JavaScript variable to understand when the "touch" event is used to show the context menu or just clicking the node.   
  
In the provided example, the `__cancelNodeTouch` variable is used. As the client-side object of the TreeView is just a JavaScript object we can add and remove any JavaScript properties. That is why I added the `__cancelNodeTouch` to be part of the TreeView client-side object as the object is available in both events. Another option is to use a global variable or value in a hidden input, but adding a property to the TreeView object seems the optimal solution to not pollute the global scope.   
  
As for the behavior of the workaround, in the `OnContextMenuShowing` event, we set this `__cancelNodeTouch` variable and then in `the OnClientNodeClicking` event we check if there is such a variable. If there is, we prevent the node click and set the value of the variable to `false`, if the variable does not exist or has a `false` value, we execute the node click normally.

````JavaScript
function onClientNodeClicking(sender, e) {
    if ($telerik.isAndroid && sender.__cancelNodeTouch) {
        e.set_cancel(true)
    }
    sender.__cancelNodeTouch = false;
}
  
function onClientContextMenuShowing(sender, e) {
    sender.__cancelNodeTouch = true;
}
  
function OnClientLoad(sender, args) {
    if ($telerik.isAndroid) {
        $(sender.get_element()).on("touchstart", ".rtIn", function (e) {
            sender.__cancelNodeTouch = false;
        });
    }
}
````

````ASP.NET
<telerik:RadTreeView ID="RadTreeView1" runat="server" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad"
    OnClientNodeClicking="onClientNodeClicking"
    OnClientContextMenuShowing="onClientContextMenuShowing">
    <ContextMenus>
        <telerik:RadTreeViewContextMenu ID="RadTreeViewContextMenu1" runat="server"
            RenderMode="Lightweight">
            <Items>
                <telerik:RadMenuItem Value="1" Text="Item1">
                </telerik:RadMenuItem>                           
            </Items>
            <CollapseAnimation Type="none"></CollapseAnimation>
        </telerik:RadTreeViewContextMenu>
    </ContextMenus>
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Island" Expanded="true" AllowDrag="false"
            AllowDrop="false">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Zanzibar" AllowDrag="false">
                    <Nodes>
                        <telerik:RadTreeNode runat="server" Text="Weekend Package" AllowDrop="false" Value="1999">
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode runat="server" Text="1 Week Package" AllowDrop="false" Value="2999">
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode runat="server" Text="2 Week Package" AllowDrop="false" Value="3999">
                        </telerik:RadTreeNode>
                    </Nodes>
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````




