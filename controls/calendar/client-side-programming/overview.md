---
title: Overview
page_title: Client-side Programming Overview | RadCalendar for ASP.NET AJAX Documentation
description: RadCalendar Client-side Programming Overview
slug: calendar/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadCalendar** control provides a flexible client-side API. You can easily interact with the controls in the browser using their client-side objects. In addition to a variety of [client-side events]({%slug calendar/client-side-programming/events/overview%}), the client-side object model lets you achieve various tasks while avoiding unnecessary post-backs.

## Getting the client-side object

All the API methods are accessible via the registered JavaScript objects for each control. The following code snippet shows how to get reference of the client-side object of **RadCalendar**:

````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Clear the Calendar" OnClientClicked="getClientReference" AutoPostBack="false" />
<script type="text/javascript">
    function getClientReference() {
        var calendar = $find("<%= RadCalendar1.ClientID %>");
        alert(calendar.get_id()); //returns the element ID
        alert(calendar.get_element()); //returns a reference to the HTML wrapper
    }
</script> 
````

You can find more detailed instructions of how to get client reference to a Telerik AJAX control on [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%}).


## Getting and setting the selected date

The **RadCalendar** client object represents dates as triplets. Each triplet is an array of three integer values, which specify the year, month, and day of a date, in that order.

To get the selected date or dates on a **RadCalendar** control, use the **get_selectedDates()** method. This methods returns an array. If no date is selected, the array has length 0. If the calendar does not support multi-select mode, then the array has at most one element. Each date in the array is a triplet:

````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Unselect the dates before 2025" OnClientClicked="unselectDates" AutoPostBack="false" />
<script>
    function unselectDates(sender, args) {
        var calendar = $find("<%= RadCalendar1.ClientID %>");
        var dates = calendar.get_selectedDates();
        for (var i = 0; i < dates.length; i++) 
        {
            var date = dates[i];
            var year = date[0];
            var month = date[1];
            var day = date[2];
            if (year < 2025)
                calendar.unselectDate(date);
        }
    }
</script>
````

To set the selected date on a **RadCalendar** control, use the **selectDate()** or **selectDates()** method:

````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Select Today And Tomorrow" OnClientClicked="selectTodayAndTomorrow" AutoPostBack="false" />
<script>
    function selectTodayAndTomorrow() {
        var todaysDate = new Date();
        var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
        var tomorrowTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate() + 1];
        var selectedDates = [todayTriplet, tomorrowTriplet];

        var calendar = $find("<%=RadCalendar1.ClientID%>");
        calendar.selectDates(selectedDates, true);
    }
</script>
````



## Getting and setting minimum and maximum values

The following methods get or set the minimum and maximum values:


| Method | Supported By | Description |
| ------ | ------ | ------ |
|get_rangeMinDate()|RadCalendar|Returns the triplet for the minimum date that the user can select.|
|set_rangeMinDate(triplet)|RadCalendar|Sets the minimum date to the date represented by a triplet.|
|get_rangeMaxDate()|RadCalendar|Returns the triplet for the maximum date that the user can select.|
|set_rangeMaxDate(triplet)|RadCalendar|Sets the maximum date to the date represented by a triplet.|


## Clearing selected values

On **RadCalendar** you can unselect individual dates using the **unselectDate** or **unselectDates** method:

````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Clear the Calendar" OnClientClicked="clearCalendar" AutoPostBack="false" />
<script type="text/javascript">
    function clearCalendar() {
        var calendar = $find("<%= RadCalendar1.ClientID %>");
        var dates = calendar.get_selectedDates();
        calendar.unselectDates(dates);
    }
</script> 	
````



# See Also

 * [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%})
 * [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%})


