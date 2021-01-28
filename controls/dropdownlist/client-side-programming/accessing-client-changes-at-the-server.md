---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server - RadDropDownList
description: Check our Web Forms article about Accessing Client Changes at the Server.
slug: dropdownlist/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 1
---

# Accessing Client Changes at the Server



Client-side changes are available on the server-side after postback. You can use the `ClientChanges` property of the **RadDropDownList** to access them. The `ClientChanges` property returns a collection of objects of type `ClientOperation`. An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

	* **Update** - when a property is set on the client through methods such as `set_text()`, `set_value()`, `enable()`, `disable()`, etc.: `dropdownlistItem.disable();`

	* **Remove** - when the `remove` client method is called: `dropdownlist.get_items().remove(dropdownlistItem);`

	* **Insert** - when the `add` client method is called: `dropdownlist.get_items().add(dropdownlistItem);`

	* **Clear** - when the `clear` method is called: `dropdownlist.get_items().clear();`

>note Note that you need to call the `trackChanges()` and `commitChanges()` client methods of **RadDropDownList** in order to be able to access the changes on the server via the `ClientChanges` property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the `Item` and `Type` properties.

````C#
	     	
foreach (ClientOperation<DropDownListItem> operation in RadDropDownList1.ClientChanges)
{
    DropDownListItem item = operation.Item;
    switch (operation.Type)
    {
        case ClientOperationType.Insert:
            break;
        case ClientOperationType.Remove:
            break;
        case ClientOperationType.Update:
            UpdateClientOperation<DropDownListItem> update = operation as UpdateClientOperation<DropDownListItem>;
            break;
        case ClientOperationType.Clear:
            break;
    }
} 
				
````
````VB.NET

For Each operation As ClientOperation(Of DropDownListItem) In RadDropDownList1.ClientChanges
Dim item As DropDownListItem = operation.Item
 Select Case operation.Type
  Case ClientOperationType.Insert
   Exit Select
  Case ClientOperationType.Remove
   Exit Select
  Case ClientOperationType.Update
Dim update As UpdateClientOperation(Of DropDownListItem) = TryCast(operation, UpdateClientOperation(Of DropDownListItem))
   Exit Select
  Case ClientOperationType.Clear
   Exit Select
 End Select
Next 
				
````


# See Also

 * [RadDropDownList client-side Object]({%slug dropdownlist/client-side-programming/objects/raddropdownlist-object%})
