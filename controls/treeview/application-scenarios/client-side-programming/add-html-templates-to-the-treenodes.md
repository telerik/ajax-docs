---
title: Add HTML Templates to the TreeNodes
page_title: Add HTML Templates to the TreeNodes - RadTreeView
description: Check our Web Forms article about Add HTML Templates to the TreeNodes.
slug: treeview/application-scenarios/client-side-programming/add-html-templates-to-the-treenodes
tags: add,html,templates,to,the,treenodes
published: True
position: 6
---

# Add HTML Templates to the TreeNodes



## 

At the moment, it is not possible to assign a real template to a client-side node. Templates are rendered on the server side, hence the limitation. If you need some additional HTML (no server controls) you can "inject" it in the node's HTML. Here is a JavaScript code sample to get you started:

````JavaScript
var treeView = $find("<%= RadTreeView1.ClientID %>");
var node = new Telerik.Web.UI.RadTreeNode();
node.set_text("Test");
treeView.get_nodes().add(node);
//The html you would like to use as a template
var html = "<table border='1'><tr><td>One</td><td>Two</td></tr></table>";
//Get the DOM element which represents the node's contents
var contentElement = node.get_contentElement();
//Update its html with the template
contentElement.innerHTML = html;  
````




