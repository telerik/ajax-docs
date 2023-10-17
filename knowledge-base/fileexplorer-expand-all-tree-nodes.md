---
title: Expand all nodes inside the RadTreeView of a RadFileExplorer on page load
description: The article provides example of how to expand all treeview nodes on load of the FileExplorer control - Telerik Web UI
type: troubleshooting
page_title: How to expand all tree nodes inside RadFileExplorer
slug: fileexplorer-expand-all-tree-nodes
position: 
tags: 
ticketid: 1625157
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadFileExplorer for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
The solution below provides an example of how to expand all treeview nodes on load of the FileExplorer control.

## Solution
RadFileExplorer is using callbacks to populate the expanded nodes. To expand all nodes of the tree you need to handle the TreeView's ClientNodePopulated client-side event and to manually expand the sub-nodes of the currently expanded node.

Here is an example:

````ASPX
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientLoad="OnClientLoad">
    <Configuration ViewPaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script type="text/javascript">
    function OnClientLoad(explorer, args) {
        var tree = explorer.get_tree();//get reference to the TreeView
        tree.add_nodePopulated(nodePopulated);//attach ClientNodePopulated handler
        expandSubNodes(tree);//manually expand initially visible nodes
    }
    function nodePopulated(sender, args) {
        var currentNode = args.get_node();//get reference to the expanded node
        expandSubNodes(currentNode);
    }
    function expandSubNodes(parent) {
        var nodes = parent.get_allNodes();//get an array of all sub-nodes
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].expand();
        }
    }
</script>
````
  
   