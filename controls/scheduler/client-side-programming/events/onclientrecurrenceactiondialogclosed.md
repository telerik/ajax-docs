---
title: OnClientRecurrenceActionDialogClosed
page_title: OnClientRecurrenceActionDialogClosed | UI for ASP.NET AJAX Documentation
description: OnClientRecurrenceActionDialogClosed
slug: scheduler/client-side-programming/events/onclientrecurrenceactiondialogclosed
tags: onclientrecurrenceactiondialogclosed
published: True
position: 16
---

# OnClientRecurrenceActionDialogClosed



The __OnClientRecurrenceActionDialogClosed__ client-side event is called when the dialog that asks whether achange affects a single occurrence or an entire series closes. Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ that returns the appointment instance.____

* __get_editSeries()__ returns __True__ if the user has selected to edit the series, __False__ if the user has selected to edit a single occurrence of an appointment.

* __get_recurrenceAction()__returns __1__ for __edit__, __2__ for __delete__, __3__ for __resize__, and __4__ for __move__.

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




