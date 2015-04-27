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



## 

The table below lists the most important functions of the client-side RadTreeView object. Many significant functions for performing common tasks such as adding, inserting and removing Nodes are actually performed using the [RadTreeNodeCollection object]({%slug treeview/client-side-programming/objects/radtreenodecollection%}).




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Starts tracking changes made to the TreeView that will be preserved on the server.|
| **commitChanges** |none|none|Writes the changes to the TreeView that were made since a previous call to trackChanges, so that they are preserved on the server as well.|

>tip Client side changes are available on the server side after postback. You can use the[ClientChanges]({%slug treeview/client-side-programming/accessing-client-changes-on-the-server-side%})property to access them.
>


````JavaScript
	        function AddNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.trackChanges();
	            var node = new Telerik.Web.UI.RadTreeNode();
	            node.set_text("New Node");
	            tree.get_nodes().add(node);
	            tree.commitChanges();
	        }		
````




>caption  

|  **findNodeByText**  | string | RadTreeNode | Gets the first instance of a Node with the specified text. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function FindNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByText("Child RadTreeNode 1");
	            node.select();
	        }		
````




>caption  

|  **findNodeByValue**  | string | RadTreeNode | Gets the first instance of a Node with the specified value. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function FindNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByValue("3");
	            node.get_parent().expand();
	            node.select();
	        }		
````




>caption  

|  **findNodeByAttribute**  | string (attribute name), string (attribute value) | RadTreeNode | Gets the first instance of a Node with the specified attribute, value pair. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function FindNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByAttribute("MyCustomAttribute", "Some Value");
	            node.get_parent().expand();
	            node.select();
	        }			
````




>caption  

|  **findNodeByUrl**  | (string URL) | RadTreeNode | Returns the first RadTreeNode object whose **NavigateUrl** property is equal to the passed parameter. |
| ------ | ------ | ------ | ------ |
| **findNodeByAbsoluteUrl** |(string URL)|RadTreeNode|Returns the first RadTreeNode object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findNodeByAbsoluteUrl('http://www.test.com/');|
| **get_selectedNodes** |none|Array|Gets an Array of all selected Nodes (useful when MultipleSelect property is on).|

````JavaScript
	        function GetSelectedNodes() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var nodes = tree.get_selectedNodes();
	            for (var i = 0; i < nodes.length; i++) {
	                alert(nodes[i].get_text());
	            }
	        }		
````




>caption  

|  **unselectAllNodes**  | none | none | Un-selects all Nodes at all levels of the tree. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function UnSelectAllNodes() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.unselectAllNodes();
	        }			
````




>caption  

|  **get_nodes**  | none | Telerik.Web.UI.RadTreeNodeCollection | Returns the root level RadTreeNodeCollection. This example iterates the root level Nodes. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetNodes() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            for (var i = 0; i < tree.get_nodes().get_count(); i++) {
	                var node = tree.get_nodes().getNode(i);
	                alert(node.get_text());
	            }
	        }		
````




>caption  

|  **get_allNodes**  | none | Array of RadTreeNode objects | Returns an array of all the Nodes within the TreeView. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetNodes() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var nodes = tree.get_allNodes();
	            for (var i = 0; i < nodes.length; i++) {
	                alert(nodes[i].get_text());
	            }
	        }		
````




>caption  

|  **get_selectedNode**  | none | none | Gets the instance of the currently selected Node. Null if none. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetSelectedNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            if (tree.get_selectedNode() != null) {
	                alert(tree.get_selectedNode().get_text());
	            }
	        }		
````




>caption  

|  **get_id**  | none | string | Gets the server ID of the control. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetID() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            alert(tree.get_id());
	        }		
````




>caption  

|  **get_element**  | none | DOM Element | Gets a reference to the DIV element that wraps the TreeView. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetElement() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            alert(tree.get_element().innerHTML);
	        }		
````




>caption  

|  **get_enabled**  | none | Boolean | Gets the enabled state of the TreeView. |
| ------ | ------ | ------ | ------ |
| **set_enabled** |Boolean|none|Enables/Disables the TreeView.|

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




>caption  

|  **get_loadingMessage**  | none | String | Returns the value of the RadTreeView's LoadingMessage property. The default value is "Loading..." |
| ------ | ------ | ------ | ------ |
| **set_loadingMessage** |String|none|Sets a loading message to the TreeView.|

````JavaScript
	        function pageLoad() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.set_loadingMessage("loading");
	        }	
````




>caption  

|  **get_childListElement**  | none | HTML Element | Returns the UL HTML element which contains the HTML elements of the root Nodes. Null if there are no root Nodes. |
| ------ | ------ | ------ | ------ |
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
| **set_singleExpandPath** |Boolean|none|Allows only a single node to be expanded when set to true. On expanding a second node, the first one returns to its initial state(that is collapsed).|
| **get_singleExpandPath** |none|Boolean|Returns true if the singleExpandPath property is enabled, false otherwise.|
| **addNodesTo** |RadTreeNode, Array of RadTreeNode objects|none|Adds child Nodes to the Nodes collection of a Node (defined as first parameter)|
| **checkAllNodes** |none|none|Checks all Nodes at all levels of the tree|
| **uncheckAllNodes** |none|none|Un-checks all Nodes at all levels of the tree|
| **checkNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Checks the defined in the parameter Nodes|
| **uncheckNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-checks the defined in the parameter Nodes|
| **selectAllNodes** |none|none|Selects all Nodes at all levels of the tree|
| **selectNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Selects the defined in the parameter Nodes|
| **unselectNodes** |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-selects the defined in the parameter Nodes|
| **bulkUpdateWith** |function|none|Bulks update operations over the current TreeView instance, executed in the passed function. bulkUpdateWith is one of the many performance optimizations made on RadTreeView and basically allows the users to perform multiple changes in the TreeView instance (add/remove/expand/collapse/select/unselect/check/uncheck nodes and so on) as a single update over the inner state representation.|

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


