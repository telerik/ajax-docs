---
title: OnClientContextMenu
page_title: OnClientContextMenu | UI for ASP.NET AJAX Documentation
description: OnClientContextMenu
slug: toolbar/client-side-programming/onclientcontextmenu
tags: onclientcontextmenu
published: True
position: 18
---

# OnClientContextMenu



## 

The __OnClientContextMenu__ client-side event occurs when the user right-clicks an item in the toolbar.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the item that was right-clicked.

* __get_domEvent__ returns the DOM event object for the click.

You can use this event to respond when the user right-clicks an item:

````ASPNET
	
	    <script type="text/javascript">
	        function contextmenu(toolbar, args) {
	            var attributes = args.get_item().get_attributes();
	            attributes.setAttribute("shownMenu", "true");
	        }
	    </script>
	
	    <telerik:radtoolbar id="RadToolBar1" runat="server" onclientcontextmenu="contextmenu">  
	        <Items>    
	        <telerik:RadToolBarButton Text="Button1" />     
	        <telerik:RadToolBarButton Text="Button2" />    
	        <telerik:RadToolBarButton Text="Button3" />
	         </Items>
	     </telerik:radtoolbar>
````


