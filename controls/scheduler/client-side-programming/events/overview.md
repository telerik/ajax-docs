---
title: Overview
page_title: Client-side Events Overview | RadScheduler for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

**RadScheduler** has a number of properties which value is the name of a JavaScript function that executes when specific client-side events occur. These events are listed below:

* **[OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%})** - occurs when the user clicks an appointment.

* **[OnClientAppointmentDoubleClick]({%slug scheduler/client-side-programming/events/onclientappointmentdoubleclick%})** - occurs when the user double-clicks an appointment.

* **[OnClientAppointmentDeleting]({%slug scheduler/client-side-programming/events/onclientappointmentdeleting%})** - occurs when the user tries to delete an appointment.

* **[OnClientAppointmentEditing]({%slug scheduler/client-side-programming/events/onclientappointmentediting%})** - occurs immediately before an appointment is edited.

* **[OnClientAppointmentInserting]({%slug scheduler/client-side-programming/events/onclientappointmentinserting%})** - occurs before an appointment is inserted.

* [OnClientAppointmentMoveStart]({%slug scheduler/client-side-programming/events/onclientappointmentmovestart%}) - occurs when the user starts to move an appointment.

* [OnClientAppointmentMoving]({%slug scheduler/client-side-programming/events/onclientappointmentmoving%}) - occurs as the user is moving an appointment.

* [OnClientAppointmentMoveEnd]({%slug scheduler/client-side-programming/events/onclientappointmentmoveend%}) - occurs when the user stops moving an appointment.

* **[OnClientAppointmentResizeStart]({%slug scheduler/client-side-programming/events/onclientappointmentresizestart%})** - occurs when the user starts resizing an appointment.

* **[OnClientAppointmentResizing]({%slug scheduler/client-side-programming/events/onclientappointmentresizing%})** - occurs when the user moves the mouse while resizing an appointment.

* **[OnClientAppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%})** - occurs when the user releases the mouse after resizing an appointment.

* **[OnClientAppointmentContextMenu]({%slug scheduler/client-side-programming/events/onclientappointmentcontextmenu%})** - occurs when the user right-clicks on an appointment.

* [OnClientNavigationCommand]({%slug scheduler/client-side-programming/events/onclientnavigationcommand%}) - occurs when the scheduler is about to execute a navigation command.

* [OnClientNavigationComplete]({%slug scheduler/client-side-programming/events/onclientnavigationcomplete%}) - occurs when a navigation command has been completed.

* [OnClientRecurrenceActionDialogShowing]({%slug scheduler/client-side-programming/events/onclientrecurrenceactiondialogshowing%}) - occurs just before the dialog appears to ask whether the change the user just started on a recurring appointment is to affect the appointment itself or the entire series.

* **[OnClientRecurrenceActionDialogClosed]({%slug scheduler/client-side-programming/events/onclientrecurrenceactiondialogclosed%})** - occurs when the dialog that asks whether a change affects a single occurrence or an entire series closes.

* **[OnClientTimeSlotClick]({%slug scheduler/client-side-programming/events/onclienttimeslotclick%})** - occurs when the user clicks on a time slot in the scheduler.

* **[OnClientTimeSlotContextMenu]({%slug scheduler/client-side-programming/events/onclienttimeslotcontextmenu%})** - occurs when the user right-clicks on a time slot in the scheduler.

* **[OnClientFormCreated]({%slug scheduler/client-side-programming/events/onclientformcreated%})** - occurs when an in-line editor or edit form is about to appear.



Web Service binding specific events:

* **[OnClientAppointmentsPopulating]({%slug scheduler/client-side-programming/events/onclientappointmentspopulating%})** - occurs when the scheduler is about to request appointments.

* **[OnClientAppointmentsPopulated]({%slug scheduler/client-side-programming/events/onclientappointmentspopulated%})** - occurs when the scheduler has received appointments from the Web Service.

* **[OnClientAppointmentDataBound]({%slug scheduler/client-side-programming/events/onclientappointmentdatabound%})** - occurs when an appointment is received and is about to be rendered.

* [OnClientAppointmentSerialized]({%slug scheduler/client-side-programming/events/onclientappointmentserialized%}) - allows you to populate appointments with custom data before sending them to the Web Service

* **[OnClientAppointmentCreated]({%slug scheduler/client-side-programming/events/onclientappointmentcreated%})** - occurs when an appointment is received and has been rendered.

* **[OnClientResourcesPopulating]({%slug scheduler/client-side-programming/events/onclientresourcespopulating%})** - occurs when the scheduler is about to request resources.

* **[OnClientResourcesPopulated]({%slug scheduler/client-side-programming/events/onclientresourcespopulated%})** - occurs when the scheduler has received resources.

* **[OnClientDataBound]({%slug scheduler/client-side-programming/events/onclientdatabound%})** - occurs when the scheduler has been populated with data.

* **[OnClientRequestFailed]({%slug scheduler/client-side-programming/events/onclientrequestfailed%})** - occurs when a request to the Web Service has failed.

* **[OnClientRequestSuccess]({%slug scheduler/client-side-programming/events/onclientrequestsuccess%})** -occurs when when a request to the Web Service has succeeded.

* **[OnClientAppointmentWebServiceInserting]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceinserting%})** - occurs when an appointment is about to be stored via Web Service call.

* **[OnClientAppointmentWebServiceDeleting]({%slug scheduler/client-side-programming/events/onclientappointmentwebservicedeleting%})** - occurs when an appointment is about to be deleted via Web Service call.

* **[OnClientAppointmentWebServiceUpdating]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceupdating%})** - occurs when an appointment is about to be updated via Web Service call.

* **[OnClientRecurrenceExceptionCreating]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptioncreating%})** - occurs when a recurrence exception is about to be created via Web Service call.

* **[OnClientRecurrenceExceptionsRemoving]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptionsremoving%})** - occurs when recurrence exceptions are about to be removed via Web Service call.



Reminder related events:

* [OnClientReminderTriggering]({%slug scheduler/client-side-programming/events/onclientremindertriggering%}) -occurs when an appointment reminder is due and is about to be triggered.

* [OnClientReminderSnoozing ]({%slug scheduler/client-side-programming/events/onclientremindersnoozing-%}) - occurs when an appointment reminder is due and is about to be snoozed.

* [OnClientReminderDismissing ]({%slug scheduler/client-side-programming/events/onclientreminderdismissing-%}) - occurs when an appointment reminder is due and is about to be dismissed.



To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding **RadScheduler** property.

````JavaScript
	     
	<script type="text/javascript">   
	  function OnClientAppointmentInserting(sender, eventArgs)
	  {
	     var now = new Date();
	     if (eventArgs.get_startTime() < now)
	         eventArgs.set_cancel(true);
	  }
	</script>
	
	// #region client-side-programming-events_1
	
	function onClickHandler1()
	{
	 alert("First handler occurs");
	}
	function onClickHandler2()
	{
	 alert("Second handler occurs");
	}
	function pageLoad()
	{
	 var Scheduler = $find("<%= RadScheduler1.ClientID %>");
	 
	 Scheduler.add_timeSlotClick(OnClickHandler1);
	 Scheduler.add_timeSlotClick(OnClickHandler2);
	}      
	
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	
	function onClickHandler1()
	{
	 alert("First handler occurs");
	}
	function onClickHandler2()
	{
	 alert("Second handler occurs");
	}
	function pageLoad()
	{
	 var Scheduler = $find("<%= RadScheduler1.ClientID %>");
	 
	 Scheduler.add_timeSlotClick(OnClickHandler1);
	 Scheduler.add_timeSlotClick(OnClickHandler2);
	}      
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
	function removeOnClick2()
	{
	 var Scheduler = $find("<%= RadScheduler1.ClientID %>");
	 Scheduler.remove_timeSlotClick(OnClickHandler2);
	}       
	
````



Note that on the client-side, the names of events are slightly different than on the server-side. The following table shows the correspondence between client-side and server-side names:


| Server-Side Name | Client-Side Name | Methods to Add and Remove |
| ------ | ------ | ------ |
|OnClientAppointmentClick|appointmentClick|add_appointmentClick, remove_appointmentClick|
|OnClientAppointmentDoubleClick|appointmentDoubleClick|add_appointmentDoubleClick, remove_appointmentDoubleClick|
|OnClientAppointmentDeleteing|appointmentDeleting|add_appointmentDeleting, remove_appointmentDeleting|
|OnClientAppointmentEditing|appointmentEditing|add_appointmentEditing, remove_appointmentEditing|
|OnClientAppointmentInserting|appointmentInserting|add_appointmentInserting, remove_appointmentInserting|
|OnClientAppointmentMoveStart|appointmentMoveStart|add_appointmentMoveStart, remove_appointmentMoveStart|
|OnClientAppointmentMoving|appointmentMoving|add_appointmentMoving, remove_appointmentMoving|
|OnClientAppointmentMoveEnd|appointmentMoveEnd|add_appointmentMoveEnd, remove_appointmentMoveEnd|
|OnClientAppointmentResizeStart|appointmentResizeStart|add_appointmentResizeStart, remove_appointmentResizeStart|
|OnClientAppointmentResizing|appointmentResizing|add_appointmentResizing, remove_appointmentResizing|
|OnClientAppointmentResizeEnd|appointmentResizeEnd|add_appointmentResizeEnd, remove_appointmentResizeEnd|
|OnClientAppointmentContextMenu|appointmentContextMenu|add_appointmentContextMenu, remove_appointmentContextMenu|
|OnClientTimeSlotClick|timeSlotClick|add_timeSlotClick, remove_timeSlotClick|
|OnClientTimeSlotContextMenu|timeSlotContextMenu|add_timeSlotContextMenu, remove_timeSlotContextMenu|
|OnClientRecurrenceActionDialogShowing|recurrenceActionDialogShowing|add_recurrenceActionDialogShowing, remove_recurrenceActionDialogShowing|
|OnClientRecurrenceActionDialogClosed|recurrenceActionDialogClosed|add_recurrenceActionDialogClosed, remove_recurrenceActionDialogClosed|
|OnClientFormCreated|formCreated|add_formCreated, remove_formCreated|
|OnClientAppointmentsPopulating|appointmentsPopulating|add_appointmentsPopulating, remove_appointmentsPopulating|
|OnClientAppointmentsPopulated|appointmentsPopulated|add_appointmentsPopulated, remove_appointmentsPopulated|
|OnClientAppointmentDataBound|appointmentDataBound|add_appointmentDataBound, remove_appointmentDataBound|
|OnClientAppointmentCreated|appointmentCreated|add_appointmentCreated, remove_appointmentCreated|
|OnClientResourcesPopulating|resourcesPopulating|add_resourcesPopulating, remove_resourcesPopulating|
|OnClientResourcesPopulated|resourcesPopulated|add_resourcesPopulated, remove_resourcesPopulated|
|OnClientDataBound|dataBound|add_dataBound, remove_dataBound|
|OnClientRequestFailed|requestFailed|add_requestFailed, remove_requestFailed|
|OnClientAppointmentWebServiceInserting|appointmentWebServiceInserting|add_appointmentWebServiceInserting, remove_appointmentWebServiceInserting|
|OnClientAppointmentWebServiceDeleting|appointmentWebServiceDeleting|add_appointmentWebServiceDeleting, remove_appointmentWebServiceDeleting|
|OnClientAppointmentWebServiceUpdating|appointmentWebServiceUpdating|add_appointmentWebServiceUpdating, remove_appointmentWebServiceUpdating|
|OnClientRecurrenceExceptionCreating|recurrenceExceptionCreating|add_recurrenceExceptionCreating, remove_recurrenceExceptionCreating|
|OnClientRecurrenceExceptionsRemoving|recurrenceExceptionsRemoving|add_recurrenceExceptionsRemoving, remove_recurrenceExceptionsRemoving|

# See Also

 * [Overview]({%slug scheduler/server-side-programming/server-events/overview%})
