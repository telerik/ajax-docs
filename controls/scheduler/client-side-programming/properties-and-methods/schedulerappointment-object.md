---
title: SchedulerAppointment Object
page_title: SchedulerAppointment Object | RadScheduler for ASP.NET AJAX Documentation
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
| **get_allowDelete()**  **set_allowDelete()** |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment can be deleted.|
| **get_allowEdit()**  **set_allowEdit()** |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment can be edited.|
| **get_attributes()** |None|[SchedulerAttributeCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})|Gets all Attributes of the Appointment.|
| **get_backColor()**  **set_backColor()** |NoneString|StringNone|Gets or sets the backColor of the Appointment.|
| **get_borderColor()**  **set_borderColor()** |NoneString|StringNone|Gets or sets the borderColor of the Appointment.|
| **get_borderStyle()**  **set_borderStyle()** |NoneString|StringNone|Gets or sets the borderStyle of the Appointment.(Works only if the **AppointmentStyleMode="Simple"** )|
| **get_borderWidth()**  **set_borderWidth()** |NoneString|StringNone|Gets or sets the borderWidth of the Appointment.(Works only if the **AppointmentStyleMode="Simple"** )|
| **get_contextMenu()** |None|ContextMenu|Gets the ContextMenu of the Appointment.

````JavaScript
	     
	 function OnClientAppointmentClick(sender, args) {
	                var contextMenu = args.get_appointment().get_contextMenu();
	                contextMenu.show(args.get_domEvent());
	            }
				
````

|
| **get_cssClass()**  **set_cssClass()** |NoneString|StringNone|Gets or sets the cssClass of the Appointment.|
| **get_description()**  **set_description()** |NoneString|StringNone|Gets or sets the description of the Appointment.|
| **get_duration()** |None|Int|Gets the duration of the Appointment in milliseconds.|
| **get_durationInMinutes()** |None|Int|Gets the duration of the Appointment in minutes.|
| **get_element()** |None|DomElement|Gets the DomElement representing the Appointment.|
| **get_elements()** |None|Array of DomElements|Gets all DomElements that represent this appointment (for multi-part appointments)|
| **get_end()**  **set_end()** |NoneDate|DateNone|Gets or sets the end date of the Appointment.|
| **get_id()** |None|Int|Gets the ID of the Appointment|
| **get_radScheduler()** |None|RadScheduler|Gets the owner Scheduler.|
| **get_recurrenceParentID()** |None|Int / undefined|Gets the ID of the parent Appointment if the current Appointment is recurrent or **'undefined'** otherwise.|
| **get_recurrenceState()** |None|Telerik.Web.UI.RecurrenceState or int|Gets the recurrence state of the Appointment. **RecurrenceState** can be:

*  **"NotRecurring"** or 0

*  **"Master"** or 1

*  **"Occurrence"** or 2

*  **"Exception"** or 3|
| **get_recurrenceRule()** |None|String|Gets the recurrence rule of the Appointment if it is **"Master"** and WebService binding is used or **'undefined'** otherwise.|

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




|  **get_reminders()**  | None | [Telerik.Web.UI.ReminderCollection]({%slug scheduler/client-side-programming/properties-and-methods/remindercollection-object%}) | Gets a collection of reminders for the Appointment |
| ------ | ------ | ------ | ------ |
| **get_resources()** |None|[Telerik.Web.UI.SchedulerResourceCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresourcecollection-object%})|Gets a collection of resources for the Appointment|
| **get_start()**  **set_start()** |NoneDate|DateNone|Gets or sets the start date of the Appointment.|
| **get_subject()**  **set_subject()** |NoneString|StringNone|Gets or sets the subject of the Appointment.|
| **get_selected()**  **set_selected()** |NoneBoolean|BooleanNone|Gets or sets a Boolean value indicating whether the Appointment is selected.|
| **get_timeSlot()** |None|TimeSlot|Gets the asociated time slot object for the current Appointment.|
| **get_toolTip()**  **set_toolTip()** |NoneString|StringNone|Gets or sets the ToolTip of the Appointment.|
| **get_visible()** |None|Boolean|Gets a Boolean value indicating whether the Appointment is visible.|
| **_isAllDay()** |None|Boolean|Gets a Boolean value indicating whether the Appointment's duration is all day or not.|
| **clone()** |None|Appointment|Creats a new Appointment that is copy of the instant one.

````JavaScript
	
	function onClientAppointmentClick(sender, args)
	{
	             var appointment = args.get_appointment();
	             var newAppointment = app.clone();
	             sender.insertAppointment(newAppointment);
	}      
	
````

|

>note The properties **set_subject()** , **set_start()** and **set_end()** will persist after postback.
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



>note The other setters can update the appointment in case of WebService binding where there **is NO postback** and the onClientAppointmentDataBound is fired.
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
