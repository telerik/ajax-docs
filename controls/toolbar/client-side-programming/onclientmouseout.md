---
title: OnClientMouseOut
page_title: OnClientMouseOut | UI for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: toolbar/client-side-programming/onclientmouseout
tags: onclientmouseout
published: True
position: 20
---

# OnClientMouseOut



## 

The __OnClientMouseOut__ client-side event occurs when the mouse moves off an item in the toolbar.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the item that was previously under the mouse.

* __get_domEvent__ returns the DOM event object for the mouse movement.

You can use this event to respond when the mouse moves off an item:

````ASPNET
	
	    <script type="text/javascript">
	        function markItem(toolbar, args) {
	            var attributes = args.get_item().get_attributes();
	            attributes.setAttribute("visited", "true");
	        }
	      </script>
	
	    <telerik:radtoolbar id="RadToolBar1" runat="server" onclientmouseout="markItem">  
	        <Items>    
	        <telerik:RadToolBarButton Text="Button1" />     
	        <telerik:RadToolBarButton Text="Button2" />    
	        <telerik:RadToolBarButton Text="Button3" /> 
	        </Items>
	    </telerik:radtoolbar>
````


