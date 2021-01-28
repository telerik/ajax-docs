---
title: OnClientNodeDataBound
page_title: OnClientNodeDataBound - RadTreeView
description: Check our Web Forms article about OnClientNodeDataBound.
slug: treeview/client-side-programming/events/onclientnodedatabound
tags: onclientnodedatabound
published: True
position: 19
---

# OnClientNodeDataBound



## 

The **OnClientDataBound** event is added in **Q3 2008** release and fires when a Node is being created during Web Service Load on Demand. The event cannot be canceled.

The event handler receives the following parameters:

1. The **RadTreeView** instance that fired the event.

1. Event arguments with functions:

* **get_dataItem()** - gets a reference to the **DataItem** (**RadTreeNodeData** or any other serializable custom class) that the current Node is being bound to.

* **get_domEvent()** - **undefined** for this event.

* **get_node()** - gets a reference to the **Node** that is being bound.

The following example shows how a value is extracted from the **DataItem** and set as a Custom Attribute to Nodes loaded via a Web Service.

````JavaScript	
function onNodeDataBound(sender, eventArgs) {
    var node = eventArgs.get_node();
    var dataItem = eventArgs.get_dataItem();
    var CustomAttribute = dataItem.CustomAttribute;

    node.get_attributes().setAttribute("CustomAttribute", CustomAttribute);
}
````



>tip Another usage of the **DataItem** object is in client-side Templates that are about to be introduced with the next version of ASP.NET AJAX. See the following blog post for more details -[RadControls and ASP.NET Ajax 4.0 Preview](https://www.telerik.com/blogs/radcontrols-and-asp-net-ajax-4-0-preview).
>


# See Also

 * [Web Service Binding]({%slug treeview/load-on-demand/web-service-binding%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Overview]({%slug treeview/client-side-programming/events/overview%})
