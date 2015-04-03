---
title: OnClientDoubleClick
page_title: OnClientDoubleClick | UI for ASP.NET AJAX Documentation
description: OnClientDoubleClick
slug: tabstrip/client-side-programming/onclientdoubleclick
tags: onclientdoubleclick
published: True
position: 10
---

# OnClientDoubleClick



## 

The __OnClientDoubleClick__ client-side event occurs when the user double-clicks on a tab.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab__ returns a reference to the __RadTab__that was double clicked.

* __get_domEvent__ returns a reference to the DOM event object for the double click.

You can use this event to perform special actions when the user double-clicks on a tab:

````ASPNET
	
	<script type="text/javascript">
	function onDoubleClick(sender, eventArgs)
	{
	  var tab = eventArgs.get_tab();
	  // var domEvent = eventArgs.get_domEvent();
	  alert (tab.get_text() + " was double-clicked.");
	}
	</script>
	<telerik:RadTabStrip ID="RadTabStrip1" runat="server"
	   OnClientDoubleClick="onDoubleClick">
	...
	</telerik:RadTabStrip> 
	
````


