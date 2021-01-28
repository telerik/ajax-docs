---
title: OnClientContextMenu
page_title: OnClientContextMenu - RadPanelBar
description: Check our Web Forms article about OnClientContextMenu.
slug: panelbar/client-side-programming/onclientcontextmenu
tags: onclientcontextmenu
published: True
position: 15
---

# OnClientContextMenu



## 

The **OnClientContextMenu** client-side event occurs just prior to opening a context menu (upon right-clicking a panel item).

The event handler receives two parameters:

1. An instance of the panel bar that fired the event.

1. An eventArgs parameter containing the following method:

	* **get_item()**: retrieves a reference to the clicked item.

	* **get_domEvent()**: returns the DOM event object for the mouse click.

````ASPNET
<script>
    function OnClientContextMenu(sender, args) {
        alert("The " + args.get_item().get_text() + " has been right-clicked");
    }
</script>
<telerik:radpanelbar id="RadPanelBar1" runat="server" onclientcontextmenu="OnClientContextMenu">       
	<Items>       
	 ...    
	</Items>
</telerik:radpanelbar>
````


