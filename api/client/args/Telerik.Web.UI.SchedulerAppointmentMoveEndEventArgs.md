---
title: Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs
title_prefix: Client-side API Reference
description: Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs
slug: Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs
---

# Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs : Telerik.Web.UI.SchedulerAppointmentCancelEventArgs

## Inheritance Hierarchy

* [Telerik.Web.UI.SchedulerAppointmentCancelEventArgs]({%slug Telerik.Web.UI.SchedulerAppointmentCancelEventArgs%})
* *[Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs]({%slug Telerik.Web.UI.SchedulerAppointmentMoveEndEventArgs%})*


## Methods

### get_editingRecurringSeries

Returns True if the user is trying to delete a series to which the appointment belongs, False if the user is trying to delete a single occurrence of an appointment.

#### Parameters

#### Returns

`Boolean`
### get_newEndTime

Returns the new end time of the appointment if user has resized the bottom part of the appointment - the appointment end time.

#### Parameters

#### Returns

`Date`

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


