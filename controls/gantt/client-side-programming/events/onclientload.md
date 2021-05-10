---
title: OnClientLoad
page_title: OnClientLoad - RadGantt
description: Check our Web Forms article about OnClientLoad.
slug: gantt/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad


The **OnClientLoad** occurs when control's client-side object is initialized as well as the underlying Kendo UI Widget.

The event handler receives one parameter:

1. The instance of the **Gantt** control firing the event.


````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientLoad="OnClientLoad">
</telerik:RadGantt>
````

````JavaScript
function OnClientLoad(sender) {
    var gantt = sender;   
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
