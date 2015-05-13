---
title: Adding Appointments
page_title: Adding Appointments | RadScheduler for ASP.NET AJAX Documentation
description: Adding Appointments
slug: scheduler/usability/adding-appointments
tags: adding,appointments
published: True
position: 1
---

# Adding Appointments



## 

To create an appointment using **RadScheduler**:

1. Double-click on the time when you want the appointment to occur. In Day, Week, or MultiDay view, you can double-click on a specific starting time, or you can double-click in the All Day row to create an all-day event. In Month and Timeline view, appointments always start out as all-day events.

1. <br/>
	* If the **StartInsertingInAdvancedForm** property is **False** (the default), the in-line editor appears:
		![Inline Insert](images/scheduler_inlineinsert.png)
	* If the **StartInsertingInAdvancedForm** property is **True**, the advanced insert form appears instead: 
		![Edit Form Insert](images/scheduler_editforminsert.png)
1. Enter the subject of the appointment in the in-line editor or insert form that appears.

1. If you are done, click “**Save**” button to insert the appointment.

1. If you want to cancel the appointment creation, click the “**Cancel**” button.

1. If you are in the in-line editor and want to add more details to the appointment, click on the “**Options**” button. This displays the advanced insert form.

1. In the advanced insert form, you can
	* Enter or change the description by typing in the textbox control.
	* Enter or change additional information about the appointment in the description multi-line textbox. By default it is hidden. If you want to use it set the **EnableDescriptionField** to **True**.<br />
		![RadScheduler Advanced Form Insert](images/scheduler_advancedforminsert1.png)
	* Change the starting and ending times of the appointment. You can type in new dates or times, or, to change the date, you can click on the down arrow to bring up a calendar control.
	* Specify that the appointment is an all-day event using the "**All day event**" check box. If you specify an all-day event, you do not need to specify starting and ending times.(all-day appointments start at **12:00 AM** one day and end at **12:00 AM** on the other day)
	* Enter values for any [custom resources and attributes]({%slug scheduler/design-time/custom-resources-and-attributes%}). In the advanced insert form shown above, you can enter a user and a room for the appointment.
	* Enter values for reminders. By default reminders are disabled. To enable them you need to set **< Reminders Enabled=”true”/>**
		![RadScheduler Advanced Form Insert](images/scheduler_advancedforminsert2.png)
	* To create a recurring appointment, check the box labelled "**Recurrence**". The advanced insert form expands to show the recurrence section:<br />
		![Recurrence](images/scheduler_recurrence.png)
1. Specify how often the appointment recurs. Recurrence can be **Hourly**, **Daily**, **Weekly**, **Monthly** or **Yearly**.
	* For hourly appointments, indicate the number of hours between each recurrence:
		![Hourly Recurrence](images/scheduler_hourlyrecurrence.png)
	* For daily appointments, you can specify the number of days between each recurrence, or indicate that the appointment recurs every weekday:<br />
		![Daily Occurence](images/scheduler_dailyoccurrence.png)
	* For weekly appointments, indicate the number of weeks between each repeat, and the days of the week on which the appointment occurs for each repeat:<br />
		![Weekly Occurence](images/scheduler_weeklyoccurrence.png)
	* For monthly appointments, specify which day of the month the appointment occurs, and the number of months between each recurrence:
		![Monthly Recurrence](images/scheduler_monthlyrecurrence.png)
	* For yearly appointments, specify the day and month of each year that the appointment occurs:
		![Yearly Occurence](images/scheduler_yearlyoccurrence.png) 				
1. Indicate when the recurrence ends:<br />
	![Recurrence Range](images/scheduler_recurrencerange.png)
1. When you complete the advanced insert form, click the "**Save**" button. If you want to cancel the appointment, click the "**Cancel**" button.If the appointment is marked recurrent, an ![Recurrence Symbol](images/scheduler_recurrencesymbol.png) icon appears at the top left corner of the appointment.

# See Also
 
 * [Editing Appointments]({%slug scheduler/usability/editing-appointments%})

 * [Resizing Moving and Deleting Appointments]({%slug scheduler/usability/resizing-moving-and-deleting-appointments%})

 * [OnClientAppointmentInserting]({%slug scheduler/client-side-programming/events/onclientappointmentinserting%})

 * [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%})
