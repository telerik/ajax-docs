---
title: OnClientContextMenu
page_title: OnClientContextMenu | RadToolBar for ASP.NET AJAX Documentation
description: OnClientContextMenu
slug: toolbar/client-side-programming/onclientcontextmenu
tags: onclientcontextmenu
published: True
position: 10
---

# OnClientContextMenu

## 

The **OnClientContextMenu** client-side event occurs when the user right-clicks an item in the toolbar.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the item that was right-clicked.

* **get_domEvent** returns the DOM event object for the click.

You can use this event to respond when the user right-clicks an item:

````ASPNET
<script type="text/javascript">
    function contextmenu(toolbar, args) {
        var attributes = args.get_item().get_attributes();
        attributes.setAttribute("shownMenu", "true");
    }
</script>

<telerik:RadToolBar id="RadToolBar1" runat="server" 
	OnClientContextMenu="contextmenu">  
	<Items>    
		<telerik:RadToolBarButton Text="Button1" />     
		<telerik:RadToolBarButton Text="Button2" />    
		<telerik:RadToolBarButton Text="Button3" />
	</Items>
 </telerik:RadToolBar>
````


