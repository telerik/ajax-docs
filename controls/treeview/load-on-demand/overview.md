---
title: Overview
page_title: Load On Demand Overview | RadTreeView for ASP.NET AJAX Documentation
description: Overview
slug: treeview/load-on-demand/overview
tags: overview
published: True
position: 0
---

# Load On Demand Overview



## 

The Load-On-Demand feature of **RadTreeView** allows child nodes to be added on the fly as parent nodes are expanded.


>caption 

![RadTreeView Load On Demand Overview](images/treeview_loadondemandoverview.png)

The **NodeExpand** event fires when the "+" icon is clicked. This event provides the opportunity to add nodes based on the identity of the clicked-on parent node. The **NodeExpand**event is fired based on the **ExpandMode**property of each node. **ExpandMode**values can be:

* **ServerSide**: This setting triggers a post back to fire the **NodeExpand** event. See the [Server-Side Load On Demand]({%slug treeview/load-on-demand/server-side-binding%}) topic for an example of using this setting.

* **ServerSideCallback**: This value triggers an asynchronous callback that fires the **NodeExpand** event. See the [Client-Side Load On Demand]({%slug treeview/load-on-demand/client-side-binding%}) topic for an example of using this setting.

* **WebService**: This value causes the web service specified in the **WebServiceSettings** property to be called. The web service has a specific signature that returns an array of **RadTreeNodeData** types that automatically populate the child nodes of the clicked-on parent node. See the [Web Service Load On Demand]({%slug treeview/load-on-demand/web-service-binding%}) topic for an example of using this setting.

* **ClientSide**: This value signals that data has already been retrieved from the server. Once a parent node has all its children loaded you can set **ExpandMode** to **ClientSide**.

For other properties that control load-on-demand appearance and behavior, see the [Load On Demand Properties]({%slug treeview/load-on-demand/properties%}) topic.



For additional information on the pros and cons of the load on demand modes please check this blog post: [Load On Demand Modes - why so many?](http://blogs.telerik.com/aspnet-ajax/posts/08-08-08/radtreeview-for-asp-net-ajax-load-on-demand-modes---why-so-many.aspx)



