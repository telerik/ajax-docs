---
title: OnViewSelectorClick
page_title: OnViewSelectorClick | UI for ASP.NET AJAX Documentation
description: OnViewSelectorClick
slug: calendar/client-side-programming/events/onviewselectorclick
tags: onviewselectorclick
published: True
position: 11
---

# OnViewSelectorClick



## 

The __OnViewSelectorClick__ client-side event handler is called when the user is about to select an entire view of dates by clicking on the view selector. The event occurs only if the __EnableViewSelector__property is set to __true__.

>note The __OnViewSelectorClick__ event is supported by: __RadCalendar__ .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnViewSelectorClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_domElement()__ |HTML element||Returns the DOM element for the view selector|
| __set_cancel(value)__ ||bool|Lets you prevent the click from selecting or unselecting the dates in the current view.|

The following example uses the __OnViewSelectorClick__ event to confirm the selection and, if the selection proceeds, to change the appearance of the view selector:

````ASPNET
	<script type="text/javascript">
	    function ConfirmSelection(sender, eventArgs) {
	        eventArgs.set_cancel(!confirm("Do you want to change the selection for the entire view?"));
	        if (!eventArgs.get_cancel()) {
	            var dom = eventArgs.get_domElement();
	            if (dom.innerText == "x")
	                dom.innerText = "-";
	            else
	                dom.innerText = "x";
	        }
	    }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server" EnableViewSelector="True" >
	    <ClientEvents OnViewSelectorClick="ConfirmSelection" />
	</telerik:RadCalendar>	
````



# See Also

 * [OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})

 * [OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
