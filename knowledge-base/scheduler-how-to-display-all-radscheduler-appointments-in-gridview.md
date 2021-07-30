---
title: How to display all RadScheduler appointments in GridView
description: How to display all RadScheduler appointments in GridView. Check it now!
type: how-to
page_title: How to display all RadScheduler appointments in GridView
slug: scheduler-how-to-display-all-radscheduler-appointments-in-gridview
res_type: kb
---


## HOW-TO  
  
Display all RadScheduler appointments in GridView  
  
## SOLUTION  

Here is the code solution:
  
````C#
protected void RadScheduler1_DataBound(object sender, EventArgs e)  
    {  
        //Create a dynamic table to store the appointments' information:     
        DataTable table1 = new DataTable();  
        table1.Columns.Add("Subject");  
        table1.Columns.Add("Start");  
        table1.Columns.Add("End");  

        foreach (Appointment a in RadScheduler1.Appointments)  
        {  
            //Occurrences of a recurrence master are not generated untill they      
            //are within RadScheduler's visible range. This mandates the occurrences     
            //information to be extracted from the Master's recurrence rule as follows:     
            if (a.RecurrenceState == RecurrenceState.Master)  
            {  
                RecurrenceRule parsedRule;  
                RecurrenceRule.TryParse(a.RecurrenceRule.ToString(), out parsedRule);  
 
                //If a recurring appointment does not have specified end time it will have     
                //endless occurrences. In this case you can explicitly put a restriction:     
                //parsedRule.SetEffectiveRange(DateTime.Now.AddYears(-1), DateTime.Now.AddYears(1));     
                foreach (DateTime occurrence in parsedRule.Occurrences)  
                {  
                    table1.Rows.Add(new string[] { a.Subject.ToString(), occurrence.ToString(), occurrence.Add(a.Duration).ToString() });  
                }  
            }  
            else //Get the rest of the appointments     
 
                //If the SelectedDate of RadScheduler is set so that the visible range encompasses occurences of      
                //a recurring appointement, these occurences will be generated now so they will be added once again     
                //to the DataTable. To prevent this, we use the following check:     
                if (a.RecurrenceState != RecurrenceState.Occurrence)  
                {  
                    table1.Rows.Add(new string[] { a.Subject.ToString(), a.Start.ToString(), a.End.ToString() });  
                }  
        }  

        GridView1.DataSource = table1;  
        GridView1.DataBind();     
     } 
````
````VB
Protected Sub RadScheduler1_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadScheduler1.DataBound  
        'Create a dynamic table to store the appointments' information:     
        Dim table1 As New DataTable()  
        table1.Columns.Add("Subject")  
        table1.Columns.Add("Start")  
        table1.Columns.Add("End")  
        Dim a As Appointment  
        For Each a In RadScheduler1.Appointments  
            'Occurrences of a recurrence master are not generated untill they      
            'are within RadScheduler's visible range. This mandates the occurrences     
            'information to be extracted from the Master's recurrence rule as follows:     
            If a.RecurrenceState = RecurrenceState.Master Then 
                Dim parsedRule As RecurrenceRule  
                RecurrenceRule.TryParse(a.RecurrenceRule.ToString(), parsedRule)  
 
                'If a recurring appointment does not have specified end time it will have     
                'endless occurrences. In this case you can explicitly put a restriction:     
                'parsedRule.SetEffectiveRange(DateTime.Now.AddYears(-1), DateTime.Now.AddYears(1));     
                Dim occurrence As DateTime  
                For Each occurrence In parsedRule.Occurrences  
                    table1.Rows.Add(New String() {a.Subject.ToString(), occurrence.ToString(), occurrence.Add(a.Duration).ToString()})  
                Next occurrence  
                'Get the rest of the appointments     
                'If the SelectedDate of RadScheduler is set so that the visible range encompasses occurences of      
                'a recurring appointement, these occurences will be generated so they will be added once again     
                'to the DataTable. To prevent this, we use the following check:     
            ElseIf a.RecurrenceState <> RecurrenceState.Occurrence Then 
                table1.Rows.Add(New String() {a.Subject.ToString(), a.Start.ToString(), a.End.ToString()})  
            End If 
        Next a  

        GridView1.DataSource = table1  
        GridView1.DataBind()  
    End Sub 
````

  