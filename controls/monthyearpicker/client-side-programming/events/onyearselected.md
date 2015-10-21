---
title: OnYearSelected
page_title: OnYearSelected | RadMonthYearPicker for ASP.NET AJAX Documentation
description: OnYearSelected
slug: monthyearpicker/client-side-programming/events/onyearselected
tags: onyearselected
published: True
position: 1
---

# OnYearSelected


The **OnYearSelected** client-side event handler is called immediately after a user select an year cell in the **MonthYearView**.

>note The **OnYearSelected** event is supported by: **RadMonthYearPicker** .
>


The event handler receives two arguments:

1. the [RadMonthYearPicker]({%slug calendar/client-side-programming/radmonthyearpicker-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnYearSelected event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_selectedCell()** |HTML element||Returns the DOM element for the cell that was clicked.|

The following example uses the **OnYearSelected** event to display the previous and the new selected year:

````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server">
    <ClientEvents OnYearSelected="OnYearSelected" />
</telerik:RadMonthYearPicker>	
````
````JavaScript
function OnYearSelected(sender, eventArgs) {
	var newYear = eventArgs.get_newDate().getFullYear();
	var oldYear = eventArgs.get_oldDate().getFullYear();
	
	alert("The old selected year was: " + oldYear + ", and the new selected year is: " + newYear);
}
````


# See Also

 * [Client-side Events Overview]({%slug monthyearpicker/client-side-programming/events/overview%})

 * [OnViewChanged]({%slug monthyearpicker/client-side-programming/events/onviewchanged%})

 * [OnMonthSelected]({%slug monthyearpicker/client-side-programming/events/onmonthselected%})
