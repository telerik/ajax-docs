---
title: Deleting Past Appointments in RadScheduler
description: Learn how to delete all past appointments from RadScheduler using client-side JavaScript.
type: how-to
page_title: How to Remove Past Appointments in RadScheduler for ASP.NET AJAX
slug: scheduler-delete-past-appointments
tags: radscheduler, aspnet-ajax, delete, appointments, past, javascript, c#
res_type: kb
ticketid: 1661089
---

## Environment

| Product | RadScheduler for ASP.NET AJAX |
| --- | --- |
| Version | All |

## Description

How can I delete all previously posted appointments in RadScheduler at once? I need to offer users the option to either delete a specific selected old appointment or the entire selected series of old appointments. 

This KB article also answers the following questions:

- How to programmatically remove past appointments from RadScheduler?
- How to delete appointments before the current date in RadScheduler?

## Solution

To delete all past appointments in RadScheduler, you can utilize a JavaScript function that iterates through all appointments and deletes those occurring before the current date. 

1. Add a button to your page that, when clicked, executes the following JavaScript function:

````JavaScript
function onClick(sender, args) {
    var scheduler = $find("<%= RadScheduler1.ClientID %>");
    var appointments = scheduler.get_appointments();

    var currentDate = new Date();
    var currentDay = currentDate.getDate();

    appointments.forEach((appointment) => {
        var appointmentStartDate = appointment.get_start();
        var startDay = appointmentStartDate.getDate();

        if (startDay < currentDay) {
            scheduler.deleteAppointment(appointment);
        }
    });
}
````

This script finds the RadScheduler control on the page and loops through its appointments. For each appointment, it checks if the start date is before today's date. If so, it deletes the appointment.

### Suggested Workarounds

For a server-side solution in C#, you would need to retrieve all appointments from your data source, filter those that are in the past, and then delete them from both your data source and the RadScheduler. This process would depend on how you've implemented data binding for the RadScheduler and is not covered here due to the variety of possible data sources and architectures.

### Notes

- The JavaScript solution provided here works directly on the client-side without additional server-side code. However, remember to handle data persistence on the server-side to ensure the changes reflect in your data source.
- For server-side deletion, ensure you rebind the RadScheduler after deleting the appointments to reflect the changes on the UI.

### See Also

- [SchedulerAppointment Object](https://docs.telerik.com/devtools/aspnet-ajax/controls/scheduler/client-side-programming/properties-and-methods/schedulerappointment-object#schedulerappointment-object)
- [Delete Appointment from Scheduler - Client-Side Button Click](https://www.telerik.com/forums/delete-appointment-from-scheduler-client-side-button-click)
- [Delete Appointment from Client-Side](https://www.telerik.com/forums/delete-appointment-from-clientside#fGqrLnL1B0uZWdev41e8Lw)
