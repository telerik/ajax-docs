---
title: OnClientNodeEdited
page_title: OnClientNodeEdited | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeEdited
slug: treeview/client-side-programming/events/onclientnodeedited
tags: onclientnodeedited
published: True
position: 10
---

# OnClientNodeEdited



## 

The **OnClientNodeEdited** client-side event is called after editing is completed.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the node being edited. You can call get_text() from this node reference to get the "new" edited text.

* **get_domEvent()** retrieves a DOM event object of the node edit.

The example below displays the new node text just after the user has finished editing it.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" 
    runat="server" 
    AllowNodeEditing="true" 
    OnClientNodeEdited="ClientNodeEdited">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeEdited(sender, eventArgs) {
    var node = eventArgs.get_node();
    alert("The new node text is " + node.get_text());
}
````



# See Also

 * [OnClientNodeEditing]({%slug treeview/client-side-programming/events/onclientnodeediting%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
