---
title: Selected Date
page_title: Selected Date | RadGantt for ASP.NET AJAX Documentation
description: Selected Date
slug: gantt/functionality/selected-date
tags: selected date
published: True
position: 8
---

# SelectedDate



The SelectedDate functionality allows you to navigate the **RadGantt** to the selected date. It can be set globally for the Gantt or for every view separately. There are three ways to set the range: client-side, server-side or inline. 


## Setting the SelectedDate client-side

Sets the selected date of the current view. 

````JavaScript
var gantt = $find("<%=RadGantt1.ClientID %>");
gantt.set_selectedDate(new Date(2016,5,6));
	
````


## Setting the SelectedDate server-side


````C#
	
protected void Page_Load(object sender, EventArgs e) 
{ 
	RadGantt1.WeekView.SelectedDate = DateTime.Now;
	RadGantt1.SelectedDate = DateTime.Now;
}
````
````VB.NET
		
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)

	RadGantt1.WeekView.SelectedDate = DateTime.Now
	RadGantt1.SelectedDate = DateTime.Now

End Sub
	
````


## Setting the SelectedDate inline

````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server"
	DayView-SelectedDate="2014/6/2"
	WeekView-SelectedDate="2014/6/1"
	MonthView-SelectedDate="2014/5/18"
	SelectedDate="2014/6/1" >
</telerik:RadGantt>
````


# See Also

 * [Range and SelectedDate online demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/selected-date-and-range/defaultcs.aspx)






