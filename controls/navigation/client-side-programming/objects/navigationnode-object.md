---
title: NavigationNode Object
page_title: NavigationNode Object | RadNavigation for ASP.NET AJAX Documentation
description: NavigationNode Object
slug: navigation/client-side-programming/objects/navigationnode-object
tags: navigationnode,object
published: True
position: 2
---

# NavigationNode Object

## 

The **NavigationNode** object is returned by the **getNode** method of the **[NavigationNodeCollection object]({%slug navigation/client-side-programming/objects/navigationnodecollection-object%})**. The following table lists the most important methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_enabled** | none | Boolean | Returns true if the node is enabled, false if it is disabled. |
| **get_enabled** |none|Boolean|Same as get_isEnabled.|
| **set_enabled** |Boolean|none|Sets the enabled state of the node.|
| **focus** |none|none|Moves the focus to the node. See **Example 1**.|
| **blur** | none | none | Removes focus from the node. See **Example 2**.|
| **get_nodes** |none|NodeCollection|Gets the child nodes of the current node.|
| **get_nextNode** |none|NavigationNode|Returns the next sibling of the node. If the item is last, returns the first node in the NodeCollection.|
| **get_nextSibling** |none|NavigationNode|Returns the next sibling of the item. If the node is last, returns null.|
| **get_previousNode** |none|NavigationNode|Returns the previous sibling of the node. If the item is first, returns the last node in the NodeCollection.|
| **get_previousSibling** |none|NavigationNode|Returns the previous sibling of the item. If the node is first, returns null.|
| **get_expandedNode** |none|NavigationNode|Gets the expanded child node. Null if no child node is expanded.|
| **get_parent** |none|RadNavigation or NavigationNode|Returns an instance of the parent object. RadNavigation if this is a root node, NavigationNode if it is a child node.|
| **get_navigation** |none|RadNavigation|Returns an instance of the RadNavigation that contains the node.|
| **get_index** |none|Integer|Gets the zero based index of the node inside the parent NodeCollection.|
| **get_level** |none|Integer|Gets the level of the node. Root level nodes are level 0.|
| **expand**  |none|none|Expands the node and reveals its children, if any. |
| **collapse** |none|none|Collapses the node, if it is expanded.|
| **get_visible** |none|boolean|Returns **true** if the node is visible or **false** if it is invisible.|
| **set_visible** |boolean|none|Sets the visibility of the node|
| **get_text** |none|string text|Returns the text of the node.|
| **set_text** |string text|none|Sets the text of the node.|
| **get_navigateUrl** |none|none|Returns the value of the node's navigateURL property. This is the URL of the Web page the node launches on click.|
| **set_navigateUrl** |string|none|Sets the navigateURL property of the node. This is the URL of the Web page the node launches on click. The **navigateUrl** property must be an absolute URL on the client side: e.g., `http://mydomain.com/default.aspx` not `default.aspx`. |
| **get_imageUrl** |none|(string imageUrl)|Gets the URL of the image.|
| **set_imageUrl** |(string imageUrl)|none|Sets the URL of the image.|
| **get_hoveredImageUrl** |none|(string imageUrl)|Gets the URL of the image displayed when the mouse is over the node.|
| **set_hoveredImageUrl** |(string imageUrl)|none|Sets the URL of the image displayed when the mouse is over the node.|
| **get_selectedImageUrl** |none|(string imageURL)|Gets the value of the **SelectedImageUrl** property|
| **set_selectedImageUrl** |string (imageUrl)|none|Sets the URL of the image displayed when the node is selected|
| **get_element** |none|HTML Element|Gets the root DOM element of the node (LI).|
| **get_linkElement** |none|HTML Element|Gets the anchor DOM element of the node (a).|
| **get_imageElement** |none|HTML Element|Gets the image DOM element of the node. If the server side ImageUrl property is not set,returns undefined.|
| **get_textElement** |none|HTML Element|Gets the DOM element of the node text (span).|
| **get_childListElement** |none|HTML Element|Gets the DOM element of the list of child nodes (UL).|
| **get_selected** |none|Boolean|Returns whether the node is selected|
| **set_selected** |Boolean|none|Sets the selected property of the node.|



>caption Example 1: Focus a node.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.findNodeByText("Products");
node.focus();	
````


>caption Example 2: Blur a node.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var node = nav.findNodeByText("Products");
node.blur();
````



# See Also

 * [NavigationNodeCollection Object]({%slug navigation/client-side-programming/objects/navigationnodecollection-object%})

 * [RadNavigation Objects]({%slug navigation/client-side-programming/objects/radnavigation-object%})
