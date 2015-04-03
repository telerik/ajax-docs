---
title: RadCalendar object
page_title: RadCalendar object | UI for ASP.NET AJAX Documentation
description: RadCalendar object
slug: calendar/client-side-programming/radcalendar-object
tags: radcalendar,object
published: True
position: 1
---

# RadCalendar object



The following table lists the most important properties and methods of the __RadCalendar__ client-side object.

>note The __RadCalendar__ client object represents dates as 3-element arrays, where the elements represent the year, month, and day, in that order.
>


## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_selectedDates__ ||Array of triplets|Returns an array of triplets that represent the selected dates in the calendar.|
| __get_focusedDate__ ||Array (triplet)|Returns the triplet that represents the currently focused date. The focused Date is the date that determines which view the calendar displays.|
| __get_rangeMinDate__ ||Array (triplet)|Returns the triplet that represents the minimum date that can be selected.|
| __set_rangeMinDate__ |Array (triplet)||Sets the minimum date that can be selected to the date that the array parameter represents.|
| __get_monthYearNavigationSettings__ ||Array|Returns an array with the fast navigation settings. The settings are, in order, __TodayButtonCaption__ , __OkButtonCaption__ , __CancelButtonCaption__ , __DateIsOutOfRangeMessage__ , __EnableTodayButtonSelection__ .

>caution Changes you make to these settings have an effect only if you make them before the first time the month/yearnavigation popup is displayed.
>
|
| __get_calendarEnableMonthYearFastNavigation__ ||boolean|Returns whether the month/year navigation popup is enabled.|
| __set_calendarEnableMonthYearFastNavigation__ |boolean||Sets whether the month/year navigation popup is enabled.|
| __get_calendarEnableNavigation__ ||boolean|Returns whether the navigation buttons appear on the title bar.

>note Setting this property on the client has no effect.
>
|
| __get_orientation__ ||integer|Returns 1 if the orientation is "RenderInRows", 2 if it is "RenderInColumns".|
| __get_fastNavigationStep__ ||integer|Returns the number of months by which the view changes when the user clicks the fast navigation buttons.|
| __set_fastNavigationStep__ |integer||Sets the number of months by which the view changes when the user clicks the fast navigation buttons.|
| __get_multiViewRows__ ||integer|Returns the number of rows when the calendar is in multi-view mode (the number of months in each column).|
| __get_multiViewColumns__ ||integer|Returns the number of columns when the calendar is in multi-view mode (the number of months in each row).|
| __get_singleViewRows__ ||integer|Returns the number of rows in each month view.|
| __get_singleViewColumns__ ||integer|Returns the number of columns in each month view.|
| __get_enableMultiSelect__ ||boolean|Returns __true__ if the calendar allows multiple dates to be selected.|
| __set_enableMultiSelect__ |boolean||Sets whether the calendar allows multiple dates to be selected.|
| __get_showOtherMonthsDays__ ||boolean|Returns __true__ if the calendar displays days from months other than the focused month.|
| __set_showOtherMonthsDays__ |boolean||Sets whether the calendar displays days from months other than the focused month.|
| __get_specialDaysArray__ ||Array|Returns an array (0-offset)containing information about the special days that are defined. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.|
| __get_element__ ||HTML element|Gets the DOM element for the calendar.|
| __get_culture__ ||string|Returns the RadCalendar culture name.|
| __get_rangeSelectionStartDate__ ||Date|Returns a triplet that represent the start date of the selected range|
| __get_rangeSelectionEndDate__ ||Date|Returns a triplet that represent the end date of the selected range|
| __set_datesInRange(startDate, endDate)__ |Date, Date||Set selection date range|
| __DateTimeFormatInfo__ ||[DateTimeFormatInfo]({%slug calendar/client-side-programming/datetimeformatinfo-object%})|The helper object that the calendar uses for formatting date and time information. You can use this object as well for formatting dates in client-side code.|

````JavaScript
	     <script type="text/javascript">
	         var calendar = $find("<%= RadCalendar1.ClientID %>");
	         var dates = calendar.get_selectedDates();
	         for (var i = 0; i < dates.length; i++) {
	             var date = dates[i];
	             var year = date[0];
	             var month = date[1];
	             var day = date[2];
	             if (year < 2000)
	                 calendar.unselectDate(date);
	         }		
	    </script>
````



## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __selectDate__ |Array (triplet), boolean||Selects the date represented by the triplet that is the first parameter. If the second parameter is __true__ , the calendar navigates to the view containing the newly selected date (see sample below).|
| __selectDates__ |Array, boolean||Selects the set of dates in the first parameter, where each date is represented by triplet.If the second parameter is __true__ , the calendar navigates to the view containingthe newly selected dates (see sample below).|
| __unselectDate__ |Array (triplet)||Unselects the date represented by the parameter if it is currently selected (see sample below).|
| __unselectDates__ |Array of triplets||Un-selects all the dates represented by triplets in the array if they are currently selected (see sample below).|
| __navigateToDate__ |Array (triplet)||Causes the calendar to switch to the view containing the specified date (see sample below).|
| __calculateDateFromStep__ |integer|Array (triplet)|Returns the triplet for the date that is offset by the specified number of days from the current month.If the parameter is positive, the days are offset from the last day of the month. If the parameter is negative,the days are offset from the first day of the month (see sample below).|

````JavaScript
	     <script type="text/javascript">
	         function SelectToday() {
	             var todaysDate = new Date();
	             var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	             var calendar = $find("<%=RadCalendar1.ClientID%>");
	             calendar.selectDate(todayTriplet, true);
	         }
			</script>	
````



````JavaScript
	     <script type="text/javascript">
	         function SelectTodayAndTomorrow() {
	             var todaysDate = new Date();
	             var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	             var tomorrowTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate() + 1];
	             var selectedDates = [todayTriplet, tomorrowTriplet];
	             var calendar = $find("<%=RadCalendar1.ClientID%>");
	             calendar.selectDates(selectedDates, true);
	         }		
	</script>	
````



````JavaScript
	     
	     <script type="text/javascript">
	         function UnselectToday() {
	             var todaysDate = new Date();
	             var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	             var calendar = $find("<%=RadCalendar1.ClientID%>");
	             calendar.unselectDate(todayTriplet);
	         }		
	</script>	
````



````JavaScript
	     <script type="text/javascript">
	         function ClearCalendar() {
	             var calendar = $find("<%= RadCalendar1.ClientID %>");
	             calendar.unselectDates(calendar.get_selectedDates());
	         }
	</script>	
````



````JavaScript
	     
	     <script type="text/javascript">
	         function GoToSummerOfLove() {
	             var triplet = [1968, 6, 1];
	             var calendar = $find("<%=RadCalendar1.ClientID%>");
	             calendar.set_rangeMinDate([1960, 1, 1]);
	             calendar.navigateToDate(triplet);
	         }
	</script>	
````



````JavaScript
	     
	     <script type="text/javascript">
	         function GoForwardSixMonths() {
	             var calendar = $find("<%=RadCalendar1.ClientID%>");
	             var target = calendar.calculateDateFromStep(183);
	             calendar.navigateToDate(target);
	         }
	</script>	
````



# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
