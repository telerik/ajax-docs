---
title: OnClientNavigationCommand
page_title: OnClientNavigationCommand | RadGantt for ASP.NET AJAX Documentation
description: OnClientNavigationCommand
slug: gantt/client-side-programming/events/onclientnavigationcommand
tags: onclientnavigationcommand
published: True
position: 7
---

# OnClientNavigationCommand

## 

The **OnClientNavigationCommand** occurs when the Task moving is started.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** return the current moved task.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_view** returns the name of the selected view.

````ASP.NET
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
