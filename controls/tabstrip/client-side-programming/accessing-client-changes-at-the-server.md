---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server | UI for ASP.NET AJAX Documentation
description: Accessing Client Changes at the Server
slug: tabstrip/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 6
---

# Accessing Client Changes at the Server





Client side changes are available on the server side after postback. You can use the __ClientChanges__ property of RadTabStrip to access them. The ClientChanges property of RadTabStrip returns a collection of objects of type __ClientOperation__.An operation has two properties:

* __Item__ - the item which has been affected by the client operation;

* __Type__ - the type of the operation which is one of the following four cases:

* __Update__ - when a property is set on the the client through methods such as __set_text__(), __set_value__(), __enable__(), __disable__(), etc.: tab.disable();

* __Remove__ - when the __remove__ client method is called: tabstrip.get_tabs().remove(tab1);

* __Insert__ - when the __add__client method is called: tabstrip.get_tabs().add(tab1);

* __Clear__ - when a tab with child tabs calls the __clear__() method: parentTab.get_tabs().clear(). If the parent tab has no child tabs, the ClientChanges collection is not altered.



>note Note that you need to call the __trackChanges__ () and __commitChanges__ () client methods of RadTabStrip in order to be able to access the changes on the server via the __ClientChanges__ property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the __Item__ and __Type__ properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/TabStrip/Examples/ClientSide/AddRemoveDisable/DefaultCS.aspx) example.



>tabbedCode

````C#
	 
	foreach (ClientOperation<RadTab> operation in RadTabStrip1.ClientChanges)
	{
	RadTab tab = operation.Item;
	switch (operation.Type)
	{
	 case ClientOperationType.Insert:
	  break;
	 case ClientOperationType.Remove:
	  break;
	 case ClientOperationType.Update:
	  UpdateClientOperation<RadTab> update = operation as UpdateClientOperation<RadTab>;
	  break;
	 case ClientOperationType.Clear:
	  break;
	}
	} 
	
				
````
````VB.NET
	
	 For Each operation As ClientOperation(Of RadTab) In RadTabStrip1.ClientChanges
	 Dim tab As RadTab = operation.Item
	 Select Case operation.Type
	  Case ClientOperationType.Insert
	   Exit Select
	  Case ClientOperationType.Remove
	   Exit Select
	  Case ClientOperationType.Update
	   Dim update As UpdateClientOperation(Of RadTab) = TryCast(operation, UpdateClientOperation(Of RadTab))
	   Exit Select
	  Case ClientOperationType.Clear
	   Exit Select
	 End Select
	Next  
	
				
````
>end

# See Also

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})
