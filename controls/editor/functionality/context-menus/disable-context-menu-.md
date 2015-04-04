---
title: Disable Context Menu 
page_title: Disable Context Menu  | UI for ASP.NET AJAX Documentation
description: Disable Context Menu 
slug: editor/functionality/context-menus/disable-context-menu-
tags: disable,context,menu,
published: True
position: 1
---

# Disable Context Menu 



## 

To disable RadEditor context menus, use code-behind to locate the context menu and set it __Enabled__property to false.

>tabbedCode

````C#
	
	        RadEditor1.ContextMenus.FindByTagName("A").Enabled = false; 
	        RadEditor1.ContextMenus.FindByTagName("P").Enabled = false;
	
````
````VB
	
	        RadEditor1.ContextMenus.FindByTagName("A").Enabled = False
	        RadEditor1.ContextMenus.FindByTagName("P").Enabled = False
	
````
>end
