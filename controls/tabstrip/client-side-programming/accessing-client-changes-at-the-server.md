---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server - RadTabStrip
description: Check our Web Forms article about Accessing Client Changes at the Server.
slug: tabstrip/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 30
---

# Accessing Client Changes at the Server


Client side changes are available on the server side after postback. You can use the **ClientChanges** property of RadTabStrip to access them. The ClientChanges property of RadTabStrip returns a collection of objects of type **ClientOperation**.An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

* **Update** - when a property is set on the the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: tab.disable();

* **Remove** - when the **remove** client method is called: tabstrip.get_tabs().remove(tab1);

* **Insert** - when the **add**client method is called: tabstrip.get_tabs().add(tab1);

* **Clear** - when a tab with child tabs calls the **clear**() method: parentTab.get_tabs().clear(). If the parent tab has no child tabs, the ClientChanges collection is not altered.


>note Note that you need to call the **trackChanges** () and **commitChanges** () client methods of RadTabStrip in order to be able to access the changes on the server via the **ClientChanges** property.
>

## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](https://demos.telerik.com/aspnet-ajax/TabStrip/Examples/ClientSide/AddRemoveDisable/DefaultCS.aspx) example.


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


# See Also

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})
