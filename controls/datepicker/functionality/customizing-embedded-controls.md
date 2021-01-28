---
title: Customizing the Embedded Controls
page_title: Customizing the Embedded Controls - RadDatePicker
description: Check our Web Forms article about Customizing the Embedded Controls.
slug: datepicker/functionality/customizing-embedded-controls
tags: customizing,the,embedded,controls
published: True
position: 0
---

# Customizing the Embedded Controls



The **RadDatePicker** control is a composite object, containing an embedded **RadDateInput** control (where the user can type values directly), a **CalendarPopupButton** and **RadCalendar** control. All of these embedded controls can be customized, just as you can customize a standalone **RadDateInput** or **RadCalendar** control.
 
To customize the embedded controls, simply locate the property for the embedded control in the **Behavior** section of the properties pane for the **RadDatePicker** control, expand it, and set its properties accordingly. The following table lists the properties for accessing the embedded controls:


| Embedded control | Parent control | Property to access embedded control |
| ------ | ------ | ------ |
|RadDateInput|RadDatePicker, RadDateTimePicker, RadTimePicker or RadMonthYearPicker|DateInput|
|RadCalendar|RadDatePicker or RadDateTimePicker|Calendar|
|CalendarPopupButton|RadDatePicker or RadDateTimePicker|DatePopupButton|


Modifying the settings of a child control provides greater flexibility when configuring the look and feel of the **RadDatePicker** control – you have complete control over the skins and styles of the embedded controls:


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

 * [RadDatePicker Structure]({%slug datepicker/getting-started/raddatepicker-structure%})

 * [Using shared RadCalendar]({%slug datepicker/functionality/using-shared-radcalendar%})

 * [Formatting Values]({%slug datepicker/functionality/formatting-values%})


