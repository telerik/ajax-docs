---
title: Telerik.Web.UI.OccurrenceDeleteEventArgs
page_title: Telerik.Web.UI.OccurrenceDeleteEventArgs
description: Telerik.Web.UI.OccurrenceDeleteEventArgs
---

# Telerik.Web.UI.OccurrenceDeleteEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.OccurrenceDelete event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.SchedulerCancelEventArgs
* Telerik.Web.UI.OccurrenceDeleteEventArgs

## Properties

###  Appointment `Appointment`

Gets the master appointment that was used to generate the occurrence.

###  Appointment `Appointment`

Gets the appointment.

###  OccurrenceAppointment `Appointment`

Gets the occurrence appointment that is about to be removed.

#### Remarks
This can also be the master appointment itself. If this is the case,
            it'll remain in the Appointments collection, but it will be hidden (Visible=false).

