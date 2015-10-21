---
title: RadTimeView Structure
page_title: RadTimeView Structure | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadTimeView Structure
slug: datetimepicker/getting-started/radtimeview-structure
tags: radtimeview,structure
published: True
position: 3
---

# RadTimeView Structure



The **RadTimeView** control works only as a popup embedded in **RadTimePicker** or **RadDateTimePicker** controls. The main reason to add a **RadTimeView** control from the toolbox to the Web page is when using it as a [shared popup control]({%slug datetimepicker/using-shared-radcalendar-radtimeview%}).

The following image shows the structure of the **RadTimeView** control:
![Overview of RadTimeView structure](images/calendar_overviewtimeviewstructure_001.png)

* **Header** - displays the title of the time view control. You can hide the header using the **ShowHeader** property, or alter its content and appearance using a header [template]({%slug calendar/templates/radtimeview-templates%}).

* **Time Values** - allow the user to select a time value by clicking with the mouse. You can configure the [layout of the time values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/configuring-the-embedded-time-view%}), as well as apply different [styles]({%slug calendar/appearance-and-styling/styles%}) for alternating time values.

* **Footer** - by default has no content, and does not appear, even if the **ShowFooter** property is true. You can provide content to the footer using a [template]({%slug calendar/templates/radtimeview-templates%}).

# See Also

 * [RadCalendar Structure]({%slug calendar/getting-started/radcalendar-structure%})

 * [RadDateTimePicker Structure]({%slug datetimepicker/getting-started/raddatetimepicker-structure%})
