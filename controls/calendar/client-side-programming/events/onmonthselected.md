---
title: OnMonthSelected
page_title: OnMonthSelected | UI for ASP.NET AJAX Documentation
description: OnMonthSelected
slug: calendar/client-side-programming/events/onmonthselected
tags: onmonthselected
published: True
position: 18
---

# OnMonthSelected



## 

The __OnMonthSelected__ client-side event handler is called immediately after a user select a month cell in the MonthYearView.

>note The __OnMonthSelected__ event is supported by: __RadMonthYearPicker__ .
>


The event handler receives two arguments:

1. the [RadMonthYearPicker]({%slug calendar/client-side-programming/radmonthyearpicker-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnMonthSelected event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_newDate()__ |Date object||Returns the new value of the control as a Date object.|
| __get_oldDate()__ |Date object||Returns the old value of the control as a Date object.|
| __get_selectedCell()__ |HTML element||Returns the DOM element for the cell that was clicked.|

The following example uses the __OnMonthSelected__ event to display the previous and the new selected month:

````ASPNET
	        <script type="text/javascript">
	            function OnMonthSelected(sender, eventArgs) {
	                var newMonth = eventArgs.get_newDate().getMonth();
	                var oldMonth = eventArgs.get_oldDate().getMonth();
	                alert("The old selected month was: " + oldMonth + ", and the new selected month is: " + newMonth);
	            }
	        </script>
	
	        <telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server">
	            <ClientEvents OnMonthSelected="OnMonthSelected"  />
	        </telerik:RadMonthYearPicker>	
````



# See Also

 * [OnViewChanged]({%slug calendar/client-side-programming/events/onviewchanged%})

 * [OnYearSelected]({%slug calendar/client-side-programming/events/onyearselected%})
