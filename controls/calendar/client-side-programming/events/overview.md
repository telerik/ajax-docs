---
title: Overview
page_title: Overview | RadCalendar for ASP.NET AJAX Documentation
description: Overview
slug: calendar/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



The **RadCalendar** controls support a number of client-side events that let you respond to user actions without a postback. The following table lists the various client events, and which controls they apply to:


| Event | Description |
| ------ | ------ |
|[OnInit]({%slug calendar/client-side-programming/events/oninit%})|Occurs when the calendar setup is finalized (at the end of the calendar constructor).|
|[OnLoad]({%slug calendar/client-side-programming/events/onload%})|Occurs when a page is loaded on the client.|
|[OnDayRender]({%slug calendar/client-side-programming/events/ondayrender%})|Occurs immediately before acalendar day cell is displayed when the calendar is rendered as a result of client-side navigation.|
|[OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})|Occurs immediately before the selected dates collection is updated to reflect the selection or de-selection of a date.|
|[OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})|Occurs immediately after the value of the control's selection has been changed.|
|[OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})|Occurs when the user clicks on a date in the calendar (regardless of whether the date can be selected).|
|[OnCalendarViewChanging]({%slug calendar/client-side-programming/events/oncalendarviewchanging%})|Occurs when the calendar navigates to a new view, before the viewable area rendered by the calendar is changed.|
|[OnCalendarViewChanged]({%slug calendar/client-side-programming/events/oncalendarviewchanged%})|Occurs immediately after the calendar navigates to a new view.|
|[OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})|Occurs when the user clicks on a column header.|
|[OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})|Occurs when the user clicks on a row header.|
|[OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})|Occurs when the user clicks on the view selector.|


To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
    <TimeView OnClientTimeSelected="clientTimeSelected"></TimeView>
</telerik:RadTimePicker>
````
````JavaScript
function clientTimeSelected(sender, e) {
	var oldTime = e.get_oldTime() ? (e.get_oldTime().localeFormat("h:mm tt")) : "";
	var newTime = e.get_newTime() ? (e.get_newTime().localeFormat("h:mm tt")) : "";
	var info = "OnClientTimeSelected: " + "oldTime- " + oldTime + ", newTime- " + newTime;
	
	alert(info);
}
````


You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
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
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
function removeDateClick2()
{
    var calendar= $find(<%=RadCalendar1.ClientID%>);
    calendar.remove_dateClick(onDateClickHandler2);
}		
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
