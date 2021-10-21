---
title: Setting special days or time slots in RadScheduler
description: Setting special days or time slots in RadScheduler. Check it now!
type: how-to
page_title: Setting special days or time slots in RadScheduler
slug: scheduler-setting-special-days-or-time-slots-in-radscheduler
res_type: kb
---


## HOW TO  
 
 Set special days or times slots in RadScheduler.  


## DESCRIPTION 
   
 Two special days are defined in code-behind - June 26 and 27. In the **TimeSlotCreated** event handler the **CssClass** property is set for each time slot within the special days boundaries to visually distinguish the special days.   
   
 Note, that the special days functionality is achieved using time slots which meet certain criteria. You are not limitted to whole days only. You can set special time slots, for example - highlight the time slot for the current System Time.   
   
## SOLUTION  

````ASPX
<style type="text/css">  
   .Disabled  
   {  
      background: silver !important;  
      cursor: not-allowed;  
   }  
   .Disabled.rsAptCreate  
   {  
      background: silver !important;  
   }  
</style> 
<script type="text/javascript">
   //Cancel OnClientAppointmentInserting if a time slot in a special day is double-clicked(insert is attempted). 
   function OnClientAppointmentInserting(sender, eventArgs) {
      var slotElement = $telerik.$(eventArgs.get_targetSlot().get_domElement());
      if (slotElement.is(".Disabled") || slotElement.parent().is(".Disabled")) {
            // Prevent appointment inserting on holidays.
            eventArgs.set_cancel(true);
      }
   }
   //Disable context menu for special slots if it is enabled 
   function pageLoad() {
      $telerik.$(".Disabled").bind("contextmenu", function (e) {
            return false;             
      });
   }
</script>

<telerik:RadScheduler ID="RadScheduler1" runat="server" OnClientAppointmentInserting="OnClientAppointmentInserting"
   SelectedView="WeekView" OnTimeSlotCreated="RadScheduler1_TimeSlotCreated" OnAppointmentUpdate="RadScheduler1_AppointmentUpdate"
   SelectedDate="2008-06-26" OnAppointmentDataBound="RadScheduler1_AppointmentDataBound">
   <TimeSlotContextMenuSettings EnableDefault="true" />
</telerik:RadScheduler>
````
 
````C#
//Set your special days here:
   private readonly DateTime[] SpecialDays = new DateTime[] { new DateTime(2008, 6, 26), new DateTime(2008, 6, 27) };

   protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)
   {
      foreach (DateTime dt in SpecialDays)
      {
         if (DateTime.Compare(e.TimeSlot.Start.Date, dt) == 0)
         {
               //Set the CssClass property to visually distinguish your special days.
               e.TimeSlot.CssClass = "Disabled";
         }
      }
   }

   protected void RadScheduler1_AppointmentUpdate(object sender, Telerik.Web.UI.AppointmentUpdateEventArgs e)
   {
      foreach (DateTime dt in SpecialDays)
      {
         if ((DateTime.Compare(e.ModifiedAppointment.Start.Date, dt) == 0) || (DateTime.Compare(e.ModifiedAppointment.End.Date, dt) == 0))
         {
               e.Cancel = true;
               ScriptManager.RegisterStartupScript(Page, GetType(), "alert", "alert('The duration of appointment contains Special Days!');", true);
         }
      }
   }
````
````VB
'Set your special days here:
Private ReadOnly SpecialDays As DateTime() = New DateTime() {New DateTime(2008, 6, 26), New DateTime(2008, 6, 27)}

Protected Sub RadScheduler1_TimeSlotCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.TimeSlotCreatedEventArgs)
   For Each dt As DateTime In SpecialDays
      If DateTime.Compare(e.TimeSlot.Start.[Date], dt) = 0 Then
            'Set the CssClass property to visually distinguish your special days.
            e.TimeSlot.CssClass = "Disabled"
      End If
   Next
End Sub
Protected Sub RadScheduler1_AppointmentUpdate(ByVal sender As Object, ByVal e As Telerik.Web.UI.AppointmentUpdateEventArgs)
   For Each dt As DateTime In SpecialDays
      If (DateTime.Compare(e.ModifiedAppointment.Start.[Date], dt) = 0) OrElse (DateTime.Compare(e.ModifiedAppointment.[End].[Date], dt) = 0) Then
            e.Cancel = True
            ScriptManager.RegisterStartupScript(Page, [GetType](), "alert", "alert('The duration of appointment contains Special Days!');", True)
      End If
   Next
End Sub
````
   
 If you already have an appointment with duration containing the Special Days - you'll need to disable the editing and deleting of this appointment as it is in the category of "disabled". To achieve this you'll need to subscribe to the OnAppointmentDataBound event and use this code:  
   
````C#
protected void RadScheduler1_AppointmentDataBound(object sender, SchedulerEventArgs e)
{
   foreach (DateTime dt in SpecialDays)
   {
      if ((DateTime.Compare(e.Appointment.Start.Date, dt) == 0) || (DateTime.Compare(e.Appointment.End.Date, dt) == 0))
      {
            e.Appointment.AllowDelete = false;
            e.Appointment.AllowEdit = false;
      }
   }
}
````
````VB
Protected Sub RadScheduler1_AppointmentDataBound(ByVal sender As Object, ByVal e As SchedulerEventArgs)
   For Each dt As DateTime In SpecialDays
      If (DateTime.Compare(e.Appointment.Start.[Date], dt) = 0) OrElse (DateTime.Compare(e.Appointment.[End].[Date], dt) = 0) Then
            e.Appointment.AllowDelete = False
            e.Appointment.AllowEdit = False
      End If
   Next
End Sub
````

### VARIATIONS

Set special days or time slots which meet certain criteria. For example, if you don't know in advance the special dates and you need to disable days which don't have any appointments, then modify the code from the attached project as follows:

```` C#
private List<DateTime> SpecialDays = new List<DateTime>();    
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)           
{                   
   //Check if there are any appointments for the current time slot date:           
   if (RadScheduler1.Appointments.GetAppointmentsInRange(e.TimeSlot.Start.Date, e.TimeSlot.Start.Date.AddDays(1)).Count > 0)           
   {           
      //add this date to the SpecialDays collection           
      SpecialDays.Add(e.TimeSlot.Start.Date);           
      //set your custom css class           
      e.TimeSlot.CssClass = "HasAppointmentsClass";           
   }           
   else          
   {           
      e.TimeSlot.CssClass = "Disabled";           
   }                      
      
}  
````  
     
```` VB
Private SpecialDays As New List(Of DateTime)()  
Protected Sub RadScheduler1_TimeSlotCreated(sender As Object, e As Telerik.Web.UI.TimeSlotCreatedEventArgs)  
   'Check if there are any appointments for the current time slot date:   
   If RadScheduler1.Appointments.GetAppointmentsInRange(e.TimeSlot.Start.[Date], e.TimeSlot.Start.[Date].AddDays(1)).Count > 0 Then 

      SpecialDays.Add(e.TimeSlot.Start.[Date])  

      e.TimeSlot.CssClass = "HasAppointmentsClass" 
   Else 
      e.TimeSlot.CssClass = "Disabled" 
   End If 

End Sub
```` 

Highlight the current day.

````C#
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)           
   {           
      if (DateTime.Compare(e.TimeSlot.Start.Date, DateTime.Now.Date) == 0)            
      {           
         e.TimeSlot.CssClass = "CurrentDayStyle";           
      }              
         
   }          
````    
 
````VB
Protected Sub RadScheduler1_TimeSlotCreated(sender As Object, e As Telerik.Web.UI.TimeSlotCreatedEventArgs)  
    If DateTime.Compare(e.TimeSlot.Start.[Date], DateTime.Now.[Date]) = 0 Then 
        e.TimeSlot.CssClass = "CurrentDayStyle" 
    End If 
End Sub 
````

Hightlight the current time slot.

````C#
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)           
{                    
            
   if ((DateTime.Compare(e.TimeSlot.Start.Date, DateTime.Now.Date)==0)&(e.TimeSlot.Start.Hour == DateTime.Now.Hour))           
   {           
      e.TimeSlot.CssClass = "CurrentTimeSlotStyle";             
   }           
}     
```` 
````VB
Protected Sub RadScheduler1_TimeSlotCreated(sender As Object, e As Telerik.Web.UI.TimeSlotCreatedEventArgs)  
 
    If (DateTime.Compare(e.TimeSlot.Start.[Date], DateTime.Now.[Date]) = 0) And (e.TimeSlot.Start.Hour = DateTime.Now.Hour) Then 
        e.TimeSlot.CssClass = "CurrentTimeSlotStyle" 
    End If 
End Sub 
````


   