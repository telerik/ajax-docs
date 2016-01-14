---
title: Telerik.Web.UI.RadScheduler
page_title: Telerik.Web.UI.RadScheduler
description: Telerik.Web.UI.RadScheduler
---

# Telerik.Web.UI.RadScheduler

Using the Telerik RadScheduler control, you can build powerful ASP.NET 
            applications to allow users to create and manage tasks. RadScheduler displays
            and edits scheduled appointments that are stored in a separate data source. A variety
            of data binding options allows you to work with data sources that 
            are as simple or as powerful as you want.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadScheduler : IAppointmentFactory, ICallbackEventHandler, INamingContainer, IPostBackEventHandler

## Properties

###  AdvancedEditTemplate `ITemplate`

Gets or sets the advanced edit template.

###  AdvancedForm `AdvancedFormSettings`

Gets the Advanced form settings.

###  AdvancedInsertTemplate `ITemplate`

Gets or sets the advanced insert template.

###  AgendaView `AgendaViewSettings`

###  AllowDelete `Boolean`

Gets or sets a value indicating whether appointments deleting is allowed.

###  AllowEdit `Boolean`

Gets or sets a value indicating whether appointments editing is allowed.

###  AllowInsert `Boolean`

Gets or sets a value indicating whether appointments inserting is allowed.

###  AppointmentComparer `IComparer`1`

Gets or sets the comparer instance used to determine the appointment ordering within the same slot.
            By default, appointments are ordered by start time and duration.

###  AppointmentContextMenus `RadSchedulerContextMenuCollection`

Gets a collection of RadSchedulerContextMenu objects
            	that represent the Appointment context menus of the RadScheduler control.

#### Remarks
By default, if the AppointmentContextMenus collection contains RadSchedulerContextMenus,
            	the first one is displayed on the right-click of each Appointment. 
                To specify a different context menu for a Appointment, use its
            	ContextMenuID property.

###  AppointmentContextMenuSettings `ContextMenuSettings`

Gets the appointment context menu settings.

###  AppointmentFactory `IAppointmentFactory`

A factory for appointment instances.

#### Remarks
The default factory returns instances of the
            	Appointment class.
            
            	RadScheduler needs to create appointment instances in various
            	stages of the control life cycle. You can use custom appointment
            	classes by either implementing an IAppointmentFactory or by overriding
            	the CreateAppointment method.

###  Appointments `AppointmentCollection`

Gets a collection of Appointment objects that represent individual
                appointments in the RadScheduler control.

###  AppointmentStyleMode `AppointmentStyleMode`

Defines the styling mode for appointments.

###  AppointmentTemplate `ITemplate`

Gets or sets the appointment template.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ColumnWidth `Unit`

Gets or sets the width of each content column.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  CustomAttributeNames `String[]`

Specifies the database fields (column names) which should be loaded as appointment attributes.

#### Remarks
You should use the CustomAttributeNames property when you want RadScheduler to populate the Attributes collection of the appointments.

###  DataDescriptionField `String`

Gets or sets the description field for appointments in the data source specified by the
                DataSourceID property.

#### Remarks
This property is optional. If it's not specified the description field will not be
            	visible in the insert/edit forms.Setting this property to a non-empty string will enable the Description field
            	regardless of the value of EnableDescriptionField.

###  DataEndField `String`

Gets or sets the end field for appointments in the data source specified by the
                DataSourceID property.

###  DataKeyField `String`

Gets or sets the key field for appointments in the data source specified by the
                DataSourceID property.

###  DataRecurrenceField `String`

Gets or sets the recurrence rule field for appointments in the data source specified by
                the DataSourceID property.

###  DataRecurrenceParentKeyField `String`

Gets or sets the recurrence parent key field for appointments in the data source specified
                by the DataSourceID property.

###  DataReminderField `String`

Gets or sets the reminder field for appointments in the data source specified by the
                DataSourceID property.

#### Remarks
This property is optional. If it's not specified the reminder drop-down will not be
            	visible in the insert/edit forms.Setting this property to a non-empty string will enable the reminder drop-down
            	regardless of the value of Reminders-Enabled.

###  DataSourceID `String`

Overridden. Gets or sets the ID property of the data source control that the
                RadScheduler should use to retrieve its data source.

###  DataStartField `String`

Gets or sets the start field for appointments in the data source specified by the
                DataSourceID property.

###  DataSubjectField `String`

Gets or sets the subject field for appointments in the data source specified by the
                DataSourceID property.

###  DataTimeZoneIdField `String`

Gets or sets the time zone field for appointments in the data source specified by the
                DataSourceID property.

###  DayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the day. If you need to set DayStartTime="00:00:00" and DayEndTime="23:59:59", it is recommended to set ShowFullTime="true" instead.

#### Remarks
This property is ignored in month view mode. If you need to set DayStartTime="00:00:00" and DayEndTime="23:59:59", it is recommended to set ShowFullTime="true" instead.

###  DayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the day. If you need to set DayStartTime="00:00:00" and DayEndTime="23:59:59", it is recommended to set ShowFullTime="true" instead.

#### Remarks
This property is ignored in month view mode. If you need to set DayStartTime="00:00:00" and DayEndTime="23:59:59", it is recommended to set ShowFullTime="true" instead.

###  DayView `DayViewSettings`

Gets the Day view settings.

###  DisplayDeleteConfirmation `Boolean`

Gets or sets a value indicating whether a delete confirmation dialog should be displayed when the user clicks the "delete" button of an appointment.

###  DisplayRecurrenceActionDialogOnMove `Boolean`

Gets or sets a value indicating whether a confirmation dialog should be displayed when the user moves a recurring appointment.

###  EditFormDateFormat `String`

Gets or sets the edit form date format string.

###  EditFormTimeFormat `String`

Gets or sets the edit form time format string.

###  EditingRecurringSeries `Boolean`

Gets a value indicating whether the recurring series are being edited at the moment, as opposed to a single appointment of the series.

#### Remarks
This property is also used to indicate the target of the delete and move operations.

###  EnableAdvancedForm `Boolean`

Gets or sets a value indicating whether the user can use the advanced insert/edit form.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableCustomAttributeEditing `Boolean`

Gets or sets a value that indicates whether the attribute editing in the advanced form is enabled.

###  EnableDatePicker `Boolean`

Gets or sets a value indicating whether to enable the date picker for quick navigation.

###  EnableDescriptionField `Boolean`

Gets or sets a value indicating whether the user can view and edit the description field of appointments.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableExactTimeRendering `Boolean`

Gets or sets a value indicating whether the appointment start and end time should be rendered exactly.

#### Remarks
Currently, exact time rendering is supported only in Day, Week and MultiDay views.

###  EnableRecurrenceSupport `Boolean`

Gets or sets a value indicating whether the user can create and edit recurring appointments.

###  EnableResourceEditing `Boolean`

Gets or sets a value that indicates whether the resource editing in the advanced form is enabled.

###  ExportSettings `SchedulerExportSettings`

Gets a reference to the  object that
                    allows you to set the properties of the grouping operation in a
                    Telerik RadScheduler control.

#### Remarks
Use the ExportSettings property to control the settings of the grouping
                operations in a Telerik RadScheduler control. This property is read-only;
                however, you can set the properties of the SchedulerGroupingSettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadScheduler
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the SchedulerExportSettings object (for example,
                    GroupingSettings-ExpandTooltip).Nest a <GroupingSettings> element between the opening and closing
                    tags of the Telerik RadScheduler control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, GroupingSettings.ExpandTooltip). Common settings
                usually include the tool tips for the sorting controls.

###  FirstDayOfWeek `DayOfWeek`

Gets or sets the first day of the week.

#### Remarks
Used this property to specify the first day rendered in week view.

###  GroupBy `String`

Gets the name of the resource to group by.
            Can also be in the format "Date,[Resource Name]" when grouping by date.

###  GroupingDirection `GroupingDirection`

Gets or sets the resource grouping direction of the RadScheduler.

###  Height `Unit`

Gets or sets the height.

###  HoursPanelTimeFormat `String`

Gets or sets the hours panel time format string.

###  InlineEditTemplate `ITemplate`

Gets or sets the inline edit template.

###  InlineInsertTemplate `ITemplate`

Gets or sets the inline insert template.

###  IsSkinSet `String`

For internal use.

###  LastDayOfWeek `DayOfWeek`

Gets or sets the last day of the week.

#### Remarks
This property is applied in week and month view.

###  Localization `SchedulerStrings`

Gets the localization.

###  LocalizationPath `SchedulerStrings`

Gets or sets a value indicating where RadScheduler will look for its .resx localization files.

###  MaximumRecurrenceCandidates `Int32`

Gets or sets the maximum recurrence candidates limit.

#### Remarks
This limit is used to prevent lockups when evaluating long recurring series.
            The default value should not be changed under normal conditions.

###  MinimumInlineFormHeight `Int32`

Gets or sets the minimum height of the inline insert/edit template.

#### Remarks
The height is applied to the textbox inside the default inline template.
            It will be ignored when using custom templates for the inline form.

###  MinimumInlineFormWidth `Int32`

Gets or sets the minimum width of the inline insert/edit template.

###  MinutesPerRow `Int32`

Gets or sets the number of minuties which a single row represents

###  MonthView `MonthViewSettings`

Gets the Month view settings.

###  MultiDayView `DayViewSettings`

Gets the Multi-day view settings.

###  NumberOfHoveredRows `Int32`

Gets or sets the number of rows that are hovered when the mouse is over the appointment area.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientAppointmentClick `String`

Gets or sets the OnClientAppointmentClick.

###  OnClientAppointmentContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment has been right-clicked.

#### Remarks
If specified, the OnClientAppointmentContextMenu client-side event
                handler is called when an appointment has been right-clicked.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the instance of the appointment.get_domEvent(), the original DOM event.This event cannot be cancelled.

###  OnClientAppointmentContextMenuItemClicked `String`

Gets or sets a value indicating the client-side event handler that is called when
            an apointment context menu item is clicked, after RadScheduler has processed the event.

#### Remarks
If specified, the OnClientAppointmentContextMenuItemClicking
            	client-side event handler is called when an apointment context menu item is clicked,
            	after RadScheduler has processed the event.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the instance of the appointment.get_item(), the clicked menu item.This event cannot be cancelled.

###  OnClientAppointmentContextMenuItemClicking `String`

Gets or sets a value indicating the client-side event handler that is called when
            an apointment context menu item is clicked, before RadScheduler processes the click event.

#### Remarks
If specified, the OnClientAppointmentContextMenuItemClicking
            	client-side event handler is called when an apointment context menu item is clicked,
            	before RadScheduler processes the click event.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.get_item(), the clicked menu item.set_cancel(), used to cancel the event.This event can be cancelled. Cancelling it will prevent any further processing of the command.

###  OnClientAppointmentCreated `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is received from the Web Service and hase been rendered.

#### Remarks
If specified, the OnClientAppointmentCreated client-side event
                handler is called when an appointment is received and has been rendered.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised after
            	the appointments are retrieved from the data service.
            	The event will be raised for each appointment that has been retrieved from the web service.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with one property:
            			get_appointment(), the appointment that has been rendered.This event cannot be cancelled.

###  OnClientAppointmentDataBound `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is received from the Web Service and is about to be rendered.

#### Remarks
If specified, the OnClientAppointmentDataBound client-side event
                handler is called when an appointment is received and is about to be rendered.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised after
            	the appointments are retrieved from the data service.
            	The event will be raised for each appointment that has been retrieved from the web service.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the instance of the appointment;get_data(), the original data object retrieved from the web service.This event cannot be cancelled.

###  OnClientAppointmentDeleting `String`

Gets or sets the OnClientAppointmentDeleting.

###  OnClientAppointmentDoubleClick `String`

Gets or sets the OnClientAppointmentInserting.

###  OnClientAppointmentEditing `String`

Gets or sets the OnClientAppointmentEditing.

###  OnClientAppointmentInserting `String`

Gets or sets the OnClientAppointmentInserting.

###  OnClientAppointmentMoveEnd `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment has been moved.

#### Remarks
If specified, the OnClientAppointmentMoveEnd client-side event
            		handler is called when an appointment has been moved.
            	
            		The event will also be fired when the move operation has been aborted by the
            		user. In this case the get_isAbortedByUser() property of the event arguments will
            		be set to "true".
            	
            		The event will also fire if the appointment is dropped in its original location,
            		but no postback will occur as the appointment is not altered.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with six properties:
            			get_appointment(), the instance of the appointment.get_newStartTime(), the new start time of the appointment.get_editingRecurringSeries(), a boolean value indicating whether the user has selected to edit the whole series.get_targetSlot(), the target slot that the appointment has been moved to.get_isAbortedByUser(), indicates whether the move operation has been aborted as a result of user action.set_cancel(), set to true to cancel the move operation.This event can be cancelled.

###  OnClientAppointmentMoveStart `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is about to be moved.

#### Remarks
If specified, the OnClientAppointmentMoveStart client-side event
                handler is called when an appointment is about to be moved.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with four properties:
            			get_appointment(), the instance of the appointment.set_cancel(), set to true to cancel the move operation.This event can be cancelled.

###  OnClientAppointmentMoving `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is being moved.

#### Remarks
If specified, the OnClientAppointmentMoving client-side event
                handler is called when an appointment is being moved.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with four properties:
            			get_appointment(), the instance of the appointment.get_targetSlot(), the slot that the appointment currently occupies.set_cancel(), set to true to cancel the move operation.This event can be cancelled.

###  OnClientAppointmentResizeEnd `String`

Gets or sets the OnClientAppointmentResizeEnd.

###  OnClientAppointmentResizeStart `String`

Gets or sets the OnClientAppointmentResizeStart.

###  OnClientAppointmentResizing `String`

Gets or sets the OnClientAppointmentResizing.

###  OnClientAppointmentSerialized `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment has been serialized to a data object and is about to be sent to the Web Service.

#### Remarks
If specified, the OnClientAppointmentSerialized client-side event
                handler is called when an appointment has been serialized to a data object and
                is about to be sent to the Web Service.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised before
            	the appointment is sent to the data service.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the instance of the appointment;get_data(), the constructed data object that will be sent to the web service.This event cannot be cancelled.

###  OnClientAppointmentsPopulated `AppointmentCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler has received appointments from the Web Service.

#### Remarks
If specified, the OnClientAppointmentsPopulated client-side event
                handler is called when the scheduler has received appointments.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised after
            	the appointments are retrieved from the data service.
            	The event will be raised again each time new data has been retrieved from the web service.One parameter is passed to the handler:sender, the scheduler client object;This event cannot be cancelled.

###  OnClientAppointmentsPopulating `AppointmentCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler is about to request appointments from the Web Service.

#### Remarks
If specified, the OnClientAppointmentsPopulating client-side event
                handler is called when the scheduler is about to request appointments.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised before
            	the appointments are retrieved from the data service.
            	The event will be raised again each time new data is about to be retrieved from the web service.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientAppointmentWebServiceDeleting `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is about to be deleted via Web Service call.

#### Remarks
If specified, the OnClientAppointmentWebServiceDeleting client-side event
                handler is called when an appointment is about to be deleted via Web Service call.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the appointment that is about to be deleted.get_editingRecurringSeries(), indicates whether the recurring series are being deleted.set_cancel(), set to true cancel the operation.get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.This event can be cancelled.

###  OnClientAppointmentWebServiceInserting `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is about to be stored via Web Service call.

#### Remarks
If specified, the OnClientAppointmentWebServiceInserting client-side event
                handler is called when an appointment is about to be stored via Web Service call.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the appointment that is about to be inserted.set_cancel(), set to true cancel the operation.get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.This event can be cancelled.

###  OnClientAppointmentWebServiceUpdating `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment is about to be updated via Web Service call.

#### Remarks
If specified, the OnClientAppointmentWebServiceUpdating client-side event
                handler is called when an appointment is about to be updated via Web Service call.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the appointment that is about to be updated.set_cancel(), set to true cancel the operation.get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.This event can be cancelled.

###  OnClientDataBound `String`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler has been populated with data.

#### Remarks
If specified, the OnClientDataBound client-side event
                handler is called when the scheduler has been populated with data.In the case of server-side binding, the event will be raised
            	immediately after the control is initialized.When client-side binding is used, the event will be raised when
            	both the appointments and the resources	are retrieved from the data service.
            	The event will be raised again each time new data is retrieved from the web service.One parameter is passed to the handler:sender, the scheduler client object;This event cannot be cancelled.

###  OnClientFormCreated `String`

Gets or sets a value indicating the client-side event handler that is called when
            an edit/insert form has been created.

#### Remarks
If specified, the OnClientFormCreated client-side event
                handler is called when an edit/insert form has been created.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the instance of the appointment.get_formElement(), the DOM element of the form.get_mode(), enumerable of type Telerik.Web.UI.SchedulerFormMode.
            				See SchedulerFormMode for the list of possible values.get_editingRecurringSeries(), a boolean indicating if the user
            				has chosen to edit the recurring series (true) or a single occurrence (false).This event cannot be cancelled.

###  OnClientNavigationCommand `String`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler is about to execute a navigation command.

#### Remarks
If specified, the OnClientNavigationCommand client-side event
                handler is called when the scheduler is about to execute a navigation command.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_command(), the navigation command that is being processed.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientNavigationComplete `String`

Gets or sets a value indicating the client-side event handler that is called when
            a navigation command has been completed.

#### Remarks
If specified, the OnNavigationComplete client-side event
                handler is called when a navigation command has been completed.The event will be raised only when client-side binding is used.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with one properties:
            			get_command(), the navigation command that is being processed.This event cannot be cancelled.

###  OnClientRecurrenceActionDialogClosed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the recurrence action confirmation dialog has been closed.

#### Remarks
If specified, the OnClientRecurrenceActionDialogClosed client-side event
                handler is called when the recurrence action confirmation dialog has been closed.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.get_editSeries(), the selected option from the dialog.This event cannot be cancelled.

###  OnClientRecurrenceActionDialogShowing `String`

Gets or sets a value indicating the client-side event handler that is called when
            the recurrence action confirmation dialog is about to be shown.

#### Remarks
If specified, the OnClientRecurrenceActionDialogShowing client-side event
                handler is called when the recurrence action confirmation dialog is about to be shown.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.set_cancel(), set to true to suppress the confirmation dialog.set_editSeries(), set to true or false to override the result from the dialog (only if it has been cancelled by calling eventArgs.set_cancel(true)).This event can be cancelled.

###  OnClientRecurrenceExceptionCreating `String`

Gets or sets a value indicating the client-side event handler that is called when
            a recurrence exception is about to be created via Web Service call.

#### Remarks
If specified, the OnClientRecurrenceExceptionCreating client-side event
                handler is called when a recurrence exception is about to be created via Web Service call.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the appointment that represents the recurrence exception that is about to be stored.set_cancel(), set to true cancel the operation.get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.This event can be cancelled.

###  OnClientRecurrenceExceptionsRemoving `String`

Gets or sets a value indicating the client-side event handler that is called when
            recurrence exceptions are about to be removed via Web Service call.

#### Remarks
If specified, the OnClientRecurrenceExceptionsRemoving client-side event
                handler is called when recurrence exceptions are about to be removed via Web Service call.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised when the user
            	chooses to remove the recurrence exceptions of a given series through the advanced form.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_appointment(), the master appointment that represents the recurrence series.set_cancel(), set to true cancel the operation.get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.This event can be cancelled.

###  OnClientReminderDismissing `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment reminder is about to be dismissed.

#### Remarks
If specified, the OnClientReminderDismissing
            	client-side event handler is called when an appointment reminder has been dismissed by the user,
            	before the command is sent to the server.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.get_reminder(), the reminder.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientReminderSnoozing `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment reminder is about to be snoozed.

#### Remarks
If specified, the OnClientReminderSnoozing
            	client-side event handler is called when an appointment reminder has been snoozed by the user,
            	before the command is sent to the server.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.get_reminder(), the snoozed reminder.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientReminderTriggering `String`

Gets or sets a value indicating the client-side event handler that is called when
            an appointment reminder is due and is about to be triggered.

#### Remarks
If specified, the OnClientReminderTriggering
            	client-side event handler is called when an appointment reminder is about to be triggered,
            	before the pop-up dialog is shown.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_appointment(), the instance of the appointment.get_reminder(), the reminder.set_cancel(), used to cancel the event.This event can be cancelled. Doing so effectively ignores the reminder.

###  OnClientRequestFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            a request to the Web Service has failed.

#### Remarks
If specified, the OnClientRequestFailed client-side event
                handler is called when a request to the Web Service has failed.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_errorMessage(), the error message sent from the server.set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

###  OnClientRequestSuccess `String`

Gets or sets a value indicating the client-side event handler that is called when
            a request to the Web Service has succeeded.

#### Remarks
If specified, the OnClientRequestSuccess client-side event
                handler is called when a request to the Web Service has succeeded.In the case of server-side binding, the event will not be raised.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with one property:
            			get_result(), the object received from the server as.This event can be cancelled.

###  OnClientResourcesPopulated `ResourceCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler has received resources from the Web Service.

#### Remarks
If specified, the OnClientResourcesPopulated client-side event
                handler is called when the scheduler has received resources.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised after
            	the resources have been retrieved from the data service.
            	The event will be raised only once, at the time of the initial load.One parameter is passed to the handler:sender, the scheduler client object;This event cannot be cancelled.

###  OnClientResourcesPopulating `ResourceCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the scheduler is about to request resources from the Web Service.

#### Remarks
If specified, the OnClientResourcesPopulating client-side event
                handler is called when the scheduler is about to request resources.In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised before
            	the resources are retrieved from the data service.
            	The event will be raised only once, at the time of the initial load.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_schedulerInfo(), the schedulerInfo object that will be passed to the web service method.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientTimeSlotClick `String`

Gets or sets the on client time slot click.

###  OnClientTimeSlotContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called when
            an empty time slot has been right-clicked.

#### Remarks
If specified, the OnClientAppointmentContextMenu client-side event
                handler is called when an empty time slot has been right-clicked.
            	Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with four properties:
            			get_targetSlot(), the target slot.get_time(), the time that corresponds to the slot.get_isAllDay(), a boolean indicating if this is an all-day slot (the time should be discarded in this case).get_domEvent(), the original DOM event.This event cannot be cancelled.

###  OnClientTimeSlotContextMenuItemClicked `String`

Gets or sets a value indicating the client-side event handler that is called when
            a time slot context menu item is clicked, after RadScheduler has processed the event.

#### Remarks
If specified, the OnClientTimeSlotContextMenuItemClicking
            	client-side event handler is called when a time slot context menu item is clicked,
            	after RadScheduler has processed the event.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with two properties:
            			get_slot(), the instance of the time slot.get_item(), the clicked menu item.This event cannot be cancelled.

###  OnClientTimeSlotContextMenuItemClicking `String`

Gets or sets a value indicating the client-side event handler that is called when
            a time slot context menu item is clicked, before RadScheduler processes the click event.

#### Remarks
If specified, the OnClientTimeSlotContextMenuItemClicking
            	client-side event handler is called when a time slot context menu item is clicked,
            	before RadScheduler processes the click event.Two parameters are passed to the handler:sender, the scheduler client object;eventArgs with three properties:
            			get_slot(), the instance of the time slot.get_item(), the clicked menu item.set_cancel(), used to cancel the event.This event can be cancelled. Cancelling it will prevent any further processing of the command.

###  OverflowBehavior `OverflowBehavior`

Gets or sets a value specifying the way RadScheduler should behave when its content
            overflows its dimensions.

#### Remarks
By default RadScheduler will render a scrollbar should its content exceed the specified dimensions
            	(set via the Width and Height properties). If
            	OverflowBehavior.Expand is set RadScheduler
            	will expand vertically. The Height property must not be set in that case.

###  Provider `SchedulerProviderBase`

Gets or sets the provider instance to be used by RadScheduler. Use this property
                with providers that are created at runtime. For ASP.NET providers defined in web.config
                use the ProviderName property.

###  ProviderContext `SchedulerProviderBase`

Gets the current provider context. The context object contains
            	additional information about the currently performed operation,
            	that can be used to improve and optimize provider implementations.

###  ProviderName `SchedulerProviderBase`

Gets or sets the name of the current appointment provider used by RadScheduler. The provider
                must be defined in the RadScheduler section of web.config.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether RadScheduler is in read-only mode.

#### Remarks
By default the user is able to insert, edit and delete appointments. Use the ReadOnly to disable the editing capabilities of RadScheduler.

###  RecurrenceSupport `Boolean`

Gets a boolean value that indicates if recurrence support has been configured for this
            instance of RadScheduler.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Reminders `ReminderSettings`

Gets the reminders.

###  RemindersSupport `Boolean`

Gets a boolean value that indicates if reminders support has been configured for this
            instance of RadScheduler.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  ResourceHeaderTemplate `ITemplate`

Gets or sets the resource header template.

###  Resources `ResourceCollection`

A collection of all resources loaded by RadScheduler.

###  ResourceStyles `ResourceStyleMappingCollection`

Gets a collection of ResourceStyleMapping
            objects can be used to associate resources with particular
            cascading style sheet (CSS) classes.

#### Remarks
Resources are matched by all (boolean AND) specified properties.

###  ResourceTypes `ResourceTypeCollection`

Gets a collection of ResourceType objects that represent
                the resource types used by RadScheduler.

###  RowHeaderWidth `Unit`

Gets or sets the width of each row header.

###  RowHeight `Unit`

Gets or sets the height of RadScheduler rows.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SelectedDate `DateTime`

The meaning of this property is different depending on the current 
                view type.
                In day view mode SelectedDate
                gets or sets the currently displayed date.
                In week and
                month view modes SelectedDate 
                gets or sets the highlighted date in the current week or month.

###  SelectedView `SchedulerViewType`

Gets or sets the current view type.

###  ShowAllDayRow `Boolean`

Gets or sets a value indicating whether to render  the all day pane.

###  ShowDateHeaders `Boolean`

Gets or sets a value indicating whether to render date headers for the current view.

###  ShowFooter `Boolean`

Gets or sets a value indicating whether to render the footer.

###  ShowFullTime `Boolean`

Gets or sets a value indicating whether to display the complete day (24-hour view) or the range between DayStartTime and DayEndTime.

###  ShowHeader `Boolean`

Gets or sets a value indicating whether to render the header.

###  ShowHoursColumn `Boolean`

Gets or sets a value indicating whether to render the hours column in day and week view.

###  ShowNavigationPane `Boolean`

Gets or sets a value indicating whether to render  the navigation links..

###  ShowResourceHeaders `Boolean`

Gets or sets a value indicating whether to render resource headers for the current view.

###  ShowViewTabs `Boolean`

Gets or sets a value indicating whether to render the tabs for switching between the view types.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  StartEditingInAdvancedForm `Boolean`

Gets or sets a value indicating whether "advanced" mode is the default edit mode.

###  StartInsertingInAdvancedForm `Boolean`

Gets or sets a value indicating whether "advanced" mode is the default insert mode.

###  TimeLabelRowSpan `Int32`

Gets or sets the number of rows each time label spans.

###  TimelineView `TimelineViewSettings`

Gets the timeline view.

###  TimeSlotContextMenus `RadSchedulerContextMenuCollection`

Gets a collection of RadSchedulerContextMenu objects
            	that represent the time slot context menus of the RadScheduler control.

###  TimeSlotContextMenuSettings `ContextMenuSettings`

Gets the time slot context menu settings.

###  TimeZoneID `String`

Gets or sets the current time zone RadScheduler ins operating in

###  TimeZoneOffset `TimeSpan`

Gets or sets the time zone offset to use when displaying appointments.

#### Remarks
The default value is TimeSpan.Zero.
            This property is ignored if TimeZoneID is set.

###  TimeZonesEnabled `Boolean`

Gets the time zones enabled.

###  TimeZonesProvider `TimeZoneProviderBase`

Gets a collection of Appointment objects that represent individual
                appointments in the RadScheduler control.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  UseDefaultAdvancedEdit `Boolean`

Indicates whether to instantiate a clent-side object for the
            advanced edit form (applicable only in Web Service mode).

###  UseDefaultAdvancedInsert `Boolean`

Indicates whether to instantiate a clent-side object for the
            advanced insert form (applicable only in Web Service mode).

###  ValidationGroup `String`

Gets or sets the name of the validation group to be used for the integrated validation controls.

###  VisibleRangeEnd `DateTime`

Returns visible end date of the current view.

#### Remarks
All tasks rendered in the current view will be within the range specified by the VisibleRangeStart
                and VisibleRangeEnd properties.

###  VisibleRangeStart `DateTime`

Returns visible start date of the current view.

#### Remarks
All tasks rendered in the current view will be within the range specified by the VisibleRangeStart
                and VisibleRangeEnd properties.

###  VisualTimeZoneOffset `TimeSpan`

Gets or sets the time zone offset to use when determining todays date.

#### Remarks
The default value is the system's time zone offset.
            	This value is ignored when TimeZoneOffset is set.

###  WebServiceSettings `SchedulerWebServiceSettings`

Gets the web service to be used for binding this instance of RadScheduler.

###  WeekView `WeekViewSettings`

Gets the WeekView settings.

###  WorkDayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the work day.

#### Remarks
The effect from this property is only visual.
                This property is ignored in month view mode.

###  WorkDayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the work day.

#### Remarks
The effect from this property is only visual.
                This property is ignored in month view mode.

###  YearView `YearViewSettings`

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateAppointment

Creates a new appointment instance.
            This method is used internally by RadScheduler and can be used by custom appointment providers.

#### Remarks
Normally this is an instance of the Appointment class.
            
            	This method can be overriden by inheritors to create instances of custom classes.
            
            	An alternative method for working with custom appointments is to use the
            	AppointmentFactory property.

#### Returns

`Telerik.Web.UI.Appointment` A new appointment instance.

###  DeleteAppointment

Deletes the appointment or the recurrence series it is part of.

#### Remarks
When deleting an appointment that is part of recurrence series and deleteSeries is set to false
            this method will update the master appointment to produce a recurrence exception.

#### Parameters

#### appointmentToDelete `Telerik.Web.UI.Appointment`

The appointment to delete.

#### deleteSeries `System.Boolean`

if set to true delete complete recurrence series.

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  DismissAppointmentReminder

Updates the appointment by dismissing its reminder.

#### Parameters

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### originalAppointment `Telerik.Web.UI.Appointment`

The original appointment.

#### Returns

`System.Void` 

###  DisplayToUtc

Converts a date time object from client date format to UTC using the TimeZoneOffset property.

#### Remarks
RadScheduler always stores dates in UTC format to allow support for multiple time zones. The DisplayToUtc method must be used when
            	a date is supplied to RadScheduler to be persisted in some way. For example updating the Appointment.Start property from a textbox.

#### Parameters

#### displayDate `System.DateTime`

The date to convert. Must be in client format.

#### Returns

`System.DateTime` The date in UTC format which corresponds to the supplied client format date.

###  ExportToICalendar

Exports an appointment to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointment `Telerik.Web.UI.Appointment`

The appointment which should be exported.

#### Returns

`System.String` A string containing the appointment in iCalendar format.

###  ExportToICalendar

Exports an appointment to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointment `Telerik.Web.UI.Appointment`

The appointment which should be exported.

#### timeZoneOffset `System.TimeSpan`

The time zone offset to apply to the exported appointments.

#### Returns

`System.String` A string containing the appointment in iCalendar format.

###  ExportToICalendar

Exports the specified appointments to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointments `Telerik.Web.UI.AppointmentCollection`

A collection of appointments which should be exported.

#### Returns

`System.String` A string containing the iCalendar representation of the supplied appointments.

###  ExportToICalendar

Exports the specified appointments to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointments `System.Collections.Generic.IEnumerable{Telerik.Web.UI.Appointment}`

An IEnumerable of appointments which should be exported.

#### Returns

`System.String` A string containing the iCalendar representation of the supplied appointments.

###  ExportToICalendar

Exports the specified appointments to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointments `Telerik.Web.UI.AppointmentCollection`

A collection of appointments which should be exported.

#### timeZoneOffset `System.TimeSpan`

The time zone offset to apply to the exported appointments.

#### Returns

`System.String` A string containing the iCalendar representation of the supplied appointments.

###  ExportToICalendar

Exports the specified appointments to iCalendar format.

#### Remarks
The return value should be saved as a text file with an "ics" extension.

#### Parameters

#### appointments `System.Collections.Generic.IEnumerable{Telerik.Web.UI.Appointment}`

An IEnumerable of appointments which should be exported.

#### timeZoneOffset `System.TimeSpan`

The time zone offset to apply to the exported appointments.

#### Returns

`System.String` A string containing the iCalendar representation of the supplied appointments.

###  ExportToPdf

Exports to PDF.

#### Returns

`System.Void` 

###  GetCallbackResult

Returns the results of a callback event that targets a control.

#### Returns

`System.String` The result of the callback.

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetTimeSlotFromIndex

Retrieves a TimeSlot object from its client-side index

#### Parameters

#### index `System.String`

String representation of the TimeSlot's index

#### Returns

`Telerik.Web.UI.Scheduler.Views.ISchedulerTimeSlot` The TimeSlot that corresponds to the passed index

###  HideEditForm

Hides the active insert or edit form (if any).

#### Returns

`System.Void` 

###  InsertAppointment

Inserts the specified appointment in the Appointments collection,
            expands the series (if it is recurring) and inserts persists it through the provider.

#### Parameters

#### appointmentToInsert `Telerik.Web.UI.Appointment`

The appointment to insert.

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  PrepareToEdit

Prepares the specified appointment for editing.

#### Remarks
If the specified appointment is not recurring, the method does nothing and returns the same appointment.
            If the appointment is recurring and editSeries is set to true the method returns the recurrence parent.
            Otherwise, the method clones the appointment and updates it state to recurrence exception.

#### Parameters

#### appointmentToEdit `Telerik.Web.UI.Appointment`

The appointment to edit.

#### editSeries `System.Boolean`

if set to true [edit series].

#### Returns

`Telerik.Web.UI.Appointment` 

###  RaiseCallbackEvent

Processes a callback event that targets a control.

#### Parameters

#### eventArgument `System.String`

A string that represents an event argument to pass
            to the event handler.

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  Rebind

Rebinds this instance.

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RemoveRecurrenceExceptions

Removes the associated recurrence exceptions through the provider.

#### Parameters

#### master `Telerik.Web.UI.Appointment`

The recurrence master.

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  ShowAdvancedEditForm

Shows the advanced edit form.

#### Parameters

#### appointmentToEdit `Telerik.Web.UI.Appointment`

The appointment which is edited. Its properties are used to populate the edit form.

#### Returns

`System.Void` 

###  ShowAdvancedEditForm

Shows the advanced edit form.

#### Parameters

#### appointmentToEdit `Telerik.Web.UI.Appointment`

The appointment which is edited. Its properties are used to populate the edit form.

#### editSeries `System.Boolean`

A boolean value indicating whether to edit the recurring series.

#### Returns

`System.Void` 

###  ShowAdvancedInsertForm

Shows the advansed insert form.

#### Parameters

#### showAt `System.DateTime`

Specifies the start time for the insert form. It is used to determine the row in which the form is shown.

#### Returns

`System.Void` 

###  ShowAlldayInlineInsertForm

Shows the all-day inline insert form

#### Parameters

#### showAt `System.DateTime`

Specifies the start time for the insert form. It is used to determine the row in which the form is shown.

#### Returns

`System.Void` 

###  ShowInlineEditForm

Shows the inline edit form.

#### Parameters

#### appointmentToEdit `Telerik.Web.UI.Appointment`

The appointment which is edited. Its properties are used to populate the edit form.

#### Returns

`System.Void` 

###  ShowInlineEditForm

Shows the inline edit form.

#### Parameters

#### appointmentToEdit `Telerik.Web.UI.Appointment`

The appointment which is edited. Its properties are used to populate the edit form.

#### editSeries `System.Boolean`

A boolean value indicating whether to edit the recurring series.

#### Returns

`System.Void` 

###  ShowInlineInsertForm

Shows the inline insert form.

#### Parameters

#### showAt `System.DateTime`

Specifies the start time for the insert form. It is used to determine the row in which the form is shown.

#### Returns

`System.Void` 

###  ShowInlineInsertForm

Shows the inline insert form.

#### Parameters

#### timeSlot `Telerik.Web.UI.Scheduler.Views.ISchedulerTimeSlot`

The time slot object where the insert form will be shown

#### Returns

`System.Void` 

###  UpdateAppointment

Updates the specified appointment and persists the changes through the provider.

#### Remarks
This method can be used, along with PrepareToEdit
            to create and persist a recurrence exceptions.

#### Parameters

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### Returns

`System.Void` 

###  UpdateAppointment

Updates the specified appointment and persists the changes through the provider.
            
            Use this overload when the underlying data source requires both original and modified
            data to perform an update operation. One such example is LinqDataSource.

#### Remarks
This method can be used, along with PrepareToEdit
            to create and persist a recurrence exceptions.

#### Parameters

#### appointmentToUpdate `Telerik.Web.UI.Appointment`

The appointment to update.

#### originalAppointment `Telerik.Web.UI.Appointment`

The original appointment. Use Appointment.Clone
            	to obtain a copy of the appointment before updating its properties.

#### Returns

`System.Void` 

###  UtcDayStart

Returns the UTC date that corresponds to midnight on the client for the selected date.

#### Parameters

#### utcDate `System.DateTime`

Client's date and time in UTC.

#### Returns

`System.DateTime` The UTC date that corresponds to midnight on the client for the selected date.

###  UtcToDisplay

Converts a date time object from UTC to client date format using the TimeZoneOffset property.

#### Remarks
RadScheduler always stores dates in UTC format to allow support for multiple time zones. 
            	The UtcToDisplay method must be used when
            	a date (e.g. Appointment.Start) 
            	should be presented to the client in some way - e.g. displayed in a label.

#### Parameters

#### utcDate `System.DateTime`

The date to convert. Must be in UTC format.

#### Returns

`System.DateTime` The date in client format which corresponds to the supplied UTC date

