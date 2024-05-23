---
title: OnRowHeaderClick
page_title: OnRowHeaderClick - RadCalendar
description: Check our Web Forms article about OnRowHeaderClick.
slug: calendar/client-side-programming/events/onrowheaderclick
tags: onrowheaderclick
published: True
position: 10
---

# OnRowHeaderClick



The **OnRowHeaderClick** client-side event handler of the [ASP NET AJAX Calendar](https://www.telerik.com/products/aspnet-ajax/calendar.aspx) is called when the user is about to select a row of dates by clicking on a row header. The event occurs only if the **ShowRowHeaders** and **UseRowHeadersAsSelectors** properties are set to **true**.

The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnRowHeaderClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_index()** |int||Returns the 1-based index of the column that was clicked.|
| **get_domElement()** |HTML element||Returns the DOM element for the row header that was clicked.|
| **set_cancel(value)** ||bool|Lets you prevent the click from selecting the row of dates.|

The following example uses the **OnRowHeaderClick** event to confirm the selection:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server">
    <ClientEvents OnRowHeaderClick="confirmRowSelection" />
</telerik:RadCalendar>
````
````JavaScript
function confirmRowSelection(sender, eventArgs) {
	var msg = "Do you want to change the selection for row " + eventArgs.get_index();
	var title = eventArgs.get_domElement().title;
	
	if (title != "") {
		msg = msg + " (" + title + ")";
	}
		
	msg = msg + "?";
	eventArgs.set_cancel(!confirm(msg));
}
````


# See Also

 * [OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})

 * [OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
