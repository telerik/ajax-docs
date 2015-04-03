---
title: RadTreeView
page_title: RadTreeView | UI for ASP.NET AJAX Documentation
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
| __trackChanges__ |none|none|Starts tracking changes made to the TreeView that will be preserved on the server.|
| __commitChanges__ |none|none|Writes the changes to the TreeView that were made since a previous call to trackChanges, so that they are preserved on the server as well.|

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

|  __findNodeByText__  | string | RadTreeNode | Gets the first instance of a Node with the specified text. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function FindNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByText("Child RadTreeNode 1");
	            node.select();
	        }		
````




>caption  

|  __findNodeByValue__  | string | RadTreeNode | Gets the first instance of a Node with the specified value. |
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

|  __findNodeByAttribute__  | string (attribute name), string (attribute value) | RadTreeNode | Gets the first instance of a Node with the specified attribute, value pair. |
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

|  __findNodeByUrl__  | (string URL) | RadTreeNode | Returns the first RadTreeNode object whose __NavigateUrl__ property is equal to the passed parameter. |
| ------ | ------ | ------ | ------ |
| __findNodeByAbsoluteUrl__ |(string URL)|RadTreeNode|Returns the first RadTreeNode object whose __NavigateUrl__ property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findNodeByAbsoluteUrl('http://www.test.com/');|
| __get_selectedNodes__ |none|Array|Gets an Array of all selected Nodes (useful when MultipleSelect property is on).|

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

|  __unselectAllNodes__  | none | none | Un-selects all Nodes at all levels of the tree. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function UnSelectAllNodes() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.unselectAllNodes();
	        }			
````




>caption  

|  __get_nodes__  | none | Telerik.Web.UI.RadTreeNodeCollection | Returns the root level RadTreeNodeCollection. This example iterates the root level Nodes. |
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

|  __get_allNodes__  | none | Array of RadTreeNode objects | Returns an array of all the Nodes within the TreeView. |
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

|  __get_selectedNode__  | none | none | Gets the instance of the currently selected Node. Null if none. |
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

|  __get_id__  | none | string | Gets the server ID of the control. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetID() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            alert(tree.get_id());
	        }		
````




>caption  

|  __get_element__  | none | DOM Element | Gets a reference to the DIV element that wraps the TreeView. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetElement() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            alert(tree.get_element().innerHTML);
	        }		
````




>caption  

|  __get_enabled__  | none | Boolean | Gets the enabled state of the TreeView. |
| ------ | ------ | ------ | ------ |
| __set_enabled__ |Boolean|none|Enables/Disables the TreeView.|

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

|  __get_loadingMessage__  | none | String | Returns the value of the RadTreeView's LoadingMessage property. The default value is "Loading..." |
| ------ | ------ | ------ | ------ |
| __set_loadingMessage__ |String|none|Sets a loading message to the TreeView.|

````JavaScript
	        function pageLoad() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.set_loadingMessage("loading");
	        }	
````




>caption  

|  __get_childListElement__  | none | HTML Element | Returns the UL HTML element which contains the HTML elements of the root Nodes. Null if there are no root Nodes. |
| ------ | ------ | ------ | ------ |
| __get_allowNodeEditing__ |none|Boolean|True if the AllowNodeEditing property is enabled, false otherwise.|
| __set_allowNodeEditing__ |Boolean|none|Enables/Disables Node-editing.|
| __get_enableDragAndDrop__ |none|Boolean|True if the EnableDragAndDrop property is enabled, false otherwise.|
| __set_enableDragAndDrop__ |Boolean|none|Enables/Disables drag and drop.|
| __get_enableDragAndDropBetweenNodes__ |none|Boolean|True if the EnableDragAndDropBetweenNodes property is enabled, false otherwise.|
| __set_enableDragAndDropBetweenNodes__ |Boolean|none|Enables/Disables the drag and drop between Nodes.|
| __get_persistLoadOnDemandNodes__ |none|Boolean|True if the PersistLoadOnDemandNodes property is enabled, false otherwise.|
| __set_persistLoadOnDemandNodes__ |Boolean|none|Enables/Disables the persistence (at the server-side) of Nodes added on demand.|
| __get_checkedNodes__ |none|Array|Returns an array of the checked nodes when CheckBoxes="True"|
| __get_draggingClueElement__ |none|DIV|Returns the __div__ element of the dragged node (during __OnClientNodeDragging__ event handler)|
| __set_singleExpandPath__ |Boolean|none|Allows only a single node to be expanded when set to true. On expanding a second node, the first one returns to its initial state(that is collapsed).|
| __get_singleExpandPath__ |none|Boolean|Returns true if the singleExpandPath property is enabled, false otherwise.|
| __addNodesTo__ |RadTreeNode, Array of RadTreeNode objects|none|Adds child Nodes to the Nodes collection of a Node (defined as first parameter)|
| __checkAllNodes__ |none|none|Checks all Nodes at all levels of the tree|
| __uncheckAllNodes__ |none|none|Un-checks all Nodes at all levels of the tree|
| __checkNodes__ |Array of RadTreeNode objects or RadTreeNodeCollection|none|Checks the defined in the parameter Nodes|
| __uncheckNodes__ |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-checks the defined in the parameter Nodes|
| __selectAllNodes__ |none|none|Selects all Nodes at all levels of the tree|
| __selectNodes__ |Array of RadTreeNode objects or RadTreeNodeCollection|none|Selects the defined in the parameter Nodes|
| __unselectNodes__ |Array of RadTreeNode objects or RadTreeNodeCollection|none|Un-selects the defined in the parameter Nodes|
| __bulkUpdateWith__ |function|none|Bulks update operations over the current TreeView instance, executed in the passed function. bulkUpdateWith is one of the many performance optimizations made on RadTreeView and basically allows the users to perform multiple changes in the TreeView instance (add/remove/expand/collapse/select/unselect/check/uncheck nodes and so on) as a single update over the inner state representation.|

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


