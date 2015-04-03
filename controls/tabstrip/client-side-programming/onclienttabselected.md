---
title: OnClientTabSelected
page_title: OnClientTabSelected | UI for ASP.NET AJAX Documentation
description: OnClientTabSelected
slug: tabstrip/client-side-programming/onclienttabselected
tags: onclienttabselected
published: True
position: 19
---

# OnClientTabSelected



## 

The __OnClientTabSelected__ client-side event occurs when the user selects a tab, after the tab has been selected.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following method:

* __get_tab__ returns a reference to the __RadTab__ that was clicked.

* __get_domEvent__ returns a reference to the DOM event object for the action that caused the selection.

You can use this event to respond when the user clicks on a tab:

````ASPNET
	 <script>
	 function OnClientTabSelected(sender, eventArgs)
	 {
	   var tab = eventArgs.get_tab();
	   alert(tab.get_text());
	 }
	</script>
	<telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabSelected="OnClientTabSelected" ... /> 
````


