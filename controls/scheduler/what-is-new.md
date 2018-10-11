---
title: What is New
page_title: What is New | RadScheduler for ASP.NET AJAX Documentation
description: What is New
slug: scheduler/what-is-new
tags: what,is,new
published: False
position: 1
---

# What is New



## Q2 2010 release

Since Q2 2010 all new functionalities are listed in the control's Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## What's New in RadScheduler for ASP.NET AJAX Q1 SP1 2010 (Version Number: 2010.1.415)

* BackColor and BorderColor properties for [Resource Styles]({%slug scheduler/appearance-and-styling/setting-styles-for-appointments%})

* New RecurrenceEditor control for easier [Advanced Form customization]({%slug scheduler/how-to/customize-the-advanced-form-template%})

## What's New in RadScheduler for ASP.NET AJAX Q1 2010 (Version Number: 2010.1.309)

* Visual clues for non-visible appointments

* Advanced form/recurrence enhancements and improvements

* New optimized appointment rendering

* AppointmentStyle property - to choose between Simple and Standard style for colored appointments

## What's New in RadScheduler for ASP.NET AJAX Q3 SP1 2009 (Version Number: 2009.3.1208)

* New Skin - [Windows7]({%slug scheduler/appearance-and-styling/skins%})

* [Visual clue for non-visible appointments]({%slug scheduler/usability/navigating-radscheduler%})

* [Bug-fixes](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q3-2009-sp1-version-2009-3-1208.aspx)



## What's New in RadScheduler for ASP.NET AJAX Q3 2009 (Version Number: 2009.3.1103)

* Integrated [context menus]({%slug scheduler/context-menus/appointment-context-menu%}) for appointments and time slots.

* New Skin - [Sitefinity]({%slug scheduler/appearance-and-styling/skins%})

* New description field which can be enabled by setting the **DataDescriptionField** property or, when using a provider,setting **EnableDescriptionField** to true. ![description field](images/scheduler_descriptionfield.png)



* New **Localization strings** for the Context Menu default items – ContextMenuEdit, ContextMenuDelete,ContextMenuAddAppointment, ContextMenuAddRecurringAppointment, ContextMenuGoToToday



## What's New in RadScheduler for ASP.NET AJAX Q2 SP1 2009(Version Number 2009.2.826)

* New Appointment property:

* BackColor

* BorderColor

* BorderStyle

* BorderWidth

* New Appointment client-side properties:

* set_backColor

* set_borderColor

* set_borderWidth

* New property to the client-side formCreated event arguments:

* get_mode()

* New RadScheduler client-side method:

* rebind() - Reloads the appointments when using Web Service data binding

* The AppointmentCollection now has a public constructor that allows you to manually populate it with appointments

* RadScheduler will now include detailed server response when a call to GetResources fails and the ResourcePopulationMode is set to ServerSide



## What's New in RadScheduler for ASP.NET AJAX Q22009 (Version Number 2009.2.701)

* New properties:

* AdvancedForm-Width

* AdvancedForm-MaximumHeight to control the size of the modal advanced form

* New client-side property:

* RadScheduler.get_resourceTypes

* New localization strings for the advanced form title bar:

* AdvancedNewAppointment ("New Appointment")

* AdvancedEditAppointment ("Edit Appointment")

* AdvancedClose ("Close")

* New localization key for the advanced form:

* AdvancedSubject ("Subject"); Replaces AdvancedDescription which will remain for future use

* The advanced pop-up form can now be opened as a popup and can be moved/dragged

* Introduced two new client-side methods:

* deleteAppointmentWithConfirmation(appointment)

* editAppointmentWithConfirmation(appointment). Use them to display the standard RadScheduler confirmation dialogs when editing and deleting appointments.

* New client-side event: OnClientAppointmentSerialized; Allows you to populate appointments with custom data before sending them to the Web Service

* New event: OccurrenceDelete that is raised when a single occurrence is deleted, but no exception is created in its place

* New localization strings for the advanced form title bar:

* AdvancedNewAppointment ("New Appointment")

* AdvancedEditAppointment ("Edit Appointment")

* Moved advanced form related properties to the AdvancedForm nested property - EnableAdvancedForm, EnableResourceEditing,EnableCustomAttributeEditing, EditFormDateFormat, EditFormTimeFormat. The old properties have been obsoleted.

## What's New in RadScheduler for ASP.NET AJAX Q1SP2 2009 (Version Number 2009.1.527)

* Implemented support for custom appointment classes

* Implemented ResourceCollection.getResourceByType

* Implemented ResourceStyles support when using web service data binding

* New client-side property: get_height / set_height

* New property: WebServiceAppointmentController.AppointmentFactory; Allows you to work with custom appointment classes whenusing web service data binding

* New client-side appointment property: cssClass; Sets the appointment CSS class

* The web service methods can now return additional information alongside the appointments

## What's New in RadScheduler for ASP.NET AJAX Q1SP1 2009(Version Number 2009.1.402)

* New property - TimelineView.**ShowInsertArea**. Controls whether to show the empty area at the end of each timeslot that can be used to insert appointments.

* Resource-grouped week and day views are now supported when using Web Service data binding

* "Show 24 Hours" link is now fully functional when using Web Service data binding

* Improved drag-and-drop behavior for long appointments



## What's New in RadScheduler for ASP.NET AJAX Q1 2009

## Client-side binding to Web Services

* Add **get_endTime** property to the client-side [time slot objects]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})

* Add **get_targetSlot** property to the client-side [AppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%}) event arguments.

* Added new RadScheduler client-side method - **showAdvancedEditForm(appointment, editSeries)**

* Added new RadScheduler client-side method - **showAllDayAdvancedInsertForm(date)**

* Added new RadScheduler client-side method - **showAdvancedInsertForm(date)**

* Added new RadScheduler client-side method - **showAllDayInlineInsertForm(date)**

* Added **get_domEvent** property to AppointmentClickEventArgs (client-side)

* XMLScheduler provider now supports resource attributes

* New property: **Resource.CssClass** - used to specify the cascading style sheet (CSS) class rendered for appointments that use this resource.

* New property: **RadScheduler.ResourceStyles -** can be used to declaratively apply CSS styles to appointments that contain specific resources.A number of predefined styles are provided to aid common scenarios.

* New property: **MonthView.DayHeaderDateFormat -** allows you to control the format of the day headers in month view

* New property: **MonthView.FirstDayHeaderDateFormat -** controls the format of the header for the first day of each month

* New client events: [OnClientAppointmentsPopulating]({%slug scheduler/client-side-programming/events/onclientappointmentspopulating%}),[OnClientAppointmentsPopulated]({%slug scheduler/client-side-programming/events/onclientappointmentspopulated%}), [OnClientAppointmentDataBound]({%slug scheduler/client-side-programming/events/onclientappointmentdatabound%}),[OnClientAppointmentCreated]({%slug scheduler/client-side-programming/events/onclientappointmentcreated%}), [OnClientResourcesPopulating]({%slug scheduler/client-side-programming/events/onclientresourcespopulating%}),[OnClientResourcesPopulated]({%slug scheduler/client-side-programming/events/onclientresourcespopulated%}), [OnClientDataBound]({%slug scheduler/client-side-programming/events/onclientdatabound%}),[OnClientRequestFailed]({%slug scheduler/client-side-programming/events/onclientrequestfailed%}), [OnClientAppointmentWebServiceInserting]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceinserting%}), [OnClientAppointmentWebServiceDeleting]({%slug scheduler/client-side-programming/events/onclientappointmentwebservicedeleting%}), [OnClientAppointmentWebServiceUpdating]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceupdating%}),[OnClientRecurrenceExceptionCreating]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptioncreating%}), [OnClientRecurrenceExceptionsRemoving]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptionsremoving%})

## What's New in RadScheduler for ASP.NET AJAX Q3 SP2 2008 (Version Number 2008.3.1314)

* New property: MonthViewSettings.MinimumRowHeight; Specifies the the minimum row height in month view.

* Appointments in the all-day area and in Timeline view are now sorted using the set AppointmentComparer.

* RadScheduler now handles yearly recurrence rules more efficiently.

## What's New in RadScheduler for ASP.NET AJAX Q3 SP1 2008 (Version Number 2008.3.1125)

* Month view: Appointments that span multiple days are now rendered as a single element, when applicable.

* New property: MonthView. AdaptiveRowHeight - By default, all rows are rendered with the same height. Setting this property to “false” will change this behavior,so the height of each row will match the height of its content. Not implemented for grouped month views in this release.

* New property: TimelineView.TimeLabelRowSpan. Normally, a time label is rendered for each slot. This property allows you to have only one time label per the given number of time slots.

## What's New in RadScheduler for ASP.NET AJAX Q3 2008 (Version Number 2008.3.1105)

* [Horizontal scroll]({%slug scheduler/appearance-and-styling/horizontal-scrolling%}) in all views. Use the new **ColumnWidth** property to enable it.

* Reduced markup size.

* Skins now use sprites to reduce the number of requests to the server.

* Design tweaks to all skins.

* Improved Inline Form. It is now with [resizable]({%slug scheduler/appearance-and-styling/inline-form-resizing%}) and will maintain the minimum size specified by the**MinimumInlineFormHeight** and **MinimumInlineFormWidth** properties. Opening it no longer requires postback, instead it is rendered on theclient (disabled when using Templates).

* Improved Advanced Form. Changes include validated inputs, animations, design tweaks and smaller script size. Both the integrated and the sample Forms are updated.

* Appointment resizing is now possible in Timeline View (not applicable in Timeline View grouped by date).

* Better resizing in vertically grouped Week Views (resource boundaries are now honored).

* New **SchedulerAppointment** property (client-side) - **get_duration()**. Gets the duration of the Appointment in milliseconds.

* New properties - **ColumnWidth** and **RowHeight**. Used to control the Width of Columns and the Height of Rows in allViews except Month View.

* New properties - **Appointment.DataItem** and **Resource.DataItem**. Each holds a reference to the data item used toconstruct the particular Appointment/Resource. Available only during data binding.

* New property - **ValidationGroup**. Used by the integrated validators.

* New property - **VisualTimeZoneOffset**. Used by RadScheduler for determining today’s date, in cases when the server and the clients are indifferent time zones. The property does not affect the stored data in any way. This property is ignored when **TimeZoneOffset** is set.

* New property - **EnableRecurrenceSupport**. Can be used to disable recurrence support when using custom providers. When binding to a datasource, setting **DataRecurrenceField** and **DataRecurrenceParentKeyField** to empty string also disables it.

* New **TimelineView**property - **ColumnHeaderDateFormat**. Controls the date format of the column headers in Timeline View.

* New **ISchedulerTimeSlot** property - **Control**. This is a reference to the rendered control (typically a**TableCell**) that represents this time slot.

* New **ISchedulerTimeSlot** property - **Resource** (available in the grouped views).

* New event: **ResourceHeaderCreated** now complements the Resource Header templates.

* New localization string: **“Save”**; Replaces **“Insert”** and **“Update”**.

* The options button is no longer rendered in the Inline Form when **EnableAdvancedForm** is **false**.

* The Templates used in the "Customizing the Advanced Form" Example are now available in Visual Basic.NET.

## What's New in RadScheduler for ASP.NET AJAX Q2 (Version Number 2008.2.723)

* [Exchange Provider]({%slug scheduler/data-binding/providers/exchange-provider%}) support - a provider that uses Exchange Web Services over HTTP/HTTPS as means to communicate with an Exchange server.

* [RadScheduler client-side API]({%slug scheduler/client-side-programming/properties-and-methods/radscheduler-object%}) enhancements - several methods which simulate user actions and trigger server-side events:

* showInsertFormAt()

* insertAppointment()

* updateAppointment()

* editAppointment()

* deleteAppointment()

## What's New in RadScheduler for ASP.NET AJAX Q2 Futures Preview (Version Number 2008.1.708)

* A *reference* implementation of an [Exchange Provider]({%slug scheduler/data-binding/providers/exchange-provider%}) - a provider that usesExchange Web Services over HTTP/HTTPS as means to communicate with an Exchange server.

>caution This preliminary version of the Exchange provider is suitable only for testing purposes. The implementation details are subject to change.
>


>tip  **Limitations of the Futures version:** 
>
* Creating recurring appointments is not supported.
* Recurrence exceptions are not associated with the recurrence series.
* Time zone information is not parsed (affects recurring and all-day appointments in certain cases).>


# See Also

 * [Changes and Backward Compatibility]({%slug scheduler/changes-and-backward-compatibility%})
