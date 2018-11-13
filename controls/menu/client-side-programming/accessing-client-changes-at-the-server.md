---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server | RadMenu for ASP.NET AJAX Documentation
description: Accessing Client Changes at the Server
slug: menu/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 1
---

# Accessing Client Changes at the Server



Client side changes are available on the server side after postback. You can use the **ClientChanges** property of RadMenu to access them. The ClientChanges property of RadMenu returns a collection of objects of type **ClientOperation**.An operation has the following properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

* **Update** - when a property is set on the the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: menuItem.disable();

* **Remove** - when the **remove** client method is called: menu.get_items().remove(menuItem);

* **Insert** - when the **add**client method is called: menu.get_items().add(menuItem);

* **Clear** - when an item with child items calls the **clear**() method: parentItem.get_items().clear(). If the parent item has no child items the ClientChanges collection is not altered.



>note Note that you need to call the **trackChanges** () and **commitChanges** () client methods of RadMenu in order to be able to access the changes on the server via the **ClientChanges** property.
>


## Example:

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/menu/examples/programming/addremovedisableitemsclientside/defaultcs.aspx) example.


````C#	     
foreach (ClientOperation<RadMenuItem> operation in RadMenu1.ClientChanges)
{ 
    RadMenuItem item = operation.Item;
    switch (operation.Type) 
    {  
        case ClientOperationType.Insert:
            break;  
        case ClientOperationType.Remove:
            break;  
        case ClientOperationType.Update:   
            UpdateClientOperation<RadMenuItem> update = operation as UpdateClientOperation<RadMenuItem>;   
            break;  
        case ClientOperationType.Clear:   
            break; 
    } 
}		
````
````VB.NET
For Each operation As ClientOperation(Of RadMenuItem) In RadMenu1.ClientChanges
    Dim item As RadMenuItem = operation.Item
    Select Case operation.Type
        Case ClientOperationType.Insert
            Exit Select
        Case ClientOperationType.Remove
            Exit Select
        Case ClientOperationType.Update
    Dim update As UpdateClientOperation(Of RadMenuItem) = TryCast(operation, UpdateClientOperation(Of RadMenuItem))
           Exit Select
        Case ClientOperationType.Clear
            Exit Select
    End Select
Next 
````

# See Also

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
