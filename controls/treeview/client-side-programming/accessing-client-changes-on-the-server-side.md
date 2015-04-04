---
title: Accessing Client Changes on the Server Side
page_title: Accessing Client Changes on the Server Side | UI for ASP.NET AJAX Documentation
description: Accessing Client Changes on the Server Side
slug: treeview/client-side-programming/accessing-client-changes-on-the-server-side
tags: accessing,client,changes,on,the,server,side
published: True
position: 1
---

# Accessing Client Changes on the Server Side





Client side changes are available on the server side after postback. You can use the __ClientChanges__ property of RadTreeView to access them. The ClientChanges property of RadTreeView returns a collection of objects of type __ClientOperation__.An operation has two properties:

* __Item__ - the item which has been affected by the client operation;

* __Type__ - the type of the operation which is one of the following four cases:

* __Update__ - when a property is set on the the client through methods such as __set_text__(), __set_value__(), __enable__(), __disable__(), etc.: treeNode.disable();

* __Remove__ - when the __remove__ client method is called: treeview.get_nodes().remove(treeNode);

* __Insert__ - when the __add__client method is called: treeview.get_nodes().add(treeNode);

* __Clear__ - when a node with child nodes calls the __clear__() method: parentNode.get_nodes().clear(). If the parent node has no child nodes, the ClientChanges collection is not altered.



>note Note that you need to call the __trackChanges__ () and __commitChanges__ () client methods of RadTreeView in order to be able to access the changes on the server via the __ClientChanges__ property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the __Item__ and __Type__ properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/treeview/examples/programming/clientsideapi/defaultcs.aspx) example.



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
