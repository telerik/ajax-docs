---
title: Customizing the Embedded Controls
page_title: Customizing the Embedded Controls - RadDateTimePicker
description: Check our Web Forms article about Customizing the Embedded Controls.
slug: datetimepicker/functionality/customizing-the-embedded-controls
tags: customizing,the,embedded,controls
published: True
position: 0
---

# Customizing the Embedded Controls



The **RadDateTimePicker** control is a composite object, containing an embedded **RadDateInput** control (where the user can type values directly), a **CalendarPopupButton** and **TimePopupButton**, **RadCalendar** and **RadTimeView** controls. All of these embedded controls can be customized, just as you can customize a standalone **RadDateInput** or **RadCalendar** control.
 
To customize the embedded controls, simply locate the property for the embedded control in the **Behavior** section of the properties pane for the **RadDateTimePicker** control, expand it, and set its properties accordingly. The following table lists the properties for accessing the embedded controls:


| Embedded control | Parent control | Property to access embedded control |
| ------ | ------ | ------ |
|RadDateInput|RadDatePicker, RadDateTimePicker, RadTimePicker or RadMonthYearPicker|DateInput|
|RadCalendar|RadDatePicker or RadDateTimePicker|Calendar|
|CalendarPopupButton|RadDatePicker or RadDateTimePicker|DatePopupButton|
|RadTimeView|RadDateTimePicker or RadTimePicker|TimeView|
|TimePopupButton|RadDateTimePicker or RadTimePicker|TimePopupButton|

Modifying the settings of a child control provides greater flexibility when configuring the look and feel of the **RadDateTimePicker** control – you have complete control over the skins and styles of the embedded control:

````ASPNET
<telerik:RadDateTimePicker
    ID="RadDateTimePicker1"
    runat="server">
    <DateInput 
        SelectionOnFocus="CaretToBeginning"></DateInput>
    <Calendar
        DayNameFormat="FirstLetter"
        FirstDayOfWeek="Monday"
        ShowRowHeaders="False">
    </Calendar>
    <DatePopupButton
        ToolTip="select date" />
    <TimePopupButton
        ToolTip="select time" />
</telerik:RadDateTimePicker>
````



# See Also

 * [RadDatePicker Structure]({%slug datepicker/getting-started/raddatepicker-structure%})

 * [Configuring the Embedded Time View]({%slug datetimepicker/functionality/configuring-the-embedded-time-view%})

 * [Using shared RadCalendar/RadTimeView]({%slug datetimepicker/functionality/using-shared-radcalendar-radtimeview%})

 * [Formatting Values]({%slug datetimepicker/functionality/formatting-values%})

 * [ChildrenCreated]({%slug datetimepicker/server-side-programming/events/childrencreated%})
 
 
