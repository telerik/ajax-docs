---
title: Overview
page_title: Client-side Programming Overview | RadCalendar for ASP.NET AJAX Documentation
description: Overview
slug: calendar/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadCalendar** controls provide a flexible client-side API. You can easily interact with the controls in the browser using their client-side objects. In addition to a variety of [client-side events]({%slug calendar/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the client-side object

All the API methods are accessible via the registered JavaScript objects for each control. A global variable with the same name as the ClientID of the control is available for each control:

````JavaScript
	     <script type="text/javascript">
	         var calendar = $find("<%= RadCalendar1.ClientID %>");
	         var datepicker = $find("<%= RadDatePicker1.ClientID %>");
	         var timepicker = $find("<%= RadTimePicker1.ClientID %>");
	         var datetimepicker = $find("<%= RadDateTimePicker1.ClientID %>");
	         var monthyearpicker = $find("<%= RadMonthYearPicker1.ClientID %>");
		 </script>
````



## Getting a reference to child elements

For the **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker**, and**RadMonthYearPicker** you can access client-side objects for the child elements using the methods listed below:


| Object Type | Method | Supported by |
| ------ | ------ | ------ |
|RadInput|get_dateInput()|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|
|RadCalendar|get_calendar()|RadDatePicker, RadDateTimePicker|
|RadTimeView|get_timeView()|RadTimePicker, RadDateTimePicker|

In addition, you can access the DOM objects for various parts of the controls using the methods listed below:


| Element | Method | Supported by |
| ------ | ------ | ------ |
|Entire control|get_element()|RadCalendar, RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|
|CalendarPopupButton|get_popupButton()|RadDatePicker, RadDateTimePicker, RadMonthYearPicker|
|TimePopupButton|get_timePopupButton()|RadTimePicker, RadDateTimePicker|
|TextBox of input area|get_textBox()|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|
|DIV for popup calendar|get_popupContainer()|RadDatePicker, RadDateTimePicker, RadMonthYearPicker|
|DIV for popup time view|get_timePopupContainer()|RadTimePicker, RadDateTimePicker|

## Getting and setting the selected date

The **RadCalendar** client object represents dates as triplets. Each triplet is an array of three integer values, which specify the year, month, and day of a date, in that order.

To get the selected date or dates on a **RadCalendar** control, use the **get_selectedDates()** method. This methods returns an array. If no date is selected, the array has length 0. If the calendar does not support multi-select mode, then the array has at most one element. Each date in the array is a triplet:

````JavaScript
	     <script type="text/javascript">
	        var calendar = $find("<%= RadCalendar1.ClientID %>");
	        var dates = calendar.get_selectedDates();
	        for (int i = 0; i < dates.length; i++)
	        {
	            var date = dates[i];
	            var year = date[0];
	            var month = date[1];
	            var day = date[2];
	            if (year < 2000)
	            calendar.unselectDate(date);
	        }
		 </script>
````



To set the selected date on a **RadCalendar** control, use the **selectDate()** or **selectDates()** method:

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



To get the selected date on a **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker**, or**RadMonthYearPicker** control, use the **get_selectedDate** method. This method returns a Date object. To set the selected date, use the **set_selectedDate** method:

````JavaScript
	       <script type="text/javascript">
	           function incrementDate(picker) {
	               var date = picker.get_selectedDate();
	               date.setDate(date.getDate() + 1);
	               picker.set_selectedDate(date);
	           }
		   </script>		
````



On **RadTimeView** and **RadDateTimeView**, you can also use the **getTime** and **setTime** methods of the embedded **RadTimeView**:

````JavaScript
	      <script type="text/javascript">
	          function getTime() {
	              var picker = $find("<%=RadDateTimePicker1.ClientID%>");
	              var view = picker.get_timeView();
	              alert(view.getTime());
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
|get_minDate()|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|Returns the minimum date as a Date object.|
|set_minDate(date)|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|If the date is valid, sets the minimum date.|
|get_maxDate()|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|Returns the maximum date as a Date object.|
|set_maxDate(date)|RadDatePicker, RadTimePicker, RadDateTimePicker, RadMonthYearPicker|If the date is valid, sets the maximum date.|

## Clearing selected values

On **RadCalendar**, you can unselect individual dates using the **unselectDate** or **unselectDates** method:

````JavaScript
	     <script type="text/javascript">
	         function clearCalendar() {
	             var calendar = $find("<%= RadCalendar1.ClientID %>");
	             var dates = calendar.get_selectedDates();
	             calendar.unselectDates(dates);
	         }
	  	 </script>		
````



On **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker** and **RadMonthYearPicker** you can use the **clear()** method:

````JavaScript
	     <script type="text/javascript">
	         function clearPickers() {
	             var datepicker = $find("<%= RadDatePicker1.ClientID %>");
	             datepicker.clear();
	             var timepicker = $find("<%= RadTimePicker1.ClientID %>");
	             timepicker.clear();
	             var datetimepicker = $find("<%= RadDateTimePicker1.ClientID %>");
	             datetimePicker.clear();
	             var monthyearpicker = $find("<%= RadMonthYearPicker1.ClientID %>");
	             monthyearpicker.clear();
	         }
	     </script>	
````



## Enabling and disabling the RadDatePicker, RadTimePicker, RadDateTimePicker or RadMonthYearPicker controls

To enable or disable a **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker** or **RadMonthYearPicker** control, you need to call the **set_enabled**(true/false) client-side method of the Picker client-side object:



````JavaScript
	     
	
	   <telerik:RadScriptManager id="RadScriptManager1" runat="server"></telerik:RadScriptManager>
	   <telerik:RadDatePicker ID="RadDatePicker1" runat="server"></telerik:RadDatePicker>
	   <br />
	   <script type="text/javascript">
	       function disable() {
	           var picker = $find("<%= RadDatePicker1.ClientID %>");
	           picker.set_enabled(false);
	       }
	       function enable() {
	           var picker = $find("<%= RadDatePicker1.ClientID %>");
	           picker.set_enabled(true);
	       }        
	   </script>
	   <input type="button" value="disable" onclick="disable()" />
	   <input type="button" value="enable" onclick="enable()" />
````



## Showing and hiding the popup

The **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker** and **RadMonthYearPicker** objects include a number of methods for showing and hiding the popup controls:


| Method | Supported By | Description |
| ------ | ------ | ------ |
|showPopup()|RadDatePicker, RadDateTimePicker, RadMonthYearPicker|Displays the popup calendar. Optionally you can specify a position for the popup.|
|hidePopup()|RadDatePicker, RadDateTimePicker, RadMonthYearPicker|Hides the popup calendar if it is visible.|
|togglePopup()|RadDatePicker, RadDateTimePicker, RadMonthYearPicker|Hides the popup calendar if it is visible and shows the popup if it is not.|
|showTimePopup()|RadTimePicker, RadDateTimePicker|Displays the popup time view. Optionally you can specify a position for the popup.|
|hideTimePopup()|RadTimePicker, RadDateTimePicker|Hides the popup time view if it is visible.|
|toggleTimePopup()|RadTimePicker, RadDateTimePicker|Hides the popup time view if it is visible and shows the popup if it is not.|

# See Also

 * [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%})

 * [RadDatePicker object]({%slug calendar/client-side-programming/raddatepicker-object%})

 * [RadTimePicker object]({%slug calendar/client-side-programming/radtimepicker-object%})

 * [RadDateTimePicker object]({%slug calendar/client-side-programming/raddatetimepicker-object%})

 * [RadTimeView object]({%slug calendar/client-side-programming/radtimeview-object%})
