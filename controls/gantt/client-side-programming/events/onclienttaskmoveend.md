---
title: OnClientTaskMoveEnd
page_title: OnClientTaskMoveEnd | UI for ASP.NET AJAX Documentation
description: OnClientTaskMoveEnd
slug: gantt/client-side-programming/events/onclienttaskmoveend
tags: onclienttaskmoveend
published: True
position: 3
---

# OnClientTaskMoveEnd

## 

The __OnClientTaskMoveEnd__ occurs when the Task moving is ended.

The event handler receives two parameters:

1. The instance of the __Gantt__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ returns the current moved task.

* __get_start__ returns the start time of the current task.

* __set_cancel__ lets you cancel the event and prevent the task moving.

* __get_cancel__ returns __true__ if the event has been canceled.

````XML
<telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskMoveEnd="OnClientTaskMoveEnd">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskMoveEnd(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
