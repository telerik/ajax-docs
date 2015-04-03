---
title: RadOrgChart Object
page_title: RadOrgChart Object | UI for ASP.NET AJAX Documentation
description: RadOrgChart Object
slug: orgchart/client-side-programming/radorgchart-object
tags: radorgchart,object
published: True
position: 1
---

# RadOrgChart Object



__RadOrgChart__ provides a flexible client-side API. You can easily interact with RadOrgChart in the browser using its client-side object. In addition to a variety of [client-side events]({%slug orgchart/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadOrgChart client-side object

__RadOrgChart__ creates a client-side object with its __ClientID__. You can obtain the reference using the following JavaScript code:

````JavaScript
	
		    var orgChartObject = $find("<%= RadOrgChart1.ClientID %>");
	
````



## 

The following table lists the most important methods of the client-side __RadOrgChart__ object:




|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_enableDragAndDrop__ |none|Boolean|Returns whether user is allowed to drag and drop nodes.|
| __saveClientState__ |none|none|Saves the client state to the client state hidden field|
| __repaint__ |none|none|Refreshes the RadOrgChart UI|
| __get_allowGroupItemDragging__ |none|Boolean|Returns whether user is allowed to drag and drop group items.|
| __get_nodes__ |none|OrgChartNodeCollection|Gets a collection with all nodes|
| __get_nodeListElement__ |none|none|Gets the UL element of the RadOrgChart|
| __get_element__ |none|none|Gets the root DOM element of the RadOrgChart|
