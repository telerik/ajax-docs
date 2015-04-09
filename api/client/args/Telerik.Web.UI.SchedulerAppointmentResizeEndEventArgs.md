---
title: Telerik.Web.UI.SchedulerAppointmentResizeEndEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.SchedulerAppointmentResizeEndEventArgs : Telerik.Web.UI.SchedulerAppointmentCancelEventArgs

## Methods

### get_newStartTime

Returns the new start time of the appointment if user has resized the upper part of the appointment - the appointment start time.

#### Parameters

#### Returns

`Date`

### get_targetSlot

Returns the instance of the time slot that the appointment has been resized to.

#### Parameters

#### Returns

`Telerik.Web.UI.ISchedulerTimeSlot`

### get_newEndTime

Returns the new end time of the appointment if user has resized the bottom part of the appointment - the appointment end time.

#### Parameters

#### Returns

`Date`

### get_editingRecurringSeries

Returns True if the user is trying to delete a series to which the appointment belongs, False if the user is trying to delete a single occurrence of an appointment.

#### Parameters

#### Returns

`Boolean`