---
title: Telerik.Web.UI.SchedulerFormCreatedEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.SchedulerFormCreatedEventArgs
---

# Telerik.Web.UI.SchedulerFormCreatedEventArgs : Telerik.Web.UI.AppointmentEventArgs

## Inheritance Hierarchy

* [Telerik.Web.UI.AppointmentEventArgs]({%slug Telerik.Web.UI.AppointmentEventArgs%})
* *[Telerik.Web.UI.SchedulerFormCreatedEventArgs]({%slug Telerik.Web.UI.SchedulerFormCreatedEventArgs%})*

## Methods

### get_formElement

Returns a reference to the form DOM element.

#### Parameters

#### Returns

`Element`

### get_mode

Returns an Enum of type Telerik.Web.UI.SchedulerFormMode.

#### Parameters

#### Returns

`Number`

### get_editingRecurringSeries

Returns True if the user is trying to delete a series to which the appointment belongs, False if the user is trying to delete a single occurrence of an appointment.

#### Parameters

#### Returns

`Boolean`