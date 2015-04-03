---
title: Accessing Client Changes on the Server
page_title: Accessing Client Changes on the Server | UI for ASP.NET AJAX Documentation
description: Accessing Client Changes on the Server
slug: panelbar/client-side-programming/accessing-client-changes-on-the-server
tags: accessing,client,changes,on,the,server
published: True
position: 4
---

# Accessing Client Changes on the Server





Client side changes are available on the server side after postback. You can use the __ClientChanges__ property of RadPanelBar to access them. The ClientChanges property of RadPanelbar returns a collection of objects of type __ClientOperation__.An operation has two properties:

* __Item__ - the item which has been affected by the client operation;

* __Type__ - the type of the operation which is one of the following four cases:

* __Update__ - when a property is set on the the client through methods such as __set_text__(), __set_value__(), __enable__(), __disable__(), etc.: panelbarItem.disable();

* __Remove__ - when the __remove__ client method is called: panelbar.get_items().remove(panelbarItem);

* __Insert__ - when the __add__client method is called: panelbar.get_items().add(panelbarItem);

* __Clear__ - when an item with child items calls the __clear__() method: parentItem.get_items().clear(). If the parent item has no child items the ClientChanges collection is not altered.

>note Note that you need to call the __trackChanges__ () and __commitChanges__ () client methods of RadPanelBar in order to be able to access the changes on the server via the __ClientChanges__ property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the __Item__ and __Type__ properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/Panelbar/Examples/ClientSide/ClientSideAPI/DefaultCS.aspx) example.

>tabbedCode

````C#
	        foreach (ClientOperation<RadPanelItem> operation in RadPanelBar1.ClientChanges)
	        {
	         RadPanelItem item = operation.Item;
	
	         switch (operation.Type)
	         {
	          case ClientOperationType.Insert:
	           break;
	          case ClientOperationType.Remove:
	           break;
	          case ClientOperationType.Update:
	           UpdateClientOperation<RadPanelItem> update = operation as UpdateClientOperation<RadPanelItem>;
	           break;
	          case ClientOperationType.Clear:
	           break;
	         } 
	        }
	
````



````VB
	    For Each operation As ClientOperation(Of RadPanelItem) In RadPanelBar1.ClientChanges
	    Dim item As RadPanelItem = operation.Item
	
	     Select Case operation.Type
	      Case ClientOperationType.Insert
	       Exit Select
	      Case ClientOperationType.Remove
	       Exit Select
	      Case ClientOperationType.Update
	    Dim update As UpdateClientOperation(Of RadPanelItem) = TryCast(operation, UpdateClientOperation(Of RadPanelItem))
	       Exit Select
	      Case ClientOperationType.Clear
	       Exit Select
	     End Select
	    Next
````


>end

# See Also

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})
