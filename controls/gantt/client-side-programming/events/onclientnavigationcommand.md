---
title: OnClientNavigationCommand
page_title: OnClientNavigationCommand | UI for ASP.NET AJAX Documentation
description: OnClientNavigationCommand
slug: gantt/client-side-programming/events/onclientnavigationcommand
tags: onclientnavigationcommand
published: True
position: 7
---

# OnClientNavigationCommand

## 

The __OnClientNavigationCommand__ occurs when the Task moving is started.

The event handler receives two parameters:

1. The instance of the __Gantt__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_task__ return the current moved task.

* __set_cancel__ lets you cancel the event and prevent the task moving.

* __get_view__ returns the name of the selected view.

````XML
<telerik:RadGantt runat="server" id="RadGantt1" OnClientNavigationCommand="OnClientNavigationCommand">
</telerik:RadGantt>
````

````JavaScript
function OnClientNavigationCommand(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
