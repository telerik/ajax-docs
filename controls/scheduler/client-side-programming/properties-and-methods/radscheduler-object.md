---
title: RadScheduler Object
page_title: RadScheduler Object | RadScheduler for ASP.NET AJAX Documentation
description: RadScheduler Object
slug: scheduler/client-side-programming/properties-and-methods/radscheduler-object
tags: radscheduler,object
published: True
position: 0
---

# RadScheduler Object



The RadScheduler client-side object represents a single instance of RadScheduler.

The tables below lists the most important, public properties and methods of the RadScheduler client-side object.

## Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_activeModel()|None|Telerik.Web.UI.[ISchedulerModel]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|Gets the model that represents the current view.|
|get_allowDelete()|None|Boolean|Gets a value indicating whether appointments can be deleted.|
|set_allowDelete()|Boolean|None|Sets a value indicating whether appointments can be deleted.|
|get_allowEdit()|None|Boolean|Gets a value indicating whether appointments can be edited.|
|set_allowEdit()|Boolean|None|Sets a value indicating whether appointments can be edited.|
|get_allowInsert()|None|Boolean|Gets a value indicating whether appointments can be inserted.|
|set_allowInsert()|Boolean|None|Sets a value indicating whether appointments can be inserted.|
|get_appointments()|None|Telerik.Web.UI.[SchedulerAppointmentCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointmentcollection-object%})|Gets a collection of all loaded appointments.|
|get_attributes()|None|Telerik.Web.UI.[SchedulerAttributeCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})|Gets a collection of all attributes defined.|
|get_currentAppointment()|None|Telerik.Web.UI.[SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|Gets the currently edited appointment.|
|get_displayDeleteConfirmation()|None|Boolean|Gets a value indicating whether a confirmation dialog is displayed before deleting appointments.|
|set_displayDeleteConfirmation()|Boolean|None|Sets a value indicating whether a confirmation dialog is displayed before deleting appointments.|
|get_displayRecurrenceActionDialogOnMove()|None|Boolean|Gets a value indicating whether a confirmation dialog is displayed before moving recurrent appointments.|
|set_displayRecurrenceActionDialogOnMove()|Boolean|None|Sets a value indicating whether a confirmation dialog is displayed before moving recurrent appointments.|
|get_firstDayStart()|None|Date|Gets the start date of the current view. In Day View, this is the currently selected day.|
|get_minutesPerRow()|None|Number|Gets the number of minutes a single row represents. Only applicable in Day and Week View.|
|get_readOnly()|None|Boolean|Gets a value indicating whether appointments can be modified.|
|set_readOnly()|Boolean|None|Sets a value indicating whether appointments can be modified.|
|get_resources()|None|Telerik.Web.UI.[SchedulerResourceCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|Gets all resources of all resource types defined for RadScheduler.|
|get_resourceTypes()|None|Telerik.Web.UI.ResourceTypeCollection|Gets all resource types defined for RadScheduler.

````JavaScript
	function clientFormCreated(scheduler, args)
	{
		var mode = args.get_mode();
		if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
	    mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit)
		{
			//Alerts all resource types on AdvancedInsert/Edit Form created.  
			scheduler.get_resourceTypes().forEach(function (type)
			{
				alert(type.get_name());
			});
		}
	} 
````

|
|get_groupBy()|None|String|Gets all the resources upon which a group by is made. When grouping by date and resources, the returned String is in the following format "Date,[ResourceName_1]".

````JavaScript
	function pageLoad()
	{
		var scheduler = $find('<%=RadScheduler1.ClientID %>');
		var groupedBy = scheduler.get_groupBy();
		if (groupedBy != null)
		{
			alert(groupedBy);
		}
	}
````



````ASP.NET
	<telerik:RadScheduler runat="server" ID="RadScheduler1" 
		GroupBy="Date, User" GroupingDirection="Horizontal">
	</telerik:RadScheduler>
````

|
|get_selectedDate()|None|Date|Gets the currently selected date.|
|set_selectedDate()|Date|None|Sets the currently selected date.

>note  * *This property is valid only when RadScheduler is bound to Web Service.* * 
>


````JavaScript
	function pageLoad()
	{
		var scheduler = $find('<%=RadScheduler1.ClientID %>');
		// Are we using Web Service data binding?
		if (!scheduler.get_webServiceSettings().get_isEmpty())
		{
			scheduler.set_selectedDate(new Date());
		}
		else
		{
			alert("RadScheduler is not bound to Web Service!");
		}
	}
````

|
|get_selectedView()|None|Telerik.Web.UI.SchedulerViewType Enum

>note SchedulerViewType:
>{
>DayView: 0,
>WeekView: 1,
>MonthView: 2,
>ResourceView: 3,
>TimelineView: 4,
>MultiDayView: 5
>}
>
|Gets the type of the currently selected View.

````JavaScript
	function pageLoad()
	{ 
		var scheduler = $find('<%=RadScheduler1.ClientID %>'); 
		if (scheduler.get_selectedView() == Telerik.Web.UI.SchedulerViewType.DayView) 
		{ 
			alert("The selected view is DayView"); 
		} 
	}
````

|
|set_selectedView()|SchedulerViewType Enum|None|Sets the currently selected view type.

>note  * *This property is valid only when RadScheduler is bound to Web Service.* * 
>


````JavaScript
	function pageLoad()
	{
		var scheduler = $find('<%=RadScheduler1.ClientID %>');
		// Are we using Web Service data binding?
		if (!scheduler.get_webServiceSettings().get_isEmpty())
		{
			var currentView = scheduler.get_selectedView();
			if (currentView != Telerik.Web.UI.SchedulerViewType.TimelineView)
			{
			  alert("The Scheduler's currently selected view will be" + 
					"automatically changed to TimelineView after closing the dialog!");
			  scheduler.set_selectedView(Telerik.Web.UI.SchedulerViewType.TimelineView);
			}
		}
		else
		{
			alert("RadScheduler is not bound to Web Service!");
		}
	}
````

|
|get_showFullTime()|None|Boolean|Gets a value indicating whether the Scheduler is displayed in 24-hour View.|
|set_showFullTime()|Boolean|None|Sets a value indicating whether the Scheduler is displayed in 24-hour View.

>note  * *This property is valid only when RadScheduler is bound to Web Service.* * 
>
|
|get_advancedFormSettings()|None|Object|Gets the advanced form's settings: enabled, modal, and z-index.|
|get_appointmentContextMenuIDs()|None|Array|Gets the IDs of context menus defined for appointment.|
|get_appointmentContextMenus()|None|Array|Gets the objects of context menus defined for appointment.|
|get_timeSlotContextMenuIDs()|None|Array|Gets the IDs of context menus defined for TimeSlot.|
|get_timeSlotContextMenus()|None|Array|Gets the objects of context menus defined for TimeSlot.|
|get_appointmentStyleMode()|None|Telerik.Web.UI.AppointmentStyleMode Enum

>note AppointmentStyleMode:
>{
>Auto: 0,
>Simple: 1,
>Default: 2
>}
>
|Gets the AppointmentStyleMode of RadScheduler.|
|scheduler.set_appointmentStyleMode()|AppointmentStyleMode|None|Sets un AppointmentStyleMode of RadScheduler.|
|get_clientState()|None|String|Gets the client state of RadScheduler.|
|get_clientStateFieldID()|None|String|Gets the ID of the field containing the client state of RadScheduler.|
|get_contentElement()|None|Object|Gets the DOM element of the content area of RadScheduler.|
|get_customAttributeNames()|None|Array|Gets the names of custom attributes defined for RadScheduelr, if any.|
|get_dayViewSettings()|None|Object|Gets an object contining the day-start time and day-end time.|
|get_element()|None|Object|Gets the DOM element of RadScheduler.|
|get_firstDayOfWeek()|None|Telerik.Web.UI.DayOfWeek Enum

>note DayOfWeek:
>{
>Sunday: 0,
>Monday: 1,
>Tuesday: 2
>Wednesday: 3
>Thursday: 4
>Friday: 5
>Saturday: 6
>}
>
|Gets first day of week defined for RadScheduler.|
|get_height()|None|String|Gets the height of RadScheduler.|
|get_hoursPanelTimeFormat()|None|Stirng|Gets the time format of the hours panel.|
|get_id()|None|String|Gets the id set for RadScheduler.|
|get_lastDayOfWeek()|None|Telerik.Web.UI.DayOfWeek Enum

>note DayOfWeek:
>{
>Sunday: 0,
>Monday: 1,
>Tuesday: 2
>Wednesday: 3
>Thursday: 4
>Friday: 5
>Saturday: 6
>}
>
|Gets last day of week defined for RadScheduler.|
|get_localization()|None|Object|Gets an object conaining all localization rules defined for RadScheduler.|
|get_monthViewSettings()|None|Array|Gets an object containing MonthView settings, if defined.|
|scheduler.get_multiDayViewSettings()|None|Object|Gets an object containing day start-time and day-end time.|
|get_timelineViewSettings()|None|Array|Gets an object containing TimelineView settings, if defined.|
|get_numberOfHoveredRows()|None|Number|Gets the number of hovered rows.|
|set_numberOfHoveredRows()|Number|None|Sets the number of hovered rows.|
|get_rowHeight()|None|String|Gets the height of rows.|
|get_scrollTop()|None|Number|Gets the vertical scroll position of the content area of RadScheduler.|
|get_shouldPostbackOnAppointmentContextMenuItemClick()|None|Boolean|Returns true if RadScheduler post-backs on AppointmentContextMenu item click, false otherwise.|
|set_shouldPostbackOnAppointmentContextMenuItemClick()|Boolean|None|Sets a boolean whether a postback should occur when an item from the Appointment context menu is clicked.|
|get_shouldPostbackOnTimeSlotContextMenuItemClick()|None|Boolean|Returns true if RadScheduler postbacks on TimeSlotContextMenu item click, false otherwise.|
|set_shouldPostbackOnTimeSlotContextMenuItemClick()|Boolean|None|Sets a boolean whether a postback should occur when an item from the TimeSlot context menu is clicked.|
|get_shouldUseClientInlineInsertForm()|None|Boolean|Returns true if the inline form is opened when inserting an appointment, false otherwise.|
|set_shouldUseClientInlineInsertForm()|Boolean|None|Sets a boolean wether a client inline form should be displayed on appointment insert.|
|get_shouldUseClientInlineEditForm()|None|Boolean|Returns true if the inline form is opened when editing an appointment, false otherwise.|
|set_shouldUseClientInlineEditForm()|Boolean|None|Sets a boolean whether an inline form should be displayed on appointment edit.|
|get_showAllDayRow()|None|Boolean|Returns true if AllDayRow is visible, false otherwise.|
|get_timeLabelRowSpan()|None|Number|Gets the row span of time label.

>note Depends on NumberOfSlos property of RadScheduler in TimelineView.
>
|
|get_validationGroup()|None|String|Get the validation group defined for RadScheduler.|
|get_visible()|None|Boolean|Gets true if RadScheduler is visible, false otherwise.|
|set_visible()|Boolean|None|Sets the visibility of RadScheduler.|
|get_webServiceSettings()|None|Telerik.Web.UI.SchedulerWebServiceSettings|Gets an object of web service settings defined for RadScheduler.|
|get_weekViewSettings()|None|Object|Gets an object of settings defined for WeekView.|



## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|showInsertFormAt()|Telerik.Web.UI.[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|None|Shows the in-line insert form at the clicked TimeSlot, equivalently to the TimeSlot's double-clicking. When showing the form, the corresponding FormCreating, AppointmentCreated and FormCreated server-side events are fired.

````JavaScript
	function onClientTimeSlotClick(sender, eventArgs)
	{
		var targetSlot = eventArgs.get_targetSlot();
		sender.showInsertFormAt(targetSlot);
	}		
````

|
|insertAppointment()|Telerik.Web.UI.[SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|None|Inserts an appointment.

````JavaScript
	function onClientTimeSlotClick(sender, eventArgs)
	{
		var newAppointment = new Telerik.Web.UI.SchedulerAppointment();
	
		var startTime = eventArgs.get_targetSlot().get_startTime();
	
		var endTime = new Date(startTime);
		endTime.setMinutes(endTime.getMinutes() + 45);
	
		newAppointment.set_start(startTime);
		newAppointment.set_end(endTime);
		newAppointment.set_subject("Manually Inserted Appointment");
	
		sender.insertAppointment(newAppointment);
	}
````

|
|updateAppointment()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean (optional)|None|Updates the specified appointment.The second parameter is optional and if set to **true** , the method will update all appointments in the recurrence series; otherwise an exception will be created for the updated appointment.

````JavaScript
	function onClientAppointmentClick(sender, eventArgs)
	{
		var appointment = eventArgs.get_appointment();
		var newEnd = new Date(appointment.get_end());
		newEnd.setMinutes(newEnd.getMinutes() + 45);
		appointment.set_end(newEnd);
		sender.updateAppointment(appointment, false);
	}
````

|
|editAppointment()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean (optional)|None|Opens the AdvancedEditForm for the specified appointment; Identical to double-clicking an appointment. When opening the form, the corresponding FormCreating and FormCreated server-side events are fired.The second parameter is optional and if set to **true** , the method will edit all appointments in the recurrence series; otherwise an exception will be created for the edited appointment.

````JavaScript
	function onClientAppointmentClick(sender, eventArgs)
	{
		var appointment = eventArgs.get_appointment();
		sender.editAppointment(appointment);
	} 
````

|
|editAppointmentWithConfirmation()|Telerik.Web.UI.[SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|None|Opens the AdvancedEditForm for the specified appointment; Identical to double-clicking an appointment. When opening the form, the corresponding FormCreating and FormCreated server-side events are fired.This method is identical to **editAppointment** , but the user is presented with a confirmation dialog if the appointment is recurring.

````JavaScript
	function onClientAppointmentClick(sender, eventArgs)
	{
		var appointment = eventArgs.get_appointment();
		sender.editAppointmentWithConfirmation(appointment);
	} 
````

|
|deleteAppointment()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean (optional)|None|Deletes the specified appointment.The second parameter - deleteSeries - is optional and if set to **true** ,the method will delete all appointments in the recurrence series; otherwise only the specified appointment will be deleted.

````JavaScript
	function onClientAppointmentClick(sender, eventArgs)
	{
		var appointment = eventArgs.get_appointment();
		sender.deleteAppointment(appointment);
	}
````

|
|deleteAppointmentWithConfirmation()|Telerik.Web.UI.[SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|None|Deletes the specified appointment.A confirmation dialog is displayed, before deleting the appointment.

````JavaScript
	function onClientAppointmentClick(sender, eventArgs)
	{
		var appointment = eventArgs.get_appointment();
		sender.deleteAppointmentWithConfirmation(appointment);
	}
````

|
|getAppointmentDomElement()|DOM Element|DOM Element|Gets the container Appointment DomElement (if any) of the specified DomElement.|
|getAppointmentFromDomElement()|DOM Element|Telerik.Web.UI.[SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|Gets the appointment object from the specified DOM Element.|
|add_ *[eventName]* ()|Method Name|None|Adds an event handler.

````JavaScript
	function pageLoad()
	{
		var scheduler = $find("<%=RadScheduler1.ClientID %>");
		scheduler.add_appointmentClick(function (sender, args)
		{
			alert("You have clicked the  '"+ 
				args.get_appointment().get_subject() +  "'  appointment" );
		});
	}
````

|
|remove_ *[eventName]* ()|Method Name|None|Removes an event handler.

````JavaScript
	function pageLoad()
	{
		var scheduler = $find("<%=RadScheduler1.ClientID %>");
		scheduler.add_appointmentClick(appointmentClick);
	}
	
	function appointmentClick(sender, args)
	{
		alert("You have clicked the  '" + args.get_appointment().get_subject() + "'  appointment");
		sender.remove_appointmentClick(appointmentClick);
	}
````

|
|rebind()|None|None|When RadScheduler is in Client Side binding mode (Web Services), this method can be used to refresh the control and display the appointments.

````JavaScript
	function OnClientSelectedIndexChanged(sender, args)
	{
		teacherID = args.get_item().get_value();
		var scheduler = $find('<%=RadScheduler1.ClientID %>');
		scheduler.rebind();
	}
	
	function OnClientAppointmentsPopulating(sender, eventArgs)
	{
		eventArgs.get_schedulerInfo().TeacherID = teacherID;
	}
````



>note A RadComboBox control contains all the resources defined for RadScheduler.
>On its SelectedIndexChanged, only appointments with the selected resource are displayed inRadScheduler.
>
|
|get_selectedSlots()|None|Array of[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})objects|Gets the currently selected TimeSlots.|
|get_durationOfSelectedArea()|None|Integer|Gets the duration in Milliseconds, of currently selected TimeSlots.|
|get_durationBetweenTimeSlots()|[ISchedulerTimeSlot,]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|Integer|Gets the time in Milliseconds, between the two TimeSlots including their own duration.|
|hideInlineForm()|None|None|Hides the inline form opened when double clicking a TimeSlot for inserting an appointment.|
|hideAdvancedForm()|None|None|Hides the advanced form of RadScheduler.|
|moveAppointment()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean,Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot,]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|None|Moves an appointment from source to target TimeSlot.|
|showInlineEditForm()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean.|None|Shows inline edit form for the appointment specified (first argument). The second argument shows whether the recurrence series should be edited.

>note The inline edit form shows only when EnableAdvancedForm property of RadScheduler is set to false.
>
|
|showAdvancedEditForm()|Telerik.Web.UI.[SchedulerAppointment,]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})Boolean.|None|Shows advanced edit form for the appointment specified (first argument). The second argument shows whether the recurrence series should be edited.

>note The inline edit form shows only when EnableAdvancedForm property of RadScheduler is set to true (as it is by default).
>
|
|showInlineInsertForm()|Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot,]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|None|Opens an inline insert form at the specified TimeSlots.|
|showAdvancedInsertForm())|Date|None|Opens an adavanced insert form at the specified time.|
|showInsertFormAt()|Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot,]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})Telerik.Web.UI.Scheduler.Views.[ISchedulerTimeSlot]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})|None|Opens an insert form at the specified TimeSlots.|
|showAllDayAdvancedInsertForm()|Date|None|Opens an andvanced insert form with the AllDay CheckBox checked.|
|showAllDayInlineInsertForm()|Date|None|Opens an inline insert form with the AllDay property set to true.|
|||||

# See Also

 * [SchedulerTimeSlot and SchedulerModel Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object%})

 * [SchedulerAppointment Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})

 * [SchedulerAppointmentCollection Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointmentcollection-object%})

 * [SchedulerAttributeCollection Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})

 * [SchedulerResourceCollection Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresourcecollection-object%})
