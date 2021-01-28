---
title: GroupItemDrop
page_title: GroupItemDrop - RadOrgChart
description: Check our Web Forms article about GroupItemDrop.
slug: orgchart/server-side-programming/events/groupitemdrop
tags: groupitemdrop
published: True
position: 3
---

# GroupItemDrop



## 

The **GroupItemDrop** is raised when a GroupItem is dragged and drooped on Node different than the Node which contains the item.

The event handler receives two parameters:

1. The instance of the orgchart firing the event

2. An event arguments parameter containing the following properties:

	* **DestinationNode** - the Node on which the GroupItem is dropped.

	* **SourceGroupItem** - the dropped GroupItem
