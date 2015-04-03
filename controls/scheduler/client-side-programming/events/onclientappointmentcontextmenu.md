---
title: OnClientAppointmentContextMenu
page_title: OnClientAppointmentContextMenu | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentContextMenu
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenu
tags: onclientappointmentcontextmenu
published: True
position: 3
---

# OnClientAppointmentContextMenu



The __OnClientAppointmentContextMenu__ client-side event is called when the user right-clicks on an appointment. It fires before the [built-in context menu]({%slug scheduler/context-menus/appointment-context-menu%}) is shown (if it is enabled).

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ - returns the appointment instance.

* __get_domEvent()__ - the raw DOM event sent by the browser.

# See Also

 * [Context Menu online example](http://demos.telerik.com/aspnet-ajax/Scheduler/Examples/ContextMenu/DefaultCS.aspx)
