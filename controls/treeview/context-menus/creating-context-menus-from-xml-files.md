---
title: Creating Context Menus from XML Files
page_title: Creating Context Menus from XML Files | RadTreeView for ASP.NET AJAX Documentation
description: Creating Context Menus from XML Files
slug: treeview/context-menus/creating-context-menus-from-xml-files
tags: creating,context,menus,from,xml,files
published: True
position: 4
---

# Creating Context Menus from XML Files



## 

The **ContextMenus** property in **RadTreeView** for ASP.NET AJAX is a collection of **RadTreeViewContextMenu** objects. The **RadTreeViewContextMenu** control inherits the **RadContextMenu**, which in turn inherits **RadMenu**.

The easiest way to populate a **RadTreeViewContextMenu** from an XML document is using the following syntax:



````C#
RadTreeView1.ContextMenus.Add(new RadTreeViewContextMenu());
RadTreeView1.ContextMenus[0].LoadContentFile("~/MyContextMenuContentFile.xml");
````
````VB.NET	
RadTreeView1.ContextMenus.Add(new RadTreeViewContextMenu())
RadTreeView1.ContextMenus(0).LoadContentFile("~/MyContextMenuContentFile.xml")
````


The structure of the context menu content file is the same as the structure of the [RadMenu content file](https://www.telerik.com/help/aspnet-ajax/menu-items-xml.html).
