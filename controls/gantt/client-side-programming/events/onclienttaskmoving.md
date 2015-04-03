---
title: OnClientTaskMoving
page_title: OnClientTaskMoving | UI for ASP.NET AJAX Documentation
description: OnClientTaskMoving
slug: gantt/client-side-programming/events/onclienttaskmoving
tags: onclienttaskmoving
published: True
position: 2
---

# OnClientTaskMoving



## 

The __OnClientMoving__ occurs when the Task is just about to be moved.

The event handler receives two parameters:

1. The instance of the Gantt control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ return the current moved task.

* __get_start__ return the start time of the current task.

* __set_cancel__ lets you cancel the event and stop the task moving.

````JavaScript
	        <telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskMoving="OnClientTaskMoving">
	        </telerik:RadGantt>
````



````JavaScript
	        function OnClientTaskMoving(sender, eventArgs) {
	            args.set_cancel(true);
	        }
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
