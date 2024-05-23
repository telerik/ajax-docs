---
title: RadCalendar object
page_title: RadCalendar object - RadCalendar
description: Check our Web Forms article about RadCalendar object.
slug: calendar/client-side-programming/radcalendar-object
tags: radcalendar,object
published: True
position: 1
---

# RadCalendar object



The following table lists the most important properties and methods of the [ASP NET AJAX Calendar](https://www.telerik.com/products/aspnet-ajax/calendar.aspx) client-side object.

>note 
The **RadCalendar** client object represents dates as 3-element arrays, where the elements represent the year, month, and day, in that order.
>

The following code snippet demonstrates how to get reference of the client-side object of **RadCalendar**:

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


## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selectedDates** ||Array of triplets|Returns an array of triplets that represent the selected dates in the calendar.|
| **get_focusedDate** ||Array (triplet)|Returns the triplet that represents the currently focused date. The focused Date is the date that determines which view the calendar displays.|
| **get_rangeMinDate** ||Array (triplet)|Returns the triplet that represents the minimum date that can be selected.|
| **set_rangeMinDate** |Array (triplet)||Sets the minimum date that can be selected to the date that the array parameter represents.|
| **get_monthYearNavigationSettings** ||Array|Returns an array with the fast navigation settings. The settings are, in order, **TodayButtonCaption** , **OkButtonCaption** , **CancelButtonCaption**, **DateIsOutOfRangeMessage**, **EnableTodayButtonSelection**. *Changes you make to these settings have an effect only if you make them before the first time the month/yearnavigation popup is displayed.* |
| **get_calendarEnableMonthYearFastNavigation** ||boolean|Returns whether the month/year navigation popup is enabled.|
| **set_calendarEnableMonthYearFastNavigation** |boolean||Sets whether the month/year navigation popup is enabled.|
| **get_calendarEnableNavigation** ||boolean|Returns whether the navigation buttons appear on the title bar. *Setting this property on the client has no effect.*|
| **get_orientation** ||integer|Returns 1 if the orientation is "RenderInRows", 2 if it is "RenderInColumns".|
| **get_fastNavigationStep** ||integer|Returns the number of months by which the view changes when the user clicks the fast navigation buttons.|
| **set_fastNavigationStep** |integer||Sets the number of months by which the view changes when the user clicks the fast navigation buttons.|
| **get_multiViewRows** ||integer|Returns the number of rows when the calendar is in multi-view mode (the number of months in each column).|
| **get_multiViewColumns** ||integer|Returns the number of columns when the calendar is in multi-view mode (the number of months in each row).|
| **get_singleViewRows** ||integer|Returns the number of rows in each month view.|
| **get_singleViewColumns** ||integer|Returns the number of columns in each month view.|
| **get_enableMultiSelect** ||boolean|Returns **true** if the calendar allows multiple dates to be selected.|
| **set_enableMultiSelect** |boolean||Sets whether the calendar allows multiple dates to be selected.|
| **get_showOtherMonthsDays** ||boolean|Returns **true** if the calendar displays days from months other than the focused month.|
| **set_showOtherMonthsDays** |boolean||Sets whether the calendar displays days from months other than the focused month.|
| **get_specialDaysArray** ||Array|Returns an array (0-offset)containing information about the special days that are defined. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.|
| **get_element** ||HTML element|Gets the DOM element for the calendar.|
| **get_culture** ||string|Returns the RadCalendar culture name.|
| **get_rangeSelectionStartDate** ||Date|Returns a triplet that represent the start date of the selected range|
| **get_rangeSelectionEndDate** ||Date|Returns a triplet that represent the end date of the selected range|
| **set_datesInRange(startDate, endDate)** |Date, Date||Set selection date range|
| **DateTimeFormatInfo** ||[DateTimeFormatInfo]({%slug calendar/client-side-programming/datetimeformatinfo-object%})|The helper object that the calendar uses for formatting date and time information. You can use this object as well for formatting dates in client-side code.|

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



## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **selectDate** |Array (triplet), boolean||Selects the date represented by the triplet that is the first parameter. If the second parameter is **true** , the calendar navigates to the view containing the newly selected date (see sample below).|
| **selectDates** |Array, boolean||Selects the set of dates in the first parameter, where each date is represented by triplet.If the second parameter is **true** , the calendar navigates to the view containingthe newly selected dates (see sample below).|
| **unselectDate** |Array (triplet)||Unselects the date represented by the parameter if it is currently selected (see sample below).|
| **unselectDates** |Array of triplets||Un-selects all the dates represented by triplets in the array if they are currently selected (see sample below).|
| **navigateToDate** |Array (triplet)||Causes the calendar to switch to the view containing the specified date (see sample below).|
| **calculateDateFromStep** |integer|Array (triplet)|Returns the triplet for the date that is offset by the specified number of days from the current month.If the parameter is positive, the days are offset from the last day of the month. If the parameter is negative,the days are offset from the first day of the month (see sample below).|

````JavaScript
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Select Today" OnClientClicked="SelectToday" AutoPostBack="false" />
<script type="text/javascript">
    function SelectToday() {
        var todaysDate = new Date();
        var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
        var calendar = $find("<%=RadCalendar1.ClientID%>");
        calendar.selectDate(todayTriplet, true);
    }
</script>
````


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


````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Unselect Today" OnClientClicked="UnselectToday" AutoPostBack="false" />
<script type="text/javascript">
    function UnselectToday() {
        var todaysDate = new Date();
        var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
        var calendar = $find("<%=RadCalendar1.ClientID%>");
        calendar.unselectDate(todayTriplet);
    }		
</script>		
````

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



````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Go To Summer Of Love" OnClientClicked="goToSummerOfLove" AutoPostBack="false" />
<script type="text/javascript">
    function goToSummerOfLove() {
        var triplet = [1968, 6, 1];
        var calendar = $find("<%=RadCalendar1.ClientID%>");
        calendar.set_rangeMinDate([1960, 1, 1]);
        calendar.navigateToDate(triplet);
    }
</script>
````



````ASP.NET
<telerik:RadCalendar ID="RadCalendar1" runat="server"></telerik:RadCalendar>
<telerik:RadPushButton runat="server" ID="RadButton1" Text="Go Forward Six Months" OnClientClicked="goForwardSixMonths" AutoPostBack="false" />
<script type="text/javascript">
    function goForwardSixMonths() {
        var calendar = $find("<%=RadCalendar1.ClientID%>");
        var target = calendar.calculateDateFromStep(183);
        calendar.navigateToDate(target);
    }
</script>	
````



# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
 * [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%})
 * [Full list of the client-side API](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadCalendar)
