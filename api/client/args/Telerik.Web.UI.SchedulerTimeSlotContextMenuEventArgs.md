---
title: Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs
---

# Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs : Sys.EventArgs

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs]({%slug Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs%})*

## Methods

### get_time

Returns the time on which the user right-clicks in the Time Slot in Day View; returns Day Start Time in Week View.

#### Parameters

#### Returns

`Date`

### get_targetSlot

Returns the instance of the time slot that the appointment has been resized to.

#### Parameters

#### Returns

`Telerik.Web.UI.ISchedulerTimeSlot`

### get_isAllDay

Returns True if the Time Slot is the 'All Day' slot (Day and Week View only) or False if the Time Slot is a regular one. 

#### Parameters

#### Returns

`Boolean`

###  get_domEvent

returns a reference to the DOM event that caused the opening.

#### Parameters

#### Returns

`Sys.UI.DomEvent`