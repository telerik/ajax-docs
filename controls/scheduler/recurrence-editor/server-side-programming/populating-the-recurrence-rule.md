---
title: Populating the Recurrence Rule
page_title: Populating the Recurrence Rule | RadScheduler for ASP.NET AJAX Documentation
description: Populating the Recurrence Rule
slug: scheduler/recurrence-editor/server-side-programming/populating-the-recurrence-rule
tags: populating,the,recurrence,rule
published: True
position: 1
---

# Populating the Recurrence Rule



## The recurrence editor can be populated either from a RecurrenceRule object or from a string.



````C#
	     
	
	RecurrenceEditor1.RecurrenceRule = new DailyRecurrenceRule(1, range);
	// or
	RecurrenceEditor1.RecurrenceRuleText = storedRule;
				
````
````VB.NET
	
	
	RecurrenceEditor1.RecurrenceRule = new DailyRecurrenceRule(1, range)
	' or
	RecurrenceEditor1.RecurrenceRuleText = storedRule
				
````


## The following examples show how different rules can be generated in FormCrated event of the Scheduler.

**HourlyRecurence:**



````C#
	     
	
	  protected void RadScheduler1_FormCreated(object sender, SchedulerFormCreatedEventArgs e)
	    {
	        if (e.Container.Mode == SchedulerFormMode.AdvancedInsert)
	        {
	            RecurrenceEditor recurrenceEditor = e.Container.FindControl("RecurrenceEditor") as RecurrenceEditor;
	              //Creating a hourly Recurrence rule
	            int interval = 1;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = DateTime.Now;
	            range.EventDuration = TimeSpan.FromMinutes(30);
	            range.MaxOccurrences = 3;
	            recurrenceEditor.RecurrenceRule = new HourlyRecurrenceRule(interval, range);
	    
	        }
	  }
````
````VB.NET
	    Protected Sub RadScheduler1_FormCreated(ByVal sender As Object, ByVal e As SchedulerFormCreatedEventArgs)
	        If e.Container.Mode = SchedulerFormMode.AdvancedInsert Then
	            Dim recurrenceEditor As RecurrenceEditor = TryCast(e.Container.FindControl("RecurrenceEditor"), RecurrenceEditor)
	            'Creating a hourly Recurrence rule
	            Dim interval As Integer = 1
	            Dim range As New RecurrenceRange()
	            range.Start = DateTime.Now
	            range.EventDuration = TimeSpan.FromMinutes(30)
	            range.MaxOccurrences = 3
	            recurrenceEditor.RecurrenceRule = New HourlyRecurrenceRule(interval, range)
	        End If
	    End Sub
	
````


**DailyRecurence:**



````C#
	    //Creating a daily Recurrence rule
	            int interval = 1;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = DateTime.Now;
	            range.EventDuration = TimeSpan.FromHours(1);
	            range.MaxOccurrences = 3;
	            recurrenceEditor.RecurrenceRule = new DailyRecurrenceRule(interval, range);
	            //RecurrenceDay rd = RecurrenceDay.WeekDays;
	            //recurrenceEditor.RecurrenceRule = new DailyRecurrenceRule(rd, range);
````
````VB.NET
	    'Creating a daily Recurrence rule
	    Dim interval As Integer = 1
	    Dim range As New RecurrenceRange()
	            range.Start = DateTime.Now
	            range.EventDuration = TimeSpan.FromHours(1)
	            range.MaxOccurrences = 3
	     recurrenceEditor.RecurrenceRule = New DailyRecurrenceRule(interval, range)
	    'RecurrenceDay rd = RecurrenceDay.WeekDays;
	    'recurrenceEditor.RecurrenceRule = new DailyRecurrenceRule(rd, range);
	
	
````


**WeeklyRecurence:**



````C#
	     //Creating a Weekly Recurrence rule
	            int interval = 2;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = DateTime.Now;
	            range.EventDuration = TimeSpan.FromMinutes(30);
	            range.MaxOccurrences = 3;
	            RecurrenceDay recurrenceDay = RecurrenceDay.Wednesday;
	            recurrenceEditor.RecurrenceRule = new WeeklyRecurrenceRule(interval, recurrenceDay, range);
	            //DayOfWeek startDayOfWeek = DayOfWeek.Tuesday;
	            //recurrenceEditor.RecurrenceRule = new WeeklyRecurrenceRule(interval, recurrenceDay, range, startDayOfWeek);
````
````VB.NET
	
	
	    'Creating a Weekly Recurrence rule
	    Dim interval As Integer = 2
	    Dim range As New RecurrenceRange()
	      range.Start = DateTime.Now
	      range.EventDuration = TimeSpan.FromMinutes(30)
	      range.MaxOccurrences = 3
	    Dim recurrenceDay As RecurrenceDay = RecurrenceDay.Wednesday
	    recurrenceEditor.RecurrenceRule = New WeeklyRecurrenceRule(interval, recurrenceDay, range)
	    'DayOfWeek startDayOfWeek = DayOfWeek.Tuesday;
	    'recurrenceEditor.RecurrenceRule = new WeeklyRecurrenceRule(interval, recurrenceDay, range, startDayOfWeek);
	
````


**MonthlyRecurence:**



````C#
	     //Creating a monthly Recurrence rule
	            int interval = 1;
	            int dayOrdinal = 2;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = DateTime.Now;
	            range.EventDuration = TimeSpan.FromMinutes(30);
	            range.MaxOccurrences = 3;
	            recurrenceEditor.RecurrenceRule = new MonthlyRecurrenceRule(dayOrdinal, interval, range);
	            //RecurrenceDay DayOfWeekMask = RecurrenceDay.Monday;
	            //recurrenceEditor.RecurrenceRule = new MonthlyRecurrenceRule(dayOrdinal, DayOfWeekMask, interval, range);
````
````VB.NET
	
	
	   'Creating a monthly Recurrence rule
	    Dim interval As Integer = 1
	    Dim dayOrdinal As Integer = 2
	    Dim range As New RecurrenceRange()
	          range.Start = DateTime.Now
	          range.EventDuration = TimeSpan.FromMinutes(30)
	          range.MaxOccurrences = 3
	          recurrenceEditor.RecurrenceRule = New MonthlyRecurrenceRule(dayOrdinal, interval, range)
	    'RecurrenceDay DayOfWeekMask = RecurrenceDay.Monday;
	    'recurrenceEditor.RecurrenceRule = new MonthlyRecurrenceRule(dayOrdinal, DayOfWeekMask, interval, range);
	
````


**YearlyRecurence:**



````C#
	      //Creating a yearly Recurrence rule
	            int dayOrdinal = 2;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = DateTime.Now;
	            range.EventDuration = TimeSpan.FromMinutes(30);
	            range.MaxOccurrences = 3;
	            RecurrenceMonth month = RecurrenceMonth.June;
	            recurrenceEditor.RecurrenceRule = new YearlyRecurrenceRule(month, dayOrdinal, range);
	            //RecurrenceDay dayOfWeek = RecurrenceDay.Monday;
	            //recurrenceEditor.RecurrenceRule = new YearlyRecurrenceRule(dayOrdinal, month, dayOfWeek, range);
````
````VB.NET
	
	
	   'Creating a yearly Recurrence rule
	    Dim dayOrdinal As Integer = 2
	    Dim range As New RecurrenceRange()
	    range.Start = DateTime.Now
	    range.EventDuration = TimeSpan.FromMinutes(30)
	    range.MaxOccurrences = 3
	    Dim month As RecurrenceMonth = RecurrenceMonth.June
	    recurrenceEditor.RecurrenceRule = New YearlyRecurrenceRule(month, dayOrdinal, range)
	    'RecurrenceDay dayOfWeek = RecurrenceDay.Monday;
	    'recurrenceEditor.RecurrenceRule = new YearlyRecurrenceRule(dayOrdinal, month, dayOfWeek, range);
	
````


The recurrence rule can be created and directly added as a property of an Appointment as shown in the code:



````C#
	      protected void RadButton1_Click(object sender, EventArgs e)
	    {
	        Appointment newAppointment = new Appointment();
	        newAppointment.Subject = RadTextBox1.Text;
	        newAppointment.Start = DateTime.Now;
	        newAppointment.End = DateTime.Now.Add(TimeSpan.FromHours(1));
	            int interval = 1;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = newAppointment.Start;
	            range.EventDuration = newAppointment.End-newAppointment.Start;
	            range.MaxOccurrences = 3;
	            RecurrenceRule newDayly = new DailyRecurrenceRule(interval, range);
	            newAppointment.RecurrenceRule = newDayly.ToString();
	
	            RadScheduler1.InsertAppointment(newAppointment);
	            RadScheduler1.Rebind();
	    }
````
````VB.NET
	
	
	    Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim newAppointment As New Appointment()
	        newAppointment.Subject = RadTextBox1.Text
	        newAppointment.Start = DateTime.Now
	        newAppointment.[End] = DateTime.Now.Add(TimeSpan.FromHours(1))
	        Dim interval As Integer = 1
	        Dim range As New RecurrenceRange()
	        range.Start = newAppointment.Start
	        range.EventDuration = newAppointment.[End] - newAppointment.Start
	        range.MaxOccurrences = 3
	        Dim newDayly As RecurrenceRule = New DailyRecurrenceRule(interval, range)
	        newAppointment.RecurrenceRule = newDayly.ToString()
	
	        RadScheduler1.InsertAppointment(newAppointment)
	        RadScheduler1.Rebind()
	    End Sub
	
````


## The recurrence rule can be created and directly added as a property of an Appointment as shown in the code:



````C#
	      protected void RadButton1_Click(object sender, EventArgs e)
	    {
	        Appointment newAppointment = new Appointment();
	        newAppointment.Subject = RadTextBox1.Text;
	        newAppointment.Start = DateTime.Now;
	        newAppointment.End = DateTime.Now.Add(TimeSpan.FromHours(1));
	            int interval = 1;
	            RecurrenceRange range = new RecurrenceRange();
	            range.Start = newAppointment.Start;
	            range.EventDuration = newAppointment.End-newAppointment.Start;
	            range.MaxOccurrences = 3;
	            RecurrenceRule newDayly = new DailyRecurrenceRule(interval, range);
	            newAppointment.RecurrenceRule = newDayly.ToString();
	
	            RadScheduler1.InsertAppointment(newAppointment);
	            RadScheduler1.Rebind();
	    }
````
````VB.NET
	
	
	    Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim newAppointment As New Appointment()
	        newAppointment.Subject = RadTextBox1.Text
	        newAppointment.Start = DateTime.Now
	        newAppointment.[End] = DateTime.Now.Add(TimeSpan.FromHours(1))
	        Dim interval As Integer = 1
	        Dim range As New RecurrenceRange()
	        range.Start = newAppointment.Start
	        range.EventDuration = newAppointment.[End] - newAppointment.Start
	        range.MaxOccurrences = 3
	        Dim newDayly As RecurrenceRule = New DailyRecurrenceRule(interval, range)
	        newAppointment.RecurrenceRule = newDayly.ToString()
	
	        RadScheduler1.InsertAppointment(newAppointment)
	        RadScheduler1.Rebind()
	    End Sub
	
````

