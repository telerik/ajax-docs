---
title: Creating Context Menus at the Client
page_title: Creating Context Menus at the Client | UI for ASP.NET AJAX Documentation
description: Creating Context Menus at the Client
slug: treeview/context-menus/creating-context-menus-at-the-client
tags: creating,context,menus,at,the,client
published: True
position: 3
---

# Creating Context Menus at the Client



## 

The built-in Context Menu of RadTreeView allows you to add Items at the client-side. The example below shows how to add a child Item upon clicking an existing Item:

__JavaScript Example__

````JavaScript
	      function OnClientContextMenuItemClicked(sender, eventArgs)
	        {  
	          var item = eventArgs.get_menuItem();
	          var menu = item.get_menu();            
	          sender.trackChanges();
	          var newItem = new Telerik.Web.UI.RadMenuItem();
	          newItem.set_text("Client-side added item");
	          item.get_items().add(newItem);
	          sender.commitChanges();
	        }
````


