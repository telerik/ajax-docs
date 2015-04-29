---
title: Customizing the Embedded Controls
page_title: Customizing the Embedded Controls | RadCalendar for ASP.NET AJAX Documentation
description: Customizing the Embedded Controls
slug: calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/customizing-the-embedded-controls
tags: customizing,the,embedded,controls
published: True
position: 0
---

# Customizing the Embedded Controls



The **RadDatePicker**, **RadDateTimePicker** and
**RadTimePicker** controls are composite objects, containing an
embedded **RadDateInput** control (where the user can type values
directly), a **CalendarPopupButton** and/or
**TimePopupButton** (that displays or hides the popup control or
controls) and a **RadCalendar** and/or
**RadTimeView** control. All of these embedded controls can be
customized, just as you can customize a standalone
**RadDateInput** or **RadCalendar** control.

To customize the embedded controls, simply locate the property for the
embedded control in the **Behavior** section of the properties
pane for the **RadDatePicker**,
**RadDateTimePicker** or **RadTimePicker** control,
expand it, and set its properties accordingly. The following table lists the
properties for accessing the embedded controls:


| Embedded control | Parent control | Property to access embedded control |
| ------ | ------ | ------ |
|RadDateInput|RadDatePicker, RadDateTimePicker, RadTimePicker or RadMonthYearPicker|DateInput|
|RadCalendar|RadDatePicker or RadDateTimePicker|Calendar|
|CalendarPopupButton|RadDatePicker or RadDateTimePicker|DatePopupButton|
|RadTimeView|RadDateTimePicker or RadTimePicker|TimeView|
|TimePopupButton|RadDateTimePicker or RadTimePicker|TimePopupButton|
|RadMonthYearView|RadMonthYearPicker|MonthYearView|
|DatePopupButton|RadMonthYearPicker|DatePopupButton|

Modifying a child control's settings allows for greater flexibility when
configuring the look and feel of the **RadDatePicker**,
**RadDateTimePicker**, **RadTimePicker** or **RadMonthYearPicker**
control – you have complete control over the skins and styles of the
embedded control:

````ASPNET
<telerik:RadDatePicker
     ID="RadDatePicker1"
     runat="server">
     <DateInput Width="100%"></DateInput>
     <Calendar
         CellAlign="Center"
         CellVAlign="Middle"
         DayNameFormat="FirstLetter"
         FirstDayOfWeek="Default"
         MonthLayout="Layout_7columns_x_6rows"
         Orientation="RenderInRows"
         TitleAlign="Center"
         UseColumnHeadersAsSelectors="False"
         ShowRowHeaders="False">
    </Calendar>
    <DatePopupButton 
         CssClass="radPopupImage_Default" 
         BorderColor="#D0E1F2" 
         BorderStyle="Solid" 
         BorderWidth="1px" />
</telerik:RadDatePicker>
````



# See Also

 * [RadDatePicker, RadTimePicker, and RadDateTimePicker Structure]({%slug calendar/getting-started/raddatepicker,-radtimepicker,-and-raddatetimepicker-structure%})

 * [Configuring the Embedded Time View]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/configuring-the-embedded-time-view%})

 * [Using shared RadCalendar/RadTimeView]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/using-shared-radcalendar/radtimeview%})

 * [Formatting Values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/formatting-values%})

 * [ChildrenCreated]({%slug calendar/server-side-programming/server-side-events/childrencreated%})
