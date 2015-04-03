---
title: Date Range Selection
page_title: Date Range Selection | UI for ASP.NET AJAX Documentation
description: Date Range Selection
slug: calendar/radcalendar/date-range-selection
tags: date,range,selection
published: True
position: 8
---

# Date Range Selection



## 

The __RadCalendar__ control provides an option to select
a range of dates in addition to selecting one or multiple different dates.
To enable the date range selection feature you need to set the
__RangeSelectionMode__ property to one of the following
values:

* __OnKeyHold__ - Allow range selection by pressing __[Shift]__ key and clicking on the date.

* __ConsecutiveClicks__- Allow range selection by clicking consecutively two dates.

By default the __RangeSelectionMode__ property is set to
__None__ which does not allow range selection.



On the client you could get the Start/End range dates by using
the __radCalendar.get_rangeSelectionStartDate()__ and
__radCalendar.get_rangeSelectionEndDate()__ methods. You can set
them programmatically by using __radCalendar.set_datesInRange(startDate,
endDate)__ client-side method.

The below sample demonstrates the client-side methods usage:

````ASPNET
	     
	
	<telerik:RadCalendar runat="server" ID="RadCalendar1" RangeSelectionMode="OnKeyHold" EnableViewSelector="true">
	    <ClientEvents OnDateClick="onDateClick" />
	</telerik:RadCalendar>
	
	<asp:Button runat="server" CssClass="qsfButtonBig" ID="Button2" Text="Set range"
	    OnClientClick="setRanage(); return false;" />
````



````JavaScript
	     
	
	   <telerik:RadCodeBlock runat="server">
	       <script type="text/javascript">
	           function onDateClick(sender, eventArgs) {
	               var radCalendar1 = $find("<%=RadCalendar1.ClientID %>");
	               var startDate = radCalendar1.get_rangeSelectionStartDate();
	               var endDate = radCalendar1.get_rangeSelectionEndDate()
	           }
	
	           function setRanage() {
	               var startDate = new Date(2010, 9, 22);
	               var endDate = new Date(2010, 9, 29);
	               var radCalendar1 = $find("<%=RadCalendar1.ClientID %>");
	               radCalendar1.set_datesInRange(startDate, endDate);
	           }
	       </script>
	   </telerik:RadCodeBlock>
	
				
````



On the server Start/End dates are available through
__RadCalendar.RangeSelectionStartDate__ and
__RadCalendar.RangeSelectionEndDate__ properties.

>note Note that when range selection is done any other date selection will unselect all dates from the range selection
>


To see a live example of the above refer to [
Calendar / Range Selection ](http://demos.telerik.com/aspnet-ajax/calendar/examples/functionality/rangeselection/defaultcs.aspx).
