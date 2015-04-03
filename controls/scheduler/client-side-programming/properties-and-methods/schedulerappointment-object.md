---
title: SchedulerAppointment Object
page_title: SchedulerAppointment Object | UI for ASP.NET AJAX Documentation
description: SchedulerAppointment Object
slug: scheduler/client-side-programming/properties-and-methods/schedulerappointment-object
tags: schedulerappointment,object
published: True
position: 1
---

# SchedulerAppointment Object



The SchedulerAppointment client-side object represents a single instance of an Appointment.

The tables below lists the most important, public properties of the SchedulerAppointment client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_allowDelete()__  __set_allowDelete()__ |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment can be deleted.|
| __get_allowEdit()__  __set_allowEdit()__ |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment can be edited.|
| __get_attributes()__ |None|[SchedulerAttributeCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})|Gets all Attributes of the Appointment.|
| __get_backColor()__  __set_backColor()__ |NoneString|StringNone|Gets or sets the backColor of the Appointment.|
| __get_borderColor()__  __set_borderColor()__ |NoneString|StringNone|Gets or sets the borderColor of the Appointment.|
| __get_borderStyle()__  __set_borderStyle()__ |NoneString|StringNone|Gets or sets the borderStyle of the Appointment.(Works only if the __AppointmentStyleMode="Simple"__ )|
| __get_borderWidth()__  __set_borderWidth()__ |NoneString|StringNone|Gets or sets the borderWidth of the Appointment.(Works only if the __AppointmentStyleMode="Simple"__ )|
| __get_contextMenu()__ |None|ContextMenu|Gets the ContextMenu of the Appointment.

````JavaScript
	     
	 function OnClientAppointmentClick(sender, args) {
	                var contextMenu = args.get_appointment().get_contextMenu();
	                contextMenu.show(args.get_domEvent());
	            }
				
````

|
| __get_cssClass()__  __set_cssClass()__ |NoneString|StringNone|Gets or sets the cssClass of the Appointment.|
| __get_description()__  __set_description()__ |NoneString|StringNone|Gets or sets the description of the Appointment.|
| __get_duration()__ |None|Int|Gets the duration of the Appointment in milliseconds.|
| __get_durationInMinutes()__ |None|Int|Gets the duration of the Appointment in minutes.|
| __get_element()__ |None|DomElement|Gets the DomElement representing the Appointment.|
| __get_elements()__ |None|Array of DomElements|Gets all DomElements that represent this appointment (for multi-part appointments)|
| __get_end()__  __set_end()__ |NoneDate|DateNone|Gets or sets the end date of the Appointment.|
| __get_id()__ |None|Int|Gets the ID of the Appointment|
| __get_radScheduler()__ |None|RadScheduler|Gets the owner Scheduler.|
| __get_recurrenceParentID()__ |None|Int / undefined|Gets the ID of the parent Appointment if the current Appointment is recurrent or __'undefined'__ otherwise.|
| __get_recurrenceState()__ |None|Telerik.Web.UI.RecurrenceState or int|Gets the recurrence state of the Appointment. __RecurrenceState__ can be:

*  __"NotRecurring"__ or 0

*  __"Master"__ or 1

*  __"Occurrence"__ or 2

*  __"Exception"__ or 3|
| __get_recurrenceRule()__ |None|String|Gets the recurrence rule of the Appointment if it is __"Master"__ and WebService binding is used or __'undefined'__ otherwise.|

````JavaScript
	
	function OnClientAppointmentClick(sender, args) {
	            var appointment = args.get_appointment();
	            appointment.set_allowEdit(true);
	            var description = appointment.get_description();
	            if (appointment.get_recurrenceState() == Telerik.Web.UI.RecurrenceState.NotRecurring) {
	                appointment.set_description("This appointment is not recurring.");
	            }
	            else if (appointment.get_recurrenceState() == Telerik.Web.UI.RecurrenceState.Master) {
	                var rrule = appointment.get_recurrenceRule();
	                appointment.set_description(rrule);
	            }
	            else if (appointment.get_recurrenceState() == Telerik.Web.UI.RecurrenceState.Occurrence) {
	                appointment.set_description("This is an occurence.");
	            }
	            else if (appointment.get_recurrenceState() == Telerik.Web.UI.RecurrenceState.Exception) {
	                appointment.set_description("This is an exception.");
	            }            
	}      
	
````




|  __get_reminders()__  | None | [Telerik.Web.UI.ReminderCollection]({%slug scheduler/client-side-programming/properties-and-methods/remindercollection-object%}) | Gets a collection of reminders for the Appointment |
| ------ | ------ | ------ | ------ |
| __get_resources()__ |None|[Telerik.Web.UI.SchedulerResourceCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresourcecollection-object%})|Gets a collection of resources for the Appointment|
| __get_start()__  __set_start()__ |NoneDate|DateNone|Gets or sets the start date of the Appointment.|
| __get_subject()__  __set_subject()__ |NoneString|StringNone|Gets or sets the subject of the Appointment.|
| __get_selected()__  __set_selected()__ |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment is selected.|
| __get_timeSlot()__ |None|TimeSlot|Gets the asociated time slot object for the current Appointment.|
| __get_toolTip()__  __set_toolTip()__ |NoneString|StringNone|Gets or sets the ToolTip of the Appointment.|
| __get_visible()__ |None|Boolean|Gets a Boolean value indicating whether the Appointment is visible.|
| ___isAllDay()__ |None|Boolean|Gets a Boolean value indicating whether the Appointment's duration is all day or not.|
| __clone()__ |None|Appointment|Creats a new Appointment that is copy of the instant one.

````JavaScript
	
	function onClientAppointmentClick(sender, args)
	{
	             var appointment = args.get_appointment();
	             var newAppointment = app.clone();
	             sender.insertAppointment(newAppointment);
	}      
	
````

|

>note The properties __set_subject()__ , __set_start()__ and __set_end()__ will persist after postback.
>


````JavaScript
	
	 function OnClientAppointmentClick(sender, args) {
	            var appointment = args.get_appointment();
	            var subject = appointment.get_subject();
	            appointment.set_subject("new" + subject);
	            var start = appointment.get_start();
	            var newStart = new Date(start);
	            newStart.setMinutes(newStart.getMinutes() - 45);
	            app.set_start(newStart);
	            var end = appointment.get_end();
	            var newEnd = new Date(end);
	            newEnd.setMinutes(newEnd.getMinutes() + 45);
	            appointment.set_end(newEnd);
	            sender.updateAppointment(appointment);
	}      
	
````



>note The other setters can update the appointment in case of WebService binding where there __is NO postback__ and the onClientAppointmentDataBound is fired.
>


````JavaScript
	
	function OnClientAppointmentDataBound(sender, args) {
	            var appointment = args.get_appointment();
	            appointment.set_backColor("red");
	            appointment.get_attributes().setAttribute("Loacation", "Sofia");
	            appointment.set_description("description");
	            appointment.set_borderColor("red");
	            appointment.set_borderStyle("dotted");
	            appointment.set_borderWidth(1);
	            appointment.set_allowDelete(false);
	            appointment.set_allowEdit(false);
	
	        }    
	
````



# See Also

 * [RadScheduler Object]({%slug scheduler/client-side-programming/properties-and-methods/radscheduler-object%})

 * [SchedulerAttributeCollection Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
