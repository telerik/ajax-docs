---
title: Telerik.Web.UI.AppointmentCollection
page_title: Telerik.Web.UI.AppointmentCollection
description: Telerik.Web.UI.AppointmentCollection
---

# Telerik.Web.UI.AppointmentCollection

A collection of appointments.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.AppointmentCollection : IEnumerable`1

## Properties

###  Item `Appointment`

Gets or sets the Appointment at the specified index.

## Methods

###  Contains

Determines whether an element is in the AppointmentCollection.

#### Remarks
This method performs a linear search; therefore, this method is an O(n) operation, where n is Count.

#### Parameters

#### appointment `Telerik.Web.UI.Appointment`

The Appointment to locate in the AppointmentCollection.

#### Returns

`System.Boolean` true if item is found in the AppointmentCollection; otherwise, false.

###  CopyTo

Copies the entire AppointmentCollection to a compatible one-dimensional Array,
            	starting at the specified index of the target array.

#### Parameters

#### array `Telerik.Web.UI.Appointment`

The one-dimensional Array that is the destination of the Appointments copied from AppointmentCollection.
            	The Array must have zero-based indexing.

#### index `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  FindByID

Searches for an Appointment with the specified ID and returns a reference to it.

#### Remarks
This method determines equality by calling Object.Equals.

#### Parameters

#### id `System.Object`

The AppointmentID to search for.

#### Returns

`Telerik.Web.UI.Appointment` The Appointment with the specified ID, if found; otherwise, null.

###  FindByRecurrenceParentID

Searches for all Appointments with the specified RecurrenceParentID
            	and returns a generic IList containing them.

#### Remarks
This method determines equality by calling Object.Equals.
            
            	Appointments with recurrence state Exception
            	are linked to their parents using the RecurrenceParentID property.

#### Parameters

#### parentId `System.Object`

The RecurrenceParentID to search for.

#### Returns

`System.Collections.Generic.IList`1` A generic IList containing the Appointments with the specified RecurrenceParentID, if found.

###  FindByRecurrenceParentID

Searches for all Appointments with the specified
            	RecurrenceParentID and
            	RecurrenceState.

#### Remarks
This method determines equality by calling Object.Equals.

#### Parameters

#### parentId `System.Object`

The RecurrenceParentID to search for.

#### state `Telerik.Web.UI.RecurrenceState`

The RecurrenceState to search for.

#### Returns

`System.Collections.Generic.IList`1` A generic IList containing the Appointments
            	with the specified RecurrenceParentID and
            	RecurrenceState, if found.

###  GetAppointmentsEnclosingRange

Searches for all Appointments that
            	are fully contained within the specified time range.

#### Parameters

#### rangeStart `System.DateTime`

The start of the time range.

#### rangeEnd `System.DateTime`

The end of the time range.

#### Returns

`System.Collections.Generic.IList`1` A generic IList containing the Appointments
            	that are fully contained within the specified time range.

###  GetAppointmentsInRange

Searches for all Appointments that
            	overlap with the specified time range and returns a generic IList containing them.

#### Parameters

#### rangeStart `System.DateTime`

The start of the time range.

#### rangeEnd `System.DateTime`

The end of the time range.

#### Returns

`System.Collections.Generic.IList`1` A generic IList containing the Appointments
            	that overlap with the specified time range.

###  GetAppointmentsStartingInRange

Searches for all Appointments that
            	start in the specified time range and returns a generic IList containing them.

#### Parameters

#### rangeStart `System.DateTime`

The start of the time range.

#### rangeEnd `System.DateTime`

The end of the time range.

#### Returns

`System.Collections.Generic.IList`1` A generic IList containing the Appointments
            	that start in the specified time range.

###  GetEnumerator

Returns an enumerator for the entire AppointmentCollection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An IEnumerator for the entire AppointmentCollection.

###  IndexOf

Searches for the specified Appointment and returns the zero-based index of the
            	first occurrence within the entire AppointmentCollection.

#### Parameters

#### appointment `Telerik.Web.UI.Appointment`

The Appointment to locate in the AppointmentCollection.

#### Returns

`System.Int32` The zero-based index of the first occurrence of value within the entire AppointmentCollection, if found; otherwise, -1.

###  ToArray

Copies the elements of the AppointmentCollection
            	to a new Appointment array.

#### Returns

`Telerik.Web.UI.Appointment[]` An Appointment array containing copies of the elements of the
            	AppointmentCollection.

