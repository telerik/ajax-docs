---
title: Expanding and Collapsing All Nodes
page_title: Expanding and Collapsing All Nodes | RadTreeView for ASP.NET AJAX Documentation
description: Expanding and Collapsing All Nodes
slug: treeview/application-scenarios/client-side-programming/expanding-and-collapsing-all-nodes
tags: expanding,and,collapsing,all,nodes
published: True
position: 2
---

# Expanding and Collapsing All Nodes



## 

To expand or collapse all nodes:

* Retrieve a reference to the **RadTreeView** client side instance using the **$find()** helper function.

* Get an collection of all the nodes using the get_allNodes() function.

* Iterate the collection and check each node. If child nodes exist for the node, call the expand() or collapse() functions.

````JavaScript
var treeView = $find("<%= RadTreeView2.ClientID %>");
var nodes = treeView.get_allNodes();
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].get_nodes() != null) {
        nodes[i].expand();
    }
}
````



The example below adds a **RadTreeView** and two links to a form. The links trigger functions get the **RadTreeView** client instance, retrieve all the nodes for the **RadTreeView** and iterate the nodes. Nodes with children are expanded or collapsed.


![RadTreeView How To](images/treeview_howto02)

````JavaScript
function treeExpandAllNodes() {
    var treeView = $find("<%= RadTreeView2.ClientID %>");
    var nodes = treeView.get_allNodes();
    for (var i = 0; i < nodes.length; i++) {

        if (nodes[i].get_nodes() != null) {
            nodes[i].expand();
        }
    }
}

function treeCollapseAllNodes() {
    var treeView = $find("<%= RadTreeView2.ClientID %>");
    var nodes = treeView.get_allNodes();
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].get_nodes() != null) {
            nodes[i].collapse();
        }
    }
}
````



````ASPNET
<form id="form1" runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<div>
    <telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView2" runat="server" Skin="Hay">
        <nodes>
            <telerik:RadTreeNode runat="server" Text="Products" ExpandMode="ClientSide">
                <Nodes>
                    <telerik:RadTreeNode runat="server" Text="Books" ExpandMode="ClientSide">
                        <Nodes>
                            <telerik:RadTreeNode runat="server" Text="Fiction">
                            </telerik:RadTreeNode>
                            <telerik:RadTreeNode runat="server" Text="Non-Fiction">
                            </telerik:RadTreeNode>
                            <telerik:RadTreeNode runat="server" Text="Biography">
                            </telerik:RadTreeNode>
                            <telerik:RadTreeNode runat="server" Text="Humor">
                            </telerik:RadTreeNode>
                        </Nodes>
                    </telerik:RadTreeNode>
                </Nodes>
            </telerik:RadTreeNode>
        </nodes>
    </telerik:RadTreeView>
    <a href="javascript: treeExpandAllNodes();" class="RadTreeView_Hay">Expand All Nodes</a>
    <a href="javascript: treeCollapseAllNodes();" class="RadTreeView_Hay">Collapse All Nodes</a>
</div>
</form>
````





# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

 * [RadTreeNodeCollection]({%slug treeview/client-side-programming/objects/radtreenodecollection%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
