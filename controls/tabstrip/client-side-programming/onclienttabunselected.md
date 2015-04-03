---
title: OnClientTabUnSelected
page_title: OnClientTabUnSelected | UI for ASP.NET AJAX Documentation
description: OnClientTabUnSelected
slug: tabstrip/client-side-programming/onclienttabunselected
tags: onclienttabunselected
published: True
position: 20
---

# OnClientTabUnSelected



## 

The __OnClientTabUnSelected__ client-side event occurs when the user selects a new tab, after the previously selected tab has been unselected.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following method:

* __get_tab__ returns a reference to the __RadTab__ that was previously selected.

* __get_domEvent__ returns a reference to the DOM event object for the action that caused the selection.

You can use this event to respond when the user deselects a tab:

````ASPNET
	     
	
	<script>
	 function OnClientTabUnSelected(sender, args)
	 {
	   var tab = args.get_tab();
	   alert("The previously selected tab was " + tab.get_text());
	 }
	</script>
	<telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabUnSelected="OnClientTabUnSelected" ... /> 
	
````


