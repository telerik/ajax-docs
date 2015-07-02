---
title: Telerik.Web.UI.AppointmentUpdateEventArgs
page_title: Telerik.Web.UI.AppointmentUpdateEventArgs
description: Telerik.Web.UI.AppointmentUpdateEventArgs
---

# Telerik.Web.UI.AppointmentUpdateEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.AppointmentUpdate event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.SchedulerCancelEventArgs
* Telerik.Web.UI.AppointmentUpdateEventArgs

## Properties

###  ModifiedAppointment `Appointment`

Gets or sets the modified appointment.

###  SchedulerInfo `ISchedulerInfo`

Gets or sets the ISchedulerInfo object
            that will be passed to the providers' Update method.

#### Remarks
You can replace this object with your own implementation of
            ISchedulerInfo in order
            to pass additional information to the provider.

###  Appointment `Appointment`

Gets the appointment.

