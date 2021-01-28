---
title: OnClientAppointmentContextMenu
page_title: OnClientAppointmentContextMenu - RadScheduler
description: Check our Web Forms article about OnClientAppointmentContextMenu.
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenu
tags: onclientappointmentcontextmenu
published: True
position: 3
---

# OnClientAppointmentContextMenu



The **OnClientAppointmentContextMenu** client-side event is called when the user right-clicks on an appointment. It fires before the [built-in context menu]({%slug scheduler/context-menus/appointment-context-menu%}) is shown (if it is enabled).

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** - returns the appointment instance.

* **get_domEvent()** - the raw DOM event sent by the browser.

# See Also

 * [Context Menu online example](https://demos.telerik.com/aspnet-ajax/Scheduler/Examples/ContextMenu/DefaultCS.aspx)
