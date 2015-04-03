---
title: OnClientAppointmentEditing
page_title: OnClientAppointmentEditing | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentEditing
slug: scheduler/client-side-programming/events/onclientappointmentediting
tags: onclientappointmentediting
published: True
position: 5
---

# OnClientAppointmentEditing



The __OnClientAppointmentEditing__ client-side event is called before an appointment is edited.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ - returns the appointment instance.

* __get_editingRecurringSeries()__ returns __True__ if theuser is trying to edit a series to which the appointment belongs, __False__ if the user istrying to edit a single occurrence of an appointment.

* __set_cancel()__ lets youpermit or block the edit to the appointment. Calling __set_cancel(true)__ stops the edit,while __set_cancel(false)__ allows the scheduler to bring up an edit form or in-line editorfor the appointment.

## Example

This example prevents the user from editing an appointment's series:

````ASPNET
	
	<script type="text/javascript">   
	  function OnClientAppointmentEditing(sender, eventArgs)
	  {
	    if(eventArgs.get_editingRecurringSeries())
	          eventArgs.set_cancel(true);
	  }
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentEditing="OnClientAppointmentEditing"
	 DataSourceID="AppointmentsDS" />     
	
````



# See Also

 * [Replace the Edit Form]({%slug scheduler/application-scenarios/replace-the-edit-form%})
