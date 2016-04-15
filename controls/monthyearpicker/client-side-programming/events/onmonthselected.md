---
title: OnMonthSelected
page_title: OnMonthSelected | RAdMonthYearPicker for ASP.NET AJAX Documentation
description: OnMonthSelected
slug: monthyearpicker/client-side-programming/events/onmonthselected
tags: onmonthselected
published: True
position: 4
---

# OnMonthSelected


The **OnMonthSelected** client-side event handler is called immediately after a user select a month cell in the **MonthYearView**.

The event handler receives two arguments:

1. the [RadMonthYearPicker]({%slug monthyearpicker/client-side-programming/radmonthyearpicker-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnMonthSelected event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_selectedCell()** |HTML element||Returns the DOM element for the cell that was clicked.|

The following example uses the **OnMonthSelected** event to display the previous and the new selected month:

````ASPNET
<telerik:RadMonthYearPicker RenderMode="Lightweight" ID="RadMonthYearPicker1" runat="server">
    <ClientEvents OnMonthSelected="onMonthSelected"  />
</telerik:RadMonthYearPicker>	
````
````JavaScript
function onMonthSelected(sender, eventArgs) {
	var newMonth = eventArgs.get_newDate().getMonth();
	var oldMonth = eventArgs.get_oldDate().getMonth();
	
	alert("The old selected month was: " + oldMonth + ", and the new selected month is: " + newMonth);
}
````


# See Also

 * [Client-side Events Overview]({%slug monthyearpicker/client-side-programming/events/overview%})

 * [OnViewChanged]({%slug monthyearpicker/client-side-programming/events/onviewchanged%})

 * [OnYearSelected]({%slug monthyearpicker/client-side-programming/events/onyearselected%})
