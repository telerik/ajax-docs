---
title: OnViewSelectorClick
page_title: OnViewSelectorClick | RadCalendar for ASP.NET AJAX Documentation
description: OnViewSelectorClick
slug: calendar/client-side-programming/events/onviewselectorclick
tags: onviewselectorclick
published: True
position: 11
---

# OnViewSelectorClick



The **OnViewSelectorClick** client-side event handler is called when the user is about to select an entire view of dates by clicking on the view selector. The event occurs only if the **EnableViewSelector** property is set to **true**.

The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnViewSelectorClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_domElement()** |HTML element||Returns the DOM element for the view selector|
| **set_cancel(value)** ||bool|Lets you prevent the click from selecting or unselecting the dates in the current view.|

The following example uses the **OnViewSelectorClick** event to confirm the selection and, if the selection proceeds, to change the appearance of the view selector:

````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server" EnableViewSelector="True" >
    <ClientEvents OnViewSelectorClick="ConfirmSelection" />
</telerik:RadCalendar>	
````
````JavaScript
function ConfirmSelection(sender, eventArgs) {
	eventArgs.set_cancel(!confirm("Do you want to change the selection for the entire view?"));
	
	var dom;
	
	if (!eventArgs.get_cancel()) {
		dom = eventArgs.get_domElement();
		if (dom.innerText == "x")
			dom.innerText = "-";
		else
			dom.innerText = "x";
	}
}
````


# See Also

 * [OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})

 * [OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
