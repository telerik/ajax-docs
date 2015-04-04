---
title: Applying week numbers according to the ISO Standard
page_title: Applying week numbers according to the ISO Standard | UI for ASP.NET AJAX Documentation
description: Applying week numbers according to the ISO Standard
slug: calendar/accessibility-and-internationalization/applying-week-numbers-according-to-the-iso-standard
tags: applying,week,numbers,according,to,the,iso,standard
published: True
position: 5
---

# Applying week numbers according to the ISO Standard



## 

__RadCalendar__ does not apply week numbers according to the ISO standard by default. This is because the ASP.NET Framework itself does not. However, this can be configured easily at runtime:



````ASPNET
	     
	<form id="form2" runat="server">
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <div>
	        <telerik:RadCalendar ID="RadCalendar1" runat="server" FirstDayOfWeek="Monday" />
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

