---
title: Accessing Client Changes on the Server Side
page_title: Accessing Client Changes on the Server Side | RadTreeView for ASP.NET AJAX Documentation
description: Accessing Client Changes on the Server Side
slug: treeview/client-side-programming/accessing-client-changes-on-the-server-side
tags: accessing,client,changes,on,the,server,side
published: True
position: 1
---

# Accessing Client Changes on the Server Side





Client side changes are available on the server side after postback. You can use the **ClientChanges** property of **RadTreeView** to access them. The **ClientChanges** property of **RadTreeView** returns a collection of objects of type **ClientOperation**. An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

	* **Update** - when a property is set on the the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: treeNode.disable();

	* **Remove** - when the **remove** client method is called: *treeview.get_nodes().remove(treeNode);*

	* **Insert** - when the **add**client method is called: *treeview.get_nodes().add(treeNode);*

	* **Clear** - when a node with child nodes calls the **clear**() method: *parentNode.get_nodes().clear()*. If the parent node has no child nodes, the **ClientChanges** collection is not altered.



>note Note that you need to call the **trackChanges**() and **commitChanges**() client methods of **RadTreeView** in order to be able to access the changes on the server via the **ClientChanges** property.
>


## Example:

The code snippet below enumerates through all operations in the **ClientChanges** collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/treeview/examples/programming/clientsideapi/defaultcs.aspx) example.



````C#
foreach (ClientOperation<RadTreeNode> operation in RadTreeView1.ClientChanges)
{
    RadTreeNode node = operation.Item;

    switch (operation.Type)
    {
        case ClientOperationType.Insert:
            break;
        case ClientOperationType.Remove:
            break;
        case ClientOperationType.Update:
            UpdateClientOperation<RadTreeNode> update = operation as UpdateClientOperation<RadTreeNode>;
            break;
        case ClientOperationType.Clear:
            break;
    }
}
````
````VB.NET
For Each operation As ClientOperation(Of RadTreeNode) In RadTreeView1.ClientChanges

Dim node As RadTreeNode = operation.Item

 Select Case operation.Type
  Case ClientOperationType.Insert
   Exit Select
  Case ClientOperationType.Remove
   Exit Select
  Case ClientOperationType.Update
    Dim update As UpdateClientOperation(Of RadTreeNode) = 
        TryCast(operation, UpdateClientOperation(Of RadTreeNode))
   Exit Select
  Case ClientOperationType.Clear
   Exit Select
 End Select
Next
````


# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})
