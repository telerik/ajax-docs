---
title: NavigationCommand
page_title: NavigationCommand | UI for ASP.NET AJAX Documentation
description: NavigationCommand
slug: gantt/server-side-programming/events/navigationcommand
tags: navigationcommand
published: True
position: 8
---

# NavigationCommand

The **RadGantt NavigationCommand** event is fired when the **RadGantt** control executes a view change command.

**NavigationCommand** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **NavigationCommandEventArgs**. It returns selected **RadGantt** view.

## Example

````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server" OnNavigationCommand="RadGantt1_NavigationCommand"></telerik:RadGantt>
````

````C#
protected void RadGantt1_NavigationCommand(object sender, Telerik.Web.UI.Gantt.NavigationCommandEventArgs e)
{
    if (e.Command == Telerik.Web.UI.Gantt.GanttNavigationCommand.SwitchToWeekView)
    {
        //...
    }
}
````
````VB.NET
Protected Sub RadGantt1_NavigationCommand(sender As Object, e As Gantt.NavigationCommandEventArgs)
    If e.Command = Gantt.GanttNavigationCommand.SwitchToMonthView Then
        '...
    End If
End Sub
````

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
