---
title: Accessing Client Changes on the Server
page_title: Accessing Client Changes on the Server | RadPanelBar for ASP.NET AJAX Documentation
description: Accessing Client Changes on the Server
slug: panelbar/client-side-programming/accessing-client-changes-on-the-server
tags: accessing,client,changes,on,the,server
published: True
position: 4
---

# Accessing Client Changes on the Server





Client side changes are available on the server side after postback. You can use the **ClientChanges** property of RadPanelBar to access them. The ClientChanges property of RadPanelbar returns a collection of objects of type **ClientOperation**.An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

	* **Update** - when a property is set on the the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: panelbarItem.disable();

	* **Remove** - when the **remove** client method is called: panelbar.get_items().remove(panelbarItem);

	* **Insert** - when the **add** client method is called: panelbar.get_items().add(panelbarItem);

	* **Clear** - when an item with child items calls the **clear**() method: parentItem.get_items().clear(). If the parent item has no child items the ClientChanges collection is not altered.

>tip Note that you need to call the **trackChanges** () and **commitChanges** () client methods of RadPanelBar in order to be able to access the changes on the server via the **ClientChanges** property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/Panelbar/Examples/ClientSide/ClientSideAPI/DefaultCS.aspx) example.



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


# See Also

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})
