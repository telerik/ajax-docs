---
title: OnClientCheckedStateChanging
page_title: OnClientCheckedStateChanging - RadToolBar
description: Check our Web Forms article about OnClientCheckedStateChanging.
slug: toolbar/client-side-programming/onclientcheckedstatechanging
tags: onclientcheckedstatechanging
published: True
position: 9
---

# OnClientCheckedStateChanging

## 

The **OnClientCheckedStateChanging** client-side event occurs before a button has been checked.

>caution To check a button it should be marked with **CheckOnClick="True"** 
>


The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the toolbar item that was checked. In this case this is a **RadToolBarButton**

* **set_cancel** lets you prevent the drop-down from checking

* **get_domEvent** returns the browser's event object



You can use this event to respond when a button has been checked.

````ASPNET	     
<script type="text/javascript">
    function checkedStateChanging(sender, args) {
        args.set_cancel(true);
    }        
</script> 
<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" 
	OnClientCheckedStateChanging="checkedStateChanging">    
	<Items>        
		<telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
		</telerik:RadToolBarButton>        
		<telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
		</telerik:RadToolBarButton>        
		<telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
		</telerik:RadToolBarButton>    
	</Items>
</telerik:RadToolBar>				
````




