---
title: OnClientContextMenu
page_title: OnClientContextMenu | UI for ASP.NET AJAX Documentation
description: OnClientContextMenu
slug: panelbar/client-side-programming/onclientcontextmenu
tags: onclientcontextmenu
published: True
position: 15
---

# OnClientContextMenu



## 

The __OnClientContextMenu__ client-side event occurs just prior to opening a context menu (upon right-clicking a panel item).

The event handler receives two parameters:

1. An instance of the panel bar that fired the event.

1. An eventArgs parameter containing the following method:

* __get_item()__: retrieves a reference to the clicked item.

* __get_domEvent()__: returns the DOM event object for the mouse click.

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


