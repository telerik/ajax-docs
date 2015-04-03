---
title: OnDateSelected
page_title: OnDateSelected | UI for ASP.NET AJAX Documentation
description: OnDateSelected
slug: calendar/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 5
---

# OnDateSelected



## 

The __OnDateSelected__ client-side event handler is called immediately after the value of the control's selection has changed.

>note The __OnDateSelected__ event is supported by: __RadCalendar__ , __RadDatePicker__ , __RadTimePicker__ , and __RadDateTimePicker__ .
>


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnDateSelected event arguments object for __RadCalendar__


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_renderDay()__ |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object for the day that was just selected or unselected.|OnDateSelected event arguments object for __RadDatePicker__, __RadTimePicker__ and__RadDateTimePicker__


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_oldValue()__ |string||Returns the old value of the control, formatted as a string.|
| __get_newValue()__ |string||Returns the new value of the control, formatted as a string|
| __get_oldDate()__ |Date object||Returns the old value of the control as a Date object.|
| __get_newDate()__ |Date object||Returns the new value of the control as a Date object.|

The following example shows the __OnDateSelected__ event for __RadCalendar__:

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



The following example shows the __OnDateSelected__ event for __RadDatePicker__. The __OnDateSelected__ event works the same way for __RadTimePicker__ and __RadDateTimePicker__.

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
