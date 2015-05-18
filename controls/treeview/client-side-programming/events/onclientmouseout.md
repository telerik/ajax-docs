---
title: OnClientMouseOut
page_title: OnClientMouseOut | RadTreeView for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: treeview/client-side-programming/events/onclientmouseout
tags: onclientmouseout
published: True
position: 23
---

# OnClientMouseOut



## 

The **OnClientMouseOut** client-side event occurs just before the mouse passes out of a node.

The event handler receives parameters:

1. The TreeView instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the node.

* **get_domEvent()** retrieves a DOM event object of the mouse movement.

The example below retrieves node text just before the mouse passes out of the node area. The text is displayed in a div.

````ASPNET
<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientMouseOut="ClientMouseOut">
</telerik:RadTreeView>
<br />
<div id="myDiv" style="width: 489px; height: 100px">
</div>
````
````JavaScript
function ClientMouseOut(sender, eventArgs) {
	var node = eventArgs.get_node();
	var myDiv = document.getElementById("myDiv");
	myDiv.innerHTML = "OnClientMouseOut: " + node.get_text();
}
````



# See Also

 * [OnClientMouseOver]({%slug treeview/client-side-programming/events/onclientmouseover%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
