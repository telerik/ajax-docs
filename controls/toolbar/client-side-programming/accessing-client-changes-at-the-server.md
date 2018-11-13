---
title: Accessing Client Changes at the Server
page_title: Accessing Client Changes at the Server | RadToolBar for ASP.NET AJAX Documentation
description: Accessing Client Changes at the Server
slug: toolbar/client-side-programming/accessing-client-changes-at-the-server
tags: accessing,client,changes,at,the,server
published: True
position: 30
---

# Accessing Client Changes at the Server


Client side changes are available on the server side after postback. You can use the **ClientChanges** property of RadToolBar to access them. The ClientChanges property of RadToolBar returns a collection of objects of type **ClientOperation**.An operation has two properties:

* **Item** - the item which has been affected by the client operation;

* **Type** - the type of the operation which is one of the following four cases:

* **Update** - when a property is set on the the client through methods such as **set_text**(), **set_value**(), **enable**(), **disable**(), etc.: button.disable();

* **Remove** - when the **remove** client method is called: toolbar.get_items().remove(button1);

* **Insert** - when the **add** client method is called: toolbar.get_items().add(button1);

* **Clear** - when an item with child items calls the **clear**() method: parentItem.get_items().clear(). If the parent item has no child items, the ClientChanges collection is not altered.

>note Note that you need to call the **trackChanges** () and **commitChanges** () client methods of RadToolBar in order to be able to access the changes on the server via the **ClientChanges** property.
>


>caption Example

The code snippet below enumerates through all operations in the ClientChanges collection and utilizes both the **Item** and **Type** properties. For a complete demo, please see the client-side [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/toolbar/examples/clientside/addremovedisableitems/defaultcs.aspx) example.


````C#
foreach (ClientOperation<RadToolBarItem> operation in RadToolBar1.ClientChanges)
{
     RadToolBarItem item = operation.Item;

     switch (operation.Type)
     {
      case ClientOperationType.Insert:
       break;
      case ClientOperationType.Remove:
       break;
      case ClientOperationType.Update:
       UpdateClientOperation<RadToolBarItem> update = operation as UpdateClientOperation<RadToolBarItem>;
       break;
      case ClientOperationType.Clear:
       break;
     } 
}
````
````VB	
For Each operation As ClientOperation(Of RadToolBarItem) In RadToolBar1.ClientChanges
Dim item As RadToolBarItem = operation.Item

 Select Case operation.Type
  Case ClientOperationType.Insert
   Exit Select
  Case ClientOperationType.Remove
   Exit Select
  Case ClientOperationType.Update
Dim update As UpdateClientOperation(Of RadToolBarItem) = TryCast(operation, UpdateClientOperation(Of RadToolBarItem))
   Exit Select
  Case ClientOperationType.Clear
   Exit Select
 End Select
Next
````

# See Also

 * [RadToolBar Object]({%slug toolbar/client-side-programming/radtoolbar-object%})
