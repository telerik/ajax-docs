---
title: Fluid and Elastic Capabilities
page_title: Fluid and Elastic Capabilities - RadCalendar
description: Check our Web Forms article about Fluid and Elastic Capabilities.
slug: calendar/mobile-support/fluid-and-elastic-capabilities
tags: fluid,and,elastic,capabilities
published: True
position: 1
---

# Fluid and Elastic Capabilities



The [ASP NET AJAX Calendar](https://www.telerik.com/products/aspnet-ajax/calendar.aspx) including the picker controls provide elastic and fluid capabilities which allow keeping the control’s component proportion on different mobile devices.

@[template](/_templates/common/font-size-notes.md#note-and-example "control: RadCalendar")

## Fluid capability

The **fluid** capabilities are simply achievable by setting the control’s width in **percentages**.

## Elastic capability

To take advantage **elastic** functionality advantage you could set a specific **font size** based on the application target **mobile device** and follow three simple steps to transform the **RadCalendar/Picker** controls to be **elastic**:

1. By using specific CSS selectors apply "**1em**" font size for all the **Calendar** components like this:
````ASPNET
<style type="text/css">
    /*Calednar*/ html .RadCalendar,
    /*MonthYearPicker, RadDatePicker FastNavigation Popup*/ html .RadCalendarMonthView,
    /*TimeView Popup*/ html .RadCalendarTimeView,
    /*Input, DateInput*/ html .RadInput, html .riTextBox,
    html .RadPicker {
        font-size: 1em;
    }
</style>
````



2. Set the **RenderMode** property of the **Calendar**, **DatePicker**, **DateTimePicker**, **MonthYearPicker** controls to "**Lightweight**"
````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server" RenderMode="Lightweight" AutoPostBack="true">
    <SpecialDays>
        <telerik:RadCalendarDay Repeatable="Today" ItemStyle-CssClass="rcToday"></telerik:RadCalendarDay>
        <telerik:RadCalendarDay Repeatable="DayInMonth" Date="6/19/2014" ItemStyle-CssClass="rcSelected"></telerik:RadCalendarDay>
        <telerik:RadCalendarDay Repeatable="DayInMonth" Date="6/17/2014" ItemStyle-CssClass="rcHover"></telerik:RadCalendarDay>
    </SpecialDays>
</telerik:RadCalendar>
<telerik:RadCalendar ID="RadCalendar2" runat="server" RenderMode="Lightweight" AutoPostBack="true" MultiViewColumns="2" MultiViewRows="2">
</telerik:RadCalendar>
````



3. Set the picker components **width** in "**em**". In order to keep the default calendar/pickers **proportion** on mobile devices we would suggest you to set **width="13.3333em"** as the default width of the components is "**160px**" and the font-size is originally set to "**12px**"See the both images bellow that presents the control's **elastic** capability

	* DatePicker control's rendering in case the body font size is set to 12px
	![mobile-support-12px](images/mobile-support-12px.png)

	* DatePicker control's rendering in case the body font size is set to 18px
	![mobile-support-18px](images/mobile-support-18px.png)


# See Also

@[template](/_templates/common/font-size-notes.md#related-resources)
