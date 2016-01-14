---
title: Telerik.Web.UI.WebServiceAppointmentController
page_title: Telerik.Web.UI.WebServiceAppointmentController
description: Telerik.Web.UI.WebServiceAppointmentController
---

# Telerik.Web.UI.WebServiceAppointmentController

The WebServiceAppointmentController provides a facade over a Telerik.Web.UI.SchedulerProviderBase object
            and is used to call your provider from web services.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.WebServiceAppointmentController : IDisposable

## Properties

###  AppointmentComparer `IComparer`1`

Gets or sets the comparer instance used to determine the appointment ordering within the same slot.
            By default, appointments are ordered by start time and duration.

#### Remarks
You need to implement an appointment comparer only if you've overriden
            the client-side Telerik.Web.UI.Appointment.prototype.compare(appointment) function.
            In this case both the server-side and client-side implementation must work in the same manner.

###  AppointmentFactory `IAppointmentFactory`

A factory for appointment instances.

#### Remarks
The default factory returns instances of the
            	Appointment class.
            
            	WebServiceAppointmentController needs to create appointment instances
            	before passing them to the provider. You can use custom appointment
            	classes by implementing an IAppointmentFactory and setting this property.

## Methods

###  CreateRecurrenceException

Creates a recurrence exception with the specified appointment data and returns the available appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

A  object which contains the current time period.

#### recurrenceExceptionData `Telerik.Web.UI.AppointmentData`

A  object which contains the exception properties.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  CreateRecurrenceException

Creates the recurrence exception.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### recurrenceExceptionData ```0`

The recurrence exception data.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  DeleteAppointment

Deletes the specified appointment and returns the available appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

A  object which contains the current time period.

#### appointmentData `Telerik.Web.UI.AppointmentData`

A  which represents the apointment that shoud be deleted.

#### deleteSeries `System.Boolean`

Specified wether to delete the recurring series if the specified appointment is recurrence master.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  DeleteAppointment

Deletes the appointment.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentData ```0`

The appointment data.

#### deleteSeries `System.Boolean`

The delete series.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

###  GetAppointments

Gets the appointments corresponding to specified time period

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

Contains the current time period

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetAppointments

Gets the appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResources

Returns the resources of all appointments within the specified time period.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The time period

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResources

Gets the resources.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  InsertAppointment

Inserts the specified appointment and returns the available appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

A  object which contains the current time period.

#### appointmentData `Telerik.Web.UI.AppointmentData`

A  object which contains the appointment properties.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  InsertAppointment

Inserts the appointment.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentData ```0`

The appointment data.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  RemoveRecurrenceExceptions

Removes all recurrence exceptions of the specified recurrence master and returns the available appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

A  object which contains the current time period.

#### masterAppointmentData `Telerik.Web.UI.AppointmentData`

A  object which is the recurrence master.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  RemoveRecurrenceExceptions

Removes the recurrence exceptions.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### masterAppointmentData ```0`

The master appointment data.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  UpdateAppointment

Updates the specified appointment and returns the available appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

A  object which contains the current time period.

#### appointmentData `Telerik.Web.UI.AppointmentData`

A  object which contains the appointment properties.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  UpdateAppointment

Updates the appointment.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentData ```0`

The appointment data.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

