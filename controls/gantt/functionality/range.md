---
title: Range
page_title: Range | RadGantt for ASP.NET AJAX Documentation
description: Range
slug: gantt/functionality/range
tags: range
published: True
position: 7
---

# Range



The range functionality allows you to define the visible timeline range of the **RadGantt**. It can be set globally for the Gantt or for every view separately. There are three ways to set the range: client-side, server-side or inline. 


## Setting the Range client-side

Sets the visible range of the current view. 

````JavaScript
var gantt = $find("<%=RadGantt1.ClientID %>");
gantt.set_rangeStart(new Date(2016,5,6));
gantt.set_rangeEnd(new Date(2016,5,8));
	
````


## Setting the Range server-side



````C#
	
protected void Page_Load(object sender, EventArgs e) 
{ 
	RadGantt1.WeekView.RangeStart = DateTime.Now;
	RadGantt1.WeekView.RangeEnd = DateTime.Now.AddDays(14);
	RadGantt1.RangeStart = DateTime.Now;
	RadGantt1.RangeEnd = DateTime.Now.AddDays(14);
}
````
````VB.NET
		
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)

	RadGantt1.WeekView.RangeStart = DateTime.Now
	RadGantt1.WeekView.RangeEnd = DateTime.Now.AddDays(14)
	RadGantt1.RangeStart = DateTime.Now
	RadGantt1.RangeEnd = DateTime.Now.AddDays(14)

End Sub
	
````


## Setting the Range inline

````ASPNET
<telerik:RadGantt ID="RadGantt2" runat="server"
    DayView-RangeStart="2014/6/2" DayView-RangeEnd="2014/6/8"
    WeekView-RangeStart="2014/6/1" WeekView-RangeEnd="2014/7/13"
    MonthView-RangeStart="2014/5/18" MonthView-RangeEnd="2014/8/3"
    RangeStart="2014/6/1" RangeEnd="2014/7/13">
</telerik:RadGantt>
````


# See Also

 * [Range and SelectedDate online demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/selected-date-and-range/defaultcs.aspx)






