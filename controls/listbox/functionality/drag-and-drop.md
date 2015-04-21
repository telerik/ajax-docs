---
title: Drag and Drop
page_title: Drag and Drop | UI for ASP.NET AJAX Documentation
description: Drag and Drop
slug: listbox/functionality/drag-and-drop
tags: drag,and,drop
published: True
position: 3
---

# Drag and Drop

## 

**RadListBox** fully supports [reordering]({%slug listbox/functionality/reorder%}) and [transferring]({%slug listbox/functionality/transfer%}) of Items through **drag-and-drop**.

You could enable the functionality by first configuring the corresponding RadListBox(es) to allow Reorder and/or Transfer and then setting the **EnableDragAndDrop** property to **true**.

In addition to all corresponding events that fire on Reorder/Transfer RadListBox supports a few solely drag-and-drop events.

At the client, these are:

* [OnClientDragStart]({%slug listbox/client-side-programming/events/onclientdragstart%}) - fires when the drag-and-drop operation starts. Can be canceled.

* [OnClientDragging]({%slug listbox/client-side-programming/events/onclientdragging%}) - fires while an Item is being dragged. Can be canceled.

* [OnClientDropping]({%slug listbox/client-side-programming/events/onclientdropping%}) - fires before the dragged Item is dropped. Can be canceled.

* [OnClientDropped]({%slug listbox/client-side-programming/events/onclientdropped%}) - fires after the dragged Item is dropped.


After a successful drop the corresponding Reorder and Transfer client-side events fire.

At the server, the Reorder or Transfer events fire only if the **AutoPostBackOnReorder** or **AutoPostBackOnTransfer** properties are set to **true**.

Finally, the server-side [Dropping]({%slug listbox/server-side-programming/server-events/dropping%}) and [Dropped]({%slug listbox/server-side-programming/server-events/dropped%}) events fire only if the dragged Items are dropped onto an **HTML element**, which is **not** an Item and has its **id** attribute set.



# See Also

 * [Drag and Drop Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/draganddrop/defaultcs.aspx)

 * [Drag and Drop with RadTreeView Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/applicationscenarios/treeviewdraganddrop/defaultcs.aspx)
