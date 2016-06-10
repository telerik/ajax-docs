---
title: NavigationNodeCollection Object
page_title: NavigationNodeCollection Object | RadNavigation for ASP.NET AJAX Documentation
description: NavigationNodeCollection Object
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
| **add** |NavigationNode|none|Adds a child node to the collection.|

````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var nodes = nav.get_nodes();
var childNode = new Telerik.Web.UI.NavigationNode();
childNode.set_text("New");
nodes.add(childNode);		
````


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **insert**  | int, NavigationNode | none | Inserts the node into the collection at the position defined by the first (index) parameter. |

````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var nodes = nav.get_nodes();
var childNode = new Telerik.Web.UI.NavigationNode();
childNode.set_text("New");
nodes.insert(0, childNode);		
````


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **getNode**  | int | NavigationNode | Returns the item from the collection that resides at the specified index. |


````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getNode(0);		
````


>caption  


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **indexOf**  | NavigationNode | int | Returns the index of a node. |



````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getNode(1);
var index = nav.get_nodes().indexOf(node);	
````


>caption  


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **get_count**  | none | int | Returns the number of the nodes in the collection. |



````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var count = nav.get_nodes().get_count();			
````


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **getFirstNode**  | none | NavigationNode | Returns the first node in the collection. |



````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getFirstNode();			
````


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|  **getLastNode**  | none | NavigationNode | Returns the last node in the collection. |



````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.get_nodes().getLastNode();		
````


# See Also

 * [RadNavigation Object]({%slug navigation/client-side-programming/objects/radnavigation-object%})

 * [NavigationNode Object]({%slug navigation/client-side-programming/objects/navigationnode-object%})

