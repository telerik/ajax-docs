---
title: Edit and Insert Appointment with Single Click
page_title: Edit and Insert Appointment with Single Click | RadScheduler for ASP.NET AJAX Documentation
description: Edit and Insert Appointment with Single Click
slug: scheduler/how-to/edit-and-insert-appointment-with-single-click
tags: edit,and,insert,appointment,with,single,click
published: True
position: 9
---

# Edit and Insert Appointment with Single Click



This article shows how to edit and/or insert a new appointment with single click of the mouse (by default you need to double click to do that).

## Insert an appointment with single click

You need to subscribe to the [OnClientTimeSlotClick]({%slug scheduler/client-side-programming/events/onclienttimeslotclick%}) event and define its event handler as follows:

````JavaScript
	
	
function insertAppointment(sender, e) {
	var slot = sender.get_activeModel().getTimeSlotFromDomElement(e.get_domEvent().target);
	sender.showInsertFormAt(slot);
}

````





## Edit an appointment with single click

You need to subscribe to the [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%}) event and define its handler as follows:

````JavaScript
	
	
function editAppointment(sender, e) {
	var apt = e.get_appointment();
	sender.editAppointmentWithConfirmation(apt);
}
	
````


