---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server | RadComboBox for ASP.NET AJAX Documentation
description: Accessing Client Changes at the Server
slug: combobox/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 1
---

# Accessing Client Changes at the Server



Client side changes are available on the server side after postback. You can use the **ClientChanges** property of RadComboBox to access them. The ClientChanges property of RadComboBox returns a collection of objects of type **ClientOperation**.An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

* **Update** - when a property is set on the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: comboItem.disable();

* **Remove** - when the **remove** client method is called: combo.get_items().remove(comboItem);

* **Insert** - when the **add**client method is called: combo.get_items().add(comboItem);

* **Clear** - when the **clear** method is called: combo.get_items().clear();

>note Note that you need to call the **trackChanges** () and **commitChanges** () client methods of RadComboBox in order to be able to access the changes on the server via the **ClientChanges** property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx) example.



````C#
	     	
foreach (ClientOperation<RadComboBoxItem> operation in RadComboBox1.ClientChanges)
{
	RadComboBoxItem item = operation.Item;
	switch (operation.Type)
	{
	 case ClientOperationType.Insert:
	  break;
	 case ClientOperationType.Remove:
	  break;
	 case ClientOperationType.Update:
	  UpdateClientOperation<RadComboBoxItem> update = operation as UpdateClientOperation<RadComboBoxItem>;
	  break;
	 case ClientOperationType.Clear:
	  break;
	}
} 
				
````
````VB.NET
	
For Each operation As ClientOperation(Of RadComboBoxItem) In RadComboBox1.ClientChanges
Dim item As RadComboBoxItem = operation.Item
 Select Case operation.Type
  Case ClientOperationType.Insert
   Exit Select
  Case ClientOperationType.Remove
   Exit Select
  Case ClientOperationType.Update
Dim update As UpdateClientOperation(Of RadComboBoxItem) = TryCast(operation, UpdateClientOperation(Of RadComboBoxItem))
   Exit Select
  Case ClientOperationType.Clear
   Exit Select
 End Select
Next 
				
````


# See Also

 * [Add/Remove/Disable Items example](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx)

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})
