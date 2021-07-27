---
title: How to check if an appointment occurs on a particular day of the week
description: How to check if an appointment occurs on a particular day of the week - RadSheduler. Check it now!
type: how-to
page_title: How to check if an appointment occurs on a particular day of the week
slug: scheduler-how-to-check-if-an-appointment-occurs-on-a-particular-day-of-the-week
res_type: kb
---

#HOW-TO 
Check if an appointment occurs on a particular day of the week  
   
## DESCRIPTION  
   
 The code sample below parses a recurrence rule and checks if the recurrent appointment occurs on Sunday.   
   
## SOLUTION  
   
````C#
protected void Page_Load(object sender, EventArgs e)  
    {  
        string recurrenceString;  
 
        recurrenceString = "DTSTART:20080603T100000Z" + Environment.NewLine + "DTEND:20080603T090000Z" + Environment.NewLine + "RRULE:FREQ=DAILY;UNTIL=20080906T000000Z;INTERVAL=7;BYDAY=MO,TU,WE,SU";  
 
        RecurrenceRule parsedRule;  
        RecurrenceRule.TryParse(recurrenceString, out parsedRule);  
 
        if ((parsedRule.Pattern.DaysOfWeekMask & RecurrenceDay.Sunday) == RecurrenceDay.Sunday)  
        {  
            Response.Write("Appointment occurs on Sunday.");  
        }  
        else 
        {  
            Response.Write("Appointment occurs does not on Sunday.");  
        }  
    } 
````
````VB
 Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load  
        Dim recurrenceString As String 
 
        recurrenceString = "DTSTART:20080603T100000Z" + Environment.NewLine + "DTEND:20080603T090000Z" + Environment.NewLine + "RRULE:FREQ=DAILY;UNTIL=20080906T000000Z;INTERVAL=7;BYDAY=MO,TU,WE,SU" 
 
        Dim parsedRule As RecurrenceRule  
        RecurrenceRule.TryParse(recurrenceString, parsedRule)  
 
        If (parsedRule.Pattern.DaysOfWeekMask And RecurrenceDay.Sunday) = RecurrenceDay.Sunday Then 
            Response.Write("Appointment occurs on Sunday.")  
        Else 
            Response.Write("Appointment occurs does not on Sunday.")  
        End If 
 
    End Sub
````
  
 
   
   
   
   
   


  