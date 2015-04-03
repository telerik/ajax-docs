---
title: OnClientTaskResizeStart
page_title: OnClientTaskResizeStart | UI for ASP.NET AJAX Documentation
description: OnClientTaskResizeStart
slug: gantt/client-side-programming/events/onclienttaskresizestart
tags: onclienttaskresizestart
published: True
position: 4
---

# OnClientTaskResizeStart



## 

The __OnClientTaskResizeStart__ occurs when the Task resizing is started.

The event handler receives two parameters:

1. The instance of the __Gantt__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ returns the current moved task.

* __set_cancel__ lets you cancel the event and prevent the task moving.

* __get_cancel__ returns __true__ if the event has been canceled.

````XML
	        <telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskResizeStart="OnClientTaskResizeStart">
	        </telerik:RadGantt>
````



````JavaScript
	        function OnClientTaskResizeStart(sender, eventArgs) {
	            args.set_cancel(true);
	        }
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
