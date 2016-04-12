---
title: Using ISO Standard Week Numbers
page_title: Using ISO Standard Week Numbers | RadCalendar for ASP.NET AJAX Documentation
description: Using ISO Standard Week Numbers
slug: calendar/accessibility-and-internationalization/using-iso-standard-week-numbers
tags: using,iso,standard,week,numbers
published: True
position: 4
---

# Applying week numbers according to the ISO Standard


**RadCalendar** does not apply week numbers according to the ISO standard by default. This is because the ASP.NET Framework itself does not. However, this can be configured easily at runtime:



````ASPNET
<form id="form2" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    </telerik:RadScriptManager>
    <div>
        <telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server" FirstDayOfWeek="Monday" />
    </div>
</form>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    System.Globalization.CultureInfo c = new System.Globalization.CultureInfo(RadCalendar1.CultureInfo.ToString());
    c.DateTimeFormat.CalendarWeekRule = System.Globalization.CalendarWeekRule.FirstFourDayWeek;
    RadCalendar1.CultureInfo = c;
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    Dim c As New System.Globalization.CultureInfo(RadCalendar1.CultureInfo.ToString())
    c.DateTimeFormat.CalendarWeekRule = System.Globalization.CalendarWeekRule.FirstFourDayWeek
    RadCalendar1.CultureInfo = c
End Sub
````


