---
title: Disabling calendar days
description: Learn how to disable calendar days.
type: how-to
page_title: Disabling calendar days. | RadDatePicker
slug: datepicker-disabling-calendar-days
tags: datepicker, calendar, dispose,
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms DatePicker for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This project demonstrates how you can disable calendar days (e.g. weekend days) in the calendar component of RadDatePicker. 

## Solution

In order to achieve the desired functionality you need to handle both the server-side [`DayRender`]({%slug calendar/server-side-programming/events/dayrender%}) and client-side [`OnDayRender`]({%slug calendar/client-side-programming/events/ondayrender%}) events of the calendar control - the former is necessary for disabling the days on initial page load or postback (the client-side event is not executed on page load) and the latter - for disabling the days on client-side navigation to a different month view. 

The idea is to replace the default cell content (anchor tag) with a span element and modify the appearance of the disabled days - the specific implementation of the server-side and the client-side event handlers varies and can be found in the attached project with inline comments.

````ASP.NET 
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <Calendar  runat="server" OnDayRender="Calendar_OnDayRender">
        <ClientEvents OnDayRender="OnDayRender" />
    </Calendar>
</telerik:RadDatePicker>
````

````JavaScript
function OnDayRender(calendarInstance, args) {
    // convert the date-triplet to a javascript date
    // we need Date.getDay() method to determine 
    // which days should be disabled (e.g. every Saturday (day = 6) and Sunday (day = 0))                
    var jsDate = new Date(args.get_date()[0], args.get_date()[1] - 1, args.get_date()[2]);
    if (jsDate.getDay() == 0 || jsDate.getDay() == 6) {
        var otherMonthCssClass = "rcOutOfRange";
        args.get_cell().className = otherMonthCssClass;
        // replace the default cell content (anchor tag) with a span element 
        // that contains the processed calendar day number -- necessary for the calendar skinning mechanism 
        args.get_cell().innerHTML = "<span>" + args.get_date()[2] + "</span>";
        // disable selection and hover effect for the cell
        args.get_cell().DayId = "";
    }
}
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    //necessary not to repeat the special days on postback
    if (!Page.IsPostBack)
    {
        RadDatePicker1.Calendar.SpecialDays.Clear();
    }
}

// necessary to disable the weekend days on first page load
protected void Calendar_OnDayRender(object sender, Telerik.Web.UI.Calendar.DayRenderEventArgs e)
{
    // modify the cell rendered content for the days we want to be disabled (e.g. every Saturday and Sunday)
    if (e.Day.Date.DayOfWeek == DayOfWeek.Saturday || e.Day.Date.DayOfWeek == DayOfWeek.Sunday)
    {
        // if you are using the skin bundled as a webresource("Default"), the Skin property returns empty string
        string calendarSkin = RadDatePicker1.Calendar.Skin != "" ? RadDatePicker1.Calendar.Skin : "Default";
        string otherMonthCssClass = "rcOutOfRange";

        // clear the default cell content (anchor tag) as we need to disable the hover effect for this cell
        e.Cell.Text = "";
        e.Cell.CssClass = otherMonthCssClass; //set new CssClass for the disabled calendar day cells (e.g. look like other month days here)

        // render a span element with the processed calendar day number instead of the removed anchor -- necessary for the calendar skinning mechanism
        Label label = new Label();
        label.Text = e.Day.Date.Day.ToString();
        e.Cell.Controls.Add(label);

        // disable the selection for the specific day
        RadCalendarDay calendarDay = new RadCalendarDay();
        calendarDay.Date = e.Day.Date;
        calendarDay.IsSelectable = false;
        calendarDay.ItemStyle.CssClass = otherMonthCssClass;
        RadDatePicker1.Calendar.SpecialDays.Add(calendarDay);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    ' necessary not to repeat the special days on postback
    If Not Page.IsPostBack Then
        RadDatePicker1.Calendar.SpecialDays.Clear()
    End If
End Sub

' necessary to disable the weekend days on first page load
Protected Sub Calendar_OnDayRender(ByVal sender As Object, ByVal e As Telerik.Web.UI.Calendar.DayRenderEventArgs)
    ' modify the cell rendered content for the days we want to be disabled (e.g. every Saturday and Sunday)
    If (e.Day.Date.DayOfWeek = DayOfWeek.Saturday Or e.Day.Date.DayOfWeek = DayOfWeek.Sunday) Then
        ' if you are using the skin bundled as a webresource("Default"), the Skin property returns empty string
        Dim calendarSkin = RadDatePicker1.Calendar.Skin
        If (calendarSkin = "") Then
            calendarSkin = "Default"
        End If
        Dim otherMonthCssClass As String = "rcOutOfRange"

        ' clear the default cell content (anchor tag) as we need to disable the hover effect for this cell
        e.Cell.Text = ""
        e.Cell.CssClass = otherMonthCssClass ' set new CssClass for the disabled calendar day cells (e.g. look like other month days here)

        ' render a span element with the processed calendar day number instead of the removed anchor -- necessary for the calendar skinning mechanism 
        Dim label As Label = New Label
        label.Text = e.Day.Date.Day.ToString
        e.Cell.Controls.Add(label)

        ' disable the selection for the specific day
        Dim calendarDay As RadCalendarDay = New RadCalendarDay
        calendarDay.Date = e.Day.Date
        calendarDay.IsSelectable = False
        calendarDay.ItemStyle.CssClass = otherMonthCssClass
        RadDatePicker1.Calendar.SpecialDays.Add(calendarDay)
    End If
End Sub
````

    
