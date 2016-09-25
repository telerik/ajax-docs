---
title: RadNavigation Object
page_title: RadNavigation Object | RadNavigation for ASP.NET AJAX Documentation
description: RadNavigation Object
slug: navigation/client-side-programming/objects/radnavigation-object
tags: navigation,object
published: True
position: 1
---

# RadNavigation Object



## 

The following table lists the most important of the **RadNavigation object**'s client-side methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|boolean|True if the navigation is enabled.|
| **set_enabled** |Boolean|none|Enables/disables the navigation.|
| **findNodeByText** |(string text)|NavigationNode|Returns the first **NavigationNode** object whose **Text** property is equal to the passed parameter.|
| **findNodeByUrl** |(string URL)|NavigationNode|Returns the first **NavigationNode** object whose **NavigateUrl** property is equal to the passed parameter.|
| **get_nodes** |none|NavigationNodeCollection|Returns the collection of root level nodes. See **Example 1**.|
| **get_allNodes** | none | Array | Gets a linear collection of all nodes. This includes all root and child nodes in the navigation. See **Example 2**. |
| **focus** |none|none|Brings the focus to the first Navigation node.|
| **get_expandedNode** |none|NavigationNode|Returns the expanded root level node. If no node is expanded at the root level returns null.|
| **get_selectedNode** |none|NavigationNode|Returns the selected Navigation node. If no node is selected returns null.|
| **get_firstNode** |none|NavigationNode|Returns the first Navigation node. If the Navigation does not contain nodes returns null.|
| **get_element** |none|HTML Element|Gets the DOM element for the Navigation (div). See **Example 3**.|
| **get_childListElement** |none|HTML Element|Gets the DOM element for the list of nodes in the navigation (UL).|
| **add_EventName** |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name &lt;EventName&gt;. See **Example 4**.|
| **remove_EventName** | (mixed eventHandler) | none | Detaches an eventHandler from the event with the name &lt;EventName&gt;. See **Example 5**.|
| **expandMenuButton** | none | none | Expands the Navigation Menu Button, showing the nodes it contains in a dropdown. See **Example 6**.|
| **collapseMenuButton** | none | none | Collapses the Navigation Menu Button, hiding the expanded nodes. See **Example 7**.|
| **get_visible** |none|Boolean|True if the navigation is visible, false otherwise.|
| **set_visible** |Boolean|none|Sets the Navigation's visibility.|


>caption Example 1: Get a collection of the root level nodes.
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var nodes = nav.get_nodes();		
````


>caption Example 2: Get a linear collection of all nodes. 
````JavaScript
var nav = $find("<%= RadNavigation1.ClientID %>");
var allnodes = nav.get_allNodes()	
````


>caption Example 3: Hide/show the Navigation.
````JavaScript
// hide the Navigation
// note this change does not persist after a postback
function hideNavigation()
{  
	var nav = $find("<%= RadNavigation1.ClientID %>");
	nav.get_element().style.display = "none";
}

// show the Navigation
function showNavigation()
{  
    var nav = $find("<%= RadNavigation1.ClientID %>"); 
	nav.get_element().style.display = "";
}		
````


>caption Example 4: Attach an OnClientNodeClicked event handler.
````JavaScript
function OnClientNodeClicked(sender, args) {
    alert("clicked");
}

function AttachClickHandler()
{   
    var nav = $find("<%= RadNavigation1.ClientID %>"); 
	nav.add_nodeClicked(OnClientNodeClicked);
}		
````


>caption Example 5: Remove the OnClientNodeClicked handler.
````JavaScript
function OnClientNodeClicked(sender, args) {
    alert("clicked");
}

function RemoveClickHandler()
{   
    var nav = $find("<%= RadNavigation1.ClientID %>"); 
	nav.remove_nodeClicked(OnClientNodeClicked);
}		
````


>caption Example 6: Expand the Navigation Menu Button.
````JavaScript
function ExpandMenuButton()
{   
    var nav = $find("<%= RadNavigation1.ClientID %>"); 
	nav.expandMenuButton();
}		
````


>caption Example 7: Collapse the Navigation Menu Button.
````JavaScript
function CollapseMenuButton()
{   
    var nav = $find("<%= RadNavigation1.ClientID %>"); 
	nav.collapseMenuButton();
}		
````



# See Also

 * [NavigationNode Object]({%slug navigation/client-side-programming/objects/navigationnode-object%})

 * [NavigationNodeCollection Object]({%slug navigation/client-side-programming/objects/navigationnodecollection-object%})
