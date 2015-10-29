---
title: Customizing the Embedded Controls
page_title: Customizing the Embedded Controls | RadMonthYearPicker for ASP.NET AJAX Documentation
description: Customizing the Embedded Controls
slug: monthyearpicker/functionality/customizing-embedded-controls
tags: customizing,embedded,controls
published: True
position: 0
---

# Customizing the Embedded Controls



The **RadMonthYearPicker**is a composite object, containing an embedded **RadDateInput** control (where the user can type values directly) and a **MonthYearView**. The **MonthYearPicker** enables you to customize the embedded **DateInput** the same way as you can customize a standalone **RadDateInput** control.
 
To customize the embedded controls, simply locate the property for the embedded control in the **Behavior** section of the properties pane for the **RadDatePicker**, **RadDateTimePicker** or **RadTimePicker** control, expand it, and set its properties accordingly. The following table lists the properties for accessing the embedded controls:


| Embedded control | Property to access embedded control |
| ------ | ------ | ------ |
|RadDateInput|DateInput|
|RadMonthYearView|MonthYearView|
|DatePopupButton|DatePopupButton|



# See Also

 * [Formatting Values]({%slug monthyearpicker/functionality/formatting-values%})

 * [ChildrenCreated]({%slug monthyearpicker/server-side-programming/events/childrencreated%})


