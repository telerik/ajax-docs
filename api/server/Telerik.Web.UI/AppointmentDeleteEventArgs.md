---
title: Telerik.Web.UI.AppointmentDeleteEventArgs
page_title: Telerik.Web.UI.AppointmentDeleteEventArgs
description: Telerik.Web.UI.AppointmentDeleteEventArgs
---

# Telerik.Web.UI.AppointmentDeleteEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.AppointmentDelete event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.SchedulerCancelEventArgs
* Telerik.Web.UI.AppointmentDeleteEventArgs

## Properties

###  Appointment `Appointment`

Gets the appointment.

###  SchedulerInfo `ISchedulerInfo`

Gets or sets the ISchedulerInfo object
            that will be passed to the providers' Delete method.

#### Remarks
You can replace this object with your own implementation of
            ISchedulerInfo in order
            to pass additional information to the provider.

