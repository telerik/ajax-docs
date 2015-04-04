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



The __RadGantt NavigationCommand__ event is fired when the __RadGantt__ control executes a view change command.

__NavigationCommand__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __NavigationCommandEventArgs__. It returns selected __RadGantt__ view.

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
