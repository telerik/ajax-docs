---
title: OrgChartNode Object
page_title: OrgChartNode Object | RadOrgChart for ASP.NET AJAX Documentation
description: OrgChartNode Object
slug: orgchart/client-side-programming/orgchartnode-object
tags: orgchartnode,object
published: True
position: 2
---

# OrgChartNode Object



## 

The **OrgChartNode** object is returned by the **getNode()** method of the **OrgChartNodeCollection** object. It is also exposed by the event arguments of many client-side events (**eventArgs.get_node()**). The following table lists the most important methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **getId** |none|string|Returns the current node id value|
| **get_element** |none|string|Returns the `<li/>` element of the node|
| **get_groupItems** |none|OrgChartGroupItemCollection|Returns a collection of the group items asociated with that node|
| **get_nodes** |none|OrgChartNodeCollection|Gets the node's NodeCollection.|
| **get_hierarchicalIndex** |none|string|Gets the node's Hierarchical index.|
| **get_nodeListElement** |none|DOM element(ul)|Gets the node's Hierarchical index.|
| **get_parent** |none|OrgChartNodeCollection|Gets the node parent's OrgChartNodeCollection.|
| **get_owner** |none|RadOrgChart or OrgChartNode|Gets the parent node or the OrgChart if there are no other nodes up in the hierarchy|

