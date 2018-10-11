---
title: Export to ICalendar
page_title: Export to ICalendar | RadScheduler for ASP.NET AJAX Documentation
description: Export to ICalendar
slug: scheduler/export/export-to-icalendar
tags: export,to,icalendar
published: True
position: 1
---

# Export to ICalendar



## 

**RadScheduler** allows you to export appointments in the industry-standard ICalendar format.

1. Add a **RadScheduler** control to your Web page and [bind it to a data source]({%slug scheduler/data-binding/overview%}).

1. Add a [custom template]({%slug scheduler/appearance-and-styling/templates%}) to the scheduler so that each appointment has an export button:

	**ASP.NET**
	 
		 <AppointmentTemplate>
		 <%# Eval("Subject") %>
		 <div style="text-align: right;">
			<span style="cursor: pointer; cursor: hand;">
			  <asp:ImageButton runat="server" ID="Button1" ImageUrl="Outlook.gif" AlternateText="Export to iCalendar"
			  CommandName="Export" OnClientClick="Export(this, event); return false;" />
			</span>
		 </div>
		</AppointmentTemplate>
	


1. On the codebehind page for your Web page, add a private helper method to your Page class that can write the ICalendar strings youto the HTTP response:

	**C#**
	
		private void WriteCalendar(string data)
		{
			HttpResponse response = Page.Response;
			response.Clear();
			response.Buffer = true;
			response.ContentType = "text/calendar";
			response.ContentEncoding = Encoding.UTF8;
			response.Charset = "utf-8";
			response.AddHeader("Content-Disposition", "attachment;filename=\"RadSchedulerExport.ics\"");
			response.Write(data);
			response.End();
		} 
	
	**VB**
	
		Private Sub WriteCalendar(ByVal data As String)
			Dim response As HttpResponse = Page.Response
			response.Clear()
			response.Buffer = True
			response.ContentType = "text/calendar"
			response.ContentEncoding = Encoding.UTF8
			response.Charset = "utf-8"
			response.AddHeader("Content-Disposition", _
					  "attachment;filename=""RadSchedulerExport.ics""")
			response.Write(data)
			response.[End]()
		End Sub
			


1. Give the scheduler an **AppointmentCommand** event handler to respond when the user clicks the new button in the template.This event handler uses the RadScheduler's static **ExportToICalendar** method that takes a single appointment as first parameter and converts it into the ICalendar format. Its second parameter **hasTimeZones** is indicating whether time zone support is enabled.



	**C#**
	
		protected void RadScheduler1_AppointmentCommand(object sender, AppointmentCommandEventArgs e)
		{
			if (e.CommandName == "Export")
			{
				//exporting a single appointment that supports time zones
				WriteCalendar(RadScheduler.ExportToICalendar(e.Container.Appointment, true));
			}
		}  
	

	**VB**
	
		Protected Sub RadScheduler1_AppointmentCommand(ByVal sender As Object,
		ByVal e As AppointmentCommandEventArgs) Handles RadScheduler1.AppointmentCommand
			If e.CommandName = "Export" Then
				'exporting a single appointment that supports time zones
				WriteCalendar(RadScheduler.ExportToICalendar(e.Container.Appointment, True))
			End If
		End Sub
	

1. Add **ImageButton** control with the same image as the one in the appointment template. On its **Click** event,add an event handler to export all of the appointments in the scheduler. This event handler calls the RadScheduler's static **ExportToICalendar** method to convert a collection of appointments to the ICalendar format:



	**C#**
	
		protected void Button1_Click(object sender, ImageClickEventArgs e)
		{
			//exporting a collection of appointments that do not support time zones
			WriteCalendar(RadScheduler.ExportToICalendar(RadScheduler1.Appointments, false));
		}
	

	**VB**
	
	    Protected Sub Button1_Click(ByVal sender As Object,
	     ByVal e As ImageClickEventArgs) Handles Button1.Click
	        'exporting a collection of appointments that do not support time zones
	        WriteCalendar(RadScheduler.ExportToICalendar(RadScheduler1.Appointments, False))
	    End Sub
	

>tip The `ExportToICalendar` method sets the *Location* of the .ics event to the value of the *Location* attribute of the exported appointment.

# See Also

 * [AppointmentCommand]({%slug scheduler/server-side-programming/server-events/appointmentcommand%})

 * [Scheduler - iCalendar Export demo](http://demos.telerik.com/aspnet-ajax/scheduler/examples/export/defaultcs.aspx)

 * [Code Library Project: Import ICalendar Data](http://www.telerik.com/support/code-library/import-icalendar-data)
