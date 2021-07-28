---
title: How to preserve the time of the appointments when exporting to iCalendar
description: How to preserve the time of the RadScheduler appointments when exporting to iCalendar. Check it now!
type: how-to
page_title: How to preserve the time of the appointments when exporting to iCalendar
slug: scheduler-how-to-preserve-the-time-of-the-appointments-when-exporting-to-icalendar
res_type: kb
---



   
## HOW-TO  
   
 How to preserve the time of the appointments when exporting to iCalendar regardless of the system's   
 **CurrentTimeZone** and RadScheduler's **TimeZoneOffset** value.   
   
   
## SOLUTION  
  
Refer to the [iCalendar Export](https://demos.telerik.com/aspnet-ajax/scheduler/examples/export/defaultcs.aspx) online example and modify the code for the AppointementCommand event as follows:  
   
````C#
protected void RadScheduler1_AppointmentCommand(object sender, AppointmentCommandEventArgs e)        
        {        
            if (e.CommandName == "Export")        
            {        
                DateTime aptStart = DateTime.SpecifyKind(e.Container.Appointment.Start, DateTimeKind.Local);        
                TimeSpan aptStartOffset = TimeZone.CurrentTimeZone.GetUtcOffset(aptStart) - RadScheduler1.TimeZoneOffset;        
                string iCal = RadScheduler.ExportToICalendar(e.Container.Appointment, aptStartOffset);        
       
                WriteCalendar(iCal);        
            }        
        }  
````
````VB
Protected Sub RadScheduler1_AppointmentCommand(ByVal sender As Object, ByVal e As AppointmentCommandEventArgs) Handles RadScheduler1.AppointmentCommand     
    
            If e.CommandName = "Export" Then    
                Dim aptStart = DateTime.SpecifyKind(e.Container.Appointment.Start, DateTimeKind.Local)     
                Dim aptStartOffset As TimeSpan = TimeZone.CurrentTimeZone.GetUtcOffset(aptStart) - RadScheduler1.TimeZoneOffset     
                Dim iCal As String = RadScheduler.ExportToICalendar(e.Container.Appointment, aptStartOffset)     
    
                WriteCalendar(iCal)     
    
            End If    
        End Sub  
````


  