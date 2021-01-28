---
title: Changes and Backward Compatibility
page_title: Changes and Backward Compatibility - RadScheduler
description: Check our Web Forms article about Changes and Backward Compatibility.
slug: scheduler/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 2
---

# Changes and Backward Compatibility



## RadScheduler for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## RadScheduler for ASP.NET AJAX Q1 SP2 2010 (Version Number 2010.1.519)

* RadScheduler is fully backward compatible with its previous major version

## RadScheduler for ASP.NET AJAX Q3 SP1 2009 (Version Number 2009.3.1208)

* RadScheduler is fully backward compatible with its previous major version

## RadScheduler for ASP.NET AJAX Q3 2009 (Version Number 2009.3.1103)

Cumulative list of removed or obsoleted properties over the last few releases and their counterparts for Q3 2009 if applicable.

* SchedulerFormCreatingEventArgs.Time ->e.Appointment.Start or e.Appointment.End

* SchedulerNavigationCommandEventArgs.SelectedDay -> e.SelectedDate.Day

* SchedulerStrings.Insert -> Localization-Save

* SchedulerStrings.Update -> Localization-Save

* SchedulerStrings.AdvancedMoreDetails -> Localization-ShowAdvancedForm

* SchedulerStrings.AdvancedRecurringAppointment -> Localization-AdvancedRecurrence

* SchedulerStrings.AdvancedRange -> N/A

* SchedulerProviderBase.SupportsMultipleResourceValues ->Use ResourceType.AllowMultipleValues to indicate if a resource type supports multiple values

* RadScheduler.MonthVisibleAppointmentsPerDay -> MonthView-VisibleAppointmentsPerDay

* RadScheduler.ShowWeeklyColumnHeader -> WeekView-ShowDateHeaders

* RadScheduler.ShowMonthlyColumnHeader -> MonthView-ShowDateHeaders

* RadScheduler.DayHeaderDateFormat -> DayView-HeaderDateFormat

* RadScheduler.WeekHeaderDateFormat -> WeekView-HeaderDateFormat

* RadScheduler.MonthHeaderDateFormat -> MonthView-HeaderDateFormat

* RadScheduler.WeekColumnHeaderDateFormat -> WeekView-ColumnHeaderDateFormat

* RadScheduler.MonthColumnHeaderDateFormat -> MonthView-ColumnHeaderDateFormat

* RadScheduler.StartInFullTime -> ShowFullTime

* RecurrenceRange.MaxOccurences (misspelling) -> MaxOccurrences

* RecurrenceState.Occurence (misspelling) -> Occurrence

* SchedulerViewType.ResourceView -> N/A



## RadScheduler for ASP.NET AJAX Q2 2009 (Version Number 2009.2.701)

**Breaking change**:

Customized advanced templates will not be styled correctly due to rendering changes. Please, see this KB article - [https://www.telerik.com/support/kb/aspnet-ajax/scheduler/kb.aspx](https://www.telerik.com/support/kb/aspnet-ajax/scheduler/compatability-css-styles-for-q1-2-9-advanced-form-templates.aspx)

**Potentially breaking changes**:

* The Subject text box in the integrated advanced form is now of type RadTextBox (was TextBox)

* The custom attribute editing text boxes in the integrated advanced form are now of type RadTextBox (were TextBox)

## RadScheduler for ASP.NET AJAX Q1 2009

* Obsoleted SchedulerAppointmentResizeEndEventArgs.get_newTime() property; Use get_newEndTime() instead

* Obsoleted the showInsertFormAt(timeSlot) client-side method; Use showInlineInsertForm(timeSlot) instead

* Obsoleted the editAppointment(appointment, editSeries) client-side method; Use showInlineEditForm(appointment, editSeries) instead

* Changed the value of the "ShowAdvancedForm" localization sting to "Options" (was "options")

* The default value for MinimumInlineFormWidth is changed to 250 px (was 200 px)

* The default width of the row headers (hours column, resource headers) is now 52 px (was 100px). You can use the RowHeaderWidth to control it.

* The minimum selectable date in RadScheduler is changed from 1980 to 1900

* Breaking change (client-side): The ISchedulerTimeSlot.get_duration() now returns milliseconds instead of minutes. Use the new get_durationInMinutes() property to obtain the old behavior

* Facelift for Default and Vista skins which result in breaking changes for certain scenarios. Please, test before upgrading to the new version.

* **Default2006, Gray, Inox and SkyBlue** skins are discontinued -- we are recommending the new Default skin for anyone that might have used the obsolete skins.

* Updated jQuery to version 1.3

## RadScheduler for ASP.NET AJAX Q3 2008 (Version Number 2008.3.1105)

**What’s changed**:

* The buttons in the integrated advanced form are now named “InsertButton”, “UpdateButton” and “CancelButton”. Update the IDs if you are using FindControl to access them.

* The resource controls (CheckBoxLists and DropDowns) in the integrated advanced form now have a “Res” prefix. Update the IDs if you are using FindControl to access them.

* The css styling of the control is simplified. This may cause some css workarounds which depend on the previous rendering mechanism to malfunction.



## RadScheduler for ASP.NET AJAX Q1 2008 (Version Number 2008.1.415)

**Breaking changes**:

* The get_appointments client-side property of RadScheduler returns an AppointmentCollection instance instead of a JavaScript array- get_appointments().length => get_appointments().get_count()- get_appointments()[index] => get_appointments().getAppointment (index)

* Removed obsolete fields from client-side Appointment object- appointment.ID =>appointment.get_id();- appointment.Subject => appointment.get_subject();- appointment.Start => appointment.get_start();- appointment.End => appointment.get_end();- appointment.ToolTip =appointment.get_toolTip();

* The appointmentMoving event is now called while the appointment is being moved. To achieve the legacy behavior, please attach your event handlers to the appointmentMoveEnd event.

* The day order in the RecurrenceDay enum was changed to improve compatibility with Outlook. Sunday is now first day of week and the integer values are changed to reflect the new ordering.

**Non-breaking changes**:

* Obsoleted RadScheduler properties in favor of view-specific complex properties:- DayHeaderDateFormat => DayView.HeaderDateFormat- WeekHeaderDateFormat => WeekView.HeaderDateFormat- MonthHeaderDateFormat => MonthView.HeaderDateFormat- WeekColumnHeaderDateFormat => WeekView.ColumnHeaderDateFormat- MonthColumnHeaderDateFormat => MonthView. ColumnHeaderDateFormat- MonthVisibleAppointmentsPerDay => MonthView. VisibleAppointmentsPerDay

* ShowMonthlyColumnHeader is replaced by a pair of properties:- MonthView.ShowDateHeaders- MonthView.ShowResourceHeaders

* ShowWeeklyColumnHeader is replaced by a pair of properties:- WeekView.ShowDateHeaders- WeekView.ShowResourceHeaders

* Obsoleted ResourceView – use DayView grouped by resource instead.

* Obsoleted StartInFullTime – use ShowFullTime instead.

* In WeekView, the VisibleRangeStart and VisibleRangeEnd now include the whole period (not only business hours) when all day row is displayed.


