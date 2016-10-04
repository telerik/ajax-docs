---
title: OnClientDropDownClosed
page_title: OnClientDropDownClosed | RadToolBar for ASP.NET AJAX Documentation
description: OnClientDropDownClosed
slug: toolbar/client-side-programming/onclientdropdownclosed
tags: onclientdropdownclosed
published: True
position: 4
---

# OnClientDropDownClosed

## 

The **OnClientDropDownClosed** client-side event occurs immediately after the drop-down has closed.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadToolBarItem** that was closed. In this case this is a drop-down.

* **get_domEvent** - returns the browser's event object.

You can use this event to respond when the list of child buttons closes.

````ASPNET	
<script>
    function OnClientDropDownClosed(sender, args) {
        alert(args.get_item().get_text());
    }       
</script>

<telerik:RadToolBar id="RadToolBar1" runat="server" Orientation="Horizontal" 
	OnClientDropDownClosed="OnClientDropDownClosed">     
	<CollapseAnimation Duration="200" Type="OutQuint" />     
	<Items>        
		<telerik:RadToolBarButton Text="button1" runat="server">
		</telerik:RadToolBarButton>        
		<telerik:RadToolBarDropDown Text="dropdown" runat="server">            
			<Buttons>                
				<telerik:RadToolBarButton Text="Button2" runat="server">
				</telerik:RadToolBarButton>            
			</Buttons>        
		</telerik:RadToolBarDropDown>     
	</Items>
</telerik:RadToolBar>
````


