---
title: OnClientTaskResizing
page_title: OnClientTaskResizing | UI for ASP.NET AJAX Documentation
description: OnClientTaskResizing
slug: gantt/client-side-programming/events/onclienttaskresizing
tags: onclienttaskresizing
published: True
position: 5
---

# OnClientTaskResizing



## 

The __OnClientTaskResizing__ occurs when the Task is just about to be resized.

The event handler receives two parameters:

1. The instance of the __Gantt__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ returns the current moved task.

* __set_cancel__ lets you cancel the event and prevent the task moving.

* __get_cancel__ returns __true__ if the event has been canceled.

* __get_start__ returns the start time of the current task.

* __get_end__ returns the end time of the current task.

````XML
	        <telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskResizing="OnClientTaskResizing">
	        </telerik:RadGantt>
````



````JavaScript
	        function OnClientTaskResizing(sender, eventArgs) {
	            args.set_cancel(true);
	        }
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
