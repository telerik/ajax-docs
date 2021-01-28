---
title: OnClientRecurrenceActionDialogClosed
page_title: OnClientRecurrenceActionDialogClosed - RadScheduler
description: Check our Web Forms article about OnClientRecurrenceActionDialogClosed.
slug: scheduler/client-side-programming/events/onclientrecurrenceactiondialogclosed
tags: onclientrecurrenceactiondialogclosed
published: True
position: 16
---

# OnClientRecurrenceActionDialogClosed



The **OnClientRecurrenceActionDialogClosed** client-side event is called when the dialog that asks whether achange affects a single occurrence or an entire series closes. Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** that returns the appointment instance.

* **get_editSeries()** returns **True** if the user has selected to edit the series, **False** if the user has selected to edit a single occurrence of an appointment.

* **get_recurrenceAction()** returns **1** for **edit**, **2** for **delete**, **3** for **resize**, and **4** for **move**.

## Example

This example alerts what action will follow after the dialog is closed:

````ASPNET
	
<script type="text/javascript">
   function OnClientRecurrenceActionDialogClosed(sender, eventArgs)
   {           
	   switch(eventArgs.get_recurrenceAction())
	   {           
		   case Telerik.Web.UI.RecurrenceAction.Edit:
			   alert("The appointment will be edited");
			   break;    
		   case Telerik.Web.UI.RecurrenceAction.Delete:
			   alert("The appointment will be deleted");
			   break;
		   case Telerik.Web.UI.RecurrenceAction.Resize:
			   alert("The appointment will be resized");
			   break;
		   case Telerik.Web.UI.RecurrenceAction.Move:
			   alert("The appointment will be moved");
			   break;
	   }            
   }        
</script>
<telerik:RadScheduler
   ID="RadScheduler1"
   runat="server"  
   OnClientRecurrenceActionDialogClosed="OnClientRecurrenceActionDialogClosed"
   DataSourceID="AppointmentsDS" /> 
		
````




