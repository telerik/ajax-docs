---
title: OnClientTaskMoveStart
page_title: OnClientTaskMoveStart | UI for ASP.NET AJAX Documentation
description: OnClientTaskMoveStart
slug: gantt/client-side-programming/events/onclienttaskmovestart
tags: onclienttaskmovestart
published: True
position: 1
---

# OnClientTaskMoveStart



## 

The __OnClientTaskMoveStart__ occurs when the Task moving is started.

The event handler receives two parameters:

1. The instance of the __Gantt__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ return the current moved task.

* __set_cancel__ lets you cancel the event and prevent the task moving.

````XML
	        <telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskMoveStart="OnClientTaskMoveStart">
	        </telerik:RadGantt>
````



````JavaScript
	        function OnClientTaskMoveStart(sender, eventArgs) {
	            args.set_cancel(true);
	        }
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
