---
title: OnDateSelected
page_title: OnDateSelected | RadCalendar for ASP.NET AJAX Documentation
description: OnDateSelected
slug: calendar/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 5
---

# OnDateSelected



## 

The **OnDateSelected** client-side event handler is called immediately after the value of the control's selection has changed.

>note The **OnDateSelected** event is supported by: **RadCalendar** , **RadDatePicker** , **RadTimePicker** , and **RadDateTimePicker** .
>


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnDateSelected event arguments object for **RadCalendar**


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_renderDay()** |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object for the day that was just selected or unselected.|OnDateSelected event arguments object for **RadDatePicker**, **RadTimePicker** and**RadDateTimePicker**


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldValue()** |string||Returns the old value of the control, formatted as a string.|
| **get_newValue()** |string||Returns the new value of the control, formatted as a string|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|

The following example shows the **OnDateSelected** event for **RadCalendar**:

````ASPNET
	<script type="text/javascript">
	    function DateSelected(sender, eventArgs) {
	        var date = eventArgs.get_renderDay().get_date();
	        var dfi = sender.DateTimeFormatInfo;
	        var formattedDate = dfi.FormatDate(date, dfi.ShortDatePattern);
	        alert(formattedDate + " was just " + 
	        (eventArgs.get_renderDay().get_isSelected() ? "selected. " : "unselected. "));
	    }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	    <ClientEvents OnDateSelected="DateSelected" />
	</telerik:RadCalendar>			
````



The following example shows the **OnDateSelected** event for **RadDatePicker**. The **OnDateSelected** event works the same way for **RadTimePicker** and **RadDateTimePicker**.

````ASPNET
	 <script type="text/javascript">
	     function DateSelected(sender, eventArgs) {
	         alert("The date was just changed from " +
	        eventArgs.get_oldValue() + " to " + eventArgs.get_newValue());
	     }
	</script>
	<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
	    <ClientEvents OnDateSelected="DateSelected" />
	</telerik:RadDatePicker>		
````



# See Also

 * [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})

 * [OnClientTimeSelected]({%slug calendar/client-side-programming/events/onclienttimeselected%})

 * [SelectionChanged]({%slug calendar/server-side-programming/server-side-events/selectionchanged%})

 * [SelectedDateChanged]({%slug calendar/server-side-programming/server-side-events/selecteddatechanged%})
