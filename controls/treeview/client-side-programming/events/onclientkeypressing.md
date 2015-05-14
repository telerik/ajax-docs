---
title: OnClientKeyPressing
page_title: OnClientKeyPressing | RadTreeView for ASP.NET AJAX Documentation
description: OnClientKeyPressing
slug: treeview/client-side-programming/events/onclientkeypressing
tags: onclientkeypressing
published: True
position: 2
---

# OnClientKeyPressing



## 

The **OnClientKeyPressing** client-side event occurs when any key is clicked while the **TreeView** is having the focus:

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the node which is selected before pressing the key.

* **get_domEvent()** retrieves the DOM event.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false). Canceling the event will for example stop the keyboard navigation.

The example below shows how to toggle the nodes upon clicking the Enter key:

````ASPNET
<telerik:RadTreeView
   ID="RadTreeView1"
   runat="server"
   LoadingStatusPosition="BeforeNodeText"            
   OnClientKeyPressing="OnClientKeyPressing">
   ...
</telerik:RadTreeView> 
````
````JavaScript
function OnClientKeyPressing(sender, args) {

	var node = args.get_node();
	var key = args.get_domEvent().keyCode;

	if (key == "13")
		node.toggle();
}               
````


