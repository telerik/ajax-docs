---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: calendar/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

The __RadCalendar__ controls support a number of client-side events that let you respond to user actions without a postback. The following table lists the various client events, and which controls they apply to:


| Event | Applies to | Description |
| ------ | ------ | ------ |
|[OnInit]({%slug calendar/client-side-programming/events/oninit%})| __RadCalendar__ |Occurs when the calendar setup is finalized (at the end of the calendar constructor).|
|[OnLoad]({%slug calendar/client-side-programming/events/onload%})| __RadCalendar__ |Occurs when a page is loaded on the client.|
|[OnDayRender]({%slug calendar/client-side-programming/events/ondayrender%})| __RadCalendar__ |Occurs immediately before acalendar day cell is displayed when the calendar is rendered as a result of client-side navigation.|
|[OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})| __RadCalendar__ |Occurs immediately before the selected dates collection is updated to reflect the selection or de-selection of a date.|
|[OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})| __RadCalendar__ , __RadDatePicker__ , __RadTimePicker__ , __RadDateTimePicker__ , __RadMonthYearPicker__ |Occurs immediately after the value of the control's selection has been changed.|
|[OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})| __RadCalendar__ |Occurs when the user clicks on a date in the calendar (regardless of whether the date can be selected).|
|[OnCalendarViewChanging]({%slug calendar/client-side-programming/events/oncalendarviewchanging%})| __RadCalendar__ |Occurs when the calendar navigates to a new view, before the viewable area rendered by the calendar is changed.|
|[OnCalendarViewChanged]({%slug calendar/client-side-programming/events/oncalendarviewchanged%})| __RadCalendar__ |Occurs immediately after the calendar navigates to a new view.|
|[OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})| __RadCalendar__ |Occurs when the user clicks on a column header.|
|[OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})| __RadCalendar__ |Occurs when the user clicks on a row header.|
|[OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})| __RadCalendar__ |Occurs when the user clicks on the view selector.|
|[OnPopupOpening]({%slug calendar/client-side-programming/events/onpopupopening%})| __RadDatePicker__ , __RadTimePicker__ , __RadDateTimePicker__ , __RadMonthYearPicker__ |Occurs immediately before a popup is displayed, before the selection in the popup is synchronized with the input area.|
|[OnPopupClosing]({%slug calendar/client-side-programming/events/onpopupclosing%})| __RadDatePicker__ , __RadTimePicker__ , __RadDateTimePicker__ , __RadMonthYearPicker__ |Occurs immediately before the a popup is closed.|
|[OnClientTimeSelected]({%slug calendar/client-side-programming/events/onclienttimeselected%})| __RadTimeView__ |Occurs when the user selects a time in the time view.|
|[OnMonthSelected]({%slug calendar/client-side-programming/events/onmonthselected%})| __RadMonthYearPicker__ |Occurs when the user select month cell.|
|[OnYearSelected]({%slug calendar/client-side-programming/events/onyearselected%})| __RadMonthYearPicker__ |Occurs when the user select year cell.|
|[OnViewChanged]({%slug calendar/client-side-programming/events/onviewchanged%})| __RadMonthYearPicker__ |Occurs when the MonthYearView navigates to a new view, before the viewable area rendered by the MonthYearView is changed.|

>note The embedded __RadDateInput__ object that is used by __RadDatePicker__ , __RadTimePicker__ , and __RadDateTimePicker__ also has a number of client events. See the RadInput documentation for details.
>


To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding property.

````ASPNET
	<script type="text/javascript">
	    function ClientTimeSelected(sender, e) {
	        var oldTime = e.get_oldTime() ? (e.get_oldTime().localeFormat("h:mm tt")) : "";
	        var newTime = e.get_newTime() ? (e.get_newTime().localeFormat("h:mm tt")) : "";
	        var info = "OnClientTimeSelected: " + "oldTime- " + oldTime + ", newTime- " + newTime;
	        alert(info);
	    }
	</script>
	<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
	    <TimeView OnClientTimeSelected="ClientTimeSelected"></TimeView>
	</telerik:RadTimePicker>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	<script type="text/javascript">
	    function onDateClickHandler1()
	    {
	        alert("First handler called");
	    }
	    function onDateClickHandler2()
	    {
	        alert("Second handler called");
	    }
	    function pageLoad()
	    {
	        var calendar = $find(<%=RadCalendar1.ClientID%>);
	        calendar.add_dateClick(onDateClickHandler1);
	        calendar.add_dateClick(onDateClickHandler2);
	    }
	</script>		
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	<script type="text/javascript">
	    function removeDateClick2()
	    {
	        var calendar= $find(<%=RadCalendar1.ClientID%>);
	        calendar.remove_dateClick(onDateClickHandler2);
	    }
	</script>		
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:




| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnInit|init|add_init, remove_init|
|OnLoad|load|add_load, remove_load|
|OnDayRender|dayRender|add_dayRender, remove_dayRender|
|OnDateSelecting|dateSelecting|add_dateSelecting, remove_dateSelecting|
|OnDateSelected|dateSelected|add_dateSelected, remove_dateSelected|
|OnDateClick|dateClick|add_dateClick, remove_dateClick|
|OnCalendarViewChanging|calendarViewChanging|add_calendarViewChanging, remove_calendarViewChanging|
|OnCalendarViewChanged|calendarViewChanged|add_calendarViewChanged, remove_calendarViewChanged|
|OnColumnHeaderClick|columnHeaderClick|add_columnHeaderClick, remove_columnHeaderClick|
|OnRowHeaderClick|rowHeaderClick|add_rowHeaderClick, remove_rowHeaderClick|
|OnViewSelectorClick|viewSelectorClick|add_viewSelectorClick, remove_viewSelectorClick|
|OnPopupOpening|popupOpening|add_popupOpening, remove_popupOpening|
|OnPopupClosing|popupClosing|add_popupClosing, remove_popupClosing|
|OnClientTimeSelecting|clientTimeSelecting|add_clientTimeSelecting, remove_clientTimeSelecting|
|OnClientTimeSelected|clientTimeSelected|add_clientTimeSelected, remove_clientTimeSelected|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
