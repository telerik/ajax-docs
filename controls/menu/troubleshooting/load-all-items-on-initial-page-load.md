---
title: Load All Items on Initial Page Load
page_title: Load All Items on Initial Page Load | UI for ASP.NET AJAX Documentation
description: Load All Items on Initial Page Load
slug: menu/troubleshooting/load-all-items-on-initial-page-load
tags: load,all,items,on,initial,page,load
published: True
position: 4
---

# Load All Items on Initial Page Load



## 

__Q:__ How can I prevent a delay in the page load when I have a RadMenu with a large number of items?

__A:__ In general the delay is caused by the so called __‘lazy initialization’__ mechanism - Item objects are initializedin the latest possible moment in the control life cycle. This is the first time Items are accessedwith the __get_allItems()__ method, which happens automatically right before the item opens.

You could avoid this delay, or more specifically 'move' it to the initial page load, by calling __get_items__ early in the page life cycle either for all RadMenus on the page or for individual ones.

The first approach uses the __pageLoad__ function as shown below:

````JavaScript
	    function pageLoad(){ 
	        var menu = $find("<%= RadMenu1.ClientID %>");
	        //initialize all items
	        var items = menu.get_allItems();
	    }	
````





The second approach uses the [OnClientLoad]({%slug menu/client-side-programming/events/onclientload%}) event of a single RadMenu:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" 
	        OnClientLoad="(function(sender, e){ sender.get_allItems(); })" />
````


