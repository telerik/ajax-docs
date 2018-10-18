---
title: RadTreeView
page_title: RadTreeView | RadTreeView for ASP.NET AJAX Documentation
description: RadTreeView
slug: treeview/client-side-programming/objects/radtreeview
tags: radtreeview
published: True
position: 0
---

# RadTreeView




The table below lists the most important functions of the client-side **RadTreeView** object. Many significant functions for performing common tasks such as adding, inserting and removing Nodes are actually performed using the [RadTreeNodeCollection object]({%slug treeview/client-side-programming/objects/radtreenodecollection%}).



>tip Client side changes are available on the server side after postback. You can use the [ClientChanges]({%slug treeview/client-side-programming/accessing-client-changes-on-the-server-side%}) property to access them.
>

>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Starts tracking changes made to the TreeView that will be preserved on the server.|
| **commitChanges** |none|none|Writes the changes to the **TreeView** that were made since a previous call to **trackChanges**, so that they are preserved on the server as well.(see **Example 1**)|
|  **findNodeByText**  | string | RadTreeNode | Gets the first instance of a Node with the specified text. (see **Example 2**)|
|  **findNodeByValue**  | string | RadTreeNode | Gets the first instance of a Node with the specified value. (see **Example 3**)|
|  **findNodeByAttribute**  | string (attribute name), string (attribute value) | RadTreeNode | Gets the first instance of a Node with the specified attribute, value pair. (see **Example 4**)|
|  **findNodeByUrl**  | (string URL) | RadTreeNode | Returns the first RadTreeNode object whose **NavigateUrl** property is equal to the passed parameter. |
| **findNodeByAbsoluteUrl** |(string URL)|RadTreeNode|Returns the first RadTreeNode object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findNodeByAbsoluteUrl('http://www.test.com/');|
| **get_selectedNodes** |none|Array|Gets an Array of all selected Nodes (useful when MultipleSelect property is on). (see **Example 5**)|
|  **unselectAllNodes**  | none | none | Un-selects all Nodes at all levels of the tree. (see **Example 6**) |
|  **get_nodes**  | none | Telerik.Web.UI.RadTreeNodeCollection | Returns the root level RadTreeNodeCollection. This example iterates the root level Nodes. (see **Example 7**)|
|  **get_allNodes**  | none | Array of RadTreeNode objects | Returns an array of all the Nodes within the TreeView. (see **Example 8**)|
|  **get_selectedNode**  | none | none | Gets the instance of the currently selected Node. Null if none. (see **Example 9**)|
|  **get_id**  | none | string | Gets the server ID of the control. (see **Example 10**)|
|  **get_element**  | none | DOM Element | Gets a reference to the DIV element that wraps the TreeView. (see **Example 11**)|
|  **get_enabled**  | none | Boolean | Gets the enabled state of the TreeView. |
| **set_enabled** |Boolean|none|Enables/Disables the TreeView. (see **Example 12**)|
|  **get_loadingMessage**  | none | String | Returns the value of the RadTreeView's LoadingMessage property. The default value is "Loading..." |
| **set_loadingMessage** |String|none|Sets a loading message to the TreeView. (see **Example 13**)|
|  **get_childListElement**  | none | HTML Element | Returns the UL HTML element which contains the HTML elements of the root Nodes. Null if there are no root Nodes. |
| **get_allowNodeEditing** |none|Boolean|True if the AllowNodeEditing property is enabled, false otherwise.|
| **set_allowNodeEditing** |Boolean|none|Enables/Disables Node-editing.|
| **get_enableDragAndDrop** |none|Boolean|True if the EnableDragAndDrop property is enabled, false otherwise.|
| **set_enableDragAndDrop** |Boolean|none|Enables/Disables drag and drop.|
| **get_enableDragAndDropBetweenNodes** |none|Boolean|True if the EnableDragAndDropBetweenNodes property is enabled, false otherwise.|
| **set_enableDragAndDropBetweenNodes** |Boolean|none|Enables/Disables the drag and drop between Nodes.|
| **get_persistLoadOnDemandNodes** |none|Boolean|True if the PersistLoadOnDemandNodes property is enabled, false otherwise.|
| **set_persistLoadOnDemandNodes** |Boolean|none|Enables/Disables the persistence (at the server-side) of Nodes added on demand.|
| **get_checkedNodes** |none|Array|Returns an array of the checked nodes when CheckBoxes="True"|
| **get_draggingClueElement** |none|DIV|Returns the **div** element of the dragged node (during **OnClientNodeDragging** event handler)|
| **set_singleExpandPath** |Boolean|none|Allows only a single node to be expanded when set to true. On expanding a second node, the first one returns to its initial state (that is collapsed).|
| **get_singleExpandPath** |none|Boolean|Returns true if the singleExpandPath property is enabled, false otherwise.|
| **addNodesTo** |RadTreeNode, Array of RadTreeNode objects|none|Adds child Nodes to the Nodes collection of a Node (defined as first parameter)|
| **checkAllNodes** |none|none|Checks all Nodes at all levels of the tree|
| **uncheckAllNodes** |none|none|Un-checks all Nodes at all levels of the tree|
| **checkNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Checks the defined in the parameter Nodes|
| **uncheckNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-checks the defined in the parameter Nodes|
| **selectAllNodes** |none|none|Selects all Nodes at all levels of the tree|
| **selectNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Selects the defined in the parameter Nodes|
| **unselectNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-selects the defined in the parameter Nodes|
| **bulkUpdateWith** |function|none|Bulks update operations over the current TreeView instance, executed in the passed function. bulkUpdateWith is one of the many performance optimizations made on RadTreeView and basically allows the users to perform multiple changes in the TreeView instance (add/remove/expand/collapse/select/unselect/check/uncheck nodes and so on) as a single update over the inner state representation. (see **Example 14**)|


>caption Example 1: Demonstrates the usage of the trackChanges method

````JavaScript
function AddNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.trackChanges();
    var node = new Telerik.Web.UI.RadTreeNode();
    tree.get_nodes().add(node);
    node.set_text("New Node");
    tree.commitChanges();
}		
````

>note When adding a node client-side, the node should be created, added to the nodes collection and then has its properties customized.


>caption Example 2: Demonstrates the usage of the findNodeByText method
````JavaScript
function FindNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("Child RadTreeNode 1");
    node.select();
}		
````

>caption Example 3: Demonstrates the usage of the findNodeByValue method
````JavaScript
function FindNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByValue("3");   
    node.select();
}		
````

>caption Example 4: Demonstrates the usage of the findNodeByAttribute method
````JavaScript
function FindNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByAttribute("MyCustomAttribute", "Some Value");
    node.get_parent().expand();
    node.select();
}			
````

>caption Example 5: Demonstrates the usage of the get_selectedNodes method
````JavaScript
function GetSelectedNodes() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var nodes = tree.get_selectedNodes();
    for (var i = 0; i < nodes.length; i++) {
        alert(nodes[i].get_text());
    }
}		
````

>caption Example 6: Demonstrates the usage of the unselectAllNodes method
````JavaScript
function UnSelectAllNodes() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.unselectAllNodes();
}			
````

>caption Example 7: Demonstrates the usage of the get_nodes method
````JavaScript
function GetNodes() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    for (var i = 0; i < tree.get_nodes().get_count(); i++) {
        var node = tree.get_nodes().getNode(i);
        alert(node.get_text());
    }
}		
````

>caption Example 8: Demonstrates the usage of the get_allNodes method
````JavaScript
function GetNodes() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var nodes = tree.get_allNodes();
    for (var i = 0; i < nodes.length; i++) {
        alert(nodes[i].get_text());
    }
}		
````

>caption Example 9: Demonstrates the usage of the get_selectedNode method
````JavaScript
function GetSelectedNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    if (tree.get_selectedNode() != null) {
        alert(tree.get_selectedNode().get_text());
    }
}		
````

>caption Example 10: Demonstrates the usage of the get_id method
````JavaScript
function GetID() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    alert(tree.get_id());
}		
````

>caption Example 11: Demonstrates the usage of the get_element method
````JavaScript
function GetElement() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    alert(tree.get_element().innerHTML);
}		
````

>caption Example 12: Demonstrates the usage of the get_element method
````JavaScript
function disableTreeView() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    if (tree.get_enabled()) {
        tree.set_enabled(false);
    }
    else {
        tree.set_enabled(true);
    }
}		
````
 
>caption Example 13: Demonstrates the usage of the set_loadingMessage method
````JavaScript
function pageLoad() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.set_loadingMessage("loading");
}	
````
 
>caption Example 14: Demonstrates the usage of the bulkUpdateWith method
````JavaScript
function updateTreeView(tree)
{
    tree.bulkUpdateWith(func);
}

function func()
{
    var tree = $find("RadTreeView1");
    var nodes = tree.get_nodes();
    var nodesCount = nodes.get_count();
    
    for (var i = 0; i < nodesCount; i++)
    {
        var node = nodes.getNode(i);
        // add a childNode
        var childNode = new Telerik.Web.UI.RadTreeNode();
        childNode.set_text("childNode");
        node.get_nodes().add(childNode);
        // perform other changes on the node
        node.set_expanded(true);
        node.set_checked(true);
        node.set_selected(true);
    }
}
````

