---
title: Pinning all day appointments for different time zones
description: Pinning all day appointments for different time zones. Check it now!
type: how-to
page_title: Pinning all day appointments for different time zones
slug: scheduler-pinning-all-day-appointments-for-different-time-zones
res_type: kb
---

 ## How To
   
 Pin all day appointments for different time zones.  
   
 ## Description

 RadScheduler does not keep any additional time zone information in the database. Once the offset changes, it can no longer tell which is an all-day appointment and which is an appointment that spans 24 hours.  

 ## Solution 
  
 The problem can be solved with the help of custom attributes. When an all-day event is created, we will might change the value of the custom attribute with the current time zone offset. We should also clear the attribute when the appointment is no longer all-day.   
   
````C#
protected void Page_Load(object sender, EventArgs e)  
    {  
        if (!Page.IsPostBack)  
        {  
            RadScheduler1.TimeZoneOffset = TimeSpan.FromHours(-5);  
            TimeZoneDropDown.SelectedValue = RadScheduler1.TimeZoneOffset.ToString();  
        }  
    }  
 
    protected void TimeZoneDropDown_SelectedIndexChanged(object sender, EventArgs e)  
    {  
        RadScheduler1.TimeZoneOffset = TimeSpan.Parse(TimeZoneDropDown.SelectedValue);  
    }  
 
    protected void RadScheduler1_AppointmentInsert(object sender, SchedulerCancelEventArgs e)  
    {  
        ApplyAllDayCorrection(e.Appointment);  
    }  
 
    protected void RadScheduler1_AppointmentUpdate(object sender, AppointmentUpdateEventArgs e)  
    {  
        ApplyAllDayCorrection(e.ModifiedAppointment);  
    }  
 
    protected void RadScheduler1_AppointmentDataBound(object sender, SchedulerEventArgs e)  
    {  
        string originalTzOffsetAttrib = e.Appointment.Attributes["AllDayOriginalTimeZone"];  
        if (!string.IsNullOrEmpty(originalTzOffsetAttrib))  
        {  
            //  We need to determine the the amount of hours to correct the appointment's time  
            TimeSpan originalTzOffset = TimeSpan.Parse(originalTzOffsetAttrib);  
            //  Again, actual values should be taken from the RadScheduler instance  
            TimeSpan correction = (originalTzOffset - RadScheduler1.TimeZoneOffset);  
            //  No correction needed  
            if ((correction == TimeSpan.Zero))  
            {  
                return;  
            }  
            e.Appointment.Start = e.Appointment.Start.Add(correction);  
            e.Appointment.End = e.Appointment.End.Add(correction);  
 
            // Update the time zone  
            e.Appointment.Attributes["AllDayOriginalTimeZone"] = RadScheduler1.TimeZoneOffset.ToString();  
 
            //  If the appointment is recurring we also need to adjust the time zone of the rules  
        }  
    }  
 
    private void ApplyAllDayCorrection(Appointment apt)  
    {  
        //  We will add a custom attribute only to the all-day appointments  
        //   
        //  The criteria for all-day appointment might vary.  
        //   
        //  For example:  
        //     (RadScheduler1.UtcToDisplay(e.Appointment.Start).Date = e.Appointment.Start) And  
        //     (e.Appointment.Duration.TotalHours >= 24)  
        //   
        //  i.e. the Appointment starts at midnight and lasts more than 24 hours.  
        //   
        //   
        //  A very simple check might be:  
        if ((apt.Duration.TotalHours == 24))  
        {  
            TimeSpan currentTzOffset = RadScheduler1.TimeZoneOffset;  
            apt.Attributes["AllDayOriginalTimeZone"] = currentTzOffset.ToString();  
        }  
        else 
        {  
            //  Remove the attribute if the appointment is no longer all-day  
            apt.Attributes.Remove("AllDayOriginalTimeZone");  
        }  
    } 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
   If Not Page.IsPostBack Then
      RadScheduler1.TimeZoneOffset = TimeSpan.FromHours(-5)
      TimeZoneDropDown.SelectedValue = RadScheduler1.TimeZoneOffset.ToString()
   End If
End Sub

Protected Sub TimeZoneDropDown_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
   RadScheduler1.TimeZoneOffset = TimeSpan.Parse(TimeZoneDropDown.SelectedValue)
End Sub

Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, ByVal e As SchedulerCancelEventArgs)
   ApplyAllDayCorrection(e.Appointment)
End Sub

Protected Sub RadScheduler1_AppointmentUpdate(ByVal sender As Object, ByVal e As AppointmentUpdateEventArgs)
   ApplyAllDayCorrection(e.ModifiedAppointment)
End Sub

Protected Sub RadScheduler1_AppointmentDataBound(ByVal sender As Object, ByVal e As SchedulerEventArgs)
   Dim originalTzOffsetAttrib As String = e.Appointment.Attributes("AllDayOriginalTimeZone")

   If Not String.IsNullOrEmpty(originalTzOffsetAttrib) Then
      Dim originalTzOffset As TimeSpan = TimeSpan.Parse(originalTzOffsetAttrib)
      Dim correction As TimeSpan = (originalTzOffset - RadScheduler1.TimeZoneOffset)

      If (correction = TimeSpan.Zero) Then
            Return
      End If

      e.Appointment.Start = e.Appointment.Start.Add(correction)
      e.Appointment.[End] = e.Appointment.[End].Add(correction)
      e.Appointment.Attributes("AllDayOriginalTimeZone") = RadScheduler1.TimeZoneOffset.ToString()
   End If
End Sub

Private Sub ApplyAllDayCorrection(ByVal apt As Appointment)
   If (apt.Duration.TotalHours = 24) Then
      Dim currentTzOffset As TimeSpan = RadScheduler1.TimeZoneOffset
      apt.Attributes("AllDayOriginalTimeZone") = currentTzOffset.ToString()
   Else
      apt.Attributes.Remove("AllDayOriginalTimeZone")
   End If
End Sub
````
 
 

