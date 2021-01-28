---
title: Expanding Nodes on a Single Click
page_title: Expanding Nodes on a Single Click - RadTreeView
description: Check our Web Forms article about Expanding Nodes on a Single Click.
slug: treeview/application-scenarios/client-side-programming/expanding-nodes-on-a-single-click
tags: expanding,nodes,on,a,single,click
published: True
position: 3
---

# Expanding Nodes on a Single Click



## 

By default, **RadTreeView** expands a node by clicking the plus button or by double clicking the parent node. You can change this behavior by handling the **OnClientNodeClicked** event, getting a reference to the clicked on node and calling the **RadTreeNode toggle()** function. You can tailor this behavior to only occur when particular nodes are clicked by [checking the node text, value, category or attributes]({%slug treeview/client-side-programming/objects/radtreenode%}).

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientNodeClicked="ClientNodeClicked">
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
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallback" Text="Recent Searches">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallback" Text="Network Locations"
                    ContextMenuID="SearchMenu">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeClicked(sender, eventArgs) {
	var node = eventArgs.get_node();
	node.toggle();
}
````





# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
