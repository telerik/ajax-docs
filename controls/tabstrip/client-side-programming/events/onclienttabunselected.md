---
title: OnClientTabUnSelected
page_title: OnClientTabUnSelected - RadTabStrip
description: Check our Web Forms article about OnClientTabUnSelected.
slug: tabstrip/client-side-programming/onclienttabunselected
tags: onclienttabunselected
published: True
position: 13
---

# OnClientTabUnSelected

## 

The **OnClientTabUnSelected** client-side event occurs when the user selects a new tab, after the previously selected tab has been unselected.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following method:

* **get_tab** returns a reference to the **RadTab** that was previously selected.

* **get_domEvent** returns a reference to the DOM event object for the action that caused the selection.

You can use this event to respond when the user deselects a tab:

````ASPNET
<script>
function OnClientTabUnSelected(sender, args)
{
	var tab = args.get_tab();
	alert("The previously selected tab was " + tab.get_text());
}
</script>
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" OnClientTabUnSelected="OnClientTabUnSelected" ... /> 	
````


