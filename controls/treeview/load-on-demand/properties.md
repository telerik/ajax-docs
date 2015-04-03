---
title: Properties
page_title: Properties | UI for ASP.NET AJAX Documentation
description: Properties
slug: treeview/load-on-demand/properties
tags: properties
published: True
position: 6
---

# Properties



## 

* __LoadingMessage__ is a string that displays next to the node being expanded. The node needs to have expand mode equal to __ServerSideCallBack__ or __WebService__.

* The position of the loading message relative to the node text is determined by the __LoadingStatusPosition__ property. Its possible values are as follows:

* __BeforeNodeText__

* __AfterNodeText__

* __BelowNodeText__

* __None__ to suppress the loading message.


>caption 

![RadTreeView Load on Demand](images/treeview_loadondemandproperties.png)

* When the __PersistLoadOnDemandNodes__property is __True__ (the default), nodes populated through load-on-demand are persisted on the server automatically.
