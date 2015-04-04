---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server | UI for ASP.NET AJAX Documentation
description: Accessing Client Changes at the Server
slug: combobox/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 1
---

# Accessing Client Changes at the Server



Client side changes are available on the server side after postback. You can use the __ClientChanges__ property of RadComboBox to access them. The ClientChanges property of RadComboBox returns a collection of objects of type __ClientOperation__.An operation has two properties:

* __Item__ - the item which has been affected by the client operation;

* __Type__ - the type of the operation which is one of the following four cases:

* __Update__ - when a property is set on the client through methods such as __set_text__(), __set_value__(), __enable__(), __disable__(), etc.: comboItem.disable();

* __Remove__ - when the __remove__ client method is called: combo.get_items().remove(comboItem);

* __Insert__ - when the __add__client method is called: combo.get_items().add(comboItem);

* __Clear__ - when the __clear__ method is called: combo.get_items().clear();

>note Note that you need to call the __trackChanges__ () and __commitChanges__ () client methods of RadComboBox in order to be able to access the changes on the server via the __ClientChanges__ property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the __Item__ and __Type__ properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx) example.



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
