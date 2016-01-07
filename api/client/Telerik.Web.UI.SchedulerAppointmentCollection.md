---
title: Telerik.Web.UI.SchedulerAppointmentCollection
page_title: Client-side API Reference
description: Telerik.Web.UI.SchedulerAppointmentCollection
slug: Telerik.Web.UI.SchedulerAppointmentCollection
---

# Telerik.Web.UI.SchedulerAppointmentCollection  

## Inheritance Hierarchy

* *[Telerik.Web.UI.SchedulerAppointmentCollection]({%slug Telerik.Web.UI.SchedulerAppointmentCollection%})*

## Methods

###  add

Adds the specified appointment to the collection.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to add. 

#### Returns

`None` 

###  find

Returns the first appointments that satisfies the specified predicate. The appointment is passed as first argument of the predicate. If the predicate returns true the appointment is returned.

#### Parameters

##### predicate `Function`

 The function to execute for each appointment in the collection. For example function

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  An appointment that matches the predicate 

###  findAll

Returns a collection of appointments that satisfy the specified predicate. The appointment is passed as first argument of the predicate. If the predicate returns true the appointment is included in the result collection.

#### Parameters

##### predicate `Function`

 The function to execute for each appointment in the collection. For example function

#### Returns

`Telerik.Web.UI.SchedulerAppointmentCollection`  A collection of all appointments matching the predicate 

###  findByID

Gets the appointment with the specified ID.

#### Parameters

##### id `String`

 The ID of the appointment 

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  The appointment with the specified ID

###  findByResource

Gets the first appointment that contains the specified resource.

#### Parameters

##### value `Telerik.Web.UI.SchedulerResource`

 The resource for which to search for 

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  The first appointment that contains the specified appointment

###  forEach

Executes the specified function for each appointment in the collection. The appointment is passed as first argument to the function.

#### Parameters

##### lambda `Function`

 The function to execute for each appointment in the collection. For example function

#### Returns

`None` 

###  getAppointment

Gets the appointment at the specified index in the collection.

#### Parameters

##### index `Number`

 The index from which to retrieve the appointment 

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  The appointment at the specified index. 

###  getAppointmentsInRange

Gets a collection of all appointments in the specified range.

#### Parameters

##### start `Date`

 Range start 

##### end `Date`

 Range end 

#### Returns

`Telerik.Web.UI.SchedulerAppointmentCollection`  A collection of all appointments in the specified range 

###  getAppointmentsStartingInRange

Gets a collection of all appointments that start in the specified range.

#### Parameters

##### start `Date`

 Range start 

##### end `Date`

 Range end 

#### Returns

`Telerik.Web.UI.SchedulerAppointmentCollection`  A collection of all appointments that start in the specified range 

###  get_count

Gets the number of appointments in the collection.

#### Parameters

#### Returns

`Number`  The number of appointments in the collection. 

###  indexOf

Gets the index of the specified appointment in the collection. Returns -1 if the resource is not in the collection.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment for which to search in the collection 

#### Returns

`Number`  The index of the specified appointment in the collection

###  insert

Inserts the specified appointment at the specified index in the collection.

#### Parameters

##### index `Number`

 The index at which to insert the appointment 

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to add. 

#### Returns

`None` 

###  remove

Removes the specified appointment from the collection.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment instance to remove. 

##### deleteSeries `Boolean`

 For recurring appointments only. 	True if you want to delete the recurring series

#### Returns

`None` 

###  removeAt

Removes the appointment at the specified index from the collection.

#### Parameters

##### index `Number`

 The index from which to remove the appointment 

##### deleteSeries `Boolean`

 For recurring appointments only. 	True if you want to delete the recurring series

#### Returns

`None` 


