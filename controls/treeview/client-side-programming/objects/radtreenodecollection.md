---
title: RadTreeNodeCollection
page_title: RadTreeNodeCollection | UI for ASP.NET AJAX Documentation
description: RadTreeNodeCollection
slug: treeview/client-side-programming/objects/radtreenodecollection
tags: radtreenodecollection
published: True
position: 2
---

# RadTreeNodeCollection



## 

The table below lists the most important functions of the client-side RadTreeNodeCollection object. The RadTreeNodeCollection object can be accessed using the RadTreeView get_nodes() function.




| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add__ |RadTreeNode|none|Adds a child Node to the Nodes collection of a Node.|

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




|  __insert__  | int, RadTreeNode | none | Inserts a Node at the position defined by the first (index) parameter. The Node is inserted in the Nodes collection of a Node. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function InsertNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            tree.trackChanges();
	            var node = new Telerik.Web.UI.RadTreeNode();
	            node.set_text("New Node");
	            tree.get_nodes().insert(0, node);
	            tree.commitChanges();
	        }		
````




|  __remove__  | RadTreeNode | none | Removes a child Node from the Nodes collection of a Node. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function RemoveNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByText("New Node");
	            tree.trackChanges();
	            node.get_parent().get_nodes().remove(node);
	            tree.commitChanges();
	        }		
````




|  __removeAt__  | int | none | Removes the Node at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function RemoveNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByText("New Node");
	            tree.trackChanges();
	            node.get_parent().get_nodes().removeAt(0);
	            tree.commitChanges();
	        }		
````




|  __clear__  | none | none | Removes all Nodes from a Node collection. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function RemoveNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.findNodeByText("New Node");
	            tree.trackChanges();
	            node.get_parent().get_nodes().clear();
	            tree.commitChanges();
	        }		
````




|  __getNode__  | int | RadTreeNode | Gets the Node from the Nodes collection residing at the index defined by the parameter passed to the function. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetNode() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.get_nodes().getNode(0);
	            node.set_text("My Text");
	        }	
````




|  __indexOf__  | RadTreeNode | int | Gets the position of the Node within the Nodes collection. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function IndexOf() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.get_nodes().getNode(0);
	            var index = tree.get_nodes().indexOf(node);
	            node.set_text("index: " + index);
	        }		
````




|  __get_count__  | none | int | Gets the count of the Nodes in the Nodes collection of a Node. |
| ------ | ------ | ------ | ------ |

````JavaScript
	        function GetCount() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var node = tree.get_nodes().getNode(0);
	            var count = node.get_nodes().get_count();
	            node.set_text("Count: " + count);
	        }	
````


