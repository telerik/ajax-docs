---
title: OnClientMouseOut
page_title: OnClientMouseOut - RadToolBar
description: Check our Web Forms article about OnClientMouseOut.
slug: toolbar/client-side-programming/onclientmouseout
tags: onclientmouseout
published: True
position: 12
---

# OnClientMouseOut

## 

The **OnClientMouseOut** client-side event occurs when the mouse moves off an item in the toolbar.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the item that was previously under the mouse.

* **get_domEvent** returns the DOM event object for the mouse movement.

You can use this event to respond when the mouse moves off an item:

````ASPNET	
<script type="text/javascript">
    function markItem(toolbar, args) {
        var attributes = args.get_item().get_attributes();
        attributes.setAttribute("visited", "true");
    }
  </script>

<telerik:RadToolBar id="RadToolBar1" runat="server" 
	OnClientMouseOut="markItem">  
	<Items>    
		<telerik:RadToolBarButton Text="Button1" />     
		<telerik:RadToolBarButton Text="Button2" />    
		<telerik:RadToolBarButton Text="Button3" /> 
	</Items>
</telerik:RadToolBar>
````


