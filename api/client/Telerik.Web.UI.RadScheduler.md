---
title: Telerik.Web.UI.RadScheduler
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadScheduler
slug: Telerik.Web.UI.RadScheduler
---

# Telerik.Web.UI.RadScheduler : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadScheduler]({%slug Telerik.Web.UI.RadScheduler%})*


## Methods

###  deleteAppointment

Deletes the specified Appointment. Postbacks if not bound to a web service.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to delete. 

##### deleteSeries `Boolean`

 For recurring appointments only. 	True if you want to delete the recurring series

#### Returns

`None` 

### deleteAppointmentWithConfirmation

Deletes the specified Appointment. This method is identical to deleteAppointment, but the user is presented with a confirmation dialog if the deleted appointment is recurring.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to delete. 

#### Returns

`None` 

### displayToUtc

Converts a date time object from client date format to UTC using the timeZoneOffset property.

#### Parameters

##### displayDate `Date`

 The date to convert. 

#### Returns

`Date`  The date in UTC format which corresponds to the supplied client format date. 

### editAppointment

Starts editing the specified Appointment.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to edit. 

##### editSeries `Boolean`

 For recurring appointments only. 	True if you want to edit the recurring series

#### Returns

`None` 

### editAppointmentWithConfirmation

Starts editing the specified Appointment. This method is identical to editAppointment, but the user is presented with a confirmation dialog if the edited appointment is recurring.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to edit. 

#### Returns

`None` 

### get_activeModel

Gets the model that represents the current view. The model is responsible for mapping time slots to DOM elements and appointments to time slots.

#### Parameters

#### Returns

`Telerik.Web.UI.ISchedulerModel`  The model that represents the current view. 

### get_allowDelete

Gets a value indicating if the appointments can be deleted.

#### Parameters

#### Returns

`Boolean`  true if the appointment deleting is allowed

### get_allowEdit

Gets a value indicating if the appointments can be edited. This includes moving and resizing.

#### Parameters

#### Returns

`Boolean`  true if the appointment editing is allowed

### get_allowInsert

Gets a value indicating if the appointments can be inserted.

#### Parameters

#### Returns

`Boolean`  true if the appointment inserting is allowed

### get_appointments

Gets a collection of all loaded appointments.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerAppointmentCollection`  Collection of all loaded appointments. 

### get_attributes

Gets a collection of all attributes of the scheduler.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerAttributeCollection`  Collection of all attributes of the scheduler. 

### get_currentAppointment

Gets the currently edited appointment.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  The currently edited appointment. Null if no appointment is edited at the moment. 

### get_displayDeleteConfirmation

Gets a value indicating whether a delete confirmation dialog should be displayed when the user clicks the "delete" button of an appointment.

#### Parameters

#### Returns

`Boolean`  true if the confirmation dialog should be displayed

### get_displayRecurrenceActionDialogOnMove

Gets a value indicating whether a recurrence action dialog should be displayed when moving recurrent appointments.

#### Parameters

#### Returns

`Boolean`  true if the confirmation dialog should be displayed

### get_durationBetweenTimeSlots

Gets the duration between two timeslots (including their own duration).

#### Parameters

##### startSlot `Telerik.Web.UI.ISchedulerTimeSlot`

 The first slot 

##### endSlot `Telerik.Web.UI.ISchedulerTimeSlot`

 The last slot 

#### Returns

`Number`  The duration between two timeslots in milliseconds. 

### get_durationOfSelectedArea

Gets the duration of the area formed by the selected time slots.

#### Parameters

#### Returns

`Number`  The sum of the durations of the selected time slots as milliseconds. 

### get_firstDayStart

Gets the start date of the current view. In day view, this is the start of the visible day.

#### Parameters

#### Returns

`Date`  The start date of the current view. 

### get_groupBy

Gets the name of the resource to group by. Can also be in the format "Date,[Resource Name]" when grouping by date.

#### Parameters

#### Returns

`String`  The name of the resource to group by. 

### get_height

Gets the height of RadScheduler.

#### Parameters

#### Returns

`String`  The height of RadScheduler. 

### get_hoursPanelTimeFormat

Gets the hours panel time format string.

#### Parameters

#### Returns

`String`  The hours panel time format string. 

### get_minimumInlineFormHeight

Gets the minimum height of the inline insert/edit template in pixels.

#### Parameters

#### Returns

`Number`  The minimum height of the inline insert

### get_minimumInlineFormWidth

Gets the minimum width of the inline insert/edit template in pixels.

#### Parameters

#### Returns

`Number`  The minimum width of the inline insert

### get_minutesPerRow

Gets the number of minutes which a single row represents.

#### Parameters

#### Returns

`Number`  The number of minutes which a single row represents. 

### get_numberOfHoveredRows

Gets the number of rows that are hovered when the mouse is over the appointment area.

#### Parameters

#### Returns

`Number`  The number of rows that are hovered when the mouse is over the appointment area. 

### get_readOnly

Gets a value indicating whether RadScheduler is in read-only mode.

#### Parameters

#### Returns

`Boolean`  true if the scheduler is read

### get_resources

Gets a collection of all loaded resources.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerResourceCollection`  Collection of all loaded resources. 

### get_resourceStyles

Gets a collection of all loaded resource style mappings.

#### Parameters

#### Returns

`Telerik.Web.UI.ResourceStyleMappingCollection`  Collection of all loaded resource style mappings. 

### get_resourceTypes

Gets a collection of all loaded resource types.

#### Parameters

#### Returns

`Telerik.Web.UI.ResourceTypeCollection`  Collection of all loaded resource types. 

### get_rowHeight

Gets the height of RadScheduler rows.

#### Parameters

#### Returns

`String`  The height of RadScheduler rows. 

### get_selectedDate

Gets the currently selected date.

#### Parameters

#### Returns

`Date`  the currently selected date. 

### get_selectedSlots

Gets the currently selected time slots.

#### Parameters

#### Returns

`Array`  the currently selected time slots. 

### get_selectedView

Gets the type of the currently selected view.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerViewType`  The currently selected view. 

### get_showFullTime

Gets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.

#### Parameters

#### Returns

`Boolean`  true if showing the complete day 

### get_timeLabelRowSpan

Gets the number of rows each time label spans.

#### Parameters

#### Returns

`Number`  The number of rows each time label spans. 

### get_webServiceSettings

The web service to be used for binding this instance of RadScheduler.

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerWebServiceSettings`  The web service to be used for binding this instance of RadScheduler. 

### getAppointmentFromDomElement

Gets the appointment that corresponds to the specified DOM element.

#### Parameters

##### element `Element`

 The appointment DOM element 

#### Returns

`Telerik.Web.UI.SchedulerAppointment`  The corresponding appointment. Null if the element does not belong to an appointment. 

### hideAdvancedForm

Hides the currently shown modal advanced form.

#### Parameters

#### Returns

`None` 

### hideInlineForm

Hides the currently shown inline form.

#### Parameters

#### Returns

`None` 

### insertAppointment

Stores the specified Appointment. Postbacks if not bound to a web service.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to insert. 

#### Returns

`None` 

### prepareToEdit

Prepares the specified appointment for editing. If the specified appointment is not recurring, the method does nothing and returns the same appointment. If the appointment is recurring and editSeries is set to true the method returns the recurrence parent. Otherwise, the method clones the appointment and updates it state to recurrence exception.

#### Parameters

##### appointmentToEdit `Telerik.Web.UI.SchedulerAppointment`

 The appointment to prepare for editing. 

##### editSeries `Boolean`

 	True if you want to edit the recurring series

#### Returns

`None` 

### rebind

Web Service binding only. Rebinds the scheduler from the web service.

#### Parameters

#### Returns

`None` 

### removeRecurrenceExceptions

Web Service binding only. Removes the associated recurrence exceptions.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The master appointment for the recurrence series. 

#### Returns

`None` 

### repaint

Updates the control layout. Call this function after changing the size of the control.

#### Parameters

#### Returns

`None` 

### set_allowDelete

Sets a value indicating if the appointments can be deleted.

#### Parameters

##### allowDelete `Boolean`

 true if the appointment deleting is allowed

#### Returns

`None` 

### set_allowEdit

Sets a value indicating if the appointments can be edited.

#### Parameters

##### allowEdit `Boolean`

 true if the appointment editing is allowed

#### Returns

`None` 

### set_allowInsert

Sets a value indicating if the appointments can be inserted.

#### Parameters

##### allowDelete `Boolean`

 true if the appointment inserting is allowed

#### Returns

`None` 

### set_displayDeleteConfirmation

Sets a value indicating whether a delete confirmation dialog should be displayed when the user clicks the "delete" button of an appointment.

#### Parameters

##### displayDeleteConfirmation `Boolean`

 true if the confirmation dialog should be displayed

#### Returns

`None` 

### set_displayRecurrenceActionDialogOnMove

Sets a value indicating whether a recurrence action dialog should be displayed when moving recurrent appointments.

#### Parameters

##### displayDeleteConfirmation `Boolean`

 true if the confirmation dialog should be displayed

#### Returns

`None` 

### set_height

Sets the height of RadScheduler.

#### Parameters

##### value `String`

 The height of RadScheduler. 

#### Returns

`None` 

### set_minimumInlineFormHeight

Sets the minimum height of the inline insert/edit template in pixels.

#### Parameters

##### value `Number`

 The minimum height of the inline insert

#### Returns

`None` 

### set_minimumInlineFormWidth

Sets the minimum width of the inline insert/edit template in pixels.

#### Parameters

##### value `Number`

 The minimum width of the inline insert

#### Returns

`None` 

### set_numberOfHoveredRows

Sets the number of rows that are hovered when the mouse is over the appointment area.

#### Parameters

##### value `Number`

 The number of rows that are hovered when the mouse is over the appointment area. 

#### Returns

`None` 

### set_readOnly

Sets a value indicating whether RadScheduler is in read-only mode.

#### Parameters

##### readOnly `Boolean`

 true if the scheduler is read

#### Returns

`None` 

### set_selectedDate

Web Service binding only. Sets the currently selected date.

#### Parameters

##### value `Date`

 The currently selected date. 

#### Returns

`None` 

### set_selectedView

Web Service binding only. Sets the currently selected view type.

#### Parameters

##### selectedView `Telerik.Web.UI.SchedulerViewType`

 The view to switch to. 

#### Returns

`None` 

### set_showFullTime

Web Service binding only. Sets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.

#### Parameters

##### value `Boolean`

 true if showing the complete day 

#### Returns

`None` 

### showAdvancedEditForm

Shows the advanced edit form populated with the specified appointment.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to edit. 

##### editSeries `Boolean`

 For recurring appointments only. 	True if you want to edit the recurring series

#### Returns

`None` 

### showAdvancedInsertForm

Shows the advanced insert form populated with the specified appointment start date.

#### Parameters

##### startDate `Date`

 The start date for the appointment. 

#### Returns

`None` 

### showAllDayAdvancedInsertForm

Shows the advanced insert form populated with the specified appointment start date. The appointment will be initially marked as all-day.

#### Parameters

##### startDate `Date`

 The start date for the appointment. 

#### Returns

`None` 

### showAllDayInlineInsertForm

Shows the in-line insert form for an all-day appointment on the specified date. Applicable in Day/Week/MultiDay view.

#### Parameters

##### date `Date`

 The day for which to show the insert form. 

#### Returns

`None` 

### showInlineEditForm

Shows the in-line edit form for the specified appointment. A postback will occur if a custom InlineEditTemplate is in use.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to edit. 

##### editSeries `Boolean`

 For recurring appointments only. 	true if you want to edit the recurring series

#### Returns

`None` 

### showInlineInsertForm

Shows the in-line insert form at the specified time slot. The formCreating client-side event will be fired. A postback will occur if a custom InlineInsertTemplate is in use.

#### Parameters

##### timeSlot `Telerik.Web.UI.ISchedulerTimeSlot`

 The time slot in which to place the insert form. 

#### Returns

`None` 

### updateAppointment

Updates the specified Appointment. Postbacks if not bound to a web service.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment to update. 

##### editSeries `Boolean`

 	True if you want to edit the recurring series

#### Returns

`None` 

### utcToDisplay

Converts a date time object from UTC to client date format using the timeZoneOffset property.

#### Parameters

##### utcDate `Date`

 The date to convert. 

#### Returns

`Date`  The date in client format which corresponds to the supplied UTC date. 


## Events

### appointmentsPopulating

This event is  fired when the scheduler is about to request appointments.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerWebServiceEventArgs`

The event arguments.

### appointmentMoving

This event is fired as the user is moving an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentMovingEventArgs`

The event arguments.

### recurrenceActionDialogShowing

This event is fired just before the dialog appears to ask whether the change the user just started on a recurring appointment is to affect the appointment itself or the entire series. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs`

The event arguments.

### navigationComplete

This event is fired when a navigation command has been completed.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.Scheduler.NavigationCommandEventArgs`

The event arguments.  

### recurrenceExceptionCreating

This event is fired when a recurrence exception is about to be created via Web Service call. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerRecurrenceExceptionCreatingEventArgs`

The event arguments.

### requestFailed

This event is fired when a request to the Web Service has failed.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerRequestFailedEventArgs`

The event arguments.

### requestSuccess

This event is fired when a request to the Web Service has succeeded.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.Scheduler.RequestSuccessEventArgs`

The event arguments.

### appointmentWebServiceDeleting

This event is fired when an appointment is about to be deleted via Web Service call. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentWebServiceDeleting`

The event arguments.  

### appointmentCreated

This event is fired when an appointment is received and has been rendered

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.AppointmentEventArgs`

The event arguments.  

### appointmentDataBound

This event is fired when an appointment is received and is about to be rendered. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.Scheduler.AppointmentDataBoundEventArgs`

The event arguments.

### reminderDismissing

This event is fired when an appointment reminder is due and is about to be dismissed.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerReminderDismissingEventArgs`

The event arguments.


### reminderSnoozing

This event is fired when an appointment reminder is due and is about to be snoozed.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerReminderSnoozingEventArgs`

The event arguments.

### reminderTriggering

This event is fired when an appointment reminder is due and is about to be triggered.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerReminderTriggeringEventArgs`

The event arguments.

### formCreated

This event is fired when an in-line editor or edit form is about to appear.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerFormCreatedEventArgs`

The event arguments.

### appointmentDeleting

This event is fired when appointment is about to be deleted. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentDeletingEventArgs`

The event arguments.  

### appointmentEditing

This event is fired when appointment is about to be edited.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentEditingEventArgs`

The event arguments.  

### appointmentWebServiceInserting

This event is fired when appointment is about to be inserted via Web Service call.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentWebServiceInserting`

The event arguments.  

### appointmentInserting

This event is fired when appointment is about to be inserted.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentInsertingEventArgs`

The event arguments.  

### appointmentWebServiceUpdating

This event is fired when appointment is about to be updated via Web Service call.

#### Event Data

##### sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentWebServiceUpdating`

The event arguments.  

### recurrenceExceptionsRemoving

This event is fired when recurrence exceptions are about to be removed via Web Service call. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerRecurrenceExceptionRemovingEventArgs`

The event arguments.

### recurrenceActionDialogClosed

This event is fired when the dialog that asks whether a change affects a single occurrence or an entire series closes. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerRecurrenceActionDialogClosedEventArgs`

The event arguments.  

### dataBound

This event is fired when the scheduler has been populated with data.

#### Event Data

##### sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Sys.EventArgs`

### appointmentsPopulated

This event is fired when the scheduler has received appointments from the Web Service.

#### Event Data

##### sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Sys.EventArgs`

Empty event args.

### resourcesPopulated

This event is fired when the scheduler has received resources.

#### Event Data

##### sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Sys.EventArgs`

### navigationCommand

This event is fired when the scheduler is about to execute a navigation command.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.Scheduler.NavigationCommandEventArgs`

The event arguments.

### resourcesPopulating

This event is fired when the scheduler is about to request resources.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerWebServiceEventArgs`

The event arguments.  

### appointmentClick

This event is fired when the user clicks an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentClickEventArgs`

The event arguments.  

### timeSlotClick

This event is fired when the user clicks on a time slot in the scheduler.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerTimeSlotClickEventArgs`

The event arguments.

### appointmentDoubleClick

This event is fired when the user double-clicks an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentDoubleClickEventArgs`

The event arguments.  

### appointmentResizing

This event is fired when the user moves the mouse while resizing an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentResizingEventArgs`

The event arguments.

### appointmentResizeEnd

This event is fired when the user releases the mouse after resizing an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentResizeEndEventArgs`

The event arguments.

### timeSlotContextMenu

This event is fired when the user right-clicks on a time slot in the scheduler.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs`

The event arguments.

### appointmentContextMenu

This event is fired when the user right-clicks on an appointment

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentContextMenuEventArgs`

The event arguments.  

### appointmentResizeStart

This event is fired when the user starts resizing an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentResizeStartEventArgs`

The event arguments.

### appointmentMoveStart

This event is fired when the user starts to move an appointment.

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentMoveStartEventArgs`

The event arguments.

### appointmentMoveEnd

This event is fired when the user stops moving an appointment. 

#### Event Data

#####  sender `Telerik.Web.UI.RadScheduler`

The instance of the RadScheduler raised the event.

##### args `Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs`

The event arguments.  


