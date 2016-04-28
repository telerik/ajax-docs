---
title: Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs
slug: Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs
---

# Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs : Telerik.Web.UI.SchedulerAppointmentCancelEventArgs

## Inheritance Hierarchy

* [Telerik.Web.UI.SchedulerAppointmentCancelEventArgs]({%slug Telerik.Web.UI.SchedulerAppointmentCancelEventArgs%})
* *[Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs]({%slug Telerik.Web.UI.SchedulerRecurrenceActionDialogShowingEventArgs%})*


## Methods

### get_editSeries

Returns True if the user is trying to delete a series to which the appointment belongs, False if the user is trying to delete a single occurrence of an appointment.

#### Parameters

#### Returns

`Boolean`

### get_recurrenceAction

Returns 1 for edit, 2 for delete, 3 for resize, and 4 for move.

#### Parameters

#### Returns

`Number`

### set_editSeries

Instructs the scheduler whether to edit the entire series or just the occurrence.

#### Parameters

##### value `Boolean`

This value instructs the scheduler whether to edit the entire series or just the occurrence.

#### Returns

`None`

