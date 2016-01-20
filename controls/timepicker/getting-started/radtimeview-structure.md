---
title: RadTimeView Structure
page_title: RadTimeView Structure | RadTimePicker for ASP.NET AJAX Documentation
description: RadTimeView Structure
slug: timepicker/getting-started/radtimeview-structure
tags: radtimeview,structure
published: True
position: 3
---

# RadTimeView Structure



The **RadTimeView** control works only as a popup embedded in a **RadTimePicker** or **RadDateTimePicker** controls. The main reason to add a **RadTimeView** control from the toolbox to the Web page is when using it as a [shared popup control]({%slug timepicker/functionality/using-shared-radtimeview%}).

The following diagram shows the structure of the **RadTimeView** control:
![Overview of RadTimeView structure](images/calendar_overviewtimeviewstructure_001.png)

* **Header** - displays the title of the time view control. You can hide the header using the **ShowHeader** property, or alter its content and appearance using a header [template]({%slug timepicker/templates/radtimeview-templates%}).

* **Time Values** - allow the user to select a time value by clicking with the mouse. You can configure the [layout of the time values]({%slug timepicker/functionality/configuring-the-embedded-time-view%}), as well as apply different [styles]({%slug calendar/appearance-and-styling/styles%}) for alternating time values.

* **Footer** - by default has no content, and does not appear, even if the **ShowFooter** property is true. You can provide content to the footer using a [template]({%slug timepicker/templates/radtimeview-templates%}).

# See Also

 * [RadTimePicker Structure]({%slug timepicker/getting-started/radtimepicker-structure%})


