---
title: Refresh Nodes Added on Demand
page_title: Refresh Nodes Added on Demand - RadTreeView
description: Check our Web Forms article about Refresh Nodes Added on Demand.
slug: treeview/application-scenarios/client-side-programming/refresh-nodes-added-on-demand
tags: refresh,nodes,added,on,demand
published: True
position: 22
---

# Refresh Nodes Added on Demand



## 

In [load on demand]({%slug treeview/load-on-demand/overview%}) scenario when you expand the parent node and load its nodes the expand mode of the parent node is changed to **ClientSide**. This means that if you collapse that node and expand it again - no request will be made to the web service and the **NodeExpand** server event will not fire.

Sometimes you may need to refresh the nodes that are already added via load on demand - for example because the DataSource has changed. Here is how:

1. Collapse the parent node using the [collapse()]({%slug treeview/client-side-programming/objects/radtreenode%}) method:

````JavaScript
node.collapse()
````



2. Clear its nodes and set its expand mode to either **ServerSideCallBack** or **WebService**:

````JavaScript
node.get_treeView().trackChanges();
node.get_nodes().clear();
node.set_expandMode(Telerik.Web.UI.TreeNodeExpandMode.WebService);
node.get_treeView().commitChanges();
````



Here I am using **node.get_treeView()** method to get a reference to the **TreeView** client object, but if you already have a reference to that object (e.g. via the **sender** object in the client events) you can use that.
