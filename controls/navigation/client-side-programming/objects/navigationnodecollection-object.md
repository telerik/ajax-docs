---
title: NavigationNodeCollection Object
page_title: NavigationNodeCollection Object - RadNavigation
description: Check our Web Forms article about NavigationNodeCollection Object.
slug: navigation/client-side-programming/objects/navigationnodecollection-object
tags: navigationnodecollection,object
published: True
position: 3
---

# NavigationNodeCollection Object

## 

The **NavigationNodeCollection** object is returned by the **get_nodes** method of the [RadNavigation object]({%slug navigation/client-side-programming/objects/radnavigation-object%}) or the [NavigationNode object]({%slug navigation/client-side-programming/objects/navigationnode-object%}). The following table lists the most important methods.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |NavigationNode|none|Adds a child node to the collection. See **Example 1**.|
|  **insert**  | int, NavigationNode | none | Inserts the node into the collection at the position defined by the first (index) parameter. See **Example 2**.|
|  **getNode**  | int | NavigationNode | Returns the item from the collection that resides at the specified index. See **Example 3**.|
|  **indexOf**  | NavigationNode | int | Returns the index of a node. See **Example 4**.|
|  **get_count**  | none | int | Returns the number of nodes in the collection. See **Example 5**.|
|  **getFirstNode**  | none | NavigationNode | Returns the first node in the collection. See **Example 6**.|
|  **getLastNode**  | none | NavigationNode | Returns the last node in the collection. See **Example 7**.|



>caption Example 1: Add a child node to the collection.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var nodes = nav.get_nodes();
var childNode = new Telerik.Web.UI.NavigationNode();
childNode.set_text("New");
nodes.add(childNode);		
````


>caption Example 2: Insert a node into the collection at the specified index. 
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var nodes = nav.get_nodes();
var childNode = new Telerik.Web.UI.NavigationNode();
childNode.set_text("New");
nodes.insert(0, childNode);		
````


>caption Example 3: Return the item at index 0 from the collection. 
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getNode(0);		
````


>caption Example 4: Return the node's index.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getNode(1);
var index = nav.get_nodes().indexOf(node);	
````


>caption Example 5: Return the number of nodes in the collection. 
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var count = nav.get_nodes().get_count();			
````


>caption Example 6: Return the first node in the collection.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getFirstNode();			
````


>caption Example 7: Return the last node in the collection.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getLastNode();		
````


# See Also

 * [RadNavigation Object]({%slug navigation/client-side-programming/objects/radnavigation-object%})

 * [NavigationNode Object]({%slug navigation/client-side-programming/objects/navigationnode-object%})

