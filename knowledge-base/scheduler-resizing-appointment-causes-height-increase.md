---
title: Resizing Appointment Causes Height Increase
description: Resizing Appointment Causes Height Increase. Check it now!
type: how-to
page_title: Resizing Appointment Causes Height Increase - Telerik UI for ASP.NET AJAX - KB
slug: scheduler-resizing-appointment-causes-height-increase
res_type: kb
---


### PROBLEM

When I drag the top bar of an appointment (the start time), it causes the end time to increase - the appointment gets "longer". This is only a UI issue, as when I stop dragging and the [OnClientAppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%}) event fires, the end time is still the original end time and when the scheduler is rebound, all looks fine. Replicated only in Classic render mode.

!["appointment resize height issue demonstration"](images/appointment-resize-issue.gif "appointment resize height issue demonstration")


### DESCRIPTION

The issue stems from custom border styles set to the appointments in the AppointmentDataBound event. The presence of the inline rules causes issues with the size calculation logic.

### SOLUTION

Use the [Lightweight RenderMode]({%slug controls/render-modes %}). This will also allow you to easily use CSS to style the appointments, instead of inline rules.



