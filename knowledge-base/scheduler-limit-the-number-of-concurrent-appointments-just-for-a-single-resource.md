---
title: Limit the number of concurrent appointments just for a single resource. 
description: Limit the number of concurrent appointments just for a single resource. . Check it now!
type: how-to
page_title: Limit the number of concurrent appointments just for a single resource. 
slug: scheduler-limit-the-number-of-concurrent-appointments-just-for-a-single-resource
res_type: kb
---

## HOW-TO  
   
 Limit the number of concurrent appointments just for a single resource.   
   
## DESCRIPTION  
   
 This is an extension to the example on [Limiting the number of concurrent appointments](https://demos.telerik.com/aspnet-ajax/scheduler/examples/limitconcurrentappointments/defaultcs.aspx). With the added functionality to the attached sample, the limitation for concurrent appointments is done just for a single resource. For example, if there is an appointment scheduled for Group A, you can schedule another appointment in the same time for Group B.   
   
## SOLUTION  
   
````C#
private const int AppointmentsLimit = 1;  
 
        private void Page_Load(object sender, EventArgs e)  
        {  
              
        }  
        protected bool ExceedsLimitForResource(Appointment apt, string resourceType)  
        {  
            int appointmentsCount = 0;  
            if (apt.Resources.GetResourceByType(resourceType) != null)  
            {  
                foreach (Appointment a in RadScheduler1.Appointments.GetAppointmentsInRange(apt.Start, apt.End))  
                {  
                    if (apt.Resources.GetResourceByType(resourceType).Key.ToString() == a.Resources.GetResourceByType(resourceType).Key.ToString())  
                    {                          
                        //If inserting a new appontment apt.ID will be null so we need to handle this case:  
                        if (apt.ID != null)  
                        {  
                            //This check is needed to allow an update for an existing appointment through the  
                            //edit form or advanced edit form. If we don't handle this case an update of an appointment  
                            //is only possible through drag-and-drop.   
                            if (apt.ID.ToString() != a.ID.ToString())  
                                appointmentsCount++;  
 
                        }  
                        else 
                        {  
                            appointmentsCount++;  
                        }  
                      
                    }    
                }  
            }  
            else 
            {  
                appointmentsCount = RadScheduler1.Appointments.GetAppointmentsInRange(apt.Start, apt.End).Count;  
            }          
            return (appointmentsCount > AppointmentsLimit - 1);  
        }  
        protected void RadScheduler1_AppointmentInsert(object sender, Telerik.Web.UI.SchedulerCancelEventArgs e)  
        {  
            if (ExceedsLimitForResource(e.Appointment, RadScheduler1.GroupBy))  
            {  
                Label1.Text = "Another appointment exists in this time slot.";  
                e.Cancel = true;  
            }  
        }  
        protected void RadScheduler1_AppointmentUpdate(object sender, Telerik.Web.UI.AppointmentUpdateEventArgs e)  
        {  
            if (ExceedsLimitForResource(e.ModifiedAppointment, RadScheduler1.GroupBy))  
            {  
                foreach (Appointment a in RadScheduler1.Appointments.GetAppointmentsInRange(e.ModifiedAppointment.Start, e.ModifiedAppointment.End))  
                {  
                    if (a.ID != e.Appointment.ID)  
                    {  
                        Label1.Text = "Another appointment exists in this time slot.";  
                        e.Cancel = true;  
                    }  
                }  
            }   
        }  
        protected void RadScheduler1_AppointmentCancelingEdit(object sender, AppointmentCancelingEditEventArgs e)  
        {  
            Label1.Text = "";  
        }    
````
````VB
Private Const AppointmentsLimit As Integer = 1  
 
    Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)  
 
    End Sub 
    Protected Function ExceedsLimitForResource(ByVal apt As Appointment, ByVal resourceType As String) As Boolean 
        Dim appointmentsCount As Integer = 0  
        If apt.Resources.GetResourceByType(resourceType) <> Nothing Then 
            For Each a As Appointment In RadScheduler1.Appointments.GetAppointmentsInRange(apt.Start, apt.[End])  
                If apt.Resources.GetResourceByType(resourceType).Key.ToString() = a.Resources.GetResourceByType(resourceType).Key.ToString() Then 
                    'If inserting a new appontment, apt.ID will be null so we need to handle this case:  
                    If apt.ID <> Nothing Then 
                        ' This check is needed to allow an update for an existing appointment through the  
                        'edit form or advanced edit form. If we don't handle this case an update of an appointment  
                        'would only be possible through drag-and-drop.   
                        If apt.ID.ToString() <> a.ID.ToString() Then 
                            System.Math.Max(System.Threading.Interlocked.Increment(appointmentsCount), appointmentsCount - 1)  
                        End If 
                    Else 
                        System.Math.Max(System.Threading.Interlocked.Increment(appointmentsCount), appointmentsCount - 1)  
 
                    End If 
                End If 
            Next 
        Else 
            appointmentsCount = RadScheduler1.Appointments.GetAppointmentsInRange(apt.Start, apt.[End]).Count  
        End If 
        Return (appointmentsCount > AppointmentsLimit - 1)  
    End Function 
    Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, ByVal e As Telerik.Web.UI.SchedulerCancelEventArgs)  
        If ExceedsLimitForResource(e.Appointment, RadScheduler1.GroupBy) Then 
            Label1.Text = "Another appointment exists in this time slot." 
            e.Cancel = True 
        End If 
    End Sub 
    Protected Sub RadScheduler1_AppointmentUpdate(ByVal sender As Object, ByVal e As Telerik.Web.UI.AppointmentUpdateEventArgs)  
        If ExceedsLimitForResource(e.ModifiedAppointment, RadScheduler1.GroupBy) Then 
            For Each a As Appointment In RadScheduler1.Appointments.GetAppointmentsInRange(e.ModifiedAppointment.Start, e.ModifiedAppointment.[End])  
                If a.ID <> e.Appointment.ID Then 
                    Label1.Text = "Another appointment exists in this time slot." 
                    e.Cancel = True 
                End If 
            Next 
        End If 
    End Sub 
    Protected Sub RadScheduler1_AppointmentCancelingEdit(ByVal sender As Object, ByVal e As AppointmentCancelingEditEventArgs)  
        Label1.Text = "" 
    End Sub 
````
 


   