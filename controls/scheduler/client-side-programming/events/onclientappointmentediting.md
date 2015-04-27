---
title: OnClientAppointmentEditing
page_title: OnClientAppointmentEditing | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentEditing
slug: scheduler/client-side-programming/events/onclientappointmentediting
tags: onclientappointmentediting
published: True
position: 5
---

# OnClientAppointmentEditing



The **OnClientAppointmentEditing** client-side event is called before an appointment is edited.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** - returns the appointment instance.

* **get_editingRecurringSeries()** returns **True** if theuser is trying to edit a series to which the appointment belongs, **False** if the user istrying to edit a single occurrence of an appointment.

* **set_cancel()** lets youpermit or block the edit to the appointment. Calling **set_cancel(true)** stops the edit,while **set_cancel(false)** allows the scheduler to bring up an edit form or in-line editorfor the appointment.

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

 * [Replace the Edit Form]({%slug scheduler/how-to/replace-the-edit-form%})
