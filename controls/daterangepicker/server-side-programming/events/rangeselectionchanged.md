---
title: RangeSelectionChanged
page_title: RangeSelectionChanged - RadDateRangePicker
description: Check our Web Forms article about RangeSelectionChanged.
slug: daterangepicker/server-side-programming/events/rangeselectionchanged
tags: selecteddatechanged
published: True
position: 6
---

# RangeSelectionChanged

**RadDatePicker** provides the **RangeSelectionChanged** server event, which is triggered when the user changes the value of the control and a Postback is done so the change gets submitted to the server.

>note 
The event handler is not called unless the date and/or time actually changes. If the user makes a change that results in the same value (for example, typing a different string that parses to the same value), a postback occurs but the **RangeSelectionChanged** event handler is not triggered.
>


The **RangeSelectionChanged** event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object, but can be cast to the appropriate type.

2. A **RangeSelectionChangedEventArgs** object. This object has the following two properties:

	* **StartDate** is the Start Date value after the change.
    
	* **EndDate** is the End Date value after the change.

You can use this event to respond in server-side code when the user changes the value.

# See Also

 * [Server-side Events Overview]({%slug datepicker/server-side-programming/events/overview%})

 
