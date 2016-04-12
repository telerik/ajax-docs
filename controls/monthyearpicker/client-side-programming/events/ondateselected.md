---
title: OnDateSelected
page_title: OnDateSelected | RadMonthYearPicker for ASP.NET AJAX Documentation
description: OnDateSelected
slug: monthyearpicker/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 1
---

# OnDateSelected




The **OnDateSelected** client-side event handler is called immediately after the value of the control's selection has changed.

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:

| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldValue()** |string||Returns the old value of the control, formatted as a string.|
| **get_newValue()** |string||Returns the new value of the control, formatted as a string|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|


````ASPNET
<telerik:RadMonthYearPicker RenderMode="Lightweight" ID="RadMonthYearPicker1" runat="server"  >
    <ClientEvents OnDateSelected="dateSelected" />
</telerik:RadMonthYearPicker>	
````
````JavaScript
function dateSelected(sender, args) {
    alert(args.get_newValue() + " selected");
}
````


# See Also

 * [Client-side Events Overview]({%slug monthyearpicker/client-side-programming/events/overview%})
 
 
