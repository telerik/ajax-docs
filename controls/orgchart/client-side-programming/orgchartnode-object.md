---
title: OrgChartNode Object
page_title: OrgChartNode Object | UI for ASP.NET AJAX Documentation
description: OrgChartNode Object
slug: orgchart/client-side-programming/orgchartnode-object
tags: orgchartnode,object
published: True
position: 2
---

# OrgChartNode Object



## 

The __OrgChartNode__ object is returned by the __getNode()__ method of the __OrgChartNodeCollection__ object. It is also exposed by the event arguments of many client-side events (__eventArgs.get_node()__). The following table lists the most important methods:


|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __getId__ |none|string|Returns the current node id value|
| __get_element__ |none|string|Returns the <li/> element of the node|
| __get_groupItems__ |none|OrgChartGroupItemCollection|Returns a collection of the group items asociated with that node|
