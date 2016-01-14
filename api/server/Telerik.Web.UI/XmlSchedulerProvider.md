---
title: Telerik.Web.UI.XmlSchedulerProvider
page_title: Telerik.Web.UI.XmlSchedulerProvider
description: Telerik.Web.UI.XmlSchedulerProvider
---

# Telerik.Web.UI.XmlSchedulerProvider

A RadScheduler provider that uses XML document as a data store.

## Inheritance Hierarchy

* System.Object
* System.Configuration.Provider.ProviderBase
* Telerik.Web.UI.SchedulerProviderBase
* Telerik.Web.UI.XmlSchedulerProvider

## Methods

###  Delete

Deletes the specified appointment.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### appointmentToDelete `Telerik.Web.UI.Appointment`

The appointment to delete.

#### Returns

`System.Void` 

###  Delete

Deletes the specified scheduler info.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentToDelete `Telerik.Web.UI.Appointment`

The appointment to delete.

#### Returns

`System.Void` 

###  Delete

Deletes the specified owner.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### appointmentToDelete `Telerik.Web.UI.Appointment`

The appointment to delete.

#### Returns

`System.Void` 

###  GetAppointments

Fetches appointments.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetAppointments

Gets the appointments.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetAppointments

Gets the appointments.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResources

Gets the resources.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### Returns

`System.Collections.Generic.IDictionary`2` 

###  GetResourcesByType

Gets the type of the resources by.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### resourceType `System.String`

Type of the resource.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResourcesByType

Gets the type of the resources by.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### resourceType `System.String`

Type of the resource.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResourceTypes

Gets the resource types.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetResourceTypes

Gets the resource types.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  Initialize

Initializes the provider.

#### Parameters

#### name `System.String`

The friendly name of the provider.

#### config `System.Collections.Specialized.NameValueCollection`

A collection of the name/value pairs representing the provider-specific attributes specified in the configuration for this provider.

#### Returns

`System.Void` 

###  Insert

Inserts the specified appointment.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### appointmentToInsert `Telerik.Web.UI.Appointment`

The appointment to insert.

#### Returns

`System.Void` 

###  Insert

Inserts the specified scheduler info.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentToInsert `Telerik.Web.UI.Appointment`

The appointment to insert.

#### Returns

`System.Void` 

###  Insert

Inserts the specified owner.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### appointmentToInsert `Telerik.Web.UI.Appointment`

The appointment to insert.

#### Returns

`System.Void` 

###  Synchronized

Returns a synchronized (thread safe) wrapper for this provider instance.

#### Returns

`Telerik.Web.UI.SchedulerProviderBase` A synchronized (thread safe) wrapper for this provider instance.

###  Update

Updates the specified appointment.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner RadScheduler instance.

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### Returns

`System.Void` 

###  Update

Updates the specified scheduler info.

#### Parameters

#### schedulerInfo `Telerik.Web.UI.ISchedulerInfo`

The scheduler info.

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### Returns

`System.Void` 

###  Update

Updates the specified owner.

#### Parameters

#### owner `Telerik.Web.UI.RadScheduler`

The owner.

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### Returns

`System.Void` 

