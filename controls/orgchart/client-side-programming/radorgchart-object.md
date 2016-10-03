---
title: RadOrgChart Object
page_title: RadOrgChart Object | RadOrgChart for ASP.NET AJAX Documentation
description: RadOrgChart Object
slug: orgchart/client-side-programming/radorgchart-object
tags: radorgchart,object
published: True
position: 1
---

# RadOrgChart Object



**RadOrgChart** provides a flexible client-side API. You can easily interact with RadOrgChart in the browser using its client-side object. In addition to a variety of [client-side events]({%slug orgchart/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadOrgChart client-side object

**RadOrgChart** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
	
var orgChartObject = $find("<%= RadOrgChart1.ClientID %>");
	
````



## 

The following table lists the most important methods of the client-side **RadOrgChart** object:




| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_enableDragAndDrop** |none|Boolean|Returns whether user is allowed to drag and drop nodes.|
| **saveClientState** |none|none|Saves the client state to the client state hidden field|
| **repaint** |none|none|Refreshes the RadOrgChart UI|
| **get_allowGroupItemDragging** |none|Boolean|Returns whether user is allowed to drag and drop group items.|
| **get_nodes** |none|OrgChartNodeCollection|Gets a collection with all nodes|
| **get_nodeListElement** |none|none|Gets the UL element of the RadOrgChart|
| **get_element** |none|none|Gets the root DOM element of the RadOrgChart|
| **drillDownOnNode** |string|none|Drills down on the node with the specified Hierarchical index. See **Example 1**.|
| **extractNodeFromDomElement** |DOM element|none|Gets a reference to the node by passing its DOM element to the method.|
| **extractGroupItemFromDomElement** |DOM element|none|Gets a reference to the group item by passing its DOM element to the method.|
| **get_drilledNodeHierarchicalIndex** |none|string|Gets the Hierarchical index of the node that is drilled.|



>caption Example 1: Drill down on the node with Hierarchical index "0:1".
````JavaScript
var orgChartObject = $find("<%= RadOrgChart1.ClientID %>");
var node = orgChartObject.get_nodes().getNode(0);
var level1Child1Index = node.get_nodes().getNode(1).get_hierarchicalIndex();
orgchart.drillDownOnNode(level1Child1Index);
````

