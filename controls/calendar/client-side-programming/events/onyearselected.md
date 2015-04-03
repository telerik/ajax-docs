---
title: OnYearSelected
page_title: OnYearSelected | UI for ASP.NET AJAX Documentation
description: OnYearSelected
slug: calendar/client-side-programming/events/onyearselected
tags: onyearselected
published: True
position: 17
---

# OnYearSelected



## 

The __OnYearSelected__ client-side event handler is called immediately after a user select an year cell in the MonthYearView.

>note The __OnYearSelected__ event is supported by: __RadMonthYearPicker__ .
>


The event handler receives two arguments:

1. the [RadMonthYearPicker]({%slug calendar/client-side-programming/radmonthyearpicker-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnYearSelected event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_newDate()__ |Date object||Returns the new value of the control as a Date object.|
| __get_oldDate()__ |Date object||Returns the old value of the control as a Date object.|
| __get_selectedCell()__ |HTML element||Returns the DOM element for the cell that was clicked.|

The following example uses the __OnYearSelected__ event to display the previous and the new selected year:

````ASPNET
	        <script type="text/javascript">
	            function OnYearSelected(sender, eventArgs) {
	                var newYear = eventArgs.get_newDate().getFullYear();
	                var oldYear = eventArgs.get_oldDate().getFullYear();
	                alert("The old selected year was: " + oldYear + ", and the new selected year is: " + newYear);
	            }
	        </script>
	
	        <telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server">
	            <ClientEvents OnYearSelected="OnYearSelected" />
	        </telerik:RadMonthYearPicker>	
````



# See Also

 * [OnViewChanged]({%slug calendar/client-side-programming/events/onviewchanged%})

 * [OnMonthSelected]({%slug calendar/client-side-programming/events/onmonthselected%})
