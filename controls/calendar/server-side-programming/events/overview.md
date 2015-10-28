---
title: Overview
page_title: Server-Side Events Overview | RadCalendar for ASP.NET AJAX Documentation
description: Server-Side Events Overview
slug: calendar/server-side-programming/server-side-events/overview
tags: server-side,events,basics
published: True
position: 0
---

# Server-Side Events Overview



The **RadCalendar** control raises server-side events, which you can use to customize the parts of the control as they are created, or to respond in the code-behind when the user makes a change.

**RadCalendar** exposes the following server-side events:

* [DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%}) occurs immediately before the calendar renders the cell for a single day in the day matrix.

* [HeaderCellRender]({%slug calendar/server-side-programming/server-side-events/headercellrender%}) occurs immediately before the calendar renders a cell in the column or row headers (or the view selector).

* [SelectionChanged]({%slug calendar/server-side-programming/server-side-events/selectionchanged%}) occurs when the user changes the current selection in the calendar. This event does not fire unless the **AutoPostBack** property is **True**.

* [DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%}) occurs when the user changes the current view using the navigation controls in the title bar. This event does not fire unless the **AutoPostBack** property is **True**.



## Postbacks

By default, the **RadCalendar** does not cause postbacks when the user selects or deselects a date. This means that the server-side events are not raised. To enable postback to be triggered you should set the **AutoPostBack** property to **true**.


