---
title: Highlight days after today in RadCalendar
description: Check out how to highlight the upcoming days in RadCalendar.
type: how-to
page_title: Highlight days after today in RadCalendar
slug: calendar-highlight-days-after-today
ticketid: 1575528
res_type: kb
---

## Description

How I could set everyday greater than today to be highlighted in a different way than the past days in RadCalendar.

## Solution

You can use the DayRender event exposed both for client side and server side usage to get a reference to each day rendered in the calendar. There you can check if each day is after today's date and conditional assign a custom CSS class to its cell.

Check out the dedicated articles for both the client and server-side DayRender events:

 * [OnDayRender - Client Side]({%slug calendar/client-side-programming/events/ondayrender%});
 * [DayRender - Server Side]({%slug calendar/server-side-programming/events/dayrender%});

Check out the sample approach below demonstrating coloring the background of all upcoming days in the Calendar:

Sample RadCalendar declaration:

````ASPX
<telerik:RadCalendar runat="server" ID="RadCalendar1" OnDayRender="RadCalendar1_DayRender">
    <ClientEvents OnDayRender="dayRender" />
</telerik:RadCalendar>
````

Handling client-side OnDayRender event:

````JavaScript
function dayRender(sender, args) {
    //get the currently rendered day in calendar
    var currentDate = args.get_date();

    var year = currentDate[0];
    var month = currentDate[1];
    var day = currentDate[2];

    //initialize a new Date object based on the currently rendered day
    var currentDay = new Date(year, month - 1, day);//decrease the month as month in JavaScript Date object starts of 0 for January

    var today = new Date();

    if (currentDay > today) {
        //add custom class name for styling the upcoming days with CSS
        $(args.get_cell()).addClass('upcomingDay');
    }
}
````

Handling server-side OnDayRender event:

````C#
protected void RadCalendar1_DayRender(object sender, Telerik.Web.UI.Calendar.DayRenderEventArgs e)
{
    var today = DateTime.Today;
    if (e.Day.Date > today)
    {
        //add custom class name for styling the upcoming days with CSS
        e.Cell.CssClass += " upcomingDay";
    }
}
````

Sample CSS style for highlighting the upcoming days

````CSS
html body .upcomingDay {
    background-color: gray;
}
````

