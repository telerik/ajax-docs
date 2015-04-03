---
title: OnClientKeyPressing
page_title: OnClientKeyPressing | UI for ASP.NET AJAX Documentation
description: OnClientKeyPressing
slug: treeview/client-side-programming/events/onclientkeypressing
tags: onclientkeypressing
published: True
position: 2
---

# OnClientKeyPressing



## 

The __OnClientKeyPressing__ client-side event occurs when any key is clicked while the treeview is having the focus:

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the node which is selected before pressing the key.

* __get_domEvent()__ retrieves the dom event.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false). Canceling the event will for example stop the KeyBoard navigation.

The example below shows how to toggle the nodes upon clicking the Enter key:

````ASPNET
	<script>
	    function OnClientKeyPressing(sender, args) {
	
	        var node = args.get_node();
	        var key = args.get_domEvent().keyCode;
	
	        if (key == "13")
	            node.toggle();
	    }               
	   
	</script>    
	   
	<telerik:RadTreeView
	   ID="RadTreeView1"
	   runat="server"
	   LoadingStatusPosition="BeforeNodeText"            
	   OnClientKeyPressing="OnClientKeyPressing">
	   ...
	</telerik:RadTreeView> 
````


