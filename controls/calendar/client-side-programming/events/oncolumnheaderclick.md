---
title: OnColumnHeaderClick
page_title: OnColumnHeaderClick - RadCalendar
description: Check our Web Forms article about OnColumnHeaderClick.
slug: calendar/client-side-programming/events/oncolumnheaderclick
tags: oncolumnheaderclick
published: True
position: 9
---

# OnColumnHeaderClick



The **OnColumnHeaderClick** client-side event handler is called when the user is about to select a column of dates by clicking on a column header. The event occurs only if the **ShowColumnHeaders** and **UseColumnHeadersAsSelectors** properties are set to **true**.


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnColumnHeaderClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_index()** |int||Returns the 1-based index of the column that was clicked.|
| **get_domElement()** |HTML element||Returns the DOM element for the column header that was clicked.|
| **set_cancel(value)** ||bool|Lets you prevent the click from selecting the column of dates.|

The following example uses the **OnColumnHeaderClick** event to confirm the selection:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server">
	<ClientEvents OnColumnHeaderClick="confirmColumnSelection" />
</telerik:RadCalendar>
````
````JavaScript
function confirmColumnSelection(sender, eventArgs) {
	var msg = "Do you want to change the selection for column " + eventArgs.get_index();
	var title = eventArgs.get_domElement().title;

	if (title != "") {
		msg = msg + " (" + title + ")";
	}

	msg = msg + "?";
	eventArgs.set_cancel(!confirm(msg));
}
````


# See Also

 * [OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})

 * [OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
