---
title: Reduce the Space Between the Nodes
page_title: Reduce the Space Between the Nodes | RadTreeView for ASP.NET AJAX Documentation
description: Reduce the Space Between the Nodes
slug: treeview/application-scenarios/general/reduce-the-space-between-the-nodes
tags: reduce,the,space,between,the,nodes
published: True
position: 4
---

# Reduce the Space Between the Nodes



## 



To reduce the space between the nodes, you should use the following CSS rules:



````CSS
div.RadTreeView {
  line-height: 16px;
}

div.RadTreeView .rtSp {
  height: 14px;
}

div.RadTreeView .rtHover .rtIn,
div.RadTreeView .rtSelected .rtIn {
  padding: 0px 1px 0px;
}

div.RadTreeView .rtIn {
  padding: 1px 2px 1px;
} 			
````



Here is the final result:


>caption 

![](images/treeview_nodereducespace.png)


