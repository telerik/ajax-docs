---
title: OnClientLoad
page_title: OnClientLoad - RadTreeView
description: Check our Web Forms article about OnClientLoad.
slug: treeview/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The **OnClientLoad** event fires after the **RadTreeView** client-side object has been fully initialized.

The event handler has two parameters:

1. The **TreeView** instance that fired the event.

1. An empty event arguments object.

The example below demonstrates handling the **OnClientLoad** event and displaying the id of the initialized **RadTreeView** object to the user:

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" 
                     runat="server" 
                     OnClientLoad="onLoad">
</telerik:RadTreeView>
````
````JavaScript
function onLoad(sender, eventArgs) 
{
	alert(sender.get_id());
}
````


