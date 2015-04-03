---
title: OnClientContextMenu
page_title: OnClientContextMenu | UI for ASP.NET AJAX Documentation
description: OnClientContextMenu
slug: tabstrip/client-side-programming/onclientcontextmenu
tags: onclientcontextmenu
published: True
position: 9
---

# OnClientContextMenu



## 

The __OnClientContextMenu__ client-side event occurs when the user right-clicks on a tab in the tab strip.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab__returns a reference to the __RadTab__ that was clicked.

* __get_domEvent__returns a reference to the DOM event object for the right-click.

You can use this event to perform special actions when the user right-clicks on a tab:

````ASPNET
	
	<script type="text/javascript">
	function onRightClick(sender, eventArgs)
	{
	  var tab = eventArgs.get_tab();
	  // var domEvent = eventArgs.get_domEvent();
	  alert (tab.get_text() + " was right-clicked.");
	}
	</script>
	<telerik:RadTabStrip ID="RadTabStrip1" runat="server"
	   OnClientContextMenu="onRightClick">
	...
	</telerik:RadTabStrip> 
	
````




