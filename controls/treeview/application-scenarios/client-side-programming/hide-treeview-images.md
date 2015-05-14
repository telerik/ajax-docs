---
title: Hide TreeView Images
page_title: Hide TreeView Images | RadTreeView for ASP.NET AJAX Documentation
description: Hide TreeView Images
slug: treeview/application-scenarios/client-side-programming/hide-treeview-images
tags: hide,treeview,images
published: True
position: 16
---

# Hide TreeView Images



## 

This article shows how to hide all **TreeView** Images - the Line Images, Plus and Minus signs. In this case Nodes are [toggled by clicking on their text]({%slug treeview/application-scenarios/client-side-programming/expanding-nodes-on-a-single-click%}) as the Minus and Plus Images are gone.



Line Images are hidden by setting the **ShowLineImages** property of **RadTreeView** to **false**.



Plus and Minus Images are hidden with CSS:

````CSS
div.RadTreeView .rtMinus,
div.RadTreeView .rtPlus
{
	display: none;
}
div.RadTreeView .rtTop,
div.RadTreeView .rtMid,
div.RadTreeView .rtBot
{
	padding: 0;
} 	
````


