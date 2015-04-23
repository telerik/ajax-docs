---
title: Migrating from RadCalendar ASP.NET to ASP.NET AJAX
page_title: Migrating from RadCalendar ASP.NET to ASP.NET AJAX | RadCalendar for ASP.NET AJAX Documentation
description: Migrating from RadCalendar ASP.NET to ASP.NET AJAX
slug: calendar/migrating-from-radcalendar-asp.net-to-asp.net-ajax
tags: migrating,from,radcalendar,asp.net,to,asp.net,ajax
published: True
position: 2
---

# Migrating from RadCalendar ASP.NET to ASP.NET AJAX



To add **RadCalendar** for ASP.NET AJAX to an existing ASP.NET web application you need to follow these steps:

1. Make sure you have ASP.NET AJAX installed.

1. If your web application is not using ASP.NET AJAX you need to configure it to do so.Detailed instructions can be found at [that address.](http://msdn.microsoft.com/en-us/library/ff647506.aspx)

1. Add a RadScriptManager control to the page (or user control) in which you want to add any control for ASP.NET AJAX.<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />If your page is a content page you can add the RadScriptManager control in your master page.For further details about the RadScriptManager control, see[RadScriptManager](http://www.telerik.com/help/aspnet-ajax/radscriptmanager.html).

1. Drag and drop a control from the UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadCalendar directive<%@ Register Namespace="Telerik.WebControls" TagPrefix="rad" Assembly="RadCalendar.NET2"%>with the new one of RadCalendar for ASP.NET AJAX:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadCalendar "classic" and RadCalendar for ASP.NET AJAX

**RadCalendar for ASP.NET AJAX** has changed, because of moving to the ASP.NET AJAX framework and to the Telerik.Web.UI suite. All of the client-side properties and methods' names have changed.

## Client-side API changes

The signature for client-side events has been unified, so that all event handlers have at most two arguments:

1. The first argument (sender) points to the client instance of the object firing the event.

1. The second argument (eventArgs) is a holder for the old arguments passed in the respective handler.

To cancel an event (which can be cancelled) you now call "set_cancel(true)" on the eventArgs argument, as shown in the following example:

````JavaScript
	     <script type="text/javascript">
	         function DateSelecting(sender, eventArgs) {
	             eventArgs.set_cancel(true);
	         }
	     </script>	
````



## RadCalendar object

The following table lists the changes to the client-side **RadCalendar** object:


|  **RadCalendar Classic**  |  **RadCalendar for ASP.NET AJAX**  |
| ------ | ------ |
|GetSelectedDates()|get_selectedDates()|
|GetRangeMinDate()|get_rangeMinDate()|
|SetRangeMinDate()|set_rangeMinDate()|
|GetRangeMaxDate()|get_rangeMaxDate()|
|SetRangeMaxDate()|set_rangeMaxDate()|
|SelectDate()|selectDate()|
|SelectDates()|selectDates()|
|UnselectDate()|unselectDate()|
|UnselectDates()|unselectDates()|
|CalculateDateFromStep()|calculateDateFromStep()|
|NavigateToDate()|navigateToDate()|

## RadDatePicker, RadTimePicker, and RadDateTimePicker objects

The following table lists the changes to the client-side "picker" objects:




|  **RadCalendar Classic**  |  **RadCalendar for ASP.NET AJAX**  |
| ------ | ------ |
|Calendar|get_calendar()|
|TimeView|get_timeView()|
|DateInput|get_dateInput()|
|GetTextBox()|get_textBox()|
|GetPopupContainer()|get_popupContainer()|
|GetTimePopupContainer|get_timePopupContainer()|
|GetDate()|get_selectedDate()|
|SetDate()|set_selectedDate()|
|GetMinDate()|get_minDate()|
|SetMinDate()|set_minDate()|
|GetMaxDate()|get_maxDate()|
|SetMaxDate()|set_maxDate()|
|Clear()|clear()|
|IsEmpty()|isEmpty()|
|TogglePopup()|togglePopup()|
|ToggleTimePopup()|toggleTimePopup()|
|ShowPopup()|showPopup()|
|ShowTimePopup()|showTimePopup()|
|HidePopup()|hidePopup()|
|HideTimePopup()|hideTimePopup()|
|IsPopupVisible()|isPopupVisible()|
|IsTimePopupVisible()|isTimePopupVisible()|
|GetElementDimensions()| *N/A (removed) - Telerik.Web.UI.Calendar.Utils.GetElementDimensions() could be used instead* |
|GetElementPosition()| *N/A (removed) - Telerik.Web.CommonScripts.getLocation() could be used instead* |

## RadTimeView object

The following table lists the changes to the client-side time view objects:




|  **RadCalendar Classic**  |  **RadCalendar for ASP.NET AJAX**  |
| ------ | ------ |
|GetTime()|getTime()|
|SetTime()|setTime()|
|Clear()|clear()|

# See Also

 * [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%})

 * [RadDatePicker object]({%slug calendar/client-side-programming/raddatepicker-object%})

 * [RadTimePicker object]({%slug calendar/client-side-programming/radtimepicker-object%})

 * [RadDateTimePicker object]({%slug calendar/client-side-programming/raddatetimepicker-object%})

 * [RadTimeView object]({%slug calendar/client-side-programming/radtimeview-object%})
