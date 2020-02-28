---
title: Reorder
page_title: Reorder | RadListBox for ASP.NET AJAX Documentation
description: Reorder
slug: listbox/functionality/reorder
tags: reorder
published: True
position: 1
---

# Reorder

## 

**RadListBox** supports item reordering - you can move the item/items up and down using the provided UI buttons.

To enable item reordering set the **AllowReorder="True"** property of the listbox. This will show the up and down buttons next to the listbox:

![Reorder Buttons](images/listbox_reorder_buttons.png)

When the first item is selected the up button is disabled. Similarly, when the last item is selected the down button is disabled.

You can control the look and feel of the reorder buttons by adjusting the [ButtonSettings properties]({%slug listbox/functionality/button-settings%}).

Additionally, you can reorder items using drag and drop. To do so you need to set the **EnableDragAndDrop="True"** property.

To fire a postback after clicking on the up or down buttons set the **AutoPostBackOnReorder="True"** property.

Several client and server events are fired upon reordering (when AutoPostBackOnReorder="True") in the following sequence:

>caption  

| Reorder (from Reorder buttons) | Reorder (using drag and drop) |
| ------ | ------ |
|[OnClientDropping]({%slug listbox/client-side-programming/events/onclientdropping%})(can be cancelled)||
|-|[OnClientDropped]({%slug listbox/client-side-programming/events/onclientdropped%})|
|[OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%})(can be cancelled)|[OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%})(can be cancelled)|
|[OnClientReordered]({%slug listbox/client-side-programming/events/onclientreordered%})|[OnClientReordered]({%slug listbox/client-side-programming/events/onclientreordered%})|
|-|[Dropping]({%slug listbox/server-side-programming/server-events/dropping%})(can be cancelled)|
|-|[Dropped]({%slug listbox/server-side-programming/server-events/dropped%})|
|[Reordering]({%slug listbox/server-side-programming/server-events/reordering%})(can be cancelled)|[Reordering]({%slug listbox/server-side-programming/server-events/reordering%})(can be cancelled)|
|[Updating]({%slug listbox/server-side-programming/server-events/updating%})(can be cancelled)|[Updating]({%slug listbox/server-side-programming/server-events/updating%})(can be cancelled)|
|[Updated]({%slug listbox/server-side-programming/server-events/updated%})|[Updated]({%slug listbox/server-side-programming/server-events/updated%})|
|[Reordered]({%slug listbox/server-side-programming/server-events/reordered%})|[Reordered]({%slug listbox/server-side-programming/server-events/reordered%})|

Please check [this help topic]({%slug listbox/data-binding/automatic-database-updates%}) on how to **automatically update the database on reorder**.

# See Also

 * [Transfer]({%slug listbox/functionality/transfer%})

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Button Settings]({%slug listbox/functionality/button-settings%})

 * [Reordering]({%slug listbox/server-side-programming/server-events/reordering%})

 * [Reordered]({%slug listbox/server-side-programming/server-events/reordered%})

 * [OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%})

 * [OnClientReordered]({%slug listbox/client-side-programming/events/onclientreordered%})

 * [Automatic Database Updates]({%slug listbox/data-binding/automatic-database-updates%})

 * [Reorder Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/reorder/defaultcs.aspx)
