---
title: Delete the appointments in the entire row 
description: Learn how to delete the appointments in the entire row.
type: how-to
page_title: Delete the appointments in the entire row. | RadScheduler
slug: scheduler-delete-the-appointments-in-the-entire-row
tags: delete, row, scheduler, series, ASP.NET AJAX
res_type: kb
ticket-id: 1649761
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Scheduler for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Sometimes, one might want to delete all the appointments in a given row.

## Solution

To delete the whole row of appointments at once, you can follow these steps:

1. Attach the [`AppointmentDelete`]({%slug scheduler/server-side-programming/server-events/appointmentdelete %}) event.
2. Retrieve the start and end hours of the appointment currently being deleted.
3. Compare the start and end hours with the other appointments.
4. Remove the appointments that have the same start and end hours.

The below example's code is based on the [Binding to Generic List](https://demos.telerik.com/aspnet-ajax/scheduler/examples/bindtolist/defaultcs.aspx) demo:

````C#
protected void RadScheduler1_AppointmentDelete(object sender, SchedulerCancelEventArgs e)
{
    int startHour = e.Appointment.Start.Hour;
    int endHour = e.Appointment.End.Hour;
    List<AppointmentInfo> appointmentsToDelete = Appointments.Where(ap => ap.Start.Hour == startHour && ap.End.Hour == endHour).ToList();

    foreach (AppointmentInfo appointment in appointmentsToDelete)
    {
        Appointments.Remove(appointment);
    }
}
````

Please note that this code will only work for appointments that have the same start and end hour, meaning they are placed on the same row.


 
