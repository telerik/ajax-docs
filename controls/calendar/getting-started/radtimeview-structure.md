---
title: RadTimeView Structure
page_title: RadTimeView Structure | UI for ASP.NET AJAX Documentation
description: RadTimeView Structure
slug: calendar/getting-started/radtimeview-structure
tags: radtimeview,structure
published: True
position: 3
---

# RadTimeView Structure



## 

The __RadTimeView__ control works only as a popup embedded in a __RadTimePicker__ or __RadDateTimePicker__ control. The main reason to add a __RadTimeView__ control from the toolbox to the Web page is when using it as a [shared popup control]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/using-shared-radcalendar/radtimeview%}).

The following diagram shows the structure of the __RadTimeView__ control:![Overview of RadTimeView structure](images/calendar_overviewtimeviewstructure_001.png)

* __Header__ - displays the title of the time view control. You can hide the header using the __ShowHeader__ property, or alter its content and appearance using a header [template]({%slug calendar/templates/radtimeview-templates%}).

* __Time Values__ - allow the user to select a time value by clicking with the mouse. You can configure the [layout of the time values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/configuring-the-embedded-time-view%}), as well as apply different [styles]({%slug calendar/appearance-and-styling/styles%}) for alternating time values.

* __Footer__ - by defaultr has no content, and so does not appear, even if the __ShowFooter__ property is true. You can provide content to the footer using a [template]({%slug calendar/templates/radtimeview-templates%}).

# See Also

 * [RadCalendar Structure]({%slug calendar/getting-started/radcalendar-structure%})

 * [RadDatePicker, RadTimePicker, and RadDateTimePicker Structure]({%slug calendar/getting-started/raddatepicker,-radtimepicker,-and-raddatetimepicker-structure%})
