---
title: Telerik.Web.UI.SchedulerAppointment
description: Telerik.Web.UI.SchedulerAppointment
slug: Telerik.Web.UI.SchedulerAppointment
---

# Telerik.Web.UI.SchedulerAppointment  

## Inheritance Hierarchy

* *[Telerik.Web.UI.SchedulerAppointment]({%slug Telerik.Web.UI.SchedulerAppointment%})*


## Methods

###  clone

Creates a shallow copy of this appointment.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  A shallow copy of this appointment. 

### edit

Switches the scheduler into edit mode for this appointment. Same as calling editAppointment() on the scheduler instance.

#### Parameters

#### Returns

`None` 

### get_allowDelete

Gets a value indicating if the appointment is deletable.

#### Parameters

#### Returns

`Boolean`  true if the appointment is deletable

### get_allowEdit

Gets a value indicating if the appointment is editable.

#### Parameters

#### Returns

`Boolean`  true if the appointment is editable

### get_attributes

Gets a collection of all attributes of the appointment.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerAttributeCollection`  Collection of all attributes of the appointment. 

### get_backColor

Gets the appointment background color.

#### Parameters

#### Returns

`String`  The appointment background color. 

### get_borderColor

Gets the appointment border color.

#### Parameters

#### Returns

`String`  The appointment border style. 

### get_borderStyle

Gets the appointment border style.

#### Parameters

#### Returns

`String`  The appointment border style. 

### get_borderWidth

Gets the appointment border width.

#### Parameters

#### Returns

`String`  The appointment border width. 

### get_contextMenuID

Gets the ID of the context menu associated with the appointment.

#### Parameters

#### Returns

`String`  The ID of the context menu associated with the appointment. 

### get_cssClass

Gets the appointment CSS class.

#### Parameters

#### Returns

`String`  The appointment CSS class. 

### get_description

Gets the appointment description.

#### Parameters

#### Returns

`String`  The appointment description. 

### get_duration

Gets the duration of the appointment in milliseconds.

#### Parameters

#### Returns

`Number`  The duration of the appointment in milliseconds. 

### get_durationInMinutes

Gets the duration of the appointment in minutes.

#### Parameters

#### Returns

`Number`  The duration of the appointment in minutes. 

### get_element

Gets the DOM element representing the appointment.

#### Parameters

#### Returns

`Element`  The DOM element representing the appointment. 

### get_elements

Gets the DOM elements representing the appointment. Appointments that span multiple days have multiple dom elements.

#### Parameters

#### Returns

`Element`  The DOM elements representing the appointment. 

### get_end

Gets the appointment end date.

#### Parameters

#### Returns

`Date`  The appointment end date. 

### get_id

Gets the unique ID of this Appointment.

#### Parameters

#### Returns

`String`  The unique ID of this Appointment. 

### get_internalID

Gets the encoded unique ID of this Appointment. This includes the value as well as the type of the ID.

#### Parameters

#### Returns

`String`  The encoded unique ID of this Appointment. 

### get_owner

Gets the owner scheduler.

#### Parameters

#### Returns

`Telerik.Web.UI.RadScheduler`  The owner scheduler. 

### get_recurrenceParentID

Gets the ID of the parent appointment if the current appointment is a recurrence exception.

#### Parameters

#### Returns

`String`  The ID of the parent appointment if the current appointment is a recurrence exception. 

### get_recurrenceRule

Gets the recurrence rule of this appointment.

#### Parameters

#### Returns

`Telerik.Web.UI.RecurrenceState`  The recurrence rule of the appointment. 

### get_recurrenceState

Gets the recurrence state of the appointment.

#### Parameters

#### Returns

`Telerik.Web.UI.RecurrenceState`  The recurrence state of the appointment as an enum value of type Telerik.Web.UI.RecurrenceState. 

### get_resources

Gets a collection of the appointment resources.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerResourceCollection`  Collection of the appointment resources. 

### get_start

Gets the appointment start date.

#### Parameters

#### Returns

`Date`  The appointment start date. 

### get_subject

Gets the appointment subject.

#### Parameters

#### Returns

`String`  The appointment subject. 

### get_timeSlot

Gets the time slot that the appointment is in.

#### Parameters

#### Returns

`Telerik.Web.UI.ISchedulerTimeSlot`  The time slot that the appointment is in. 

### get_toolTip

Gets the appointment tooltip.

#### Parameters

#### Returns

`String`  The appointment tooltip. 

### get_visible

Gets a value indicating if the appointment is currently visible.

#### Parameters

#### Returns

`Boolean`  true if the appointment is rendered

### remove

Deletes this appointment. Same as calling deleteAppointment() on the scheduler instance.

#### Parameters

#### Returns

`None` 

### set_allowDelete

Sets a value indicating if the appointment is deletable.

#### Parameters

##### value `Boolean`

 true if the appointment is deletable

#### Returns

`None` 

### set_allowEdit

Sets a value indicating if the appointment is editable.

#### Parameters

##### value `Boolean`

 true if the appointment is editable

#### Returns

`None` 

### set_backColor

Sets the appointment background color.

#### Parameters

##### color `String`

 The appointment background color. For example 

#### Returns

`None` 

### set_borderColor

Sets the appointment border color.

#### Parameters

##### color `String`

 The appointment border color. For example 

#### Returns

`None` 

### set_borderStyle

Sets the appointment border style.

#### Parameters

##### style `String`

 The appointment border style. For example 

#### Returns

`None` 

### set_borderWidth

Sets the appointment border width.

#### Parameters

##### color `String`

 The appointment border width. For example 

#### Returns

`None` 

### set_contextMenuID

Sets the ID of the context menu associated with the appointment.

#### Parameters

##### value `String`

 The ID of the context menu associated with the appointment. 

#### Returns

`None` 

### set_cssClass

Sets the appointment CSS class.

#### Parameters

##### value `String`

 The appointment CSS class. 

#### Returns

`None` 

### set_description

Sets the appointment description.

#### Parameters

##### value `String`

 The appointment description. 

#### Returns

`None` 

### set_end

Sets the appointment end date.

#### Parameters

##### value `Date`

 The appointment end date. 

#### Returns

`None` 

### set_recurrenceRule

Sets the recurrence rule of this appointment.

#### Parameters

##### value `String`

 the recurrence rule of this appointment. 

#### Returns

`None` 

### set_start

Sets the appointment start date.

#### Parameters

##### value `Date`

 The appointment start date. 

#### Returns

`None` 

### set_subject

Sets the appointment subject.

#### Parameters

##### value `String`

 The appointment subject. 

#### Returns

`None` 

### set_toolTip

Sets the appointment tooltip.

#### Parameters

##### value `String`

 The appointment tooltip. 

#### Returns

`None` 



