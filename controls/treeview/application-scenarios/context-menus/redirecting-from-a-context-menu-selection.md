---
title: Redirecting from a Context Menu Selection
page_title: Redirecting from a Context Menu Selection | UI for ASP.NET AJAX Documentation
description: Redirecting from a Context Menu Selection
slug: treeview/application-scenarios/context-menus/redirecting-from-a-context-menu-selection
tags: redirecting,from,a,context,menu,selection
published: True
position: 0
---

# Redirecting from a Context Menu Selection



## 

To redirect to another web page based on clicking a Context Menu, set the __OnClientContextMenuClicking__ property to a JavaScript function that takes two arguments:

* __sender:__a reference to the RadTreeView

* __eventArgs:__contains a reference to the clicked Menu Item, the Node under the Context Menu and the __set_cancel()__ function used for aborting the Context Menu click.

The example below gets the Context Menu Item and sets the window url.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	
	        function clientContextMenuClicking(sender, eventArgs) {
	            var menuItem = eventArgs.get_menuItem();
	            window.location.href = "http://en.wikipedia.org/wiki/" + menuItem.get_text();
	        }
	    </script>
	
	    ...
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" 
	                         EnableDragAndDrop="True" 
	                         OnClientContextMenuItemClicking="clientContextMenuClicking"
	                         Skin="Vista">
	    </telerik:RadTreeView>
````


