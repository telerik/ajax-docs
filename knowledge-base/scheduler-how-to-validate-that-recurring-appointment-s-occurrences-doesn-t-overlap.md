---
title: How to validate that recurring appointment's occurrences doesn't overlap (MS Outlook doesn't allow such appointment's scheduling)
description: How to validate that recurring appointment's occurrences doesn't overlap (MS Outlook doesn't allow such appointment's scheduling). Check it now!
type: how-to
page_title: How to validate that recurring appointment's occurrences doesn't overlap
slug: scheduler-how-to-validate-that-recurring-appointment-s-occurrences-doesn-t-overlap
res_type: kb
---
   
## Description
   
MS Outlook doesn't allow scheduling of appointments whose occurrences are overlapping. For example - the validation will not pass if you try to schedule an appointment with duration of 2 hours, which occurs every 1 hour. At the same time RadScheduler, having advanced Recurrence Editor on-board, enables users to schedule such (and a lot more complex as recurrence pattern) appointments. Although this is nice-to-have kind of feature, some times one should be able to restrict the user group of his/her project (at least because most people are familiar with Outlook) and to additionally validate for this and other custom criteria.  

The problem that this article is meant to solve is - how to implement such a validation on the recurrence rule, once it's needed.    
   
## Solution
   
One can handle the AppointmentInsert event with the following handler:  

````C#
protected void RadScheduler1_AppointmentInsert(object sender, AppointmentInsertEventArgs e)
{
    if (!IsValidAppointment(e.Appointment))
        e.Cancel = true;
}
````
````VB
Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, ByVal e As UI.AppointmentInsertEventArgs) Handles RadScheduler1.AppointmentInsert
    If Not IsValidAppointment(e.Appointment) Then
        e.Cancel = True
    End If
 
End Sub
````

This same handler should be used for AppointmentUpdate event, too.  

And the validation method:  

````C#
private bool IsValidAppointment(Appointment apt)
{
    bool isValid = true;
    if (apt.RecurrenceState == RecurrenceState.Master)
    {
        RecurrenceRule parsedRule;
        RecurrenceRule.TryParse(apt.RecurrenceRule.ToString(), out parsedRule);
        DateTime[] twoOccurrences = new DateTime[2];
 
        var enumerator = parsedRule.Occurrences.GetEnumerator();
 
        int i = 0;
        for (; i < 2; i++)
            if (enumerator.MoveNext())
                twoOccurrences[i] = enumerator.Current;
            else
                break;
 
        if (i == 2)
            isValid = !(apt.Duration > (twoOccurrences[1] - twoOccurrences[0]));
    }
 
    return isValid;
}
````
````VB
Private Function IsValidAppointment(ByVal apt As Appointment) As Boolean
    Dim isValid As Boolean = True
    If apt.RecurrenceState = RecurrenceState.Master Then
        Dim parsedRule As RecurrenceRule
        RecurrenceRule.TryParse(apt.RecurrenceRule.ToString(), parsedRule)
        Dim twoOccurrences(2) As DateTime
 
        Dim enumerator As IEnumerator = parsedRule.Occurrences.GetEnumerator()
 
        Dim i As Integer = 0
        For i = 0 To 1
            If enumerator.MoveNext() Then
                twoOccurrences(i) = enumerator.Current
            Else
                Exit For
            End If
        Next
 
        If i = 2 Then
            isValid = Not (apt.Duration > (twoOccurrences(1) - twoOccurrences(0)))
        End If
    End If
 
    Return isValid
End Function
````

 