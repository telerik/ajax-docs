---
title: Telerik.Web.UI.AppointmentsPopulatingEventArgs
page_title: Telerik.Web.UI.AppointmentsPopulatingEventArgs
description: Telerik.Web.UI.AppointmentsPopulatingEventArgs
---

# Telerik.Web.UI.AppointmentsPopulatingEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.AppointmentsPopulating event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.AppointmentsPopulatingEventArgs

## Properties

###  SchedulerInfo `ISchedulerInfo`

Gets or sets the ISchedulerInfo object
            that will be passed to the providers' GetAppointments method.

#### Remarks
You can replace this object with your own implementation of
            ISchedulerInfo in order
            to pass additional information to the provider.

