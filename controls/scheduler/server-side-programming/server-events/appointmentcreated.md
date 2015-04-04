---
title: AppointmentCreated
page_title: AppointmentCreated | UI for ASP.NET AJAX Documentation
description: AppointmentCreated
slug: scheduler/server-side-programming/server-events/appointmentcreated
tags: appointmentcreated
published: True
position: 5
---

# AppointmentCreated



The __AppointmentCreated__ event occurs immediately after an appointment template is instantiated.

__AppointmentCreated__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __AppointmentCreatedEventArgs__.It has two properties:

* __Appointment__ is the appointment which representation is about to be shown.

* __Container__ is the representation template of the appointment.

You can use this event to modify the appointment template before data binding.

## Example

In this example, the appearance of the appointment is changed based on a custom attribute.A label is updated to show the value of the attribute, and the appointment style sheet is changedto customize the appearance of the appointment based on the attribute.





````C#
	
	    protected void RadScheduler1_AppointmentCreated(object sender, Telerik.Web.UI.AppointmentCreatedEventArgs e)
	    {
	        Label moderatorLabel = (Label)e.Container.FindControl("Moderator");
	        moderatorLabel.Text = e.Appointment.Attributes["Moderator"];
	
	        switch (e.Appointment.Attributes["Moderator"])
	        {
	            case "McGregor":
	                e.Appointment.CssClass = "McGregorStyle";
	                break;
	            case "John Doe":
	                e.Appointment.CssClass = "JDStyle";
	                break;
	            case "Smith":
	                e.Appointment.CssClass = "SmithStyle";
	                break;
	            case "Anderson":
	                e.Appointment.CssClass = "AndersonStyle";
	                break;
	            default:
	                break;
	        }
	    } 
	
````
````VB.NET
	     
	    Protected Sub RadScheduler1_AppointmentCreated(ByVal sender As Object,
	                      ByVal e As Telerik.Web.UI.AppointmentCreatedEventArgs)
	        Handle(RadScheduler1.AppointmentCreated)
	        Dim moderatorLabel As Label = _
	                         DirectCast(e.Container.FindControl("Moderator"), Label)
	        moderatorLabel.Text = e.Appointment.Attributes("Moderator")
	        Select Case e.Appointment.Attributes("Moderator")
	            Case "McGregor"
	                e.Appointment.CssClass = "McGregorStyle"
	                Exit Select
	            Case "John Doe"
	                e.Appointment.CssClass = "JDStyle"
	                Exit Select
	            Case "Smith"
	                e.Appointment.CssClass = "SmithStyle"
	                Exit Select
	            Case "Anderson"
	                e.Appointment.CssClass = "AndersonStyle"
	                Exit Select
	            Case Else
	                Exit Select
	        End Select
	    End Sub
	
````


# See Also

 * [FormCreated]({%slug scheduler/server-side-programming/server-events/formcreated%})

 * [Templates]({%slug scheduler/appearance-and-styling/templates%})

 * [Custom Resources and Attributes]({%slug scheduler/design-time/custom-resources-and-attributes%})

 * [AppointmentDataBound]({%slug scheduler/server-side-programming/server-events/appointmentdatabound%})
