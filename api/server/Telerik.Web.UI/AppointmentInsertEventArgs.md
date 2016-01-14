---
title: Telerik.Web.UI.AppointmentInsertEventArgs
page_title: Telerik.Web.UI.AppointmentInsertEventArgs
description: Telerik.Web.UI.AppointmentInsertEventArgs
---

# Telerik.Web.UI.AppointmentInsertEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.AppointmentInsert event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.SchedulerCancelEventArgs
* Telerik.Web.UI.AppointmentInsertEventArgs

## Properties

###  Appointment `Appointment`

Gets the appointment.

###  SchedulerInfo `ISchedulerInfo`

Gets or sets the ISchedulerInfo object
            that will be passed to the providers' Insert method.

#### Remarks
You can replace this object with your own implementation of
            ISchedulerInfo in order
            to pass additional information to the provider.

